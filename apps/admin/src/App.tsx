import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { ElConfigProvider } from 'element-plus';
import { RouterView } from 'vue-router';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
//
import { useAppStore } from '@commons/core/store';
import { Locale } from '@commons/core/utils/locale';
import { setTheme, Theme } from '@commons/core/utils/theme';
import { setDarkTheme } from '@commons/core/utils/dark';
import { getLocale } from '@commons/webapp/utils';
import { log } from '@commons/core/utils';

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

        onMounted(async () => {
            log('Component <<App>> mounted.');
        });

        return () => (
            <ElConfigProvider locale={eLocale.value}>
                <RouterView />
            </ElConfigProvider>
        );
    },
});
