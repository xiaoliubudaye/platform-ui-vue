import { computed, defineComponent, ref, watch } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
//
import { Locale } from '@commons/core/utils/locale';
import { setTheme, Theme } from '@commons/core/utils/theme';
import { setDarkTheme } from '@commons/core/utils/dark';
import { useAppStore } from '@commons/core/store';
//
import { getLocale } from '@commons/webapp/utils';
import { ElConfigProvider } from 'element-plus';
import { RouterView } from 'vue-router';

export default defineComponent({
    name: 'App',
    setup() {
        const appStore = useAppStore();
        const locale = computed<Locale>(() => appStore.locale);
        const theme = computed<Theme>(() => appStore.theme);
        const dark = computed(() => appStore.dark);
        const eLocale = ref(zhCn);
        watch(dark, (value) => setDarkTheme(value), {
            immediate: true,
        });
        watch(theme, (value) => setTheme(value), {
            immediate: true,
        });
        watch(
            locale,
            (value) => {
                eLocale.value = getLocale(value);
            },
            {
                immediate: true,
            },
        );
        return () => (
            <ElConfigProvider locale={eLocale.value}>
                <RouterView />
            </ElConfigProvider>
        );
    },
});
