declare global {
    interface Window { 
        waifuMute : boolean,
        initModel: Function,
        waifuAlreayInited: boolean,
        waifuDebugSetting: boolean,
    }
}

export const configFile = 'genshin-lanuch-setting.json';

export type configKey = (
    'waifuHide' |'waifuMute' | 'inDev'
);

export var defaultConfigs = {
    'waifuHide': false as boolean,
    'waifuMute': true as boolean, 
    'inDev': false as boolean,
};