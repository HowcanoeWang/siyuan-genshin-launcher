import {
    Plugin,
    showMessage,
    confirm,
    Dialog,
    getFrontend,
    getBackend,
} from "siyuan";
import "./index.scss";
import packageInfo from '../plugin.json'

const fs = (window as any).require('fs');

const STORAGE_NAME = "Genshin";

export default class PluginSample extends Plugin {

    private isMobile: boolean;

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

    onLayoutReady() {
        this.loadData(STORAGE_NAME);
        console.log(`frontend: ${getFrontend()}; backend: ${getBackend()}`);

        const [renameFiles, mvFiles] = this.generatePath();

        const mvKeys = Object.keys(mvFiles);
        const rnKeys = Object.keys(renameFiles);

        const pluginHtmlVersion = this.hasReplacedTag(mvKeys[0]);
        const appHtmlVersion = this.hasReplacedTag(rnKeys[0] + 'boot.html');

        const [hasFullBackup, backupNum, TotalNum] =  this.hasBackupFiles(renameFiles);

        console.log(pluginHtmlVersion, appHtmlVersion)
    }

    onunload() {
        console.log(this.i18n.byePlugin);
    }

    public generatePath() {
        const os = (window as any).siyuan.config.system.os
        const pname = packageInfo.name;
        
        var appDir = (window as any).siyuan.config.system.appDir;
        var dataDir = (window as any).siyuan.config.system.dataDir;
        if ( os === 'windows'){
            appDir = appDir.replaceAll('\\', '/');
            dataDir = dataDir.replaceAll('\\', '/');
        };

        var renameFiles = {
            // computed property [`...`]
            [`${appDir}/app/electron/`]: 
                ['boot.html', 'icon.png'],
            [`${appDir}/appearance/boot/`]: 
                ['index.html', 'icon.png'],
            [`${appDir}/stage/`]: 
                ['auth.html', 'icon.png', 'icon-large.png', 'loading.svg', 'loading-pure.svg'],
            [`${appDir}/stage/build/app`]: 
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
        
        return [renameFiles, mvFiles];
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

        return [has, hasBackup, totalFileNum]
    }

    // 自定义设置
    public openSetting() {
        const dialog = new Dialog({
            title: this.name,
            content: `
<div class="b3-dialog__content">
    <textarea class="b3-text-field fn__block" placeholder="readonly text in the menu"></textarea>
</div>
<label class="b3-label fn__flex config__item">
   <div class="fn__flex-1">
        恢复默认窗口
        <div class="b3-label__text">重置后窗口布局将恢复初始化状态</div>
    </div>
    <span class="fn__space"></span>
    <button class="b3-button b3-button--outline fn__flex-center fn__size200" id="resetLayout">
        <svg><use xlink:href="#iconUndo"></use></svg>重置
    </button>
</label>
<div class="b3-dialog__action">
    <button class="b3-button b3-button--cancel">${this.i18n.cancel}</button><div class="fn__space"></div>
    <button class="b3-button b3-button--text">${this.i18n.save}</button>
</div>`,
            width: this.isMobile ? "92vw" : "520px",
        });
        const inputElement = dialog.element.querySelector("textarea");
        inputElement.value = this.data[STORAGE_NAME].readonlyText;
        const btnsElement = dialog.element.querySelectorAll(".b3-button");
        dialog.bindInput(inputElement, () => {
            (btnsElement[1] as HTMLButtonElement).click();
        });
        inputElement.focus();
        btnsElement[0].addEventListener("click", () => {
            dialog.destroy();
        });
        btnsElement[1].addEventListener("click", () => {
            this.saveData(STORAGE_NAME, {readonlyText: inputElement.value});
            dialog.destroy();
        });
    }

}