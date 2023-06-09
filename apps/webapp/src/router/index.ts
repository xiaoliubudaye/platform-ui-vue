import { RouteRecordRaw } from 'vue-router';
import { coreRoutes } from '@apps/webapp/router/core';
import { announcementRoutes } from '@apps/webapp/router/announcement';
import { productRoutes } from '@apps/webapp/router/product';
import { ssoRoutes } from '@apps/webapp/router/sso';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/home',
    },
    {
        path: '/login',
        name: 'page-login',
        component: () => import('@apps/webapp/views/core/login.tsx'),
        meta: {
            description: '登录页',
        },
    },
    ...coreRoutes,
    ...ssoRoutes,
    ...announcementRoutes,
    ...productRoutes,
];
