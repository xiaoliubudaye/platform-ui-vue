import { computed, defineComponent, ref } from 'vue';
import { Cell, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';
import { useI18n } from 'vue-i18n';
import { darkStrategies, getDarkStrategy, getDarkStrategyLabel, getDarkThemeValue, setDarkTheme } from '@commons/core/utils/dark.ts';

export default defineComponent({
    name: 'DarkCell',
    setup() {
        const { t } = useI18n();
        const appStore = useAppStore();
        const i18n = useI18n();
        const show = ref(false);
        const darkStrategyLabel = computed(() => i18n.t(getDarkStrategyLabel(appStore.darkStrategy)));
        const columns = darkStrategies.map((s) => {
            return { text: i18n.t(s.label), value: s.strategy };
        });
        const onConfirm = (params: PickerConfirmEventParams) => {
            log(params);
            show.value = false;
            if (isArray(params.selectedValues)) {
                const darkStrategy = getDarkStrategy(params.selectedValues[0] as string);
                appStore.setDarkStrategy(darkStrategy);
                appStore.setDark(getDarkThemeValue(darkStrategy));
                setDarkTheme(getDarkThemeValue(darkStrategy));
            }
        };
        return () => (
            <>
                <Cell title={t('common.label_dark')} is-link arrow-direction="down" value={darkStrategyLabel.value} />
                <Popup show={show.value} round position="bottom">
                    <Picker
                        columns={columns}
                        onConfirm={onConfirm}
                        onCancel={() => {
                            show.value = false;
                        }}
                    />
                </Popup>
            </>
        );
    },
});
