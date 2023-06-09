import { Locale as VLocale, showToast } from 'vant';
import enUS from 'vant/es/locale/lang/en-US';
import zhCN from 'vant/es/locale/lang/zh-CN';
import zhTW from 'vant/es/locale/lang/zh-TW';
//
import { Locale } from '@commons/core/utils/locale';
import { log } from '@commons/core/utils';

export const toast = async (message: any) => {
    showToast(message);
};

export const setLocale = (locale: Locale) => {
    log(`Current locale - ${locale}`);
    switch (locale) {
        case Locale.EN_US:
            VLocale.use('en-US', enUS);
            break;
        case Locale.ZH_CN:
            VLocale.use('zh-CN', zhCN);
            break;
        case Locale.ZH_TW:
            VLocale.use('zh-TW', zhTW);
            break;
    }
};
