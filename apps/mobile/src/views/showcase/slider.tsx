import { defineComponent, onMounted, Ref, ref } from 'vue';
import { log } from '@commons/core/utils';
import { Slider } from 'vant';

export default defineComponent({
    name: 'ShowCaseSliderPage',
    setup() {
        onMounted(async () => {
            log('Page <<ShowCaseSliderPage>> mounted.');
        });
        const cur: Ref<number> = ref(-10);
        const min: Ref<number> = ref(-100);
        const max: Ref<number> = ref(-10);
        return () => (
            <div class="m-6">
                <Slider v-model={cur.value} min={min.value} max={max.value} onChange={(val) => console.log(val)} />
            </div>
        );
    },
});
