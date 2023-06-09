import { RouteRecordRaw } from 'vue-router';

export const announcementRoutes: Array<RouteRecordRaw> = [
    {
        path: '/announcement',
        name: 'announcement-wrapper',
        meta: {
            description: '主布局',
        },
        children: [
            {
                path: '',
                name: 'announcement-page-index',
                meta: {
                    description: '首页',
                },
                component: () => import('@apps/webapp/views/announcement/index'),
            },
            {
                path: '/details',
                name: 'announcement-page-details',
                meta: {
                    description: '详情页',
                },
                component: () => import('@apps/webapp/views/announcement/details'),
            },
        ],
    },
];
