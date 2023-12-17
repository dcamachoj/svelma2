const LogLevels = ['error', 'warn', 'info', 'debug'];
const LogLevelError = 0;
const LogLevelWarn = 1;
const LogLevelInfo = 2;
const LogLevelDebug = 3;
export class Logger {
    _level;
    constructor(logLevel = 'info') {
        this._level = LogLevels.indexOf(logLevel.trim().toLowerCase() || 'info');
        if (this._level == -1)
            this._level = LogLevelInfo;
    }
    _canLog(level) {
        return level <= this._level;
    }
    error(message, ...optionalParams) {
        if (!this._canLog(LogLevelError))
            return;
        console.error(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        if (!this._canLog(LogLevelWarn))
            return;
        console.warn(message, ...optionalParams);
    }
    info(message, ...optionalParams) {
        if (!this._canLog(LogLevelInfo))
            return;
        console.info(message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        if (!this._canLog(LogLevelDebug))
            return;
        console.log(message, ...optionalParams);
    }
}
let logger;
export function getLogger() {
    if (!logger)
        logger = new Logger();
    return logger;
}
export function initLogger(level) {
    logger = new Logger(level);
    return logger;
}
