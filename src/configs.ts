/**
 * Copyright (c) 2023 frostime. All rights reserved.
 * https://github.com/frostime/siyuan-dailynote-today/blob/main/src/global-status.ts
 */

import { Plugin } from 'siyuan';
import { info, debug, error } from './utils'
import * as cst from './constants'

class configManager {
    plugin: Plugin;

    settings: any = structuredClone(cst.defaultConfigs);

    setPlugin(plugin: Plugin) {
        this.plugin = plugin;
    }

    get(key: cst.configKey) {
        return this.settings?.[key];
    }

    set(key: any, value: any) {
        // info(`Setting update: ${key} = ${value}`)
        if (!(key in this.settings)) {
            error(`"${key}" is not a setting`);
            return;
        }

        this.settings[key] = value;
    }

    async reset() {
        this.settings = structuredClone(cst.defaultConfigs);
        this.save();
    }

    /**
     * 导入的时候，需要先加载设置；如果没有设置，则使用默认设置
     */
    async load() {
        let loaded = await this.plugin.loadData(cst.configFile);
        if (loaded == null || loaded == undefined || loaded == '') {
            //如果没有配置文件，则使用默认配置，并保存
            debug(`没有配置文件，使用默认配置`)
            this.save('[configs][load init]');
        } else {
            //如果有配置文件，则使用配置文件
            debug(`读入配置文件: ${cst.configFile}`)
            //Docker 和  Windows 不知为何行为不一致, 一个读入字符串，一个读入对象
            //为了兼容，这里做一下判断
            if (typeof loaded === 'string') {
                loaded = JSON.parse(loaded);
            }
            // 如果读取的配置文件版本比默认的版本低 或者 版本号不存在
            // const cfg_version = this.get('version')
            // let need_update = false
            // if (cfg_version == null || cfg_version == undefined || cfg_version == '' || cfg_version < defaultSettings.version) {
            //     need_update = true
            // }
            try {
                for (let key in loaded) {
                    // always load the old version info
                    // if (key === 'version'){
                    //     continue
                    // }
                    if (key in cst.defaultConfigs) {
                        this.set(key, loaded[key]);
                    }
                }
            } catch (error_msg) {
                error(`Setting load error: ${error_msg}`);
            }

            this.save('[configs][load update]');
        }
        // eventBus.publish(eventBus.EventSettingLoaded, {});
    }

    async save(logHeader?:String) {
        let json = JSON.stringify(this.settings);
        if (logHeader) {
            debug(`${logHeader}写入配置文件:`, json);
        } else {
            debug(`写入配置文件:`, json);
        }
        
        this.plugin.saveData(cst.configFile, json);
    }
}

export const configs: configManager = new configManager();