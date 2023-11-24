import Layout from '../layout/index.vue'
const system =
{
    path: '/system',
    redirect: '/system/user',
    component: Layout,
    meta: { title: '系统管理' },
    children: [
        {
            path: '/user',
            name: 'user',
            component: () => import('../pages/system/user/index.vue'),
            meta: { title: '用户管理' },
        },
        {
            path: '/role',
            name: 'role',
            component: () => import('../pages/system/role/index.vue'),
            meta: { title: '角色管理' },
        },
        {
            path: '/log',
            name: 'log',
            component: () => import('../pages/system/log/index.vue'),
            meta: { title: '日志管理' },
        },
    ],

}

export default system
