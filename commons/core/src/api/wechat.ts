import { post } from '@commons/core/utils/http';
import { ApiResponse } from '@commons/core/types';

/**
 * 获取签名
 */
export interface WeChatSignatureApiResult {
    appId: string;
    timestamp: string;
    nonceStr: string;
    signature: string;
}

export const getWeComSignatureApi = (params: any) => {
    return post<ApiResponse<WeChatSignatureApiResult>>('/api/oapis/wecom/signature', params);
};

export const getWeChatSignatureApi = (params: any) => {
    return post<ApiResponse<WeChatSignatureApiResult>>('/api/oapis/wechat/signature', params);
};

/**
 * 微信/企微登录
 */
export interface WeChatLoginRequest {
    code?: string;
}

export interface WeChatLoginResponse {
    code?: string;
}

export const weComLoginApi = (params: WeChatLoginRequest): Promise<ApiResponse<WeChatLoginResponse>> => {
    return post<ApiResponse<WeChatLoginResponse>>('/api/oapis/wecom/login', params);
};

export const weChatLoginApi = (params: WeChatLoginRequest): Promise<ApiResponse<WeChatLoginResponse>> => {
    return post<ApiResponse<WeChatLoginResponse>>('/api/oapis/wechat/login', params);
};
