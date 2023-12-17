export declare class Formatter {
    readonly locale: string;
    constructor(locale?: string);
    private readonly dateFormat;
    private readonly timeFormat;
    private readonly floatFormat;
    private readonly intFormat;
    private readonly floatFormat1;
    clamp(value: number, min: number, max: number): number;
    dateString(date: Date | undefined, offset?: number): string | undefined;
    timeString(date: Date | undefined, offset?: number): string | undefined;
    floatString(value: number | undefined): string | undefined;
    floatString1(value: number | undefined): string | undefined;
    intString(value: number | undefined): string | undefined;
    boolString(value: boolean | undefined, { ok, no }?: {
        ok: string;
        no: string;
    }): string | undefined;
    toDate(src: string, defValue?: Date | undefined): Date | undefined;
    fromDate(src: Date | undefined, defValue?: string | undefined): string | undefined;
}
export declare function getFormatter(): Formatter;
export declare function initFormatter(locale: string): Formatter;
