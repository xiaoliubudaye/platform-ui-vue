import { useUserStore } from '@commons/core/store';
import { computed, defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
    name: 'UserIndexPage',
    setup() {
        const userStore = useUserStore();
        const username = computed(() => userStore.user?.username || '');
        return () => (
            <div>
                <Icon icon="ep:add-location" width="36px" height="36px" />
                <div class="text-center">{username}</div>
            </div>
        );
    },
});
