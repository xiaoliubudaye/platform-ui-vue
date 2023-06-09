import { RouteRecordRaw } from 'vue-router';

export const posterRoutes: Array<RouteRecordRaw> = [
    {
        path: '/poster',
        name: 'layout-admin-poster',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-poster-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/poster/index'),
            },
        ],
    },
];
