/**
 * 单点登录参数
 */
export class SsoParams {
    code?: string;
    mobileRedirectUri?: string;
    webappRedirectUri?: string;
    redirectUri?: string;
}

export class R<T = any> {
    static readonly CODE_SUCCESS: number = 1;
    static readonly CODE_ERROR: number = 0;
    code!: number;
    message!: string;
    data!: T;
}

export class Menu {
    /**
     * 菜单标识
     */
    key: string;
    /**
     * 菜单多语言文本
     */
    label: string;
    /**
     * 菜单图标
     */
    icon?: string;
    /**
     * 菜单链接
     */
    link?: string;
    /**
     * 菜单是否需要检查权限
     */
    authenticated?: boolean;
    /**
     * 菜单对应权限
     */
    authorities?: string | string[] | null | undefined;
    /**
     * 子菜单
     */
    items?: Menu[];
}

export class Page {
    /**
     * 当前页
     */
    page?: number;
    /**
     * 总页数
     */
    pages?: number;
    /**
     * 总记录数
     */
    total?: number;
    /**
     * 每页记录数
     */
    limit?: number;
    /**
     * 数据
     */
    items?: [];
    /**
     *
     */
    filter?: string;
}

import { merge } from 'lodash';

export class DataList {
    /**
     * 是否正在加载
     */
    loading = false;
    /**
     * 分页参数
     */
    pagination: {
        total: number;
        page: number;
        limit: number;
        key: string;
    } = {
        total: 0,
        page: 0,
        limit: 0,
        key: '',
    };
    /**
     * 表格数据
     */
    items: any[] = [];
}

/**
 * 处理列表数据
 */
export function processData(dataList: DataList, page: Page): void {
    dataList.items.push(...page.items);
    dataList.pagination.page = page.page;
    dataList.pagination.limit = page.limit;
    dataList.pagination.total = page.total;
}

/**
 * 处理列表请求参数
 */
export function processParams(dataList: DataList, params = {}) {
    console.log(
        merge(
            {
                page: dataList.pagination.page + 1,
                limit: dataList.pagination.limit,
                key: dataList.pagination.key,
            },
            params,
        ),
    );
    return merge(
        {
            page: dataList.pagination.page + 1,
            limit: dataList.pagination.limit,
            key: dataList.pagination.key,
        },
        params,
    );
}

export class DataTable {
    /**
     * 是否正在加载
     */
    loading? = false;
    /**
     * 分页参数
     */
    pagination?: {
        total: number;
        page: number;
        limit: number;
        key: string;
    } = {
        total: 0,
        page: 1,
        limit: 2,
        key: '',
    };
    /**
     *
     */
    columns?: any[] = [];
    /**
     * 已选中记录
     */
    selected?: any[] = [];
    /**
     * 表格数据
     */
    rows?: any[] = [];
}

export function processTableData(dataTable: DataTable, page: Page) {
    dataTable.rows = page.items;
    dataTable.pagination.page = page.page;
    dataTable.pagination.limit = page.limit;
    dataTable.pagination.total = page.total;
    dataTable.loading = false;
}

export function processTableParams(dataTable: DataTable) {
    return {
        page: dataTable.pagination.page,
        limit: dataTable.pagination.limit,
        key: dataTable.pagination.key,
    };
}
