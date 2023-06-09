import NProgress from 'nprogress';
import { isEmpty } from 'lodash-es';
//
import env from '@commons/core/env';
import { router } from '@commons/core/router';
import { useI18nExternal } from '@commons/core/i18n';
import { applicationVersion } from '@commons/core/constants';
import { customApplicationVersion } from '@commons/custom/constants';
// 导出别名，方便与框架内置Icon组件做区分
export { Icon as VIcon } from '@iconify/vue';

/**
 * 获取应用版本号
 */
export const getAppVersion = () => {
    return env.custom.enabled ? customApplicationVersion : applicationVersion;
};

/**
 * 获取应用标题
 */
export const getAppTitle = () => {
    const { t } = useI18nExternal();
    return env.custom.enabled ? t('custom.title') : t('common.title');
};

/**
 * 设置应用基础配置和组件
 */
export const setupNProgress = () => {
    NProgress.configure({ showSpinner: false });
};

/**
 * 输出日志
 */
export function pop(text: any): void {
    if (env.debug.enabled) {
        alert(text);
    }
}

/**
 * 输出日志
 */
export function log(log: any): void {
    if (env.debug.enabled) {
        console.log(log);
    }
}

/**
 * 从文件对象获取本地图片链接
 */
export function getObjectURL(file: File): string {
    let url: string = null;
    if (URL !== undefined) {
        url = URL.createObjectURL(file);
    }
    return url;
}

/**
 *
 */
export function formatUrl(url: string): string {
    return url;
}

/**
 * 替换字符串
 */
export const replaceString = (str: string, ...val: string[]) => {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(`{${index}}`, val[index]);
    }
    return str;
};

/**
 * 替换字符串
 */
export const removeQueryParams = (url: string, ...queryParams: string[]): string => {
    if (!isEmpty(url)) {
        const splitUrl = url.split('?');
        const path = splitUrl[0];
        if (splitUrl[1] && URLSearchParams && queryParams.length) {
            const urlSearchParams = new URLSearchParams(splitUrl[1]);
            queryParams.forEach((queryParam) => {
                urlSearchParams.delete(queryParam);
            });
            const parsedUrl = urlSearchParams.toString();
            return parsedUrl ? path + '?' + parsedUrl : path;
        }
    }
    return url;
};

/**
 * 替换字符串
 */
export const goBack = (url: string = ''): void => {
    if (isEmpty(url)) {
        router.back();
    } else {
        router.back();
    }
};

/**
 * 默认用户登录凭证，方便开发调试用
 */
export const credentials = env.debug.enabled
    ? {
          username: 'admin',
          password: 'admin',
      }
    : {};
