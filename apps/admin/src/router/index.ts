import type { RouteRecordRaw } from 'vue-router';
import { coreRoutes } from '@apps/admin/router/core';
import { userRoutes } from '@apps/admin/router/user';
import { organizationRoutes } from '@apps/admin/router/organization';
import { positionRoutes } from '@apps/admin/router/position';
import { tagRoutes } from '@apps/admin/router/tag';
import { groupRoutes } from '@apps/admin/router/group';
import { attachmentRoutes } from '@apps/admin/router/attachment';
import { areaRoutes } from '@apps/admin/router/area';
import { systemRoutes } from '@apps/admin/router/system';
import { roleRoutes } from '@apps/admin/router/role';
import { authorityRoutes } from '@apps/admin/router/authority';
import { posterRoutes } from '@apps/admin/router/poster';
import { announcementRoutes } from '@apps/admin/router/announcement';
import { productRoutes } from '@apps/admin/router/product';

export const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        redirect: '/dashboard',
    },
    {
        path: '/index',
        name: 'page-index',
        meta: {
            description: '首页',
        },
        component: () => import('@apps/admin/views/core/index'),
    },
    {
        path: '/about',
        name: 'page-about',
        meta: {
            description: '关于页',
        },
        component: () => import('@apps/admin/views/core/about'),
    },
    {
        path: '/login',
        name: 'page-login',
        meta: {
            description: '登录页',
        },
        component: () => import('@apps/admin/views/core/login'),
    },
    ...coreRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...authorityRoutes,
    ...organizationRoutes,
    ...positionRoutes,
    ...systemRoutes,
    ...groupRoutes,
    ...attachmentRoutes,
    ...tagRoutes,
    ...areaRoutes,
    ...announcementRoutes,
    ...posterRoutes,
    ...productRoutes,
];
