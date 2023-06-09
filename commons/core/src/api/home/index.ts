import { ApiResponse } from '@commons/core/types';
import { get } from '@commons/core/utils/http';

export class HomeApiResult {
    access_token: string;
    refresh_token: string;
}

export const homeApi = (): Promise<ApiResponse<HomeApiResult>> => {
    return get<ApiResponse<HomeApiResult>>('/api/home', {});
};
