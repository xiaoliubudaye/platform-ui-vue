import { defineStore } from 'pinia';
import { store } from '@commons/core/store';
import { defaultTheme, Theme } from '@commons/core/utils/theme';
import { defaultDirection, Direction } from '@commons/core/utils/direction';
import { defaultLocale, Locale } from '@commons/core/utils/locale';
import { DarkStrategy, defaultDarkStrategy } from '@commons/core/utils/dark';
import { getAppVersion } from '@commons/core/utils';

export interface AppState {
    /**
     * 版本号
     */
    version: string;
    /**
     * 页面是否正在加载
     */
    loading: boolean;
    /**
     * 语言
     */
    locale: Locale;
    /**
     * 主题
     */
    theme: Theme;
    /**
     * 对齐方式
     */
    direction: Direction;
    /**
     * 深色模式策略
     */
    darkStrategy: DarkStrategy;
    /**
     * 启用深色模式
     */
    dark: boolean;
    /**
     * 左边导航侧边栏
     */
    sidebar: {
        /**
         * 是否收起
         */
        collapsed: boolean;
        /**
         * 小型化
         */
        mini: boolean;
    };
    /**
     * 右边控制侧边栏
     */
    controlSidebar: {
        /**
         * 是否收起
         */
        collapsed: boolean;
        /**
         * 小型化
         */
        mini: boolean;
    };
}

export const useAppStore = defineStore('app', {
    persist: true,
    state: (): AppState => ({
        version: getAppVersion(),
        loading: true,
        locale: defaultLocale,
        theme: defaultTheme,
        direction: defaultDirection,
        darkStrategy: defaultDarkStrategy,
        dark: false,
        sidebar: {
            collapsed: false,
            mini: false,
        },
        controlSidebar: {
            collapsed: false,
            mini: false,
        },
    }),
    getters: {},
    actions: {
        async setLocale(locale: Locale): Promise<void> {
            this.locale = locale;
        },
        setTheme(theme: Theme): void {
            this.theme = theme;
        },
        setDirection(direction: Direction): void {
            this.direction = direction;
        },
        setDarkStrategy(darkStrategy: DarkStrategy): void {
            this.darkStrategy = darkStrategy;
        },
        setDark(value: boolean): void {
            this.dark = value;
        },
        setLoading(value: boolean): void {
            this.loading = value;
        },
        toggleSidebar(): void {
            this.sidebar.collapsed = !this.sidebar.collapsed;
        },
        toggleControlSidebar(): void {
            this.controlSidebar.collapsed = !this.controlSidebar.collapsed;
        },
        async initialize(): Promise<void> {
            //
        },
    },
});

export const useAppStoreExternal = () => {
    return useAppStore(store);
};
