import { format } from 'date-fns';

/**
 * 格式化日期
 */
export function formatDatetime(dateObject: Date | number): string {
    if (dateObject !== undefined) {
        return format(dateObject, 'YYYY-MM-DD HH:mm');
    }
    return '--';
}

/**
 * 格式化日期
 */
export function formatDate(dateObject: Date | number): string {
    if (dateObject !== undefined) {
        return format(dateObject, 'YYYY-MM-DD');
    }
    return '--';
}

/**
 * 格式化月份
 */
export function formatMonth(dateObject: Date | number): string {
    if (dateObject !== undefined) {
        return format(dateObject, 'MM');
    }
    return '--';
}

/**
 * 格式化年份
 */
export function formatYear(dateObject: Date | number): string {
    if (dateObject !== undefined) {
        return format(dateObject, 'YYYY');
    }
    return '--';
}
