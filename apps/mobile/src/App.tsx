import { computed, defineComponent, onMounted, watch } from 'vue';
import { ConfigProvider, ConfigProviderTheme } from 'vant';
import { RouterView } from 'vue-router';
//
import { useAppStore } from '@commons/core/store';
import { Locale } from '@commons/core/utils/locale';
import { setTheme, Theme } from '@commons/core/utils/theme';
import { setDarkTheme } from '@commons/core/utils/dark';
import { setLocale } from '@commons/mobile/utils';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'App',
    setup() {
        const appStore = useAppStore();
        const locale = computed<Locale>(() => appStore.locale);
        const theme = computed<Theme>(() => appStore.theme);
        const dark = computed(() => appStore.dark);
        const vTheme = computed<ConfigProviderTheme>(() => (appStore.dark ? 'dark' : 'light'));
        watch(dark, (value) => setDarkTheme(value), {
            immediate: true,
        });
        watch(theme, (value) => setTheme(value), {
            immediate: true,
        });
        watch(
            locale,
            (value) => {
                setLocale(value);
            },
            {
                immediate: true,
            },
        );

        onMounted(async () => {
            log('Component <<App>> mounted.');
        });

        return () => (
            <ConfigProvider theme={vTheme.value}>
                <RouterView />
            </ConfigProvider>
        );
    },
});
