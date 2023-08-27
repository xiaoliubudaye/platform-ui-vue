import { ElConfigProvider, ElNotification } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import enUs from 'element-plus/lib/locale/lang/en';
import zhTw from 'element-plus/lib/locale/lang/zh-tw';
import { Locale } from '@commons/core/utils/locale';
import { setupNProgress } from '@commons/core/utils';
import { router, RouterConfig, setupAuth, setupRouter } from '@commons/core/router';
import { setupStore } from '@commons/core/store';
import { setupI18n } from '@commons/core/i18n';
import { HttpConfig, setupHttp } from '@commons/core/utils/http.ts';
import { setupGlobalDirective } from '@commons/core/directives';
import { setupGlobalFilter } from '@commons/core/filters';
import { App } from 'vue';

export const toast = async (message: any) => {
    ElNotification.success({
        message: message,
        offset: 100,
    });
};

export const getLocale = (locale: Locale) => {
    let language = zhCn;
    switch (locale) {
        case Locale.EN_US:
            language = enUs;
            break;
        case Locale.ZH_CN:
            language = zhCn;
            break;
        case Locale.ZH_TW:
            language = zhTw;
            break;
    }
    return language;
};

export const setup = async (app: App, routerConfig: RouterConfig): Promise<void> => {
    // 设置应用专有配置和组件
    await app.use(ElConfigProvider);
    //
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
