import { createApp } from 'vue';
//
import '@commons/webapp/theme/default.scss';
//
import { getAppTitle, getAppVersion, log } from '@commons/core/utils';
import { setupApp } from '@apps/webapp/utils';
import App from '@apps/webapp/App';

setupApp(createApp(App)).then(() => {
    log(`App [${getAppTitle()} - ${getAppVersion()}] for webapp has been started.`);
});
