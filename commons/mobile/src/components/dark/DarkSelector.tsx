import { defineComponent, ref } from 'vue';
import { Button, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { log } from '@commons/core/utils';
import { useAppStore } from '@commons/core/store';
import { darkStrategies, getDarkStrategy, getDarkThemeValue, setDarkTheme } from '@commons/core/utils/dark.ts';

export default defineComponent({
    name: 'ThemePicker',
    setup() {
        const appStore = useAppStore();
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
                <Button
                    plain
                    hairline
                    type="primary"
                    size="small"
                    onClick={() => {
                        show.value = true;
                    }}
                >
                    深色模式
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
