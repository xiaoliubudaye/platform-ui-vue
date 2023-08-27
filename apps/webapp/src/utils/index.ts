import { App } from 'vue';
import { log } from '@commons/core/utils';
import { env } from '@commons/core/env';
import { setup } from '@commons/webapp/utils';
import { routes } from '@apps/webapp/router';

export const setupApp = async (app: App): Promise<void> => {
    log(`App for webapp initialize...`);
    await setup(app, { routes: routes, base: env.router.base, mode: env.router.mode });
};
