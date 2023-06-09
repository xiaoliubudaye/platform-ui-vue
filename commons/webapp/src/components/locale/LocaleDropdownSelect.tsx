import { defineComponent } from 'vue';
import { ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon } from 'element-plus';
import { Icon } from '@iconify/vue';
import { getLocale, locales, LocaleType } from '@commons/core/utils/locale';
import { useLocale } from '@commons/core/hooks';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'LocaleDropdownSelect',
    setup() {
        const { changeLocale } = useLocale();
        const onChange = async (value: any): Promise<void> => {
            log(`LocaleDropdownSelect.onChange ${value}...`);
            await changeLocale(getLocale(value)).then();
        };
        return () => (
            <ElDropdown trigger={'hover'} onCommand={onChange}>
                {{
                    default: () => (
                        <ElIcon>
                            <Icon icon="ion:language-outline" />
                        </ElIcon>
                    ),
                    dropdown: () => (
                        <ElDropdownMenu>
                            {locales.map((t: LocaleType) => {
                                return (
                                    <ElDropdownItem key={t.locale} command={t.locale}>
                                        {t.title}
                                    </ElDropdownItem>
                                );
                            })}
                        </ElDropdownMenu>
                    ),
                }}
            </ElDropdown>
        );
    },
});
