import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About',
    setup() {
        return () => (
            <div>
                <div class="text-center">About</div>
            </div>
        );
    },
});
