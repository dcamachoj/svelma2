export const defaultClsKeyNameConverter = clsKeyNameConverterDashCase;
let clsKeyNameConverter = defaultClsKeyNameConverter;
export function getClsKeyNameConverter() {
    return clsKeyNameConverter;
}
export function setClsKeyNameConverter(fn = defaultClsKeyNameConverter) {
    clsKeyNameConverter = fn;
}
export function clsNameConvertSimple(name) {
    return name;
}
export function clsKeyNameConverterDashCase(name) {
    return name.replaceAll('_', '-');
}
export function classnames(...args) {
    const hasOwn = {}.hasOwnProperty;
    var classes = [];
    args.forEach((arg) => {
        if (!arg)
            return;
        const argType = typeof arg;
        if (argType == 'string' || argType == 'number') {
            classes.push(arg.toString());
        }
        else if (Array.isArray(arg)) {
            if (arg.length) {
                var inner = classnames.apply(null, arg);
                if (inner)
                    classes.push(inner);
            }
        }
        else if (argType == 'object') {
            if (arg.toString === Object.prototype.toString) {
                const obj = arg;
                for (const key in obj) {
                    if (hasOwn.call(obj, key) && obj[key]) {
                        classes.push(clsKeyNameConverter(key));
                    }
                }
            }
            else {
                classes.push(arg.toString());
            }
        }
    });
    return classes.join(' ').split(' ').filter(Boolean).join(' ');
}
