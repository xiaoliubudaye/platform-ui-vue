import { RouteRecordRaw } from 'vue-router';

export const coreRoutes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        meta: {
            description: '关于',
            locale: 'page.about',
            requiresAuth: false,
            icon: '',
        },
        component: () => import('@apps/mobile/views/core/about'),
    },
    {
        path: '/theme',
        meta: {
            description: '主题预览',
            locale: 'page.theme',
            requiresAuth: false,
            icon: '',
        },
        component: () => import('@apps/mobile/views/core/theme'),
    },
    {
        path: '/setting',
        meta: {
            description: '设置',
            locale: 'page.about',
            requiresAuth: false,
            icon: '',
        },
        component: () => import('@apps/mobile/views/core/setting'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@apps/mobile/views/core/not-found'),
    },
    {
        path: '/redirect',
        name: 'redirectWrapper',
        meta: {
            requiresAuth: true,
            hideInMenu: true,
        },
        children: [
            {
                path: '/redirect/:path',
                component: () => import('@apps/mobile/views/core/redirect'),
                meta: {
                    requiresAuth: true,
                },
            },
        ],
    },
    {
        path: '/401',
        name: 'page-401',
        component: () => import('@apps/mobile/views/core/401'),
        meta: {
            description: '没权限访问',
            hidden: true,
        },
    },
];
