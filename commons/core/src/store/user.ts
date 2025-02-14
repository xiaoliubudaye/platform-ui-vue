import { User } from '@commons/core/types/user';
import storage from '@commons/core/utils/storage';
import { defineStore } from 'pinia';
import { store } from '@commons/core/store';
import {
    loginApi,
    LoginApiParams,
    LoginApiResult,
    logoutApi,
    LogoutApiResult,
    refreshApi,
    RefreshApiResult,
    userInfoApi,
} from '@commons/core/api/auth';
import { log } from '@commons/core/utils';
import { isEmpty } from 'lodash-es';
import { R } from '@commons/core/types';

export interface UserState {
    accessToken: string;
    refreshToken: string;
    user: User;
}

export const useUserStore = defineStore('user', {
    persist: true,
    state: (): UserState => ({
        accessToken: null,
        refreshToken: null,
        user: null,
    }),
    getters: {
        /**
         * 是否匿名用户
         */
        isAnonymous: (state) => isEmpty(state.accessToken),
        /**
         * 是否已登录用户
         */
        isAuthenticated: (state) => !isEmpty(state.accessToken),
        /**
         * 是否已登录用户
         */
        isFullAuthenticated: (state) => !isEmpty(state.accessToken) && !isEmpty(state.user),
        /**
         * 获取用户名
         */
        username: (state) => state.user?.username,
        /**
         * 获取用户ID
         */
        id: (state) => state.user?.id,
    },
    actions: {
        /**
         * 设置访问凭证
         */
        setAccessToken(accessToken: string): void {
            this.accessToken = accessToken;
            storage.setAccessToken(accessToken);
        },
        /**
         * 设置刷新凭证
         */
        setRefreshToken(refreshToken: string): void {
            this.refreshToken = refreshToken;
            storage.setRefreshToken(refreshToken);
        },
        /**
         * 设置用户信息
         */
        setUser(user: User): void {
            this.user = user;
        },
        /**
         * 用户登录
         */
        async login(params: LoginApiParams): Promise<LoginApiResult> {
            return new Promise<LoginApiResult>((resolve, reject): void => {
                loginApi(params)
                    .then((result: LoginApiResult): void => {
                        this.setAccessToken(result.access_token);
                        this.setRefreshToken(result.refresh_token);
                        resolve(result);
                    })
                    .catch((): void => {
                        reject();
                    });
            });
        },
        /**
         * 刷新凭证
         */
        async refresh(): Promise<RefreshApiResult> {
            return new Promise<RefreshApiResult>((resolve, reject): void => {
                refreshApi()
                    .then((result: RefreshApiResult): void => {
                        this.setAccessToken(result.access_token);
                        this.setRefreshToken(result.refresh_token);
                        resolve(result);
                    })
                    .catch((): void => {
                        reject();
                    });
            });
        },
        /**
         * 退出登录
         */
        async logout(): Promise<LogoutApiResult> {
            log(`UserStore.logout...`);
            return new Promise<LogoutApiResult>((resolve, reject): void => {
                logoutApi()
                    .then(async (result: R<LogoutApiResult>): Promise<void> => {
                        await this.clearUser();
                        resolve(result);
                    })
                    .catch(() => {
                        return reject();
                    });
            });
        },
        /**
         * 根据凭证获取用户信息
         */
        async getUserInfo(): Promise<R<User>> {
            try {
                const resp: R<User> = await userInfoApi();
                this.setUser(resp.data);
                return Promise.resolve(resp);
            } catch (e) {
                return Promise.reject(e);
            }
        },
        /**
         * 清除所有用户状态信息
         */
        async clearUser(): Promise<void> {
            try {
                this.setAccessToken(null);
                this.setRefreshToken(null);
                this.setUser(null);
                storage.clear();
                return Promise.resolve();
            } catch (e) {
                return Promise.reject(e);
            }
        },
    },
});

export const useUserStoreExternal = () => {
    return useUserStore(store);
};
