import { ElCard, ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useI18n } from 'vue-i18n';
//
import { log } from '@commons/core/utils';
import '@apps/webapp/layouts/DefaultLayout.scss';
import { DarkSelect } from '@commons/webapp/components';

export default defineComponent({
    name: 'DefaultLayout',
    setup() {
        const { t } = useI18n();

        onMounted(() => {
            log('Page - <<DefaultLayout>> is mounted.');
        });

        return () => (
            <ElContainer class="default-layout">
                <ElHeader class="default-layout-header">
                    <div class="default-layout-navbar">
                        <div class="default-layout-logo">
                            <div class="logo">
                                <span>{t('common.title')}</span>
                            </div>
                        </div>
                        <div class="default-layout-nav">
                            <DarkSelect />
                        </div>
                    </div>
                </ElHeader>
                <ElMain class="default-layout-content">
                    <div class="default-layout-container">
                        <ElCard>
                            <div class="default-layout-main">
                                <div class="default-layout-logo"></div>
                                <div class="default-layout-form">
                                    <slot />
                                </div>
                            </div>
                        </ElCard>
                    </div>
                </ElMain>
                <ElFooter class="default-layout-footer">Copyright@2022</ElFooter>
            </ElContainer>
        );
    },
});
