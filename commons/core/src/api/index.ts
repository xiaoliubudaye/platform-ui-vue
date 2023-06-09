import { ApiResponse } from '@commons/core/types';
import { get } from '@commons/core/utils/http';

export class InitializeApiResult {
    //
}

export const initializeApi = (): Promise<ApiResponse<InitializeApiResult>> => {
    return get<ApiResponse<InitializeApiResult>>('/api/initialize');
};
