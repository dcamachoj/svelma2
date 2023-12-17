export type ClsValue = string | number | undefined | null;
export type ClsMapping = {
    [key: string]: any;
};
export type ClsArgument = ClsValue | ClsMapping | ClsArgument[];
export type ClsKeyNameConverter = (name: string) => string;
export declare const defaultClsKeyNameConverter: typeof clsKeyNameConverterDashCase;
export declare function getClsKeyNameConverter(): ClsKeyNameConverter;
export declare function setClsKeyNameConverter(fn?: ClsKeyNameConverter): void;
export declare function clsNameConvertSimple(name: string): string;
export declare function clsKeyNameConverterDashCase(name: string): string;
export declare function classnames(...args: ClsArgument[]): string;
