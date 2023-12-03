export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'index',
    meta: {
      title: '首页',
      hidden: false,
      icon: 'House',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'analysis',
        meta: {
          title: '大屏数据',
          hidden: false,
          icon: 'Plus',
        },
      },
    ],
    meta: {
      title: '全屏大图',
      hidden: false,
      icon: 'DataLine',
    },
  },
  {
    path: '/sys',
    component: () => import('@/views/sys/user/index.vue'),
    name: 'sys',
    meta: {
      title: '系统管理',
      hidden: false,
      icon: 'Monitor',
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/sys/user/index.vue'),
        name: 'user',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: 'role',
        component: () => import('@/views/sys/role/index.vue'),
        name: 'role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'HelpFilled',
        },
      },
      {
        path: 'log',
        component: () => import('@/views/sys/log/index.vue'),
        name: 'log',
        meta: {
          title: '日志管理',
          hidden: false,
          icon: 'DocumentCopy',
        },
      },
      {
        path: 'password',
        component: () => import('@/views/sys/log/index.vue'),
        name: 'password',
        meta: {
          title: '密码管理',
          hidden: true,
          icon: 'Plus',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: 'Any',
      hidden: true,
    },
  },
]
