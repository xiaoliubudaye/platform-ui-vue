import { RouteRecordRaw } from 'vue-router';

export const coreRoutes: Array<RouteRecordRaw> = [
    {
        path: '/register',
        name: 'page-register',
        meta: {
            description: '注册页',
        },
        component: () => import('@apps/webapp/views/core/register'),
    },
    {
        path: '/theme',
        meta: {
            description: '主题预览',
            locale: 'page.theme',
            requiresAuth: false,
            icon: '',
        },
        component: () => import('@apps/webapp/views/core/theme'),
    },
    {
        path: '/',
        name: 'layout-main-wrapper',
        meta: {
            description: '主布局',
        },
        component: () => import('@apps/webapp/layouts/MainLayout'),
        children: [
            {
                path: '/home',
                name: 'page-home',
                meta: {
                    description: '首页',
                    requiresAuth: true,
                },
                component: () => import('@apps/webapp/views/core/home'),
            },
            {
                path: '/about',
                name: 'page-about',
                meta: {
                    description: '关于我们',
                    requiresAuth: true,
                },
                component: () => import('@apps/webapp/views/core/about'),
            },
            {
                path: '401',
                name: 'page-401',
                component: () => import('@apps/webapp/views/core/401'),
                meta: {
                    description: '没权限访问',
                    hidden: true,
                },
            },
        ],
    },
];
