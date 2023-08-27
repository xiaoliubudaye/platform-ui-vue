import { ConfigProvider, Locale as VLocale, showToast } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';
import zhTW from 'vant/es/locale/lang/zh-TW';
//
import { Locale } from '@commons/core/utils/locale';
import { log, setupNProgress } from '@commons/core/utils';
import { App } from 'vue';
import { router, RouterConfig, setupAuth, setupRouter } from '@commons/core/router';
import { routes } from '@apps/mobile/router';
import { setupStore } from '@commons/core/store';
import { setupI18n } from '@commons/core/i18n';
import { HttpConfig, setupHttp } from '@commons/core/utils/http.ts';
import { setupGlobalDirective } from '@commons/core/directives';
import { setupGlobalFilter } from '@commons/core/filters';

export const toast = async (message: any) => {
    showToast(message);
};

export const setLocale = (locale: Locale) => {
    log(`Current locale - ${locale}`);
    switch (locale) {
        case Locale.EN_US:
            VLocale.use('en-US', enUS);
            break;
        case Locale.ZH_CN:
            VLocale.use('zh-CN', zhCN);
            break;
        case Locale.ZH_TW:
            VLocale.use('zh-TW', zhTW);
            break;
    }
};

export const setup = async (app: App, routerConfig: RouterConfig): Promise<void> => {
    // 设置应用专有配置和组件
    await app.use(ConfigProvider);
    // 设置进度条
    await setupNProgress();
    // 设置路由
    await setupRouter(app, routerConfig);
    // 设置状态
    await setupStore(app);
    // 设置国际化
    await setupI18n(app);
    // 设置网络请求
    await setupHttp({
        toast: toast,
        excludes: ['/oauth/token'],
    } as HttpConfig);
    // 设置权限控制
    await setupAuth(app, router);
    // 设置全局指令
    await setupGlobalDirective(app);
    // 设置全局过滤器
    await setupGlobalFilter(app);
    //
    router.isReady().then(() => {
        app.mount('#app');
    });
};
