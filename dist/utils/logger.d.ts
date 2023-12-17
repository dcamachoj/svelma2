export declare class Logger {
    _level: number;
    constructor(logLevel?: string);
    _canLog(level: number): boolean;
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    debug(message?: any, ...optionalParams: any[]): void;
}
export declare function getLogger(): Logger;
export declare function initLogger(level?: string): Logger;
