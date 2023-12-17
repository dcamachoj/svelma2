export class I18n {
    data = {};
    _lang = '';
    get lang() {
        return this._lang;
    }
    get loaded() {
        return Object.keys(this.data).length > 0;
    }
    has(key) {
        return this.data.hasOwnProperty(key);
    }
    merge(lang, data) {
        this._lang = lang;
        Object.entries(data).forEach(([key, val]) => {
            this.data[key] = val;
        });
        return this;
    }
    load(data) {
        Object.entries(data).forEach(([key, val]) => {
            const lang = this._lang;
            this.data[key] = val[lang];
        });
        return this;
    }
    toString(key, params) {
        if (!this.loaded)
            return '';
        let value = this.has(key) ? this.data[key] : key.toUpperCase();
        if (!params) {
            return value;
        }
        Object.entries(params).forEach(([key, val]) => {
            value = value.replaceAll(`{${key.toUpperCase()}}`, `${val}`);
        });
        return value;
    }
    translate(src) {
        const data = {};
        Object.entries(src).forEach(([key, param]) => {
            data[key] = this.toString(key, param);
        });
        return data;
    }
    clone() {
        const copy = new I18n();
        copy._lang = this._lang;
        Object.entries(this.data).forEach(([key, val]) => {
            copy.data[key] = val;
        });
        return copy;
    }
}
export const i18n = new I18n();
export async function initI18n(langGetter, i18nGetter) {
    const lang = langGetter.getLang();
    const data = await i18nGetter.getI18nData(lang);
    i18n.merge(lang, data);
    return i18n;
}
export function prefixLang(prefix, src) {
    const result = {};
    Object.entries(src).forEach(([key, val]) => {
        result[`${prefix}_${key}`] = val;
    });
    return result;
}
