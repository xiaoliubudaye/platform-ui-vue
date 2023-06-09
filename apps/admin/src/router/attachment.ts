import { RouteRecordRaw } from 'vue-router';

export const attachmentRoutes: Array<RouteRecordRaw> = [
    {
        path: '/attachment',
        name: 'layout-admin-attachment',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-attachment-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/attachment/index'),
            },
        ],
    },
];
