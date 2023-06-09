import { RouteRecordRaw } from 'vue-router';

export const tagRoutes: Array<RouteRecordRaw> = [
    {
        path: '/tag',
        name: 'layout-admin-tag',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-tag-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/tag/index'),
            },
        ],
    },
];
