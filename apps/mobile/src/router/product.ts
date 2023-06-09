import { RouteRecordRaw } from 'vue-router';

export const productRoutes: Array<RouteRecordRaw> = [
    {
        path: '/product',
        name: 'product-wrapper',
        meta: {
            description: '产品',
            requiresAuth: false,
        },
        children: [
            {
                path: '',
                name: 'page-product-index',
                meta: {
                    description: '首页',
                },
                component: () => import('@apps/mobile/views/product/index'),
            },
            {
                path: '/details',
                name: 'page-product-details',
                meta: {
                    description: '关于我们',
                },
                component: () => import('@apps/mobile/views/product/details'),
            },
        ],
    },
];
