import { App } from 'vue';
import type { I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import { useAppStoreExternal } from '@commons/core/store';
import { locales } from '@commons/core/utils/locale';
import { toLower } from 'lodash-es';
import { loadCustomMessages } from '@commons/custom/i18n';
import { setHtmlLang } from '@commons/core/utils/html';

export const loadCommonMessages = async (locale: string) => {
    const messages = await import(`./locales/${toLower(locale)}/common.json`);
    return messages.default ?? {};
};

export const loadExtraMessages = async (locale: string) => {
    const messages = await import(`./locales/${toLower(locale)}/extra.json`);
    return messages.default ?? {};
};

export const loadMessages = async (locale: string) => {
    return {
        common: await loadCommonMessages(locale),
        extra: await loadExtraMessages(locale),
        custom: await loadCustomMessages(locale),
    };
};

export const createI18nOptions = async (): Promise<I18nOptions> => {
    const { locale } = useAppStoreExternal();
    await setHtmlLang(locale);
    return {
        sync: true,
        legacy: false,
        allowComposition: true,
        locale: locale,
        fallbackLocale: locale,
        messages: {
            [locale]: await loadMessages(locale),
        },
        availableLocales: locales.map((val) => val.locale),
        silentTranslationWarn: false,
        missingWarn: false,
        silentFallbackWarn: false,
    };
};

export let i18n: ReturnType<typeof createI18n>;

export const setupI18n = async (app: App) => {
    const options = await createI18nOptions();
    i18n = createI18n(options);
    app.use(i18n);
};

export const useI18nExternal = (): any => {
    return i18n.global;
};
