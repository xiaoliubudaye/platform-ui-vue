import type { App } from 'vue';
import { createPinia } from 'pinia';
import PersistedState from 'pinia-plugin-persistedstate';
import Logger from 'pinia-logger';
import { useAppStore, useAppStoreExternal } from '@commons/core/store/app';
import { useUserStore, useUserStoreExternal } from '@commons/core/store/user';

export let store: ReturnType<typeof createPinia>;

export function setupStore(app: App<Element>) {
    store = createPinia();
    store.use(PersistedState);
    store.use(
        Logger({
            expanded: false,
            disabled: true,
        }),
    );
    app.use(store);
}

export const useStore = () => ({
    appStore: useAppStore(),
    userStore: useUserStore(),
});

export const useStoreExternal = () => ({
    appStore: useAppStoreExternal(),
    userStore: useUserStoreExternal(),
});

export { useAppStore, useAppStoreExternal };

export { useUserStore, useUserStoreExternal };
