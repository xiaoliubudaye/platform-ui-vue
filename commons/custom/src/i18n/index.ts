import { toLower } from 'lodash-es';

export const loadCustomMessages = async (locale: string) => {
    const messages = await import(`./locales/${toLower(locale)}/common.json`);
    return messages.default ?? {};
};
