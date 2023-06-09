import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'path';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';
import { viteVConsole } from 'vite-plugin-vconsole';
import { isEmpty, toNumber } from 'lodash';
import VueI18n from '@intlify/unplugin-vue-i18n/vite';

export default defineConfig(async ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`Vite for webapp. command - ${command}. mode - ${mode}.`);
    console.log(`command - ${command}. mode - ${mode}.`);
    console.log(env);
    return {
        base: !isEmpty(env.VITE_APP_BASE) ? env.VITE_APP_BASE : '/',
        resolve: {
            alias: {
                '~element-plus': 'element-plus',
            },
        },
        plugins: [
            vue(),
            vueJsx(),
            tsconfigPaths(),
            Inspect(),
            viteVConsole({
                entry: [resolve(__dirname, 'src/main.ts')],
                localEnabled: true,
                enabled: mode === 'development',
            }),
            VueI18n({}),
            AutoImport({
                imports: ['vue'],
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                dts: resolve(__dirname, 'src/types/auto-imports.d.ts'),
            }),
            Components({
                resolvers: [
                    ElementPlusResolver({
                        importStyle: 'sass',
                    }),
                    IconsResolver({
                        enabledCollections: ['ep', 'mdi', 'ant-design', 'ion'],
                    }),
                ],
                dts: resolve(__dirname, 'src/types/components.d.ts'),
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        server: {
            host: !isEmpty(env.VITE_HOST) ? env.VITE_HOST : '0.0.0.0',
            port: !isEmpty(env.VITE_PORT) ? toNumber(env.VITE_PORT) : 8081,
        },
        build: {
            target: 'ES2015',
        },
    };
});
