import { ApiResponse } from '@commons/core/types';
import { get } from '@commons/core/utils/http';

/**
 * 仪表盘
 */
export type DashboardApiResult = {
    //
};

export const dashboardApi = (): Promise<ApiResponse<DashboardApiResult>> => {
    return get<ApiResponse<DashboardApiResult>>('/api/admin/dashboard');
};

/**
 * 工作台
 */
export type WorkbenchApiResult = {
    //
};

export const workbenchApi = (): Promise<ApiResponse<WorkbenchApiResult>> => {
    return get<ApiResponse<WorkbenchApiResult>>('/api/admin/workbench');
};
