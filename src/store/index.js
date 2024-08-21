import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    url:"/api",
    rail:false,
    appName:"KIC-BOUTIQUE",
    products: [],
    edit_scope:null
  },
  computed: {
    accessToken() {
      return user.access
    },
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
