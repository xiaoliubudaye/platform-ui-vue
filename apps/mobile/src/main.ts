import { createApp } from 'vue';
import '@vant/touch-emulator';
//
import '@commons/mobile/theme/default.scss';
//
import { getAppTitle, getAppVersion, log } from '@commons/core/utils';
import { setupApp } from '@apps/mobile/utils';
import App from '@apps/mobile/App';

setupApp(createApp(App)).then(() => {
    log(`App [${getAppTitle()} - ${getAppVersion()}] for mobile has been started.`);
});
