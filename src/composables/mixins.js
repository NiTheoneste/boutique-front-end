import { ElMessage } from 'element-plus'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDateFormat } from '@vueuse/core'

export default {
  methods: {
    logOut(x) {
      if(confirm("Voulez-vous vraiment deconnecter?")){
        this.$store.state.user = null
        window.location = "/login"
      }
    },
    money(x, decimals=2) {
      let cash = parseFloat(x).toFixed(decimals)
      if(isNaN(x) || x == null) return "-";
      return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    cleanString(str){
      if (!str) return "";
      if(typeof(str)=='object'){
        let string = ""
        for( let [clef, valeur] of Object.entries(str)){
          if(typeof(valeur)=='object'){
            let child = ""
            for( let [key, value] of Object.entries(valeur)){
              child += `${value}. `
            }
            valeur = child;
          }
          string+=`"${clef}": ${valeur}. `
        }
        return string;
      };
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
    },
    datetime(x) {
      if(!x) return "-"
      let date = new Date(x);
      return new Intl.DateTimeFormat(
        'en-GB',
        { dateStyle: 'short', timeStyle: 'short' }
      ).format(date)
    },
    errorOrRefresh(error, callback, substitution_error_msg){
      if(error.response?.data?.code == "token_not_valid"){ 
        let refresh = this.$store.state.user.refresh
        if(!refresh){
          this.$store.state.user = null;
          return
        }
        axios.post(this.url+"/refresh/", {"refresh":refresh})
        .then((response) => {
          this.$store.state.user.access = response.data.access
          if(typeof callback == "function") callback()
        }).catch((error) => {
          this.$store.state.user = null;
          this.$router.push('/login_form')
          console.error(error)
          this.$store.state.alert = {
            type:"danger", message:this.cleanString("La session a expirée")
          }
        })
      } else {
        console.error(error)
        let error_msg = error.response?.data?.message || error.response?.data || "Erreur inconnue"
         this.useNotifyError(this.cleanString(error_msg))
      }
    },
  	useNotifySuccess(message){
  		ElMessage({
  			message: message,
  			type: 'success',
  			duration: 4000,
  		})
  	},
  	useNotifyError(message){
  		ElMessage({
  			message: message,
  			type: 'error',
  			duration: 4000
  		})
  	},
  	useNotifyWarning(message){
  		ElMessage({
  			message: message,
  			type: 'warning',
  			duration: 4000
  		})
  	},
    toggleNav() {
        this.$store.state.rail = !this.$store.state.rail
    },
  },
  computed:{
    active_user(){
      return this.$store.state.user;
    },
  }
}
