import { defineComponent } from 'vue';
import { onMounted } from 'vue';
import {
    DarkSelect,
    DarkStrategySelect,
    LocaleDropdownSelect,
    LocaleSelect,
    ThemeSelect,
} from '@commons/webapp/components';
import { ElCard, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        const { t } = useI18n();
        return () => (
            <ElContainer key="entry-layout" class="entry-layout">
                <ElHeader class="entry-layout-header">
                    <div class="entry-layout-navbar">
                        <div class="entry-layout-logo">
                            <div class="logo">
                                <span>{t('site_title')}</span>
                            </div>
                        </div>
                        <div class="entry-layout-nav">
                            <dark-select />
                            <theme-select />
                            <locale-select />
                            <locale-dropdown-select />
                            <dark-strategy-select />
                        </div>
                    </div>
                </ElHeader>
                <ElMain class="entry-layout-content">
                    <div class="entry-layout-container">
                        <ElCard>
                            <div class="entry-layout-main">
                                <div class="entry-layout-logo"></div>
                                <div class="entry-layout-form">
                                    <slot />
                                </div>
                            </div>
                        </ElCard>
                    </div>
                </ElMain>
                <ElFooter class="entry-layout-footer">Copyright@2022</ElFooter>
            </ElContainer>
        );
    },
});
