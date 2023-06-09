import { defineComponent, onMounted } from 'vue';
import { NavBar } from 'vant';
import { useI18n } from 'vue-i18n';
import { goBack, log } from '@commons/core/utils';

export default defineComponent({
    name: 'DiscoverPage',
    setup() {
        const { t } = useI18n();

        onMounted(async () => {
            log('Page <<DiscoverPage>> mounted.');
        });

        return () => (
            <>
                <NavBar title={t('common.title')} onClickLeft={goBack}></NavBar>
                <div>
                    <div class={'text-center m-8'}>Discover</div>
                </div>
            </>
        );
    },
});
