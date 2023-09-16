declare global {
    interface Window { 
        waifuMute : Boolean,
        initModel: Function;
        waifuAlreayInited: Boolean;
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