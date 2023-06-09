import { computed, defineComponent, ref } from 'vue';
import { Field, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { getLocale, locales } from '@commons/core/utils/locale';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';
import { useLocale } from '@commons/core/hooks';

export default defineComponent({
    name: 'LocalePicker',
    setup() {
        const appStore = useAppStore();
        const { changeLocale } = useLocale();
        const locale = computed(() => appStore.locale);
        const show = ref<boolean>(false);
        const columns = locales.map((l) => {
            return { text: l.title, value: l.locale };
        });
        const onConfirm = (params: PickerConfirmEventParams) => {
            log(params);
            show.value = false;
            if (isArray(params.selectedValues)) {
                changeLocale(getLocale(params.selectedValues[0] as string)).then();
            }
        };
        return () => (
            <>
                <Field
                    modelValue={locale.value}
                    is-link
                    readonly
                    label="语言"
                    onClick={() => {
                        show.value = false;
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
