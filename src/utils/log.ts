import mkdirp from 'mkdirp';
import moment from 'moment';
import path from 'path';
import winston, { createLogger, format, transports } from 'winston';

const enum Log_Level {
    Error = 'error',
    Warning = 'warning',
    Info = 'Info',
    Debug = 'debug',
    Verbose = 'verbose'
};

class Logger {

    public static readonly LogLevel: string = Log_Level.Debug;
    public static readonly MaxLogFileSize: number = 1024 * 1024 * 10;
    public static readonly MaxLogFiles: number = 100;
    public static readonly LogFileName: string = "tspress.log";
    public static readonly MaxLogFileNameLength: number = 25;
    public static readonly LogPath: string = "./log";
    public static readonly ProjectRootPath: string = path.join(__dirname, '..');
    public static readonly UseRelativePath: boolean = false;
    private readonly writer: winston.Logger;

    constructor() {
        this.createLogDir();
        this.writer = this.getLogger();
    }

    private createLogDir() {
        try {
            mkdirp.sync(Logger.LogPath);
        } catch(err) {
            console.log(`Create log path FAILED; ${err}`);
            return;
        }
        console.info(`Create log Directory SUCCESS`);
    }

    private getTimeStampFormat(): string {
        return moment().format("YYYY-MM-DD HH:mm:ss.SSS ZZ").trim();
    }

    private getLogger() {
        if(this.writer !== undefined) {
            return this.writer;
        }

        return createLogger({
            transports: [
                new transports.File({
                    filename: path.join(Logger.LogPath, Logger.LogFileName),
                    level: Logger.LogLevel,
                    maxFiles: Logger.MaxLogFiles,
                    maxsize: Logger.MaxLogFileSize,
                    format: format.printf(info => `${this.getTimeStampFormat()} [${info.level.toUpperCase()}] ${info.message}`),
                    tailable: true
                }),
                new transports.Console({
                    level: Logger.LogLevel,
                    format: format.printf(info => `${this.getTimeStampFormat()} [${info.level.toUpperCase()}] ${info.message}`)
                }),
            ]
        });
    }

    private createFinalMessage(message: string) {
        let stackInfo = this.getStackInfo(1);
        let fileNameInfo: string = (Logger.UseRelativePath ? stackInfo?.relativePath : stackInfo?.file) as string;
        let finalMessage: string = `[${fileNameInfo}:${stackInfo?.line}] ${message}`;

        return finalMessage;
    }

    /**
     * @description Error
     */
     public e(...args: any[]) {
        this.writer.error(this.createFinalMessage(this.getLogString(args)));
    }

    /**
     * @description Warn
     */
    public w(...args: any[]) {
        this.writer.warn(this.createFinalMessage(this.getLogString(args)));
    }

    /**
     * @description Info
     */
     public i(...args: any[]) {
        this.writer.info(this.createFinalMessage(this.getLogString(args)));
    }

    /**
     * @description Debug
     */
    public d(...args: any[]) {
        this.writer.debug(this.createFinalMessage(this.getLogString(args)));
    }

    /**
     * @description Verbose
     */
    public v(...args: any[]) {
        this.writer.verbose(this.createFinalMessage(this.getLogString(args)));
    }

    private getLogString(args: any[]) {
        let resultString: string = "";

        for(let i=1; i<args.length; i++) {
            if(typeof(args[i]) === 'object') {
                resultString += JSON.stringify(args[i]) + "\t";
            } else {
                resultString += args[i] + "\t";
            }
        }
        return args[0] + "\t" + resultString;
    }
    
    private getStackInfo(stackIndex: number) {
        let stackList = (new Error(undefined)).stack?.split("\n").slice(3);
        let stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;
        let stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;
        let stackListIndex = stackList?.[stackIndex] || stackList?.[0];

        if(stackListIndex === undefined) {
            throw new Error();
        }

        stackListIndex = stackListIndex.toString();
        let sp = stackReg.exec(stackListIndex) || stackReg2.exec(stackListIndex);

        if(sp && sp.length === 5) {
            return {
                method: sp[1],
                relativePath: path.relative(Logger.ProjectRootPath, sp[2]),
                line: sp[3],
                pos: sp[4],
                file: path.basename(sp[2]),
                stack: stackList?.join("\n")
            };
        }
    }

}

const Log: Logger = new Logger();
export default Log;