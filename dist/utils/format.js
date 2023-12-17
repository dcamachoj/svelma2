export class Formatter {
    locale;
    constructor(locale = 'es') {
        this.locale = locale;
        this.dateFormat = new Intl.DateTimeFormat(locale, { dateStyle: 'medium' });
        this.timeFormat = new Intl.DateTimeFormat(locale, { timeStyle: 'medium' });
        this.floatFormat = new Intl.NumberFormat(locale, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            compactDisplay: 'short',
            useGrouping: true
        });
        this.intFormat = new Intl.NumberFormat(locale, {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            compactDisplay: 'short',
            useGrouping: true
        });
        this.floatFormat1 = new Intl.NumberFormat(locale, {
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
            compactDisplay: 'short',
            useGrouping: true
        });
    }
    dateFormat;
    timeFormat;
    floatFormat;
    intFormat;
    floatFormat1;
    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
    dateString(date, offset = 0) {
        if (!date)
            return undefined;
        date = new Date(date);
        if (offset)
            date = new Date(date.getTime() + offset * date.getTimezoneOffset() * 60000);
        return this.dateFormat.format(date);
    }
    timeString(date, offset = 0) {
        if (!date)
            return undefined;
        date = new Date(date);
        if (offset)
            date = new Date(date.getTime() + offset * date.getTimezoneOffset() * 60000);
        return this.timeFormat.format(date);
    }
    floatString(value) {
        if (value == undefined)
            return undefined;
        return this.floatFormat.format(value);
    }
    floatString1(value) {
        if (value == undefined)
            return undefined;
        return this.floatFormat1.format(value);
    }
    intString(value) {
        if (value == undefined)
            return undefined;
        return this.intFormat.format(value);
    }
    boolString(value, { ok, no } = { ok: 'Si', no: 'No' }) {
        if (value == undefined)
            return undefined;
        return value ? ok || 'Si' : no || 'No';
    }
    toDate(src, defValue = undefined) {
        try {
            const date = new Date(src);
            const res = new Date(date.getTime() + 60000 * date.getTimezoneOffset());
            return res;
        }
        catch (err) {
            return defValue;
        }
    }
    fromDate(src, defValue = undefined) {
        try {
            const now = new Date();
            const res = (src || now).toISOString().split('T')[0];
            return res;
        }
        catch (err) {
            return defValue;
        }
    }
}
let formatter;
export function getFormatter() {
    if (!formatter)
        formatter = new Formatter();
    return formatter;
}
export function initFormatter(locale) {
    formatter = new Formatter(locale);
    return formatter;
}
