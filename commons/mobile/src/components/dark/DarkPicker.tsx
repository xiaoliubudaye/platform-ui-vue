import { computed, defineComponent, ref } from 'vue';
import { Field, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { darkStrategies, getDarkStrategy, getDarkThemeValue, setDarkTheme } from '@commons/core/utils/dark';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'DarkPicker',
    setup() {
        const { t } = useI18n();
        const appStore = useAppStore();
        const mode = computed(() => appStore.darkStrategy);
        const show = ref(false);
        const columns = darkStrategies.map((s) => {
            return { text: s.title, value: s.strategy };
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
                <Field
                    modelValue={mode.value}
                    is-link
                    readonly
                    label="深色模式"
                    onClick={() => {
                        show.value = true;
                    }}
                />
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
