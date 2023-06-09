import { RouteRecordRaw } from 'vue-router';

export const productRoutes: Array<RouteRecordRaw> = [
    {
        path: '/product',
        name: 'layout-admin-product',
        component: () => import('@apps/admin/layouts/AdminLayout'),
        children: [
            {
                path: 'index',
                name: 'page-product-index',
                meta: {
                    requiresAuth: true,
                    authorities: ['workbench:workbench'],
                    description: '仪表盘',
                },
                component: () => import('@apps/admin/views/product/index'),
            },
        ],
    },
];
