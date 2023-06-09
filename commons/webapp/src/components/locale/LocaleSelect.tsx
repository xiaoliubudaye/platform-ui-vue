import { defineComponent, ref, Ref } from 'vue';
import { useAppStore } from '@commons/core/store';
import { ElOption, ElSelect } from 'element-plus';
import { getLocale, Locale, locales, LocaleType } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'LocaleSelect',
    setup() {
        const appStore = useAppStore();
        const { changeLocale } = useLocale();
        const model: Ref<Locale> = ref<Locale>(appStore.locale);
        const onChange = async (value: any): Promise<void> => {
            log(`LocaleSelect.onChange ${value}...`);
            await changeLocale(getLocale(value)).then();
        };
        return () => (
            <ElSelect modelValue={model.value} class="m-2" placeholder="Select" size="large" onChange={onChange}>
                {locales.map((item: LocaleType) => {
                    return <ElOption key={item.locale} label={item.title} value={item.locale} />;
                })}
            </ElSelect>
        );
    },
});
