import { RouteRecordRaw } from 'vue-router';

export const userRoutes: Array<RouteRecordRaw> = [
    {
        path: '/user',
        name: 'layout-admin-user',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'center',
                name: 'page-user-center',
                meta: {
                    description: '用户中心',
                },
                component: () => import('@apps/admin/views/user/center'),
            },
            {
                path: 'index',
                name: 'page-user-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/user/index'),
            },
        ],
    },
];
