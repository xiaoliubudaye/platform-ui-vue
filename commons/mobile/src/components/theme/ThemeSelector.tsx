import { defineComponent, onMounted, ref, Ref } from 'vue';
import { useAppStore } from '@commons/core/store';
import { Button, Picker, PickerConfirmEventParams, Popup } from 'vant';
import { isArray } from 'lodash-es';
import { getTheme, themes } from '@commons/core/utils/theme';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'ThemeSelector',
    setup() {
        const appStore = useAppStore();
        const show: Ref<boolean> = ref<boolean>(false);
        const columns = themes.map((t) => {
            return { text: t.title, value: t.theme };
        });
        const onConfirm = (params: PickerConfirmEventParams) => {
            log(params);
            show.value = false;
            if (isArray(params.selectedValues)) {
                appStore.setTheme(getTheme(params.selectedValues[0] as string));
            }
        };

        onMounted(async () => {
            log('Component <<ThemeSelector>> mounted.');
        });

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
                    主题
                </Button>
                <Popup show={show.value} round position="bottom">
                    <Picker
                        columns={columns}
                        onConfirm={onConfirm}
                        onCancel={() => {
                            show.value = false;
                        }}
                    ></Picker>
                </Popup>
            </>
        );
    },
});

//
// <template>
//     <van-button plain hairline type="primary" size="small" @click="show = !show">主题</van-button>
//     <van-popup v-model:show="show" round position="bottom">
//         <van-picker :columns="columns" @confirm="onConfirm" @cancel="show = false" />
//     </van-popup>
// </template>
