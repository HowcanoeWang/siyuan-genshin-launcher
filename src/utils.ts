import { configs } from './configs'

// simple logging functions
export function info(...msg: any[]): void {
    console.log(`[Genshin Plugin][INFO] ${msg}`);
}

export function debug(...msg: any[]): void {
    if (configs.get('inDev')) {
        console.log(`[Genshin Plugin][DEBUG]`, ...msg);
    }
}

export function error(...msg: any[]): void {
    console.error(`[Genshin Plugin][ERROR] ${msg}`);
}

export function warn(...msg: any[]): void {
    console.warn(`[Genshin Plugin][WARN] ${msg}`);
}