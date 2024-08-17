
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from './plugins/element-plus'

const app = createApp(App)

app.use(router)
.use(ElementPlus)

app.mount('#app')
