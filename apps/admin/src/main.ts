import { createApp } from 'vue';
//
import '@commons/webapp/theme/default.scss';
//
import { getAppTitle, getAppVersion, log } from '@commons/core/utils';
import { setupApp } from '@apps/admin/utils';
import App from '@apps/admin/App';

setupApp(createApp(App)).then(() => {
    log(`App [${getAppTitle()} - ${getAppVersion()}] for admin has been started.`);
});
