import {
    Plugin,
    showMessage,
    confirm,
    Dialog,
    getFrontend,
    getBackend,
} from "siyuan";
import "./index.scss";
// import * as waifujs from './l2d/waifu-tips.js';
// import * as l2djs from './l2d/live2d_bundle';

const fs = (window as any).require('fs');

const STORAGE_NAME = "Genshin";
const pname = 'siyuan-genshin-launcher';

export default class PluginSample extends Plugin {

    private isMobile: boolean;
    private backupFiles: {[x: string]: string[]};
    private mvFiles: {[x: string]: string[]};
    private mvKeys: string[];
    private rnKeys: string[];

    onload() {
        this.data[STORAGE_NAME] = {readonlyText: "Readonly"};

        const frontEnd = getFrontend();
        this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";
        // 图标的制作参见帮助文档
        this.addIcons(`<symbol id="iconFace" viewBox="0 0 32 32">
<path d="M13.667 17.333c0 0.92-0.747 1.667-1.667 1.667s-1.667-0.747-1.667-1.667 0.747-1.667 1.667-1.667 1.667 0.747 1.667 1.667zM20 15.667c-0.92 0-1.667 0.747-1.667 1.667s0.747 1.667 1.667 1.667 1.667-0.747 1.667-1.667-0.747-1.667-1.667-1.667zM29.333 16c0 7.36-5.973 13.333-13.333 13.333s-13.333-5.973-13.333-13.333 5.973-13.333 13.333-13.333 13.333 5.973 13.333 13.333zM14.213 5.493c1.867 3.093 5.253 5.173 9.12 5.173 0.613 0 1.213-0.067 1.787-0.16-1.867-3.093-5.253-5.173-9.12-5.173-0.613 0-1.213 0.067-1.787 0.16zM5.893 12.627c2.28-1.293 4.040-3.4 4.88-5.92-2.28 1.293-4.040 3.4-4.88 5.92zM26.667 16c0-1.040-0.16-2.040-0.44-2.987-0.933 0.2-1.893 0.32-2.893 0.32-4.173 0-7.893-1.92-10.347-4.92-1.4 3.413-4.187 6.093-7.653 7.4 0.013 0.053 0 0.12 0 0.187 0 5.88 4.787 10.667 10.667 10.667s10.667-4.787 10.667-10.667z"></path>
</symbol>
<symbol id="iconSaving" viewBox="0 0 32 32">
<path d="M20 13.333c0-0.733 0.6-1.333 1.333-1.333s1.333 0.6 1.333 1.333c0 0.733-0.6 1.333-1.333 1.333s-1.333-0.6-1.333-1.333zM10.667 12h6.667v-2.667h-6.667v2.667zM29.333 10v9.293l-3.76 1.253-2.24 7.453h-7.333v-2.667h-2.667v2.667h-7.333c0 0-3.333-11.28-3.333-15.333s3.28-7.333 7.333-7.333h6.667c1.213-1.613 3.147-2.667 5.333-2.667 1.107 0 2 0.893 2 2 0 0.28-0.053 0.533-0.16 0.773-0.187 0.453-0.347 0.973-0.427 1.533l3.027 3.027h2.893zM26.667 12.667h-1.333l-4.667-4.667c0-0.867 0.12-1.72 0.347-2.547-1.293 0.333-2.347 1.293-2.787 2.547h-8.227c-2.573 0-4.667 2.093-4.667 4.667 0 2.507 1.627 8.867 2.68 12.667h2.653v-2.667h8v2.667h2.68l2.067-6.867 3.253-1.093v-4.707z"></path>
</symbol>`);

        console.log(this.i18n.helloPlugin);
    }

    async onLayoutReady() {
        this.loadData(STORAGE_NAME);
        console.log(`frontend: ${getFrontend()}; backend: ${getBackend()}`);

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

        await this.waifu();
    }

    onunload() {
        console.log(this.i18n.byePlugin);
    }

