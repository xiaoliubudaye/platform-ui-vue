import { RouteRecordRaw } from 'vue-router';
import { coreRoutes } from '@apps/mobile/router/core';
import { tabsRoutes } from '@apps/mobile/router/tabs';
import { announcementRoutes } from '@apps/mobile/router/announcement';
import { productRoutes } from '@apps/mobile/router/product';
import { ssoRoutes } from '@apps/mobile/router/sso';
import { showcaseRoutes } from '@apps/mobile/router/showcase.ts';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/tabs/home',
    },
    {
        path: '/login',
        component: () => import('@apps/mobile/views/core/login'),
        meta: {
            locale: 'page.login',
            requiresAuth: false,
            icon: '',
        },
    },
    ...coreRoutes,
    ...ssoRoutes,
    ...tabsRoutes,
    ...announcementRoutes,
    ...productRoutes,
    ...showcaseRoutes,
];
