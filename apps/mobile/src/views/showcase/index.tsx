import { defineComponent, onMounted } from 'vue';
import { log } from '@commons/core/utils';
import { Cell, CellGroup } from 'vant';

export default defineComponent({
    name: 'ShowCaseIndexPage',
    setup() {
        onMounted(async () => {
            log('Page <<ShowCaseIndexPage>> mounted.');
        });
        return () => (
            <>
                <CellGroup inset class={'mt-2'}>
                    <Cell title="Slide" to={'/showcase/slider'} isLink />
                </CellGroup>
            </>
        );
    },
});
