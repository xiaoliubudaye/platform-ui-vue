import { defineComponent, Ref, ref } from 'vue';
import { Theme, themes, ThemeType } from '@commons/core/utils/theme';
import { useAppStore } from '@commons/core/store';
import { ElOption, ElSelect } from 'element-plus';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'DarkSelect',
    setup() {
        const appStore = useAppStore();
        const model: Ref<Theme> = ref(appStore.theme);
        const onChange = (value: any) => {
            log(`ThemeSelect.onChange ${value}...`);
            appStore.setTheme(value);
        };
        return () => (
            <ElSelect modelValue={model.value} class="m-2" placeholder="Select" size="large" onChange={onChange}>
                {themes.map((item: ThemeType) => {
                    return <ElOption key={item.theme} label={item.title} value={item.theme} />;
                })}
            </ElSelect>
        );
    },
});
