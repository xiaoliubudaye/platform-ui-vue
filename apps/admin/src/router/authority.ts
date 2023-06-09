import { RouteRecordRaw } from 'vue-router';

export const authorityRoutes: Array<RouteRecordRaw> = [
    {
        path: '/authority',
        name: 'layout-admin-authority',
        meta: {
            description: '管理端布局',
        },
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-authority-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/authority/index'),
            },
        ],
    },
];
