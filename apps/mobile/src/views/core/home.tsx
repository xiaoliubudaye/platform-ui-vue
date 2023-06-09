import { defineComponent, onMounted, Ref, ref } from 'vue';
import { homeApi } from '@commons/core/api/home';
import { log } from '@commons/core/utils';
import { Button, Col, Icon, NoticeBar, Row, Search, Slider, Space, Sticky, Tab, Tabs } from 'vant';

export default defineComponent({
    name: 'HomePage',
    setup() {
        const active: Ref<number> = ref<number>(0);
        const handleClick = (v: number) => {
            alert(v);
            cur.value = -90;
        };
        onMounted(async () => {
            log('Page <<HomePage>> mounted.');
            homeApi().then();
        });
        const cur: Ref<number> = ref(-10);
        const min: Ref<number> = ref(-100);
        const max: Ref<number> = ref(-10);
        return () => (
            <>
                <Sticky>
                    <NoticeBar mode={'closeable'} leftIcon={'volume-o'} text={'Good Good Study'} />
                    <Row justify={'center'} align={'center'}>
                        <Col span="19">
                            <Search shape={'round'} placeholder={'Search'}></Search>
                        </Col>
                        <Col span="4">
                            <Space>
                                <Icon color={'primary'} onClick={handleClick} name={'scan'} />
                                <Icon color={'primary'} onClick={handleClick} name={'scan'} />
                            </Space>
                        </Col>
                    </Row>
                    <Tabs active={active.value}>
                        <Tab key={0} title={'Home'} />
                        <Tab key={0} title={'Me'} />
                    </Tabs>
                </Sticky>
                <div>
                    <div class={'text-center m-8'}>
                        <Button type={'primary'} to={'/login'}>
                            Login
                        </Button>
                    </div>
                </div>
                <div>
                    <Slider v-model={cur.value} min={min.value} max={max.value} onChange={(val) => console.log(val)} />
                </div>
            </>
        );
    },
});
