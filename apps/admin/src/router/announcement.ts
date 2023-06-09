import { RouteRecordRaw } from 'vue-router';

export const announcementRoutes: Array<RouteRecordRaw> = [
    {
        path: '/announcement',
        name: 'layout-admin-announcement',
        meta: {
            description: '管理端布局',
        },
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-announcement-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/announcement/index'),
            },
        ],
    },
];
