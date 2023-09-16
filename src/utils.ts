import { configs } from './configs'

// simple logging functions
export function info(...msg: any[]): void {
    console.log(`[BgCover Plugin][INFO] ${msg}`);
}

export function debug(...msg: any[]): void {
    if (configs.get('inDev')) {
        console.log(`[BgCover Plugin][DEBUG]`, ...msg);
    }
}

export function error(...msg: any[]): void {
    console.error(`[BgCover][ERROR] ${msg}`);
}

export function warn(...msg: any[]): void {
    console.warn(`[BgCover][WARN] ${msg}`);
}