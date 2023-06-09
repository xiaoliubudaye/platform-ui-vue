import { RouteRecordRaw } from 'vue-router';

export const positionRoutes: Array<RouteRecordRaw> = [
    {
        path: '/position',
        name: 'layout-admin-position',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-position-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/position/index'),
            },
        ],
    },
];