    public generatePath() {
        const os = (window as any).siyuan.config.system.os
        
        var appDir = (window as any).siyuan.config.system.appDir;
        var dataDir = (window as any).siyuan.config.system.dataDir;
        if ( os === 'windows'){
            appDir = appDir.replaceAll('\\', '/');
            dataDir = dataDir.replaceAll('\\', '/');
        };

        var backupFiles = {
            // computed property [`...`]
            [`${appDir}/app/electron/`]: 
                ['boot.html', 'icon.png'],
            [`${appDir}/appearance/boot/`]: 
                ['index.html', 'icon.png'],
            [`${appDir}/stage/`]: 
                ['auth.html', 'icon.png', 'icon-large.png', 'loading.svg', 'loading-pure.svg'],
            [`${appDir}/stage/build/app/`]: 
                ['index.html']
        }

        var mvFiles: { [x: string]: any; } = {
            [`${dataDir}/plugins/${pname}/source/appearance_index.html`]: 
                [`${appDir}/appearance/boot/index.html`,
                 `${appDir}/app/electron/boot.html`],
            [`${dataDir}/plugins/${pname}/source/auth.html`]: 
                [`${appDir}/stage/auth.html`],
            [`${dataDir}/plugins/${pname}/source/build_app_index.html`]:
                [`${appDir}/stage/build/app/index.html`],
            [`${dataDir}/plugins/${pname}/source/icon.png`]: 
                [`${appDir}/appearance/boot/icon.png`,
                 `${appDir}/app/electron/icon.png`,
                 `${appDir}/stage/icon.png`,
                 `${appDir}/stage/icon-large.png`
                ],
            [`${dataDir}/plugins/${pname}/source/loading.svg`]: 
                [`${appDir}/stage/loading.svg`],
            [`${dataDir}/plugins/${pname}/source/loading-pure.svg`]: 
                [`${appDir}/stage/loading-pure.svg`],

        }
        
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

        // console.log("hasBackupFiles", renameFiles)

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

                console.log(examFile, hasFile);
            }
        }

        if (hasBackup === totalFileNum) {
            has = true;
        } else 

        // must keep this, otherwise will got undefined error
        console.log('hasBackupFiles', has, hasBackup, totalFileNum);

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

        cmdStr = cmdStr.slice(0, -(spara.length+2));

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
                    cmdStr += `mv '${folder}.${f}' '${folder}${f}' -Force ${spara} `;
                }
                
            }
        }
        
        cmdStr = cmdStr.slice(0, -(spara.length+2));

        return cmdStr;
    }


    public execudeCMD(cmdStr:string){
        // const demoCMD = "cp 'C:\\Users\\hwang\\Desktop\\aaa.bmp' 'C:\\Program Files\\SiYuan\\resources\\aaa.bmp'"
        const spawn = (window as any).require('child_process').spawn;

        if (getBackend() === 'windows') {
            spawn(
                `Start-Process powershell.exe -Verb runAs -ArgumentList \"-NoExit -Command ${cmdStr}\"`, 
                {shell:"powershell.exe"}
            );
        } else {
            spawn(cmdStr, {shell: true});
        }
    }
    // 自定义设置
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
`,
            width: this.isMobile ? "92vw" : "800px",
        });

        // 检查是否有.开头的备份文件
        const [hasFullBackup, backupNum, TotalNum] =  this.hasBackupFiles(this.backupFiles);

        // 检查安装目录的资源版本号，是否与插件自带的资源版本号一致
        const pluginHtmlVersion = this.hasReplacedTag(this.mvKeys[0]);
        const appHtmlVersion = this.hasReplacedTag(this.rnKeys[0] + 'boot.html');

        console.log(pluginHtmlVersion, appHtmlVersion)

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
        if (getBackend() === 'windows') {
            spara = ';'
        } else {
            spara = '&&'
        }

        replaceBtnElement.addEventListener("click", () => {
            const backupCmdStr = this.backupCMD(spara);
            const replaceCmdStr = this.replaceCMD(spara);

            // 安装目录下的html没有备份文件
            if (!hasFullBackup) {
                // 则先运行备份脚本，然后再进行替换
                console.log(`click replace btn, execute the following command: Backup Siyuan files:\n${backupCmdStr}\nReplace Siyuan files:\n${replaceCmdStr}`);

                this.execudeCMD(backupCmdStr + ` ${spara} ` + replaceCmdStr);

             // 安装目录下的html有备份文件
            } else {
                // 这种情况下，不需要进行备份(会把原本的思源备份给替换掉)
                // 直接运行替换脚本
                console.log(`click replace btn, execute the following command:\nReplace Siyuan files:\n${replaceCmdStr}`);

                this.execudeCMD(replaceCmdStr);
            }


            dialog.destroy();

            showMessage(this.i18n.activated, 10000, "info")
        })

        recoverBtnElement.addEventListener("click", () => {
            const restoreCmdStr = this.restoreCMD(spara);
            console.log(`click recover btn, execute the following command: ${restoreCmdStr}`);

            this.execudeCMD(restoreCmdStr);

            dialog.destroy();

            showMessage(this.i18n.deactivated, 10000, "info")
        })
    }

    public async unzipPaimon() {
        const wsDir = (window as any).siyuan.config.system.workspaceDir;
        const modelFolder = `${wsDir}/data/plugins/${pname}/l2d/model/paimon/`;
        const zipFile = `${wsDir}/data/plugins/${pname}/source/paimon.zip`

        let res = await fetch("/api/archive/unzip", {
            method: "POST",
            // body: data,
            body: JSON.stringify({
                "path": modelFolder,
                "zipPath": zipFile
            })
        });
        return await res.json();
    }

    public async waifu(){
        // unzip if model not exists
        const fs = (window as any).require('fs');
        
        if (!fs.existsSync(`./plugins/${pname}/l2d/model/paimon/`)) {
            console.log('unzip paimon.zip');
            const res = await this.unzipPaimon();
            console.log(res);
        }

        const waifuElement = document.createElement('div');
        waifuElement.id = "waifu";

        const waifuInnerHTML = `
            <div id="waifu-message"></div>
            <div class="waifu-tool">
                <span class="icon-next"></span>
                <span class="icon-home"></span>
                <span class="icon-message"></span>
                <span class="icon-camera"></span>
                <span class="icon-volumeup"></span>
                <span class="icon-volumedown"></span>
                <span class="icon-about"></span>
                <span class="icon-cross"></span>
            </div>
            <canvas id="live2d2"></canvas>
            <canvas id="live2d4"></canvas>
        `
        waifuElement.innerHTML = waifuInnerHTML;

        document.body.appendChild(waifuElement);

        // 添加<script>
        // <script src="dist/live2d_bundle.js"></script>
        // <script async type="module" src="waifu-tips.js"></script>
        const live2d_bundle_js = document.createElement('script');
        live2d_bundle_js.src = `./plugins/${pname}/l2d/live2d_bundle.js`;
        document.body.appendChild(live2d_bundle_js);

        
        const waifu_tips_js = document.createElement('script');
        waifu_tips_js.src = `./plugins/${pname}/l2d/waifu-tips.js`;
        waifu_tips_js.setAttribute('type', 'module');
        waifu_tips_js.async = true;
        
        document.body.appendChild(waifu_tips_js);
        
        // const waifujs = await import('./l2d/waifu-tips.js');

        // show model
        // sessionStorage.removeItem('waifuHide');
        // document.getElementById('waifu').classList.remove('hide');
        // waifujs.initModel();
    }

}