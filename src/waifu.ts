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

export async function preparePaimonModel(){
    // unzip if model not exists
    const fs = (window as any).require('fs');
    
    if (!fs.existsSync(`./plugins/${pname}/l2d/model/paimon/`)) {
        info('[waifu.ts][prepareWaifu] unzip paimon.zip');
        const res = await unzipPaimon();
        debug(`[waifu.ts][prepareWaifu] result`, res);
    }  
}

export async function loadWaifuJs() {
    let live2d_bundle_js = document.getElementById('l2dbundlejs');

    // jsript 不存在，则添加
    if (!live2d_bundle_js) {
        // 添加<script>
        // <script src="dist/live2d_bundle.js"></script>
        // <script async type="module" src="waifu-tips.js"></script>
        const live2d_bundle_js = document.createElement('script');
        live2d_bundle_js.src = `./plugins/${pname}/l2d/live2d_bundle.js`;
        live2d_bundle_js.async = true;
        live2d_bundle_js.id = "l2dbundlejs";
        document.body.appendChild(live2d_bundle_js);

        const waifu_tips_js = document.createElement('script');
        waifu_tips_js.src = `./plugins/${pname}/l2d/waifu-tips.js`;
        waifu_tips_js.type = 'module';
        waifu_tips_js.async = true;
        waifu_tips_js.id = 'l2dtipsjs'
        // waifu_tips_js.defer = true;
        document.body.appendChild(waifu_tips_js);      
    }
}

export function addWaifuElement() {
    const waifuElement = document.createElement('div');
    waifuElement.id = "waifu";
    // 允许鼠标透过，传递点击事件
    waifuElement.style.setProperty('pointer-events', "none");
    waifuElement.style.setProperty('position', "fixed");

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

    window.waifuAlreayInited = true;
}

export function initWaifuElement() {
    // 即使之前没有设置过，获取一个null，waifuStatus也是false
    let waifuStatus = configs.get('waifuHide');

    debug(`[waifu.ts][initWaifuElement] config[waifuHide]=${configs.get('waifuHide')}, after reading got waifuStatus=${waifuStatus}`);

    if (!waifuStatus) {
        addWaifuElement();
        loadWaifuJs();
        allowClickPass();
    }
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

export function mouseoverHandler(event: { clientX: number; clientY: number; }) {
    var canvas = document.getElementById("live2d4") as HTMLCanvasElement;
    var waifuElement = document.getElementById('waifu') as HTMLDivElement;
    
    var rect = canvas.getBoundingClientRect();

    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;

    if (x >=0 && y >= 0 && x < canvas.width && y < canvas.height) {
        waifuElement.style.setProperty('opacity', '0.5');
    } else {
        waifuElement.style.setProperty('opacity', '1');
    }
}

export function hoverTransparent(waifuTrans:boolean) {
    var canvas = document.getElementById("live2d4") as HTMLCanvasElement;

    if (waifuTrans && canvas) {
        document.addEventListener("mouseover", mouseoverHandler);
        info(`[waifu.ts][hoverTransparent] activate waifu transparent, ${waifuTrans}`)
    } else {
        document.removeEventListener("mouseover", mouseoverHandler);
        info(`[waifu.ts][hoverTransparent] deactivate waifu transparent, ${waifuTrans}`)
    }
}

export async function setWaifuHide(status:boolean) {
    configs.set('waifuHide', status)
    
    debug(`[waifu.ts][setWaifuHide] set SettingStorage["waifuHide"] = ${status}`)
    
    let waifuElement = document.getElementById('waifu');

    await configs.save(`[waifu.ts][setWaifuHide][waifuHide.change]`);

    if (waifuElement) {
        // 已经加载过

        /** 
         * 删除掉<div id='waifu'>元素之后再重新加载同样的元素
         * 语音ok但是canvas似乎没有渲染，initmodel也无法渲染canvas，
         * 但是拍照window.live2dv4.CaptureCanvas()能拍出来，
         * 疑似为webgl只能绑定一个canvas，新建的canvas无法匹配上。
         * 所以最简单的解决方法是，不考虑性能损失直接屏蔽掉那个元素，来实现隐藏
         */
        if (status) {
            waifuElement.style.setProperty('display', 'none');
            waifuElement.style.setProperty('visibility', 'false');
        } else {
            waifuElement.style.setProperty('display', 'block');
            waifuElement.style.setProperty('visibility', 'true');
        }
    } else {
        // 完全没加载过

        /** 
         * 目的：
         * 当settings的设置为不显示派蒙看板娘时
         * 初始化的时候完全不加载看板娘相关的代码
         * 而不是加载之后再隐藏，造成潜在的性能消耗
         * 只有当用户手动修改了设置，出发了这个函数
         * 才把看板娘加载出来
         */
        addWaifuElement();
        loadWaifuJs();
        allowClickPass();
    }

}
