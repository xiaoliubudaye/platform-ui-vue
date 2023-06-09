import { defineComponent, Ref, ref } from 'vue';
import { ElOption, ElSelect } from 'element-plus';
import {
    darkStrategies,
    DarkStrategy,
    DarkStrategyType,
    getDarkStrategy,
    getDarkThemeValue,
    setDarkTheme,
} from '@commons/core/utils/dark';
import { useAppStore } from '@commons/core/store';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'DarkSelect',
    setup() {
        const appStore = useAppStore();
        const mode: Ref<DarkStrategy> = ref<DarkStrategy>(appStore.darkStrategy);
        const onChange = (value: string): void => {
            log(`DarkSelect.onChange ${value}...`);
            const darkStrategy: DarkStrategy = getDarkStrategy(value);
            appStore.setDarkStrategy(darkStrategy);
            appStore.setDark(getDarkThemeValue(darkStrategy));
            setDarkTheme(getDarkThemeValue(darkStrategy));
        };
        return () => (
            <ElSelect modelValue={mode.value} class="m-2" placeholder="Select" size="large" onChange={onChange}>
                {darkStrategies.map((item: DarkStrategyType) => {
                    return <ElOption key={item.strategy} label={item.title} value={item.strategy} />;
                })}
            </ElSelect>
        );
    },
});
