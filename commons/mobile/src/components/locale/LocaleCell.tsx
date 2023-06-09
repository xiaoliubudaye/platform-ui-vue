import { computed, defineComponent, ref } from 'vue';
import { isArray } from 'lodash-es';
import { useI18n } from 'vue-i18n';
import { Cell, Picker, PickerConfirmEventParams, Popup } from 'vant';
//
import { log } from '@commons/core/utils';
import { getLocale, getLocaleLabel, locales } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks';
import { useAppStore } from '@commons/core/store';

export default defineComponent({
    name: 'LocaleCell',
    setup() {
        const appStore = useAppStore();
        const { t } = useI18n();
        const { changeLocale } = useLocale();
        const locale = computed(() => t(getLocaleLabel(appStore.locale)));
        const show = ref<boolean>(false);
        const columns = locales.map((l) => {
            return { text: t(l.label), value: l.locale };
        });
        const onConfirm = (params: PickerConfirmEventParams) => {
            log(params);
            if (isArray(params.selectedValues)) {
                changeLocale(getLocale(params.selectedValues[0] as string));
            }
            show.value = false;
        };
        return () => (
            <>
                <Cell
                    title={t('common.label_language')}
                    is-link
                    arrow-direction="down"
                    value={locale.value}
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
