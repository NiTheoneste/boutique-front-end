
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from './plugins/element-plus'
import vuetify from "./plugins/vuetify"
import {axiosService} from "./plugins/axios"

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)
window.axios = axiosService

app.use(router)
.use(ElementPlus)
.use(vuetify)

app.mount('#app')
