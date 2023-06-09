import { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isEmpty, isEqual } from 'lodash-es';
import { canAccessRoute, setupAuth } from '@commons/core/utils/auth';
import { log } from '@commons/core/utils';

/**
 * 路由实例
 */
export let router: ReturnType<typeof createRouter>;

/**
 * 全局白名单
 */
export let whiteList: Array<string> = ['/login'];

/**
 * 路由配置
 */
export class RouterConfig {
    mode?: string = 'history';
    base?: string = '';
    routes?: Array<RouteRecordRaw> = [];
    customWhiteList?: Array<string> = [];
}

/**
 * 初始化
 */
export const setupRouter = async (app: App, config: RouterConfig) => {
    log(`Router initialize.`);
    // 初始化路由实例
    router = createRouter({
        routes: config.routes,
        history: isEqual(config.mode, 'hash') ? createWebHashHistory(config.base) : createWebHistory(config.base),
        scrollBehavior: () => ({ left: 0, top: 0 }),
    });
    // 设置白名单
    if (!isEmpty(config.customWhiteList)) {
        whiteList = config.customWhiteList;
    }
    await app.use(router);
};

export { setupAuth, canAccessRoute };
