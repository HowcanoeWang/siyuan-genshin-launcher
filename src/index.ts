import {
    Plugin,
    showMessage,
    confirm,
    Dialog,
    getFrontend,
    getBackend,
} from "siyuan";
import "./index.scss";

import { exitSiYuan } from "./api";
import { configs } from './configs';
import { info, debug, error } from './utils';
import * as waifu from "./waifu";

const fs = (window as any).require('fs');

const STORAGE_NAME = "Genshin";
const pname = 'siyuan-genshin-launcher';

export default class PluginSample extends Plugin {

    private isMobile: boolean;
    private os: string;
    private backupFiles: {[x: string]: string[]};
    private mvFiles: {[x: string]: string[]};
    private mvKeys: string[];
    private rnKeys: string[];

    private dataDir: string;
    private appDir: string;

    async onload() {
        waifu.prepareWaifu();

        const frontEnd = getFrontend();
        this.os = getBackend();
        this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";

        info(this.i18n.helloPlugin);

        configs.setPlugin(this);
        await configs.load();

        window.waifuMute = configs.get('waifuMute');
        window.waifuAlreayInited = false;
        window.waifuDebugSetting = configs.get('inDev');

        this.appDir = (window as any).siyuan.config.system.appDir;
        this.dataDir = (window as any).siyuan.config.system.dataDir;
        if ( this.os === 'windows'){
            this.appDir = this.appDir.replaceAll('\\', '/');
            this.dataDir = this.dataDir.replaceAll('\\', '/');
        };
    }

    async onLayoutReady() {
        this.loadData(STORAGE_NAME);
        info(`frontend: ${getFrontend()}; backend: ${getBackend()}`);

        [this.backupFiles, this.mvFiles] = this.generatePath();

        this.mvKeys = Object.keys(this.mvFiles);
        this.rnKeys = Object.keys(this.backupFiles);

        // 检查是否有.开头的备份文件
        const [hasFullBackup, backupNum, TotalNum] =  this.hasBackupFiles(this.backupFiles);

        // 检查安装目录的资源版本号，是否与插件自带的资源版本号一致
        const pluginHtmlVersion = this.hasReplacedTag(this.mvKeys[0]);
        const appHtmlVersion = this.hasReplacedTag(this.rnKeys[0] + 'boot.html');

        if (!hasFullBackup || appHtmlVersion < pluginHtmlVersion) {
            this.openSetting();
        }

        waifu.initWaifuElement();
    }

    onunload() {
        info(this.i18n.byePlugin);
    }

    public generatePath() {
        var backupFiles = {
            // computed property [`...`]
            [`${this.appDir}/app/electron/`]: 
                ['boot.html', 'icon.png'],
            [`${this.appDir}/appearance/boot/`]: 
                ['index.html', 'icon.png'],
            [`${this.appDir}/stage/`]: 
                ['auth.html', 'icon.png', 'icon-large.png', 'loading.svg', 'loading-pure.svg'],
            [`${this.appDir}/stage/build/app/`]: 
                ['index.html']
        }

        var mvFiles: { [x: string]: any; } = {
            [`${this.dataDir}/plugins/${pname}/source/appearance_index.html`]: 
                [`${this.appDir}/appearance/boot/index.html`,
                 `${this.appDir}/app/electron/boot.html`],
            [`${this.dataDir}/plugins/${pname}/source/auth.html`]: 
                [`${this.appDir}/stage/auth.html`],
            [`${this.dataDir}/plugins/${pname}/source/build_app_index.html`]:
                [`${this.appDir}/stage/build/app/index.html`],
            [`${this.dataDir}/plugins/${pname}/source/icon.png`]: 
                [`${this.appDir}/appearance/boot/icon.png`,
                 `${this.appDir}/app/electron/icon.png`,
                 `${this.appDir}/stage/icon.png`,
                 `${this.appDir}/stage/icon-large.png`
                ],
            [`${this.dataDir}/plugins/${pname}/source/loading.svg`]: 
                [`${this.appDir}/stage/loading.svg`],
            [`${this.dataDir}/plugins/${pname}/source/loading-pure.svg`]: 
                [`${this.appDir}/stage/loading-pure.svg`],

        }

        // icon files
        if ( this.os === 'windows'){
            backupFiles[`${this.appDir.replace('/resources', '/')}`] = ['SiYuan.exe'];
        };
        if ( this.os === 'darwin'){
            backupFiles[`${this.appDir}/`] = ['icon.icns'];
            mvFiles[`${this.dataDir}/plugins/${pname}/source/iconMac.icns`] = [`${this.appDir}/icon.icns`];
        };
        
        return [backupFiles, mvFiles];
    }

