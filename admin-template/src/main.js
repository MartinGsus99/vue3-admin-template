import { createApp } from 'vue'

import './styles/index.less'
import App from './App.vue'
import store from './store'
import router from './router'

import ElementPlus from 'element-plus'
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入element-plus图标


const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount("#app") 