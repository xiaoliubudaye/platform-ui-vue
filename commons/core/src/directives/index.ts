import { App } from 'vue';
import { hasAuthority, hasRole } from '@commons/core/directives/access';

/**
 * 设置全局指令
 */
export const setupGlobalDirective = async (app: App) => {
    app.directive('has-authority', hasAuthority);
    app.directive('has-role', hasRole);
};
