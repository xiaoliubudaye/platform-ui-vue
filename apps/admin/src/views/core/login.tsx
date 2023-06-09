import { defineComponent, onMounted, reactive, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElButton, ElForm, ElFormItem, ElInput, FormInstance, FormRules } from 'element-plus';
import { useI18n } from 'vue-i18n';
//
import { Credentials } from '@commons/core/types';
import { useUserStore } from '@commons/core/store';
import EntryLayout from '@apps/admin/layouts/EntryLayout.tsx';
import { credentials, log } from '@commons/core/utils';

export default defineComponent({
    name: 'Login',
    setup() {
        const { t } = useI18n();
        const router = useRouter();
        const store = useUserStore();
        const form: Ref<FormInstance> = ref<FormInstance>();
        const model = reactive<Credentials>(credentials);
        const rules = reactive<FormRules>({
            username: [{ required: true, message: 'Please input Activity name' }],
            password: [{ required: true, message: 'Please input Activity name' }],
        });
        const handleSubmit = async (): Promise<void> => {
            await form.value.validate((valid: boolean) => {
                if (valid) {
                    store.login(model).then(() => {
                        router.push('/');
                    });
                }
            });
        };
        onMounted(async () => {
            log('Page <<Login>> mounted.');
        });
        return () => (
            <EntryLayout>
                <h3 class="pt-4 text-center text-2xl">{t('common.button_login')}</h3>
                <ElForm ref={form} label-position="top" model={model} rules={rules}>
                    <ElFormItem label={t('common.user_field_username')} prop="username">
                        <ElInput modelValue={model.username} placeholder={t('common.user_field_username')} />
                    </ElFormItem>
                    <ElFormItem label={t('common.user_field_password')} prop="password">
                        <ElInput modelValue={model.password} placeholder={t('common.user_field_password')} />
                    </ElFormItem>
                    <ElFormItem>
                        <ElButton onClick={handleSubmit} type="primary">
                            {t('common.button_login')}
                        </ElButton>
                        <ElButton
                            onClick={() => {
                                form.value.resetFields();
                            }}
                        >
                            {t('common.button_reset')}
                        </ElButton>
                    </ElFormItem>
                </ElForm>
            </EntryLayout>
        );
    },
});
