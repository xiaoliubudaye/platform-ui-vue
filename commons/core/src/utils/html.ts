import { Locale } from '@commons/core/utils/locale';

export const setHtmlLang = (locale: Locale | string) => {
    document.querySelector('html')?.setAttribute('lang', locale);
};

export const setHtmlTitle = (title: string) => {
    document.title = title;
};
