import { App } from 'vue';
import { ConfigProvider } from 'vant';
//
import { log, setupNProgress } from '@commons/core/utils';
import { router, setupAuth, setupRouter } from '@commons/core/router';
import { setupStore } from '@commons/core/store';
import { setupI18n } from '@commons/core/i18n';
import { AxiosOptions, setupHttp } from '@commons/core/utils/http';
import { setupGlobalDirective } from '@commons/core/directives';
import { setupGlobalFilter } from '@commons/core/filters';
import { env } from '@commons/core/env';
//
import { toast } from '@commons/webapp/utils';
import { routes } from '@apps/mobile/router';

export const setupApp = async (app: App) => {
    log(`App for mobile initialize...`);
    // 设置应用专有配置和组件
    await app.use(ConfigProvider);
    // 设置进度条
    await setupNProgress();
    // 设置路由
    await setupRouter(app, { routes: routes, base: env.router.base, mode: env.router.mode });
    // 设置状态
    await setupStore(app);
    // 设置国际化
    await setupI18n(app);
    // 设置网络请求
    await setupHttp({ toast } as AxiosOptions);
    // 设置权限控制
    await setupAuth(app, router);
    // 设置全局指令
    await setupGlobalDirective(app);
    // 设置全局过滤器
    await setupGlobalFilter(app);
    //
    router.isReady().then(() => {
        log('Router is ready.');
        app.mount('#app');
    });
};
