import { Menu } from '@commons/core/types';

export const menus: Menu[] = [
    {
        key: 'workbench',
        label: 'Workbench',
        icon: 'mdiViewDashboard',
        authorities: ['workbench'],
        items: [
            {
                key: 'dashboard',
                label: 'Dashboard',
                icon: 'mdiViewList',
                authorities: ['workbench:dashboard'],
                link: '/dashboard',
            },
            {
                key: 'workbench',
                label: 'Workbench',
                icon: 'mdiBook',
                authorities: ['workbench:workbench'],
                link: '/workbench',
            },
        ],
    },
    {
        key: 'home',
        label: 'Site',
        icon: 'mdiSitemap',
        authorities: ['home'],
        items: [
            {
                key: 'product-management',
                label: 'Product',
                icon: 'mdiViewList',
                authorities: ['home:product'],
                link: '/product/index',
            },
            {
                key: 'product-announcement',
                label: 'Product',
                icon: 'mdiViewList',
                authorities: ['home:product'],
                link: '/announcement/index',
            },
        ],
    },
    {
        key: 'organization',
        label: 'Organization',
        icon: 'mdiCogs',
        authorities: ['organization'],
        items: [
            {
                key: 'organization-organization',
                label: 'Organization',
                icon: 'mdiAccountMultiple',
                authorities: ['organization:organization'],
                link: '/organization/index',
            },
            {
                key: 'organization-position',
                label: 'Position',
                icon: 'mdiAccountMultiple',
                authorities: ['organization:position'],
                link: '/position/index',
            },
            {
                key: 'organization-user',
                label: 'UserModel',
                icon: 'mdiAccountMultiple',
                authorities: ['organization:user'],
                link: '/user/index',
            },
            {
                key: 'organization-group',
                label: 'Group',
                icon: 'mdiAccountMultiple',
                authorities: ['organization:group'],
                link: '/group/index',
            },
        ],
    },
    {
        key: 'resource',
        label: 'Resource',
        icon: 'mdiCogs',
        authorities: ['resource'],
        items: [
            {
                key: 'resource-dictionary',
                label: 'Dictionary',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:dictionary'],
                link: '/admin/dictionary/index',
            },
            {
                key: 'resource-tag',
                label: 'Tag',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:tag'],
                link: '/admin/tag/index',
            },
            {
                key: 'resource:area',
                label: 'Area',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:area'],
                link: '/admin/area/index',
            },
            {
                key: 'resource-attachment',
                label: 'Attachment',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:attachment'],
                link: '/admin/attachment/index',
            },
            {
                key: 'resource-label',
                label: 'Label',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:label'],
                link: '/admin/label/index',
            },
            {
                key: 'resource-message',
                label: 'Message',
                icon: 'mdiAccountMultiple',
                authorities: ['resource:message'],
                link: '/admin/message/index',
            },
        ],
    },
    {
        key: 'system',
        label: 'System',
        icon: 'mdiCogs',
        authorities: ['system'],
        items: [
            {
                key: 'system-authority',
                label: 'AuthorityMiddleware',
                icon: 'mdiAccountMultiple',
                authorities: ['system:authority'],
                link: '/admin/authority/index',
            },
            {
                key: 'system-role',
                label: 'RoleModel',
                icon: 'mdiAccountMultiple',
                authorities: ['system:role'],
                link: '/admin/role/index',
            },
            {
                key: 'system-setting',
                label: 'System Settings',
                icon: 'mdiAccountMultiple',
                authorities: ['system:setting'],
                link: '/admin/system/settings',
            },
            {
                key: 'system-user',
                label: 'On-Line UserModel',
                icon: 'mdiAccountMultiple',
                authorities: ['system:user'],
                link: '/admin/on-line-user/index',
            },
            {
                key: 'system-logging',
                label: 'Logging',
                icon: 'mdiAccountMultiple',
                authorities: ['system:logging'],
                link: '/admin/logging/index',
            },
            {
                key: 'system-task',
                label: 'Task',
                icon: 'mdiAccountMultiple',
                authorities: ['system:task'],
                link: '/admin/task/index',
            },
            {
                key: 'system-application',
                label: 'ApplicationMiddleware',
                icon: 'mdiAccountMultiple',
                authorities: ['system:application'],
                link: '/admin/application/index',
            },
        ],
    },
    {
        key: 'tenant',
        label: 'Tenant',
        icon: 'mdiSitemap',
        authorities: ['tenant'],
        items: [
            {
                key: 'tenant-tenant',
                label: 'Tenant',
                icon: 'mdiViewList',
                authorities: ['tenant:tenant'],
                link: '/admin/tenant/index',
            },
        ],
    },
];

export const hasSubMenus = (menu: Menu) => {
    return menu.items && menu.items.length && menu.items.length > 0;
};
