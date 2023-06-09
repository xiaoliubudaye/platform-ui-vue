import { defineComponent, ref } from 'vue';
import { isArray } from 'lodash-es';
import { Button, Picker, PickerConfirmEventParams, Popup } from 'vant';
//
import { log } from '@commons/core/utils';
import { getLocale, locales } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks';

export default defineComponent({
    name: 'LocaleSelector',
    setup() {
        const { changeLocale } = useLocale();
        const show = ref<boolean>(false);
        const columns = locales.map((l) => {
            return { text: l.title, value: l.locale };
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
                <Button
                    plain
                    hairline
                    square
                    type="primary"
                    size="small"
                    onClick={() => {
                        show.value = true;
                    }}
                >
                    语言
                </Button>
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
