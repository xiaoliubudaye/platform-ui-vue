import { RouteRecordRaw } from 'vue-router';

export const roleRoutes: Array<RouteRecordRaw> = [
    {
        path: '/role',
        name: 'layout-admin-role',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-role-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/role/index'),
            },
        ],
    },
];