    public hasReplacedTag(htmlPath: string) {
        // not replace: undefined,
        // replace: '4.0.0' (html meta version)

        var tagVersion: any = undefined;

        try{
            var data = fs.readFileSync(htmlPath, 'utf8');
            const metaTagRegex = /<meta\s+name="siyuan-genshin-launcher"\s+content="([^"]+)"\s*\/?>/i;
            const match = data.match(metaTagRegex);

            if (match) {
                tagVersion = match[1]; 
            } 
        } catch (err) {
            console.error('Error reading file:', err);
            return tagVersion;
        }

        return tagVersion;
    }

    public hasBackupFiles(renameFiles: {[x: string]: string[];}) {
        // ensure all has ".index.html", '.icon.png', etc..

        debug(`[index.ts][hasBackupFiles]`, renameFiles)

        const rnKeys = Object.keys(renameFiles);

        var totalFileNum: number = 0;
        var hasBackup: number = 0;
        var has: boolean = false;

        for (var path of rnKeys) {
            var files = renameFiles[path];

            for (var fname of files) {
                var examFile = path + '.' + fname;

                var hasFile = fs.existsSync(examFile);

                totalFileNum += 1;

                if (hasFile) {
                    hasBackup += 1;
                }

                debug(`[index.ts][hasbackupFiles] has examFile: ${examFile}= ${hasFile}`);
            }
        }

        if (hasBackup === totalFileNum) {
            has = true;
        } else 

        // must keep this, otherwise will got undefined error
        info('[index.ts][hasbackupFiles]', has, hasBackup, totalFileNum);

        return [has, hasBackup, totalFileNum]
    }

    public backupCMD(spara='&&'){
        var cmdStr: string = '';

        for (var folder in this.backupFiles) {
            var files = this.backupFiles[folder];
            
            for (var f of files) {
                cmdStr += `mv '${folder}${f}' '${folder}.${f}' ${spara} `;

            }
        }
        
        cmdStr = cmdStr.slice(0, -(spara.length+2));

        return cmdStr;
    }

    public replaceCMD(spara='&&'){

        var cmdStr: string = '';

        for (var sourceFile in this.mvFiles) {
            var targetFiles = this.mvFiles[sourceFile];
            
            for (var targetFile of targetFiles) {
                cmdStr += `cp '${sourceFile}' '${targetFile}' ${spara} `;
            }
        }

        return cmdStr;
    }

    public restoreCMD(spara='&&'){
        var cmdStr: string = '';

        for (var folder in this.backupFiles) {
            var files = this.backupFiles[folder];
            
            for (var f of files) {
                if (spara == '&&') {  // unix system
                    cmdStr += `mv -f '${folder}.${f}' '${folder}${f}' ${spara} `;
                } else { // powershell
                    if (f !== 'SiYuan.exe') {
                        cmdStr += `Move-Item -Path '${folder}.${f}' -Destination '${folder}${f}' -Force ${spara} `;
                    } else {
                        // rewrite / delete the exe current running is not possible
                        // but rename to a new file works
                        cmdStr += `Move-Item -Path '${folder}${f}' -Destination '${folder}..${f}' -Force ${spara} Move-Item -Path '${folder}.${f}' -Destination '${folder}${f}' -Force ${spara}`;
                    }
                }
            }
        }

        return cmdStr;
    }

    public clearMacCache() {
        if (this.os === 'darwin') {
            return 'sudo -S rm -rfv /Library/Caches/com.apple.iconservices.store && killall Dock && killall Finder'
        }
    }

    public clearWinCache() {
        if (this.os === 'windows') {
            return `ie4uinit.exe -show;` + 
            `Get-Process -Name explorer | Stop-Process -Force;` +  `Start-Process explorer`
        }
    }

    public replaceWinExeIconCMD() {
        // .\cei.exe "D:\OneDrive\Program\GitHub\siyuan-genshin-launcher\projects\iconWin.ico" "C:\Program Files\SiYuan\SiYuan.exe" "C:\Program Files\SiYuan\SiYuan2.exe"

        const ceiExeFile = `${this.dataDir}/plugins/${pname}/source/cei.exe`;
        const icoFile = `${this.dataDir}/plugins/${pname}/source/iconWin.ico`
        const siyuanExeFile = `${this.appDir.replace('/resources', '')}/.SiYuan.exe`;
        const siyuanExeChangedFile = `${this.appDir.replace('/resources', '')}/SiYuan.exe`;

        return `${ceiExeFile} '${icoFile}' '${siyuanExeFile}' '${siyuanExeChangedFile}'`
    }

    public async execudeCMD(cmdStr:string){
        // const demoCMD = "cp 'C:\\Users\\hwang\\Desktop\\aaa.bmp' 'C:\\Program Files\\SiYuan\\resources\\aaa.bmp'"
        const spawn = (window as any).require('child_process').spawn;

        // check if ends with spara ‘&&’ or ‘;’
        if (cmdStr.replaceAll(' ', '').slice(-1) === ';') {
            // '\\s*' 无视很多空格
            cmdStr = cmdStr.replace(new RegExp('\\s*' + ';' + '\\s*' + '$'), '');
        } else if (cmdStr.replaceAll(' ', '').slice(-2) === '&&') {
            cmdStr = cmdStr.replace(new RegExp('\\s*' + '&&' + '\\s*' + '$'), '');
        }

        var spawn_cmd:string;
        var spawn_param:{};

        if (this.os === 'windows') {
            spawn_cmd = `Start-Process powershell.exe -Verb runAs -ArgumentList \"-NoExit -Command ${cmdStr}\"`;
            spawn_param = {shell:"powershell.exe"};
        } else {
            spawn_cmd = cmdStr;
            spawn_param = {shell: true};
        }

        const child = spawn(spawn_cmd, spawn_param, 
            (error: any, stdout: any, stderr: any) => {
                if (error) {
                  error(`[index.ts][execudeCMD]执行命令时出错：${error.toString()}`);
                  return;
                }
                info(`[index.ts][execudeCMD]命令输出：\n${stdout.toString()}`);
                error(`[index.ts][execudeCMD]错误输出：\n${stderr.toString()}`);
            }
        );

        // 监听子进程的 stdout 和 stderr 输出
        child.stdout.on('data', (data: any) => {
            info(`[index.ts][execudeCMD]stdout：\n${data.toString()}`);
        });
        
        child.stderr.on('data', (data: any) => {
            error(`[index.ts][execudeCMD]stderr：${data.toString()}`);
        });
    }

    public continueCheckFile(
        fileDir: string, intervalId: number, 
        isexist: boolean, notice:{[key: string]: string}
    ) 
    {
        var finished = false;
        var hasFile = fs.existsSync(fileDir);

        if (isexist) {
            // 直到文件存在
            if (hasFile) {
                finished = true
            }
        } else {
            // 直到文件不存在
            if (!hasFile) {
                finished = true
            }
        }
        
        if (finished) {
            clearInterval(intervalId);

            confirm(notice['title'], notice['text'], ()=>{
                exitSiYuan();
            })
        }
    }

    public openSetting() {
        const dialog = new Dialog({
            title: this.i18n.helloPlugin,
            content: `
<div class="config-assets__preview b3-label" style="flex-direction: column;">
    <img style="max-width: 25%" src="/plugins/${pname}/source/icon.png">
    <h3>${this.i18n.affectAllWarn}</h3>
    <h4>${this.i18n.reinstallInfo}</h4>
</div>
<label class="b3-label fn__flex config__item">
   <div class="fn__flex-1">
        ${this.i18n.replaceTitle}
        <div class="b3-label__text">${this.i18n.replaceSubtitle} ${getBackend()==='windows'? "<span class='ft__error'>"+this.i18n.requireAdmin+"</span>": ''}</div>
    </div>
    <span class="fn__space"></span>
    <button class="b3-button b3-button--outline fn__flex-center fn__size200" id="replaceBtn">
        <svg><use xlink:href="#iconReplace"></use></svg>${this.i18n.replaceBtn}
    </button>
</label>
<label class="b3-label fn__flex config__item">
   <div class="fn__flex-1">
        ${this.i18n.recoverTitle}
        <div class="b3-label__text">${this.i18n.recoverSubtitle} ${getBackend()==='windows'? "<span class='ft__error'>"+this.i18n.requireAdmin+"</span>": ''}</div>
    </div>
    <span class="fn__space"></span>
    <button class="b3-button b3-button--outline fn__flex-center fn__size200" id="recoverBtn" style="pointer-events: auto;">
        <svg><use xlink:href="#iconUndo"></use></svg>${this.i18n.recoverBtn}
    </button>
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${this.i18n.hideWaifuTitle}
        <div class="b3-label__text">${this.i18n.hideWaifuDes}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="waifuHide" type="checkbox">
</label>
<label class="fn__flex b3-label">
    <div class="fn__flex-1">
        ${this.i18n.muteWaifuTitle}
        <div class="b3-label__text">${this.i18n.muteWaifuDes}</div>
    </div>
    <span class="fn__space"></span>
    <input class="b3-switch fn__flex-center" id="waifuMute" type="checkbox">
</label>
<label class="fn__flex b3-label config__item">
<div class="fn__flex-1">
    ${this.i18n.inDevModeLabel}
    <div class="b3-label__text">
        ${this.i18n.inDevModeDes}
    </div>
</div>
<span class="fn__flex-center" />
<input
    id="devModeInput"
    class="b3-switch fn__flex-center"
    type="checkbox"
    value="${configs.get('inDev')}"
/>
</label>
`,
            width: this.isMobile ? "92vw" : "800px",
        });

        // 检查是否有.开头的备份文件
        const [hasFullBackup, backupNum, TotalNum] =  this.hasBackupFiles(this.backupFiles);

        // 检查安装目录的资源版本号，是否与插件自带的资源版本号一致
        const pluginHtmlVersion = this.hasReplacedTag(this.mvKeys[0]);
        const appHtmlVersion = this.hasReplacedTag(this.rnKeys[0] + 'boot.html');

        debug(`[index.ts][openSetting] pluginHtmlVersion=${pluginHtmlVersion}, appHtmlVersion=${appHtmlVersion}`)

        const replaceBtnElement = document.getElementById('replaceBtn') as HTMLButtonElement;
        const recoverBtnElement = document.getElementById('recoverBtn') as HTMLButtonElement;

        if (!appHtmlVersion) {
            // 安装目录/boot.html没有<meta genshin-launcher> tag
            // 激活替换按钮
            replaceBtnElement.disabled = false;
        } else if (appHtmlVersion < pluginHtmlVersion) {
            // 安装目录/boot.html有<meta genshin-launcher> tag
            // 但是tag的版本低于插件自带的tag版本

            // 激活替换按钮
            replaceBtnElement.disabled = false;
            // 并且把按钮文字，更改为更新
            replaceBtnElement.innerHTML = '<svg><use xlink:href="#iconReplace"></use></svg>' + this.i18n.replaceBtnUpdate;
        
        } else {
            replaceBtnElement.disabled = true;
            replaceBtnElement.textContent = this.i18n.replaceBtnText;
        }

        if (hasFullBackup) {
            recoverBtnElement.disabled = false;
            recoverBtnElement.title = '';
        } else {
            recoverBtnElement.disabled = true;
            recoverBtnElement.textContent = this.i18n.recoverBtnText;
            if (!appHtmlVersion) {
                recoverBtnElement.title = this.i18n.recoverBtnTitle2;
            } else {
                recoverBtnElement.title = this.i18n.recoverBtnTitle1;
            }
            
        }

        var spara: string = '';
        if (this.os === 'windows') {
            spara = ';'
        } else {
            spara = '&&'
        }

        replaceBtnElement.addEventListener("click", () => {
            const backupCmdStr = this.backupCMD(spara);
            const replaceCmdStr = this.replaceCMD(spara);

            var finCmdStr: string;

            // 安装目录下的html没有备份文件
            if (!hasFullBackup) {
                // 则先运行备份脚本，然后再进行替换
                info(`[index.ts][openSetting] click replace btn, execute the following command: Backup + Replace Siyuan files:\n${backupCmdStr} ${spara} ${replaceCmdStr}`);

                finCmdStr = backupCmdStr + ` ${spara} ` + replaceCmdStr;

             // 安装目录下的html有备份文件
            } else {
                // 这种情况下，不需要进行备份(会把原本的思源备份给替换掉)
                // 直接运行替换脚本
                info(`[index.ts][openSetting] click replace btn, execute the following command:\nReplace Siyuan files:\n${replaceCmdStr}`);

                finCmdStr = replaceCmdStr;
            }

            // windows replace exe.ico
            if (this.os === 'windows') {
                const winChangeExeStr = this.replaceWinExeIconCMD();
                info(`[index.ts][openSetting] click replace btn, execute the following command:\nReplace Siyuan exe icon:\n${winChangeExeStr}`);

                const clearCacheStr = this.clearWinCache();

                finCmdStr += winChangeExeStr + ` ${spara} ` + clearCacheStr;
            }

            debug(`[index.ts][openSetting] final execude cmd ${finCmdStr}`);

            confirm(this.i18n.batchTitle, this.i18n.batchDes + `<pre style="font-size: 12px;">${
                finCmdStr.replaceAll(/\s*&&\s*/g,  // 无视&&前后的空格，并添加回车
                    '&&\n'
                ).replaceAll(
                    /\s*;\s*/g, // 无视;前后的空格，并添加回车
                    ';\n')
                }</pre>`, 
            async ()=>
            {
                this.execudeCMD(finCmdStr);
                dialog.destroy();

                // 等待执行完毕，弹出刷新对话框
                var intervalId = setInterval( () => 
                    this.continueCheckFile(
                        `${this.appDir}/stage/build/app/.index.html`,
                        intervalId,
                        true, // until found
                        {
                            'title': this.i18n.restartRequest,
                            'text': this.i18n.activated
                        }
                    ), 
                1000);

                // mute the sound of waifu
                window.waifuMute = true;
                configs.set('waifuMute', true);
                // show waifu
                await waifu.setWaifuHide(false);
            })
            
        })

        recoverBtnElement.addEventListener("click", () => {
            const restoreCmdStr = this.restoreCMD(spara);
            var finCmdStr: string = restoreCmdStr;

            if (this.os === 'windows') {
                const clearCacheStr = this.clearWinCache();

                finCmdStr += clearCacheStr;
            }

            info(`[index.ts][openSetting] click recover btn, execute the following command: ${finCmdStr}`);

            confirm(this.i18n.batchTitle, this.i18n.batchDes + `<pre style="font-size: 12px;">${
                finCmdStr.replaceAll(/\s*&&\s*/g,  // 无视&&前后的空格，并添加回车
                    '&&\n'
                ).replaceAll(
                    /\s*;\s*/g, // 无视;前后的空格，并添加回车
                    ';\n')
                }</pre>`, 
            async ()=>
            {
                this.execudeCMD(finCmdStr);
                dialog.destroy();

                // 等待执行完毕，弹出刷新对话框
                var intervalId = setInterval( () => 
                this.continueCheckFile(
                    `${this.appDir}/stage/build/app/.index.html`,
                    intervalId,
                    false, // until not found
                    {
                        'title': this.i18n.restartRequest,
                        'text': this.i18n.deactivated
                    }
                ), 
                1000);

                // close waifu
                await waifu.setWaifuHide(true);
            })

        })

        // 看板娘相关设置
        const waifuHideElement = document.getElementById('waifuHide') as HTMLInputElement;
    
        let waifuStatus = configs.get('waifuHide');
        waifuHideElement.checked = waifuStatus;
        
        waifuHideElement.addEventListener('click', async () => {
            waifuStatus = !waifuStatus;
            waifuHideElement.checked = waifuStatus;
            await waifu.setWaifuHide(waifuStatus);
        })

        // 看板娘静音设置
        const waifuMuteElement = document.getElementById('waifuMute') as HTMLInputElement;

        let waifuMute = configs.get('waifuMute');
        waifuMuteElement.checked = waifuMute;

        debug(`[index.ts][openSetting] config['waifuMute'] = ${configs.get('waifuMute')}; get waifuMute = ${waifuMute}; window.waifuMute = ${window.waifuMute};`)

        waifuMuteElement.addEventListener('click', async () => {
            waifuMute = !waifuMute;
            waifuMuteElement.checked = waifuMute;
            window.waifuMute = waifuMute;

            configs.set('waifuMute', waifuMute);
            await configs.save(`[index][openSetting][waifuMute.change]`);
        })

        // 开发者模式
        const devModeElement = document.getElementById('devModeInput') as HTMLInputElement;
        devModeElement.checked = configs.get('inDev');
    
        devModeElement.addEventListener("click", async () => {
            configs.set('inDev', !configs.get('inDev'));
            devModeElement.checked = configs.get('inDev');
            window.waifuDebugSetting = configs.get('inDev');

            await configs.save('[index][openSetting][devModeElement.change]');

            location.reload();
        })
    }
}