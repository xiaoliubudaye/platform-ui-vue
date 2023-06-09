import { RouteRecordRaw } from 'vue-router';

export const ssoRoutes: Array<RouteRecordRaw> = [
    {
        path: '/sso',
        name: 'sso-wrapper',
        meta: {
            description: '单点登录',
            requiresAuth: false,
        },
        children: [
            {
                path: 'wechat',
                name: 'sso-wechat',
                meta: {
                    description: '微信公众号单点登录',
                    requiresAuth: false,
                },
                component: () => import('@apps/mobile/views/core/wechat'),
            },
            {
                path: 'wework',
                name: 'sso-wework',
                meta: {
                    description: '企微微信单点登录',
                    requiresAuth: false,
                },
                component: () => import('@apps/mobile/views/core/wework'),
            },
            {
                path: 'lark',
                name: 'sso-lark',
                meta: {
                    description: '飞书单点登录',
                    requiresAuth: false,
                },
                component: () => import('@apps/mobile/views/core/lark'),
            },
        ],
    },
];
