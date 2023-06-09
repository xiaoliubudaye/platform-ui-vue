import { RouteRecordRaw } from 'vue-router';

export const announcementRoutes: Array<RouteRecordRaw> = [
    {
        path: '/announcement',
        name: 'announcement-layout-wrapper',
        children: [
            {
                path: '',
                name: 'page-announcement-index',
                meta: {
                    description: '首页',
                },
                component: () => import('@apps/mobile/views/announcement/index'),
            },
            {
                path: '/details',
                name: 'page-announcement-details',
                meta: {
                    description: '关于我们',
                },
                component: () => import('@apps/mobile/views/announcement/details'),
            },
        ],
    },
];
