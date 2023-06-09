import { RouteRecordRaw } from 'vue-router';

export const areaRoutes: Array<RouteRecordRaw> = [
    {
        path: '/area',
        name: 'layout-admin-area',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-area-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/area/index'),
            },
        ],
    },
];
