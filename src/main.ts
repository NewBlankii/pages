import { createApp } from "vue"
import App from './App.vue'
import router from './router/index'
/* 引入createPinia，用于创建pinia */
import { createPinia } from 'pinia'

/* 创建pinia */
const pinia = createPinia()
const app = createApp(App)


/* 使用插件 */{}
app.use(pinia)
app.use(router)//使用vue-router
app.mount("#app")