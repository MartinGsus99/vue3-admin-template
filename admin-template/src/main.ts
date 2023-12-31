import { createApp } from 'vue'

//引入全局样式
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//导入svg插件配置项
import 'virtual:svg-icons-register'

//全局注册组件
import globalComponents from '@/components'

//引入路由
import router from './router'

//全局图标
// import * as ElIconModules from '@element-plus/icons-vue'

//暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

//引入DataV
import DataVVue3 from '@kjgl77/datav-vue3'
const app = createApp(App)

// for (let iconName in ElIconModules) {
//   app.component(iconName, ElIconModules[iconName])
// }
//引入pinia
import pinia from './store'

//鉴权
import './permission'
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalComponents)
app.use(DataVVue3)
app.mount('#app')
