import { Menu } from '@commons/core/types';

export const menus: Menu[] = [
    {
        key: 'home',
        label: 'home',
        link: '/',
    },
    {
        key: 'product',
        label: 'product',
        link: '/product',
    },
    {
        key: 'announcement',
        label: 'announcement',
        link: '/announcement',
    },
    {
        key: 'about',
        label: 'about',
        link: '/about',
    },
];

export const hasSubMenus = (menu: Menu) => {
    return menu.items && menu.items.length && menu.items.length > 0;
};
