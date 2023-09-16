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

export function  addWaifuElement() {
    const waifuElement = document.createElement('div');
    waifuElement.id = "waifu";
    // 允许鼠标透过，传递点击事件
    // waifuElement.style.setProperty('pointer-events', "none");

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
        <canvas id="live2d4" style="bottom:50px;"></canvas>
    `
    waifuElement.innerHTML = waifuInnerHTML;

    document.body.appendChild(waifuElement);

    // const waifujs = await import('./l2d/waifu-tips.js');

    // show model
    // sessionStorage.removeItem('waifuHide');
    // document.getElementById('waifu').classList.remove('hide');
    // waifujs.initModel();
}

export function allowClickPass() {
    var canvas = document.getElementById("live2d4") as HTMLCanvasElement;

    // try to use color to judge, failed.
    // canvas.addEventListener("click", (event) => {
    //     var rect = canvas.getBoundingClientRect();
    //     var x = event.clientX - rect.left;
    //     var y = event.clientY - rect.top;
        
    //     var gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});

    //     var canvasX = x;
    //     var canvasY = canvas.height - y;

    //     // 创建一个用于存储像素颜色的数组
    //     var pixel = new Uint8Array(4);

    //      // 读取鼠标点击处的像素颜色
    //     // gl.readPixels(canvasX, canvasY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);
    //     // gl.clear(gl.COLOR_BUFFER_BIT);
    //     var framebuffer = gl.createFramebuffer();
    //     gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

    //     var texture = gl.createTexture();
    //     gl.bindTexture(gl.TEXTURE_2D, texture);
    //     gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    //     gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    //     // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    //     gl.readPixels(canvasX, canvasY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixel);

    //     console.log('aaaaaaaaaa', x, y, canvasX, canvasY, pixel);
        
    //     // if (pixel[3] === 0) {
    //     //     // 点击位置是透明的，传递事件给下一层元素
    //     //     event.stopPropagation();
    //     // }
    // });
}