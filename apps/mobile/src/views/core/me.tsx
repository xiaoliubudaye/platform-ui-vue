import { defineComponent, onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { CameraService, CoreService } from '@commons/core/services';
import { Cell, CellGroup, Icon, NavBar, Space } from 'vant';
import { useI18n } from 'vue-i18n';

export default defineComponent({
    name: 'MePage',
    setup() {
        const { t } = useI18n();
        const handleClick = (v: number) => alert(v);

        onMounted(async () => {
            log('Page <<MePage>> mounted.');
            await CoreService.initialize().then();
        });

        return () => (
            <>
                <NavBar onClickLeft={CameraService.getPhoto}>
                    {{
                        right: (
                            <Space>
                                <Icon name={'scan'} onClick={handleClick} />
                                <Icon name={'setting-o'} onClick={handleClick} />
                                <Icon name={'chat-o'} onClick={handleClick} />
                            </Space>
                        ),
                    }}
                </NavBar>
                <CellGroup inset class={'mt-2'}>
                    <Cell title={t('common.label_setting')} to={'/setting'} isLink />
                    <Cell title={t('common.label_about')} to={'/about'} isLink />
                </CellGroup>
            </>
        );
    },
});
