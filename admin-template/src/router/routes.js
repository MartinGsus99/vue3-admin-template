import Layout from '../layout/index.vue'
import system from './system'
const routes = [
  {
    path: '/',
    redirect: '/index',
    component: Layout,
    meta: { title: '首页' },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../pages/index/index.vue'),
        meta: { title: '首页' },
      },
    ],
  },


  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录', keepAlive: true, requireAuth: false },
    component: () => import('../pages/login/index.vue'),
    hidden: true,
  },

  system,

  {
    path: '/404',
    name: 'Error',
    meta: { title: '404', keepAlive: true, requireAuth: false },
    component: () => import('../pages/404.vue'),
    hidden: true,
  },
]

export default routes
