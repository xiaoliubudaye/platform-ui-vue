import { i18n, loadMessages } from '@commons/core/i18n';
import { useAppStoreExternal } from '@commons/core/store';
import { Locale } from '@commons/core/utils/locale';
import { setHtmlLang } from '@commons/core/utils/html';

export const setI18NLocale = async (locale: Locale) => {
    if (i18n.mode === 'legacy') {
        i18n.global.locale = locale;
    } else {
        (i18n.global.locale as any).value = locale;
    }
};

export const setI18NLocaleMessages = async (locale: Locale) => {
    i18n.global.setLocaleMessage(locale, await loadMessages(locale));
};

const changeLocale = async (locale: Locale) => {
    const appStore = useAppStoreExternal();
    await appStore.setLocale(locale);
    await setI18NLocaleMessages(locale);
    await setI18NLocale(locale);
    await setHtmlLang(locale);
};

export const useLocale = () => {
    return {
        changeLocale,
    };
};
