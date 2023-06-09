import { defineComponent } from 'vue';
import { ElCard, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useI18n } from 'vue-i18n';
//
import '@apps/admin/layouts/EntryLayout.scss';
//
import {
    DarkSelect,
    DarkStrategySelect,
    LocaleDropdownSelect,
    LocaleSelect,
    ThemeSelect,
} from '@commons/webapp/components';

export default defineComponent({
    name: 'EntryLayout',
    setup(props, { slots }) {
        const { t } = useI18n();
        return () => (
            <ElContainer key="entry-layout" class="entry-layout">
                <ElHeader class="entry-layout-header">
                    <div class="entry-layout-navbar">
                        <div class="entry-layout-logo">
                            <div class="logo">
                                <span>{t('common.title')}</span>
                            </div>
                        </div>
                        <div class="entry-layout-nav">
                            <DarkSelect />
                            <ThemeSelect />
                            <LocaleSelect />
                            <LocaleDropdownSelect />
                            <DarkStrategySelect />
                        </div>
                    </div>
                </ElHeader>
                <ElMain class="entry-layout-content">
                    <div class="entry-layout-container">
                        <ElCard>
                            <div class="entry-layout-main">
                                <div class="entry-layout-logo"></div>
                                <div class="entry-layout-form">{slots.default ? slots.default() : <></>}</div>
                            </div>
                        </ElCard>
                    </div>
                </ElMain>
                <ElFooter class="entry-layout-footer">Copyright@2022</ElFooter>
            </ElContainer>
        );
    },
});
