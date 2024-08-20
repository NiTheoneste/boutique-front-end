import { ElMessage } from 'element-plus'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { useDateFormat } from '@vueuse/core'

export default {
  methods: {
    isNumeric(x) {
      let str = x.toString();
      if (str.match(/^[0-9]+$/)) return true;
      return false;
    },
    logOut(x) {
      if(confirm("Voulez-vous vraiment deconnecter?")){
        this.$store.state.user = null
        window.location = "/login"
      }
    },
    getGroupsName(groups){
      if(groups.length>0){
        for(let x of groups){
          return x.name
        }
      }else return "-"
    },
    money(x, decimals=2) {
      let cash = parseFloat(x).toFixed(decimals)
      if(isNaN(x) || x == null) return "-";
      return cash.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    getFullName(user){
      if(!user.first_name && !user.last_name)
        return `${user.username}`
      else return `${user.first_name} ${user.last_name}`
    },
    getQuantityBackGroundColor(qt){
      if(qt<=0) return 'red'
      if(qt>0 && qt <5) return 'orange'
      else return 'white'
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
    getDate(date){
      return useDateFormat(date,"YYYY-MM-DD").value
    },
    getTime(date){
      return useDateFormat(date,"HH:mm").value
    },
    getToday(){
      return new Date().toISOString().split("T")[0]
    },
    getDays(debut){
      debut=new Date(debut)
      let fin=new Date()
      return Math.ceil(((((fin-debut)/1000)/3600)/24))
    },
    currentDateTime(){
        var m = new Date()
        var dateString =
         m.getUTCFullYear() +"-"+
         ("0"+(m.getUTCMonth()+1)).slice(-2)  +"-"+
         ("0"+m.getUTCDate()).slice(-2)  + "T" +
         ("0"+(m.getUTCHours()+2)).slice(-2)  +":"+
         ("0"+m.getUTCMinutes()).slice(-2)  + ":" +
         ("0"+m.getUTCSeconds()).slice(-2) 
        return dateString;
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
    truncate(value, length) {
      if (value.length > length) {
        return value.substring(0, length) + "...";
      } else {
        return value;
      }
    },
    active_user_is(...groups){
      let user_groups = this.active_user?.groups
      if(!!this.active_user){
        for (let group of groups) {
          if(user_groups.map(g=>Object.keys(g)[0]).includes(group)){
            return true
          }
        }
      }
      return false
    },
    exportCsv(items){
		let data = "sep=;\n"
		let titles = []
		if(items.length > 0){
			for(let name of Object.keys(items[0])){
				if(name != "appareil"){
					data += (name + ";")
					titles.push(name)
				}
			}
			data += "\n"
			for(let item of items){
				for(let title of titles){
					data += (JSON.stringify(item[title]) + ";")
				}
				data += "\n"
			}
  			window.location = "data:text/csv;base64,77u/" + btoa(data);
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
  userService(name){
      return this.active_user?.attributions?.includes(name)
    },
  },
  computed:{
    active_user(){
      return this.$store.state.user;
    },
    cart_visible(){
      return this.$store.state.cart_visible
    },
    active_fullname(){
      return `${this.active_user?.first_name} ${this.active_user?.last_name}`;
    },
    headers(){
      return {
        headers:{
          "Authorization":"Bearer "+this.$store.state.user.access,
          "Appareil":"web"
        }
      }
    }
  }
}
