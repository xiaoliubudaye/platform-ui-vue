import { RouteRecordRaw } from 'vue-router';

export const organizationRoutes: Array<RouteRecordRaw> = [
    {
        path: '/organization',
        name: 'layout-admin-organization',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-organization-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/organization/index'),
            },
        ],
    },
];
