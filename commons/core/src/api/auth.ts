import { R, User } from '@commons/core/types';
import { get, post } from '@commons/core/utils/http';
import storage from '@commons/core/utils/storage';
import { env } from '@commons/core/env';

/**
 * 刷新凭证
 */
export interface RefreshApiResult {
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export interface RefreshApiParams {
    grant_type?: string;
    client_id?: string;
    client_secret?: string;
    refresh_token?: string;
    scope?: string | string[];
}

export const refreshApi = (): Promise<RefreshApiResult> => {
    const params: RefreshApiParams = {
        refresh_token: storage.getRefreshToken(),
    };
    if (env.auth.oauth.enabled) {
        params.grant_type = 'refresh_token';
        params.scope = 'openid';
        params.client_id = env.auth.oauth.clientId;
        params.client_secret = env.auth.oauth.clientSecret;
    }
    return post<LoginApiResult>('/oauth/token', params);
};

/**
 * 用户登录
 */
export interface LoginApiResult {
    token_type: string;
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export interface LoginApiParams {
    grant_type?: string;
    client_id?: string;
    client_secret?: string;
    username?: string;
    password?: string;
    scope?: string | string[];
}

export const loginApi = (params: LoginApiParams) => {
    if (env.auth.oauth.enabled) {
        params.grant_type = 'password';
        params.scope = 'openid';
        params.client_id = env.auth.oauth.clientId;
        params.client_secret = env.auth.oauth.clientSecret;
    }
    return post<LoginApiResult>('/oauth/token', params);
};

/**
 * 用户退出登录
 */
export type LogoutApiResult = {};

export const logoutApi = (): Promise<R<LogoutApiResult>> => {
    return post<R<LogoutApiResult>>('/api/logout');
};

/**
 * 获取用户信息
 */

export const userInfoApi = (): Promise<R<User>> => {
    return get<R<User>>('/api/v1/user');
};

/**
 * 用户注册
 */
export class RegisterApiResult {
    user: User;
    now: Date | string;
}

export class RegisterApiParams {
    username?: string;
    password?: string;
}

export const registerApi = (params: RegisterApiParams) => {
    return post<R<RegisterApiResult>>('/api/register', params);
};
