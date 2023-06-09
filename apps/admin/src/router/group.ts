import { RouteRecordRaw } from 'vue-router';

export const groupRoutes: Array<RouteRecordRaw> = [
    {
        path: '/group',
        name: 'layout-admin-group',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-group-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/group/index'),
            },
        ],
    },
];
