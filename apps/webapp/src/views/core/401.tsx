import { Icon } from '@iconify/vue';

export default defineComponent({
    name: '401',
    setup() {
        return () => (
            <div>
                <Icon icon="ep:add-location" width="36px" height="36px" />
                <div class="text-center">About</div>
            </div>
        );
    },
});
