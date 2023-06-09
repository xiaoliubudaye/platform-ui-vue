import { RouteRecordRaw } from 'vue-router';

export const systemRoutes: Array<RouteRecordRaw> = [
    {
        path: '/role',
        name: 'layout-admin-system',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-system-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/system/index'),
            },
        ],
    },
];
