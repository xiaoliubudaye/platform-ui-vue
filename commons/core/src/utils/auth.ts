import { App } from 'vue';
import { NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';
import { isArray, isEmpty, isString } from 'lodash-es';
//
import { useUserStore } from '@commons/core/store';
import { log } from '@commons/core/utils';
import { usePageLoading } from '@commons/core/hooks';
import { useProgress } from '@commons/core/hooks/useProgress';
import { whiteList } from '@commons/core/router';

/**
 * 设置权限控制
 */
export const setupAuth = async (app: App, router: Router) => {
    log(`Router Auth initialize.`);

    const { pageLoadDone, pageLoadStart } = usePageLoading();
    const { progressDone, progressStart } = useProgress();

    router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
        log(`Router beforeEach.`);
        progressStart();
        pageLoadStart();

        if (isOpenRoute(to)) {
            next();
            progressDone();
            pageLoadDone();
        } else {
            const { getUserInfo, clearUser, isAuthenticated, isFullAuthenticated } = useUserStore();
            if (isAuthenticated) {
                if (to.path === '/login') {
                    log(`Router redirect to login page and clear user...`);
                    await clearUser();
                    next();
                    progressDone();
                    pageLoadDone();
                } else {
                    if (isAuthenticated && !isFullAuthenticated) {
                        log(`Router get user info...`);
                        await getUserInfo();
                    }
                    if (canAccessRoute(to)) {
                        log(`Router check route pass.`);
                        next();
                    } else {
                        log(`Router check route fail.`);
                        next(`/401?redirect=${to.path}`);
                        progressDone();
                        pageLoadDone();
                    }
                }
            } else {
                // 未登录可以访问白名单页面(登录页面)
                if (whiteList.indexOf(to.path) !== -1) {
                    next();
                } else {
                    next(`/login?redirect=${to.path}`);
                    progressDone();
                    pageLoadDone();
                }
            }
        }
    });

    router.afterEach(async (to: RouteLocationNormalized) => {
        log(`Router afterEach.`);
        log(to);
        progressDone();
        pageLoadDone();
    });
};

/**
 * 检查当前路由是否是开放路由
 */
export const isOpenRoute = (route: RouteLocationNormalized) => {
    return !(route.meta && route.meta.requiresAuth);
};

/**
 * 检查当前用户是否有权限访问指定路由
 */
export const canAccessRoute = (route: RouteLocationNormalized) => {
    const { isAuthenticated } = useUserStore();
    if (route.meta && route.meta.requiresAuth) {
        if (isEmpty(route.meta?.roles) && isEmpty(route.meta?.authorities)) {
            return isAuthenticated;
        }

        // 检查是否拥有指定角色
        let hasRole = false;
        if (route.meta && route.meta.roles && route.meta.roles.length && route.meta.roles.length > 0) {
            hasRole = hasAnyRole(route.meta.roles);
        }
        // 检查是否拥有指定权限
        let hasAuthority = false;
        if (route.meta && route.meta.authorities && route.meta.authorities.length && route.meta.authorities.length > 0) {
            hasAuthority = hasAnyAuthority(route.meta.authorities);
        }

        return hasRole || hasAuthority;
    }
    return true;
};

/**
 * 检查当前用户是否拥有指定角色
 */
export const hasAnyRole = (roles: string | Array<string>): boolean => {
    const { user, isAuthenticated, isFullAuthenticated } = useUserStore();

    let hasAnyRole = false;
    if (isAuthenticated && isFullAuthenticated && isArray(roles) && !isEmpty(roles)) {
        hasAnyRole = user?.roles?.some((role) => {
            return roles.includes(role);
        });
    } else if (isAuthenticated && isFullAuthenticated && isString(roles) && !isEmpty(roles)) {
        hasAnyRole = user?.roles?.includes(roles);
    }

    return hasAnyRole;
};

/**
 * 检查当前用户是否拥有指定权限
 */
export const hasAnyAuthority = (authorities: string | Array<string>): boolean => {
    const { user, isAuthenticated, isFullAuthenticated } = useUserStore();

    let hasAnyAuthority = false;
    if (isAuthenticated && isFullAuthenticated && isArray(authorities) && !isEmpty(authorities)) {
        hasAnyAuthority = user?.authorities?.some((role) => {
            return authorities.includes(role);
        });
    } else if (isAuthenticated && isFullAuthenticated && isString(authorities) && !isEmpty(authorities)) {
        hasAnyAuthority = user?.authorities?.includes(authorities);
    }

    return hasAnyAuthority;
};
