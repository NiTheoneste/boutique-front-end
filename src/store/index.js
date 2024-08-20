import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    url:"/api",
    rail:false,
    appName:"KIC-BOUTIQUE",
    products: [
      {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
      },
      {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
      },
      {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
      },
      {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
      },
      ]
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
