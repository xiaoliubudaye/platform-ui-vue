import { defineComponent } from 'vue';
import { ElSwitch } from 'element-plus';
import { useAppStore } from '@commons/core/store';
import { useDark, useToggle } from '@vueuse/core';
import { Moon, Sunny } from '@commons/core/constants/icons';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'DarkSwitch',
    setup() {
        const isDark = useDark();
        const appStore = useAppStore();
        const onChange = (value: boolean | string | number) => {
            log(`DarkSwitch.onChange ${value}...`);
            useToggle(appStore.dark);
            appStore.setDark(value as boolean);
        };
        return () => (
            <ElSwitch
                modelValue={isDark.value}
                inlinePrompt
                onChange={onChange}
                activeIcon={Moon}
                inactiveIcon={Sunny}
            ></ElSwitch>
        );
    },
});
