import { ElNotification } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import enUs from 'element-plus/lib/locale/lang/en';
import zhTw from 'element-plus/lib/locale/lang/zh-tw';
import { Locale } from '@commons/core/utils/locale';

export const toast = async (message: any) => {
    ElNotification.success({
        message: message,
        offset: 100,
    });
};

export const getLocale = (locale: Locale) => {
    let language = zhCn;
    switch (locale) {
        case Locale.EN_US:
            language = enUs;
            break;
        case Locale.ZH_CN:
            language = zhCn;
            break;
        case Locale.ZH_TW:
            language = zhTw;
            break;
    }
    return language;
};
