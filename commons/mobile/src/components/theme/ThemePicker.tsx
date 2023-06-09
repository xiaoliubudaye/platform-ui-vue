import { computed, defineComponent, onMounted, Ref, ref } from 'vue';
import { Field, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { getTheme, themes } from '@commons/core/utils/theme';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';

export default defineComponent({
    name: 'ThemePicker',
    setup() {
        const appStore = useAppStore();
        const show: Ref<boolean> = ref<boolean>(false);
        const columns = themes.map((t) => {
            return { text: t.title, value: t.theme };
        });
        const theme = computed(() => appStore.theme);
        const onConfirm = (params: PickerConfirmEventParams) => {
            log(params);
            show.value = false;
            if (isArray(params.selectedValues)) {
                appStore.setTheme(getTheme(params.selectedValues[0] as string));
            }
        };

        onMounted(async () => {
            log('Component <<ThemePicker>> mounted.');
        });

        return () => (
            <>
                <Field
                    modelValue={theme.value}
                    is-link
                    readonly
                    label="主题"
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
