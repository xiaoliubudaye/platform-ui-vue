import { RouteRecordRaw } from 'vue-router';

export const tabsRoutes: Array<RouteRecordRaw> = [
    {
        path: '/tabs/',
        component: () => import('@apps/mobile/views/core/tabs'),
        children: [
            {
                path: 'home',
                component: () => import('@apps/mobile/views/core/home'),
                meta: {
                    description: '首页',
                    locale: 'page.login',
                    requiresAuth: false,
                    icon: '',
                },
            },
            {
                path: 'discover',
                component: () => import('@apps/mobile/views/core/discover'),
                meta: {
                    description: '首页',
                    locale: 'page.login',
                    requiresAuth: false,
                    icon: '',
                },
            },
            {
                path: 'me',
                component: () => import('@apps/mobile/views/core/me'),
                meta: {
                    description: '首页',
                    locale: 'page.login',
                    requiresAuth: false,
                    icon: '',
                },
            },
        ],
    },
];
