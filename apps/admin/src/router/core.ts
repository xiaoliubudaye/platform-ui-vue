import { RouteRecordRaw } from 'vue-router';

export const coreRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout-admin',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: '/dashboard',
                name: 'page-dashboard',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/core/dashboard'),
            },
            {
                path: '/workbench',
                name: 'page-workbench',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:dashboard'],
                    description: '工作台',
                },
                component: () => import('@apps/admin/views/core/workbench'),
            },
            {
                path: '401',
                name: 'page-401',
                component: () => import('@apps/admin/views/core/401'),
                meta: {
                    description: '没权限访问',
                    hidden: true,
                },
            },
        ],
    },
];
