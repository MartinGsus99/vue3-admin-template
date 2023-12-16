//路由鉴权：项目路由能否被访问，什么情况能访问
import router from '@/router'
import NProgress from 'nprogress'
import setting from './setting'
import 'nprogress/nprogress.css'

//引入用户小仓库，确认用户是否登录
import pinia from './store'
import useUserStore from './store/modules/user'
//使用小仓库需要先引入大仓库pinia
let userStore = useUserStore(pinia)
//关闭圈圈
NProgress.configure({ showSpinner: false })

//全局守卫：项目中任意路由切换都会触发的钩子
//全局前置守卫:访问某一个路由之前触发的钩子
//to：将要访问的路由
//from：从哪个路由来
//next:函数
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.tittle}-${to.meta.title}`
  NProgress.start()

  let token = userStore.token
  let username = userStore.username

  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        //有用户信息，放行
        next()
      } else {
        //无用户信息，发起请求
        try {
          await userStore.userInfor()
          next()
        } catch (error) {
          //token过期/用户修改本地token，跳转到login
          userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }

    //用户登陆成功：不能访问Login，指向首页，其余的都能访问
  } else {


    //用户登录失败跳转登录页面
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

//全局后置守卫
router.afterEach((to: any, from: any) => {
  NProgress.done()
})

//Q1:进度条
//Q2:路由鉴权：路由组件访问权限
//用户未登录：可以访问Login，其余都不能访问
//用户登陆成功：不能访问Login，指向首页，其余的都能访问
//用户登录失败跳转登录页面
