import { defineComponent, onMounted, reactive, ref, Ref } from 'vue';
import { useRouter } from 'vue-router';
import { Button, CellGroup, Col, Field, Form, FormInstance, Icon, NavBar, Row, Space } from 'vant';
import { useI18n } from 'vue-i18n';
//
import { useToggle } from '@vueuse/core';
import { useUserStore } from '@commons/core/store';
import { credentials, log, VIcon } from '@commons/core/utils';
import { DarkSelector, LocaleSelector, ThemeSelector } from '@commons/mobile/components';
import { Credentials } from '@commons/core/types';

export default defineComponent({
    name: 'Login',
    setup() {
        const { t } = useI18n();
        const store = useUserStore();
        const router = useRouter();
        const [showPassword, toggle] = useToggle(false);
        const form: Ref<FormInstance> = ref<FormInstance>();
        const model = reactive<Credentials>(credentials);
        const rules = reactive({
            username: [{ required: true, message: 'Please input username' }],
            password: [{ required: true, message: 'Please input password' }],
        });
        const handleSubmit = async () => {
            await form.value.validate();
            store.login(model).then(() => {
                router.push('/');
            });
        };
        onMounted(async () => {
            log('Page <<Login>> mounted.');
        });
        return () => (
            <div>
                <NavBar title={t('common.title')} />
                <div class={'mt-6'}>
                    <Form ref={form}>
                        <CellGroup inset>
                            <Field
                                modelValue={model.username}
                                placeholder={t('common.user_field_username')}
                                rules={rules.username}
                            >
                                {{
                                    leftIcon: () => (
                                        <Icon>
                                            <VIcon icon="ion:person-outline" />
                                        </Icon>
                                    ),
                                }}
                            </Field>
                            <Field
                                modelValue={model.password}
                                placeholder={t('common.user_field_password')}
                                rules={rules.password}
                                type={showPassword ? 'password' : 'text'}
                            >
                                {{
                                    leftIcon: () => (
                                        <Icon>
                                            <VIcon icon="ion:lock-closed-outline" />
                                        </Icon>
                                    ),
                                    rightIcon: () => (
                                        <Icon
                                            name={showPassword ? 'closed-eye' : 'eye'}
                                            onClick={() => toggle(!showPassword)}
                                        />
                                    ),
                                }}
                            </Field>
                            <div class="my-2">
                                <Button onClick={handleSubmit} type="primary" block>
                                    {t('common.button_login')}
                                </Button>
                            </div>
                        </CellGroup>
                        <Row class="px-4 pt-4">
                            <Col span="12" class="text-left">
                                <Space>
                                    <LocaleSelector />
                                    <DarkSelector />
                                    <ThemeSelector />
                                </Space>
                            </Col>
                            <Col span="12" class="text-right">
                                <Button size="small">忘记密码</Button>
                                <Button size="small">注册</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    },
});
