import { RouteRecordRaw } from 'vue-router';

export const showcaseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/showcase',
        name: 'wrapper-showcase',
        meta: {
            description: '开发示例专用',
            requiresAuth: false,
        },
        children: [
            {
                path: '',
                name: 'page-showcase-index',
                component: () => import('@apps/mobile/views/showcase/index'),
            },
            {
                path: 'slider',
                name: 'page-showcase-slider',
                component: () => import('@apps/mobile/views/showcase/slider'),
            },
        ],
    },
];
