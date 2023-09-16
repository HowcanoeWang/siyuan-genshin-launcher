import { configs } from "./configs";
import { info, debug, error } from "./utils";

const pname = 'siyuan-genshin-launcher';

export async function unzipPaimon() {
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

export async function prepareWaifu(){
    // unzip if model not exists
    const fs = (window as any).require('fs');
    
    if (!fs.existsSync(`./plugins/${pname}/l2d/model/paimon/`)) {
        console.log('unzip paimon.zip');
        const res = await unzipPaimon();
        console.log(res);
    }

    // 添加<script>
    // <script src="dist/live2d_bundle.js"></script>
    // <script async type="module" src="waifu-tips.js"></script>
    const live2d_bundle_js = document.createElement('script');
    live2d_bundle_js.src = `./plugins/${pname}/l2d/live2d_bundle.js`;
    live2d_bundle_js.async = true;
    document.body.appendChild(live2d_bundle_js);


    const waifu_tips_js = document.createElement('script');
    waifu_tips_js.src = `./plugins/${pname}/l2d/waifu-tips.js`;
    waifu_tips_js.type = 'module';
    waifu_tips_js.async = true;
    // waifu_tips_js.defer = true;
    document.body.appendChild(waifu_tips_js);        
}

export function addWaifuElement(hide:boolean=false) {
    const waifuElement = document.createElement('div');
    waifuElement.id = "waifu";
    // 允许鼠标透过，传递点击事件
    waifuElement.style.setProperty('pointer-events', "none");
    if (hide) {
        console.log(`Adding hide to Waifu Element`);
        waifuElement.classList.add('hide');
        // sync to waifu.js setting
        sessionStorage.setItem('waifuHide', Number(hide).toString());
    } else {
        window.waifuAlreayInited = true;
    }

    const waifuInnerHTML = `
        <div id="waifu-message" style="max-width:250px;overflow-wrap: break-word"></div>
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
        <canvas id="live2d4" style="pointer-events: none;"></canvas>
    `
    waifuElement.innerHTML = waifuInnerHTML;

    document.body.appendChild(waifuElement);
}

export function initWaifuElement() {
    // 即使之前没有设置过，获取一个null，waifuStatus也是false
    let waifuStatus = configs.get('waifuHide');

    console.log(`config[waifuHide]=${configs.get('waifuHide')}, after reading got waifuStatus=${waifuStatus}`);

    addWaifuElement(waifuStatus);

    allowClickPass();
}

export function allowClickPass() {
    var canvas = document.getElementById("live2d4") as HTMLCanvasElement;

    document.addEventListener('click', (event) => {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        if (x >=0 && y >= 0 && x < canvas.width && y < canvas.height) {
            var clickEvent = new MouseEvent("click",  {
                clientX: event.clientX, // 设置鼠标点击的 X 坐标
                clientY: event.clientY, // 设置鼠标点击的 Y 坐标
                screenX: event.screenX,
                screenY: event.screenY
                // 还可以设置其他鼠标事件属性，如 screenX、screenY、pageX、pageY 等
              });
            canvas.dispatchEvent(clickEvent);
        }
    })

    document.addEventListener("mouseup", (event) => {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        if (x >=0 && y >= 0 && x < canvas.width && y < canvas.height) {
            var clickEvent = new MouseEvent("mouseup",  {
                clientX: event.clientX, // 设置鼠标点击的 X 坐标
                clientY: event.clientY, // 设置鼠标点击的 Y 坐标
                screenX: event.screenX,
                screenY: event.screenY
                // 还可以设置其他鼠标事件属性，如 screenX、screenY、pageX、pageY 等
              });
            canvas.dispatchEvent(clickEvent);
        }
    });
}

export async function setWaifuHide(status:boolean) {
    let waifuElement = document.getElementById('waifu');

    configs.set('waifuHide', status)
    sessionStorage.setItem('waifuHide', Number(status).toString());

    console.log(`set SettingStorage["waifuHide"] = ${status}; set sessionStorage['waifuHide] = ${Number(status).toString()}`)

    if (status) {
        waifuElement.classList.add('hide');
    } else {
        waifuElement.classList.remove('hide');
        // 如果一开始启动的时候addWaifuElement(hide=true)
        //    模型不显示，则需要重新初始化
        // 已经初始化过了的，就不需要了再重载一遍了
        if (!window.waifuAlreayInited) {
            window.initModel();
            window.waifuAlreayInited = true;
        }
    }

    await configs.save();
}
