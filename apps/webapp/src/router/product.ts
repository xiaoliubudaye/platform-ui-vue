import { RouteRecordRaw } from 'vue-router';

export const productRoutes: Array<RouteRecordRaw> = [
    {
        path: '/product',
        name: 'product-layout-wrapper',
        meta: {
            description: '主布局',
        },
        children: [
            {
                path: '',
                name: 'page-product-index',
                meta: {
                    description: '首页',
                },
                component: () => import('@apps/webapp/views/product/index.tsx'),
            },
            {
                path: '/details',
                name: 'page-product-details',
                meta: {
                    description: '关于我们',
                },
                component: () => import('@apps/webapp/views/product/details.tsx'),
            },
        ],
    },
];
