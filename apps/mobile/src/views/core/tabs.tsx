import { defineComponent, onMounted, Ref, ref } from 'vue';
import { RouterView } from 'vue-router';
import { Tabbar, TabbarItem } from 'vant';
import { useI18n } from 'vue-i18n';
import { log } from '@commons/core/utils';

export default defineComponent({
    name: 'Tabs',
    setup() {
        const { t } = useI18n();
        const active: Ref<number> = ref<number>(0);

        onMounted(async () => {
            log('Component <<Tabs>> mounted.');
        });

        return () => (
            <>
                <RouterView />
                <Tabbar modelValue={active.value} route>
                    <TabbarItem replace to="/tabs/home" icon="home-o">
                        {t('common.label_home')}
                    </TabbarItem>
                    <TabbarItem replace to="/tabs/discover" icon="search">
                        {t('common.label_discover')}
                    </TabbarItem>
                    <TabbarItem replace to="/tabs/me" icon="setting-o">
                        {t('common.label_me')}
                    </TabbarItem>
                </Tabbar>
            </>
        );
    },
});
