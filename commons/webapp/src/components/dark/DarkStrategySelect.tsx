import { defineComponent, Ref, ref } from 'vue';
import { ElOption, ElSelect } from 'element-plus';
import { darkStrategies, DarkStrategy } from '@commons/core/utils/dark';
import { useAppStore } from '@commons/core/store';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'DarkStrategySelect',
    setup() {
        const appStore = useAppStore();
        const mode: Ref<DarkStrategy> = ref<DarkStrategy>(appStore.darkStrategy);
        const onChange = (value: any) => {
            log(`DarkStrategySelect.onChange ${value}...`);
            appStore.setDarkStrategy(value);
            if (value == DarkStrategy.DARK) {
                appStore.setDark(true);
            }
        };
        return () => (
            <ElSelect modelValue={mode.value} class="m-2" placeholder="Select" size="large" onChange={onChange}>
                {darkStrategies.map((t) => {
                    return <ElOption key={t.strategy} label={t.title} value={t.strategy} />;
                })}
            </ElSelect>
        );
    },
});
