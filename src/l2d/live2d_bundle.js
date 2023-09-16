(() => {
    var t = {
            4591: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    default: () => a
                });
                const a = '/**\n * Live2D Cubism Core\n * (C) 2019 Live2D Inc. All rights reserved.\n *\n * This file is licensed pursuant to the license agreement below.\n * This file corresponds to the "Redistributable Code" in the agreement.\n * https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html\n */\nvar Live2DCubismCore;!function(Live2DCubismCore){var _csm=function(){function _csm(){}return _csm.getVersion=function(){return _em.ccall("csmGetVersion","number",[],[])},_csm.getLatestMocVersion=function(){return _em.ccall("csmGetLatestMocVersion","number",[],[])},_csm.getMocVersion=function(moc){return _em.ccall("csmGetMocVersion","number",["number"],[moc])},_csm.getSizeofModel=function(moc){return _em.ccall("csmGetSizeofModel","number",["number"],[moc])},_csm.reviveMocInPlace=function(memory,mocSize){return _em.ccall("csmReviveMocInPlace","number",["number","number"],[memory,mocSize])},_csm.initializeModelInPlace=function(moc,memory,modelSize){return _em.ccall("csmInitializeModelInPlace","number",["number","number","number"],[moc,memory,modelSize])},_csm.getParameterCount=function(model){return _em.ccall("csmGetParameterCount","number",["number"],[model])},_csm.getParameterIds=function(model){return _em.ccall("csmGetParameterIds","number",["number"],[model])},_csm.getParameterMinimumValues=function(model){return _em.ccall("csmGetParameterMinimumValues","number",["number"],[model])},_csm.getParameterMaximumValues=function(model){return _em.ccall("csmGetParameterMaximumValues","number",["number"],[model])},_csm.getParameterDefaultValues=function(model){return _em.ccall("csmGetParameterDefaultValues","number",["number"],[model])},_csm.getParameterValues=function(model){return _em.ccall("csmGetParameterValues","number",["number"],[model])},_csm.getPartCount=function(model){return _em.ccall("csmGetPartCount","number",["number"],[model])},_csm.getPartIds=function(model){return _em.ccall("csmGetPartIds","number",["number"],[model])},_csm.getPartOpacities=function(model){return _em.ccall("csmGetPartOpacities","number",["number"],[model])},_csm.getPartParentPartIndices=function(model){return _em.ccall("csmGetPartParentPartIndices","number",["number"],[model])},_csm.getDrawableCount=function(model){return _em.ccall("csmGetDrawableCount","number",["number"],[model])},_csm.getDrawableIds=function(model){return _em.ccall("csmGetDrawableIds","number",["number"],[model])},_csm.getDrawableConstantFlags=function(model){return _em.ccall("csmGetDrawableConstantFlags","number",["number"],[model])},_csm.getDrawableDynamicFlags=function(model){return _em.ccall("csmGetDrawableDynamicFlags","number",["number"],[model])},_csm.getDrawableTextureIndices=function(model){return _em.ccall("csmGetDrawableTextureIndices","number",["number"],[model])},_csm.getDrawableDrawOrders=function(model){return _em.ccall("csmGetDrawableDrawOrders","number",["number"],[model])},_csm.getDrawableRenderOrders=function(model){return _em.ccall("csmGetDrawableRenderOrders","number",["number"],[model])},_csm.getDrawableOpacities=function(model){return _em.ccall("csmGetDrawableOpacities","number",["number"],[model])},_csm.getDrawableMaskCounts=function(model){return _em.ccall("csmGetDrawableMaskCounts","number",["number"],[model])},_csm.getDrawableMasks=function(model){return _em.ccall("csmGetDrawableMasks","number",["number"],[model])},_csm.getDrawableVertexCounts=function(model){return _em.ccall("csmGetDrawableVertexCounts","number",["number"],[model])},_csm.getDrawableVertexPositions=function(model){return _em.ccall("csmGetDrawableVertexPositions","number",["number"],[model])},_csm.getDrawableVertexUvs=function(model){return _em.ccall("csmGetDrawableVertexUvs","number",["number"],[model])},_csm.getDrawableIndexCounts=function(model){return _em.ccall("csmGetDrawableIndexCounts","number",["number"],[model])},_csm.getDrawableIndices=function(model){return _em.ccall("csmGetDrawableIndices","number",["number"],[model])},_csm.mallocMoc=function(mocSize){return _em.ccall("csmMallocMoc","number",["number"],[mocSize])},_csm.mallocModelAndInitialize=function(moc){return _em.ccall("csmMallocModelAndInitialize","number",["number"],[moc])},_csm.malloc=function(size){return _em.ccall("csmMalloc","number",["number"],[size])},_csm.setLogFunction=function(handler){_em.ccall("csmSetLogFunction",null,["number"],[handler])},_csm.updateModel=function(model){_em.ccall("csmUpdateModel",null,["number"],[model])},_csm.readCanvasInfo=function(model,outSizeInPixels,outOriginInPixels,outPixelsPerUnit){_em.ccall("csmReadCanvasInfo",null,["number","number","number","number"],[model,outSizeInPixels,outOriginInPixels,outPixelsPerUnit])},_csm.resetDrawableDynamicFlags=function(model){_em.ccall("csmResetDrawableDynamicFlags",null,["number"],[model])},_csm.free=function(memory){_em.ccall("csmFree",null,["number"],[memory])},_csm}(),Version=function(){function Version(){}return Version.csmGetVersion=function(){return _csm.getVersion()},Version.csmGetLatestMocVersion=function(){return _csm.getLatestMocVersion()},Version.csmGetMocVersion=function(moc){return _csm.getMocVersion(moc._ptr)},Version}();Live2DCubismCore.Version=Version;var Logging=function(){function Logging(){}return Logging.csmSetLogFunction=function(handler){Logging.logFunction=handler;var pointer=_em.addFunction(Logging.wrapLogFunction,"vi");_csm.setLogFunction(pointer)},Logging.csmGetLogFunction=function(){return Logging.logFunction},Logging.wrapLogFunction=function(messagePtr){var messageStr=_em.UTF8ToString(messagePtr);Logging.logFunction(messageStr)},Logging}();Live2DCubismCore.Logging=Logging;var Moc=function(){function Moc(mocBytes){var memory=_csm.mallocMoc(mocBytes.byteLength);memory&&(new Uint8Array(_em.HEAPU8.buffer,memory,mocBytes.byteLength).set(new Uint8Array(mocBytes)),this._ptr=_csm.reviveMocInPlace(memory,mocBytes.byteLength),this._ptr||_csm.free(memory))}return Moc.fromArrayBuffer=function(buffer){if(!buffer)return null;var moc=new Moc(buffer);return moc._ptr?moc:null},Moc.prototype._release=function(){_csm.free(this._ptr),this._ptr=0},Moc}();Live2DCubismCore.Moc=Moc;var Model=function(){function Model(moc){this._ptr=_csm.mallocModelAndInitialize(moc._ptr),this._ptr&&(this.parameters=new Parameters(this._ptr),this.parts=new Parts(this._ptr),this.drawables=new Drawables(this._ptr),this.canvasinfo=new CanvasInfo(this._ptr))}return Model.fromMoc=function(moc){var model=new Model(moc);return model._ptr?model:null},Model.prototype.update=function(){_csm.updateModel(this._ptr)},Model.prototype.release=function(){_csm.free(this._ptr),this._ptr=0},Model}();Live2DCubismCore.Model=Model;var CanvasInfo=function(modelPtr){if(modelPtr){var _canvasSize_data=new Float32Array(2),_canvasSize_nDataBytes=_canvasSize_data.length*_canvasSize_data.BYTES_PER_ELEMENT,_canvasSize_dataPtr=_csm.malloc(_canvasSize_nDataBytes),_canvasSize_dataHeap=new Uint8Array(_em.HEAPU8.buffer,_canvasSize_dataPtr,_canvasSize_nDataBytes);_canvasSize_dataHeap.set(new Uint8Array(_canvasSize_data.buffer));var _canvasOrigin_data=new Float32Array(2),_canvasOrigin_nDataBytes=_canvasOrigin_data.length*_canvasOrigin_data.BYTES_PER_ELEMENT,_canvasOrigin_dataPtr=_csm.malloc(_canvasOrigin_nDataBytes),_canvasOrigin_dataHeap=new Uint8Array(_em.HEAPU8.buffer,_canvasOrigin_dataPtr,_canvasOrigin_nDataBytes);_canvasOrigin_dataHeap.set(new Uint8Array(_canvasOrigin_data.buffer));var _canvasPPU_data=new Float32Array(1),_canvasPPU_nDataBytes=_canvasPPU_data.length*_canvasPPU_data.BYTES_PER_ELEMENT,_canvasPPU_dataPtr=_csm.malloc(_canvasPPU_nDataBytes),_canvasPPU_dataHeap=new Uint8Array(_em.HEAPU8.buffer,_canvasPPU_dataPtr,_canvasPPU_nDataBytes);_canvasPPU_dataHeap.set(new Uint8Array(_canvasPPU_data.buffer)),_csm.readCanvasInfo(modelPtr,_canvasSize_dataHeap.byteOffset,_canvasOrigin_dataHeap.byteOffset,_canvasPPU_dataHeap.byteOffset),_canvasSize_data=new Float32Array(_canvasSize_dataHeap.buffer,_canvasSize_dataHeap.byteOffset,_canvasSize_dataHeap.length),_canvasOrigin_data=new Float32Array(_canvasOrigin_dataHeap.buffer,_canvasOrigin_dataHeap.byteOffset,_canvasOrigin_dataHeap.length),_canvasPPU_data=new Float32Array(_canvasPPU_dataHeap.buffer,_canvasPPU_dataHeap.byteOffset,_canvasPPU_dataHeap.length),this.CanvasWidth=_canvasSize_data[0],this.CanvasHeight=_canvasSize_data[1],this.CanvasOriginX=_canvasOrigin_data[0],this.CanvasOriginY=_canvasOrigin_data[1],this.PixelsPerUnit=_canvasPPU_data[0],_csm.free(_canvasSize_dataHeap.byteOffset),_csm.free(_canvasOrigin_dataHeap.byteOffset),_csm.free(_canvasPPU_dataHeap.byteOffset)}};Live2DCubismCore.CanvasInfo=CanvasInfo;var Parameters=function(modelPtr){var length=0;this.count=_csm.getParameterCount(modelPtr),length=_csm.getParameterCount(modelPtr),this.ids=new Array(length);for(var _ids=new Uint32Array(_em.HEAPU32.buffer,_csm.getParameterIds(modelPtr),length),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getParameterCount(modelPtr),this.minimumValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterMinimumValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.maximumValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterMaximumValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.defaultValues=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterDefaultValues(modelPtr),length),length=_csm.getParameterCount(modelPtr),this.values=new Float32Array(_em.HEAPF32.buffer,_csm.getParameterValues(modelPtr),length)};Live2DCubismCore.Parameters=Parameters;var Parts=function(modelPtr){var length=0;this.count=_csm.getPartCount(modelPtr),length=_csm.getPartCount(modelPtr),this.ids=new Array(length);for(var _ids=new Uint32Array(_em.HEAPU32.buffer,_csm.getPartIds(modelPtr),length),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getPartCount(modelPtr),this.opacities=new Float32Array(_em.HEAPF32.buffer,_csm.getPartOpacities(modelPtr),length),length=_csm.getPartCount(modelPtr),this.parentIndices=new Int32Array(_em.HEAP32.buffer,_csm.getPartParentPartIndices(modelPtr),length)};Live2DCubismCore.Parts=Parts;var Drawables=function(){function Drawables(modelPtr){this._modelPtr=modelPtr;var length=0,length2=null;this.count=_csm.getDrawableCount(modelPtr),length=_csm.getDrawableCount(modelPtr),this.ids=new Array(length);for(var _ids=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableIds(modelPtr),length),i=0;i<_ids.length;i++)this.ids[i]=_em.UTF8ToString(_ids[i]);length=_csm.getDrawableCount(modelPtr),this.constantFlags=new Uint8Array(_em.HEAPU8.buffer,_csm.getDrawableConstantFlags(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.dynamicFlags=new Uint8Array(_em.HEAPU8.buffer,_csm.getDrawableDynamicFlags(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.textureIndices=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableTextureIndices(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.drawOrders=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableDrawOrders(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.renderOrders=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableRenderOrders(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.opacities=new Float32Array(_em.HEAPF32.buffer,_csm.getDrawableOpacities(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.maskCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableMaskCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.vertexCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),this.indexCounts=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableIndexCounts(modelPtr),length),length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableMaskCounts(modelPtr),length),this.masks=new Array(length);var _masks=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableMasks(modelPtr),length);for(i=0;i<_masks.length;i++)this.masks[i]=new Int32Array(_em.HEAP32.buffer,_masks[i],length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),this.vertexPositions=new Array(length);var _vertexPositions=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableVertexPositions(modelPtr),length);for(i=0;i<_vertexPositions.length;i++)this.vertexPositions[i]=new Float32Array(_em.HEAPF32.buffer,_vertexPositions[i],2*length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableVertexCounts(modelPtr),length),this.vertexUvs=new Array(length);var _vertexUvs=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableVertexUvs(modelPtr),length);for(i=0;i<_vertexUvs.length;i++)this.vertexUvs[i]=new Float32Array(_em.HEAPF32.buffer,_vertexUvs[i],2*length2[i]);length=_csm.getDrawableCount(modelPtr),length2=new Int32Array(_em.HEAP32.buffer,_csm.getDrawableIndexCounts(modelPtr),length),this.indices=new Array(length);var _indices=new Uint32Array(_em.HEAPU32.buffer,_csm.getDrawableIndices(modelPtr),length);for(i=0;i<_indices.length;i++)this.indices[i]=new Uint16Array(_em.HEAPU16.buffer,_indices[i],length2[i])}return Drawables.prototype.resetDynamicFlags=function(){_csm.resetDrawableDynamicFlags(this._modelPtr)},Drawables}();Live2DCubismCore.Drawables=Drawables;var Utils=function(){function Utils(){}return Utils.hasBlendAdditiveBit=function(bitfield){return 1==(1&bitfield)},Utils.hasBlendMultiplicativeBit=function(bitfield){return 2==(2&bitfield)},Utils.hasIsDoubleSidedBit=function(bitfield){return 4==(4&bitfield)},Utils.hasIsInvertedMaskBit=function(bitfield){return 8==(8&bitfield)},Utils.hasIsVisibleBit=function(bitfield){return 1==(1&bitfield)},Utils.hasVisibilityDidChangeBit=function(bitfield){return 2==(2&bitfield)},Utils.hasOpacityDidChangeBit=function(bitfield){return 4==(4&bitfield)},Utils.hasDrawOrderDidChangeBit=function(bitfield){return 8==(8&bitfield)},Utils.hasRenderOrderDidChangeBit=function(bitfield){return 16==(16&bitfield)},Utils.hasVertexPositionsDidChangeBit=function(bitfield){return 32==(32&bitfield)},Utils}();Live2DCubismCore.Utils=Utils;var _scriptDir,_em_module=(_scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(_scriptDir=_scriptDir||__filename),function(_em_module){var b;_em_module=_em_module||{},b=b||(void 0!==_em_module?_em_module:{});var n,l={};for(n in b)b.hasOwnProperty(n)&&(l[n]=b[n]);var t,p,q,r=!1;p="object"==typeof window,q="function"==typeof importScripts,r="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!p&&!q,t=!p&&!r&&!q;var v,w,x,y,u="";r?(u=__dirname+"/",v=function(a,c){var d=z(a);return d?c?d:d.toString():(x=x||require("fs"),a=(y=y||require("path")).normalize(a),x.readFileSync(a,c?null:"utf8"))},w=function(a){return(a=v(a,!0)).buffer||(a=new Uint8Array(a)),assert(a.buffer),a},1<process.argv.length&&process.argv[1].replace(/\\\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(a){throw a}),process.on("unhandledRejection",B),b.inspect=function(){return"[Emscripten Module object]"}):t?("undefined"!=typeof read&&(v=function(a){var c=z(a);return c?C(c):read(a)}),w=function(a){var c;return(c=z(a))?c:"function"==typeof readbuffer?new Uint8Array(readbuffer(a)):(assert("object"==typeof(c=read(a,"binary"))),c)},"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(p||q)&&(q?u=self.location.href:document.currentScript&&(u=document.currentScript.src),_scriptDir&&(u=_scriptDir),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",v=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.send(null),c.responseText}catch(d){if(a=z(a))return C(a);throw d}},q&&(w=function(a){try{var c=new XMLHttpRequest;return c.open("GET",a,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}catch(d){if(a=z(a))return a;throw d}}));var F,D=b.print||console.log.bind(console),E=b.printErr||console.warn.bind(console);for(n in l)l.hasOwnProperty(n)&&(b[n]=l[n]);function da(){return{exports:function(asmLibraryArg,wasmMemory,wasmTable){var scratchBuffer=new ArrayBuffer(8),b=new Int32Array(scratchBuffer),c=new Float32Array(scratchBuffer),d=new Float64Array(scratchBuffer);function e(index){return b[index]}function f(index,value){b[index]=value}function g(){return d[0]}function h(value){d[0]=value}function j(value){c[0]=value}function k(){return c[0]}var mem,U,global,env,buffer,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,C,H,I,J,K,L,M,T=(mem=wasmMemory.buffer,U=new Uint8Array(mem),function(offset,s){var V,W;if("undefined"==typeof Buffer)for(V=atob(s),W=0;W<V.length;W++)U[offset+W]=V.charCodeAt(W);else for(V=Buffer.from(s,"base64"),W=0;W<V.length;W++)U[offset+W]=V[W]});return T(1024,"CgBbQ1NNXSBbRV1Jbml0aWFsaXplRGVmb3JtZXJzKCk6IFVua25vd24gRGVmb3JtZXIgVHlwZS4KAE1PQzMAW0NTTV0gW0VdJXM6ICVzCgBbQ1NNXSBbRV1XYXJwRGVmb3JtZXI6OlRyYW5zZm9ybVRhcmdldCgpIGVycm9yLiBbJWRdIHAwMT0oJS40ZiAsICUuNGYpCgAlcwoAICAAW0NTTV0gW0VdY3NtUmV2aXZlTW9jSW5QbGFjZSBpcyBmYWlsZWQuIENvcnJ1cHRlZCAgbW9jMyBmaWxlLgoAImFkZHJlc3MiIGlzIG51bGwuAFtDU01dIFtXXVJvdGF0aW9uRGVmb3JtZXI6IE5vdCBmb3VuZCB0cmFuc2Zvcm1lZCBEaXJlY3Rpb24uCgAlMDJYIABbQ1NNXSBbRV1jc21SZXZpdmVNb2NJblBsYWNlIGlzIGZhaWxlZC4gVGhlIENvcmUgdW5zdXBwb3J0IGxhdGVyIHRoYW4gbW9jMyB2ZXI6WyVkXS4gVGhpcyBtb2MzIHZlciBpcyBbJWRdLgoAImFkZHJlc3MiIGFsaWdubWVudCBpcyBpbnZhbGlkLgBbQ1NNXSBbRV1VcGRhdGVEZWZvcm1lckhpZXJhcmNoeSgpOiBVbmtub3duIERlZm9ybWVyIFR5cGUuCgBbQ1NNXSBbRV1jc21HZXRNb2NWZXJzaW9uIGlzIGZhaWxlZC4gQ29ycnVwdGVkIG1vYzMgZmlsZS4KACJzaXplIiBpcyBpbnZhbGlkLgBMaXZlMkQgQ3ViaXNtIFNESyBDb3JlIFZlcnNpb24gJWQuJWQuJWQAIm1vZGVsIiBpcyBpbnZhbGlkLgBjc21HZXRNb2NWZXJzaW9uAGNzbVJldml2ZU1vY0luUGxhY2UAY3NtUmVhZENhbnZhc0luZm8AIm91dFNpemVJblBpeGVscyIgaXMgbnVsbC4AIm91dE9yaWdpbkluUGl4ZWxzIiBpcyBudWxsLgAib3V0UGl4ZWxzUGVyVW5pdCIgaXMgbnVsbC4AY3NtR2V0U2l6ZW9mTW9kZWwAIm1vYyIgaXMgaW52YWxpZC4AY3NtSW5pdGlhbGl6ZU1vZGVsSW5QbGFjZQAic2l6ZSIgaXMgaW52YWxpZABjc21VcGRhdGVNb2RlbABjc21HZXRQYXJhbWV0ZXJDb3VudABjc21HZXRQYXJhbWV0ZXJJZHMAY3NtR2V0UGFyYW1ldGVyTWluaW11bVZhbHVlcwBjc21HZXRQYXJhbWV0ZXJNYXhpbXVtVmFsdWVzAGNzbUdldFBhcmFtZXRlckRlZmF1bHRWYWx1ZXMAY3NtR2V0UGFyYW1ldGVyVmFsdWVzAGNzbUdldFBhcnRDb3VudABjc21HZXRQYXJ0SWRzAGNzbUdldFBhcnRPcGFjaXRpZXMAY3NtR2V0UGFydFBhcmVudFBhcnRJbmRpY2VzAGNzbUdldERyYXdhYmxlQ291bnQAY3NtR2V0RHJhd2FibGVJZHMAY3NtR2V0RHJhd2FibGVDb25zdGFudEZsYWdzAGNzbUdldERyYXdhYmxlRHluYW1pY0ZsYWdzAGNzbUdldERyYXdhYmxlVGV4dHVyZUluZGljZXMAY3NtR2V0RHJhd2FibGVEcmF3T3JkZXJzAGNzbUdldERyYXdhYmxlUmVuZGVyT3JkZXJzAGNzbUdldERyYXdhYmxlT3BhY2l0aWVzAGNzbUdldERyYXdhYmxlTWFza0NvdW50cwBjc21HZXREcmF3YWJsZU1hc2tzAGNzbUdldERyYXdhYmxlVmVydGV4Q291bnRzAGNzbUdldERyYXdhYmxlVmVydGV4UG9zaXRpb25zAGNzbUdldERyYXdhYmxlVmVydGV4VXZzAGNzbUdldERyYXdhYmxlSW5kZXhDb3VudHMAY3NtR2V0RHJhd2FibGVJbmRpY2VzAGNzbVJlc2V0RHJhd2FibGVEeW5hbWljRmxhZ3M="),T(2572,"Cw=="),T(2611,"//////8="),T(2680,"GBgAAC0rICAgMFgweAAobnVsbCkAAAAAEQAKABEREQAAAAAFAAAAAAAACQAAAAAL"),T(2736,"EQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERER"),T(2785,"Cw=="),T(2794,"EQAKChEREQAKAAACAAkLAAAACQALAAAL"),T(2843,"DA=="),T(2855,"DAAAAAAMAAAAAAkMAAAAAAAMAAAM"),T(2901,"Dg=="),T(2913,"DQAAAAQNAAAAAAkOAAAAAAAOAAAO"),T(2959,"EA=="),T(2971,"DwAAAAAPAAAAAAkQAAAAAAAQAAAQAAASAAAAEhIS"),T(3026,"EgAAABISEgAAAAAAAAk="),T(3075,"Cw=="),T(3087,"CgAAAAAKAAAAAAkLAAAAAAALAAAL"),T(3133,"DA=="),T(3145,"DAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAu"),T(3232,"AwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGA"),T(6019,"QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNThj7T7aD0k/Xph7P9oPyT9pN6wxaCEiM7QPFDNoIaIz2w9JP9sPSb/kyxZA5MsWwAAAAAAAAACA2w9JQNsPScAAAIA/AADAPwAAAADcz9E1AAAAAADAFT8="),T(6168,"BQ=="),T(6180,"DA=="),T(6204,"DQAAAA4AAADIGQAAAAQ="),T(6228,"AQ=="),T(6243,"Cv////8="),T(6500,"9B0="),global={Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:1/0,Math:Math},env=asmLibraryArg,buffer=wasmMemory.buffer,m=env.memory,n=wasmTable,o=new global.Int8Array(buffer),p=new global.Int16Array(buffer),q=new global.Int32Array(buffer),r=new global.Uint8Array(buffer),s=new global.Uint16Array(buffer),t=new global.Uint32Array(buffer),u=new global.Float32Array(buffer),v=new global.Float64Array(buffer),w=global.Math.imul,x=global.Math.fround,y=global.Math.abs,z=global.Math.clz32,A=global.Math.min,global.Math.max,C=global.Math.floor,global.Math.ceil,global.Math.sqrt,env.abort,global.NaN,H=global.Infinity,I=env.emscripten_memcpy_big,J=env.emscripten_resize_heap,K=env.fd_write,L=5251088,M=0,n[1]=function(a,bf,cf,df){a|=0,bf|=0,cf|=0,df|=0;var Gf,ef=0,ff=x(0),gf=x(0),hf=0,jf=x(0),kf=x(0),lf=x(0),mf=0,nf=x(0),of=x(0),pf=x(0),qf=x(0),rf=x(0),sf=x(0),tf=x(0),uf=x(0),vf=x(0),wf=x(0),xf=x(0),yf=x(0),zf=x(0),Af=x(0),Bf=0,Cf=0,Df=x(0),Ef=x(0),Ff=0,Hf=0,If=x(0),Jf=x(0),Kf=0,Lf=0,Mf=0,Nf=0,Of=0,Pf=0,Qf=0,Rf=0,Sf=0,Tf=x(0),Uf=x(0),Vf=x(0),Wf=x(0),Xf=x(0),Yf=x(0),Zf=x(0),_f=0,$f=0;if(L=Gf=L-32|0,1<=(0|df))for(Of=(Bf=q[a+4>>2])+-1|0,Pf=(Hf=q[a>>2])+-1|0,Qf=Lf=(mf=q[a+20>>2])+(Bf<<3)|0,Rf=Mf=((Kf=w(Hf,Cf=Bf+1|0))<<3)+mf|0,Sf=Nf=(Bf+Kf<<3)+mf|0,If=x(0|Hf),Jf=x(0|Bf),_f=q[a+8>>2],a=0;;){lf=u[4+(ef=(Ff=a<<3)+bf|0)>>2],gf=x(lf*If),nf=u[ef>>2],ff=x(nf*Jf),ef=lf>=x(1);a:if(lf<x(0)^1&&!(ef|nf>=x(1)|nf<x(0)))ef=x(y(sf=gf))<x(2147483648)?~~gf:-2147483648,kf=x(sf-x(0|ef)),hf=x(y(gf=ff))<x(2147483648)?~~ff:-2147483648,jf=x(gf-x(0|hf)),ef=hf+w(ef,Cf)|0,gf=_f?(ff=x(x(1)-kf),gf=x(x(1)-jf),hf=(ef<<3)+mf|0,ef=(ef+Cf<<3)+mf|0,u[cf+Ff>>2]=x(x(x(ff*x(gf*u[hf>>2]))+x(ff*x(jf*u[hf+8>>2])))+x(kf*x(gf*u[ef>>2])))+x(kf*x(jf*u[ef+8>>2])),ff=x(x(x(ff*x(gf*u[hf+4>>2]))+x(ff*x(jf*u[hf+12>>2])))+x(kf*x(gf*u[ef+4>>2]))),x(kf*x(jf*u[ef+12>>2]))):x(jf+kf)<=x(1)?(ff=x(x(x(1)-jf)-kf),hf=(ef<<3)+mf|0,ef=(ef+Cf<<3)+mf|0,u[cf+Ff>>2]=x(x(ff*u[hf>>2])+x(jf*u[hf+8>>2]))+x(kf*u[ef>>2]),ff=x(x(ff*u[hf+4>>2])+x(jf*u[hf+12>>2])),x(kf*u[ef+4>>2])):(ff=x(x(jf+x(-1))+kf),hf=(ef+Cf<<3)+mf|0,gf=x(x(1)-jf),lf=x(x(1)-kf),ef=(ef<<3)+mf|0,u[cf+Ff>>2]=x(x(ff*u[hf+8>>2])+x(gf*u[hf>>2]))+x(lf*u[ef+8>>2]),ff=x(x(ff*u[hf+12>>2])+x(gf*u[hf+4>>2])),x(lf*u[ef+12>>2]));else{if($f||(sf=u[Sf+4>>2],Tf=u[mf+4>>2],of=x(sf-Tf),Uf=u[Qf+4>>2],Vf=u[Rf+4>>2],pf=x(Uf-Vf),tf=x(x(of-pf)*x(.5)),Wf=u[Nf>>2],Xf=u[mf>>2],qf=x(Wf-Xf),Yf=u[Lf>>2],Zf=u[Mf>>2],rf=x(Yf-Zf),uf=x(x(qf-rf)*x(.5)),pf=x(x(pf+of)*x(.5)),rf=x(x(rf+qf)*x(.5)),$f=1,of=x(x(x(x(x(Tf+Uf)+Vf)+sf)*x(.25))-x(of*x(.5))),qf=x(x(x(x(x(Xf+Yf)+Zf)+Wf)*x(.25))-x(qf*x(.5)))),!(lf<x(3)^1|nf>x(-2)^1|(nf<x(3)^1|lf>x(-2)^1))){b:if(nf<=x(0)){if(lf<=x(0)){kf=x(x(lf+x(2))*x(.5)),jf=x(x(nf+x(2))*x(.5)),ff=x(tf+tf),Df=x(of-ff),gf=x(uf+uf),Ef=x(qf-gf),zf=x(of-x(pf+pf)),vf=x(zf-ff),Af=x(qf-x(rf+rf)),wf=x(Af-gf),xf=u[mf+4>>2],yf=u[mf>>2];break b}if(ef){ff=x(tf*x(3)),gf=x(of-x(pf+pf)),zf=x(ff+gf),vf=x(uf*x(3)),wf=x(qf-x(rf+rf)),Af=x(vf+wf),kf=x(x(lf+x(-1))*x(.5)),jf=x(x(nf+x(2))*x(.5)),xf=x(ff+of),yf=x(vf+qf),vf=x(tf+gf),wf=x(uf+wf),Df=u[Rf+4>>2],Ef=u[Mf>>2];break b}ff=x(of-x(pf+pf)),ef=Pf,hf=x(y(gf))<x(2147483648)?~~gf:-2147483648,kf=x(0|(ef=(0|hf)==(0|Hf)?ef:hf)),jf=x(kf/If),vf=x(x(jf*tf)+ff),sf=x(jf*uf),jf=x(qf-x(rf+rf)),wf=x(sf+jf),lf=x(x(0|(hf=ef+1|0))/If),zf=x(x(lf*tf)+ff),Af=x(x(lf*uf)+jf),jf=x(x(nf+x(2))*x(.5)),kf=x(gf-kf),ef=(w(ef,Cf)<<3)+mf|0,Df=u[ef+4>>2],Ef=u[ef>>2],ef=(w(hf,Cf)<<3)+mf|0,xf=u[ef+4>>2],yf=u[ef>>2]}else if(nf>=x(1)){if(lf<=x(0)){kf=x(x(lf+x(2))*x(.5)),jf=x(x(nf+x(-1))*x(.5)),ff=x(tf+tf),vf=x(x(pf+of)-ff),gf=x(uf+uf),wf=x(x(rf+qf)-gf),xf=x(x(pf*x(3))+of),Df=x(xf-ff),yf=x(x(rf*x(3))+qf),Ef=x(yf-gf),zf=u[Qf+4>>2],Af=u[Lf>>2];break b}if(ef){ff=x(tf*x(3)),zf=x(ff+x(pf+of)),gf=x(uf*x(3)),Af=x(gf+x(rf+qf)),sf=ff,ff=x(x(pf*x(3))+of),xf=x(sf+ff),sf=gf,gf=x(x(rf*x(3))+qf),yf=x(sf+gf),kf=x(x(lf+x(-1))*x(.5)),jf=x(x(nf+x(-1))*x(.5)),Df=x(tf+ff),Ef=x(uf+gf),vf=u[Sf+4>>2],wf=u[Nf>>2];break b}ff=x(x(pf*x(3))+of),ef=Pf,hf=x(y(gf))<x(2147483648)?~~gf:-2147483648,kf=x(0|(ef=(0|hf)==(0|Hf)?ef:hf)),jf=x(kf/If),Df=x(x(jf*tf)+ff),sf=x(jf*uf),jf=x(x(rf*x(3))+qf),Ef=x(sf+jf),lf=x(x(0|(hf=ef+1|0))/If),xf=x(x(lf*tf)+ff),yf=x(x(lf*uf)+jf),jf=x(x(nf+x(-1))*x(.5)),kf=x(gf-kf),ef=(w(ef,Cf)+Bf<<3)+mf|0,vf=u[ef+4>>2],wf=u[ef>>2],ef=(w(hf,Cf)+Bf<<3)+mf|0,zf=u[ef+4>>2],Af=u[ef>>2]}else lf<=x(0)?(kf=x(x(lf+x(2))*x(.5)),ef=Of,hf=x(y(gf=ff))<x(2147483648)?~~ff:-2147483648,ff=x(0|(ef=(0|hf)==(0|Bf)?ef:hf)),jf=x(gf-ff),ff=x(ff/Jf),gf=x(tf+tf),vf=x(x(x(ff*pf)+of)-gf),sf=x(x(ff*rf)+qf),ff=x(uf+uf),wf=x(sf-ff),lf=x(x(0|(hf=ef+1|0))/Jf),Df=x(x(x(lf*pf)+of)-gf),Ef=x(x(x(lf*rf)+qf)-ff),zf=u[4+(ef=(ef<<3)+mf|0)>>2],Af=u[ef>>2],xf=u[4+(ef=(hf<<3)+mf|0)>>2],yf=u[ef>>2]):ef?(sf=gf=x(tf*x(3)),ef=Of,hf=x(y(ff))<x(2147483648)?~~ff:-2147483648,jf=x(0|(ef=(0|hf)==(0|Bf)?ef:hf)),kf=x(jf/Jf),zf=x(sf+x(x(kf*pf)+of)),nf=x(uf*x(3)),Af=x(nf+x(x(kf*rf)+qf)),sf=gf,gf=x(x(0|(hf=ef+1|0))/Jf),xf=x(sf+x(x(gf*pf)+of)),yf=x(nf+x(x(gf*rf)+qf)),kf=x(x(lf+x(-1))*x(.5)),jf=x(ff-jf),vf=u[4+(ef=(ef+Kf<<3)+mf|0)>>2],wf=u[ef>>2],Df=u[4+(ef=(hf+Kf<<3)+mf|0)>>2],Ef=u[ef>>2]):(v[16+Gf>>3]=lf,q[Gf>>2]=a,v[8+Gf>>3]=nf,Y(4,1104,Gf));if(x(jf+kf)<=x(1)){u[cf+Ff>>2]=x(wf+x(x(Ef-wf)*jf))+x(x(Af-wf)*kf),ff=x(vf+x(x(Df-vf)*jf)),gf=x(x(zf-vf)*kf);break a}ff=x(x(1)-jf),gf=x(x(1)-kf),u[cf+Ff>>2]=x(yf+x(x(Af-yf)*ff))+x(x(Ef-yf)*gf),ff=x(xf+x(x(zf-xf)*ff)),gf=x(x(Df-xf)*gf);break a}u[cf+Ff>>2]=x(lf*uf)+x(x(nf*rf)+qf),ff=x(lf*tf),gf=x(x(nf*pf)+of)}if(u[4+(cf+Ff|0)>>2]=ff+gf,(0|df)==(0|(a=a+1|0)))break}L=32+Gf|0},n[2]=function(a,qe,re){a|=0,qe|=0;var Ge,He,Ie,Fe=0;if(He=q[140+(re|=0)>>2],Ie=q[re+136>>2],Ge=q[a+24>>2],-1==(0|(Fe=q[a+4>>2])))return q[(a=qe<<2)+Ie>>2]=q[Ge+16>>2],void(q[a+He>>2]=1065353216);re=q[re+4>>2]+(Fe<<5)|0,Fe=q[Ge+20>>2],n[q[re+20>>2]](q[re+24>>2],Fe,Fe,q[Ge+12>>2]),qe<<=2,a=q[a+4>>2]<<2,u[qe+Ie>>2]=u[Ge+16>>2]*u[a+Ie>>2],q[qe+He>>2]=q[a+He>>2]},n[3]=function(a,qe,re,Je){a|=0,qe|=0,re|=0,Je|=0;var Se,Ke=x(0),Le=x(0),Me=x(0),Ne=x(0),Oe=0,Pe=x(0),Qe=0,Re=x(0),Te=x(0),Ue=x(0);if(Oe=q[a+28>>2],Le=function(a){var Rb,Pb=x(0),Qb=0,Sb=0,Tb=0;L=Rb=L-16|0,j(a);a:if((Qb=2147483647&(Sb=e(0)))>>>0<=1061752794){if(Pb=x(1),Qb>>>0<964689920)break a;Pb=aa(+a)}else if(Qb>>>0<=1081824209){if(Tb=+a,1075235812<=Qb>>>0){Pb=x(-aa(((0|Sb)<0?3.141592653589793:-3.141592653589793)+Tb));break a}if((0|Sb)<=-1){Pb=$(Tb+1.5707963267948966);break a}Pb=$(1.5707963267948966-Tb)}else if(Qb>>>0<=1088565717){if(1085271520<=Qb>>>0){Pb=aa(+a+((0|Sb)<0?6.283185307179586:-6.283185307179586));break a}if((0|Sb)<=-1){Pb=$(-4.71238898038469-a);break a}Pb=$(a-4.71238898038469)}else if(Pb=x(a-a),!(2139095040<=Qb>>>0))if((Qb=3&la(a,8+Rb|0))>>>0<=2){switch(Qb-1|0){default:Pb=aa(v[8+Rb>>3]);break a;case 0:Pb=$(-v[8+Rb>>3]);break a;case 1:}Pb=x(-aa(v[8+Rb>>3]))}else Pb=$(v[8+Rb>>3]);return L=16+Rb|0,Pb}(Ke=x(x(x(u[a>>2]+u[a+20>>2])*x(3.1415927410125732))/x(180))),Me=u[a+8>>2],Se=q[a+24>>2],Ke=function(a){var Mb,Fb=0,Nb=0,Ob=0;L=Mb=L-16|0,j(a);a:if((Fb=2147483647&(Ob=e(0)))>>>0<=1061752794){if(Fb>>>0<964689920)break a;a=$(+a)}else if(Fb>>>0<=1081824209){if(Nb=+a,Fb>>>0<=1075235811){if((0|Ob)<=-1){a=x(-aa(Nb+1.5707963267948966));break a}a=aa(Nb+-1.5707963267948966);break a}a=$(-(((0|Ob)<0?3.141592653589793:-3.141592653589793)+Nb))}else if(Fb>>>0<=1088565717){if(Nb=+a,Fb>>>0<=1085271519){if((0|Ob)<=-1){a=aa(Nb+4.71238898038469);break a}a=x(-aa(Nb+-4.71238898038469));break a}a=$(((0|Ob)<0?6.283185307179586:-6.283185307179586)+Nb)}else if(2139095040<=Fb>>>0)a=x(a-a);else if((Fb=3&la(a,8+Mb|0))>>>0<=2){switch(Fb-1|0){default:a=$(v[8+Mb>>3]);break a;case 0:a=aa(v[8+Mb>>3]);break a;case 1:}a=$(-v[8+Mb>>3])}else a=x(-aa(v[8+Mb>>3]));return L=16+Mb|0,a}(Ke),0<(0|Je))for(Le=x(Me*Le),Pe=x(Oe?-1:1),Te=x(Le*Pe),Ne=x(Se?-1:1),Ue=x(Ne*x(Me*Ke)),Le=x(Ne*Le),Me=x(x(Me*x(-Ke))*Pe),Ke=u[a+16>>2],Pe=u[a+12>>2];Oe=(a=Qe<<3)+re|0,Ne=u[(a=a+qe|0)>>2],Re=u[a+4>>2],u[Oe+4>>2]=Ke+x(x(Ue*Ne)+x(Te*Re)),u[Oe>>2]=Pe+x(x(Le*Ne)+x(Me*Re)),(0|(Qe=Qe+1|0))!=(0|Je););},n[4]=function(a,qe,re){a|=0,qe|=0,re|=0;var se,te,ze,Ae,Be,ue=0,ve=x(0),we=x(0),xe=0,ye=x(0),Ce=x(0),De=x(0),Ee=x(0);if(L=se=L+-64|0,ze=q[re+140>>2],Ae=q[re+136>>2],te=q[a+24>>2],-1!=(0|(Be=q[a+4>>2]))){ue=q[re+4>>2],xe=q[te+12>>2],q[24+se>>2]=xe,re=q[te+16>>2],q[28+se>>2]=re,q[16+se>>2]=0,Ce=1==q[8+(ue=ue+(Be<<5)|0)>>2]?x(-10):x(-.10000000149011612),u[20+se>>2]=Ce,q[60+se>>2]=re,q[56+se>>2]=xe,n[q[ue+20>>2]](q[ue+24>>2],56+se|0,48+se|0,1),ye=x(1),xe=9;b:{for(;;){if(re=xe,De=x(ye*x(0)),u[32+se>>2]=De+u[56+se>>2],Ee=x(Ce*ye),u[36+se>>2]=Ee+u[60+se>>2],n[q[ue+20>>2]](q[ue+24>>2],32+se|0,40+se|0,1),we=x(u[44+se>>2]-u[52+se>>2]),u[44+se>>2]=we,ve=x(u[40+se>>2]-u[48+se>>2]),u[40+se>>2]=ve,we!=x(0)||ve!=x(0)){re=q[44+se>>2],q[8+se>>2]=q[40+se>>2],q[12+se>>2]=re;break b}if(u[32+se>>2]=u[56+se>>2]-De,u[36+se>>2]=u[60+se>>2]-Ee,n[q[ue+20>>2]](q[ue+24>>2],32+se|0,40+se|0,1),we=x(u[40+se>>2]-u[48+se>>2]),u[40+se>>2]=we,ve=x(u[44+se>>2]-u[52+se>>2]),(u[44+se>>2]=ve)!=x(0)||we!=x(0)){u[12+se>>2]=-ve,u[8+se>>2]=-we;break b}if(xe=re+-1|0,ye=x(ye*x(.10000000149011612)),!re)break}Y(3,1265,0)}ve=function(a,dh){var eh=x(0);if((eh=x(Aa(u[4+a>>2],u[a>>2])-Aa(u[4+dh>>2],u[dh>>2])))<x(-3.1415927410125732))for(;(eh=x(eh+x(6.2831854820251465)))<x(-3.1415927410125732););if(eh>x(3.1415927410125732))for(;(eh=x(eh+x(-6.2831854820251465)))>x(3.1415927410125732););return eh}(16+se|0,8+se|0),n[q[ue+20>>2]](q[ue+24>>2],24+se|0,24+se|0,1),q[te+12>>2]=q[24+se>>2],q[te+16>>2]=q[28+se>>2],u[te+20>>2]=u[te+20>>2]+x(x(ve*x(-180))/x(3.1415927410125732)),qe<<=2,a=q[a+4>>2]<<2,u[qe+Ae>>2]=u[te+4>>2]*u[a+Ae>>2],ve=x(u[te+8>>2]*u[a+ze>>2]),u[qe+ze>>2]=ve,u[te+8>>2]=ve}else q[(a=qe<<2)+Ae>>2]=q[te+4>>2],q[a+ze>>2]=q[te+8>>2];L=64+se|0},n[5]=function(a){a|=0;var hg,lg,bf=0,cf=0,df=0,ag=0,bg=0,cg=x(0),dg=0,eg=0,fg=0,gg=0,ig=0,jg=0,kg=0,mg=0,ng=0,og=0,pg=0;if(fg=q[a+248>>2],lg=q[a+204>>2],hg=q[a+200>>2],!((0|(bg=q[a+220>>2]))<1)){for(dg=q[a+236>>2],ag=q[a+216>>2],df=q[a+224>>2];u[(cf=bf<<2)+dg>>2]=u[cf+df>>2]*u[cf+ag>>2],(0|bg)!=(0|(bf=bf+1|0)););if(!((0|bg)<1))for(dg=q[a+240>>2],ag=q[a+216>>2],df=q[a+228>>2],bf=0;u[(cf=bf<<2)+dg>>2]=u[cf+df>>2]*u[cf+ag>>2],(0|bg)!=(0|(bf=bf+1|0)););}if(1<=(0|hg))for(mg=q[a+208>>2],bg=dg=0;;){if(q[fg>>2]){gg=(df=q[(cf=dg<<2)+q[a+212>>2]>>2])+bg|0;c:{if((0|df)<=0)q[cf+q[a+276>>2]>>2]=0;else{for(ag=q[a+236>>2],cg=x(0),bf=bg;cg=x(cg+u[ag+(bf<<2)>>2]),(0|(bf=bf+1|0))<(0|gg););if(u[cf+q[a+276>>2]>>2]=cg,!((0|df)<1)){for(ag=q[a+240>>2],cg=x(0),bf=bg;cg=x(cg+u[ag+(bf<<2)>>2]),(0|(bf=bf+1|0))<(0|gg););break c}}cg=x(0)}if(bf=cf+q[a+268>>2]|0,cg=x(cg+x(.0010000000474974513)),ag=x(y(cg))<x(2147483648)?~~cg:-2147483648,q[bf>>2]=ag,ag=(bf=q[12+((dg<<4)+lg|0)>>2])<<1,ig=q[cf+q[a+272>>2]>>2],(bf=(0|bf)<1)||ba(ig,0,(1<(0|ag)?ag:1)<<2),!(bf|(0|df)<1))for(jg=q[a+244>>2],ng=q[a+216>>2],og=q[a+232>>2],cf=bg;;){for(eg=(bf=cf<<2)+ng|0,pg=q[bf+og>>2],df=bf=0;u[jg+(kg=df<<2)>>2]=u[pg+kg>>2]*u[eg>>2],(0|(df=df+1|0))<(0|ag););for(;u[(eg=(df=bf<<2)+ig|0)>>2]=u[df+jg>>2]+u[eg>>2],(0|(bf=bf+1|0))<(0|ag););if(!((0|(cf=cf+1|0))<(0|gg)))break}}if(fg=fg+4|0,bg=q[(dg<<2)+mg>>2]+bg|0,(0|hg)==(0|(dg=dg+1|0)))break}},n[6]=function(a){a|=0;var Lg,Pg,Cg=0,Dg=0,Eg=0,Fg=0,Gg=0,Hg=0,Ig=x(0),Jg=0,Kg=0,Mg=0,Ng=0,Og=0,Qg=0,Rg=0,Sg=0,Tg=0,Ug=0;if(Kg=q[a+172>>2],Lg=q[a- -64>>2],Pg=q[a+68>>2],1<=(0|(Eg=q[a+92>>2])))for(Gg=q[a+104>>2],Hg=q[a+88>>2],Dg=q[a+96>>2];u[(Fg=Cg<<2)+Gg>>2]=u[Dg+Fg>>2]*u[Hg+Fg>>2],(0|Eg)!=(0|(Cg=Cg+1|0)););if(1<=(0|Lg))for(Qg=q[a+80>>2],Fg=Gg=0;;){if(q[Kg>>2]){if(Mg=(Cg=q[q[a+84>>2]+(Gg<<2)>>2])+Fg|0,Eg=(0|Cg)<1)Ig=x(0);else for(Hg=q[a+104>>2],Ig=x(0),Cg=Fg;Ig=x(Ig+u[Hg+(Cg<<2)>>2]),(0|(Cg=Cg+1|0))<(0|Mg););if(Cg=w(Gg,24)+Pg|0,u[Cg+16>>2]=Ig,Hg=(Dg=q[Cg+12>>2])<<1,(Dg=(0|Dg)<1)||ba(q[Cg+20>>2],0,(1<(0|Hg)?Hg:1)<<2),!(Dg|Eg))for(Rg=q[Cg+20>>2],Ng=q[a+108>>2],Sg=q[a+88>>2],Tg=q[a+100>>2],Eg=Fg;;){for(Jg=(Cg=Eg<<2)+Sg|0,Ug=q[Cg+Tg>>2],Dg=Cg=0;u[(Og=Dg<<2)+Ng>>2]=u[Ug+Og>>2]*u[Jg>>2],(0|(Dg=Dg+1|0))<(0|Hg););for(;u[(Jg=(Dg=Cg<<2)+Rg|0)>>2]=u[Dg+Ng>>2]+u[Jg>>2],(0|(Cg=Cg+1|0))<(0|Hg););if(!((0|(Eg=Eg+1|0))<(0|Mg)))break}}if(Kg=Kg+4|0,Fg=q[(Gg<<2)+Qg>>2]+Fg|0,(0|Lg)==(0|(Gg=Gg+1|0)))break}},n[7]=function(a){a|=0;var ch,Vg=0,Wg=x(0),Xg=0,Yg=0,Zg=0,_g=0,$g=0,ah=0,bh=0;if($g=q[a+36>>2],ch=q[a+4>>2],1<=(0|(Yg=q[a+24>>2])))for(ah=q[a+32>>2],bh=q[a+20>>2],Xg=q[a+28>>2];u[(Zg=Vg<<2)+ah>>2]=u[Xg+Zg>>2]*u[Zg+bh>>2],(0|Yg)!=(0|(Vg=Vg+1|0)););if(1<=(0|ch))for(Zg=q[a+12>>2],Xg=0;;){if(q[$g>>2]){if((0|(Vg=q[(Yg=_g<<2)+q[a+16>>2]>>2]))<1)Wg=x(0);else for(ah=Vg+Xg|0,bh=q[a+32>>2],Wg=x(0),Vg=Xg;Wg=x(Wg+u[bh+(Vg<<2)>>2]),(0|(Vg=Vg+1|0))<(0|ah););Vg=Yg+q[a+44>>2]|0,Wg=x(Wg+x(.0010000000474974513)),x(y(Wg))<x(2147483648)?q[Vg>>2]=~~Wg:q[Vg>>2]=-2147483648}if($g=$g+4|0,Xg=q[Zg+(_g<<2)>>2]+Xg|0,(0|ch)==(0|(_g=_g+1|0)))break}},n[8]=function(a){a|=0;var yg,Bg,qg=0,rg=0,sg=x(0),tg=0,ug=0,vg=0,wg=0,xg=0,zg=0,Ag=0;if(Ag=q[a+176>>2],Bg=q[a+72>>2],yg=q[a+76>>2],!((0|(vg=q[a+124>>2]))<1)){for(wg=q[a+148>>2],tg=q[a+120>>2],ug=q[a+128>>2];u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+152>>2],tg=q[a+120>>2],ug=q[a+132>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+156>>2],tg=q[a+120>>2],ug=q[a+136>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1)){for(wg=q[a+160>>2],tg=q[a+120>>2],ug=q[a+140>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););if(!((0|vg)<1))for(wg=q[a+164>>2],tg=q[a+120>>2],ug=q[a+144>>2],qg=0;u[(rg=qg<<2)+wg>>2]=u[rg+ug>>2]*u[rg+tg>>2],(0|vg)!=(0|(qg=qg+1|0)););}}}}if(1<=(0|Bg))for(wg=q[a+112>>2],ug=0;;){if(q[Ag>>2]){b:{c:{d:{e:{if((0|(rg=q[q[a+116>>2]+(xg<<2)>>2]))<=0)q[4+((xg<<5)+yg|0)>>2]=0;else{for(zg=rg+ug|0,tg=q[a+148>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[4+(vg=(xg<<5)+yg|0)>>2]=sg,!(rg=(0|rg)<1)){for(tg=q[a+152>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+20>>2]=sg,rg)break e;for(tg=q[a+156>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+12>>2]=sg,rg)break d;for(tg=q[a+160>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););if(u[vg+16>>2]=sg,rg)break c;for(tg=q[a+164>>2],sg=x(0),qg=ug;sg=x(sg+u[tg+(qg<<2)>>2]),(0|(qg=qg+1|0))<(0|zg););break b}}q[20+((xg<<5)+yg|0)>>2]=0}q[12+((xg<<5)+yg|0)>>2]=0}q[16+((xg<<5)+yg|0)>>2]=0}sg=x(0)}u[8+((xg<<5)+yg|0)>>2]=sg}if(Ag=Ag+4|0,ug=q[wg+(xg<<2)>>2]+ug|0,(0|Bg)==(0|(xg=xg+1|0)))break}},n[9]=function(a){a|=0;var ae,Ud=0,Vd=0,Wd=0,Xd=0,Yd=0,Zd=x(0),_d=0,$d=0,be=0,ce=0;if(ae=q[a+340>>2],1<=(0|(Wd=q[a+360>>2])))for(_d=q[a+368>>2],$d=q[a+356>>2],Vd=q[a+364>>2];u[(Xd=Ud<<2)+_d>>2]=u[Vd+Xd>>2]*u[Xd+$d>>2],(0|Wd)!=(0|(Ud=Ud+1|0)););if(1<=(0|ae))for(be=q[a+348>>2],ce=q[a+344>>2],Xd=q[a+352>>2],Vd=0;;){if((0|(Ud=q[(Wd=Yd<<2)+Xd>>2]))<1)Zd=x(0);else for(_d=Ud+Vd|0,$d=q[a+368>>2],Zd=x(0),Ud=Vd;Zd=x(Zd+u[$d+(Ud<<2)>>2]),(0|(Ud=Ud+1|0))<(0|_d););if(u[20+(w(Yd,24)+ce|0)>>2]=Zd,Vd=q[Wd+be>>2]+Vd|0,(0|ae)==(0|(Yd=Yd+1|0)))break}},n[10]=function(a){var ud=0,vd=0,wd=0,xd=0,yd=0,zd=0,Ad=0;if(!(q[380+(a|=0)>>2]||(0|(ud=q[a+200>>2]))<1))for(zd=(vd=q[a+204>>2])+(ud<<4)|0,ud=q[a+248>>2],xd=q[a+272>>2];;){if(q[ud>>2]&&(a=1,!((0|(wd=q[vd+12>>2]))<1)))for(wd<<=1,Ad=q[xd>>2];u[(yd=(a<<2)+Ad|0)>>2]=-u[yd>>2],(0|(a=a+2|0))<(0|wd););if(xd=xd+4|0,ud=ud+4|0,!((vd=vd+16|0)>>>0<zd>>>0))break}},n[11]=function(a,Fc,nd){Fc|=0,nd|=0;var pd,od=0;return fa(pd=q[20+(a|=0)>>2],Fc,od=nd>>>0<(od=q[a+16>>2]-pd|0)>>>0?nd:od),q[a+20>>2]=od+q[a+20>>2],0|nd},n[12]=function(a){return 0},n[13]=function(a,Fc,gd){Fc|=0,gd|=0;var id,hd=0,jd=0,kd=0,ld=0,md=0;for(L=id=L-32|0,hd=q[28+(a|=0)>>2],q[16+id>>2]=hd,kd=q[a+20>>2],q[28+id>>2]=gd,q[24+id>>2]=Fc,Fc=kd-hd|0,kd=(q[20+id>>2]=Fc)+gd|0,ld=2,Fc=16+id|0;;){a:{if((jd=(hd=0)|K(q[a+60>>2],0|Fc,0|ld,12+id|0))&&(q[1906]=jd,hd=-1),(0|(hd=hd?q[12+id>>2]=-1:q[12+id>>2]))!=(0|kd)){if(-1<(0|hd))break a;q[a+28>>2]=0,q[a+16>>2]=0,q[a+20>>2]=0,q[a>>2]=32|q[a>>2],2!=((a=0)|ld)&&(a=gd-q[Fc+4>>2]|0)}else Fc=q[a+44>>2],q[a+28>>2]=Fc,q[a+20>>2]=Fc,q[a+16>>2]=Fc+q[a+48>>2],a=gd;return L=32+id|0,0|a}jd=hd-((md=(jd=q[Fc+4>>2])>>>0<hd>>>0)?jd:0)|0,q[(Fc=md?Fc+8|0:Fc)>>2]=jd+q[Fc>>2],q[Fc+4>>2]=q[Fc+4>>2]-jd,kd=kd-hd|0,ld=ld-md|0}},n[14]=function(a,Fc,gd,hd){return M=0},n[15]=function(a,Ub,Fc,Gc,Hc,Ic){a|=0,Ub=+Ub,Fc|=0,Gc|=0,Hc|=0,Ic|=0;var Nc,Zc,dd,Jc=0,Kc=0,Lc=0,Mc=0,Oc=0,Pc=0,Qc=0,Rc=0,Sc=0,Tc=0,Uc=0,Vc=0,Wc=0,Xc=0,Yc=0,_c=0,$c=0;if(q[44+(L=Nc=L-560|0)>>2]=0,h(+Ub),Jc=0|e(1),dd=4294967295<e(0)>>>0?0:1,Zc=(0|Jc)<-1||(0|Jc)<=-1&&dd?(h(+(Ub=-Ub)),Jc=0|e(1),e(0),Yc=1,3184):2048&Hc?(Yc=1,3187):(Yc=1&Hc)?3190:3185,2146435072!=(2146435072&Jc))if(Ub=function na(a,oa){var qa,ra,pa=0;if(h(+a),pa=0|e(1),qa=0|e(0),2047!=(0|(pa=(ra=pa)>>>20&2047))){if(!pa)return pa=oa,oa=0==a?0:(a=na(0x10000000000000000*a,oa),q[oa>>2]+-64|0),q[pa>>2]=oa,a;q[oa>>2]=pa+-1022,f(0,0|qa),f(1,-2146435073&ra|1071644672),a=+g()}return a}(Ub,44+Nc|0),0!=(Ub+=Ub)&&(q[44+Nc>>2]=q[44+Nc>>2]+-1),Vc=16+Nc|0,97!=(0|(_c=32|Ic))){for(Jc=(0|Gc)<0,0!=Ub?(Mc=q[44+Nc>>2]+-28|0,q[44+Nc>>2]=Mc,Ub*=268435456):Mc=q[44+Nc>>2],Pc=Jc?6:Gc,Lc=Tc=(0|Mc)<0?48+Nc|0:336+Nc|0;Jc=Ub<4294967296&0<=Ub?~~Ub>>>0:0,Lc=(Gc=Lc)+4|0,0!=(Ub=1e9*(Ub-((q[Gc>>2]=Jc)>>>0))););if((0|Mc)<1)Jc=Lc,Kc=Tc;else for(Kc=Tc;;){if(Uc=(0|Mc)<29?Mc:29,!((Jc=Lc+-4|0)>>>0<Kc>>>0)){for(Gc=Uc,Rc=0;Qc=0,$c=Rc,Rc=q[(Sc=Jc)>>2],Oc=31&Gc,Oc=32<=(63&Gc)>>>0?(Mc=Rc<<Oc,0):(Mc=(1<<Oc)-1&Rc>>>32-Oc,Rc<<Oc),Qc=Mc+Qc|0,Qc=(Rc=$c+Oc|0)>>>0<Oc>>>0?Qc+1|0:Qc,$c=Sc,Sc=gc(Rc=hc(Oc=Rc,Qc,1e9),M,1e9),q[$c>>2]=Oc-Sc,Kc>>>0<=(Jc=Jc+-4|0)>>>0;);(Gc=Rc)&&(q[(Kc=Kc+-4|0)>>2]=Gc)}for(;Kc>>>0<(Jc=Lc)>>>0&&!q[(Lc=Jc+-4|0)>>2];);if(Mc=q[44+Nc>>2]-Uc|0,Lc=Jc,!(0<(0|(q[44+Nc>>2]=Mc))))break}if((0|Mc)<=-1)for(Xc=1+((Pc+25|0)/9|0)|0,Uc=102==(0|_c);;){if(Rc=(0|Mc)<-9?9:0-Mc|0,Jc>>>0<=Kc>>>0)Kc=q[Kc>>2]?Kc:Kc+4|0;else{for(Sc=1e9>>>Rc,Oc=-1<<Rc^-1,Mc=0,Lc=Kc;Gc=q[Lc>>2],q[Lc>>2]=(Gc>>>Rc)+Mc,Mc=w(Sc,Gc&Oc),(Lc=Lc+4|0)>>>0<Jc>>>0;);Kc=q[Kc>>2]?Kc:Kc+4|0,Mc&&(q[Jc>>2]=Mc,Jc=Jc+4|0)}if(Mc=Rc+q[44+Nc>>2]|0,Jc=(0|Xc)<Jc-(Gc=Uc?Tc:Kc)>>2?Gc+(Xc<<2)|0:Jc,!((0|(q[44+Nc>>2]=Mc))<0))break}if(!(Jc>>>(Lc=0)<=Kc>>>0||(Lc=w(Tc-Kc>>2,9),Mc=10,(Gc=q[Kc>>2])>>>0<10)))for(;Lc=Lc+1|0,(Mc=w(Mc,10))>>>0<=Gc>>>0;);if((0|(Gc=(Pc-(102==(0|_c)?0:Lc)|0)-(103==(0|_c)&0!=(0|Pc))|0))<(w(Jc-Tc>>2,9)+-9|0)){if(Qc=(Tc+((Oc=(0|(Sc=Gc+9216|0))/9|0)<<2)|0)-4092|0,Gc=10,(0|(Mc=Sc-w(Oc,9)|0))<=7)for(;Gc=w(Gc,10),Oc=(0|Mc)<7,Mc=Mc+1|0,Oc;);if(Xc=Qc+4|0,((Rc=(Uc=q[Qc>>2])-w(Gc,Sc=(Uc>>>0)/(Gc>>>0)|0)|0)||(0|Xc)!=(0|Jc))&&(Wc=Rc>>>0<(Oc=Gc>>>1)>>>0?.5:(0|Jc)==(0|Xc)&&(0|Oc)==(0|Rc)?1:1.5,Ub=1&Sc?9007199254740994:9007199254740992,!Yc|45!=r[0|Zc]||(Wc=-Wc,Ub=-Ub),Oc=Uc-Rc|0,q[Qc>>2]=Oc,Ub+Wc!=Ub)){if(Gc=Gc+Oc|0,1e9<=(q[Qc>>2]=Gc)>>>0)for(;(Qc=Qc+-4|(q[Qc>>2]=0))>>>0<Kc>>>0&&(q[(Kc=Kc+-4|0)>>2]=0),Gc=q[Qc>>2]+1|0,999999999<(q[Qc>>2]=Gc)>>>0;);if(Lc=w(Tc-Kc>>2,9),Mc=10,!((Gc=q[Kc>>2])>>>0<10))for(;Lc=Lc+1|0,(Mc=w(Mc,10))>>>0<=Gc>>>0;);}Jc=(Gc=Qc+4|0)>>>0<Jc>>>0?Gc:Jc}j:{for(;;){if((Uc=Jc)>>>(Sc=0)<=Kc>>>0)break j;if(q[(Jc=Uc+-4|0)>>2])break}Sc=1}if(103==(0|_c)){if(Pc=((Gc=(0|Lc)<(0|(Jc=Pc||1))&-5<(0|Lc))?-1^Lc:-1)+Jc|0,Ic=(Gc?-1:-2)+Ic|0,!(Oc=8&Hc)){if(Jc=9,Sc&&(Oc=q[Uc+-4>>2])&&!((Oc>>>(Jc=0))%(Gc=10)))for(;Jc=Jc+1|0,!((Oc>>>0)%((Gc=w(Gc,10))>>>0)););Gc=w(Uc-Tc>>2,9)+-9|0,Pc=102!=(32|Ic)?((Oc=0)|Pc)<(0|(Gc=0<(0|(Gc=(Gc+Lc|0)-Jc|0))?Gc:0))?Pc:Gc:((Oc=0)|Pc)<(0|(Gc=0<(0|(Gc=Gc-Jc|0))?Gc:0))?Pc:Gc}}else Oc=8&Hc;if(Qc=0!=(0|(Mc=Pc|Oc)),Gc=a,$c=Fc,Jc=0<(0|Lc)?Lc:0,102!=(0|(Rc=32|Ic))){if((Vc-(Jc=ea((Jc=Lc>>31)+Lc^Jc,0,Vc))|0)<=1)for(;o[0|(Jc=Jc+-1|0)]=48,(Vc-Jc|0)<2;);o[0|(Xc=Jc+-2|0)]=Ic,o[Jc+-1|0]=(0|Lc)<0?45:43,Jc=Vc-Xc|0}_(Gc,32,$c,Qc=1+(Jc+(Qc+(Pc+Yc|0)|0)|0)|0,Hc),Z(a,Zc,Yc),_(a,48,Fc,Qc,65536^Hc);n:{o:{p:{if(102==(0|Rc)){for(Gc=16+Nc|8,Lc=16+Nc|9,Kc=Ic=Tc>>>0<Kc>>>0?Tc:Kc;;){Jc=ea(q[Kc>>2],0,Lc);q:if((0|Ic)==(0|Kc))(0|Jc)==(0|Lc)&&(o[24+Nc|0]=48,Jc=Gc);else{if(Jc>>>0<=16+Nc>>>0)break q;for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);}if(Z(a,Jc,Lc-Jc|0),!((Kc=Kc+4|0)>>>0<=Tc>>>0))break}if(Mc&&Z(a,3219,1),(0|Pc)<1|Uc>>>0<=Kc>>>0)break p;for(;;){if(16+Nc>>>0<(Jc=ea(q[Kc>>2],0,Lc))>>>0)for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);if(Z(a,Jc,(0|Pc)<9?Pc:9),Jc=Pc+-9|0,Uc>>>0<=(Kc=Kc+4|0)>>>0)break o;if(Gc=9<(0|Pc),Pc=Jc,!Gc)break}break o}r:if(!((0|Pc)<0))for(Ic=Sc?Uc:Kc+4|0,Gc=16+Nc|8,Tc=16+Nc|9,Lc=Kc;;){(0|Tc)==(0|(Jc=ea(q[Lc>>2],0,Tc)))&&(o[24+Nc|0]=48,Jc=Gc);s:if((0|Kc)==(0|Lc))Z(a,Jc,1),Jc=Jc+1|0,(0|Pc)<1&&!Oc||Z(a,3219,1);else{if(Jc>>>0<=16+Nc>>>0)break s;for(;o[0|(Jc=Jc+-1|0)]=48,16+Nc>>>0<Jc>>>0;);}if(Z(a,Rc=Jc,(0|(Jc=Tc-Jc|0))<(0|Pc)?Jc:Pc),Pc=Pc-Jc|0,Ic>>>0<=(Lc=Lc+4|0)>>>0)break r;if(!(-1<(0|Pc)))break}_(a,48,Pc+18|0,18,0),Z(a,Xc,Vc-Xc|0);break n}Jc=Pc}_(a,48,Jc+9|0,9,0)}}else{if(Oc=(Tc=32&Ic)?9+Zc|0:Zc,!(11<Gc>>>0)&&(Jc=12-Gc|0)){for(Wc=8;Wc*=16,Jc=Jc+-1|0;);Ub=45!=r[0|Oc]?Ub+Wc-Wc:-(Wc+(-Ub-Wc))}for((0|Vc)==(0|(Jc=ea((Lc=(Jc=q[44+Nc>>2])>>31)^Jc+Lc,0,Vc)))&&(o[15+Nc|0]=48,Jc=15+Nc|0),Pc=2|Yc,Lc=q[44+Nc>>2],o[0|(Sc=Jc+-2|0)]=Ic+15,o[Jc+-1|0]=(0|Lc)<0?45:43,Jc=8&Hc,Kc=16+Nc|0;Ic=Kc,Rc=Tc,Lc=y(Ub)<2147483648?~~Ub:-2147483648,o[0|Kc]=Rc|r[Lc+3168|0],1!=((Kc=Ic+1|0)-(16+Nc|0)|0)|(0==(Ub=16*(Ub-(0|Lc)))?!(Jc|0<(0|Gc)):0)||(o[Ic+1|0]=46,Kc=Ic+2|0),0!=Ub;);_(a,32,Fc,Qc=(Ic=!Gc|(0|Gc)<=((Kc-Nc|0)-18|0)?((Vc-(16+Nc|0)|0)-Sc|0)+Kc|0:2+((Gc+Vc|0)-Sc|0)|0)+Pc|0,Hc),Z(a,Oc,Pc),_(a,48,Fc,Qc,65536^Hc),Z(a,16+Nc|0,Gc=Kc-(16+Nc|0)|0),_(a,48,Ic-((Jc=Gc)+(Gc=Vc-Sc|0)|0)|0,0,0),Z(a,Sc,Gc)}else _(a,32,Fc,Qc=Yc+3|0,-65537&Hc),Z(a,Zc,Yc),Gc=Ic>>>5&1,Z(a,Ub!=Ub?Gc?3211:3215:Gc?3203:3207,3);return _(a,32,Fc,Qc,8192^Hc),L=560+Nc|0,0|((0|Qc)<(0|Fc)?Fc:Qc)},n[16]=function(a,Ub){var uc,Dc,Ec;a|=0,Ub=q[(uc=Ub|=0)>>2]+15&-16,q[uc>>2]=Ub+16,Dc=a,Ec=function(a,Ub,Vb,lc){var oc,qc,rc,mc=0,nc=0,pc=0;L=oc=L-32|0,mc=(qc=mc=2147483647&lc)-1006698496|0,(nc=pc=Vb)>>>0<0&&(mc=mc+1|0),rc=nc,nc=mc,mc=qc-1140785152|0,pc>>>0<0&&(mc=mc+1|0);a:if((0|mc)==(0|nc)&rc>>>0<pc>>>0|nc>>>0<mc>>>0){if(mc=lc<<4|Vb>>>28,Vb=Vb<<4|Ub>>>28,134217728==(0|(pc=Ub&=268435455))&1<=a>>>0|134217728<Ub>>>0){mc=mc+1073741824|0,(a=Vb+1|0)>>>0<1&&(mc=mc+1|0),nc=a;break a}if(mc=mc-(((nc=Vb)>>>0<0)+-1073741824|0)|0,a|134217728^pc)break a;(a=nc+(1&nc)|0)>>>0<nc>>>0&&(mc=mc+1|0),nc=a}else(!pc&2147418112==(0|qc)?!(a|Ub):2147418112==(0|qc)&pc>>>0<0|qc>>>0<2147418112)?(mc=2146435072,1140785151==((nc=0)|qc)&4294967295<pc>>>0|1140785151<qc>>>0||(pc=qc>>>16)>>>(mc=0)<15249||(function(a,Ub,Vb,lc,tc,uc){var zc=0,Ac=0,Bc=0,Cc=0;a:if(64&uc)Ub=31&(Vb=uc-64|0),Ub=32<=(63&Vb)>>>0?(Vb=0,tc>>>Ub):(Vb=tc>>>Ub,((1<<Ub)-1&tc)<<32-Ub|lc>>>Ub),tc=lc=0;else{if(!uc)break a;Ac=tc,Bc=lc,zc=31&(Cc=64-uc|0),Cc=32<=(63&Cc)>>>0?(Ac=Bc<<zc,0):(Ac=(1<<zc)-1&Bc>>>32-zc|Ac<<zc,Bc<<zc),Bc=Ub,Ub=31&(zc=uc),Ub=32<=(63&zc)>>>0?(zc=0,Vb>>>Ub):(zc=Vb>>>Ub,((1<<Ub)-1&Vb)<<32-Ub|Bc>>>Ub),Ub|=Cc,Vb=zc|Ac,zc=lc,lc=31&uc,lc=32<=(63&uc)>>>0?(Ac=0,tc>>>lc):(Ac=tc>>>lc,((1<<lc)-1&tc)<<32-lc|zc>>>lc),tc=Ac}q[a>>2]=Ub,q[4+a>>2]=Vb,q[8+a>>2]=lc,q[12+a>>2]=tc}(oc,a,Ub,Vb,mc=65535&lc|65536,15361-pc|0),function(a,Ub,Vb,lc,tc,uc){var vc=0,wc=0,xc=0,yc=0;64&uc?(lc=Ub,Ub=31&(tc=uc+-64|0),32<=(63&tc)>>>0?(tc=lc<<Ub,lc=0):(tc=(1<<Ub)-1&lc>>>32-Ub|Vb<<Ub,lc<<=Ub),Vb=Ub=0):uc&&(vc=lc,lc=31&(xc=uc),yc=32<=(63&uc)>>>0?(wc=vc<<lc,0):(wc=(1<<lc)-1&vc>>>32-lc|tc<<lc,vc<<lc),lc=Vb,vc=Ub,tc=31&(uc=64-uc|0),32<=(63&uc)>>>0?(uc=0,lc>>>=tc):(uc=lc>>>tc,lc=((1<<tc)-1&lc)<<32-tc|vc>>>tc),lc|=yc,tc=uc|wc,uc=Ub,Ub=31&xc,Ub=32<=(63&xc)>>>0?(wc=uc<<Ub,0):(wc=(1<<Ub)-1&uc>>>32-Ub|Vb<<Ub,uc<<Ub),Vb=wc),q[a>>2]=Ub,q[4+a>>2]=Vb,q[8+a>>2]=lc,q[12+a>>2]=tc}(16+oc|0,a,Ub,Vb,mc,pc+-15233|0),Vb=q[4+oc>>2],a=q[8+oc>>2],mc=q[12+oc>>2]<<4|a>>>28,nc=a<<4|Vb>>>28,134217728==(0|(Vb=a=268435455&Vb))&1<=(Ub=q[oc>>2]|(0!=(q[16+oc>>2]|q[24+oc>>2])|0!=(q[20+oc>>2]|q[28+oc>>2])))>>>0|134217728<a>>>0?((a=nc+1|0)>>>0<1&&(mc=mc+1|0),nc=a):Ub|134217728^Vb||((a=nc+(1&nc)|0)>>>0<nc>>>0&&(mc=mc+1|0),nc=a))):(nc=Vb<<4|Ub>>>28,mc=524287&(mc=lc<<4|Vb>>>28)|2146959360);return L=32+oc|0,f(0,0|nc),f(1,-2147483648&lc|mc),+g()}(q[Ub>>2],q[Ub+4>>2],q[Ub+8>>2],q[Ub+12>>2]),v[Dc>>3]=Ec},{__wasm_call_ctors:function(){},csmGetVersion:function(){return 67108864},csmGetLatestMocVersion:function(){return 3},csmGetMocVersion:function(a,Ub){return Ub|=0,L=Ub=L-16|0,a=(a|=0)?ma(a)?(Y(4,1533,0),0):r[a+4|0]:(q[Ub+4>>2]=1246,q[Ub>>2]=1671,Y(4,1087,Ub),0),L=Ub+16|0,0|a},csmSetLogFunction:function(a){a|=0,q[1641]=a},csmReviveMocInPlace:function(a,qi){var ri;return qi|=0,L=ri=L-48|0,a=(a|=0)?(a+63&-64)==(0|a)?(qi+63&-64)==(0|qi)&&qi?function(a){var Ve,qe=0,re=0,Je=0,We=0,Xe=0,Ye=0,Ze=0,_e=0,$e=0,af=0;if(q[24+(L=Ve=L-32|0)>>2]=0,q[16+Ve>>2]=4,function(a){var td;sa(16+(L=td=L-272|0)|0,1611,q[12+td>>2]=a),function(a){var sd;q[(L=sd=L-16|0)>>2]=a,function(a,Fc){var gd;ra(a,1176,q[12+(L=gd=L-16|0)>>2]=Fc,0,0),L=16+gd|0}(q[670],sd),L=16+sd|0}(16+td|0),L=272+td|0}(16+Ve|(q[20+Ve>>2]=0)),ma(a))Y(4,1183,0),a=0;else if(4<=(re=r[a+4|0])>>>0)q[4+Ve>>2]=re,q[Ve>>2]=3,Y(4,1332,Ve),a=0;else{for(1!=(0|(We=!r[a+5|0]))&&(ca(a+4|0,1),X(a- -64|0,4,160),o[a+5|0]=0),qe=a- -64|0,Je=102,re=a+704|0;q[re>>2]=q[qe>>2]+a,re=re+4|0,qe=qe+4|0,Je=Je+-1|0;);if(1!=(0|We)&&(re=r[a+4|0],X(q[a+704>>2],4,32),ca(q[a+708>>2],4),ca(q[a+708>>2]+4|0,4),ca(q[a+708>>2]+8|0,4),ca(q[a+708>>2]+12|0,4),ca(q[a+708>>2]+16|0,4),ca(q[a+708>>2]+20|0,1),X(q[a+720>>2],4,q[q[a+704>>2]>>2]),X(q[a+724>>2],4,q[q[a+704>>2]>>2]),X(q[a+728>>2],4,q[q[a+704>>2]>>2]),X(q[a+732>>2],4,q[q[a+704>>2]>>2]),X(q[a+736>>2],4,q[q[a+704>>2]>>2]),X(q[a+740>>2],4,q[q[a+704>>2]>>2]),X(q[a+752>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+756>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+760>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+764>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+768>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+772>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+776>>2],4,q[q[a+704>>2]+4>>2]),X(q[a+780>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+784>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+788>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+792>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+796>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+800>>2],4,q[q[a+704>>2]+8>>2]),X(q[a+804>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+808>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+812>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+816>>2],4,q[q[a+704>>2]+12>>2]),X(q[a+840>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+844>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+848>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+852>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+856>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+860>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+864>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+868>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+872>>2],1,q[q[a+704>>2]+16>>2]),X(q[a+876>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+880>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+884>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+888>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+892>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+896>>2],4,q[q[a+704>>2]+16>>2]),X(q[a+908>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+912>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+916>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+920>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+924>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+928>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+932>>2],4,q[q[a+704>>2]+20>>2]),X(q[a+936>>2],4,q[q[a+704>>2]+24>>2]),X(q[a+940>>2],4,q[q[a+704>>2]+28>>2]),X(q[a+944>>2],4,q[q[a+704>>2]+28>>2]),X(q[a+948>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+952>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+956>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+960>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+964>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+968>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+972>>2],4,q[q[a+704>>2]+32>>2]),X(q[a+976>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+980>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+984>>2],4,q[q[a+704>>2]+36>>2]),X(q[a+988>>2],4,q[q[a+704>>2]+40>>2]),X(q[a+992>>2],4,q[q[a+704>>2]+44>>2]),X(q[a+996>>2],4,q[q[a+704>>2]+48>>2]),X(q[a+1e3>>2],4,q[q[a+704>>2]+48>>2]),X(q[a+1004>>2],4,q[q[a+704>>2]+52>>2]),X(q[a+1008>>2],4,q[q[a+704>>2]+52>>2]),X(q[a+1012>>2],4,q[q[a+704>>2]+56>>2]),X(q[a+1016>>2],4,q[q[a+704>>2]+60>>2]),X(q[a+1020>>2],2,q[q[a+704>>2]+64>>2]),X(q[a+1024>>2],4,q[q[a+704>>2]+68>>2]),X(q[a+1028>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1032>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1036>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1040>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1044>>2],4,q[q[a+704>>2]+72>>2]),X(q[a+1048>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1052>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1056>>2],4,q[q[a+704>>2]+76>>2]),X(q[a+1068>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1072>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1076>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1080>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1084>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1088>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1092>>2],4,q[q[a+704>>2]+80>>2]),X(q[a+1096>>2],4,q[q[a+704>>2]+84>>2]),X(q[a+1100>>2],2,q[q[a+704>>2]+84>>2]),X(q[a+1104>>2],4,q[q[a+704>>2]+88>>2]),re>>>0<2||X(q[a+1108>>2],4,q[q[a+704>>2]+8>>2])),q[1643]=5,q[1642]=6,q[1644]=7,q[1645]=8,q[1646]=9,q[1647]=10,qe=q[a+704>>2],1<=q[qe>>2])for(re=0;q[q[a+712>>2]+(re<<2)>>2]=q[a+716>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe>>2];);if(1<=q[qe+4>>2])for(re=0;q[q[a+744>>2]+(re<<2)>>2]=q[a+748>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+4>>2];);if(1<=q[qe+16>>2])for(re=0;q[(qe=re<<2)+q[a+820>>2]>>2]=q[a+836>>2]+(re<<6),q[qe+q[a+824>>2]>>2]=q[a+1016>>2]+(q[qe+q[a+880>>2]>>2]<<2),q[qe+q[a+828>>2]>>2]=q[a+1020>>2]+(q[qe+q[a+884>>2]>>2]<<1),q[qe+q[a+832>>2]>>2]=q[a+1024>>2]+(q[qe+q[a+892>>2]>>2]<<2),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+16>>2];);if(1<=q[qe+20>>2])for(re=0;q[q[a+900>>2]+(re<<2)>>2]=q[a+904>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+20>>2];);if(1<=q[qe+80>>2])for(re=0;q[q[a+1060>>2]+(re<<2)>>2]=q[a+1064>>2]+(re<<6),re=re+1|0,qe=q[a+704>>2],(0|re)<q[qe+80>>2];);if(!(1&o[q[a+708>>2]+20|0]||(0|(We=q[qe+16>>2]))<1)){for(Ye=q[a+888>>2],Ze=q[a+884>>2],Xe=q[a+1020>>2],re=0;;){if(1<(0|(Je=q[(qe=re<<2)+Ye>>2])))for(_e=Je+-1|0,$e=Xe+(q[qe+Ze>>2]<<1)|0,qe=0;af=s[(Je=(qe<<1)+$e|0)>>1],p[Je>>1]=s[Je+4>>1],p[Je+4>>1]=af,(0|(qe=qe+3|0))<(0|_e););if((0|We)==(0|(re=re+1|0)))break}for(re=q[a+876>>2],Ye=q[a+880>>2],Ze=q[a+1016>>2],Je=0;;){if(1<=(0|(Xe=q[(qe=Je<<2)+re>>2])))for(Xe=(qe=Ze+(q[qe+Ye>>2]<<2)|0)+(Xe<<3)|0,qe=qe+4|0;u[qe>>2]=x(1)-u[qe>>2],(qe=qe+8|0)>>>0<Xe>>>0;);if((0|We)==(0|(Je=Je+1|0)))break}}}return L=32+Ve|0,a}(a):(q[20+ri>>2]=1592,q[16+ri>>2]=1688,Y(4,1087,16+ri|0),0):(q[36+ri>>2]=1441,q[32+ri>>2]=1688,Y(4,1087,32+ri|0),0):(q[4+ri>>2]=1246,q[ri>>2]=1688,Y(4,1087,ri),0),L=48+ri|0,0|a},csmReadCanvasInfo:function(a,_h,$h,ai){var bi;_h|=0,$h|=0,ai|=0,L=bi=L+-64|0,(a|=0)?_h?$h?ai?(a=q[q[a>>2]+708>>2],q[_h>>2]=q[a+12>>2],q[_h+4>>2]=q[a+16>>2],q[$h>>2]=q[a+4>>2],q[$h+4>>2]=q[a+8>>2],q[ai>>2]=q[a>>2]):(q[52+bi>>2]=1782,q[48+bi>>2]=1708,Y(4,1087,48+bi|0)):(q[36+bi>>2]=1753,q[32+bi>>2]=1708,Y(4,1087,32+bi|0)):(q[20+bi>>2]=1726,q[16+bi>>2]=1708,Y(4,1087,16+bi|0)):(q[4+bi>>2]=1651,q[bi>>2]=1708,Y(4,1087,bi)),L=64+bi|0},csmGetSizeofModel:wa,csmInitializeModelInPlace:va,csmUpdateModel:function(a){var Zh;L=Zh=L-16|0,(a|=0)?ta(a):(q[4+Zh>>2]=1651,q[Zh>>2]=1890,Y(4,1087,Zh)),L=16+Zh|0},csmGetParameterCount:function(a){var Yh;return L=Yh=L-16|0,a=(a|=0)?q[a+292>>2]:(q[4+Yh>>2]=1651,q[Yh>>2]=1905,Y(4,1087,Yh),-1),L=16+Yh|0,0|a},csmGetParameterIds:function(a){var Xh;return L=Xh=L-16|0,a=(a|=0)?q[q[a>>2]+900>>2]:(q[4+Xh>>2]=1651,q[Xh>>2]=1926,Y(4,1087,Xh),0),L=16+Xh|0,0|a},csmGetParameterMinimumValues:function(a){var Wh;return L=Wh=L-16|0,a=(a|=0)?q[q[a>>2]+912>>2]:(q[4+Wh>>2]=1651,q[Wh>>2]=1945,Y(4,1087,Wh),0),L=16+Wh|0,0|a},csmGetParameterMaximumValues:function(a){var Vh;return L=Vh=L-16|0,a=(a|=0)?q[q[a>>2]+908>>2]:(q[4+Vh>>2]=1651,q[Vh>>2]=1974,Y(4,1087,Vh),0),L=16+Vh|0,0|a},csmGetParameterDefaultValues:function(a){var Uh;return L=Uh=L-16|0,a=(a|=0)?q[q[a>>2]+916>>2]:(q[4+Uh>>2]=1651,q[Uh>>2]=2003,Y(4,1087,Uh),0),L=16+Uh|0,0|a},csmGetParameterValues:function(a){var Sh;return L=Sh=L-16|0,a=(a|=0)?q[a+300>>2]:(q[4+Sh>>2]=1651,q[Sh>>2]=2032,Y(4,1087,Sh),0),L=16+Sh|0,0|a},csmGetPartCount:function(a){var Rh;return L=Rh=L-16|0,a=(a|=0)?q[a+4>>2]:(q[4+Rh>>2]=1651,q[Rh>>2]=2054,Y(4,1087,Rh),-1),L=16+Rh|0,0|a},csmGetPartIds:function(a){var Qh;return L=Qh=L-16|0,a=(a|=0)?q[q[a>>2]+712>>2]:(q[4+Qh>>2]=1651,q[Qh>>2]=2070,Y(4,1087,Qh),0),L=16+Qh|0,0|a},csmGetPartOpacities:function(a){var Ph;return L=Ph=L-16|0,a=(a|=0)?q[a+52>>2]:(q[4+Ph>>2]=1651,q[Ph>>2]=2084,Y(4,1087,Ph),0),L=16+Ph|0,0|a},csmGetPartParentPartIndices:function(a){var Oh;return L=Oh=L-16|0,a=(a|=0)?q[q[a>>2]+740>>2]:(q[4+Oh>>2]=1651,q[Oh>>2]=2104,Y(4,1087,Oh),0),L=16+Oh|0,0|a},csmGetDrawableCount:function(a){var Nh;return L=Nh=L-16|0,a=(a|=0)?q[a+200>>2]:(q[4+Nh>>2]=1651,q[Nh>>2]=2132,Y(4,1087,Nh),-1),L=16+Nh|0,0|a},csmGetDrawableIds:function(a){var Mh;return L=Mh=L-16|0,a=(a|=0)?q[q[a>>2]+820>>2]:(q[4+Mh>>2]=1651,q[Mh>>2]=2152,Y(4,1087,Mh),0),L=16+Mh|0,0|a},csmGetDrawableConstantFlags:function(a){var Lh;return L=Lh=L-16|0,a=(a|=0)?q[q[a>>2]+872>>2]:(q[4+Lh>>2]=1651,q[Lh>>2]=2170,Y(4,1087,Lh),0),L=16+Lh|0,0|a},csmGetDrawableDynamicFlags:function(a){var Kh;return L=Kh=L-16|0,a=(a|=0)?q[a+260>>2]:(q[4+Kh>>2]=1651,q[Kh>>2]=2198,Y(4,1087,Kh),0),L=16+Kh|0,0|a},csmGetDrawableTextureIndices:function(a){var Jh;return L=Jh=L-16|0,a=(a|=0)?q[q[a>>2]+868>>2]:(q[4+Jh>>2]=1651,q[Jh>>2]=2225,Y(4,1087,Jh),0),L=16+Jh|0,0|a},csmGetDrawableDrawOrders:function(a){var Ih;return L=Ih=L-16|0,a=(a|=0)?q[a+268>>2]:(q[4+Ih>>2]=1651,q[Ih>>2]=2254,Y(4,1087,Ih),0),L=16+Ih|0,0|a},csmGetDrawableRenderOrders:function(a){var Hh;return L=Hh=L-16|0,a=(a|=0)?q[a+264>>2]:(q[4+Hh>>2]=1651,q[Hh>>2]=2279,Y(4,1087,Hh),0),L=16+Hh|0,0|a},csmGetDrawableOpacities:function(a){var Gh;return L=Gh=L-16|0,a=(a|=0)?q[a+276>>2]:(q[4+Gh>>2]=1651,q[Gh>>2]=2306,Y(4,1087,Gh),0),L=16+Gh|0,0|a},csmGetDrawableMaskCounts:function(a){var Fh;return L=Fh=L-16|0,a=(a|=0)?q[q[a>>2]+896>>2]:(q[4+Fh>>2]=1651,q[Fh>>2]=2330,Y(4,1087,Fh),0),L=16+Fh|0,0|a},csmGetDrawableMasks:function(a){var Eh;return L=Eh=L-16|0,a=(a|=0)?q[q[a>>2]+832>>2]:(q[4+Eh>>2]=1651,q[Eh>>2]=2355,Y(4,1087,Eh),0),L=16+Eh|0,0|a},csmGetDrawableVertexCounts:function(a){var Dh;return L=Dh=L-16|0,a=(a|=0)?q[q[a>>2]+876>>2]:(q[4+Dh>>2]=1651,q[Dh>>2]=2375,Y(4,1087,Dh),0),L=16+Dh|0,0|a},csmGetDrawableVertexPositions:function(a){var Ch;return L=Ch=L-16|0,a=(a|=0)?q[a+272>>2]:(q[4+Ch>>2]=1651,q[Ch>>2]=2402,Y(4,1087,Ch),0),L=16+Ch|0,0|a},csmGetDrawableVertexUvs:function(a){var Bh;return L=Bh=L-16|0,a=(a|=0)?q[q[a>>2]+824>>2]:(q[4+Bh>>2]=1651,q[Bh>>2]=2432,Y(4,1087,Bh),0),L=16+Bh|0,0|a},csmGetDrawableIndexCounts:function(a){var gh;return L=gh=L-16|0,a=(a|=0)?q[q[a>>2]+888>>2]:(q[4+gh>>2]=1651,q[gh>>2]=2456,Y(4,1087,gh),0),L=16+gh|0,0|a},csmGetDrawableIndices:function(a){var fh;return L=fh=L-16|0,a=(a|=0)?q[q[a>>2]+828>>2]:(q[4+fh>>2]=1651,q[fh>>2]=2482,Y(4,1087,fh),0),L=16+fh|0,0|a},csmResetDrawableDynamicFlags:function(a){var dh;L=dh=L-16|0,(a|=0)?q[a+256>>2]=1:(q[4+dh>>2]=1651,q[dh>>2]=2504,Y(4,1087,dh)),L=16+dh|0},csmMallocMoc:function(a){var rd;return ya(12+(L=rd=L-16|0)|0,64,a|=0),L=16+rd|0,q[12+rd>>2]},csmMallocModelAndInitialize:function(a){var Fc,nd=0,qd=0;return L=Fc=L-16|0,(a|=0)&&(ya(12+Fc|0,16,qd=wa(a))||(nd=va(a,q[12+Fc>>2],qd))||(za(q[12+Fc>>2]),nd=0)),L=16+Fc|0,0|nd},csmMalloc:function(a){return 0|ja(a|=0)},csmFree:function(a){za(a|=0)},stackSave:function(){return 0|L},stackAlloc:function(a){return 0|(L=L-(a|=0)&-16)},stackRestore:function(a){L=a|=0},__growWasmMemory:function(a){return 0|function(pagesToAdd){pagesToAdd|=0;var P=0|N(),Q=P+pagesToAdd|0;if(P<Q&&Q<65536){var R=new ArrayBuffer(w(Q,65536)),S=new global.Int8Array(R);S.set(o),o=S,o=new global.Int8Array(R),p=new global.Int16Array(R),q=new global.Int32Array(R),r=new global.Uint8Array(R),s=new global.Uint16Array(R),t=new global.Uint32Array(R),u=new global.Float32Array(R),v=new global.Float64Array(R),buffer=R,m.buffer=R}return P}(0|(a|=0))},dynCall_vi:function(a,_h){_h|=0,n[a|=0](_h)}};function X(a,b,c){var d=0,e=0,f=0;if(c)for(;;){if(c=c+-1|0,a>>>0<(d=(e=a+b|0)-1|0)>>>0)for(;f=r[0|a],o[0|a]=r[0|d],o[0|d]=f,(a=a+1|0)>>>0<(d=d+-1|0)>>>0;);if(a=e,!c)break}}function Y(a,b,c){var g;L=g=L-272|0,t[1640]>a>>>0||(a=q[1641])&&(sa(16+g|0,b,q[12+g>>2]=c),n[a](16+g|0)),L=272+g|0}function Z(a,b,c){32&r[0|a]||function(a,Ub,Fc){var Gc=0,Hc=0,Ic=0;a:{if(!(Gc=q[Fc+16>>2])){if(function(a){var Ub=0;return Ub=r[a+74|0],o[a+74|0]=Ub+-1|Ub,8&(Ub=q[a>>2])?(q[a>>2]=32|Ub,1):(q[a+4>>2]=0,q[a+8>>2]=0,Ub=q[a+44>>2],q[a+28>>2]=Ub,q[a+20>>2]=Ub,q[a+16>>2]=Ub+q[a+48>>2],0)}(Fc))break a;Gc=q[Fc+16>>2]}if(Gc-(Ic=q[Fc+20>>2])>>>0<Ub>>>0)return n[q[Fc+36>>2]](Fc,a,Ub);b:if(!(o[Fc+75|0]<0)){for(Gc=Ub;;){if(!(Hc=Gc))break b;if(10==r[(Gc=Hc+-1|0)+a|0])break}if(n[q[Fc+36>>2]](Fc,a,Hc)>>>0<Hc>>>0)break a;Ub=Ub-Hc|0,a=a+Hc|0,Ic=q[Fc+20>>2]}fa(Ic,a,Ub),q[Fc+20>>2]=q[Fc+20>>2]+Ub}}(b,c,a)}function _(a,b,c,h,i){var j,k=0,l=0;if(L=j=L-256|0,!(73728&i|(0|c)<=(0|h))){if(ba(j,b,(k=(i=c-h|0)>>>0<256)?i:256),b=a,l=j,!k){for(c=c-h|0;Z(a,j,256),255<(i=i+-256|0)>>>0;);i=255&c}Z(b,l,i)}L=256+j|0}function $(a){var b,c;return x((b=a*a)*b*(c=b*a)*(2718311493989822e-21*b-.00019839334836096632)+(c*(.008333329385889463*b-.16666666641626524)+a))}function aa(a){var h;return x(-.499999997251031*(a*=a)+1+.04166662332373906*(h=a*a)+a*h*(2439044879627741e-20*a-.001388676377460993))}function ba(a,i,m){var n=0,p=0,r=0,s=0;if(m&&(o[(n=a+m|0)-1|0]=i,o[0|a]=i,!(m>>>0<3||(o[n+-2|0]=i,o[a+1|0]=i,o[n+-3|0]=i,o[a+2|0]=i,m>>>0<7||(o[n+-4|0]=i,o[a+3|0]=i,m>>>0<9||(p=(n=0-a&3)+a|0,i=w(255&i,16843009),q[p>>2]=i,q[(n=(m=m-n&-4)+p|0)-4>>2]=i,m>>>0<9||(q[p+8>>2]=i,q[p+4>>2]=i,q[n+-8>>2]=i,q[n+-12>>2]=i,m>>>0<25||(q[p+24>>2]=i,q[p+20>>2]=i,q[p+16>>2]=i,q[p+12>>2]=i,q[n+-16>>2]=i,q[n+-20>>2]=i,q[n+-24>>2]=i,q[n+-28>>2]=i,(m=m-(s=4&p|24)|0)>>>0<32))))))))for(r=n=i,i=p+s|0;q[i+24>>2]=r,q[i+28>>2]=n,q[i+16>>2]=r,q[i+20>>2]=n,q[i+8>>2]=r,q[i+12>>2]=n,q[i>>2]=r,q[i+4>>2]=n,i=i+32|0,31<(m=m+-32|0)>>>0;);return a}function ca(a,i){var m=0;if(a>>>0<(i=(a+i|0)-1|0)>>>0)for(;m=r[0|a],o[0|a]=r[0|i],o[0|i]=m,(a=a+1|0)>>>0<(i=i+-1|0)>>>0;);}function da(a){var i;return(0|(a=(i=q[2052])+a|0))<=-1?(q[1906]=48,-1):a>>>0<=N()<<16>>>0||J(0|a)?(q[2052]=a,i):(q[1906]=48,-1)}function ea(a,q,t){var u=0,v=0,x=0;if(1==(0|q)&a>>>0<0|q>>>0<1)u=a;else for(;v=gc(u=hc(a,q,10),x=v=M,10),o[0|(t=t+-1|0)]=a-v|48,v=9==(0|q)&4294967295<a>>>0|9<q>>>0,a=u,q=x,v;);if(u)for(;a=(u>>>0)/10|0,o[0|(t=t+-1|0)]=u-w(a,10)|48,q=9<u>>>0,u=a,q;);return t}function fa(a,t,w){var y,z=0;if(8192<=w>>>0)I(0|a,0|t,0|w);else{y=a+w|0;a:if(3&(a^t))if(y>>>0<4)w=a;else if((z=y-4|0)>>>0<a>>>0)w=a;else for(w=a;o[0|w]=r[0|t],o[w+1|0]=r[t+1|0],o[w+2|0]=r[t+2|0],o[w+3|0]=r[t+3|0],t=t+4|0,(w=w+4|0)>>>0<=z>>>0;);else{b:if((0|w)<1)w=a;else if(3&a)for(w=a;;){if(o[0|w]=r[0|t],t=t+1|0,y>>>0<=(w=w+1|0)>>>0)break b;if(!(3&w))break}else w=a;if(!((a=-4&y)>>>0<64||(z=a+-64|0)>>>0<w>>>0))for(;q[w>>2]=q[t>>2],q[w+4>>2]=q[t+4>>2],q[w+8>>2]=q[t+8>>2],q[w+12>>2]=q[t+12>>2],q[w+16>>2]=q[t+16>>2],q[w+20>>2]=q[t+20>>2],q[w+24>>2]=q[t+24>>2],q[w+28>>2]=q[t+28>>2],q[w+32>>2]=q[t+32>>2],q[w+36>>2]=q[t+36>>2],q[w+40>>2]=q[t+40>>2],q[w+44>>2]=q[t+44>>2],q[w+48>>2]=q[t+48>>2],q[w+52>>2]=q[t+52>>2],q[w+56>>2]=q[t+56>>2],q[w+60>>2]=q[t+60>>2],t=t- -64|0,(w=w- -64|0)>>>0<=z>>>0;);if(a>>>0<=w>>>0)break a;for(;q[w>>2]=q[t>>2],t=t+4|0,(w=w+4|0)>>>0<a>>>0;);}if(w>>>0<y>>>0)for(;o[0|w]=r[0|t],t=t+1|0,(0|y)!=(0|(w=w+1|0)););}}function ga(a){return a+-48>>>0<10}function ha(a,o){a:if(1024<=(0|o)){if(a*=898846567431158e293,(0|o)<2047){o=o+-1023|0;break a}a*=898846567431158e293,o=((0|o)<3069?o:3069)+-2046|0}else-1023<(0|o)||(a*=22250738585072014e-324,o=-2045<(0|o)?o+1022|0:(a*=22250738585072014e-324,(-3066<(0|o)?o:-3066)+2044|0));return f(0,0),f(1,o+1023<<20),a*g()}function ia(a,t,A,B,C,D,E){var F,R,U,G=0,H=0,I=0,J=0,K=0,M=0,N=0,O=0,P=0,Q=0,S=0,T=0;q[76+(L=F=L-80|0)>>2]=t,U=55+F|0,R=56+F|0,t=0;a:{b:for(;;){(0|P)<0||(P=(2147483647-P|0)<(0|t)?(q[1906]=61,-1):t+P|0);d:{e:{f:{g:{h:{i:{j:{k:{l:{m:{n:{o:{p:{q:{if(J=q[76+F>>2],I=r[0|(t=J)]){for(;;){r:{s:{t:if(G=255&I){if(37!=(0|G))break s;for(I=t;;){if(37!=r[t+1|0])break t;if(G=t+2|0,q[76+F>>2]=G,I=I+1|0,H=r[t+2|0],t=G,37!=(0|H))break}}else I=t;if(t=I-J|0,a&&Z(a,J,t),t)continue b;Q=-1,I=1,K=!ga(o[q[76+(G=F)>>2]+1|0]),t=q[76+F>>2],K|36!=r[t+2|0]||(Q=o[t+1|0]+-48|0,S=1,I=3),t=I+t|0,q[G+76>>2]=t;u:if(31<(H=(M=o[(I=0)|t])+-32|0)>>>0)G=t;else if(G=t,75913&(H=1<<H))for(;;){if(G=t+1|0,q[76+F>>2]=G,I|=H,31<(H=(M=o[t+1|0])+-32|0)>>>0)break u;if(t=G,!(75913&(H=1<<H)))break}v:if(42!=(0|M)){if((0|(N=qa(76+F|0)))<0)break q;t=q[76+F>>2]}else{if(K=F,ga(o[G+1|0])&&(t=q[76+F>>2],36==r[t+2|0]))q[((o[t+1|0]<<2)+C|0)-192>>2]=10,N=q[((o[t+1|0]<<3)+B|0)-384>>2],S=1,t=t+3|0;else{if(S)break q;N=S=0,a&&(t=q[A>>2],q[A>>2]=t+4,N=q[t>>2]),t=q[76+F>>2]+1|0}if(q[K+76>>2]=t,-1<(0|N))break v;N=0-N|0,I|=8192}H=-1;y:if(46==r[0|t])if(42!=r[t+1|0])q[76+F>>2]=t+1,H=qa(76+F|0),t=q[76+F>>2];else{if(ga(o[t+2|0])&&(t=q[76+F>>2],36==r[t+3|0])){q[((o[t+2|0]<<2)+C|0)-192>>2]=10,H=q[((o[t+2|0]<<3)+B|0)-384>>2],t=t+4|0,q[76+F>>2]=t;break y}if(S)break q;H=a?(t=q[A>>2],q[A>>2]=t+4,q[t>>2]):0,t=q[76+F>>2]+2|0,q[76+F>>2]=t}for(G=0;;){if(T=G,O=-1,57<o[0|t]+-65>>>0)break a;if(M=t+1|0,q[76+F>>2]=M,G=o[0|t],t=M,!((G=r[2639+(G+w(T,58)|0)|0])+-1>>>0<8))break}if(!G)break a;A:{B:{C:{if(19==(0|G)){if((0|Q)<=-1)break C;break a}if((0|Q)<0)break B;q[(Q<<2)+C>>2]=G,G=q[4+(t=(Q<<3)+B|0)>>2],q[64+F>>2]=q[t>>2],q[68+F>>2]=G}if(t=0,!a)continue b;break A}if(!a)break d;pa(64+F|0,G,A,E),M=q[76+F>>2]}if(K=-65537&I,I=8192&I?K:I,Q=2684,G=R,t=o[M+-1|(O=0)],(M=(t=T&&3==(15&t)?-33&t:t)+-88|0)>>>0<=32)break r;D:{E:{F:{G:{if(6<(K=t+-65|0)>>>0){if(83!=(0|t))break e;if(!H)break G;G=q[64+F>>2];break E}switch(K-1|0){case 1:break F;case 0:case 2:break e;default:break p}}_(a,32,N,t=0,I);break D}q[12+F>>2]=0,q[8+F>>2]=q[64+F>>2],q[64+F>>2]=8+F,H=-1,G=8+F|0}t=0;H:{for(;;){if(!(J=q[G>>2]))break H;if((K=(0|(J=oa(4+F|0,J)))<0)|H-t>>>0<J>>>0)break;if(G=G+4|0,!((t=t+J|0)>>>0<H>>>0))break H}if(O=-1,K)break a}if(_(a,32,N,t,I),t)for(H=0,G=q[64+F>>2];;){if(!(J=q[G>>2]))break D;if((0|t)<(0|(H=(J=oa(4+F|0,J))+H|0)))break D;if(Z(a,4+F|0,J),G=G+4|0,!(H>>>0<t>>>0))break}else t=0}_(a,32,N,t,8192^I),t=(0|t)<(0|N)?N:t;continue b}G=t+1|0,q[76+F>>2]=G,I=r[t+1|0],t=G;continue}break}switch(M-1|0){case 21:break i;case 23:break k;case 22:break l;case 11:case 16:break m;case 10:break n;case 26:break o;case 8:case 12:case 13:case 14:break p;case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 9:case 15:case 17:case 18:case 19:case 20:case 24:case 25:case 27:case 29:case 30:break e;case 28:break h;default:break j}}if(O=P,a)break a;if(!S)break d;for(t=1;;){if(a=q[(t<<2)+C>>2]){if(pa((t<<3)+B|0,a,A,E),10!=(0|(t=t+(O=1)|0)))continue;break a}break}if(O=1,10<=t>>>0)break a;for(;;){if(q[(t<<2)+C>>2])break q;if(a=8<t>>>0,t=t+1|0,a)break}break a}O=-1;break a}t=0|n[D](a,v[64+F>>3],N,H,I,t);continue}G=(t=Ia(J=(t=q[64+F>>2])||2694,H))||H+J|0,I=K,H=t?t-J|0:H;break e}o[55+F|0]=q[64+F>>2],H=1,J=U,I=K;break e}if(t=K=q[68+F>>2],J=q[64+F>>2],(0|t)<-1||(0|t)<=-1&&!(4294967295<J>>>0)){t=0-(t+(0<J>>>0)|0)|0,J=0-J|0,q[64+F>>2]=J,q[68+F>>2]=t,O=1,Q=2684;break g}if(2048&I){O=1,Q=2685;break g}Q=(O=1&I)?2686:2684;break g}if(J=Oa(q[64+F>>2],q[68+F>>2],R),!(8&I))break f;H=(0|(t=R-J|0))<(0|H)?H:t+1|0;break f}H=8<H>>>0?H:8,I|=8,t=120}if(J=Na(q[64+F>>2],q[68+F>>2],R,32&t),!(8&I)|!(q[64+F>>2]|q[68+F>>2]))break f;Q=2684+(t>>>4)|0,O=2;break f}if(7<(G=255&T)>>>(t=0))continue;switch(G-1|0){default:case 0:q[q[64+F>>2]>>2]=P;continue;case 1:G=q[64+F>>2],q[G>>2]=P,q[G+4>>2]=P>>31;continue;case 2:p[q[64+F>>2]>>1]=P;continue;case 3:o[q[64+F>>2]]=P;continue;case 5:q[q[64+F>>2]>>2]=P;continue;case 4:continue;case 6:}G=q[64+F>>2],q[G>>2]=P,q[G+4>>2]=P>>31;continue}J=q[64+F>>2],t=q[68+F>>2],Q=2684}J=ea(J,t,R)}I=-1<(0|H)?-65537&I:I,H=!!((K=t=q[68+F>>2])|(M=q[64+F>>2]))|H?(0|(t=!(K|M)+(R-J|0)|0))<(0|H)?H:t:(J=R,0)}_(a,32,t=(0|N)<(0|(G=(H=(0|H)<(0|(K=G-J|0))?K:H)+O|0))?G:N,G,I),Z(a,Q,O),_(a,48,t,G,65536^I),_(a,48,H,K,0),Z(a,J,K),_(a,32,t,G,8192^I);continue}break}O=0}return L=80+F|0,O}function ja(a){var Y,o=0,w=0,A=0,B=0,C=0,D=0,E=0,V=0,W=0,X=0,Z=0,_=0;L=Y=L-16|0;a:{b:{c:{d:{e:{f:{g:{h:{i:{j:{k:{if(a>>>0<=244){if(3&(o=(C=q[1923])>>>(a=(D=a>>>0<11?16:a+11&-8)>>>3))){a=(o=q[7740+(B=(w=a+(1&(-1^o))|0)<<3)>>2])+8|0,(0|(A=q[o+8>>2]))!=(0|(B=B+7732|0))?(q[A+12>>2]=B,q[B+8>>2]=A):(Z=7692,_=jc(w)&C,q[Z>>2]=_),w<<=3,q[o+4>>2]=3|w,q[4+(o=o+w|0)>>2]=1|q[o+4>>2];break a}if(D>>>0<=(V=q[1925])>>>0)break k;if(o){w=o=(a=(0-(a=(0-(w=2<<a)|w)&o<<a)&a)-1|0)>>>12&16,w|=o=(a>>>=o)>>>5&8,w|=o=(a>>>=o)>>>2&4,o=q[7740+(A=(w=((w|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)|0)<<3)>>2],(0|(a=q[o+8>>2]))!=(0|(A=A+7732|0))?(q[a+12>>2]=A,q[A+8>>2]=a):(C=jc(w)&C,q[1923]=C),a=o+8|0,q[o+4>>2]=3|D,B=(w<<=3)-D|0,q[4+(E=o+D|0)>>2]=1|B,q[o+w>>2]=B,V&&(o=7732+((w=V>>>3)<<3)|0,A=q[1928],w=(w=1<<w)&C?q[o+8>>2]:(q[1923]=w|C,o),q[o+8>>2]=A,q[w+12>>2]=A,q[A+12>>2]=o,q[A+8>>2]=w),q[1928]=E,q[1925]=B;break a}if(!(X=q[1924]))break k;for(w=o=(a=(X&0-X)-1|0)>>>12&16,w|=o=(a>>>=o)>>>5&8,w|=o=(a>>>=o)>>>2&4,o=q[7996+(((w|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)<<2)>>2],A=(-8&q[o+4>>2])-D|0,w=o;a=(a=q[w+16>>2])||q[w+20>>2];)A=(w=(B=(-8&q[a+4>>2])-D|0)>>>0<A>>>0)?B:A,o=w?a:o,w=a;if(W=q[o+24>>2],(0|(B=q[o+12>>2]))!=(0|o)){a=q[o+8>>2],q[a+12>>2]=B,q[B+8>>2]=a;break b}if(!(a=q[(w=o+20|0)>>2])){if(!(a=q[o+16>>2]))break j;w=o+16|0}for(;E=w,(a=q[(w=(B=a)+20|0)>>2])||(w=B+16|0,a=q[B+16>>2]););q[E>>2]=0;break b}if(D=-1,!(4294967231<a>>>0)&&(D=-8&(o=a+11|0),V=q[1924])){w=0-D|0,C=0,(o>>>=8)&&(C=31,16777215<D>>>0||(C=28+((a=((C=(o<<=A=o+1048320>>>16&8)<<(a=o+520192>>>16&4))<<(o=C+245760>>>16&2)>>>15)-(o|a|A)|0)<<1|D>>>a+21&1)|0));q:{r:{if(A=q[7996+(C<<2)>>2])for(o=D<<(31==(0|C)?0:25-(C>>>1)|0),a=0;;){if(!(w>>>0<=(E=(-8&q[A+4>>2])-D|0)>>>0||(B=A,w=E))){w=0,a=A;break r}if(E=q[A+20>>2],A=q[16+((o>>>29&4)+A|0)>>2],a=E?(0|E)==(0|A)?a:E:a,o<<=0!=(0|A),!A)break}else a=0;if(!(a|B)){if(!(a=(0-(a=2<<C)|a)&V))break k;A=o=(a=(a&0-a)-1|0)>>>12&16,A|=o=(a>>>=o)>>>5&8,A|=o=(a>>>=o)>>>2&4,a=q[7996+(((A|=o=(a>>>=o)>>>1&2)|(o=(a>>>=o)>>>1&1))+(a>>>o)<<2)>>2]}if(!a)break q}for(;w=(o=(A=(-8&q[a+4>>2])-D|0)>>>0<w>>>0)?A:w,B=o?a:B,a=(o=q[a+16>>2])||q[a+20>>2];);}if(!(!B|w>>>0>=q[1925]-D>>>0)){if(E=q[B+24>>2],(0|B)!=(0|(o=q[B+12>>2]))){a=q[B+8>>2],q[a+12>>2]=o,q[o+8>>2]=a;break c}if(!(a=q[(A=B+20|0)>>2])){if(!(a=q[B+16>>2]))break i;A=B+16|0}for(;C=A,(a=q[(A=(o=a)+20|0)>>2])||(A=o+16|0,a=q[o+16>>2]););q[C>>2]=0;break c}}}if(D>>>0<=(o=q[1925])>>>0){a=q[1928],16<=(w=o-D|0)>>>0?(q[1925]=w,A=a+D|0,q[1928]=A,q[A+4>>2]=1|w,q[a+o>>2]=w,q[a+4>>2]=3|D):(q[1928]=0,q[1925]=0,q[a+4>>2]=3|o,q[4+(o=a+o|0)>>2]=1|q[o+4>>2]),a=a+8|0;break a}if(D>>>0<(A=q[1926])>>>0){o=A-D|0,q[1926]=o,w=(a=q[1929])+D|0,q[1929]=w,q[w+4>>2]=1|o,q[a+4>>2]=3|D,a=a+8|0;break a}if((w=(C=(w=B=D+47|(a=0))+(o=q[2041]?q[2043]:(q[2044]=-1,q[2045]=-1,q[2042]=4096,q[2043]=4096,q[2041]=12+Y&-16^1431655768,q[2046]=0,q[2034]=0,4096))|0)&(E=0-o|0))>>>0<=D>>>0)break a;if((o=q[2033])&&(W=(V=q[2031])+w|0)>>>0<=V>>>0|o>>>0<W>>>0)break a;if(4&r[8136])break f;v:{w:{if(o=q[1929])for(a=8140;;){if((V=q[a>>2])+q[a+4>>2]>>>0>o>>>0&&V>>>0<=o>>>0)break w;if(!(a=q[a+8>>2]))break}if(-1==(0|(o=da(0))))break g;if(C=w,(A=(a=q[2042])+-1|0)&o&&(C=(w-o|0)+(o+A&0-a)|0),C>>>0<=D>>>0|2147483646<C>>>0)break g;if((a=q[2033])&&(E=(A=q[2031])+C|0)>>>0<=A>>>0|a>>>0<E>>>0)break g;if((0|o)!=(0|(a=da(C))))break v;break e}if(2147483646<(C=E&C-A)>>>0)break g;if((0|(o=da(C)))==(q[a>>2]+q[a+4>>2]|0))break h;a=o}if(!(D+48>>>0<=C>>>0|2147483646<C>>>0|-1==(0|(o=a)))){if(2147483646<(a=(a=q[2043])+(B-C|0)&0-a)>>>0)break e;if(-1!=(0|da(a))){C=a+C|0;break e}da(0-C|0);break g}if(-1!=(0|o))break e;break g}B=0;break b}o=0;break c}if(-1!=(0|o))break e}q[2034]=4|q[2034]}if(2147483646<w>>>0)break d;if(o=da(w),(a=da(0))>>>0<=o>>>0|-1==(0|o)|-1==(0|a))break d;if((C=a-o|0)>>>0<=D+40>>>0)break d}a=q[2031]+C|0,(q[2031]=a)>>>0>t[2032]&&(q[2032]=a);x:{y:{z:{if(w=q[1929]){for(a=8140;;){if(((A=q[a>>2])+(B=q[a+4>>2])|0)==(0|o))break z;if(!(a=q[a+8>>2]))break}break y}for((a=q[1927])>>>0<=o>>>0&&a||(q[1927]=o),a=0,q[2036]=C,q[2035]=o,q[1931]=-1,q[1932]=q[2041],q[2038]=0;A=7732+(w=a<<3)|0,q[w+7740>>2]=A,q[w+7744>>2]=A,32!=(0|(a=a+1|0)););A=(a=C+-40|0)-(w=o+8&7?-8-o&7:0)|0,q[1926]=A,w=o+w|0,q[1929]=w,q[w+4>>2]=1|A,q[4+(a+o|0)>>2]=40,q[1930]=q[2045];break x}if(!(8&r[a+12|0]|o>>>0<=w>>>0|w>>>0<A>>>0)){q[a+4>>2]=B+C,o=(a=w+8&7?-8-w&7:0)+w|0,q[1929]=o,a=(A=q[1926]+C|0)-a|0,q[1926]=a,q[o+4>>2]=1|a,q[4+(w+A|0)>>2]=40,q[1930]=q[2045];break x}}o>>>0<(B=q[1927])>>>0&&(q[1927]=o,B=0),A=o+C|0,a=8140;A:{B:{C:{D:{E:{F:{for(;(0|A)!=q[a>>2];)if(!(a=q[a+8>>2]))break F;if(!(8&r[a+12|0]))break E}for(a=8140;;){if((A=q[a>>2])>>>0<=w>>>0&&w>>>0<(B=A+q[a+4>>2]|0)>>>0)break D;a=q[a+8>>2]}}if(q[a>>2]=o,q[a+4>>2]=q[a+4>>2]+C,q[4+(W=(o+8&7?-8-o&7:0)+o|0)>>2]=3|D,a=((o=A+(A+8&7?-8-A&7:0)|0)-W|0)-D|0,E=D+W|0,(0|o)==(0|w)){q[1929]=E,a=q[1926]+a|0,q[1926]=a,q[E+4>>2]=1|a;break B}if(q[1928]==(0|o)){q[1928]=E,a=q[1925]+a|0,q[1925]=a,q[E+4>>2]=1|a,q[a+E>>2]=a;break B}if(1==(3&(w=q[o+4>>2]))){X=-8&w;G:if(w>>>0<=255){if(B=w>>>3,w=q[o+8>>2],(0|(A=q[o+12>>2]))==(0|w)){Z=7692,_=q[1923]&jc(B),q[Z>>2]=_;break G}q[w+12>>2]=A,q[A+8>>2]=w}else{if(V=q[o+24>>2],(0|(C=q[o+12>>2]))==(0|o))if((D=q[(A=o+20|0)>>2])||(D=q[(A=o+16|0)>>2])){for(;w=A,(D=q[(A=(C=D)+20|0)>>2])||(A=C+16|0,D=q[C+16>>2]););q[w>>2]=0}else C=0;else w=q[o+8>>2],q[w+12>>2]=C,q[C+8>>2]=w;if(V){w=q[o+28>>2];J:{if(q[(A=7996+(w<<2)|0)>>2]==(0|o)){if(q[A>>2]=C)break J;Z=7696,_=q[1924]&jc(w),q[Z>>2]=_;break G}if(!(q[V+(q[V+16>>2]==(0|o)?16:20)>>2]=C))break G}q[C+24>>2]=V,(w=q[o+16>>2])&&(q[C+16>>2]=w,q[w+24>>2]=C),(w=q[o+20>>2])&&(q[C+20>>2]=w,q[w+24>>2]=C)}}o=o+X|0,a=a+X|0}if(q[o+4>>2]=-2&q[o+4>>2],q[E+4>>2]=1|a,(q[a+E>>2]=a)>>>0<=255){a=7732+((o=a>>>3)<<3)|0,o=(w=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|w,a),q[a+8>>2]=E,q[o+12>>2]=E,q[E+12>>2]=a,q[E+8>>2]=o;break B}if(o=0,(A=a>>>8)&&(o=31,16777215<a>>>0||(o=28+((o=((D=(A<<=B=A+1048320>>>16&8)<<(o=A+520192>>>16&4))<<(A=D+245760>>>16&2)>>>15)-(A|o|B)|0)<<1|a>>>o+21&1)|0)),q[(w=E)+28>>2]=o,q[E+16>>2]=0,w=7996+(o<<2)|(q[E+20>>2]=0),(A=q[1924])&(B=1<<o)){for(A=a<<(31==(0|o)?0:25-(o>>>1)|0),o=q[w>>2];;){if((-8&q[(w=o)+4>>2])==(0|a))break C;if(o=A>>>29,A<<=1,!(o=q[16+(B=(4&o)+w|0)>>2]))break}q[B+16>>2]=E}else q[1924]=A|B,q[w>>2]=E;q[E+24>>2]=w,q[E+12>>2]=E,q[E+8>>2]=E;break B}for(E=(a=C+-40|0)-(A=o+8&7?-8-o&7:0)|0,q[1926]=E,A=o+A|0,q[1929]=A,q[A+4>>2]=1|E,q[4+(a+o|0)>>2]=40,q[1930]=q[2045],q[(A=(a=(B+(B+-39&7?39-B&7:0)|0)-47|0)>>>0<w+16>>>0?w:a)+4>>2]=27,a=q[2038],q[A+16>>2]=q[2037],q[A+20>>2]=a,a=q[2036],q[A+8>>2]=q[2035],q[A+12>>2]=a,q[2037]=A+8,q[2036]=C,q[2035]=o,a=A+24|(q[2038]=0);q[a+4>>2]=7,o=a+8|0,a=a+4|0,o>>>0<B>>>0;);if((0|w)==(0|A))break x;if(q[A+4>>2]=-2&q[A+4>>2],B=A-w|0,q[w+4>>2]=1|B,(q[A>>2]=B)>>>0<=255){a=7732+((o=B>>>3)<<3)|0,o=(A=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|A,a),q[a+8>>2]=w,q[o+12>>2]=w,q[w+12>>2]=a,q[w+8>>2]=o;break x}if(q[w+16>>2]=0,a=q[w+20>>2]=0,(A=B>>>8)&&(a=31,16777215<B>>>0||(a=28+((a=((E=(A<<=C=A+1048320>>>16&8)<<(a=A+520192>>>16&4))<<(A=E+245760>>>16&2)>>>15)-(A|a|C)|0)<<1|B>>>a+21&1)|0)),o=7996+((q[(o=w)+28>>2]=a)<<2)|0,(A=q[1924])&(C=1<<a)){for(a=B<<(31==(0|a)?0:25-(a>>>1)|0),o=q[o>>2];;){if((0|B)==(-8&q[(A=o)+4>>2]))break A;if(o=a>>>29,a<<=1,!(o=q[16+(C=A+(4&o)|0)>>2]))break}q[C+16>>2]=w,q[w+24>>2]=A}else q[1924]=A|C,q[o>>2]=w,q[w+24>>2]=o;q[w+12>>2]=w,q[w+8>>2]=w;break x}a=q[w+8>>2],q[a+12>>2]=E,q[w+8>>2]=E,q[E+24>>2]=0,q[E+12>>2]=w,q[E+8>>2]=a}a=W+8|0;break a}a=q[A+8>>2],q[a+12>>2]=w,q[A+8>>2]=w,q[w+24>>2]=0,q[w+12>>2]=A,q[w+8>>2]=a}if(!((a=q[1926])>>>0<=D>>>0)){o=a-D|0,q[1926]=o,w=(a=q[1929])+D|0,q[1929]=w,q[w+4>>2]=1|o,q[a+4>>2]=3|D,a=a+8|0;break a}}q[1906]=48,a=0;break a}Q:if(E){a=q[B+28>>2];R:{if(q[(A=7996+(a<<2)|0)>>2]==(0|B)){if(q[A>>2]=o)break R;V=jc(a)&V,q[1924]=V;break Q}if(!(q[E+(q[E+16>>2]==(0|B)?16:20)>>2]=o))break Q}q[o+24>>2]=E,(a=q[B+16>>2])&&(q[o+16>>2]=a,q[a+24>>2]=o),(a=q[B+20>>2])&&(q[o+20>>2]=a,q[a+24>>2]=o)}S:if(w>>>0<=15)a=w+D|0,q[B+4>>2]=3|a,q[4+(a=a+B|0)>>2]=1|q[a+4>>2];else if(q[B+4>>2]=3|D,q[4+(A=B+D|0)>>2]=1|w,(q[w+A>>2]=w)>>>0<=255)a=7732+((o=w>>>3)<<3)|0,o=(w=q[1923])&(o=1<<o)?q[a+8>>2]:(q[1923]=o|w,a),q[a+8>>2]=A,q[o+12>>2]=A,q[A+12>>2]=a,q[A+8>>2]=o;else{a=0,(D=w>>>8)&&(a=31,16777215<w>>>0||(a=28+((a=((E=(D<<=C=D+1048320>>>16&8)<<(a=D+520192>>>16&4))<<(D=E+245760>>>16&2)>>>15)-(D|a|C)|0)<<1|w>>>a+21&1)|0)),q[(o=A)+28>>2]=a,q[A+16>>2]=0,o=7996+(a<<2)|(q[A+20>>2]=0);V:{if((D=1<<a)&V){for(a=w<<(31==(0|a)?0:25-(a>>>1)|0),D=q[o>>2];;){if((-8&q[(o=D)+4>>2])==(0|w))break V;if(D=a>>>29,a<<=1,!(D=q[16+(C=(4&D)+o|0)>>2]))break}q[C+16>>2]=A}else q[1924]=D|V,q[o>>2]=A;q[A+24>>2]=o,q[A+12>>2]=A,q[A+8>>2]=A;break S}a=q[o+8>>2],q[a+12>>2]=A,q[o+8>>2]=A,q[A+24>>2]=0,q[A+12>>2]=o,q[A+8>>2]=a}a=B+8|0;break a}X:if(W){a=q[o+28>>2];Y:{if(q[(w=7996+(a<<2)|0)>>2]==(0|o)){if(q[w>>2]=B)break Y;Z=7696,_=jc(a)&X,q[Z>>2]=_;break X}if(!(q[W+(q[W+16>>2]==(0|o)?16:20)>>2]=B))break X}q[B+24>>2]=W,(a=q[o+16>>2])&&(q[B+16>>2]=a,q[a+24>>2]=B),(a=q[o+20>>2])&&(q[B+20>>2]=a,q[a+24>>2]=B)}A>>>0<=15?(a=A+D|0,q[o+4>>2]=3|a,q[4+(a=a+o|0)>>2]=1|q[a+4>>2]):(q[o+4>>2]=3|D,q[4+(D=o+D|0)>>2]=1|A,q[A+D>>2]=A,V&&(a=7732+((w=V>>>3)<<3)|0,B=q[1928],w=(w=1<<w)&C?q[a+8>>2]:(q[1923]=w|C,a),q[a+8>>2]=B,q[w+12>>2]=B,q[B+12>>2]=a,q[B+8>>2]=w),q[1928]=D,q[1925]=A),a=o+8|0}return L=16+Y|0,a}function ka(a){var q=0,t=x(0),L=0,$=0,aa=x(0),ba=x(0);j(a);a:{if(1283457024<=(q=2147483647&($=e(0)))>>>0){if(2139095040<q>>>0)break a;return x((0|$)<0?-1.570796251296997:1.570796251296997)}b:{if(q>>>0<=1054867455){if(L=-1,964689920<=q>>>0)break b;break a}if(a=x(y(a)),q>>>0<=1066926079){if(q>>>0<=1060110335){a=x(x(x(a+a)+x(-1))/x(a+x(2))),L=0;break b}a=x(x(a+x(-1))/x(a+x(1))),L=1}else L=q>>>0<=1075576831?(a=x(x(a+x(-1.5))/x(x(a*x(1.5))+x(1))),2):(a=x(x(-1)/a),3)}if(q=L,aa=x(a*a),t=x(aa*aa),ba=x(t*x(x(t*x(-.106480173766613))+x(-.19999158382415771))),t=x(aa*x(x(t*x(x(t*x(.06168760731816292))+x(.14253635704517365)))+x(.333333283662796))),(0|q)<=-1)return x(a-x(a*x(ba+t)));a=x(u[6080+(q<<=2)>>2]-x(x(x(a*x(ba+t))-u[q+6096>>2])-a)),a=(0|$)<0?x(-a):a}return a}function la(a,ca){var fa,da=0,ea=0,ga=0,ha=0,ia=0;L=fa=L-16|0,j(a);a:if((da=2147483647&(ga=e(0)))>>>0<=1305022426){if(ea=.6366197723675814*(ha=+a)+6755399441055744-6755399441055744,v[ca>>3]=ha+-1.5707963109016418*ea+-1.5893254773528196e-8*ea,y(ea)<2147483648){da=~~ea;break a}da=-2147483648}else 2139095040<=da>>>0?(v[ca>>3]=x(a-a),da=0):(da=((ia=da)>>>23)-150|0,v[8+fa>>3]=(f(0,ia-(da<<23)|0),k()),da=Da(8+fa|0,fa,da),ea=v[fa>>3],(0|ga)<=-1?(v[ca>>3]=-ea,da=0-da|0):v[ca>>3]=ea);return L=16+fa|0,da}function ma(a){var ca=0,ja=0,ka=0,la=0,ma=0;ka=4,ja=1082;a:if(ca=r[0|a]){for(;!((0|(la=r[0|ja]))!=(0|ca)||!(ka=ka+-1|0)|!la);)if(ja=ja+1|0,ca=r[a+1|0],a=a+1|0,!ca)break a;ma=ca}return(255&ma)-r[0|ja]|0}function oa(a,na){return a?function(a,Ub){a:{if(a){if(Ub>>>0<=127)break a;if(q[q[1625]>>2]){if(Ub>>>0<=2047)return o[a+1|0]=63&Ub|128,o[0|a]=Ub>>>6|192,2;if(!(57344!=(-8192&Ub)&&55296<=Ub>>>0))return o[a+2|0]=63&Ub|128,o[0|a]=Ub>>>12|224,o[a+1|0]=Ub>>>6&63|128,3;if(Ub+-65536>>>0<=1048575)return o[a+3|0]=63&Ub|128,o[0|a]=Ub>>>18|240,o[a+2|0]=Ub>>>6&63|128,o[a+1|0]=Ub>>>12&63|128,4}else if(57216==(-128&Ub))break a;q[1906]=25,a=-1}else a=1;return a}return o[0|a]=Ub,1}(a,na):0}function pa(a,na,oa,sa){a:{if(!(20<na>>>0||9<(na=na+-9|0)>>>0)){switch(na-1|0){default:return na=q[oa>>2],q[oa>>2]=na+4,void(q[a>>2]=q[na>>2]);case 0:return na=q[oa>>2],q[oa>>2]=na+4,na=q[na>>2],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 1:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=q[na>>2],void(q[a+4>>2]=0);case 3:return na=q[oa>>2],q[oa>>2]=na+4,na=p[na>>1],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 4:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=s[na>>1],void(q[a+4>>2]=0);case 5:return na=q[oa>>2],q[oa>>2]=na+4,na=o[0|na],q[a>>2]=na,void(q[a+4>>2]=na>>31);case 6:return na=q[oa>>2],q[oa>>2]=na+4,q[a>>2]=r[0|na],void(q[a+4>>2]=0);case 2:case 7:break a;case 8:}n[sa](a,oa)}return}na=q[oa>>2]+7&-8,q[oa>>2]=na+8,oa=q[na+4>>2],q[a>>2]=q[na>>2],q[a+4>>2]=oa}function qa(a){var na=0,oa=0,sa=0;if(ga(o[q[a>>2]]))for(;na=q[a>>2],sa=o[0|na],q[a>>2]=na+1,oa=(w(oa,10)+sa|0)-48|0,ga(o[na+1|0]););return oa}function ra(a,ta,ua,va,wa){var xa,ya=0,za=0;q[204+(L=xa=L-208|0)>>2]=ua,ba(160+xa|(ua=0),0,40),q[200+xa>>2]=q[204+xa>>2],(0|ia(0,ta,200+xa|0,80+xa|0,160+xa|0,va,wa))<0||(ua=0<=q[a+76>>2]?1:ua,ya=q[a>>2],o[a+74|0]<=0&&(q[a>>2]=-33&ya),za=32&ya,q[a+48>>2]?ia(a,ta,200+xa|0,80+xa|0,160+xa|0,va,wa):(q[a+48>>2]=80,q[a+16>>2]=80+xa,q[a+28>>2]=xa,q[a+20>>2]=xa,ya=q[a+44>>2],ia(a,ta,200+(q[a+44>>2]=xa)|0,80+xa|0,160+xa|0,va,wa),ya&&(n[q[a+36>>2]](a,0,0),q[a+48>>2]=0,q[a+44>>2]=ya,q[a+28>>2]=0,q[a+16>>2]=0,q[a+20>>2]=0)),q[a>>2]=q[a>>2]|za),L=208+xa|0}function sa(a,ta,ua){var va,wa=0;fa(8+(L=va=L-160|0)|0,2536,144),q[52+va>>2]=a,wa=(wa=-2-(q[28+va>>2]=a)|0)>>>0<256?wa:256,a=a+(q[56+va>>2]=wa)|0,q[36+va>>2]=a,q[24+va>>2]=a,ra(8+va|0,ta,ua,15,16),wa&&(a=q[28+va>>2],o[a-((0|a)==q[24+va>>2])|0]=0),L=160+va|0}function ta(a){var ta=0,ua=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=x(0),Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0,Ma=0,Na=x(0),Oa=0,Pa=x(0),Qa=0,Ra=0,Sa=x(0),Ta=x(0),Ua=x(0),Va=0,Wa=0,Xa=0,Ya=0,Za=0,_a=0,$a=0;if(q[a+256>>2]&&(ta=q[a+200>>2]<<2,fa(q[a+280>>2],q[a+264>>2],ta),fa(q[a+284>>2],q[a+268>>2],ta),fa(q[a+288>>2],q[a+276>>2],ta)),!((0|(Ca=q[a+292>>2]))<1)){for(Ga=(Ea=q[a+296>>2])+w(Ca,40)|0,Aa=q[a+300>>2],ta=Ea;Ua=u[Aa>>2],(Pa=u[ta+32>>2])==(Fa=(ua=q[ta+12>>2])?(Sa=u[ta>>2],Fa=x(Ua-Sa),Ua=u[ta+8>>2],Na=x(Fa/Ua),Fa=x(C(Na)),Ba=x(y(Fa))<x(2147483648)?~~Fa:-2147483648,x(Sa+x(Ua*x(Na-x(0|Ba))))):(Na=u[ta>>2],Fa=u[ta+4>>2],Ua<Na?Na:Fa<Ua?Fa:Ua))?q[ta+36>>2]=0:(u[ta+32>>2]=Fa,q[ta+36>>2]=1),ua||(u[Aa>>2]=Fa),Aa=Aa+4|0,(ta=ta+40|0)>>>0<Ga>>>0;);if(!((0|Ca)<1))for(Oa=q[a+308>>2],Ma=q[a+376>>2];;){e:if(!((0|(ua=q[Ea+28>>2]))<1))if(Ha=(ta=Oa+w(q[Ea+24>>2],28)|0)+w(ua,28)|0,Ua=u[Ea+20>>2],Ta=u[Ea+16>>2],Pa=u[Ea+32>>2],Ma)for(;;){Sa=x(Ca=0);l:{m:{n:{if((0|(Da=q[ta>>2]))<1)Aa=Ba=0;else if(ua=q[ta+4>>2],Na=u[ua>>2],Fa=x(Na-Ta),1!=(0|Da)){if(Pa<Fa){Ba=1,Aa=0;break m}if(Ba=0,Pa<x(Ta+Na))Aa=0;else{if(Aa=1,Fa=u[ua+4>>2],!(Pa<x(Ta+Fa)))for(;;){if((0|Da)==(0|(Aa=Aa+1|0)))break n;if(Na=Fa,Fa=u[ua+(Aa<<2)>>2],Pa<x(Ta+Fa))break}x(Fa-Ta)<Pa||(Aa=Aa+-1|0,(Fa=x(Fa-Na))<Ua||(Sa=x(x(Pa-Na)/Fa)))}}else Ba=Pa<x(Ta+Na)^1|Fa<Pa^1,Aa=0;if(Ba)break m;if(La=Da=1,!q[ta+16>>2])break m;break l}Aa=Da+-1|0,Ba=1}La=(Da=(Fa=u[ta+12>>2])!=Sa)&(Sa==x(0)|Fa==x(0))|q[ta+8>>2]!=(0|Aa),Ca=Ba}if(q[ta+20>>2]=La,q[ta+24>>2]=Da,u[ta+12>>2]=Sa,q[ta+16>>2]=Ca,q[ta+8>>2]=Aa,!((ta=ta+28|0)>>>0<Ha>>>0))break}else{if(!q[Ea+36>>2])for(;;)if(q[ta+20>>2]=0,!((ta=ta+28|(q[ta+24>>2]=0))>>>0<Ha>>>0))break e;for(;;){Sa=x(Ca=0);f:{g:{h:{i:if(!(((Ba=0)|(Aa=q[(ua=ta)>>2]))<1)){if(Ja=q[ta+4>>2],Na=u[Ja>>2],Fa=x(Na-Ta),1!=(0|Aa)){if(!(Pa<Fa)){if(Ba=0,Pa<x(Ta+Na))break i;Da=1;j:if(Fa=u[Ja+4>>2],!(Pa<x(Ta+Fa))){for(Aa=Aa+-1|0;Na=Fa,(0|Aa)!=(0|Da);)if(Fa=u[Ja+((Da=Da+1|0)<<2)>>2],Pa<x(Ta+Fa))break j;Ba=1;break g}if(Ba=0,x(Fa-Ta)<Pa){Aa=Da;break h}if(Aa=Da+-1|0,(Fa=x(Fa-Na))<Ua)break h;Sa=x(x(Pa-Na)/Fa);break h}Ba=1,Aa=0;break g}Ba=Pa<x(Ta+Na)^1|Fa<Pa^1}Aa=0}if(!Ba&&(Ja=Da=1,q[ta+16>>2]))break f}Ca=Ba,Ja=(Da=(Fa=u[ta+12>>2])!=Sa)&(Sa==x(0)|Fa==x(0))|q[ta+8>>2]!=(0|Aa)}if(q[ua+20>>2]=Ja,q[ta+24>>2]=Da,u[ta+12>>2]=Sa,q[ta+16>>2]=Ca,q[ta+8>>2]=Aa,!((ta=ta+28|0)>>>0<Ha>>>0))break}}if(!((Ea=Ea+40|0)>>>0<Ga>>>0))break}}if(1<=(0|(ta=q[a+312>>2])))for(Ja=(Ia=q[a+316>>2])+w(ta,36)|0,Ga=q[a+376>>2];;){Za=(ua=q[Ia+12>>2])+((Ea=q[Ia>>2])<<2)|0,Qa=q[a+308>>2],ta=ua;p:{if(!(Ea=((Da=Ba=Ca=0)|Ea)<1))for(;;){if(Aa=Qa+w(q[ta>>2],28)|0,q[Aa+16>>2]){La=1,Ra=Ya=0;break p}if(Ca=Ca||q[Aa+24>>2],Da=Da||q[Aa+20>>2],Ba=(u[Aa+12>>2]!=x(0))+Ba|0,!((ta=ta+4|0)>>>0<Za>>>0))break}if(La=0,(Ra=Ga?1:Da)|(Ya=Ga?1:Ca)&&(Xa=1<<Ba,q[Ia+8>>2]=Xa,31!=(0|Ba))){for(Ca=q[Ia+20>>2],Aa=(ta=q[Ia+16>>2])+(Da=Xa<<2)|0,Va=ba(Ka=ta,0,4+((Ha=-1^ta)+((ta=ta+4|0)>>>0<Aa>>>0?Aa:ta)|0)&-4),Da=Ca+Da|0,ta=Ca;q[ta>>2]=1065353216,(ta=ta+4|0)>>>0<Da>>>0;);if(!Ea)if(Da=Ea=1,Ba)for(;;){if(Ka=Qa+w(q[ua>>2],28)|0,Ba=q[Ka+8>>2],Ha=w(Ba,Ea),ta=0,(Fa=u[Ka+12>>2])==x(0))for(;q[(Ba=Va+(ta<<2)|0)>>2]=Ha+q[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););else{for(q[Va>>2]=Ha+q[Va>>2],u[Ca>>2]=x(x(1)-Fa)*u[Ca>>2],Oa=w(Ba+(ta=1)|0,Ea);Fa=u[Ka+12>>2],Aa=ta&Da,q[(Ba=(Ma=ta<<2)+Va|0)>>2]=q[Ba>>2]+(Aa?Oa:Ha),u[(Ba=Ca+Ma|0)>>2]=(Aa?Fa:x(x(1)-Fa))*u[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););Da<<=1}if(Ea=w(q[Ka>>2],Ea),!((ua=ua+4|0)>>>0<Za>>>0))break}else for(;;){if(Aa=Qa+w(q[ua>>2],28)|0,Da=w(q[Aa+8>>2],Ea),ta=0,(Fa=u[Aa+12>>2])==x(0))for(;q[(Ba=Va+(ta<<2)|0)>>2]=Da+q[Ba>>2],(0|Xa)!=(0|(ta=ta+1|0)););else q[Va>>2]=Da+q[Va>>2],u[Ca>>2]=x(x(1)-Fa)*u[Ca>>2];if(Ea=w(q[Aa>>2],Ea),!((ua=ua+4|0)>>>0<Za>>>0))break}}}if(q[Ia+32>>2]=La,q[Ia+24>>2]=Ra,q[Ia+28>>2]=Ya,!((Ia=Ia+36|0)>>>0<Ja>>>0))break}if(!((0|(Ba=q[a+4>>2]))<=0)){for(ua=(ta=q[a+52>>2])+(Ba<<2)|0;Fa=u[ta>>2],u[ta>>2]=Fa<x(0)?x(0):x(A(Fa,x(1))),(ta=ta+4|0)>>>0<ua>>>0;);if(!((0|Ba)<1)){for(Ea=(ta=q[a+8>>2])+(Ba<<3)|0,Ha=q[a+316>>2],Ca=q[a+40>>2],Aa=Da=q[a+36>>2];Ba=0,q[ta+4>>2]&&(ua=q[ta>>2],!q[Da+(ua<<2)>>2]&&-1!=(0|ua)||(Ba=!q[32+(Ha+w(q[Ca>>2],36)|0)>>2])),q[Aa>>2]=Ba,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+8|0)>>>0<Ea>>>0;);if(!((0|(Ga=q[a+4>>2]))<1))for(Ja=q[a>>2],Oa=q[Ja+724>>2],ua=q[a+40>>2],Da=Ea=0;;){if(Ka=Ha+w(q[ua>>2],36)|0,(q[Ka+28>>2]||q[Ka+24>>2])&&(q[(Ca=Ea<<2)+q[a+16>>2]>>2]=q[Ka+8>>2],q[Ka+24>>2]&&!((0|(Ba=q[Ka+8>>2]))<1)))for(Ma=(ta=q[Ka+16>>2])+(Ba<<2)|0,Ca=q[Ca+Oa>>2],Aa=q[a+28>>2]+(Da<<2)|0,Ba=q[Ja+936>>2];q[Aa>>2]=q[Ba+(Ca+q[ta>>2]<<2)>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ma>>>0;);if(q[Ka+28>>2]&&!((0|(Ba=q[Ka+8>>2]))<1))for(Ba=(ta=q[Ka+20>>2])+(Ba<<2)|0,Aa=q[a+20>>2]+(Da<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(ua=ua+4|0,Da=q[Ka+4>>2]+Da|0,(0|Ga)==(0|(Ea=Ea+1|0)))break}}}if(n[q[1644]](a),_a=q[a+316>>2],1<=(0|(ua=q[a+56>>2]))){for(Ga=(ta=q[a+60>>2])+(ua<<5)|0,Ja=q[a+176>>2],Oa=q[a+172>>2],Ma=q[a+36>>2],Ba=q[a+180>>2],Ca=Aa=q[a+168>>2];;){Da=Ca,ua=0,q[ta+28>>2]&&(-1!=(0|(Ea=q[ta>>2]))&&(ua=0,!q[Ma+(Ea<<2)>>2])||-1!=(0|(Ea=q[ta+4>>2]))&&(ua=0,!q[Aa+(Ea<<2)>>2])||(ua=!q[32+(w(q[Ba>>2],36)+_a|0)>>2])),q[Da>>2]=ua;x:if((Da=q[ta+8>>2])>>>0<=1){if(Da-1){q[Oa+(q[ta+12>>2]<<2)>>2]=ua;break x}q[Ja+(q[ta+12>>2]<<2)>>2]=ua}else Y(4,1473,0);if(Ba=Ba+4|0,Ca=Ca+4|0,!((ta=ta+32|0)>>>0<Ga>>>0))break}_a=q[a+316>>2]}if(Ea=q[a>>2],1<=(0|(Ga=q[a- -64>>2]))){for(Ja=q[Ea+988>>2],Oa=q[Ea+784>>2],La=q[a+184>>2],Ia=ua=0;;){if(Ha=w(q[La>>2],36)+_a|0,(q[Ha+28>>2]||q[Ha+24>>2])&&(q[(Ca=ua<<2)+q[a+84>>2]>>2]=q[Ha+8>>2],q[Ha+24>>2]&&!((0|(Ba=q[Ha+8>>2]))<1)))for(Ma=(ta=q[Ha+16>>2])+(Ba<<2)|0,Da=q[Ca+Oa>>2],Aa=(Ba=Ia<<2)+q[a+100>>2]|0,Ca=Ba+q[a+96>>2]|0;Ba=Da+q[ta>>2]<<2,q[Aa>>2]=Ja+(q[Ba+q[Ea+944>>2]>>2]<<2),q[Ca>>2]=q[Ba+q[Ea+940>>2]>>2],Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ma>>>0;);if(q[Ha+28>>2]&&!((0|(Ba=q[Ha+8>>2]))<1))for(Ba=(ta=q[Ha+20>>2])+(Ba<<2)|0,Aa=q[a+88>>2]+(Ia<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(La=La+4|0,Ia=q[Ha+4>>2]+Ia|0,(0|Ga)==(0|(ua=ua+1|0)))break}_a=q[a+316>>2],Ea=q[a>>2]}if(1<=(0|(Xa=q[a+72>>2])))for(Za=q[a+76>>2],Qa=q[Ea+808>>2],Ya=q[a+188>>2],Ra=Ia=0;;){if(Wa=w(q[Ya>>2],36)+_a|0,(q[Wa+28>>2]||q[Wa+24>>2])&&(q[(ua=Ia<<2)+q[a+116>>2]>>2]=q[Wa+8>>2],q[Wa+24>>2])){if(ta=q[Wa+16>>2],Va=q[ua+Qa>>2],1<=(0|(ua=q[Wa+8>>2])))for(Ka=ta+(ua<<2)|0,Aa=(ua=Ra<<2)+q[a+132>>2]|0,Ca=ua+q[a+136>>2]|0,Ba=ua+q[a+140>>2]|0,Da=ua+q[a+144>>2]|0,La=ua+q[a+128>>2]|0,Ha=q[Ea+948>>2],Ga=q[Ea+964>>2],Ja=q[Ea+960>>2],Oa=q[Ea+956>>2],Ma=q[Ea+952>>2],ua=ta;$a=Va+q[ua>>2]<<2,q[Aa>>2]=q[$a+Ma>>2],q[Ca>>2]=q[Oa+$a>>2],q[Ba>>2]=q[Ja+$a>>2],q[Da>>2]=q[Ga+$a>>2],q[La>>2]=q[Ha+$a>>2],La=La+4|0,Da=Da+4|0,Ba=Ba+4|0,Ca=Ca+4|0,Aa=Aa+4|0,(ua=ua+4|0)>>>0<Ka>>>0;);ua=Za+(Ia<<5)|0,ta=Va+q[ta>>2]<<2,q[ua+24>>2]=q[ta+q[Ea+968>>2]>>2],q[ua+28>>2]=q[ta+q[Ea+972>>2]>>2]}if(q[Wa+28>>2]&&!((0|(ua=q[Wa+8>>2]))<1))for(ua=(ta=q[Wa+20>>2])+(ua<<2)|0,Aa=q[a+120>>2]+(Ra<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<ua>>>0;);if(Ya=Ya+4|0,Ra=q[Wa+4>>2]+Ra|0,(0|Xa)==(0|(Ia=Ia+1|0)))break}if(n[q[1642]](a),n[q[1645]](a),!((0|(ua=q[a+200>>2]))<1)){for(Ma=(ta=q[a+204>>2])+(ua<<4)|0,Ea=q[a+168>>2],Da=q[a+36>>2],Ha=q[a+316>>2],Ca=q[a+252>>2],Aa=q[a+248>>2];Ba=0,q[ta+8>>2]&&(ua=q[ta>>2],!q[Da+(ua<<2)>>2]&&-1!=(0|ua)||(ua=q[ta+4>>2],!q[Ea+(ua<<2)>>2]&&-1!=(0|ua)||(Ba=!q[32+(Ha+w(q[Ca>>2],36)|0)>>2]))),q[Aa>>2]=Ba,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+16|0)>>>0<Ma>>>0;);if(!((0|(Ja=q[a+200>>2]))<1))for(Ka=q[a>>2],Oa=q[Ka+988>>2],Ma=q[Ka+844>>2],ua=q[a+252>>2],La=Ia=0;;){if(Qa=Ha+w(q[ua>>2],36)|0,(q[Qa+28>>2]||q[Qa+24>>2])&&(q[(Ca=Ia<<2)+q[a+212>>2]>>2]=q[Qa+8>>2],q[Qa+24>>2]&&!((0|(Ba=q[Qa+8>>2]))<1)))for(Ea=(ta=q[Qa+16>>2])+(Ba<<2)|0,Da=q[Ca+Ma>>2],Aa=(Ba=La<<2)+q[a+232>>2]|0,Ca=Ba+q[a+224>>2]|0,Ba=Ba+q[a+228>>2]|0;Ga=Da+q[ta>>2]<<2,q[Aa>>2]=Oa+(q[Ga+q[Ka+984>>2]>>2]<<2),q[Ca>>2]=q[Ga+q[Ka+976>>2]>>2],q[Ba>>2]=q[Ga+q[Ka+980>>2]>>2],Ba=Ba+4|0,Ca=Ca+4|0,Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ea>>>0;);if(q[Qa+28>>2]&&!((0|(Ba=q[Qa+8>>2]))<1))for(Ba=(ta=q[Qa+20>>2])+(Ba<<2)|0,Aa=q[a+216>>2]+(La<<2)|0;q[Aa>>2]=q[ta>>2],Aa=Aa+4|0,(ta=ta+4|0)>>>0<Ba>>>0;);if(ua=ua+4|0,La=q[Qa+4>>2]+La|0,(0|Ja)==(0|(Ia=Ia+1|0)))break}}if(n[q[1643]](a),function(a){var ke,de=0,ee=0,fe=0,ge=0,he=0,ie=0,je=0,le=0,me=0,ne=0,oe=0,pe=0;if(1<=(0|(ke=q[a+340>>2])))for(me=q[a+316>>2],le=q[a>>2],ne=q[le+1072>>2],he=q[a+372>>2];;){if(fe=w(q[he>>2],36)+me|0,(q[fe+28>>2]||q[fe+24>>2])&&(q[(de=ie<<2)+q[a+352>>2]>>2]=q[fe+8>>2],q[fe+24>>2]&&!((0|(ge=q[fe+8>>2]))<1)))for(ge=(ee=q[fe+16>>2])+(ge<<2)|0,oe=q[de+ne>>2],de=q[a+364>>2]+(je<<2)|0,pe=q[le+1104>>2];q[de>>2]=q[(q[ee>>2]+oe<<2)+pe>>2],de=de+4|0,(ee=ee+4|0)>>>0<ge>>>0;);if(q[fe+28>>2]&&!((0|(de=q[fe+8>>2]))<1))for(ge=(ee=q[fe+20>>2])+(de<<2)|0,de=q[a+356>>2]+(je<<2)|0;q[de>>2]=q[ee>>2],de=de+4|0,(ee=ee+4|0)>>>0<ge>>>0;);if(he=he+4|0,je=q[fe+4>>2]+je|0,(0|ke)==(0|(ie=ie+1|0)))break}}(a),n[q[1646]](a),ua=q[a+48>>2],1<=(0|(ta=q[a+4>>2])))for(Ea=(Ca=q[a+8>>2])+(ta<<3)|0,Ba=q[a+52>>2],Aa=q[a+36>>2],ta=ua;q[Aa>>2]&&(Fa=u[Ba>>2],u[ta>>2]=Fa,-1!=(0|(Da=q[Ca>>2]))&&(u[ta>>2]=Fa*u[(Da<<2)+ua>>2])),ta=ta+4|0,Ba=Ba+4|0,Aa=Aa+4|0,(Ca=Ca+8|0)>>>0<Ea>>>0;);if(1<=(0|(Ba=q[a+56>>2]))){for(ua=a+56|0,ta=q[a+60>>2],Aa=q[a+168>>2],Ca=0;q[Aa>>2]&&n[q[ta+16>>2]](ta,Ca,ua),Aa=Aa+4|0,ta=ta+32|0,(0|Ba)!=(0|(Ca=Ca+1|0)););ua=q[a+48>>2]}if(1<=(0|(Ba=q[a+200>>2])))for(Ja=(ta=q[a+204>>2])+(Ba<<4)|0,Oa=q[a+192>>2],Ma=q[a+60>>2],Ca=q[a+248>>2],Aa=q[a+276>>2],Ba=q[a+272>>2];q[Ca>>2]&&(-1!=(0|(Da=q[ta>>2]))&&(u[Aa>>2]=u[(Da<<2)+ua>>2]*u[Aa>>2]),-1!=(0|(Da=q[ta+4>>2]))&&(u[Aa>>2]=u[Oa+(Da<<2)>>2]*u[Aa>>2],Ea=Ma+(Da<<5)|0,Da=q[Ba>>2],n[q[Ea+20>>2]](q[Ea+24>>2],Da,Da,q[ta+12>>2]))),Ba=Ba+4|0,Aa=Aa+4|0,Ca=Ca+4|0,(ta=ta+16|0)>>>0<Ja>>>0;);if(function(a){var Bd=0,Cd=0,Dd=0,Ed=0,Fd=x(0),Gd=x(0),Hd=x(0),Id=x(0),Jd=x(0),Kd=0,Ld=0,Md=0,Nd=0,Od=0,Pd=x(0),Qd=0,Rd=0,Sd=x(0),Td=0;if(1<=(0|(Dd=q[a+340>>2])))for(Td=(Bd=q[a+344>>2])+w(Dd,24)|0,Dd=q[a+272>>2];;){if((a=0)<(0|(Kd=q[Bd+8>>2])))for(Ld=q[Dd+(q[Bd+4>>2]<<2)>>2],Md=q[Dd+(q[Bd>>2]<<2)>>2],Fd=u[Bd+20>>2],Nd=q[Bd+16>>2],Od=q[Bd+12>>2];Pd=u[((Cd=1|a)<<2)+Od>>2],Ed=s[(a<<1)+Nd>>1]<<3&262136,Gd=u[(Qd=(4|Ed)+Md|0)>>2],Cd=s[(Cd<<1)+Nd>>1]<<3&262136,Hd=u[(Rd=(4|Cd)+Ld|0)>>2],Id=u[(Ed=Ed+Md|0)>>2],Sd=u[(a<<2)+Od>>2],Jd=u[(Cd=Cd+Ld|0)>>2],u[Ed>>2]=Id+x(Fd*x(Sd*x(Jd-Id))),u[Qd>>2]=Gd+x(Fd*x(Sd*x(Hd-Gd))),u[Cd>>2]=Jd+x(Fd*x(Pd*x(Id-Jd))),u[Rd>>2]=Hd+x(Fd*x(Pd*x(Gd-Hd))),(0|(a=a+2|0))<(0|Kd););if(!((Bd=Bd+24|0)>>>0<Td>>>0))break}}(a),n[q[1647]](a),La=q[a+248>>2],Ia=q[a+268>>2],1<=(0|(Ha=q[a+320>>2]))){for(Ja=(Ba=q[a+324>>2])+w(Ha,28)|0,Oa=q[a+44>>2],Ma=q[a+36>>2],ua=Ba;;){if(1<=(0|(Aa=q[ua+4>>2])))for(Ea=ua+20|0,Da=q[ua+12>>2],ta=0;Ga=q[4+(Ca=Da+(ta<<4)|0)>>2]<<2,Ca=1==q[(Ka=Ca)>>2],q[Ka+12>>2]=q[(q[Ga+(Ca?Ma:La)>>2]?Ga+(Ca?Oa:Ia)|0:Ea)>>2],(0|Aa)!=(0|(ta=ta+1|0)););if(!((ua=ua+28|0)>>>0<Ja>>>0))break}for(Oa=q[a+264>>2],Ra=0;;){if(Ga=Ba+w(Ra,28)|0,!(q[(Ja=Ga)+24>>2]<1)){for(Ca=q[a+328>>2],ta=0;q[Ca+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<(0|(ua=q[Ja+24>>2])););if(!((0|ua)<1))for(ua=q[a+336>>2],ta=0;q[ua+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<q[Ja+24>>2];);}if(!(q[Ga+4>>2]<1)){for(Ma=q[a+332>>2],ta=0;q[Ma+(ta<<2)>>2]=-1,(0|(ta=ta+1|0))<(0|(ua=q[Ga+4>>2])););if(!((0|ua)<1))for(Aa=q[Ga+12>>2],Ea=q[a+336>>2],ta=0;Da=q[12+(Aa+(ta<<4)|0)>>2]-q[Ga+20>>2]<<2,ua=-1!=(0|(ua=q[(Ca=Da+Ea|0)>>2]))?Ma+(ua<<2)|0:Da+q[a+328>>2]|0,q[ua>>2]=ta,(0|(ta=(q[Ca>>2]=ta)+1|0))<q[Ga+4>>2];);}if(1<=(0|(Ca=q[Ja+24>>2])))for(Aa=q[Ga+8>>2],Ma=q[a+328>>2],Ea=0;;){if(-1!=(0|(ta=q[Ma+(Ea<<2)>>2]))){for(Da=q[a+332>>2],Ca=q[Ga+12>>2];Aa=(ua=1!=q[(ua=Ca+(ta<<4)|0)>>2]?(q[Oa+(q[ua+4>>2]<<2)>>2]=Aa,1):(ua=Ba+w(q[ua+8>>2],28)|0,q[ua+8>>2]=Aa,q[ua>>2]))+Aa|0,(0|ta)<(0|(ua=q[Da+(ta<<2)>>2]))&&-1!=(0|(ta=ua)););Ca=q[Ja+24>>2]}if(!((0|(Ea=Ea+1|0))<(0|Ca)))break}if((0|Ha)==(0|(Ra=Ra+1|0)))break}}Da=q[a+200>>2];M:{if(q[a+376>>2]){if(ta=0,((q[a+256>>2]=0)|Da)<1)break M;for(;;){if(Aa=62,Ca=q[a+260>>2]+ta|0,!q[(ua=ta<<2)+La>>2]|u[ua+q[a+276>>2]>>2]==x(0)||(Aa=63),o[0|Ca]=Aa,(0|Da)==(0|(ta=ta+1|0)))break M;La=q[a+248>>2]}}if(!q[a+256>>2]){if((0|Da)<1)break M;for(ta=0;;){if(!q[(ua=ta<<2)+La>>2]|u[ua+q[a+276>>2]>>2]==x(0)?(ua=q[a+260>>2]+ta|0,o[0|ua]=254&r[0|ua]):(ua=q[a+260>>2]+ta|0,o[0|ua]=1|r[0|ua]),(0|Da)==(0|(ta=ta+1|0)))break M;La=q[a+248>>2]}}if(!(((q[a+256>>2]=0)|Da)<1))for(Aa=0;;){if(Fa=u[(Ca=Aa<<2)+q[a+276>>2]>>2],Ba=q[Ca+La>>2],ta=Fa!=x(0)&0!=(0|Ba),ua=q[a+260>>2]+Aa|0,ta=(0|ta)==(1&o[0|ua])?ta:2|ta,ta=Fa!=u[Ca+q[a+288>>2]>>2]?4|ta:ta,ta=q[Ca+Ia>>2]==q[Ca+q[a+284>>2]>>2]?ta:8|ta,ta=q[Ca+q[a+264>>2]>>2]==q[Ca+q[a+280>>2]>>2]?ta:16|ta,o[0|ua]=Ba?32|ta:ta,(0|Da)==(0|(Aa=Aa+1|0)))break M;Ia=q[a+268>>2],La=q[a+248>>2]}}q[a+376>>2]=0}function ua(a,ab,bb){var cb=0,db=0,eb=0,fb=0,gb=0,hb=0,ib=0,jb=0,kb=0,lb=0,mb=0;if(q[ab>>2]=384,db=q[a>>2],1<=(0|(fb=q[db>>2]))){for(hb=q[a+16>>2],ib=q[a+296>>2];eb=(1<<q[ib+(q[hb+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+4>>2]=fb<<3,q[ab+8>>2]=q[db>>2]<<2,q[ab+12>>2]=q[db>>2]<<2,q[ab+16>>2]=q[db>>2]<<2,q[ab+20>>2]=q[db>>2]<<2,q[ab+24>>2]=q[db>>2]<<2,eb=q[db>>2],q[ab+40>>2]=cb,q[ab+36>>2]=cb,q[ab+32>>2]=cb,q[ab+28>>2]=eb<<2,1<=((eb=cb=0)|(ib=q[db+8>>2]))){for(kb=q[a+296>>2],lb=q[a+88>>2],jb=q[a+76>>2],fb=0;cb=(0|cb)<(0|(hb=q[(mb=eb<<2)+lb>>2]))?hb:cb,gb=(15+(hb<<3)&-16)+gb|0,fb=(1<<q[kb+(q[jb+mb>>2]<<2)>>2])+fb|0,(0|ib)!=(0|(eb=eb+1|0)););eb=cb<<3,cb=fb<<2}if(q[ab+44>>2]=q[db+4>>2]<<5,q[ab+48>>2]=w(q[db+8>>2],24),q[ab+52>>2]=q[db+12>>2]<<5,q[ab+56>>2]=q[db+4>>2]<<2,q[ab+60>>2]=q[db+8>>2]<<2,q[ab+64>>2]=q[db+12>>2]<<2,q[ab+68>>2]=q[db+4>>2]<<2,fb=q[db+4>>2],q[ab+76>>2]=gb,q[ab+72>>2]=fb<<2,q[ab+80>>2]=q[db+8>>2]<<2,fb=q[db+8>>2],q[ab+104>>2]=eb,q[ab+100>>2]=cb,q[ab+96>>2]=cb,q[ab+92>>2]=cb,q[ab+88>>2]=cb,q[ab+84>>2]=fb<<2,1<=((cb=gb=0)|(fb=q[db+12>>2]))){for(hb=q[a+296>>2],ib=q[a+100>>2],eb=0;eb=(1<<q[hb+(q[ib+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+108>>2]=fb<<2,eb=q[db+12>>2],q[ab+156>>2]=cb,q[ab+152>>2]=cb,q[ab+148>>2]=cb,q[ab+144>>2]=cb,q[ab+140>>2]=cb,q[ab+136>>2]=cb,q[ab+132>>2]=cb,q[ab+128>>2]=cb,q[ab+124>>2]=cb,q[ab+120>>2]=cb,q[ab+116>>2]=cb,q[ab+112>>2]=eb<<2,1<=((eb=cb=0)|(hb=q[db+16>>2]))){for(kb=q[a+136>>2],lb=q[a+296>>2],jb=q[a+172>>2],fb=0;cb=(0|cb)<(0|(ib=q[(mb=eb<<2)+jb>>2]))?ib:cb,gb=(15+(ib<<3)&-16)+gb|0,fb=(1<<q[lb+(q[kb+mb>>2]<<2)>>2])+fb|0,(0|hb)!=(0|(eb=eb+1|0)););eb=cb<<3,cb=fb<<2}if(q[ab+160>>2]=hb<<4,q[ab+164>>2]=q[db+16>>2]<<2,q[ab+168>>2]=q[db+16>>2],q[ab+172>>2]=q[db+16>>2]<<2,q[ab+176>>2]=q[db+16>>2]<<2,fb=q[db+16>>2],q[ab+184>>2]=gb,q[ab+180>>2]=fb<<2,q[ab+188>>2]=q[db+16>>2]<<2,q[ab+192>>2]=q[db+16>>2]<<2,q[ab+196>>2]=q[db+16>>2]<<2,q[ab+200>>2]=q[db+16>>2]<<2,q[ab+204>>2]=q[db+16>>2]<<2,fb=q[db+16>>2],q[ab+236>>2]=eb,q[ab+232>>2]=cb,q[ab+228>>2]=cb,q[ab+224>>2]=cb,q[ab+220>>2]=cb,q[ab+216>>2]=cb,q[ab+212>>2]=cb,q[ab+208>>2]=fb<<2,q[ab+240>>2]=w(q[db+20>>2],40),q[ab+244>>2]=q[db+20>>2]<<2,q[ab+248>>2]=w(q[db+52>>2],28),1<=((cb=fb=0)|(gb=q[db+48>>2]))){for(hb=q[a+296>>2],eb=0;eb=(1<<q[hb+(cb<<2)>>2])+eb|0,(0|gb)!=(0|(cb=cb+1|0)););cb=eb<<2}if(q[ab+260>>2]=cb,q[ab+256>>2]=cb,q[ab+252>>2]=w(gb,36),q[ab+264>>2]=w(q[db+72>>2],28),1<=((cb=0)|(hb=q[db+72>>2]))){for(ib=q[a+340>>2],kb=q[a+336>>2],lb=q[a+328>>2],eb=0;eb=(0|(jb=q[(gb=fb<<2)+kb>>2]-q[gb+ib>>2]|0))<(0|eb)?eb:jb+1|0,cb=(0|cb)<(0|(gb=q[gb+lb>>2]))?gb:cb,(0|hb)!=(0|(fb=fb+1|0)););fb=eb<<2,cb<<=2}if(eb=q[db+76>>2],q[ab+280>>2]=fb,q[ab+276>>2]=cb,q[ab+272>>2]=fb,q[ab+268>>2]=eb<<4,1<=((cb=0)|(fb=q[db+80>>2]))){for(gb=q[a+364>>2],a=q[a+296>>2],eb=0;eb=(1<<q[a+(q[gb+(cb<<2)>>2]<<2)>>2])+eb|0,(0|fb)!=(0|(cb=cb+1|0)););cb=eb<<2}for(q[ab+284>>2]=w(fb,24),q[ab+288>>2]=q[db+80>>2]<<2,a=q[db+80>>2],q[ab+304>>2]=cb,q[ab+300>>2]=cb,q[ab+296>>2]=cb,q[ab>>2]=0,q[ab+292>>2]=a<<2,cb=384,eb=1;cb=((db=q[(a=(eb<<2)+ab|0)>>2])+15&-16)+(q[a>>2]=cb)|0,77!=(0|(eb=eb+1|0)););q[bb>>2]=cb}function va(a,ab,bb){var nb;ab|=0,bb|=0,L=nb=L+-64|0;a:{if(a|=0)if(ab)if((ab+15&-16)==(0|ab)){if(ab=function(a,fh,gh){var lh,hh=0,ih=0,jh=0,kh=0,mh=0,nh=0,oh=0,ph=0,qh=0,rh=0,sh=0,th=0,uh=0,vh=0,wh=0,xh=0,yh=0,zh=0,Ah=x(0);if(ba(16+(L=lh=L-336|0)|0,0,308),ua(a+704|0,16+lh|0,12+lh|0),(ih=q[12+lh>>2])>>>0<=gh>>>0){if(hh=(jh=ba(fh,gh=0,ih))+q[16+lh>>2]|0,q[hh+8>>2]=jh+q[20+lh>>2],q[hh+36>>2]=jh+q[24+lh>>2],q[hh+44>>2]=jh+q[28+lh>>2],q[hh+48>>2]=jh+q[32+lh>>2],q[hh+52>>2]=jh+q[36+lh>>2],q[hh+12>>2]=jh+q[40+lh>>2],q[hh+16>>2]=jh+q[44+lh>>2],q[hh+20>>2]=jh+q[48+lh>>2],q[hh+28>>2]=jh+q[52+lh>>2],q[hh+32>>2]=jh+q[56+lh>>2],fh=q[a+704>>2],q[hh+60>>2]=jh+q[60+lh>>2],kh=jh+q[64+lh>>2]|0,q[hh+68>>2]=kh,q[hh+76>>2]=jh+q[68+lh>>2],q[hh+168>>2]=jh+q[72+lh>>2],q[hh+172>>2]=jh+q[76+lh>>2],q[hh+176>>2]=jh+q[80+lh>>2],q[hh+192>>2]=jh+q[84+lh>>2],q[hh+196>>2]=jh+q[88+lh>>2],1<=(0|(fh=q[fh+8>>2])))for(ih=jh+q[92+lh>>2]|0,mh=q[a+792>>2];q[20+(kh+w(gh,24)|0)>>2]=ih,ih=(15+(q[mh+(gh<<2)>>2]<<3)&-16)+ih|0,(0|fh)!=(0|(gh=gh+1|0)););if(q[hh+80>>2]=jh+q[96+lh>>2],q[hh+84>>2]=jh+q[100+lh>>2],q[hh+88>>2]=jh+q[104+lh>>2],q[hh+96>>2]=jh+q[108+lh>>2],q[hh+100>>2]=jh+q[112+lh>>2],q[hh+104>>2]=jh+q[116+lh>>2],q[hh+108>>2]=jh+q[120+lh>>2],q[hh+112>>2]=jh+q[124+lh>>2],q[hh+116>>2]=jh+q[128+lh>>2],q[hh+120>>2]=jh+q[132+lh>>2],q[hh+128>>2]=jh+q[136+lh>>2],q[hh+132>>2]=jh+q[140+lh>>2],q[hh+136>>2]=jh+q[144+lh>>2],q[hh+140>>2]=jh+q[148+lh>>2],q[hh+144>>2]=jh+q[152+lh>>2],q[hh+148>>2]=jh+q[156+lh>>2],q[hh+152>>2]=jh+q[160+lh>>2],q[hh+156>>2]=jh+q[164+lh>>2],q[hh+160>>2]=jh+q[168+lh>>2],q[hh+164>>2]=jh+q[172+lh>>2],fh=q[a+704>>2],q[hh+204>>2]=jh+q[176+lh>>2],q[hh+248>>2]=jh+q[180+lh>>2],q[hh+260>>2]=jh+q[184+lh>>2],q[hh+264>>2]=jh+q[188+lh>>2],q[hh+268>>2]=jh+q[192+lh>>2],gh=jh+q[196+lh>>2]|0,q[hh+272>>2]=gh,!((0|(fh=q[fh+16>>2]))<1)&&(ih=jh+q[200+lh>>2]|0,q[gh>>2]=ih,(gh=1)!=(0|fh)))for(kh=0;ih=(15+(q[q[a+876>>2]+(kh<<2)>>2]<<3)&-16)+ih|0,q[q[hh+272>>2]+(gh<<2)>>2]=ih,(0|fh)!=(0|(gh=(kh=gh)+1|0)););if(q[hh+276>>2]=jh+q[204+lh>>2],q[hh+280>>2]=jh+q[208+lh>>2],q[hh+284>>2]=jh+q[212+lh>>2],q[hh+288>>2]=jh+q[216+lh>>2],q[hh+208>>2]=jh+q[220+lh>>2],q[hh+212>>2]=jh+q[224+lh>>2],q[hh+216>>2]=jh+q[228+lh>>2],q[hh+224>>2]=jh+q[232+lh>>2],q[hh+228>>2]=jh+q[236+lh>>2],q[hh+232>>2]=jh+q[240+lh>>2],q[hh+236>>2]=jh+q[244+lh>>2],q[hh+240>>2]=jh+q[248+lh>>2],q[hh+244>>2]=jh+q[252+lh>>2],fh=q[256+lh>>2],oh=jh+q[260+lh>>2]|0,q[hh+300>>2]=oh,qh=fh+jh|0,q[hh+296>>2]=qh,rh=jh+q[264+lh>>2]|0,q[hh+308>>2]=rh,fh=q[a+704>>2],gh=q[276+lh>>2],ih=q[272+lh>>2],ph=jh+q[268+lh>>2]|0,q[hh+316>>2]=ph,1<=(0|(kh=q[fh+48>>2])))for(ih=jh+ih|0,fh=gh+jh|0,mh=q[a+1e3>>2],gh=0;nh=ph+w(gh,36)|0,q[nh+20>>2]=fh,q[nh+16>>2]=ih,fh=(nh=1<<q[mh+(gh<<2)>>2]<<2)+fh|0,ih=ih+nh|0,(0|kh)!=(0|(gh=gh+1|0)););if(fh=q[a+704>>2],kh=jh+q[280+lh>>2]|0,q[hh+324>>2]=kh,1<=(0|(fh=q[fh+72>>2])))for(ih=jh+q[284+lh>>2]|0,mh=q[a+1032>>2],gh=0;q[12+(kh+w(gh,28)|0)>>2]=ih,ih=(q[mh+(gh<<2)>>2]<<4)+ih|0,(0|fh)!=(0|(gh=gh+1|0)););if(q[hh+328>>2]=jh+q[288+lh>>2],q[hh+332>>2]=jh+q[292+lh>>2],q[hh+336>>2]=jh+q[296+lh>>2],q[hh+344>>2]=jh+q[300+lh>>2],q[hh+348>>2]=jh+q[304+lh>>2],q[hh+352>>2]=jh+q[308+lh>>2],q[hh+356>>2]=jh+q[312+lh>>2],q[hh+364>>2]=jh+q[316+lh>>2],fh=q[320+lh>>2],q[hh+376>>2]=1,q[hh+368>>2]=fh+jh,q[hh+380>>2]=1&o[q[a+708>>2]+20|0],jh=q[a+704>>2],ih=q[jh+20>>2],1<=(0|(q[hh+292>>2]=ih))){for(sh=q[a+932>>2],th=q[a+928>>2],uh=q[a+924>>2],nh=q[a+916>>2],wh=q[a+920>>2],xh=q[a+908>>2],yh=q[a+912>>2],fh=ih;kh=qh+w(gh=fh+-1|0,40)|0,vh=(mh=gh<<2)+yh|0,q[kh>>2]=q[vh>>2],zh=mh+xh|0,q[kh+4>>2]=q[zh>>2],u[kh+8>>2]=u[zh>>2]-u[vh>>2],q[kh+12>>2]=q[mh+wh>>2],q[kh+32>>2]=q[mh+nh>>2],Ah=$b(x(q[mh+uh>>2])),u[kh+16>>2]=Ah,u[kh+20>>2]=Ah*x(1.5),q[kh+24>>2]=q[mh+th>>2],mh=q[mh+sh>>2],q[kh+36>>2]=1,q[kh+28>>2]=mh,kh=1<(0|fh),fh=gh,kh;);for(;q[(gh=(fh=ih+-1|0)<<2)+oh>>2]=q[gh+nh>>2],gh=1<(0|ih),ih=fh,gh;);}if(fh=q[jh+52>>2],1<=(0|(q[hh+304>>2]=fh)))for(kh=q[a+1004>>2],mh=q[a+1012>>2],nh=q[a+1008>>2];ih=rh+w(gh=fh+-1|0,28)|0,oh=gh<<2,q[ih>>2]=q[oh+nh>>2],oh=q[kh+oh>>2],q[ih+20>>2]=1,q[ih+24>>2]=1,q[ih+12>>2]=0,q[ih+4>>2]=mh+(oh<<2),ih=1<(0|fh),fh=gh,ih;);if(fh=q[jh+48>>2],1<=(0|(q[hh+312>>2]=fh)))for(kh=q[a+996>>2],mh=q[a+992>>2],nh=q[a+1e3>>2];ih=ph+w(gh=fh+-1|0,36)|0,qh=q[(oh=gh<<2)+nh>>2],q[ih>>2]=qh,q[ih+4>>2]=1<<qh,oh=q[kh+oh>>2],q[ih+24>>2]=1,q[ih+28>>2]=1,q[ih+12>>2]=mh+(oh<<2),ih=1<(0|fh),fh=gh,ih;);if(fh=q[jh>>2],q[hh+4>>2]=fh,mh=q[a+720>>2],q[hh+40>>2]=mh,(0|fh)<1)gh=0;else{for(nh=q[a+732>>2],oh=q[a+736>>2],qh=q[a+740>>2],rh=q[hh+52>>2],sh=q[hh+8>>2],ih=fh;kh=(gh=ih+-1|0)<<2,q[(th=sh+(gh<<3)|0)>>2]=q[kh+qh>>2],q[th+4>>2]=q[kh+oh>>2],u[kh+rh>>2]=q[kh+nh>>2]?x(1):x(0),kh=1<(0|ih),ih=gh,kh;);for(nh=q[hh+12>>2],gh=0;kh=q[4+(ph+w(q[(oh=(ih=fh+-1|0)<<2)+mh>>2],36)|0)>>2],gh=gh+(q[nh+oh>>2]=kh)|0,kh=1<(0|fh),fh=ih,kh;);}if(q[hh+24>>2]=gh,ih=q[jh+4>>2],q[hh+56>>2]=ih,q[hh+180>>2]=q[a+752>>2],q[hh+184>>2]=q[a+780>>2],q[hh+188>>2]=q[a+804>>2],1<=(0|ih)){for(;;){ih=(fh=ih)+-1|0,gh=q[hh+60>>2]+(ih<<5)|0,kh=ih<<2,q[gh>>2]=q[kh+q[a+764>>2]>>2],q[gh+4>>2]=q[kh+q[a+768>>2]>>2],jh=q[kh+q[a+772>>2]>>2],q[gh+8>>2]=jh,mh=q[kh+q[a+776>>2]>>2],q[gh+12>>2]=mh,q[gh+28>>2]=q[kh+q[a+760>>2]>>2];c:if(jh>>>0<=1){if(jh-1){q[gh+20>>2]=1,q[gh+16>>2]=2,q[gh+24>>2]=q[hh+68>>2]+w(mh,24);break c}q[gh+20>>2]=3,q[gh+16>>2]=4,q[gh+24>>2]=q[hh+76>>2]+(mh<<5)}else Y(4,1026,0);if(!(1<(0|fh)))break}jh=q[a+704>>2]}fh=q[jh+8>>2];d:if(!((0|(q[hh+64>>2]=fh))<1)){if(gh=fh+-1|0,mh=q[a+792>>2],ph=q[a+800>>2],nh=q[a+796>>2],oh=q[hh+68>>2],r[a+4|0]<2)for(;;)if(ih=oh+w(gh,24)|0,kh=gh<<2,q[ih>>2]=q[kh+nh>>2],q[ih+4>>2]=q[kh+ph>>2],kh=q[kh+mh>>2],q[ih+8>>2]=0,q[ih+12>>2]=kh,ih=0<(0|gh),gh=gh+-1|0,!ih)break d;for(qh=q[a+1108>>2];ih=oh+w(gh,24)|0,kh=gh<<2,q[ih>>2]=q[kh+nh>>2],q[ih+4>>2]=q[kh+ph>>2],q[ih+12>>2]=q[kh+mh>>2],q[ih+8>>2]=q[kh+qh>>2],ih=0<(0|gh),gh=gh+-1|0,ih;);}if(gh=q[jh+12>>2],1<=(0|(q[hh+72>>2]=gh)))for(mh=q[a+816>>2],ph=q[hh+76>>2],ih=gh;q[ph+((kh=ih+-1|0)<<5)>>2]=q[mh+(kh<<2)>>2],nh=1<(0|ih),ih=kh,nh;);if(1<=((kh=ih=0)|fh)){for(ph=q[hh+80>>2],nh=q[hh+184>>2],oh=q[hh+316>>2];mh=q[4+(oh+w(q[(qh=(gh=fh+-1|0)<<2)+nh>>2],36)|0)>>2],kh=kh+(q[ph+qh>>2]=mh)|0,mh=1<(0|fh),fh=gh,mh;);gh=q[hh+72>>2]}if(q[hh+92>>2]=kh,1<=(0|gh))for(mh=q[hh+112>>2],ph=q[hh+188>>2],nh=q[hh+316>>2];kh=q[4+(nh+w(q[(oh=(fh=gh+-1|0)<<2)+ph>>2],36)|0)>>2],ih=ih+(q[mh+oh>>2]=kh)|0,kh=1<(0|gh),gh=fh,kh;);if(q[hh+124>>2]=ih,ih=q[jh+16>>2],q[hh+200>>2]=ih,ph=q[a+840>>2],q[hh+252>>2]=ph,(0|ih)<1)gh=0;else{for(nh=q[a+856>>2],oh=q[a+876>>2],qh=q[a+864>>2],rh=q[a+860>>2],sh=q[hh+204>>2],kh=ih;mh=(fh=kh+-1|0)<<2,q[(gh=sh+(fh<<4)|0)>>2]=q[mh+rh>>2],q[gh+4>>2]=q[mh+qh>>2],q[gh+12>>2]=q[mh+oh>>2],q[gh+8>>2]=q[mh+nh>>2],gh=1<(0|kh),kh=fh,gh;);for(mh=q[hh+208>>2],nh=q[hh+316>>2],gh=0;kh=q[4+(nh+w(q[(oh=(fh=ih+-1|0)<<2)+ph>>2],36)|0)>>2],gh=gh+(q[mh+oh>>2]=kh)|0,kh=1<(0|ih),ih=fh,kh;);}if(q[hh+220>>2]=gh,kh=q[jh+72>>2],1<=(0|(q[hh+320>>2]=kh)))for(nh=q[a+1028>>2],oh=q[a+1044>>2],qh=q[a+1040>>2],rh=q[a+1036>>2],sh=q[a+1032>>2],th=q[hh+324>>2],ih=0;;){if(fh=th+w(ih,28)|0,mh=q[(gh=ih<<2)+sh>>2],q[fh+4>>2]=mh,q[fh>>2]=q[gh+rh>>2],ph=q[gh+qh>>2],q[fh+16>>2]=ph,uh=q[gh+oh>>2],q[fh+20>>2]=uh,q[fh+8>>2]=0,q[fh+24>>2]=1+(ph-uh|0),1<=(0|mh))for(uh=q[gh+nh>>2],wh=q[fh+12>>2],xh=q[a+1056>>2],yh=q[a+1048>>2],vh=q[a+1052>>2],gh=0;ph=gh+uh<<2,q[4+(fh=wh+(gh<<4)|0)>>2]=q[ph+vh>>2],q[fh>>2]=q[ph+yh>>2],ph=q[ph+xh>>2],q[fh+12>>2]=0,q[fh+8>>2]=ph,(0|mh)!=(0|(gh=gh+1|0)););if((0|kh)==(0|(ih=ih+1|0)))break}if(ih=q[jh+80>>2],q[hh+340>>2]=ih,mh=q[a+1068>>2],q[hh+372>>2]=mh,!(((fh=0)|ih)<1)){for(ph=q[a+1100>>2],nh=q[a+1088>>2],oh=q[a+1096>>2],qh=q[a+1092>>2],rh=q[a+1084>>2],sh=q[a+1080>>2],th=q[hh+344>>2];kh=th+w(gh=ih+-1|0,24)|0,jh=gh<<2,q[kh>>2]=q[jh+sh>>2],q[kh+4>>2]=q[jh+rh>>2],q[kh+8>>2]=q[jh+qh>>2],jh=q[jh+nh>>2],q[kh+16>>2]=ph+(jh<<1),q[kh+12>>2]=oh+(jh<<2),kh=1<(0|ih),ih=gh,kh;);if(!((0|(gh=q[hh+340>>2]))<1))for(jh=q[hh+348>>2],ph=q[hh+316>>2];kh=q[4+(ph+w(q[(nh=(ih=gh+-1|0)<<2)+mh>>2],36)|0)>>2],fh=fh+(q[jh+nh>>2]=kh)|0,kh=1<(0|gh),gh=ih,kh;);}q[hh>>2]=a,q[hh+360>>2]=fh,ta(hh)}return L=336+lh|0,hh}(a,ab,bb))break a;q[36+nb>>2]=1872,q[32+nb>>2]=1846,Y(4,1087,32+nb|0)}else q[52+nb>>2]=1441,q[48+nb>>2]=1846,Y(4,1087,48+nb|0);else q[20+nb>>2]=1246,q[16+nb>>2]=1846,Y(4,1087,16+nb|0);else q[4+nb>>2]=1828,q[nb>>2]=1846,Y(4,1087,nb);ab=0}return L=64+nb|0,0|ab}function wa(a){var ab;return L=ab=L-16|0,a=(a|=0)?function(a){var Th;return ba(16+(L=Th=L-336|0)|0,0,308),ua(a+704|0,16+Th|0,12+Th|0),L=336+Th|0,q[12+Th>>2]}(a):(q[4+ab>>2]=1828,q[ab>>2]=1810,Y(4,1087,ab),0),L=16+ab|0,0|a}function xa(a,bb){var ob=0,pb=0,qb=0,rb=0,sb=0,tb=0,ub=0,vb=0;rb=a+bb|0;a:{b:if(!(1&(ob=q[a+4>>2]))){if(!(3&ob))break a;if(bb=(ob=q[a>>2])+bb|0,(0|(a=a-ob|0))==q[1928]){if(3==(3&(ob=q[rb+4>>2])))return q[1925]=bb,q[rb+4>>2]=-2&ob,q[a+4>>2]=1|bb,void(q[rb>>2]=bb)}else{if(ob>>>0<=255){if(qb=ob>>>3,ob=q[a+8>>2],(0|(pb=q[a+12>>2]))==(0|ob)){ub=7692,vb=q[1923]&jc(qb),q[ub>>2]=vb;break b}q[ob+12>>2]=pb,q[pb+8>>2]=ob;break b}if(tb=q[a+24>>2],(0|(ob=q[a+12>>2]))==(0|a))if((qb=q[(pb=a+20|0)>>2])||(qb=q[(pb=a+16|0)>>2])){for(;sb=pb,(qb=q[(pb=(ob=qb)+20|0)>>2])||(pb=ob+16|0,qb=q[ob+16>>2]););q[sb>>2]=0}else ob=0;else pb=q[a+8>>2],q[pb+12>>2]=ob,q[ob+8>>2]=pb;if(!tb)break b;pb=q[a+28>>2];e:{if(q[(qb=7996+(pb<<2)|0)>>2]==(0|a)){if(q[qb>>2]=ob)break e;ub=7696,vb=q[1924]&jc(pb),q[ub>>2]=vb;break b}if(!(q[tb+(q[tb+16>>2]==(0|a)?16:20)>>2]=ob))break b}if(q[ob+24>>2]=tb,(pb=q[a+16>>2])&&(q[ob+16>>2]=pb,q[pb+24>>2]=ob),!(pb=q[a+20>>2]))break b;q[ob+20>>2]=pb,q[pb+24>>2]=ob}}f:{if(!(2&(ob=q[rb+4>>2]))){if(q[1929]==(0|rb)){if(q[1929]=a,bb=q[1926]+bb|0,q[1926]=bb,q[a+4>>2]=1|bb,q[1928]!=(0|a))break a;return q[1925]=0,void(q[1928]=0)}if(q[1928]==(0|rb))return q[1928]=a,bb=q[1925]+bb|0,q[1925]=bb,q[a+4>>2]=1|bb,void(q[a+bb>>2]=bb);bb=(-8&ob)+bb|0;g:if(ob>>>0<=255){if(qb=ob>>>3,ob=q[rb+8>>2],(0|(pb=q[rb+12>>2]))==(0|ob)){ub=7692,vb=q[1923]&jc(qb),q[ub>>2]=vb;break g}q[ob+12>>2]=pb,q[pb+8>>2]=ob}else{if(tb=q[rb+24>>2],(0|rb)==(0|(ob=q[rb+12>>2])))if((qb=q[(pb=rb+20|0)>>2])||(qb=q[(pb=rb+16|0)>>2])){for(;sb=pb,(qb=q[(pb=(ob=qb)+20|0)>>2])||(pb=ob+16|0,qb=q[ob+16>>2]););q[sb>>2]=0}else ob=0;else pb=q[rb+8>>2],q[pb+12>>2]=ob,q[ob+8>>2]=pb;if(tb){pb=q[rb+28>>2];j:{if(q[(qb=7996+(pb<<2)|0)>>2]==(0|rb)){if(q[qb>>2]=ob)break j;ub=7696,vb=q[1924]&jc(pb),q[ub>>2]=vb;break g}if(!(q[tb+(q[tb+16>>2]==(0|rb)?16:20)>>2]=ob))break g}q[ob+24>>2]=tb,(pb=q[rb+16>>2])&&(q[ob+16>>2]=pb,q[pb+24>>2]=ob),(pb=q[rb+20>>2])&&(q[ob+20>>2]=pb,q[pb+24>>2]=ob)}}if(q[a+4>>2]=1|bb,q[a+bb>>2]=bb,q[1928]!=(0|a))break f;return void(q[1925]=bb)}q[rb+4>>2]=-2&ob,q[a+4>>2]=1|bb,q[a+bb>>2]=bb}if(bb>>>0<=255)return bb=7732+((ob=bb>>>3)<<3)|0,ob=(pb=q[1923])&(ob=1<<ob)?q[bb+8>>2]:(q[1923]=ob|pb,bb),q[bb+8>>2]=a,q[ob+12>>2]=a,q[a+12>>2]=bb,void(q[a+8>>2]=ob);q[a+16>>2]=0,ob=q[a+20>>2]=0,(qb=bb>>>8)&&(ob=31,16777215<bb>>>0||(ob=28+((ob=((rb=(qb<<=sb=qb+1048320>>>16&8)<<(ob=qb+520192>>>16&4))<<(qb=rb+245760>>>16&2)>>>15)-(qb|ob|sb)|0)<<1|bb>>>ob+21&1)|0)),qb=7996+((q[(pb=a)+28>>2]=ob)<<2)|0;m:{if((pb=q[1924])&(sb=1<<ob)){for(pb=bb<<(31==(0|ob)?0:25-(ob>>>1)|0),ob=q[qb>>2];;){if((-8&q[(qb=ob)+4>>2])==(0|bb))break m;if(ob=pb>>>29,pb<<=1,!(ob=q[16+(sb=qb+(4&ob)|0)>>2]))break}q[sb+16>>2]=a}else q[1924]=pb|sb,q[qb>>2]=a;return q[a+24>>2]=qb,q[a+12>>2]=a,void(q[a+8>>2]=a)}bb=q[qb+8>>2],q[bb+12>>2]=a,q[qb+8>>2]=a,q[a+24>>2]=0,q[a+12>>2]=qb,q[a+8>>2]=bb}}function ya(a,bb,wb){var xb=0;a:{if(8!=(0|bb)){if(xb=28,3&bb|1!=(0|function(a){for(var qi=0,si=0;si=qi,a;)a&=a-1,qi=qi+1|0;return si}(bb>>>2)))break a;if(xb=48,-64-bb>>>0<wb>>>0)break a;bb=function(a,_h){var $h=0,ai=0,ci=0,di=0,ei=0;if((ai=a>>>0>($h=16)?a:16)+-1&ai)for(;$h=(a=$h)<<1,a>>>0<ai>>>0;);else a=ai;return-64-a>>>0<=_h>>>0?(q[1906]=48,0):($h=ja(12+((ai=_h>>>0<11?16:_h+11&-8)+a|0)|0))?(_h=$h+-8|0,$h&a+-1?(ci=(-8&(ei=q[(di=$h+-4|0)>>2]))-($h=(a=15<($h=((a+$h|0)-1&0-a)-8|0)-_h>>>0?$h:a+$h|0)-_h|0)|0,3&ei?(q[a+4>>2]=ci|1&q[a+4>>2]|2,q[4+(ci=a+ci|0)>>2]=1|q[ci+4>>2],q[di>>2]=$h|1&q[di>>2]|2,q[a+4>>2]=1|q[a+4>>2],xa(_h,$h)):(_h=q[_h>>2],q[a+4>>2]=ci,q[a>>2]=_h+$h)):a=_h,3&(_h=q[a+4>>2])&&(($h=-8&_h)>>>0<=ai+16>>>0||(q[a+4>>2]=ai|1&_h|2,_h=a+ai|0,ai=$h-ai|0,q[_h+4>>2]=3|ai,q[4+($h=a+$h|0)>>2]=1|q[$h+4>>2],xa(_h,ai))),a+8|0):0}(16<bb>>>0?bb:16,wb)}else bb=ja(wb);if(!bb)return 1;q[a>>2]=bb,xb=0}return xb}function za(a){var bb=0,wb=0,yb=0,zb=0,Ab=0,Bb=0,Cb=0,Db=0,Eb=0;a:if(a){Ab=(yb=a+-8|0)+(a=-8&(wb=q[a+-4>>2]))|0;b:if(!(1&wb)){if(!(3&wb))break a;if((yb=yb-(wb=q[yb>>2])|0)>>>0<t[1927])break a;if(a=a+wb|0,q[1928]==(0|yb)){if(3==(3&(wb=q[Ab+4>>2])))return q[1925]=a,q[Ab+4>>2]=-2&wb,q[yb+4>>2]=1|a,void(q[a+yb>>2]=a)}else{if(wb>>>0<=255){if(zb=q[yb+8>>2],wb>>>=3,(0|(bb=q[yb+12>>2]))==(0|zb)){Db=7692,Eb=q[1923]&jc(wb),q[Db>>2]=Eb;break b}q[zb+12>>2]=bb,q[bb+8>>2]=zb;break b}if(Cb=q[yb+24>>2],(0|yb)==(0|(wb=q[yb+12>>2])))if((bb=q[(zb=yb+20|0)>>2])||(bb=q[(zb=yb+16|0)>>2])){for(;Bb=zb,(bb=q[(zb=(wb=bb)+20|0)>>2])||(zb=wb+16|0,bb=q[wb+16>>2]););q[Bb>>2]=0}else wb=0;else bb=q[yb+8>>2],q[bb+12>>2]=wb,q[wb+8>>2]=bb;if(!Cb)break b;zb=q[yb+28>>2];e:{if(q[(bb=7996+(zb<<2)|0)>>2]==(0|yb)){if(q[bb>>2]=wb)break e;Db=7696,Eb=q[1924]&jc(zb),q[Db>>2]=Eb;break b}if(!(q[Cb+(q[Cb+16>>2]==(0|yb)?16:20)>>2]=wb))break b}if(q[wb+24>>2]=Cb,(bb=q[yb+16>>2])&&(q[wb+16>>2]=bb,q[bb+24>>2]=wb),!(bb=q[yb+20>>2]))break b;q[wb+20>>2]=bb,q[bb+24>>2]=wb}}if(!(Ab>>>0<=yb>>>0)&&1&(wb=q[Ab+4>>2])){f:{if(!(2&wb)){if(q[1929]==(0|Ab)){if(q[1929]=yb,a=q[1926]+a|0,q[1926]=a,q[yb+4>>2]=1|a,q[1928]!=(0|yb))break a;return q[1925]=0,void(q[1928]=0)}if(q[1928]==(0|Ab))return q[1928]=yb,a=q[1925]+a|0,q[1925]=a,q[yb+4>>2]=1|a,void(q[a+yb>>2]=a);a=(-8&wb)+a|0;g:if(wb>>>0<=255){if(wb>>>=3,(0|(bb=q[Ab+8>>2]))==(0|(zb=q[Ab+12>>2]))){Db=7692,Eb=q[1923]&jc(wb),q[Db>>2]=Eb;break g}q[bb+12>>2]=zb,q[zb+8>>2]=bb}else{if(Cb=q[Ab+24>>2],(0|Ab)==(0|(wb=q[Ab+12>>2])))if((bb=q[(zb=Ab+20|0)>>2])||(bb=q[(zb=Ab+16|0)>>2])){for(;Bb=zb,(bb=q[(zb=(wb=bb)+20|0)>>2])||(zb=wb+16|0,bb=q[wb+16>>2]););q[Bb>>2]=0}else wb=0;else bb=q[Ab+8>>2],q[bb+12>>2]=wb,q[wb+8>>2]=bb;if(Cb){zb=q[Ab+28>>2];j:{if(q[(bb=7996+(zb<<2)|0)>>2]==(0|Ab)){if(q[bb>>2]=wb)break j;Db=7696,Eb=q[1924]&jc(zb),q[Db>>2]=Eb;break g}if(!(q[Cb+(q[Cb+16>>2]==(0|Ab)?16:20)>>2]=wb))break g}q[wb+24>>2]=Cb,(bb=q[Ab+16>>2])&&(q[wb+16>>2]=bb,q[bb+24>>2]=wb),(bb=q[Ab+20>>2])&&(q[wb+20>>2]=bb,q[bb+24>>2]=wb)}}if(q[yb+4>>2]=1|a,q[a+yb>>2]=a,q[1928]!=(0|yb))break f;return void(q[1925]=a)}q[Ab+4>>2]=-2&wb,q[yb+4>>2]=1|a,q[a+yb>>2]=a}if(a>>>0<=255)return wb=7732+((a>>>=3)<<3)|0,a=(bb=q[1923])&(a=1<<a)?q[wb+8>>2]:(q[1923]=a|bb,wb),q[wb+8>>2]=yb,q[a+12>>2]=yb,q[yb+12>>2]=wb,void(q[yb+8>>2]=a);q[yb+16>>2]=0,bb=q[yb+20>>2]=0,(zb=a>>>8)&&(bb=31,16777215<a>>>0||(bb=zb,bb<<=zb=zb+1048320>>>16&8,bb=28+((bb=((bb<<=Cb=bb+520192>>>16&4)<<(Bb=bb+245760>>>16&2)>>>15)-(Bb|zb|Cb)|0)<<1|a>>>bb+21&1)|0)),Bb=7996+((q[(wb=yb)+28>>2]=bb)<<2)|0;m:if((zb=q[1924])&(wb=1<<bb)){zb=a<<(31==(0|bb)?0:25-(bb>>>1)|0),wb=q[Bb>>2];n:{for(;;){if((-8&q[(bb=wb)+4>>2])==(0|a))break n;if(wb=zb>>>29,zb<<=1,!(wb=q[16+(Bb=bb+(4&wb)|0)>>2]))break}q[Bb+16>>2]=yb,q[yb+12>>2]=yb,q[yb+24>>2]=bb,q[yb+8>>2]=yb;break m}a=q[bb+8>>2],q[a+12>>2]=yb,q[bb+8>>2]=yb,q[yb+24>>2]=0,q[yb+12>>2]=bb,q[yb+8>>2]=a}else q[1924]=wb|zb,q[Bb>>2]=yb,q[yb+12>>2]=yb,q[yb+24>>2]=Bb,q[yb+8>>2]=yb;if(a=q[1931]+-1|0,!(q[1931]=a)){for(yb=8148;yb=(a=q[yb>>2])+8|0,a;);q[1931]=-1}}}}function Aa(a,Fb){var Lb,Ib,Gb=0,Hb=0,Jb=0,Kb=x(0);if(j(Fb),!((Ib=2147483647&(Gb=e(0)))>>>0<=2139095040&&(j(a),(Hb=2147483647&(Jb=e(0)))>>>0<2139095041)))return x(a+Fb);if(1065353216==(0|Gb))return ka(a);Gb=(Lb=Gb>>>30&2)|Jb>>>31;b:{c:{d:{e:{if(!Hb){f:switch(Gb-2|0){case 0:break e;case 1:break f;default:break d}return x(-3.1415927410125732)}if(2139095040!=(0|Ib)){if(!Ib|!(Hb>>>0<=218103808+Ib>>>0&&2139095040!=(0|Hb)))break b;if(Hb+218103808>>>0<Ib>>>0&&(Kb=x(0),Lb)||(Kb=ka(x(y(x(a/Fb))))),a=Kb,Gb>>>0<=2){h:switch(Gb-1|0){case 0:return x(-a);case 1:break h;default:break d}return x(x(3.1415927410125732)-x(a+x(8.742277657347586e-8)))}return x(x(a+x(8.742277657347586e-8))+x(-3.1415927410125732))}if(2139095040==(0|Hb))break c;return u[6128+(Gb<<2)>>2]}a=x(3.1415927410125732)}return a}return u[6112+(Gb<<2)>>2]}return x((0|Jb)<0?-1.5707963705062866:1.5707963705062866)}function Da(a,Ub,Vb){var Zb,bc,gc,hc,kc,Wb=0,Xb=0,Yb=0,_b=0,$b=0,ac=0,cc=0,dc=0,ec=0,fc=0,ic=0,jc=0;if(L=Zb=L-560|0,cc=(Xb=Vb)+w(gc=0<(0|(Vb=(Vb+-3|0)/24|0))?Vb:0,-24)|0,0<=(0|(bc=q[808])))for(Xb=bc+1|0,Vb=gc;v[(320+Zb|0)+(Yb<<3)>>3]=(0|Vb)<0?0:+q[3248+(Vb<<2)>>2],Vb=Vb+1|0,(0|Xb)!=(0|(Yb=Yb+1|0)););for(ac=cc+-24|0,Xb=0;;){for(Wb=Vb=0;Wb+=v[(Vb<<3)+a>>3]*v[(320+Zb|0)+(Xb-Vb<<3)>>3],1!=(0|(Vb=Vb+1|0)););if(v[(Xb<<3)+Zb>>3]=Wb,Vb=(0|Xb)<(0|bc),Xb=Xb+1|0,!Vb)break}kc=23-ac|0,hc=24-ac|0,Xb=bc;a:{for(;;){if(Wb=v[(Xb<<3)+Zb>>3],!(ec=((Vb=0)|(Yb=Xb))<1))for(;$b=(480+Zb|0)+(Vb<<2)|0,dc=Wb,_b=y(Wb*=5.960464477539063e-8)<2147483648?~~Wb:-2147483648,_b=y(dc+=-16777216*(Wb=+(0|_b)))<2147483648?~~dc:-2147483648,q[$b>>2]=_b,Wb=v[(($b=Yb+-1|0)<<3)+Zb>>3]+Wb,Vb=Vb+1|0,_b=1<(0|Yb),Yb=$b,_b;);Wb=ha(Wb,ac),Wb+=-8*C(.125*Wb),Wb-=0|($b=y(Wb)<2147483648?~~Wb:-2147483648);e:{f:{g:{if(ic=(0|ac)<1){if(ac)break g;_b=q[476+((Xb<<2)+Zb|0)>>2]>>23}else fc=Yb=(Xb<<2)+Zb|0,Yb=(_b=q[Yb+476>>2])-((Vb=_b>>hc)<<hc)|0,$b=Vb+$b|0,_b=(q[fc+476>>2]=Yb)>>kc;if((0|_b)<1)break e;break f}if(_b=2,!(.5<=Wb)){_b=0;break e}}if(Yb=Vb=0,!ec)for(;;){ec=q[(jc=(480+Zb|0)+(Vb<<2)|0)>>2],fc=16777215;i:{j:{if(!Yb){if(!ec)break j;fc=16777216,Yb=1}q[jc>>2]=fc-ec;break i}Yb=0}if((0|Xb)==(0|(Vb=Vb+1|0)))break}ic||1<(Vb=ac+-1|0)>>>0||(q[476+(Vb=(Xb<<2)+Zb|0)>>2]=Vb-1?8388607&q[Vb+476>>2]:4194303&q[Vb+476>>2]),$b=$b+1|0,2==(0|_b)&&(Wb=1-Wb,_b=2,Yb&&(Wb-=ha(1,ac)))}if(0!=Wb)break;if(!(((Yb=0)|(Vb=Xb))<=(0|bc))){for(;Yb=q[(480+Zb|0)+((Vb=Vb+-1|0)<<2)>>2]|Yb,(0|bc)<(0|Vb););if(Yb){for(cc=ac;cc=cc+-24|0,!q[(480+Zb|0)+((Xb=Xb+-1|0)<<2)>>2];);break a}}for(Vb=1;Vb=(Yb=Vb)+1|0,!q[(480+Zb|0)+(bc-Yb<<2)>>2];);for(Yb=Xb+Yb|0;;){for(Xb=$b=Xb+1|0,v[(320+Zb|0)+($b<<3)>>3]=q[3248+(gc+Xb<<2)>>2],Wb=Vb=0;Wb+=v[(Vb<<3)+a>>3]*v[(320+Zb|0)+($b-Vb<<3)>>3],1!=(0|(Vb=Vb+1|0)););if(v[(Xb<<3)+Zb>>3]=Wb,!((0|Xb)<(0|Yb)))break}Xb=Yb}16777216<=(Wb=ha(Wb,0-ac|0))?(a=(480+Zb|0)+(Xb<<2)|0,dc=Wb,Vb=y(Wb*=5.960464477539063e-8)<2147483648?~~Wb:-2147483648,Yb=y(Wb=dc+-16777216*(0|Vb))<2147483648?~~Wb:-2147483648,q[a>>2]=Yb,Xb=Xb+1|0):(Vb=y(Wb)<2147483648?~~Wb:-2147483648,cc=ac),q[(480+Zb|0)+(Xb<<2)>>2]=Vb}if(Wb=ha(1,cc),!((0|Xb)<=-1)){for(Vb=Xb;v[(Vb<<3)+Zb>>3]=Wb*q[(480+Zb|0)+(Vb<<2)>>2],Wb*=5.960464477539063e-8,a=0<(0|Vb),Vb=Vb+-1|0,a;);if(!((0|Xb)<=-1))for(Vb=Xb;;){for(Yb=Xb-(a=Vb)|0,Vb=Wb=0;Wb+=v[6016+(Vb<<3)>>3]*v[(a+Vb<<3)+Zb>>3],!((0|bc)<=(0|Vb))&&(ac=Vb>>>0<Yb>>>0,Vb=Vb+1|0,ac););if(v[(160+Zb|0)+(Yb<<3)>>3]=Wb,Vb=a+-1|0,!(0<(0|a)))break}}if((Wb=0)<=(0|Xb))for(;Wb+=v[(160+Zb|0)+(Xb<<3)>>3],a=0<(0|Xb),Xb=Xb+-1|0,a;);return v[Ub>>3]=_b?-Wb:Wb,L=560+Zb|0,7&$b}function Ia(a,Ub){var Vb=0,lc=0,tc=0;Vb=0!=(0|Ub);a:{b:{c:{d:if(!(!Ub|!(3&a)))for(;;){if(!r[0|a])break c;if(a=a+1|0,Vb=0!=(0|(Ub=Ub+-1|0)),!Ub)break d;if(!(3&a))break}if(!Vb)break b}if(!r[0|a])break a;e:{if(4<=Ub>>>0){for(Vb=(Vb=Ub+-4|0)-(lc=-4&Vb)|0,lc=4+(a+lc|0)|0;;){if((-1^(tc=q[a>>2]))&tc+-16843009&-2139062144)break e;if(a=a+4|0,!(3<(Ub=Ub+-4|0)>>>0))break}Ub=Vb,a=lc}if(!Ub)break b}for(;;){if(!r[0|a])break a;if(a=a+1|0,!(Ub=Ub+-1|0))break}}return 0}return a}function Na(a,Ub,Fc,Gc){if(a|Ub)for(;o[0|(Fc=Fc+-1|0)]=r[3168+(15&a)|0]|Gc,(a=(15&Ub)<<28|a>>>4)|(Ub>>>=4););return Fc}function Oa(a,Ub,Fc){if(a|Ub)for(;o[0|(Fc=Fc+-1|0)]=7&a|48,(a=(7&Ub)<<29|a>>>3)|(Ub>>>=3););return Fc}function $b(a){var _h=x(0),fi=x(0),gi=0,hi=0,ii=x(0),ji=x(0),ki=x(0),li=x(0),mi=0,ni=x(0),oi=x(0),pi=0;a:{b:{if(j(a),hi=2147483647&(gi=e(0))){if(!(hi>>>0<2139095041))return x(x(.10000000149011612)+a);if(1065353216==(0|hi))return x(-1<(0|gi)?.10000000149011612:10);if(2139095040==(0|hi))return x(-1<(0|gi)?0:-a);if(1073741824==(0|gi))return x(.010000000707805157);if(1056964608==(0|gi))return x(.3162277638912201);if(1291845633<=hi>>>0)return x((0|gi)<0?H:0);if(ii=u[1537],ji=x(x(1.600000023841858)-ii),ki=x(x(1)/x(ii+x(1.600000023841858))),f(0,-4096&(j(fi=x(ji*ki)),e(0))),_h=k(),li=x(_h*_h),oi=u[1541],ii=x(ki*x(x(ji-x((ni=_h)*x(3.099609375)))-x(_h*x(x(1.600000023841858)-x(x(3.099609375)-ii))))),ki=x(x(fi+_h)*ii),_h=x(fi*fi),ji=x(ki+x(x(_h*_h)*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(.20697501301765442))+x(.23066075146198273)))+x(.2727281153202057)))+x(.3333333432674408)))+x(.4285714328289032)))+x(.6000000238418579)))),f(0,-4096&(j(x(x(li+x(3))+ji)),e(0))),_h=k(),ki=x(ni*_h),fi=x(x(ii*_h)+x(fi*x(ji-x(x(_h+x(-3))-li)))),f(0,-4096&(j(x(ki+fi)),e(0))),_h=k(),ii=x(_h*x(.9619140625)),li=x(u[1539]+x(x(x(fi-x(_h-ki))*x(.9617967009544373))+x(_h*x(-.00011736857413779944)))),f(0,-4096&(j(x(x(oi+x(ii+li))+x(-4))),e(0))),fi=k(),f(0,-4096&gi),ji=k(),_h=x(fi*ji),a=x(x(x(li-x(x(x(fi-x(-4))-oi)-ii))*a)+x(x(a-ji)*fi)),j(fi=x(_h+a)),1124073473<=(0|(gi=e(0))))break b;d:{e:{if((hi=1124073472)==(0|gi)){if(!(x(a+x(4.299566569443414e-8))>x(fi-_h)))break e;break b}if(hi=2147483647&gi,!(a<=x(fi-_h)^1|-1021968384!=(0|gi))|1125515265<=hi>>>0)break a;if(hi>>>0<1056964609)break d}mi=(8388607&(hi=(8388608>>>(hi>>>23)-126)+gi|0)|8388608)>>>150-(pi=hi>>>23&255),mi=(0|gi)<0?0-mi|0:mi,_h=x(_h-(f(0,hi&-8388608>>pi+-127),k())),j(x(a+_h)),gi=e(0)}f(0,-32768&gi),fi=k(),ii=x(fi*x(.693145751953125)),fi=x(x(fi*x(14286065379565116e-22))+x(x(a-x(fi-_h))*x(.6931471824645996))),a=x(ii+fi),_h=x(a*a),_h=x(a-x(_h*x(x(_h*x(x(_h*x(x(_h*x(x(_h*x(4.138136944220605e-8))+x(-16533901998627698e-22)))+x(661375597701408e-19)))+x(-.0027777778450399637)))+x(.1666666716337204)))),ni=x(x(a*_h)/x(_h+x(-2))),_h=x(fi-x(a-ii)),a=(0|(gi=0|(j(a=x(x(a-x(ni-x(_h+x(a*_h))))+x(1))),e(0)+(mi<<23))))<=8388607?function(a,qi){a:if(128<=(0|qi)){if(a=x(a*x(17014118346046923e22)),(0|qi)<255){qi=qi+-127|0;break a}a=x(a*x(17014118346046923e22)),qi=((0|qi)<381?qi:381)+-254|0}else-127<(0|qi)||(a=x(a*x(11754943508222875e-54)),qi=-253<(0|qi)?qi+126|0:(a=x(a*x(11754943508222875e-54)),(-378<(0|qi)?qi:-378)+252|0));return x(a*(f(0,1065353216+(qi<<23)|0),k()))}(a,mi):(f(0,gi),k()),a=x(x(1)*a)}else a=x(1);return a}return x(H)}return x(0)}function dc(a,qi){var low,high;low=0|a,high=0|qi,b[0]=low,b[1]=high}function gc(a,qi,si){return function(a,qi,si){var ui,vi,wi,xi,ti=0;return xi=w(ui=si>>>16,ti=a>>>16),a=(65535&(ti=((wi=w(vi=65535&si,a&=65535))>>>16)+w(ti,vi)|0))+w(a,ui)|0,M=((xi+w(qi,si)|0)+(ti>>>16)|0)+(a>>>16)|0,65535&wi|a<<16}(a,qi,si)}function hc(a,qi,si){return function(a,qi,si){var yi=0,zi=0,Ai=0,Bi=0,Ci=0,Di=0,Ei=0,Fi=0,Gi=0;a:{b:{c:{d:{e:{f:{g:{h:{i:{if(zi=qi){if(!(yi=si))break i;break h}return dc((qi=a)-w(a=(a>>>0)/(si>>>0)|0,si)|0,0),M=0,a}if(!a)break g;break f}if(!((Bi=yi+-1|0)&yi))break e;Ci=0-(Bi=(z(yi)+33|0)-z(zi)|0)|0;break c}return dc(0,zi-w(a=(zi>>>0)/0|0,0)|0),M=0,a}if((yi=32-z(zi)|0)>>>0<31)break d;break b}if(dc(a&Bi,0),1==(0|yi))break a;return si=31&(yi=yi?31-z(yi+-1^yi)|0:32),a=32<=(63&yi)>>>0?(zi=0,qi>>>si):(zi=qi>>>si,((1<<si)-1&qi)<<32-si|a>>>si),M=zi,a}Bi=yi+1|0,Ci=63-yi|0}if(yi=qi,Ai=31&(zi=63&Bi),Ai=32<=zi>>>0?(zi=0,yi>>>Ai):(zi=yi>>>Ai,((1<<Ai)-1&yi)<<32-Ai|a>>>Ai),yi=31&(Ci&=63),32<=Ci>>>0?(qi=a<<yi,a=0):(qi=(1<<yi)-1&a>>>32-yi|qi<<yi,a<<=yi),Bi)for((Ci=si+(yi=-1)|0)>>>0<4294967295&&(yi=0);Ai=(Ei=Di=Ai<<1|qi>>>31)-(Fi=si&(Di=yi-((zi=zi<<1|Ai>>>31)+(Ci>>>0<Di>>>0)|0)>>31))|0,zi=zi-(Ei>>>0<Fi>>>0)|0,qi=qi<<1|a>>>31,a=Gi|a<<1,Gi=Di&=1,Bi=Bi+-1|0;);return dc(Ai,zi),M=qi<<1|a>>>31,Di|a<<1}dc(a,qi),qi=a=0}return M=qi,a}(a,qi,si)}function jc(a){var Hi;return(-1>>>(Hi=31&a)&-2)<<Hi|(-1<<(a=0-a&31)&-2)>>>a}function N(){return buffer.byteLength/65536|0}}(H,I,J)}}l=null,b.wasmBinary&&(F=b.wasmBinary);var fa=Error,WebAssembly={};F=[],"object"!=typeof WebAssembly&&E("no native wasm support detected");var I,J=new function(a){var c=Array(17);return c.grow=function(){18<=c.length&&B("Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."),c.push(null)},c.set=function(a,e){c[a]=e},c.get=function(a){return c[a]},c}({initial:17,maximum:18,element:"anyfunc"}),K=!1;function assert(a,c){a||B("Assertion failed: "+c)}var buffer,M,L,N,ia="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function ja(a,c,d){var e=c+d;for(d=c;a[d]&&!(e<=d);)++d;if(16<d-c&&a.subarray&&ia)return ia.decode(a.subarray(c,d));for(e="";c<d;){var f=a[c++];if(128&f){var g=63&a[c++];if(192==(224&f))e+=String.fromCharCode((31&f)<<6|g);else{var m=63&a[c++];(f=224==(240&f)?(15&f)<<12|g<<6|m:(7&f)<<18|g<<12|m<<6|63&a[c++])<65536?e+=String.fromCharCode(f):(f-=65536,e+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else e+=String.fromCharCode(f)}return e}function ka(a,c){return a?ja(L,a,c):""}function la(a){return 0<a%65536&&(a+=65536-a%65536),a}function ma(a){buffer=a,b.HEAP8=M=new Int8Array(a),b.HEAP16=new Int16Array(a),b.HEAP32=N=new Int32Array(a),b.HEAPU8=L=new Uint8Array(a),b.HEAPU16=new Uint16Array(a),b.HEAPU32=new Uint32Array(a),b.HEAPF32=new Float32Array(a),b.HEAPF64=new Float64Array(a)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var G=b.TOTAL_MEMORY||16777216;function O(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.b;"number"==typeof d?void 0===c.a?b.dynCall_v(d):b.dynCall_vi(d,c.a):d(void 0===c.a?null:c.a)}}}(I=b.wasmMemory?b.wasmMemory:new function(){return{buffer:new ArrayBuffer(G/65536*65536),grow:function(a){return ca(a)}}})&&(buffer=I.buffer),G=buffer.byteLength,ma(buffer),N[2052]=5251248;var na=[],oa=[],pa=[],qa=[];function ra(){var a=b.preRun.shift();na.unshift(a)}if(Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=65535&a,e=65535&c;return d*e+((a>>>16)*e+d*(c>>>16)<<16)|0}),!Math.fround){var sa=new Float32Array(1);Math.fround=function(a){return sa[0]=a,sa[0]}}Math.clz32||(Math.clz32=function(a){var c=32,d=a>>16;return d&&(c-=16,a=d),(d=a>>8)&&(c-=8,a=d),(d=a>>4)&&(c-=4,a=d),(d=a>>2)&&(c-=2,a=d),a>>1?c-2:c-a}),Math.trunc||(Math.trunc=function(a){return a<0?Math.ceil(a):Math.floor(a)});var P=0,Q=null,U=null;function B(a){throw b.onAbort&&b.onAbort(a),D(a),E(a),K=!0,new fa("abort("+a+"). Build with -s ASSERTIONS=1 for more info.")}b.preloadedImages={},b.preloadedAudios={};var V="data:application/octet-stream;base64,";function W(a){return String.prototype.startsWith?a.startsWith(V):0===a.indexOf(V)}var X="_em_module.wasm";if(!W(X)){var ta=X;X=b.locateFile?b.locateFile(ta,u):u+ta}function ua(){try{if(F)return new Uint8Array(F);var a=z(X);if(a)return a;if(w)return w(X);throw"both async and sync fetching of the wasm failed"}catch(c){B(c)}}oa.push({b:function(){wa()}});var xa=[null,[],[]],ya=!1;function C(a){for(var c=[],d=0;d<a.length;d++){var e=a[d];255<e&&(ya&&assert(!1,"Character code "+e+" ("+String.fromCharCode(e)+")  at offset "+d+" not in 0x00-0xFF."),e&=255),c.push(String.fromCharCode(e))}return c.join("")}var za="function"==typeof atob?atob:function(a){var c="",d=0;a=a.replace(/[^A-Za-z0-9\\+\\/=]/g,"");do{var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++)),m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(d++));e=e<<2|f>>4,f=(15&f)<<4|g>>2;var h=(3&g)<<6|m;c+=String.fromCharCode(e),64!==g&&(c+=String.fromCharCode(f)),64!==m&&(c+=String.fromCharCode(h))}while(d<a.length);return c};function z(a){if(W(a)){if(a=a.slice(V.length),"boolean"==typeof r&&r){try{var c=Buffer.from(a,"base64")}catch(g){c=new Buffer(a,"base64")}var d=new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}else try{var e=za(a),f=new Uint8Array(e.length);for(c=0;c<e.length;++c)f[c]=e.charCodeAt(c);d=f}catch(g){throw Error("Converting base64 string to bytes failed.")}return d}}var H={emscripten_memcpy_big:function(a,c,d){L.set(L.subarray(c,c+d),a)},emscripten_resize_heap:function(a){if(2147418112<a)return!1;for(var c=Math.max(M.length,16777216);c<a;)c=c<=536870912?la(2*c):Math.min(la((3*c+2147483648)/4),2147418112);a:{try{I.grow(c-buffer.byteLength+65535>>16),ma(I.buffer);var d=1;break a}catch(e){}d=void 0}return!!d},fd_write:function(a,c,d,e){try{for(var f=0,g=0;g<d;g++){for(var m=N[c+8*g>>2],h=N[c+(8*g+4)>>2],A=0;A<h;A++){var R=L[m+A],S=xa[a];0===R||10===R?((1===a?D:E)(ja(S,0)),S.length=0):S.push(R)}f+=h}return N[e>>2]=f,0}catch(T){return"undefined"!=typeof FS&&T instanceof FS.c||B(T),T.f}},memory:I,table:J},Aa=function(){function a(a){b.asm=a.exports,P--,b.monitorRunDependencies&&b.monitorRunDependencies(P),0==P&&(null!==Q&&(clearInterval(Q),Q=null),U&&(a=U,U=null,a()))}function c(c){a(c.instance)}function d(a){return(F||!p&&!q||"function"!=typeof fetch?new Promise(function(a){a(ua())}):fetch(X,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at \'"+X+"\'";return a.arrayBuffer()}).catch(function(){return ua()})).then(function(){return{then:function(a){a({instance:new da})}}}).then(a,function(a){E("failed to asynchronously prepare wasm: "+a),B(a)})}var e={env:H,wasi_snapshot_preview1:H};if(P++,b.monitorRunDependencies&&b.monitorRunDependencies(P),b.instantiateWasm)try{return b.instantiateWasm(e,a)}catch(f){return E("Module.instantiateWasm callback failed with error: "+f),!1}return function(){if(F||"function"!=typeof WebAssembly.instantiateStreaming||W(X)||"function"!=typeof fetch)return d(c);fetch(X,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,e).then(c,function(a){E("wasm streaming compile failed: "+a),E("falling back to ArrayBuffer instantiation"),d(c)})})}(),{}}();b.asm=Aa;var wa=b.___wasm_call_ctors=function(){return b.asm.__wasm_call_ctors.apply(null,arguments)};b._csmGetVersion=function(){return b.asm.csmGetVersion.apply(null,arguments)},b._csmGetLatestMocVersion=function(){return b.asm.csmGetLatestMocVersion.apply(null,arguments)},b._csmGetMocVersion=function(){return b.asm.csmGetMocVersion.apply(null,arguments)},b._csmSetLogFunction=function(){return b.asm.csmSetLogFunction.apply(null,arguments)},b._csmReviveMocInPlace=function(){return b.asm.csmReviveMocInPlace.apply(null,arguments)},b._csmReadCanvasInfo=function(){return b.asm.csmReadCanvasInfo.apply(null,arguments)},b._csmGetSizeofModel=function(){return b.asm.csmGetSizeofModel.apply(null,arguments)},b._csmInitializeModelInPlace=function(){return b.asm.csmInitializeModelInPlace.apply(null,arguments)},b._csmUpdateModel=function(){return b.asm.csmUpdateModel.apply(null,arguments)},b._csmGetParameterCount=function(){return b.asm.csmGetParameterCount.apply(null,arguments)},b._csmGetParameterIds=function(){return b.asm.csmGetParameterIds.apply(null,arguments)},b._csmGetParameterMinimumValues=function(){return b.asm.csmGetParameterMinimumValues.apply(null,arguments)},b._csmGetParameterMaximumValues=function(){return b.asm.csmGetParameterMaximumValues.apply(null,arguments)},b._csmGetParameterDefaultValues=function(){return b.asm.csmGetParameterDefaultValues.apply(null,arguments)},b._csmGetParameterValues=function(){return b.asm.csmGetParameterValues.apply(null,arguments)},b._csmGetPartCount=function(){return b.asm.csmGetPartCount.apply(null,arguments)},b._csmGetPartIds=function(){return b.asm.csmGetPartIds.apply(null,arguments)},b._csmGetPartOpacities=function(){return b.asm.csmGetPartOpacities.apply(null,arguments)},b._csmGetPartParentPartIndices=function(){return b.asm.csmGetPartParentPartIndices.apply(null,arguments)},b._csmGetDrawableCount=function(){return b.asm.csmGetDrawableCount.apply(null,arguments)},b._csmGetDrawableIds=function(){return b.asm.csmGetDrawableIds.apply(null,arguments)},b._csmGetDrawableConstantFlags=function(){return b.asm.csmGetDrawableConstantFlags.apply(null,arguments)},b._csmGetDrawableDynamicFlags=function(){return b.asm.csmGetDrawableDynamicFlags.apply(null,arguments)},b._csmGetDrawableTextureIndices=function(){return b.asm.csmGetDrawableTextureIndices.apply(null,arguments)},b._csmGetDrawableDrawOrders=function(){return b.asm.csmGetDrawableDrawOrders.apply(null,arguments)},b._csmGetDrawableRenderOrders=function(){return b.asm.csmGetDrawableRenderOrders.apply(null,arguments)},b._csmGetDrawableOpacities=function(){return b.asm.csmGetDrawableOpacities.apply(null,arguments)},b._csmGetDrawableMaskCounts=function(){return b.asm.csmGetDrawableMaskCounts.apply(null,arguments)},b._csmGetDrawableMasks=function(){return b.asm.csmGetDrawableMasks.apply(null,arguments)},b._csmGetDrawableVertexCounts=function(){return b.asm.csmGetDrawableVertexCounts.apply(null,arguments)},b._csmGetDrawableVertexPositions=function(){return b.asm.csmGetDrawableVertexPositions.apply(null,arguments)},b._csmGetDrawableVertexUvs=function(){return b.asm.csmGetDrawableVertexUvs.apply(null,arguments)},b._csmGetDrawableIndexCounts=function(){return b.asm.csmGetDrawableIndexCounts.apply(null,arguments)},b._csmGetDrawableIndices=function(){return b.asm.csmGetDrawableIndices.apply(null,arguments)},b._csmResetDrawableDynamicFlags=function(){return b.asm.csmResetDrawableDynamicFlags.apply(null,arguments)},b._csmMallocMoc=function(){return b.asm.csmMallocMoc.apply(null,arguments)},b._csmMallocModelAndInitialize=function(){return b.asm.csmMallocModelAndInitialize.apply(null,arguments)},b._csmMalloc=function(){return b.asm.csmMalloc.apply(null,arguments)},b._csmFree=function(){return b.asm.csmFree.apply(null,arguments)};var Y,Ba=b.stackSave=function(){return b.asm.stackSave.apply(null,arguments)},Ca=b.stackAlloc=function(){return b.asm.stackAlloc.apply(null,arguments)},Da=b.stackRestore=function(){return b.asm.stackRestore.apply(null,arguments)},ca=b.__growWasmMemory=function(){return b.asm.__growWasmMemory.apply(null,arguments)};function Z(){function a(){if(!Y&&(Y=!0,!K)){if(O(oa),O(pa),b.onRuntimeInitialized&&b.onRuntimeInitialized(),b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var a=b.postRun.shift();qa.unshift(a)}O(qa)}}if(!(0<P)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ra();O(na),0<P||(b.setStatus?(b.setStatus("Running..."),setTimeout(function(){setTimeout(function(){b.setStatus("")},1),a()},1)):a())}}if(b.dynCall_vi=function(){return b.asm.dynCall_vi.apply(null,arguments)},b.asm=Aa,b.ccall=function(a,c,d,e){var f={string:function(a){var c=0;if(null!=a&&0!==a){var d=1+(a.length<<2),e=c=Ca(d),f=L;if(0<d){d=e+d-1;for(var g=0;g<a.length;++g){var k=a.charCodeAt(g);if(55296<=k&&k<=57343&&(k=65536+((1023&k)<<10)|1023&a.charCodeAt(++g)),k<=127){if(d<=e)break;f[e++]=k}else{if(k<=2047){if(d<=e+1)break;f[e++]=192|k>>6}else{if(k<=65535){if(d<=e+2)break;f[e++]=224|k>>12}else{if(d<=e+3)break;f[e++]=240|k>>18,f[e++]=128|k>>12&63}f[e++]=128|k>>6&63}f[e++]=128|63&k}}f[e]=0}}return c},array:function(a){var c=Ca(a.length);return M.set(a,c),c}},g=function(a){var c=b["_"+a];return assert(c,"Cannot call unknown function "+a+", make sure it is exported"),c}(a),m=[];if(a=0,e)for(var h=0;h<e.length;h++){var A=f[d[h]];A?(0===a&&(a=Ba()),m[h]=A(e[h])):m[h]=e[h]}return d=function(a){return"string"===c?ka(a):"boolean"===c?!!a:a}(d=g.apply(null,m)),0!==a&&Da(a),d},b.UTF8ToString=ka,b.addFunction=function(a,c){var d=J.length;try{J.grow(1)}catch(e){if(!e instanceof RangeError)throw e;throw"Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."}try{J.set(d,a)}catch(e){if(!e instanceof TypeError)throw e;assert(void 0!==c,"Missing signature argument to addFunction"),J.set(d,a)}return d},b.then=function(a){if(Y)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c(),a(b)}}return b},U=function Ea(){Y||Z(),Y||(U=Ea)},b.run=Z,b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();return Z(),_em_module});"object"==typeof exports&&"object"==typeof module?module.exports=_em_module:"function"==typeof define&&define.amd?define([],function(){return _em_module}):"object"==typeof exports&&(exports._em_module=_em_module);var _em=_em_module()}(Live2DCubismCore=Live2DCubismCore||{});'
            },
            7269: (t, e) => {
                "use strict";
                var i;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, (i = e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).HitAreaPrefix = "HitArea", i.HitAreaHead = "Head", i.HitAreaBody = "Body", i.PartsIdCore = "Parts01Core", i.PartsArmPrefix = "Parts01Arm_", i.PartsArmLPrefix = "Parts01ArmL_", i.PartsArmRPrefix = "Parts01ArmR_", i.ParamAngleX = "ParamAngleX", i.ParamAngleY = "ParamAngleY", i.ParamAngleZ = "ParamAngleZ", i.ParamEyeLOpen = "ParamEyeLOpen", i.ParamEyeLSmile = "ParamEyeLSmile", i.ParamEyeROpen = "ParamEyeROpen", i.ParamEyeRSmile = "ParamEyeRSmile", i.ParamEyeBallX = "ParamEyeBallX", i.ParamEyeBallY = "ParamEyeBallY", i.ParamEyeBallForm = "ParamEyeBallForm", i.ParamBrowLY = "ParamBrowLY", i.ParamBrowRY = "ParamBrowRY", i.ParamBrowLX = "ParamBrowLX", i.ParamBrowRX = "ParamBrowRX", i.ParamBrowLAngle = "ParamBrowLAngle", i.ParamBrowRAngle = "ParamBrowRAngle", i.ParamBrowLForm = "ParamBrowLForm", i.ParamBrowRForm = "ParamBrowRForm", i.ParamMouthForm = "ParamMouthForm", i.ParamMouthOpenY = "ParamMouthOpenY", i.ParamCheek = "ParamCheek", i.ParamBodyAngleX = "ParamBodyAngleX", i.ParamBodyAngleY = "ParamBodyAngleY", i.ParamBodyAngleZ = "ParamBodyAngleZ", i.ParamBreath = "ParamBreath", i.ParamArmLA = "ParamArmLA", i.ParamArmRA = "ParamArmRA", i.ParamArmLB = "ParamArmLB", i.ParamArmRB = "ParamArmRB", i.ParamHandL = "ParamHandL", i.ParamHandR = "ParamHandR", i.ParamHairFront = "ParamHairFront", i.ParamHairSide = "ParamHairSide", i.ParamHairBack = "ParamHairBack", i.ParamHairFluffy = "ParamHairFluffy", i.ParamShoulderY = "ParamShoulderY", i.ParamBustX = "ParamBustX", i.ParamBustY = "ParamBustY", i.ParamBaseX = "ParamBaseX", i.ParamBaseY = "ParamBaseY", i.ParamNONE = "NONE:"
            },
            7990: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CSM_LOG_LEVEL = e.CSM_LOG_LEVEL_OFF = e.CSM_LOG_LEVEL_ERROR = e.CSM_LOG_LEVEL_WARNING = e.CSM_LOG_LEVEL_INFO = e.CSM_LOG_LEVEL_DEBUG = e.CSM_LOG_LEVEL_VERBOSE = void 0, e.CSM_LOG_LEVEL_VERBOSE = 0, e.CSM_LOG_LEVEL_DEBUG = 1, e.CSM_LOG_LEVEL_INFO = 2, e.CSM_LOG_LEVEL_WARNING = 3, e.CSM_LOG_LEVEL_ERROR = 4, e.CSM_LOG_LEVEL_OFF = 5, e.CSM_LOG_LEVEL = e.CSM_LOG_LEVEL_VERBOSE
            },
            3166: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o = i(3051),
                    n = i(1864),
                    s = i(5090),
                    u = i(3023).Live2DCubismFramework.csmVector,
                    h = o.Live2DCubismFramework.CubismFramework,
                    l = s.Live2DCubismFramework.CubismJson,
                    c = n.Live2DCubismFramework.ICubismModelSetting;
                ! function(t) {
                    var e, i = "FileReferences",
                        a = "UserData",
                        o = "Name",
                        n = "File",
                        s = "Ids",
                        _ = "Sound",
                        f = "SoundDelay",
                        p = "FadeInTime",
                        g = "FadeOutTime",
                        d = "LipSync",
                        m = "EyeBlink";
                    ! function(t) {
                        t[t.FrequestNode_Groups = 0] = "FrequestNode_Groups", t[t.FrequestNode_Moc = 1] = "FrequestNode_Moc", t[t.FrequestNode_Motions = 2] = "FrequestNode_Motions", t[t.FrequestNode_Expressions = 3] = "FrequestNode_Expressions", t[t.FrequestNode_Textures = 4] = "FrequestNode_Textures", t[t.FrequestNode_Physics = 5] = "FrequestNode_Physics", t[t.FrequestNode_Pose = 6] = "FrequestNode_Pose", t[t.FrequestNode_HitAreas = 7] = "FrequestNode_HitAreas"
                    }(e || (e = {}));
                    var b = function(t) {
                        function c(e, a) {
                            var r = t.call(this) || this;
                            return r._json = l.create(e, a), r._json && (r._jsonValue = new u, r._jsonValue.pushBack(r._json.getRoot().getValueByString("Groups")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Moc")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Motions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Expressions")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Textures")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Physics")), r._jsonValue.pushBack(r._json.getRoot().getValueByString(i).getValueByString("Pose")), r._jsonValue.pushBack(r._json.getRoot().getValueByString("HitAreas"))), r
                        }
                        return r(c, t), c.prototype.release = function() {
                            l.delete(this._json), this._jsonValue = null
                        }, c.prototype.GetJson = function() {
                            return this._json
                        }, c.prototype.getModelFileName = function() {
                            return this.isExistModelFile() ? this._jsonValue.at(e.FrequestNode_Moc).getRawString() : ""
                        }, c.prototype.getTextureCount = function() {
                            return this.isExistTextureFiles() ? this._jsonValue.at(e.FrequestNode_Textures).getSize() : 0
                        }, c.prototype.getTextureDirectory = function() {
                            return this._jsonValue.at(e.FrequestNode_Textures).getRawString()
                        }, c.prototype.getTextureFileName = function(t) {
                            return this._jsonValue.at(e.FrequestNode_Textures).getValueByIndex(t).getRawString()
                        }, c.prototype.getHitAreasCount = function() {
                            return this.isExistHitAreas() ? this._jsonValue.at(e.FrequestNode_HitAreas).getSize() : 0
                        }, c.prototype.getHitAreaId = function(t) {
                            return h.getIdManager().getId(this._jsonValue.at(e.FrequestNode_HitAreas).getValueByIndex(t).getValueByString("Id").getRawString())
                        }, c.prototype.getHitAreaName = function(t) {
                            return this._jsonValue.at(e.FrequestNode_HitAreas).getValueByIndex(t).getValueByString(o).getRawString()
                        }, c.prototype.getPhysicsFileName = function() {
                            return this.isExistPhysicsFile() ? this._jsonValue.at(e.FrequestNode_Physics).getRawString() : ""
                        }, c.prototype.getPoseFileName = function() {
                            return this.isExistPoseFile() ? this._jsonValue.at(e.FrequestNode_Pose).getRawString() : ""
                        }, c.prototype.getExpressionCount = function() {
                            return this.isExistExpressionFile() ? this._jsonValue.at(e.FrequestNode_Expressions).getSize() : 0
                        }, c.prototype.getExpressionName = function(t) {
                            return this._jsonValue.at(e.FrequestNode_Expressions).getValueByIndex(t).getValueByString(o).getRawString()
                        }, c.prototype.getExpressionFileName = function(t) {
                            return this._jsonValue.at(e.FrequestNode_Expressions).getValueByIndex(t).getValueByString(n).getRawString()
                        }, c.prototype.getMotionGroupCount = function() {
                            return this.isExistMotionGroups() ? this._jsonValue.at(e.FrequestNode_Motions).getKeys().getSize() : 0
                        }, c.prototype.getMotionGroupName = function(t) {
                            return this.isExistMotionGroups() ? this._jsonValue.at(e.FrequestNode_Motions).getKeys().at(t) : null
                        }, c.prototype.getMotionCount = function(t) {
                            return this.isExistMotionGroupName(t) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getSize() : 0
                        }, c.prototype.getMotionFileName = function(t, i) {
                            return this.isExistMotionGroupName(t) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(n).getRawString() : ""
                        }, c.prototype.getMotionSoundFileName = function(t, i) {
                            return this.isExistMotionSoundFile(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(_).getRawString() : ""
                        }, c.prototype.getMotionSoundDelay = function(t, i) {
                            return this.isExistMotionSoundDelay(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(f).toInt() : 0
                        }, c.prototype.getMotionFadeInTimeValue = function(t, i) {
                            return this.isExistMotionFadeIn(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(p).toFloat() : -1
                        }, c.prototype.getMotionFadeOutTimeValue = function(t, i) {
                            return this.isExistMotionFadeOut(t, i) ? this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(g).toFloat() : -1
                        }, c.prototype.getUserDataFile = function() {
                            return this.isExistUserDataFile() ? this._json.getRoot().getValueByString(i).getValueByString(a).getRawString() : ""
                        }, c.prototype.getLayoutMap = function(t) {
                            var e = this._json.getRoot().getValueByString("Layout").getMap();
                            if (null == e) return !1;
                            for (var i = !1, a = e.begin(); a.notEqual(e.end()); a.preIncrement()) t.setValue(a.ptr().first, a.ptr().second.toFloat()), i = !0;
                            return i
                        }, c.prototype.getEyeBlinkParameterCount = function() {
                            if (!this.isExistEyeBlinkParameters()) return 0;
                            for (var t = 0, i = 0; i < this._jsonValue.at(e.FrequestNode_Groups).getSize(); i++) {
                                var a = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(i);
                                if (!a.isNull() && !a.isError() && a.getValueByString(o).getRawString() == m) {
                                    t = a.getValueByString(s).getVector().getSize();
                                    break
                                }
                            }
                            return t
                        }, c.prototype.getEyeBlinkParameterId = function(t) {
                            if (!this.isExistEyeBlinkParameters()) return null;
                            for (var i = 0; i < this._jsonValue.at(e.FrequestNode_Groups).getSize(); i++) {
                                var a = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(i);
                                if (!a.isNull() && !a.isError() && a.getValueByString(o).getRawString() == m) return h.getIdManager().getId(a.getValueByString(s).getValueByIndex(t).getRawString())
                            }
                            return null
                        }, c.prototype.getLipSyncParameterCount = function() {
                            if (!this.isExistLipSyncParameters()) return 0;
                            for (var t = 0, i = 0; i < this._jsonValue.at(e.FrequestNode_Groups).getSize(); i++) {
                                var a = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(i);
                                if (!a.isNull() && !a.isError() && a.getValueByString(o).getRawString() == d) {
                                    t = a.getValueByString(s).getVector().getSize();
                                    break
                                }
                            }
                            return t
                        }, c.prototype.getLipSyncParameterId = function(t) {
                            if (!this.isExistLipSyncParameters()) return null;
                            for (var i = 0; i < this._jsonValue.at(e.FrequestNode_Groups).getSize(); i++) {
                                var a = this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(i);
                                if (!a.isNull() && !a.isError() && a.getValueByString(o).getRawString() == d) return h.getIdManager().getId(a.getValueByString(s).getValueByIndex(t).getRawString())
                            }
                            return null
                        }, c.prototype.isExistModelFile = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Moc);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistTextureFiles = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Textures);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistHitAreas = function() {
                            var t = this._jsonValue.at(e.FrequestNode_HitAreas);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistPhysicsFile = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Physics);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistPoseFile = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Pose);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistExpressionFile = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Expressions);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistMotionGroups = function() {
                            var t = this._jsonValue.at(e.FrequestNode_Motions);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistMotionGroupName = function(t) {
                            var i = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t);
                            return !i.isNull() && !i.isError()
                        }, c.prototype.isExistMotionSoundFile = function(t, i) {
                            var a = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(_);
                            return !a.isNull() && !a.isError()
                        }, c.prototype.isExistMotionSoundDelay = function(t, i) {
                            var a = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(f);
                            return !a.isNull() && !a.isError()
                        }, c.prototype.isExistMotionFadeIn = function(t, i) {
                            var a = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(p);
                            return !a.isNull() && !a.isError()
                        }, c.prototype.isExistMotionFadeOut = function(t, i) {
                            var a = this._jsonValue.at(e.FrequestNode_Motions).getValueByString(t).getValueByIndex(i).getValueByString(g);
                            return !a.isNull() && !a.isError()
                        }, c.prototype.isExistUserDataFile = function() {
                            var t = this._json.getRoot().getValueByString(i).getValueByString(a);
                            return !t.isNull() && !t.isError()
                        }, c.prototype.isExistEyeBlinkParameters = function() {
                            if (this._jsonValue.at(e.FrequestNode_Groups).isNull() || this._jsonValue.at(e.FrequestNode_Groups).isError()) return !1;
                            for (var t = 0; t < this._jsonValue.at(e.FrequestNode_Groups).getSize(); ++t)
                                if (this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(t).getValueByString(o).getRawString() == m) return !0;
                            return !1
                        }, c.prototype.isExistLipSyncParameters = function() {
                            if (this._jsonValue.at(e.FrequestNode_Groups).isNull() || this._jsonValue.at(e.FrequestNode_Groups).isError()) return !1;
                            for (var t = 0; t < this._jsonValue.at(e.FrequestNode_Groups).getSize(); ++t)
                                if (this._jsonValue.at(e.FrequestNode_Groups).getValueByIndex(t).getValueByString(o).getRawString() == d) return !0;
                            return !1
                        }, c
                    }(c);
                    t.CubismModelSettingJson = b
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            6849: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.Live2DCubismFramework = void 0,
                    function(t) {
                        var e = function() {
                            function t() {
                                this._currentTime = 0
                            }
                            return t.create = function() {
                                return new t
                            }, t.delete = function(t) {
                                null != t && (t = null)
                            }, t.prototype.setParameters = function(t) {
                                this._breathParameters = t
                            }, t.prototype.getParameters = function() {
                                return this._breathParameters
                            }, t.prototype.updateParameters = function(t, e) {
                                this._currentTime += e;
                                for (var i = 2 * this._currentTime * 3.14159, a = 0; a < this._breathParameters.getSize(); ++a) {
                                    var r = this._breathParameters.at(a);
                                    t.addParameterValueById(r.parameterId, r.offset + r.peak * Math.sin(i / r.cycle), r.weight)
                                }
                            }, t
                        }();
                        t.CubismBreath = e;
                        t.BreathParameterData = function(t, e, i, a, r) {
                            this.parameterId = null == t ? null : t, this.offset = null == e ? 0 : e, this.peak = null == i ? 0 : i, this.cycle = null == a ? 0 : a, this.weight = null == r ? 0 : r
                        }
                    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            4514: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o, n = i(3023).Live2DCubismFramework.csmVector;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), o = function() {
                        function t(t) {
                            if (this._blinkingState = r.EyeState_First, this._nextBlinkingTime = 0, this._stateStartTimeSeconds = 0, this._blinkingIntervalSeconds = 4, this._closingSeconds = .1, this._closedSeconds = .05, this._openingSeconds = .15, this._userTimeSeconds = 0, this._parameterIds = new n, null != t)
                                for (var e = 0; e < t.getEyeBlinkParameterCount(); ++e) this._parameterIds.pushBack(t.getEyeBlinkParameterId(e))
                        }
                        return t.create = function(e) {
                            return void 0 === e && (e = null), new t(e)
                        }, t.delete = function(t) {
                            null != t && (t = null)
                        }, t.prototype.setBlinkingInterval = function(t) {
                            this._blinkingIntervalSeconds = t
                        }, t.prototype.setBlinkingSetting = function(t, e, i) {
                            this._closingSeconds = t, this._closedSeconds = e, this._openingSeconds = i
                        }, t.prototype.setParameterIds = function(t) {
                            this._parameterIds = t
                        }, t.prototype.getParameterIds = function() {
                            return this._parameterIds
                        }, t.prototype.updateParameters = function(e, i) {
                            var a;
                            this._userTimeSeconds += i;
                            var o = 0;
                            switch (this._blinkingState) {
                                case r.EyeState_Closing:
                                    (o = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closingSeconds) >= 1 && (o = 1, this._blinkingState = r.EyeState_Closed, this._stateStartTimeSeconds = this._userTimeSeconds), a = 1 - o;
                                    break;
                                case r.EyeState_Closed:
                                    (o = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._closedSeconds) >= 1 && (this._blinkingState = r.EyeState_Opening, this._stateStartTimeSeconds = this._userTimeSeconds), a = 0;
                                    break;
                                case r.EyeState_Opening:
                                    (o = (this._userTimeSeconds - this._stateStartTimeSeconds) / this._openingSeconds) >= 1 && (o = 1, this._blinkingState = r.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming()), a = o;
                                    break;
                                case r.EyeState_Interval:
                                    this._nextBlinkingTime < this._userTimeSeconds && (this._blinkingState = r.EyeState_Closing, this._stateStartTimeSeconds = this._userTimeSeconds), a = 1;
                                    break;
                                case r.EyeState_First:
                                default:
                                    this._blinkingState = r.EyeState_Interval, this._nextBlinkingTime = this.determinNextBlinkingTiming(), a = 1
                            }
                            t.CloseIfZero || (a = -a);
                            for (var n = 0; n < this._parameterIds.getSize(); ++n) e.setParameterValueById(this._parameterIds.at(n), a)
                        }, t.prototype.determinNextBlinkingTiming = function() {
                            var t = Math.random();
                            return this._userTimeSeconds + t * (2 * this._blinkingIntervalSeconds - 1)
                        }, t.CloseIfZero = !0, t
                    }(), a.CubismEyeBlink = o,
                    function(t) {
                        t[t.EyeState_First = 0] = "EyeState_First", t[t.EyeState_Interval = 1] = "EyeState_Interval", t[t.EyeState_Closing = 2] = "EyeState_Closing", t[t.EyeState_Closed = 3] = "EyeState_Closed", t[t.EyeState_Opening = 4] = "EyeState_Opening"
                    }(r = a.EyeState || (a.EyeState = {}))
            },
            6221: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(3023),
                    r = i(3051),
                    o = i(5090),
                    n = a.Live2DCubismFramework.csmVector,
                    s = r.Live2DCubismFramework.CubismFramework,
                    u = o.Live2DCubismFramework.CubismJson;
                ! function(t) {
                    var e = "FadeInTime",
                        i = "Link",
                        a = function() {
                            function t() {
                                this._fadeTimeSeconds = .5, this._lastModel = null, this._partGroups = new n, this._partGroupCounts = new n
                            }
                            return t.create = function(a, o) {
                                var n = new t,
                                    h = u.create(a, o),
                                    l = h.getRoot();
                                l.getValueByString(e).isNull() || (n._fadeTimeSeconds = l.getValueByString(e).toFloat(.5), n._fadeTimeSeconds <= 0 && (n._fadeTimeSeconds = .5));
                                for (var c = l.getValueByString("Groups"), _ = c.getSize(), f = 0; f < _; ++f) {
                                    for (var p = c.getValueByIndex(f), g = p.getSize(), d = 0, m = 0; m < g; ++m) {
                                        var b = p.getValueByIndex(m),
                                            y = new r,
                                            v = s.getIdManager().getId(b.getValueByString("Id").getRawString());
                                        if (y.partId = v, !b.getValueByString(i).isNull())
                                            for (var q = b.getValueByString(i), $ = q.getSize(), A = 0; A < $; ++A) {
                                                var x = new r,
                                                    w = s.getIdManager().getId(q.getValueByIndex(A).getString());
                                                x.partId = w, y.link.pushBack(x)
                                            }
                                        n._partGroups.pushBack(y.clone()), ++d
                                    }
                                    n._partGroupCounts.pushBack(d)
                                }
                                return u.delete(h), n
                            }, t.delete = function(t) {
                                null != t && (t = null)
                            }, t.prototype.updateParameters = function(t, e) {
                                t != this._lastModel && this.reset(t), this._lastModel = t, e < 0 && (e = 0);
                                for (var i = 0, a = 0; a < this._partGroupCounts.getSize(); a++) {
                                    var r = this._partGroupCounts.at(a);
                                    this.doFade(t, e, i, r), i += r
                                }
                                this.copyPartOpacities(t)
                            }, t.prototype.reset = function(t) {
                                for (var e = 0, i = 0; i < this._partGroupCounts.getSize(); ++i) {
                                    for (var a = this._partGroupCounts.at(i), r = e; r < e + a; ++r) {
                                        this._partGroups.at(r).initialize(t);
                                        var o = this._partGroups.at(r).partIndex,
                                            n = this._partGroups.at(r).parameterIndex;
                                        if (!(o < 0)) {
                                            t.setPartOpacityByIndex(o, r == e ? 1 : 0), t.setParameterValueByIndex(n, r == e ? 1 : 0);
                                            for (var s = 0; s < this._partGroups.at(r).link.getSize(); ++s) this._partGroups.at(r).link.at(s).initialize(t)
                                        }
                                    }
                                    e += a
                                }
                            }, t.prototype.copyPartOpacities = function(t) {
                                for (var e = 0; e < this._partGroups.getSize(); ++e) {
                                    var i = this._partGroups.at(e);
                                    if (0 != i.link.getSize())
                                        for (var a = this._partGroups.at(e).partIndex, r = t.getPartOpacityByIndex(a), o = 0; o < i.link.getSize(); ++o) {
                                            var n = i.link.at(o).partIndex;
                                            n < 0 || t.setPartOpacityByIndex(n, r)
                                        }
                                }
                            }, t.prototype.doFade = function(t, e, i, a) {
                                for (var r = -1, o = 1, n = i; n < i + a; ++n) {
                                    var s = this._partGroups.at(n).partIndex,
                                        u = this._partGroups.at(n).parameterIndex;
                                    if (t.getParameterValueByIndex(u) > .001) {
                                        if (r >= 0) break;
                                        r = n, o = t.getPartOpacityByIndex(s), (o += e / this._fadeTimeSeconds) > 1 && (o = 1)
                                    }
                                }
                                for (r < 0 && (r = 0, o = 1), n = i; n < i + a; ++n) {
                                    var h = this._partGroups.at(n).partIndex;
                                    if (r == n) t.setPartOpacityByIndex(h, o);
                                    else {
                                        var l = t.getPartOpacityByIndex(h),
                                            c = void 0;
                                        (1 - (c = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5)) * (1 - o) > .15 && (c = 1 - .15 / (1 - o)), l > c && (l = c), t.setPartOpacityByIndex(h, l)
                                    }
                                }
                            }, t
                        }();
                    t.CubismPose = a;
                    var r = function() {
                        function t(t) {
                            if (this.parameterIndex = 0, this.partIndex = 0, this.link = new n, null != t) {
                                this.partId = t.partId;
                                for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone())
                            }
                        }
                        return t.prototype.assignment = function(t) {
                            this.partId = t.partId;
                            for (var e = t.link.begin(); e.notEqual(t.link.end()); e.preIncrement()) this.link.pushBack(e.ptr().clone());
                            return this
                        }, t.prototype.initialize = function(t) {
                            this.parameterIndex = t.getParameterIndex(this.partId), this.partIndex = t.getPartIndex(this.partId), t.setParameterValueByIndex(this.parameterIndex, 1)
                        }, t.prototype.clone = function() {
                            var e = new t;
                            e.partId = this.partId, e.parameterIndex = this.parameterIndex, e.partIndex = this.partIndex, e.link = new n;
                            for (var i = this.link.begin(); i.notEqual(this.link.end()); i.increment()) e.link.pushBack(i.ptr().clone());
                            return e
                        }, t
                    }();
                    t.PartData = r
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            1864: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, (e.Live2DCubismFramework || (e.Live2DCubismFramework = {})).ICubismModelSetting = function() {}
            },
            2340: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(4244).Live2DCubismFramework.csmString;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t(t) {
                        this._id = "string" != typeof t ? t : new o(t)
                    }
                    return t.prototype.getString = function() {
                        return this._id
                    }, t.prototype.isEqual = function(e) {
                        return "string" == typeof e ? this._id.isEqual(e) : e instanceof o ? this._id.isEqual(e.s) : e instanceof t && this._id.isEqual(e._id.s)
                    }, t.prototype.isNotEqual = function(e) {
                        return "string" == typeof e ? !this._id.isEqual(e) : e instanceof o ? !this._id.isEqual(e.s) : e instanceof t && !this._id.isEqual(e._id.s)
                    }, t
                }(), a.CubismId = r
            },
            8112: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(3023),
                    n = i(2340).Live2DCubismFramework.CubismId,
                    s = o.Live2DCubismFramework.csmVector;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {
                        this._ids = new s
                    }
                    return t.prototype.release = function() {
                        for (var t = 0; t < this._ids.getSize(); ++t) this._ids.set(t, void 0);
                        this._ids = null
                    }, t.prototype.registerIds = function(t) {
                        for (var e = 0; e < t.length; e++) this.registerId(t[e])
                    }, t.prototype.registerId = function(t) {
                        var e = null;
                        return "string" != typeof t ? this.registerId(t.s) : (null != (e = this.findId(t)) || (e = new n(t), this._ids.pushBack(e)), e)
                    }, t.prototype.getId = function(t) {
                        return this.registerId(t)
                    }, t.prototype.isExist = function(t) {
                        return "string" == typeof t ? null != this.findId(t) : this.isExist(t.s)
                    }, t.prototype.findId = function(t) {
                        for (var e = 0; e < this._ids.getSize(); ++e)
                            if (this._ids.at(e).getString().isEqual(t)) return this._ids.at(e);
                        return null
                    }, t
                }(), a.CubismIdManager = r
            },
            3051: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LogLevel = e.Option = e.Live2DCubismFramework = e.strtod = void 0;
                var a = i(5090),
                    r = i(8112),
                    o = i(9884),
                    n = i(2307),
                    s = a.Live2DCubismFramework.Value,
                    u = r.Live2DCubismFramework.CubismIdManager,
                    h = o.Live2DCubismFramework.CubismRenderer;
                e.strtod = function(t, e) {
                        for (var i = 0, a = 1;; a++) {
                            var r = t.slice(a - 1, a);
                            if ("e" != r && "-" != r && "E" != r) {
                                var o = t.substring(0, a),
                                    n = Number(o);
                                if (isNaN(n)) break;
                                i = a
                            }
                        }
                        var s = parseFloat(t);
                        return isNaN(s) && (s = NaN), e[0] = t.slice(i), s
                    },
                    function(t) {
                        var e, i = !1,
                            a = !1,
                            r = null,
                            o = null;
                        (e = t.Constant || (t.Constant = {})).vertexOffset = 0, e.vertexStep = 2, t.csmDelete = function(t) {
                            t && (t = void 0)
                        };
                        var c = function() {
                            function t() {}
                            return t.startUp = function(t) {
                                if (void 0 === t && (t = null), i) return n.CubismLogInfo("CubismFramework.startUp() is already done."), i;
                                if (null != (r = t) && Live2DCubismCore.Logging.csmSetLogFunction(r.logFunction), i = !0) {
                                    var e = Live2DCubismCore.Version.csmGetVersion(),
                                        a = (4278190080 & e) >> 24,
                                        o = (16711680 & e) >> 16,
                                        s = 65535 & e,
                                        u = e;
                                    n.CubismLogInfo("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ("00" + a).slice(-2), ("00" + o).slice(-2), ("0000" + s).slice(-4), u)
                                }
                                return n.CubismLogInfo("CubismFramework.startUp() is complete."), i
                            }, t.cleanUp = function() {
                                i = !1, a = !1, r = null, o = null
                            }, t.initialize = function() {
                                n.CSM_ASSERT(i), i ? a ? n.CubismLogWarning("CubismFramework.initialize() skipped, already initialized.") : (s.staticInitializeNotForClientCall(), o = new u, a = !0, n.CubismLogInfo("CubismFramework.initialize() is complete.")) : n.CubismLogWarning("CubismFramework is not started.")
                            }, t.dispose = function() {
                                n.CSM_ASSERT(i), i ? a ? (s.staticReleaseNotForClientCall(), o.release(), o = null, h.staticRelease(), a = !1, n.CubismLogInfo("CubismFramework.dispose() is complete.")) : n.CubismLogWarning("CubismFramework.dispose() skipped, not initialized.") : n.CubismLogWarning("CubismFramework is not started.")
                            }, t.isStarted = function() {
                                return i
                            }, t.isInitialized = function() {
                                return a
                            }, t.coreLogFunction = function(t) {
                                Live2DCubismCore.Logging.csmGetLogFunction() && Live2DCubismCore.Logging.csmGetLogFunction()(t)
                            }, t.getLoggingLevel = function() {
                                return null != r ? r.loggingLevel : l.LogLevel_Off
                            }, t.getIdManager = function() {
                                return o
                            }, t
                        }();
                        t.CubismFramework = c
                    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}));
                var l;
                e.Option = function() {},
                    function(t) {
                        t[t.LogLevel_Verbose = 0] = "LogLevel_Verbose", t[t.LogLevel_Debug = 1] = "LogLevel_Debug", t[t.LogLevel_Info = 2] = "LogLevel_Info", t[t.LogLevel_Warning = 3] = "LogLevel_Warning", t[t.LogLevel_Error = 4] = "LogLevel_Error", t[t.LogLevel_Off = 5] = "LogLevel_Off"
                    }(l = e.LogLevel || (e.LogLevel = {}))
            },
            3191: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(9743).Live2DCubismFramework.CubismVector2;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {}
                    return t.range = function(t, e, i) {
                        return t < e ? t = e : t > i && (t = i), t
                    }, t.sin = function(t) {
                        return Math.sin(t)
                    }, t.cos = function(t) {
                        return Math.cos(t)
                    }, t.abs = function(t) {
                        return Math.abs(t)
                    }, t.sqrt = function(t) {
                        return Math.sqrt(t)
                    }, t.getEasingSine = function(t) {
                        return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * this.cos(t * Math.PI)
                    }, t.max = function(t, e) {
                        return t > e ? t : e
                    }, t.min = function(t, e) {
                        return t > e ? e : t
                    }, t.degreesToRadian = function(t) {
                        return t / 180 * Math.PI
                    }, t.radianToDegrees = function(t) {
                        return 180 * t / Math.PI
                    }, t.directionToRadian = function(t, e) {
                        for (var i = Math.atan2(e.y, e.x) - Math.atan2(t.y, t.x); i < -Math.PI;) i += 2 * Math.PI;
                        for (; i > Math.PI;) i -= 2 * Math.PI;
                        return i
                    }, t.directionToDegrees = function(t, e) {
                        var i = this.directionToRadian(t, e),
                            a = this.radianToDegrees(i);
                        return e.x - t.x > 0 && (a = -a), a
                    }, t.radianToDirection = function(t) {
                        var e = new o;
                        return e.x = this.sin(t), e.y = this.cos(t), e
                    }, t
                }(), a.CubismMath = r
            },
            2900: (t, e) => {
                "use strict";
                var i, a;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, i = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), a = function() {
                    function t() {
                        this._tr = new Float32Array(16), this.loadIdentity()
                    }
                    return t.multiply = function(t, e, i) {
                        for (var a = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), r = 0; r < 4; ++r)
                            for (var o = 0; o < 4; ++o)
                                for (var n = 0; n < 4; ++n) a[o + 4 * r] += t[n + 4 * r] * e[o + 4 * n];
                        for (r = 0; r < 16; ++r) i[r] = a[r]
                    }, t.prototype.loadIdentity = function() {
                        var t = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                        this.setMatrix(t)
                    }, t.prototype.setMatrix = function(t) {
                        for (var e = 0; e < 16; ++e) this._tr[e] = t[e]
                    }, t.prototype.getArray = function() {
                        return this._tr
                    }, t.prototype.getScaleX = function() {
                        return this._tr[0]
                    }, t.prototype.getScaleY = function() {
                        return this._tr[5]
                    }, t.prototype.getTranslateX = function() {
                        return this._tr[12]
                    }, t.prototype.getTranslateY = function() {
                        return this._tr[13]
                    }, t.prototype.transformX = function(t) {
                        return this._tr[0] * t + this._tr[12]
                    }, t.prototype.transformY = function(t) {
                        return this._tr[5] * t + this._tr[13]
                    }, t.prototype.invertTransformX = function(t) {
                        return (t - this._tr[12]) / this._tr[0]
                    }, t.prototype.invertTransformY = function(t) {
                        return (t - this._tr[13]) / this._tr[5]
                    }, t.prototype.translateRelative = function(e, i) {
                        var a = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, i, 0, 1]);
                        t.multiply(a, this._tr, this._tr)
                    }, t.prototype.translate = function(t, e) {
                        this._tr[12] = t, this._tr[13] = e
                    }, t.prototype.translateX = function(t) {
                        this._tr[12] = t
                    }, t.prototype.translateY = function(t) {
                        this._tr[13] = t
                    }, t.prototype.scaleRelative = function(e, i) {
                        var a = new Float32Array([e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
                        t.multiply(a, this._tr, this._tr)
                    }, t.prototype.scale = function(t, e) {
                        this._tr[0] = t, this._tr[5] = e
                    }, t.prototype.multiplyByMatrix = function(e) {
                        t.multiply(e.getArray(), this._tr, this._tr)
                    }, t.prototype.clone = function() {
                        for (var e = new t, i = 0; i < this._tr.length; i++) e._tr[i] = this._tr[i];
                        return e
                    }, t
                }(), i.CubismMatrix44 = a
            },
            9638: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o, n, s = i(2900).Live2DCubismFramework.CubismMatrix44;
                o = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), n = function(t) {
                    function e(e, i) {
                        var a = t.call(this) || this;
                        return a._width = void 0 !== e ? e : 0, a._height = void 0 !== i ? i : 0, a.setHeight(1), a
                    }
                    return r(e, t), e.prototype.setWidth = function(t) {
                        var e = t / this._width,
                            i = e;
                        this.scale(e, i)
                    }, e.prototype.setHeight = function(t) {
                        var e = t / this._height,
                            i = e;
                        this.scale(e, i)
                    }, e.prototype.setPosition = function(t, e) {
                        this.translate(t, e)
                    }, e.prototype.setCenterPosition = function(t, e) {
                        this.centerX(t), this.centerY(e)
                    }, e.prototype.top = function(t) {
                        this.setY(t)
                    }, e.prototype.bottom = function(t) {
                        var e = this._height * this.getScaleY();
                        this.translateY(t - e)
                    }, e.prototype.left = function(t) {
                        this.setX(t)
                    }, e.prototype.right = function(t) {
                        var e = this._width * this.getScaleX();
                        this.translateX(t - e)
                    }, e.prototype.centerX = function(t) {
                        var e = this._width * this.getScaleX();
                        this.translateX(t - e / 2)
                    }, e.prototype.setX = function(t) {
                        this.translateX(t)
                    }, e.prototype.centerY = function(t) {
                        var e = this._height * this.getScaleY();
                        this.translateY(t - e / 2)
                    }, e.prototype.setY = function(t) {
                        this.translateY(t)
                    }, e.prototype.setupFromLayout = function(t) {
                        for (var e = t.begin(); e.notEqual(t.end()); e.preIncrement()) {
                            var i = e.ptr().first,
                                a = e.ptr().second;
                            "width" == i ? this.setWidth(a) : "height" == i && this.setHeight(a)
                        }
                        for (e = t.begin(); e.notEqual(t.end()); e.preIncrement()) i = e.ptr().first, a = e.ptr().second, "x" == i ? this.setX(a) : "y" == i ? this.setY(a) : "center_x" == i ? this.centerX(a) : "center_y" == i ? this.centerY(a) : "top" == i ? this.top(a) : "bottom" == i ? this.bottom(a) : "left" == i ? this.left(a) : "right" == i && this.right(a)
                    }, e
                }(s), o.CubismModelMatrix = n
            },
            7049: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(3191).Live2DCubismFramework.CubismMath;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {
                        this._faceTargetX = 0, this._faceTargetY = 0, this._faceX = 0, this._faceY = 0, this._faceVX = 0, this._faceVY = 0, this._lastTimeSeconds = 0, this._userTimeSeconds = 0
                    }
                    return t.prototype.update = function(t) {
                        this._userTimeSeconds += t;
                        var e = 4 / 30;
                        if (0 != this._lastTimeSeconds) {
                            var i = 30 * (this._userTimeSeconds - this._lastTimeSeconds);
                            this._lastTimeSeconds = this._userTimeSeconds;
                            var a = i * e / 4.5,
                                r = this._faceTargetX - this._faceX,
                                n = this._faceTargetY - this._faceY;
                            if (!(o.abs(r) <= .01 && o.abs(n) <= .01)) {
                                var s = o.sqrt(r * r + n * n),
                                    u = e * n / s,
                                    h = e * r / s - this._faceVX,
                                    l = u - this._faceVY,
                                    c = o.sqrt(h * h + l * l);
                                (c < -a || c > a) && (h *= a / c, l *= a / c), this._faceVX += h, this._faceVY += l;
                                var _ = .5 * (o.sqrt(a * a + 16 * a * s - 8 * a * s) - a),
                                    f = o.sqrt(this._faceVX * this._faceVX + this._faceVY * this._faceVY);
                                f > _ && (this._faceVX *= _ / f, this._faceVY *= _ / f), this._faceX += this._faceVX, this._faceY += this._faceVY
                            }
                        } else this._lastTimeSeconds = this._userTimeSeconds
                    }, t.prototype.getX = function() {
                        return this._faceX
                    }, t.prototype.getY = function() {
                        return this._faceY
                    }, t.prototype.set = function(t, e) {
                        this._faceTargetX = t, this._faceTargetY = e
                    }, t
                }(), a.CubismTargetPoint = r
            },
            9743: (t, e) => {
                "use strict";
                var i, a;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, i = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), a = function() {
                    function t(t, e) {
                        this.x = t, this.y = e, this.x = null == t ? 0 : t, this.y = null == e ? 0 : e
                    }
                    return t.prototype.add = function(e) {
                        var i = new t(0, 0);
                        return i.x = this.x + e.x, i.y = this.y + e.y, i
                    }, t.prototype.substract = function(e) {
                        var i = new t(0, 0);
                        return i.x = this.x - e.x, i.y = this.y - e.y, i
                    }, t.prototype.multiply = function(e) {
                        var i = new t(0, 0);
                        return i.x = this.x * e.x, i.y = this.y * e.y, i
                    }, t.prototype.multiplyByScaler = function(e) {
                        return this.multiply(new t(e, e))
                    }, t.prototype.division = function(e) {
                        var i = new t(0, 0);
                        return i.x = this.x / e.x, i.y = this.y / e.y, i
                    }, t.prototype.divisionByScalar = function(e) {
                        return this.division(new t(e, e))
                    }, t.prototype.getLength = function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    }, t.prototype.getDistanceWith = function(t) {
                        return Math.sqrt((this.x - t.x) * (this.x - t.x) + (this.y - t.y) * (this.y - t.y))
                    }, t.prototype.dot = function(t) {
                        return this.x * t.x + this.y * t.y
                    }, t.prototype.normalize = function() {
                        var t = Math.pow(this.x * this.x + this.y * this.y, .5);
                        this.x = this.x / t, this.y = this.y / t
                    }, t.prototype.isEqual = function(t) {
                        return this.x == t.x && this.y == t.y
                    }, t.prototype.isNotEqual = function(t) {
                        return !this.isEqual(t)
                    }, t
                }(), i.CubismVector2 = a
            },
            1498: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o, n, s = i(2900).Live2DCubismFramework.CubismMatrix44;
                o = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), n = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e._screenLeft = 0, e._screenRight = 0, e._screenTop = 0, e._screenBottom = 0, e._maxLeft = 0, e._maxRight = 0, e._maxTop = 0, e._maxBottom = 0, e._maxScale = 0, e._minScale = 0, e
                    }
                    return r(e, t), e.prototype.adjustTranslate = function(t, e) {
                        this._tr[0] * this._maxLeft + (this._tr[12] + t) > this._screenLeft && (t = this._screenLeft - this._tr[0] * this._maxLeft - this._tr[12]), this._tr[0] * this._maxRight + (this._tr[12] + t) < this._screenRight && (t = this._screenRight - this._tr[0] * this._maxRight - this._tr[12]), this._tr[5] * this._maxTop + (this._tr[13] + e) < this._screenTop && (e = this._screenTop - this._tr[5] * this._maxTop - this._tr[13]), this._tr[5] * this._maxBottom + (this._tr[13] + e) > this._screenBottom && (e = this._screenBottom - this._tr[5] * this._maxBottom - this._tr[13]);
                        var i = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]);
                        s.multiply(i, this._tr, this._tr)
                    }, e.prototype.adjustScale = function(t, e, i) {
                        var a = this.getMaxScale(),
                            r = this.getMinScale(),
                            o = i * this._tr[0];
                        o < r ? this._tr[0] > 0 && (i = r / this._tr[0]) : o > a && this._tr[0] > 0 && (i = a / this._tr[0]);
                        var n = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1]),
                            u = new Float32Array([i, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
                            h = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1]);
                        s.multiply(h, this._tr, this._tr), s.multiply(u, this._tr, this._tr), s.multiply(n, this._tr, this._tr)
                    }, e.prototype.setScreenRect = function(t, e, i, a) {
                        this._screenLeft = t, this._screenRight = e, this._screenBottom = i, this._screenTop = a
                    }, e.prototype.setMaxScreenRect = function(t, e, i, a) {
                        this._maxLeft = t, this._maxRight = e, this._maxTop = a, this._maxBottom = i
                    }, e.prototype.setMaxScale = function(t) {
                        this._maxScale = t
                    }, e.prototype.setMinScale = function(t) {
                        this._minScale = t
                    }, e.prototype.getMaxScale = function() {
                        return this._maxScale
                    }, e.prototype.getMinScale = function() {
                        return this._minScale
                    }, e.prototype.isMaxScale = function() {
                        return this.getScaleX() >= this._maxScale
                    }, e.prototype.isMinScale = function() {
                        return this.getScaleX() <= this._minScale
                    }, e.prototype.getScreenLeft = function() {
                        return this._screenLeft
                    }, e.prototype.getScreenRight = function() {
                        return this._screenRight
                    }, e.prototype.getScreenBottom = function() {
                        return this._screenBottom
                    }, e.prototype.getScreenTop = function() {
                        return this._screenTop
                    }, e.prototype.getMaxLeft = function() {
                        return this._maxLeft
                    }, e.prototype.getMaxRight = function() {
                        return this._maxRight
                    }, e.prototype.getMaxBottom = function() {
                        return this._maxBottom
                    }, e.prototype.getMaxTop = function() {
                        return this._maxTop
                    }, e
                }(s), o.CubismViewMatrix = n
            },
            7995: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(9279).Live2DCubismFramework.CubismModel,
                    n = i(2307);
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t(t) {
                        this._moc = t, this._modelCount = 0
                    }
                    return t.create = function(e) {
                        var i = null,
                            a = Live2DCubismCore.Moc.fromArrayBuffer(e);
                        return a && (i = new t(a)), i
                    }, t.delete = function(t) {
                        t._moc._release(), t._moc = null, t = null
                    }, t.prototype.createModel = function() {
                        var t = null,
                            e = Live2DCubismCore.Model.fromMoc(this._moc);
                        return e && ((t = new o(e)).initialize(), ++this._modelCount), t
                    }, t.prototype.deleteModel = function(t) {
                        null != t && (t.release(), t = null, --this._modelCount)
                    }, t.prototype.release = function() {
                        n.CSM_ASSERT(0 == this._modelCount), this._moc._release(), this._moc = null
                    }, t
                }(), a.CubismMoc = r
            },
            9279: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(9884),
                    n = i(3051),
                    s = i(3621),
                    u = i(3023),
                    h = i(2307),
                    l = n.Live2DCubismFramework.CubismFramework,
                    c = o.Live2DCubismFramework.CubismBlendMode,
                    _ = u.Live2DCubismFramework.csmVector,
                    f = s.Live2DCubismFramework.csmMap;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t(t) {
                        this._model = t, this._parameterValues = null, this._parameterMaximumValues = null, this._parameterMinimumValues = null, this._partOpacities = null, this._savedParameters = new _, this._parameterIds = new _, this._drawableIds = new _, this._partIds = new _, this._notExistPartId = new f, this._notExistParameterId = new f, this._notExistParameterValues = new f, this._notExistPartOpacities = new f
                    }
                    return t.prototype.update = function() {
                        this._model.update(), this._model.drawables.resetDynamicFlags()
                    }, t.prototype.getCanvasWidth = function() {
                        return null == this._model ? 0 : this._model.canvasinfo.CanvasWidth / this._model.canvasinfo.PixelsPerUnit
                    }, t.prototype.getCanvasHeight = function() {
                        return null == this._model ? 0 : this._model.canvasinfo.CanvasHeight / this._model.canvasinfo.PixelsPerUnit
                    }, t.prototype.saveParameters = function() {
                        for (var t = this._model.parameters.count, e = this._savedParameters.getSize(), i = 0; i < t; ++i) i < e ? this._savedParameters.set(i, this._parameterValues[i]) : this._savedParameters.pushBack(this._parameterValues[i])
                    }, t.prototype.getModel = function() {
                        return this._model
                    }, t.prototype.getPartIndex = function(t) {
                        var e, i = this._model.parts.count;
                        for (e = 0; e < i; ++e)
                            if (t == this._partIds.at(e)) return e;
                        return this._notExistPartId.isExist(t) ? this._notExistPartId.getValue(t) : (e = i + this._notExistPartId.getSize(), this._notExistPartId.setValue(t, e), this._notExistPartOpacities.appendKey(e), e)
                    }, t.prototype.getPartCount = function() {
                        return this._model.parts.count
                    }, t.prototype.setPartOpacityByIndex = function(t, e) {
                        this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.setValue(t, e) : (h.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t] = e)
                    }, t.prototype.setPartOpacityById = function(t, e) {
                        var i = this.getPartIndex(t);
                        i < 0 || this.setPartOpacityByIndex(i, e)
                    }, t.prototype.getPartOpacityByIndex = function(t) {
                        return this._notExistPartOpacities.isExist(t) ? this._notExistPartOpacities.getValue(t) : (h.CSM_ASSERT(0 <= t && t < this.getPartCount()), this._partOpacities[t])
                    }, t.prototype.getPartOpacityById = function(t) {
                        var e = this.getPartIndex(t);
                        return e < 0 ? 0 : this.getPartOpacityByIndex(e)
                    }, t.prototype.getParameterIndex = function(t) {
                        var e, i = this._model.parameters.count;
                        for (e = 0; e < i; ++e)
                            if (t == this._parameterIds.at(e)) return e;
                        return this._notExistParameterId.isExist(t) ? this._notExistParameterId.getValue(t) : (e = this._model.parameters.count + this._notExistParameterId.getSize(), this._notExistParameterId.setValue(t, e), this._notExistParameterValues.appendKey(e), e)
                    }, t.prototype.getParameterCount = function() {
                        return this._model.parameters.count
                    }, t.prototype.getParameterMaximumValue = function(t) {
                        return this._model.parameters.maximumValues[t]
                    }, t.prototype.getParameterMinimumValue = function(t) {
                        return this._model.parameters.minimumValues[t]
                    }, t.prototype.getParameterDefaultValue = function(t) {
                        return this._model.parameters.defaultValues[t]
                    }, t.prototype.getParameterValueByIndex = function(t) {
                        return this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.getValue(t) : (h.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._parameterValues[t])
                    }, t.prototype.getParameterValueById = function(t) {
                        var e = this.getParameterIndex(t);
                        return this.getParameterValueByIndex(e)
                    }, t.prototype.setParameterValueByIndex = function(t, e, i) {
                        void 0 === i && (i = 1), this._notExistParameterValues.isExist(t) ? this._notExistParameterValues.setValue(t, 1 == i ? e : this._notExistParameterValues.getValue(t) * (1 - i) + e * i) : (h.CSM_ASSERT(0 <= t && t < this.getParameterCount()), this._model.parameters.maximumValues[t] < e && (e = this._model.parameters.maximumValues[t]), this._model.parameters.minimumValues[t] > e && (e = this._model.parameters.minimumValues[t]), this._parameterValues[t] = 1 == i ? e : this._parameterValues[t] = this._parameterValues[t] * (1 - i) + e * i)
                    }, t.prototype.setParameterValueById = function(t, e, i) {
                        void 0 === i && (i = 1);
                        var a = this.getParameterIndex(t);
                        this.setParameterValueByIndex(a, e, i)
                    }, t.prototype.addParameterValueByIndex = function(t, e, i) {
                        void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) + e * i)
                    }, t.prototype.addParameterValueById = function(t, e, i) {
                        void 0 === i && (i = 1);
                        var a = this.getParameterIndex(t);
                        this.addParameterValueByIndex(a, e, i)
                    }, t.prototype.multiplyParameterValueById = function(t, e, i) {
                        void 0 === i && (i = 1);
                        var a = this.getParameterIndex(t);
                        this.multiplyParameterValueByIndex(a, e, i)
                    }, t.prototype.multiplyParameterValueByIndex = function(t, e, i) {
                        void 0 === i && (i = 1), this.setParameterValueByIndex(t, this.getParameterValueByIndex(t) * (1 + (e - 1) * i))
                    }, t.prototype.getDrawableIndex = function(t) {
                        for (var e = this._model.drawables.count, i = 0; i < e; ++i)
                            if (this._drawableIds.at(i) == t) return i;
                        return -1
                    }, t.prototype.getDrawableCount = function() {
                        return this._model.drawables.count
                    }, t.prototype.getDrawableId = function(t) {
                        var e = this._model.drawables.ids;
                        return l.getIdManager().getId(e[t])
                    }, t.prototype.getDrawableRenderOrders = function() {
                        return this._model.drawables.renderOrders
                    }, t.prototype.getDrawableTextureIndices = function(t) {
                        return this._model.drawables.textureIndices[t]
                    }, t.prototype.getDrawableDynamicFlagVertexPositionsDidChange = function(t) {
                        var e = this._model.drawables.dynamicFlags;
                        return Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(e[t])
                    }, t.prototype.getDrawableVertexIndexCount = function(t) {
                        return this._model.drawables.indexCounts[t]
                    }, t.prototype.getDrawableVertexCount = function(t) {
                        return this._model.drawables.vertexCounts[t]
                    }, t.prototype.getDrawableVertices = function(t) {
                        return this.getDrawableVertexPositions(t)
                    }, t.prototype.getDrawableVertexIndices = function(t) {
                        return this._model.drawables.indices[t]
                    }, t.prototype.getDrawableVertexPositions = function(t) {
                        return this._model.drawables.vertexPositions[t]
                    }, t.prototype.getDrawableVertexUvs = function(t) {
                        return this._model.drawables.vertexUvs[t]
                    }, t.prototype.getDrawableOpacity = function(t) {
                        return this._model.drawables.opacities[t]
                    }, t.prototype.getDrawableCulling = function(t) {
                        var e = this._model.drawables.constantFlags;
                        return !Live2DCubismCore.Utils.hasIsDoubleSidedBit(e[t])
                    }, t.prototype.getDrawableBlendMode = function(t) {
                        var e = this._model.drawables.constantFlags;
                        return Live2DCubismCore.Utils.hasBlendAdditiveBit(e[t]) ? c.CubismBlendMode_Additive : Live2DCubismCore.Utils.hasBlendMultiplicativeBit(e[t]) ? c.CubismBlendMode_Multiplicative : c.CubismBlendMode_Normal
                    }, t.prototype.getDrawableInvertedMaskBit = function(t) {
                        var e = this._model.drawables.constantFlags;
                        return Live2DCubismCore.Utils.hasIsInvertedMaskBit(e[t])
                    }, t.prototype.getDrawableMasks = function() {
                        return this._model.drawables.masks
                    }, t.prototype.getDrawableMaskCounts = function() {
                        return this._model.drawables.maskCounts
                    }, t.prototype.isUsingMasking = function() {
                        for (var t = 0; t < this._model.drawables.count; ++t)
                            if (!(this._model.drawables.maskCounts[t] <= 0)) return !0;
                        return !1
                    }, t.prototype.getDrawableDynamicFlagIsVisible = function(t) {
                        var e = this._model.drawables.dynamicFlags;
                        return Live2DCubismCore.Utils.hasIsVisibleBit(e[t])
                    }, t.prototype.getDrawableDynamicFlagVisibilityDidChange = function(t) {
                        var e = this._model.drawables.dynamicFlags;
                        return Live2DCubismCore.Utils.hasVisibilityDidChangeBit(e[t])
                    }, t.prototype.getDrawableDynamicFlagOpacityDidChange = function(t) {
                        var e = this._model.drawables.dynamicFlags;
                        return Live2DCubismCore.Utils.hasOpacityDidChangeBit(e[t])
                    }, t.prototype.getDrawableDynamicFlagRenderOrderDidChange = function(t) {
                        var e = this._model.drawables.dynamicFlags;
                        return Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(e[t])
                    }, t.prototype.loadParameters = function() {
                        var t = this._model.parameters.count,
                            e = this._savedParameters.getSize();
                        t > e && (t = e);
                        for (var i = 0; i < t; ++i) this._parameterValues[i] = this._savedParameters.at(i)
                    }, t.prototype.initialize = function() {
                        h.CSM_ASSERT(this._model), this._parameterValues = this._model.parameters.values, this._partOpacities = this._model.parts.opacities, this._parameterMaximumValues = this._model.parameters.maximumValues, this._parameterMinimumValues = this._model.parameters.minimumValues;
                        var t = this._model.parameters.ids,
                            e = this._model.parameters.count;
                        this._parameterIds.prepareCapacity(e);
                        for (var i = 0; i < e; ++i) this._parameterIds.pushBack(l.getIdManager().getId(t[i]));
                        var a = this._model.parts.ids,
                            r = this._model.parts.count;
                        for (this._partIds.prepareCapacity(r), i = 0; i < r; ++i) this._partIds.pushBack(l.getIdManager().getId(a[i]));
                        var o = this._model.drawables.ids,
                            n = this._model.drawables.count;
                        for (this._drawableIds.prepareCapacity(n), i = 0; i < n; ++i) this._drawableIds.pushBack(l.getIdManager().getId(o[i]))
                    }, t.prototype.release = function() {
                        this._model.release(), this._model = null
                    }, t
                }(), a.CubismModel = r
            },
            3141: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(9293),
                    r = i(4244),
                    o = i(3023),
                    n = i(3051).Live2DCubismFramework.CubismFramework,
                    s = o.Live2DCubismFramework.csmVector,
                    u = r.Live2DCubismFramework.csmString,
                    h = a.Live2DCubismFramework.CubismModelUserDataJson;
                ! function(t) {
                    var e = function() {};
                    t.CubismModelUserDataNode = e;
                    var i = function() {
                        function t() {
                            this._userDataNodes = new s, this._artMeshUserDataNode = new s
                        }
                        return t.create = function(e, i) {
                            var a = new t;
                            return a.parseUserData(e, i), a
                        }, t.delete = function(t) {
                            null != t && (t.release(), t = null)
                        }, t.prototype.getArtMeshUserDatas = function() {
                            return this._artMeshUserDataNode
                        }, t.prototype.parseUserData = function(t, i) {
                            for (var a = new h(t, i), r = n.getIdManager().getId("ArtMesh"), o = a.getUserDataCount(), s = 0; s < o; s++) {
                                var l = new e;
                                l.targetId = a.getUserDataId(s), l.targetType = n.getIdManager().getId(a.getUserDataTargetType(s)), l.value = new u(a.getUserDataValue(s)), this._userDataNodes.pushBack(l), l.targetType == r && this._artMeshUserDataNode.pushBack(l)
                            }
                            a.release(), a = void 0
                        }, t.prototype.release = function() {
                            for (var t = 0; t < this._userDataNodes.getSize(); ++t) this._userDataNodes.set(t, null);
                            this._userDataNodes = null
                        }, t
                    }();
                    t.CubismModelUserData = i
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            9293: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o, n, s = i(5090),
                    u = i(3051).Live2DCubismFramework.CubismFramework,
                    h = s.Live2DCubismFramework.CubismJson;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = "Meta", o = "UserData", n = function() {
                    function t(t, e) {
                        this._json = h.create(t, e)
                    }
                    return t.prototype.release = function() {
                        h.delete(this._json)
                    }, t.prototype.getUserDataCount = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("UserDataCount").toInt()
                    }, t.prototype.getTotalUserDataSize = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("TotalUserDataSize").toInt()
                    }, t.prototype.getUserDataTargetType = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString("Target").getRawString()
                    }, t.prototype.getUserDataId = function(t) {
                        return u.getIdManager().getId(this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString("Id").getRawString())
                    }, t.prototype.getUserDataValue = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString("Value").getRawString()
                    }, t
                }(), a.CubismModelUserDataJson = n
            },
            3897: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(3051),
                    n = i(6973),
                    s = i(7049),
                    u = i(9638),
                    h = i(7995),
                    l = i(8295),
                    c = i(9348),
                    _ = i(6221),
                    f = i(3141),
                    p = i(8043),
                    g = i(6849),
                    d = i(4514),
                    m = i(3754),
                    b = i(2307),
                    y = m.Live2DCubismFramework.CubismRenderer_WebGL,
                    v = d.Live2DCubismFramework.CubismEyeBlink,
                    q = g.Live2DCubismFramework.CubismBreath,
                    $ = o.Live2DCubismFramework.Constant,
                    A = p.Live2DCubismFramework.CubismPhysics,
                    x = f.Live2DCubismFramework.CubismModelUserData,
                    w = _.Live2DCubismFramework.CubismPose,
                    S = c.Live2DCubismFramework.CubismExpressionMotion,
                    L = l.Live2DCubismFramework.CubismMotion,
                    P = h.Live2DCubismFramework.CubismMoc,
                    C = u.Live2DCubismFramework.CubismModelMatrix,
                    M = s.Live2DCubismFramework.CubismTargetPoint,
                    T = n.Live2DCubismFramework.CubismMotionManager;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t(e) {
                        this.loadMotion = function(t, e, i, a) {
                            return L.create(t, e, a)
                        }, this._moc = null, this._model = null, this._motionManager = null, this._expressionManager = null, this._eyeBlink = null, this._breath = null, this._modelMatrix = null, this._pose = null, this._dragManager = null, this._physics = null, this._modelUserData = null, this._initialized = !1, this._updating = !1, this._opacity = 1, this._lipsync = !0, this._lastLipSyncValue = 0, this._dragX = 0, this._dragY = 0, this._accelerationX = 0, this._accelerationY = 0, this._accelerationZ = 0, this._debugMode = e, this._renderer = null, this._motionManager = new T, this._motionManager.setEventCallback(t.cubismDefaultMotionEventCallback, this), this._expressionManager = new T, this._dragManager = new M
                    }
                    return t.prototype.isInitialized = function() {
                        return this._initialized
                    }, t.prototype.setInitialized = function(t) {
                        this._initialized = t
                    }, t.prototype.isUpdating = function() {
                        return this._updating
                    }, t.prototype.setUpdating = function(t) {
                        this._updating = t
                    }, t.prototype.setDragging = function(t, e) {
                        this._dragManager.set(t, e)
                    }, t.prototype.setAcceleration = function(t, e, i) {
                        this._accelerationX = t, this._accelerationY = e, this._accelerationZ = i
                    }, t.prototype.getModelMatrix = function() {
                        return this._modelMatrix
                    }, t.prototype.setOpacity = function(t) {
                        this._opacity = t
                    }, t.prototype.getOpacity = function() {
                        return this._opacity
                    }, t.prototype.loadModel = function(t) {
                        this._moc = P.create(t), this._model = this._moc.createModel(), this._model.saveParameters(), null != this._moc && null != this._model ? this._modelMatrix = new C(this._model.getCanvasWidth(), this._model.getCanvasHeight()) : b.CubismLogError("Failed to CreateModel().")
                    }, t.prototype.loadExpression = function(t, e, i) {
                        return S.create(t, e)
                    }, t.prototype.loadPose = function(t, e) {
                        this._pose = w.create(t, e)
                    }, t.prototype.loadUserData = function(t, e) {
                        this._modelUserData = x.create(t, e)
                    }, t.prototype.loadPhysics = function(t, e) {
                        this._physics = A.create(t, e)
                    }, t.prototype.isHit = function(t, e, i) {
                        var a = this._model.getDrawableIndex(t);
                        if (a < 0) return !1;
                        for (var r = this._model.getDrawableVertexCount(a), o = this._model.getDrawableVertices(a), n = o[0], s = o[0], u = o[1], h = o[1], l = 1; l < r; ++l) {
                            var c = o[$.vertexOffset + l * $.vertexStep],
                                _ = o[$.vertexOffset + l * $.vertexStep + 1];
                            c < n && (n = c), c > s && (s = c), _ < u && (u = _), _ > h && (h = _)
                        }
                        var f = this._modelMatrix.invertTransformX(e),
                            p = this._modelMatrix.invertTransformY(i);
                        return n <= f && f <= s && u <= p && p <= h
                    }, t.prototype.getModel = function() {
                        return this._model
                    }, t.prototype.getRenderer = function() {
                        return this._renderer
                    }, t.prototype.createRenderer = function() {
                        this._renderer && this.deleteRenderer(), this._renderer = new y, this._renderer.initialize(this._model)
                    }, t.prototype.deleteRenderer = function() {
                        null != this._renderer && (this._renderer.release(), this._renderer = null)
                    }, t.prototype.motionEventFired = function(t) {
                        b.CubismLogInfo("{0}", t.s)
                    }, t.cubismDefaultMotionEventCallback = function(t, e, i) {
                        null != i && i.motionEventFired(e)
                    }, t.prototype.release = function() {
                        null != this._motionManager && (this._motionManager.release(), this._motionManager = null), null != this._expressionManager && (this._expressionManager.release(), this._expressionManager = null), null != this._moc && (this._moc.deleteModel(this._model), this._moc.release(), this._moc = null), this._modelMatrix = null, w.delete(this._pose), v.delete(this._eyeBlink), q.delete(this._breath), this._dragManager = null, A.delete(this._physics), x.delete(this._modelUserData), this.deleteRenderer()
                    }, t
                }(), a.CubismUserModel = r
            },
            4388: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(3191),
                    n = i(3023),
                    s = i(2307),
                    u = n.Live2DCubismFramework.csmVector,
                    h = o.Live2DCubismFramework.CubismMath;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {
                        var t = this;
                        this.setFinishedMotionHandler = function(e) {
                            return t._onFinishedMotion = e
                        }, this.getFinishedMotionHandler = function() {
                            return t._onFinishedMotion
                        }, this._fadeInSeconds = -1, this._fadeOutSeconds = -1, this._weight = 1, this._offsetSeconds = 0, this._firedEventValues = new u
                    }
                    return t.delete = function(t) {
                        t.release(), t = void 0, t = null
                    }, t.prototype.release = function() {
                        this._weight = 0
                    }, t.prototype.updateParameters = function(t, e, i) {
                        if (e.isAvailable() && !e.isFinished()) {
                            if (!e.isStarted()) {
                                e.setIsStarted(!0), e.setStartTime(i - this._offsetSeconds), e.setFadeInStartTime(i);
                                var a = this.getDuration();
                                e.getEndTime() < 0 && e.setEndTime(a <= 0 ? -1 : e.getStartTime() + a)
                            }
                            var r = this._weight;
                            r = r * (0 == this._fadeInSeconds ? 1 : h.getEasingSine((i - e.getFadeInStartTime()) / this._fadeInSeconds)) * (0 == this._fadeOutSeconds || e.getEndTime() < 0 ? 1 : h.getEasingSine((e.getEndTime() - i) / this._fadeOutSeconds)), e.setState(i, r), s.CSM_ASSERT(0 <= r && r <= 1), this.doUpdateParameters(t, i, r, e), e.getEndTime() > 0 && e.getEndTime() < i && e.setIsFinished(!0)
                        }
                    }, t.prototype.setFadeInTime = function(t) {
                        this._fadeInSeconds = t
                    }, t.prototype.setFadeOutTime = function(t) {
                        this._fadeOutSeconds = t
                    }, t.prototype.getFadeOutTime = function() {
                        return this._fadeOutSeconds
                    }, t.prototype.getFadeInTime = function() {
                        return this._fadeInSeconds
                    }, t.prototype.setWeight = function(t) {
                        this._weight = t
                    }, t.prototype.getWeight = function() {
                        return this._weight
                    }, t.prototype.getDuration = function() {
                        return -1
                    }, t.prototype.getLoopDuration = function() {
                        return -1
                    }, t.prototype.setOffsetTime = function(t) {
                        this._offsetSeconds = t
                    }, t.prototype.getFiredEvent = function(t, e) {
                        return this._firedEventValues
                    }, t
                }(), a.ACubismMotion = r
            },
            9348: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o = i(4388),
                    n = i(5090),
                    s = i(3051),
                    u = i(3023).Live2DCubismFramework.csmVector,
                    h = s.Live2DCubismFramework.CubismFramework,
                    l = n.Live2DCubismFramework.CubismJson,
                    c = o.Live2DCubismFramework.ACubismMotion;
                ! function(t) {
                    var e, i = "Parameters",
                        a = "Blend",
                        o = function(t) {
                            function o() {
                                var e = t.call(this) || this;
                                return e._parameters = new u, e
                            }
                            return r(o, t), o.create = function(t, r) {
                                var s = new o,
                                    u = l.create(t, r),
                                    c = u.getRoot();
                                s.setFadeInTime(c.getValueByString("FadeInTime").toFloat(1)), s.setFadeOutTime(c.getValueByString("FadeOutTime").toFloat(1));
                                var _ = c.getValueByString(i).getSize();
                                s._parameters.prepareCapacity(_);
                                for (var f = 0; f < _; ++f) {
                                    var p, g = c.getValueByString(i).getValueByIndex(f),
                                        d = h.getIdManager().getId(g.getValueByString("Id").getRawString()),
                                        m = g.getValueByString("Value").toFloat();
                                    p = g.getValueByString(a).isNull() || "Add" == g.getValueByString(a).getString() ? e.ExpressionBlendType_Add : "Multiply" == g.getValueByString(a).getString() ? e.ExpressionBlendType_Multiply : "Overwrite" == g.getValueByString(a).getString() ? e.ExpressionBlendType_Overwrite : e.ExpressionBlendType_Add;
                                    var b = new n;
                                    b.parameterId = d, b.blendType = p, b.value = m, s._parameters.pushBack(b)
                                }
                                return l.delete(u), s
                            }, o.prototype.doUpdateParameters = function(t, i, a, r) {
                                for (var o = 0; o < this._parameters.getSize(); ++o) {
                                    var n = this._parameters.at(o);
                                    switch (n.blendType) {
                                        case e.ExpressionBlendType_Add:
                                            t.addParameterValueById(n.parameterId, n.value, a);
                                            break;
                                        case e.ExpressionBlendType_Multiply:
                                            t.multiplyParameterValueById(n.parameterId, n.value, a);
                                            break;
                                        case e.ExpressionBlendType_Overwrite:
                                            t.setParameterValueById(n.parameterId, n.value, a)
                                    }
                                }
                            }, o
                        }(c);
                    t.CubismExpressionMotion = o,
                        function(t) {
                            t[t.ExpressionBlendType_Add = 0] = "ExpressionBlendType_Add", t[t.ExpressionBlendType_Multiply = 1] = "ExpressionBlendType_Multiply", t[t.ExpressionBlendType_Overwrite = 2] = "ExpressionBlendType_Overwrite"
                        }(e = t.ExpressionBlendType || (t.ExpressionBlendType = {}));
                    var n = function() {};
                    t.ExpressionParameter = n
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            8295: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o = i(1624),
                    n = i(5995),
                    s = i(4388),
                    u = i(3051),
                    h = i(3191),
                    l = i(4244),
                    c = i(2307),
                    _ = l.Live2DCubismFramework.csmString,
                    f = n.Live2DCubismFramework.CubismMotionData,
                    p = n.Live2DCubismFramework.CubismMotionSegment,
                    g = n.Live2DCubismFramework.CubismMotionPoint,
                    d = n.Live2DCubismFramework.CubismMotionEvent,
                    m = n.Live2DCubismFramework.CubismMotionSegmentType,
                    b = n.Live2DCubismFramework.CubismMotionCurve,
                    y = n.Live2DCubismFramework.CubismMotionCurveTarget,
                    v = h.Live2DCubismFramework.CubismMath,
                    q = u.Live2DCubismFramework.CubismFramework,
                    $ = s.Live2DCubismFramework.ACubismMotion,
                    A = o.Live2DCubismFramework.CubismMotionJson;
                ! function(t) {
                    function e(t, e, i) {
                        var a = new g;
                        return a.time = t.time + (e.time - t.time) * i, a.value = t.value + (e.value - t.value) * i, a
                    }

                    function i(t, e) {
                        var i = (e - t[0].time) / (t[1].time - t[0].time);
                        return i < 0 && (i = 0), t[0].value + (t[1].value - t[0].value) * i
                    }

                    function a(t, i) {
                        var a = (i - t[0].time) / (t[3].time - t[0].time);
                        a < 0 && (a = 0);
                        var r = e(t[0], t[1], a),
                            o = e(t[1], t[2], a),
                            n = e(t[2], t[3], a),
                            s = e(r, o, a),
                            u = e(o, n, a);
                        return e(s, u, a).value
                    }

                    function o(t, e) {
                        return t[0].value
                    }

                    function n(t, e) {
                        return t[1].value
                    }

                    function s(t, e, i) {
                        for (var a = t.curves.at(e), r = -1, o = a.baseSegmentIndex + a.segmentCount, n = 0, s = a.baseSegmentIndex; s < o; ++s)
                            if (n = t.segments.at(s).basePointIndex + (t.segments.at(s).segmentType == m.CubismMotionSegmentType_Bezier ? 3 : 1), t.points.at(n).time > i) {
                                r = s;
                                break
                            } if (-1 == r) return t.points.at(n).value;
                        var u = t.segments.at(r);
                        return u.evaluate(t.points.get(u.basePointIndex), i)
                    }
                    var u = function(t) {
                        function e() {
                            var e = t.call(this) || this;
                            return e._sourceFrameRate = 30, e._loopDurationSeconds = -1, e._isLoop = !1, e._isLoopFadeIn = !0, e._lastWeight = 0, e._motionData = null, e._modelCurveIdEyeBlink = null, e._modelCurveIdLipSync = null, e._eyeBlinkParameterIds = null, e._lipSyncParameterIds = null, e
                        }
                        return r(e, t), e.create = function(t, i, a) {
                            var r = new e;
                            return r.parse(t, i), r._sourceFrameRate = r._motionData.fps, r._loopDurationSeconds = r._motionData.duration, r._onFinishedMotion = a, r
                        }, e.prototype.doUpdateParameters = function(t, e, i, a) {
                            null == this._modelCurveIdEyeBlink && (this._modelCurveIdEyeBlink = q.getIdManager().getId("EyeBlink")), null == this._modelCurveIdLipSync && (this._modelCurveIdLipSync = q.getIdManager().getId("LipSync"));
                            var r = e - a.getStartTime();
                            r < 0 && (r = 0);
                            var o = Number.MAX_VALUE,
                                n = Number.MAX_VALUE,
                                u = 64,
                                h = 0,
                                l = 0;
                            this._eyeBlinkParameterIds.getSize() > u && c.CubismLogDebug("too many eye blink targets : {0}", this._eyeBlinkParameterIds.getSize()), this._lipSyncParameterIds.getSize() > u && c.CubismLogDebug("too many lip sync targets : {0}", this._lipSyncParameterIds.getSize());
                            var _, f, p, g = this._fadeInSeconds <= 0 ? 1 : v.getEasingSine((e - a.getFadeInStartTime()) / this._fadeInSeconds),
                                d = this._fadeOutSeconds <= 0 || a.getEndTime() < 0 ? 1 : v.getEasingSine((a.getEndTime() - e) / this._fadeOutSeconds),
                                m = r;
                            if (this._isLoop)
                                for (; m > this._motionData.duration;) m -= this._motionData.duration;
                            var b = this._motionData.curves;
                            for (f = 0; f < this._motionData.curveCount && b.at(f).type == y.CubismMotionCurveTarget_Model; ++f) _ = s(this._motionData, f, m), b.at(f).id == this._modelCurveIdEyeBlink ? n = _ : b.at(f).id == this._modelCurveIdLipSync && (o = _);
                            for (; f < this._motionData.curveCount && b.at(f).type == y.CubismMotionCurveTarget_Parameter; ++f)
                                if (-1 != (p = t.getParameterIndex(b.at(f).id))) {
                                    var $ = t.getParameterValueByIndex(p);
                                    if (_ = s(this._motionData, f, m), n != Number.MAX_VALUE)
                                        for (var A = 0; A < this._eyeBlinkParameterIds.getSize() && A < u; ++A)
                                            if (this._eyeBlinkParameterIds.at(A) == b.at(f).id) {
                                                _ *= n, l |= 1 << A;
                                                break
                                            } if (o != Number.MAX_VALUE)
                                        for (A = 0; A < this._lipSyncParameterIds.getSize() && A < u; ++A)
                                            if (this._lipSyncParameterIds.at(A) == b.at(f).id) {
                                                _ += o, h |= 1 << A;
                                                break
                                            } var x = void 0;
                                    if (b.at(f).fadeInTime < 0 && b.at(f).fadeOutTime < 0) x = $ + (_ - $) * i;
                                    else {
                                        var w, S;
                                        w = b.at(f).fadeInTime < 0 ? g : 0 == b.at(f).fadeInTime ? 1 : v.getEasingSine((e - a.getFadeInStartTime()) / b.at(f).fadeInTime), S = b.at(f).fadeOutTime < 0 ? d : 0 == b.at(f).fadeOutTime || a.getEndTime() < 0 ? 1 : v.getEasingSine((a.getEndTime() - e) / b.at(f).fadeOutTime), x = $ + (_ - $) * (this._weight * w * S)
                                    }
                                    t.setParameterValueByIndex(p, x, 1)
                                } if (n != Number.MAX_VALUE)
                                for (A = 0; A < this._eyeBlinkParameterIds.getSize() && A < u; ++A) $ = t.getParameterValueById(this._eyeBlinkParameterIds.at(A)), l >> A & 1 || (x = $ + (n - $) * i, t.setParameterValueById(this._eyeBlinkParameterIds.at(A), x));
                            if (o != Number.MAX_VALUE)
                                for (A = 0; A < this._lipSyncParameterIds.getSize() && A < u; ++A) $ = t.getParameterValueById(this._lipSyncParameterIds.at(A)), h >> A & 1 || (x = $ + (o - $) * i, t.setParameterValueById(this._lipSyncParameterIds.at(A), x));
                            for (; f < this._motionData.curveCount && b.at(f).type == y.CubismMotionCurveTarget_PartOpacity; ++f) - 1 != (p = t.getParameterIndex(b.at(f).id)) && (_ = s(this._motionData, f, m), t.setParameterValueByIndex(p, _));
                            r >= this._motionData.duration && (this._isLoop ? (a.setStartTime(e), this._isLoopFadeIn && a.setFadeInStartTime(e)) : (this._onFinishedMotion && this._onFinishedMotion(this), a.setIsFinished(!0))), this._lastWeight = i
                        }, e.prototype.setIsLoop = function(t) {
                            this._isLoop = t
                        }, e.prototype.isLoop = function() {
                            return this._isLoop
                        }, e.prototype.setIsLoopFadeIn = function(t) {
                            this._isLoopFadeIn = t
                        }, e.prototype.isLoopFadeIn = function() {
                            return this._isLoopFadeIn
                        }, e.prototype.getDuration = function() {
                            return this._isLoop ? -1 : this._loopDurationSeconds
                        }, e.prototype.getLoopDuration = function() {
                            return this._loopDurationSeconds
                        }, e.prototype.setParameterFadeInTime = function(t, e) {
                            for (var i = this._motionData.curves, a = 0; a < this._motionData.curveCount; ++a)
                                if (t == i.at(a).id) return void(i.at(a).fadeInTime = e)
                        }, e.prototype.setParameterFadeOutTime = function(t, e) {
                            for (var i = this._motionData.curves, a = 0; a < this._motionData.curveCount; ++a)
                                if (t == i.at(a).id) return void(i.at(a).fadeOutTime = e)
                        }, e.prototype.getParameterFadeInTime = function(t) {
                            for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
                                if (t == e.at(i).id) return e.at(i).fadeInTime;
                            return -1
                        }, e.prototype.getParameterFadeOutTime = function(t) {
                            for (var e = this._motionData.curves, i = 0; i < this._motionData.curveCount; ++i)
                                if (t == e.at(i).id) return e.at(i).fadeOutTime;
                            return -1
                        }, e.prototype.setEffectIds = function(t, e) {
                            this._eyeBlinkParameterIds = t, this._lipSyncParameterIds = e
                        }, e.prototype.release = function() {
                            this._motionData = void 0, this._motionData = null
                        }, e.prototype.parse = function(t, e) {
                            this._motionData = new f;
                            var r = new A(t, e);
                            this._motionData.duration = r.getMotionDuration(), this._motionData.loop = r.isMotionLoop(), this._motionData.curveCount = r.getMotionCurveCount(), this._motionData.fps = r.getMotionFps(), this._motionData.eventCount = r.getEventCount(), r.isExistMotionFadeInTime() ? this._fadeInSeconds = r.getMotionFadeInTime() < 0 ? 1 : r.getMotionFadeInTime() : this._fadeInSeconds = 1, r.isExistMotionFadeOutTime() ? this._fadeOutSeconds = r.getMotionFadeOutTime() < 0 ? 1 : r.getMotionFadeOutTime() : this._fadeOutSeconds = 1, this._motionData.curves.updateSize(this._motionData.curveCount, b, !0), this._motionData.segments.updateSize(r.getMotionTotalSegmentCount(), p, !0), this._motionData.points.updateSize(r.getMotionTotalPointCount(), g, !0), this._motionData.events.updateSize(this._motionData.eventCount, d, !0);
                            for (var s = 0, u = 0, h = 0; h < this._motionData.curveCount; ++h) {
                                "Model" == r.getMotionCurveTarget(h) ? this._motionData.curves.at(h).type = y.CubismMotionCurveTarget_Model : "Parameter" == r.getMotionCurveTarget(h) ? this._motionData.curves.at(h).type = y.CubismMotionCurveTarget_Parameter : "PartOpacity" == r.getMotionCurveTarget(h) && (this._motionData.curves.at(h).type = y.CubismMotionCurveTarget_PartOpacity), this._motionData.curves.at(h).id = r.getMotionCurveId(h), this._motionData.curves.at(h).baseSegmentIndex = u, this._motionData.curves.at(h).fadeInTime = r.isExistMotionCurveFadeInTime(h) ? r.getMotionCurveFadeInTime(h) : -1, this._motionData.curves.at(h).fadeOutTime = r.isExistMotionCurveFadeOutTime(h) ? r.getMotionCurveFadeOutTime(h) : -1;
                                for (var l = 0; l < r.getMotionCurveSegmentCount(h);) {
                                    switch (0 == l ? (this._motionData.segments.at(u).basePointIndex = s, this._motionData.points.at(s).time = r.getMotionCurveSegment(h, l), this._motionData.points.at(s).value = r.getMotionCurveSegment(h, l + 1), s += 1, l += 2) : this._motionData.segments.at(u).basePointIndex = s - 1, r.getMotionCurveSegment(h, l)) {
                                        case m.CubismMotionSegmentType_Linear:
                                            this._motionData.segments.at(u).segmentType = m.CubismMotionSegmentType_Linear, this._motionData.segments.at(u).evaluate = i, this._motionData.points.at(s).time = r.getMotionCurveSegment(h, l + 1), this._motionData.points.at(s).value = r.getMotionCurveSegment(h, l + 2), s += 1, l += 3;
                                            break;
                                        case m.CubismMotionSegmentType_Bezier:
                                            this._motionData.segments.at(u).segmentType = m.CubismMotionSegmentType_Bezier, this._motionData.segments.at(u).evaluate = a, this._motionData.points.at(s).time = r.getMotionCurveSegment(h, l + 1), this._motionData.points.at(s).value = r.getMotionCurveSegment(h, l + 2), this._motionData.points.at(s + 1).time = r.getMotionCurveSegment(h, l + 3), this._motionData.points.at(s + 1).value = r.getMotionCurveSegment(h, l + 4), this._motionData.points.at(s + 2).time = r.getMotionCurveSegment(h, l + 5), this._motionData.points.at(s + 2).value = r.getMotionCurveSegment(h, l + 6), s += 3, l += 7;
                                            break;
                                        case m.CubismMotionSegmentType_Stepped:
                                            this._motionData.segments.at(u).segmentType = m.CubismMotionSegmentType_Stepped, this._motionData.segments.at(u).evaluate = o, this._motionData.points.at(s).time = r.getMotionCurveSegment(h, l + 1), this._motionData.points.at(s).value = r.getMotionCurveSegment(h, l + 2), s += 1, l += 3;
                                            break;
                                        case m.CubismMotionSegmentType_InverseStepped:
                                            this._motionData.segments.at(u).segmentType = m.CubismMotionSegmentType_InverseStepped, this._motionData.segments.at(u).evaluate = n, this._motionData.points.at(s).time = r.getMotionCurveSegment(h, l + 1), this._motionData.points.at(s).value = r.getMotionCurveSegment(h, l + 2), s += 1, l += 3;
                                            break;
                                        default:
                                            c.CSM_ASSERT(0)
                                    }++this._motionData.curves.at(h).segmentCount, ++u
                                }
                            }
                            for (var _ = 0; _ < r.getEventCount(); ++_) this._motionData.events.at(_).fireTime = r.getEventTime(_), this._motionData.events.at(_).value = r.getEventValue(_);
                            r.release(), r = void 0, r = null
                        }, e.prototype.getFiredEvent = function(t, e) {
                            this._firedEventValues.updateSize(0);
                            for (var i = 0; i < this._motionData.eventCount; ++i) this._motionData.events.at(i).fireTime > t && this._motionData.events.at(i).fireTime <= e && this._firedEventValues.pushBack(new _(this._motionData.events.at(i).value.s));
                            return this._firedEventValues
                        }, e
                    }($);
                    t.CubismMotion = u
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            5995: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(3023).Live2DCubismFramework.csmVector;
                ! function(t) {
                    var e, i;
                    ! function(t) {
                        t[t.CubismMotionCurveTarget_Model = 0] = "CubismMotionCurveTarget_Model", t[t.CubismMotionCurveTarget_Parameter = 1] = "CubismMotionCurveTarget_Parameter", t[t.CubismMotionCurveTarget_PartOpacity = 2] = "CubismMotionCurveTarget_PartOpacity"
                    }(e = t.CubismMotionCurveTarget || (t.CubismMotionCurveTarget = {})), (i = t.CubismMotionSegmentType || (t.CubismMotionSegmentType = {}))[i.CubismMotionSegmentType_Linear = 0] = "CubismMotionSegmentType_Linear", i[i.CubismMotionSegmentType_Bezier = 1] = "CubismMotionSegmentType_Bezier", i[i.CubismMotionSegmentType_Stepped = 2] = "CubismMotionSegmentType_Stepped", i[i.CubismMotionSegmentType_InverseStepped = 3] = "CubismMotionSegmentType_InverseStepped";
                    t.CubismMotionPoint = function() {
                        this.time = 0, this.value = 0
                    };
                    t.CubismMotionSegment = function() {
                        this.evaluate = null, this.basePointIndex = 0, this.segmentType = 0
                    };
                    t.CubismMotionCurve = function() {
                        this.type = e.CubismMotionCurveTarget_Model, this.segmentCount = 0, this.baseSegmentIndex = 0, this.fadeInTime = 0, this.fadeOutTime = 0
                    };
                    t.CubismMotionEvent = function() {
                        this.fireTime = 0
                    };
                    t.CubismMotionData = function() {
                        this.duration = 0, this.loop = !1, this.curveCount = 0, this.eventCount = 0, this.fps = 0, this.curves = new a, this.segments = new a, this.points = new a, this.events = new a
                    }
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            1624: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o, n, s, u, h, l, c = i(5090),
                    _ = i(3051),
                    f = i(4244).Live2DCubismFramework.csmString,
                    p = _.Live2DCubismFramework.CubismFramework,
                    g = c.Live2DCubismFramework.CubismJson;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = "Meta", o = "Curves", n = "FadeInTime", s = "FadeOutTime", u = "Segments", h = "UserData", l = function() {
                    function t(t, e) {
                        this._json = g.create(t, e)
                    }
                    return t.prototype.release = function() {
                        g.delete(this._json)
                    }, t.prototype.getMotionDuration = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("Duration").toFloat()
                    }, t.prototype.isMotionLoop = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("Loop").toBoolean()
                    }, t.prototype.getMotionCurveCount = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("CurveCount").toInt()
                    }, t.prototype.getMotionFps = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("Fps").toFloat()
                    }, t.prototype.getMotionTotalSegmentCount = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("TotalSegmentCount").toInt()
                    }, t.prototype.getMotionTotalPointCount = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("TotalPointCount").toInt()
                    }, t.prototype.isExistMotionFadeInTime = function() {
                        return !this._json.getRoot().getValueByString(r).getValueByString(n).isNull()
                    }, t.prototype.isExistMotionFadeOutTime = function() {
                        return !this._json.getRoot().getValueByString(r).getValueByString(s).isNull()
                    }, t.prototype.getMotionFadeInTime = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString(n).toFloat()
                    }, t.prototype.getMotionFadeOutTime = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString(s).toFloat()
                    }, t.prototype.getMotionCurveTarget = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString("Target").getRawString()
                    }, t.prototype.getMotionCurveId = function(t) {
                        return p.getIdManager().getId(this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString("Id").getRawString())
                    }, t.prototype.isExistMotionCurveFadeInTime = function(t) {
                        return !this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(n).isNull()
                    }, t.prototype.isExistMotionCurveFadeOutTime = function(t) {
                        return !this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(s).isNull()
                    }, t.prototype.getMotionCurveFadeInTime = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(n).toFloat()
                    }, t.prototype.getMotionCurveFadeOutTime = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(s).toFloat()
                    }, t.prototype.getMotionCurveSegmentCount = function(t) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(u).getVector().getSize()
                    }, t.prototype.getMotionCurveSegment = function(t, e) {
                        return this._json.getRoot().getValueByString(o).getValueByIndex(t).getValueByString(u).getValueByIndex(e).toFloat()
                    }, t.prototype.getEventCount = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("UserDataCount").toInt()
                    }, t.prototype.getTotalEventValueSize = function() {
                        return this._json.getRoot().getValueByString(r).getValueByString("TotalUserDataSize").toInt()
                    }, t.prototype.getEventTime = function(t) {
                        return this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString("Time").toInt()
                    }, t.prototype.getEventValue = function(t) {
                        return new f(this._json.getRoot().getValueByString(h).getValueByIndex(t).getValueByString("Value").getRawString())
                    }, t
                }(), a.CubismMotionJson = l
            },
            6973: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o, n, s = i(4585).Live2DCubismFramework.CubismMotionQueueManager;
                o = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), n = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e._currentPriority = 0, e._reservePriority = 0, e
                    }
                    return r(e, t), e.prototype.getCurrentPriority = function() {
                        return this._currentPriority
                    }, e.prototype.getReservePriority = function() {
                        return this._reservePriority
                    }, e.prototype.setReservePriority = function(t) {
                        this._reservePriority = t
                    }, e.prototype.startMotionPriority = function(e, i, a) {
                        return a == this._reservePriority && (this._reservePriority = 0), this._currentPriority = a, t.prototype.startMotion.call(this, e, i, this._userTimeSeconds)
                    }, e.prototype.updateMotion = function(e, i) {
                        this._userTimeSeconds += i;
                        var a = t.prototype.doUpdateMotion.call(this, e, this._userTimeSeconds);
                        return this.isFinished() && (this._currentPriority = 0), a
                    }, e.prototype.reserveMotion = function(t) {
                        return !(t <= this._reservePriority || t <= this._currentPriority || (this._reservePriority = t, 0))
                    }, e
                }(s), o.CubismMotionManager = n
            },
            1406: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(4388).Live2DCubismFramework.ACubismMotion;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {
                        this._autoDelete = !1, this._motion = null, this._available = !0, this._finished = !1, this._started = !1, this._startTimeSeconds = -1, this._fadeInStartTimeSeconds = 0, this._endTimeSeconds = -1, this._stateTimeSeconds = 0, this._stateWeight = 0, this._lastEventCheckSeconds = 0, this._motionQueueEntryHandle = this
                    }
                    return t.prototype.release = function() {
                        this._autoDelete && this._motion && o.delete(this._motion)
                    }, t.prototype.startFadeout = function(t, e) {
                        var i = e + t;
                        (this._endTimeSeconds < 0 || i < this._endTimeSeconds) && (this._endTimeSeconds = i)
                    }, t.prototype.isFinished = function() {
                        return this._finished
                    }, t.prototype.isStarted = function() {
                        return this._started
                    }, t.prototype.getStartTime = function() {
                        return this._startTimeSeconds
                    }, t.prototype.getFadeInStartTime = function() {
                        return this._fadeInStartTimeSeconds
                    }, t.prototype.getEndTime = function() {
                        return this._endTimeSeconds
                    }, t.prototype.setStartTime = function(t) {
                        this._startTimeSeconds = t
                    }, t.prototype.setFadeInStartTime = function(t) {
                        this._fadeInStartTimeSeconds = t
                    }, t.prototype.setEndTime = function(t) {
                        this._endTimeSeconds = t
                    }, t.prototype.setIsFinished = function(t) {
                        this._finished = t
                    }, t.prototype.setIsStarted = function(t) {
                        this._started = t
                    }, t.prototype.isAvailable = function() {
                        return this._available
                    }, t.prototype.setIsAvailable = function(t) {
                        this._available = t
                    }, t.prototype.setState = function(t, e) {
                        this._stateTimeSeconds = t, this._stateWeight = e
                    }, t.prototype.getStateTime = function() {
                        return this._stateTimeSeconds
                    }, t.prototype.getStateWeight = function() {
                        return this._stateWeight
                    }, t.prototype.getLastCheckEventTime = function() {
                        return this._lastEventCheckSeconds
                    }, t.prototype.setLastCheckEventTime = function(t) {
                        this._lastEventCheckSeconds = t
                    }, t
                }(), a.CubismMotionQueueEntry = r
            },
            4585: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o = i(1406),
                    n = i(3023).Live2DCubismFramework.csmVector,
                    s = o.Live2DCubismFramework.CubismMotionQueueEntry;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = function() {
                    function t() {
                        this._userTimeSeconds = 0, this._eventCallBack = null, this._eventCustomData = null, this._motions = new n
                    }
                    return t.prototype.release = function() {
                        for (var t = 0; t < this._motions.getSize(); ++t) this._motions.at(t) && (this._motions.at(t).release(), this._motions.set(t, void 0), this._motions.set(t, null));
                        this._motions = null
                    }, t.prototype.startMotion = function(t, e, i) {
                        if (null == t) return a.InvalidMotionQueueEntryHandleValue;
                        for (var r = null, o = 0; o < this._motions.getSize(); ++o) null != (r = this._motions.at(o)) && r.startFadeout(r._motion.getFadeOutTime(), i);
                        return (r = new s)._autoDelete = e, r._motion = t, this._motions.pushBack(r), r._motionQueueEntryHandle
                    }, t.prototype.isFinished = function() {
                        for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                            var e = t.ptr();
                            if (null != e)
                                if (null != e._motion) {
                                    if (!e.isFinished()) return !1;
                                    t.preIncrement()
                                } else e.release(), e = void 0, e = null, t = this._motions.erase(t);
                            else t = this._motions.erase(t)
                        }
                        return !0
                    }, t.prototype.isFinishedByHandle = function(t) {
                        for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.increment()) {
                            var i = e.ptr();
                            if (null != i && i._motionQueueEntryHandle == t && !i.isFinished()) return !1
                        }
                        return !0
                    }, t.prototype.stopAllMotions = function() {
                        for (var t = this._motions.begin(); t.notEqual(this._motions.end());) {
                            var e = t.ptr();
                            null != e ? (e.release(), e = void 0, e = null, t = this._motions.erase(t)) : t = this._motions.erase(t)
                        }
                    }, t.prototype.getCubismMotionQueueEntry = function(t) {
                        for (var e = this._motions.begin(); e.notEqual(this._motions.end()); e.preIncrement()) {
                            var i = e.ptr();
                            if (null != i && i._motionQueueEntryHandle == t) return i
                        }
                        return null
                    }, t.prototype.setEventCallback = function(t, e) {
                        void 0 === e && (e = null), this._eventCallBack = t, this._eventCustomData = e
                    }, t.prototype.doUpdateMotion = function(t, e) {
                        for (var i = !1, a = this._motions.begin(); a.notEqual(this._motions.end());) {
                            var r = a.ptr();
                            if (null != r) {
                                var o = r._motion;
                                if (null != o) {
                                    o.updateParameters(t, r, e), i = !0;
                                    for (var n = o.getFiredEvent(r.getLastCheckEventTime() - r.getStartTime(), e - r.getStartTime()), s = 0; s < n.getSize(); ++s) this._eventCallBack(this, n.at(s), this._eventCustomData);
                                    r.setLastCheckEventTime(e), r.isFinished() ? (r.release(), r = void 0, r = null, a = this._motions.erase(a)) : a.preIncrement()
                                } else r.release(), r = void 0, r = null, a = this._motions.erase(a)
                            } else a = this._motions.erase(a)
                        }
                        return i
                    }, t
                }(), a.CubismMotionQueueManager = r, a.InvalidMotionQueueEntryHandleValue = -1
            },
            8043: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(8576),
                    r = i(9743),
                    o = i(3191),
                    n = i(2128).Live2DCubismFramework.CubismPhysicsJson,
                    s = o.Live2DCubismFramework.CubismMath,
                    u = a.Live2DCubismFramework.CubismPhysicsRig,
                    h = a.Live2DCubismFramework.CubismPhysicsSubRig,
                    l = a.Live2DCubismFramework.CubismPhysicsInput,
                    c = a.Live2DCubismFramework.CubismPhysicsOutput,
                    _ = a.Live2DCubismFramework.CubismPhysicsParticle,
                    f = a.Live2DCubismFramework.CubismPhysicsSource,
                    p = a.Live2DCubismFramework.CubismPhysicsTargetType,
                    g = r.Live2DCubismFramework.CubismVector2;
                ! function(t) {
                    var e = "Angle",
                        i = function() {
                            function t() {
                                this._physicsRig = null, this._options = new a, this._options.gravity.y = -1, this._options.gravity.x = 0, this._options.wind.x = 0, this._options.wind.y = 0
                            }
                            return t.create = function(e, i) {
                                var a = new t;
                                return a.parse(e, i), a._physicsRig.gravity.y = 0, a
                            }, t.delete = function(t) {
                                null != t && (t.release(), t = null)
                            }, t.prototype.evaluate = function(t, e) {
                                var i, a, r, o, n, u, h, l, c, _, f, p, d = new g;
                                c = t.getModel().parameters.values, _ = t.getModel().parameters.maximumValues, f = t.getModel().parameters.minimumValues, p = t.getModel().parameters.defaultValues;
                                for (var m = 0; m < this._physicsRig.subRigCount; ++m) {
                                    i = {
                                        angle: 0
                                    }, d.x = 0, d.y = 0, n = this._physicsRig.settings.at(m), u = this._physicsRig.inputs.get(n.baseInputIndex), h = this._physicsRig.outputs.get(n.baseOutputIndex), l = this._physicsRig.particles.get(n.baseParticleIndex);
                                    for (var b = 0; b < n.inputCount; ++b) a = u[b].weight / 100, -1 == u[b].sourceParameterIndex && (u[b].sourceParameterIndex = t.getParameterIndex(u[b].source.id)), u[b].getNormalizedParameterValue(d, i, c[u[b].sourceParameterIndex], f[u[b].sourceParameterIndex], _[u[b].sourceParameterIndex], p[u[b].sourceParameterIndex], n.normalizationPosition, n.normalizationAngle, u[0].reflect, a);
                                    for (r = s.degreesToRadian(-i.angle), d.x = d.x * s.cos(r) - d.y * s.sin(r), d.y = d.x * s.sin(r) + d.y * s.cos(r), A(l, n.particleCount, d, i.angle, this._options.wind, .001 * n.normalizationPosition.maximum, e, 5), b = 0; b < n.outputCount; ++b) {
                                        var y = h[b].vertexIndex;
                                        if (y < 1 || y >= n.particleCount) break; - 1 == h[b].destinationParameterIndex && (h[b].destinationParameterIndex = t.getParameterIndex(h[b].destination.id));
                                        var v = new g;
                                        v.x = l[y].position.x - l[y - 1].position.x, v.y = l[y].position.y - l[y - 1].position.y, o = h[b].getValue(v, l, y, h[b].reflect, this._options.gravity);
                                        var q = h[b].destinationParameterIndex,
                                            $ = !Float32Array.prototype.slice && "subarray" in Float32Array.prototype ? JSON.parse(JSON.stringify(c.subarray(q))) : c.slice(q);
                                        x($, f[q], _[q], o, h[b]);
                                        for (var w = q, S = 0; w < c.length; w++, S++) c[w] = $[S]
                                    }
                                }
                            }, t.prototype.setOptions = function(t) {
                                this._options = t
                            }, t.prototype.getOption = function() {
                                return this._options
                            }, t.prototype.release = function() {
                                this._physicsRig = void 0, this._physicsRig = null
                            }, t.prototype.parse = function(t, i) {
                                this._physicsRig = new u;
                                var a = new n(t, i);
                                this._physicsRig.gravity = a.getGravity(), this._physicsRig.wind = a.getWind(), this._physicsRig.subRigCount = a.getSubRigCount(), this._physicsRig.settings.updateSize(this._physicsRig.subRigCount, h, !0), this._physicsRig.inputs.updateSize(a.getTotalInputCount(), l, !0), this._physicsRig.outputs.updateSize(a.getTotalOutputCount(), c, !0), this._physicsRig.particles.updateSize(a.getVertexCount(), _, !0);
                                for (var s = 0, g = 0, A = 0, x = 0; x < this._physicsRig.settings.getSize(); ++x) {
                                    this._physicsRig.settings.at(x).normalizationPosition.minimum = a.getNormalizationPositionMinimumValue(x), this._physicsRig.settings.at(x).normalizationPosition.maximum = a.getNormalizationPositionMaximumValue(x), this._physicsRig.settings.at(x).normalizationPosition.defalut = a.getNormalizationPositionDefaultValue(x), this._physicsRig.settings.at(x).normalizationAngle.minimum = a.getNormalizationAngleMinimumValue(x), this._physicsRig.settings.at(x).normalizationAngle.maximum = a.getNormalizationAngleMaximumValue(x), this._physicsRig.settings.at(x).normalizationAngle.defalut = a.getNormalizationAngleDefaultValue(x), this._physicsRig.settings.at(x).inputCount = a.getInputCount(x), this._physicsRig.settings.at(x).baseInputIndex = s;
                                    for (var w = 0; w < this._physicsRig.settings.at(x).inputCount; ++w) this._physicsRig.inputs.at(s + w).sourceParameterIndex = -1, this._physicsRig.inputs.at(s + w).weight = a.getInputWeight(x, w), this._physicsRig.inputs.at(s + w).reflect = a.getInputReflect(x, w), "X" == a.getInputType(x, w) ? (this._physicsRig.inputs.at(s + w).type = f.CubismPhysicsSource_X, this._physicsRig.inputs.at(s + w).getNormalizedParameterValue = r) : "Y" == a.getInputType(x, w) ? (this._physicsRig.inputs.at(s + w).type = f.CubismPhysicsSource_Y, this._physicsRig.inputs.at(s + w).getNormalizedParameterValue = o) : a.getInputType(x, w) == e && (this._physicsRig.inputs.at(s + w).type = f.CubismPhysicsSource_Angle, this._physicsRig.inputs.at(s + w).getNormalizedParameterValue = d), this._physicsRig.inputs.at(s + w).source.targetType = p.CubismPhysicsTargetType_Parameter, this._physicsRig.inputs.at(s + w).source.id = a.getInputSourceId(x, w);
                                    for (s += this._physicsRig.settings.at(x).inputCount, this._physicsRig.settings.at(x).outputCount = a.getOutputCount(x), this._physicsRig.settings.at(x).baseOutputIndex = g, w = 0; w < this._physicsRig.settings.at(x).outputCount; ++w) this._physicsRig.outputs.at(g + w).destinationParameterIndex = -1, this._physicsRig.outputs.at(g + w).vertexIndex = a.getOutputVertexIndex(x, w), this._physicsRig.outputs.at(g + w).angleScale = a.getOutputAngleScale(x, w), this._physicsRig.outputs.at(g + w).weight = a.getOutputWeight(x, w), this._physicsRig.outputs.at(g + w).destination.targetType = p.CubismPhysicsTargetType_Parameter, this._physicsRig.outputs.at(g + w).destination.id = a.getOutputDestinationId(x, w), "X" == a.getOutputType(x, w) ? (this._physicsRig.outputs.at(g + w).type = f.CubismPhysicsSource_X, this._physicsRig.outputs.at(g + w).getValue = m, this._physicsRig.outputs.at(g + w).getScale = v) : "Y" == a.getOutputType(x, w) ? (this._physicsRig.outputs.at(g + w).type = f.CubismPhysicsSource_Y, this._physicsRig.outputs.at(g + w).getValue = b, this._physicsRig.outputs.at(g + w).getScale = q) : a.getOutputType(x, w) == e && (this._physicsRig.outputs.at(g + w).type = f.CubismPhysicsSource_Angle, this._physicsRig.outputs.at(g + w).getValue = y, this._physicsRig.outputs.at(g + w).getScale = $), this._physicsRig.outputs.at(g + w).reflect = a.getOutputReflect(x, w);
                                    for (g += this._physicsRig.settings.at(x).outputCount, this._physicsRig.settings.at(x).particleCount = a.getParticleCount(x), this._physicsRig.settings.at(x).baseParticleIndex = A, w = 0; w < this._physicsRig.settings.at(x).particleCount; ++w) this._physicsRig.particles.at(A + w).mobility = a.getParticleMobility(x, w), this._physicsRig.particles.at(A + w).delay = a.getParticleDelay(x, w), this._physicsRig.particles.at(A + w).acceleration = a.getParticleAcceleration(x, w), this._physicsRig.particles.at(A + w).radius = a.getParticleRadius(x, w), this._physicsRig.particles.at(A + w).position = a.getParticlePosition(x, w);
                                    A += this._physicsRig.settings.at(x).particleCount
                                }
                                this.initialize(), a.release(), a = void 0, a = null
                            }, t.prototype.initialize = function() {
                                for (var t, e, i, a = 0; a < this._physicsRig.subRigCount; ++a) {
                                    e = this._physicsRig.settings.at(a), (t = this._physicsRig.particles.get(e.baseParticleIndex))[0].initialPosition = new g(0, 0), t[0].lastPosition = new g(t[0].initialPosition.x, t[0].initialPosition.y), t[0].lastGravity = new g(0, -1), t[0].lastGravity.y *= -1, t[0].velocity = new g(0, 0), t[0].force = new g(0, 0);
                                    for (var r = 1; r < e.particleCount; ++r)(i = new g(0, 0)).y = t[r].radius, t[r].initialPosition = new g(t[r - 1].initialPosition.x + i.x, t[r - 1].initialPosition.y + i.y), t[r].position = new g(t[r].initialPosition.x, t[r].initialPosition.y), t[r].lastPosition = new g(t[r].initialPosition.x, t[r].initialPosition.y), t[r].lastGravity = new g(0, -1), t[r].lastGravity.y *= -1, t[r].velocity = new g(0, 0), t[r].force = new g(0, 0)
                                }
                            }, t
                        }();
                    t.CubismPhysics = i;
                    var a = function() {
                        this.gravity = new g(0, 0), this.wind = new g(0, 0)
                    };

                    function r(t, e, i, a, r, o, n, s, u, h) {
                        t.x += w(i, a, r, 0, n.minimum, n.maximum, n.defalut, u) * h
                    }

                    function o(t, e, i, a, r, o, n, s, u, h) {
                        t.y += w(i, a, r, 0, n.minimum, n.maximum, n.defalut, u) * h
                    }

                    function d(t, e, i, a, r, o, n, s, u, h) {
                        e.angle += w(i, a, r, 0, s.minimum, s.maximum, s.defalut, u) * h
                    }

                    function m(t, e, i, a, r) {
                        var o = t.x;
                        return a && (o *= -1), o
                    }

                    function b(t, e, i, a, r) {
                        var o = t.y;
                        return a && (o *= -1), o
                    }

                    function y(t, e, i, a, r) {
                        var o;
                        return r = i >= 2 ? e[i - 1].position.substract(e[i - 2].position) : r.multiplyByScaler(-1), o = s.directionToRadian(r, t), a && (o *= -1), o
                    }

                    function v(t, e) {
                        return JSON.parse(JSON.stringify(t.x))
                    }

                    function q(t, e) {
                        return JSON.parse(JSON.stringify(t.y))
                    }

                    function $(t, e) {
                        return JSON.parse(JSON.stringify(e))
                    }

                    function A(t, e, i, a, r, o, n, u) {
                        var h, l, c, _, f = new g(0, 0),
                            p = new g(0, 0),
                            d = new g(0, 0),
                            m = new g(0, 0);
                        t[0].position = new g(i.x, i.y), h = s.degreesToRadian(a), (_ = s.radianToDirection(h)).normalize();
                        for (var b = 1; b < e; ++b) t[b].force = _.multiplyByScaler(t[b].acceleration).add(r), t[b].lastPosition = new g(t[b].position.x, t[b].position.y), l = t[b].delay * n * 30, f = t[b].position.substract(t[b - 1].position), c = s.directionToRadian(t[b].lastGravity, _) / u, f.x = s.cos(c) * f.x - f.y * s.sin(c), f.y = s.sin(c) * f.x + f.y * s.cos(c), t[b].position = t[b - 1].position.add(f), p = t[b].velocity.multiplyByScaler(l), d = t[b].force.multiplyByScaler(l).multiplyByScaler(l), t[b].position = t[b].position.add(p).add(d), (m = t[b].position.substract(t[b - 1].position)).normalize(), t[b].position = t[b - 1].position.add(m.multiplyByScaler(t[b].radius)), s.abs(t[b].position.x) < o && (t[b].position.x = 0), 0 != l && (t[b].velocity = t[b].position.substract(t[b].lastPosition), t[b].velocity = t[b].velocity.divisionByScalar(l), t[b].velocity = t[b].velocity.multiplyByScaler(t[b].mobility)), t[b].force = new g(0, 0), t[b].lastGravity = new g(_.x, _.y)
                    }

                    function x(t, e, i, a, r) {
                        var o, n;
                        (o = a * r.getScale(r.translationScale, r.angleScale)) < e ? (o < r.valueBelowMinimum && (r.valueBelowMinimum = o), o = e) : o > i && (o > r.valueExceededMaximum && (r.valueExceededMaximum = o), o = i), (n = r.weight / 100) >= 1 || (o = t[0] * (1 - n) + o * n), t[0] = o
                    }

                    function w(t, e, i, a, r, o, n, u) {
                        var h = 0,
                            l = s.max(i, e);
                        l < t && (t = l);
                        var c = s.min(i, e);
                        c > t && (t = c);
                        var _, f, p = s.min(r, o),
                            g = s.max(r, o),
                            d = n,
                            m = (_ = c, f = l, s.min(_, f) + function(t, e) {
                                var i = s.max(t, e),
                                    a = s.min(t, e);
                                return s.abs(i - a)
                            }(_, f) / 2),
                            b = t - m;
                        switch (function(t) {
                                var e = 0;
                                return t > 0 ? e = 1 : t < 0 && (e = -1), e
                            }(b)) {
                            case 1:
                                var y = g - d;
                                0 != (v = l - m) && (h = b * (y / v), h += d);
                                break;
                            case -1:
                                var v;
                                y = p - d, 0 != (v = c - m) && (h = b * (y / v), h += d);
                                break;
                            case 0:
                                h = d
                        }
                        return u ? h : -1 * h
                    }
                    t.Options = a
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            8576: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(9743),
                    r = i(3023).Live2DCubismFramework.csmVector,
                    o = a.Live2DCubismFramework.CubismVector2;
                ! function(t) {
                    var e, i;
                    (i = t.CubismPhysicsTargetType || (t.CubismPhysicsTargetType = {}))[i.CubismPhysicsTargetType_Parameter = 0] = "CubismPhysicsTargetType_Parameter", (e = t.CubismPhysicsSource || (t.CubismPhysicsSource = {}))[e.CubismPhysicsSource_X = 0] = "CubismPhysicsSource_X", e[e.CubismPhysicsSource_Y = 1] = "CubismPhysicsSource_Y", e[e.CubismPhysicsSource_Angle = 2] = "CubismPhysicsSource_Angle";
                    t.PhysicsJsonEffectiveForces = function() {
                        this.gravity = new o(0, 0), this.wind = new o(0, 0)
                    };
                    var a = function() {};
                    t.CubismPhysicsParameter = a;
                    var n = function() {};
                    t.CubismPhysicsNormalization = n;
                    t.CubismPhysicsParticle = function() {
                        this.initialPosition = new o(0, 0), this.position = new o(0, 0), this.lastPosition = new o(0, 0), this.lastGravity = new o(0, 0), this.force = new o(0, 0), this.velocity = new o(0, 0)
                    };
                    t.CubismPhysicsSubRig = function() {
                        this.normalizationPosition = new n, this.normalizationAngle = new n
                    };
                    t.CubismPhysicsInput = function() {
                        this.source = new a
                    };
                    t.CubismPhysicsOutput = function() {
                        this.destination = new a, this.translationScale = new o(0, 0)
                    };
                    t.CubismPhysicsRig = function() {
                        this.settings = new r, this.inputs = new r, this.outputs = new r, this.particles = new r, this.gravity = new o(0, 0), this.wind = new o(0, 0)
                    }
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            2128: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a, r, o, n, s, u, h, l, c, _, f, p, g, d, m, b, y, v, q, $ = i(5090),
                    A = i(9743),
                    x = i(3051).Live2DCubismFramework.CubismFramework,
                    w = A.Live2DCubismFramework.CubismVector2,
                    S = $.Live2DCubismFramework.CubismJson;
                a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), r = "Position", o = "Angle", n = "Type", s = "Meta", u = "EffectiveForces", h = "Gravity", l = "Wind", c = "PhysicsSettings", _ = "Normalization", f = "Minimum", p = "Maximum", g = "Default", d = "Reflect", m = "Weight", b = "Input", y = "Output", v = "Vertices", q = function() {
                    function t(t, e) {
                        this._json = S.create(t, e)
                    }
                    return t.prototype.release = function() {
                        S.delete(this._json)
                    }, t.prototype.getGravity = function() {
                        var t = new w(0, 0);
                        return t.x = this._json.getRoot().getValueByString(s).getValueByString(u).getValueByString(h).getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(s).getValueByString(u).getValueByString(h).getValueByString("Y").toFloat(), t
                    }, t.prototype.getWind = function() {
                        var t = new w(0, 0);
                        return t.x = this._json.getRoot().getValueByString(s).getValueByString(u).getValueByString(l).getValueByString("X").toFloat(), t.y = this._json.getRoot().getValueByString(s).getValueByString(u).getValueByString(l).getValueByString("Y").toFloat(), t
                    }, t.prototype.getSubRigCount = function() {
                        return this._json.getRoot().getValueByString(s).getValueByString("PhysicsSettingCount").toInt()
                    }, t.prototype.getTotalInputCount = function() {
                        return this._json.getRoot().getValueByString(s).getValueByString("TotalInputCount").toInt()
                    }, t.prototype.getTotalOutputCount = function() {
                        return this._json.getRoot().getValueByString(s).getValueByString("TotalOutputCount").toInt()
                    }, t.prototype.getVertexCount = function() {
                        return this._json.getRoot().getValueByString(s).getValueByString("VertexCount").toInt()
                    }, t.prototype.getNormalizationPositionMinimumValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(r).getValueByString(f).toFloat()
                    }, t.prototype.getNormalizationPositionMaximumValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(r).getValueByString(p).toFloat()
                    }, t.prototype.getNormalizationPositionDefaultValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(r).getValueByString(g).toFloat()
                    }, t.prototype.getNormalizationAngleMinimumValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(o).getValueByString(f).toFloat()
                    }, t.prototype.getNormalizationAngleMaximumValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(o).getValueByString(p).toFloat()
                    }, t.prototype.getNormalizationAngleDefaultValue = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(_).getValueByString(o).getValueByString(g).toFloat()
                    }, t.prototype.getInputCount = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(b).getVector().getSize()
                    }, t.prototype.getInputWeight = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(b).getValueByIndex(e).getValueByString(m).toFloat()
                    }, t.prototype.getInputReflect = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(b).getValueByIndex(e).getValueByString(d).toBoolean()
                    }, t.prototype.getInputType = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(b).getValueByIndex(e).getValueByString(n).getRawString()
                    }, t.prototype.getInputSourceId = function(t, e) {
                        return x.getIdManager().getId(this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(b).getValueByIndex(e).getValueByString("Source").getValueByString("Id").getRawString())
                    }, t.prototype.getOutputCount = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getVector().getSize()
                    }, t.prototype.getOutputVertexIndex = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString("VertexIndex").toInt()
                    }, t.prototype.getOutputAngleScale = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString("Scale").toFloat()
                    }, t.prototype.getOutputWeight = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString(m).toFloat()
                    }, t.prototype.getOutputDestinationId = function(t, e) {
                        return x.getIdManager().getId(this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString("Destination").getValueByString("Id").getRawString())
                    }, t.prototype.getOutputType = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString(n).getRawString()
                    }, t.prototype.getOutputReflect = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(y).getValueByIndex(e).getValueByString(d).toBoolean()
                    }, t.prototype.getParticleCount = function(t) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getVector().getSize()
                    }, t.prototype.getParticleMobility = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString("Mobility").toFloat()
                    }, t.prototype.getParticleDelay = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString("Delay").toFloat()
                    }, t.prototype.getParticleAcceleration = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString("Acceleration").toFloat()
                    }, t.prototype.getParticleRadius = function(t, e) {
                        return this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString("Radius").toInt()
                    }, t.prototype.getParticlePosition = function(t, e) {
                        var i = new w(0, 0);
                        return i.x = this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString(r).getValueByString("X").toFloat(), i.y = this._json.getRoot().getValueByString(c).getValueByIndex(t).getValueByString(v).getValueByIndex(e).getValueByString(r).getValueByString("Y").toFloat(), i
                    }, t
                }(), a.CubismPhysicsJson = q
            },
            9884: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(2900).Live2DCubismFramework.CubismMatrix44;
                ! function(t) {
                    var e, i = function() {
                        function t() {
                            this._isCulling = !1, this._isPremultipliedAlpha = !1, this._anisortopy = 0, this._model = null, this._modelColor = new r, this._mvpMatrix4x4 = new a, this._mvpMatrix4x4.loadIdentity()
                        }
                        return t.create = function() {
                            return null
                        }, t.delete = function(t) {}, t.prototype.initialize = function(t) {
                            this._model = t
                        }, t.prototype.drawModel = function() {
                            null != this.getModel() && this.doDrawModel()
                        }, t.prototype.setMvpMatrix = function(t) {
                            this._mvpMatrix4x4.setMatrix(t.getArray())
                        }, t.prototype.getMvpMatrix = function() {
                            return this._mvpMatrix4x4
                        }, t.prototype.setModelColor = function(t, e, i, a) {
                            t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), a < 0 ? a = 0 : a > 1 && (a = 1), this._modelColor.R = t, this._modelColor.G = e, this._modelColor.B = i, this._modelColor.A = a
                        }, t.prototype.getModelColor = function() {
                            return JSON.parse(JSON.stringify(this._modelColor))
                        }, t.prototype.setIsPremultipliedAlpha = function(t) {
                            this._isPremultipliedAlpha = t
                        }, t.prototype.isPremultipliedAlpha = function() {
                            return this._isPremultipliedAlpha
                        }, t.prototype.setIsCulling = function(t) {
                            this._isCulling = t
                        }, t.prototype.isCulling = function() {
                            return this._isCulling
                        }, t.prototype.setAnisotropy = function(t) {
                            this._anisortopy = t
                        }, t.prototype.getAnisotropy = function() {
                            return this._anisortopy
                        }, t.prototype.getModel = function() {
                            return this._model
                        }, t
                    }();
                    t.CubismRenderer = i, (e = t.CubismBlendMode || (t.CubismBlendMode = {}))[e.CubismBlendMode_Normal = 0] = "CubismBlendMode_Normal", e[e.CubismBlendMode_Additive = 1] = "CubismBlendMode_Additive", e[e.CubismBlendMode_Multiplicative = 2] = "CubismBlendMode_Multiplicative";
                    var r = function() {
                        this.R = 1, this.G = 1, this.B = 1, this.A = 1
                    };
                    t.CubismTextureColor = r
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            3754: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o = i(3051),
                    n = i(4450),
                    s = i(9884),
                    u = i(2900),
                    h = i(3621),
                    l = i(3023),
                    c = i(2307),
                    _ = o.Live2DCubismFramework.Constant,
                    f = u.Live2DCubismFramework.CubismMatrix44,
                    p = n.Live2DCubismFramework.csmRect,
                    g = h.Live2DCubismFramework.csmMap,
                    d = l.Live2DCubismFramework.csmVector,
                    m = s.Live2DCubismFramework.CubismRenderer,
                    b = s.Live2DCubismFramework.CubismBlendMode,
                    y = s.Live2DCubismFramework.CubismTextureColor;
                ! function(t) {
                    var e, i, a, o = function() {
                        function t() {
                            this._maskRenderTexture = null, this._colorBuffer = null, this._currentFrameNo = 0, this._clippingMaskBufferSize = 256, this._clippingContextListForMask = new d, this._clippingContextListForDraw = new d, this._channelColors = new d, this._tmpBoundsOnModel = new p, this._tmpMatrix = new f, this._tmpMatrixForMask = new f, this._tmpMatrixForDraw = new f, this._maskTexture = null;
                            var t = new y;
                            t.R = 1, t.G = 0, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new y).R = 0, t.G = 1, t.B = 0, t.A = 0, this._channelColors.pushBack(t), (t = new y).R = 0, t.G = 0, t.B = 1, t.A = 0, this._channelColors.pushBack(t), (t = new y).R = 0, t.G = 0, t.B = 0, t.A = 1, this._channelColors.pushBack(t)
                        }
                        return t.prototype.getChannelFlagAsColor = function(t) {
                            return this._channelColors.at(t)
                        }, t.prototype.getMaskRenderTexture = function() {
                            var t = 0;
                            if (this._maskTexture && 0 != this._maskTexture.texture && (this._maskTexture.frameNo = this._currentFrameNo, t = this._maskTexture.texture), 0 == t) {
                                var e = this._clippingMaskBufferSize;
                                this._colorBuffer = this.gl.createTexture(), this.gl.bindTexture(this.gl.TEXTURE_2D, this._colorBuffer), this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, e, e, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR), this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR), this.gl.bindTexture(this.gl.TEXTURE_2D, null), t = this.gl.createFramebuffer(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this._colorBuffer, 0), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a), this._maskTexture = new n(this._currentFrameNo, t)
                            }
                            return t
                        }, t.prototype.setGL = function(t) {
                            this.gl = t
                        }, t.prototype.calcClippedDrawTotalBounds = function(t, e) {
                            for (var i = Number.MAX_VALUE, a = Number.MAX_VALUE, r = Number.MIN_VALUE, o = Number.MIN_VALUE, n = e._clippedDrawableIndexList.length, s = 0; s < n; s++) {
                                for (var u = e._clippedDrawableIndexList[s], h = t.getDrawableVertexCount(u), l = t.getDrawableVertices(u), c = Number.MAX_VALUE, f = Number.MAX_VALUE, p = Number.MIN_VALUE, g = Number.MIN_VALUE, d = h * _.vertexStep, m = _.vertexOffset; m < d; m += _.vertexStep) {
                                    var b = l[m],
                                        y = l[m + 1];
                                    b < c && (c = b), b > p && (p = b), y < f && (f = y), y > g && (g = y)
                                }
                                if (c != Number.MAX_VALUE)
                                    if (c < i && (i = c), f < a && (a = f), p > r && (r = p), g > o && (o = g), i == Number.MAX_VALUE) e._allClippedDrawRect.x = 0, e._allClippedDrawRect.y = 0, e._allClippedDrawRect.width = 0, e._allClippedDrawRect.height = 0, e._isUsing = !1;
                                    else {
                                        e._isUsing = !0;
                                        var v = r - i,
                                            q = o - a;
                                        e._allClippedDrawRect.x = i, e._allClippedDrawRect.y = a, e._allClippedDrawRect.width = v, e._allClippedDrawRect.height = q
                                    }
                            }
                        }, t.prototype.release = function() {
                            for (var t = 0; t < this._clippingContextListForMask.getSize(); t++) this._clippingContextListForMask.at(t) && (this._clippingContextListForMask.at(t).release(), this._clippingContextListForMask.set(t, void 0)), this._clippingContextListForMask.set(t, null);
                            for (this._clippingContextListForMask = null, t = 0; t < this._clippingContextListForDraw.getSize(); t++) this._clippingContextListForDraw.set(t, null);
                            for (this._clippingContextListForDraw = null, this._maskTexture && (this.gl.deleteFramebuffer(this._maskTexture.texture), this._maskTexture = null), t = 0; t < this._channelColors.getSize(); t++) this._channelColors.set(t, null);
                            this._channelColors = null, this.gl.deleteTexture(this._colorBuffer), this._colorBuffer = null
                        }, t.prototype.initialize = function(t, e, i, a) {
                            for (var r = 0; r < e; r++)
                                if (a[r] <= 0) this._clippingContextListForDraw.pushBack(null);
                                else {
                                    var o = this.findSameClip(i[r], a[r]);
                                    null == o && (o = new s(this, i[r], a[r]), this._clippingContextListForMask.pushBack(o)), o.addClippedDrawable(r), this._clippingContextListForDraw.pushBack(o)
                                }
                        }, t.prototype.setupClippingContext = function(t, e) {
                            this._currentFrameNo++;
                            for (var r = 0, o = 0; o < this._clippingContextListForMask.getSize(); o++) {
                                var n = this._clippingContextListForMask.at(o);
                                this.calcClippedDrawTotalBounds(t, n), n._isUsing && r++
                            }
                            if (r > 0) {
                                for (this.gl.viewport(0, 0, this._clippingMaskBufferSize, this._clippingMaskBufferSize), this._maskRenderTexture = this.getMaskRenderTexture(), e.getMvpMatrix(), e.preDraw(), this.setupLayoutBounds(r), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this._maskRenderTexture), this.gl.clearColor(1, 1, 1, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), o = 0; o < this._clippingContextListForMask.getSize(); o++) {
                                    var s = this._clippingContextListForMask.at(o),
                                        u = s._allClippedDrawRect,
                                        h = s._layoutBounds;
                                    this._tmpBoundsOnModel.setRect(u), this._tmpBoundsOnModel.expand(.05 * u.width, .05 * u.height);
                                    var l = h.width / this._tmpBoundsOnModel.width,
                                        c = h.height / this._tmpBoundsOnModel.height;
                                    this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(-1, -1), this._tmpMatrix.scaleRelative(2, 2), this._tmpMatrix.translateRelative(h.x, h.y), this._tmpMatrix.scaleRelative(l, c), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForMask.setMatrix(this._tmpMatrix.getArray()), this._tmpMatrix.loadIdentity(), this._tmpMatrix.translateRelative(h.x, h.y), this._tmpMatrix.scaleRelative(l, c), this._tmpMatrix.translateRelative(-this._tmpBoundsOnModel.x, -this._tmpBoundsOnModel.y), this._tmpMatrixForDraw.setMatrix(this._tmpMatrix.getArray()), s._matrixForMask.setMatrix(this._tmpMatrixForMask.getArray()), s._matrixForDraw.setMatrix(this._tmpMatrixForDraw.getArray());
                                    for (var _ = s._clippingIdCount, f = 0; f < _; f++) {
                                        var p = s._clippingIdList[f];
                                        t.getDrawableDynamicFlagVertexPositionsDidChange(p) && (e.setIsCulling(0 != t.getDrawableCulling(p)), e.setClippingContextBufferForMask(s), e.drawMesh(t.getDrawableTextureIndices(p), t.getDrawableVertexIndexCount(p), t.getDrawableVertexCount(p), t.getDrawableVertexIndices(p), t.getDrawableVertices(p), t.getDrawableVertexUvs(p), t.getDrawableOpacity(p), b.CubismBlendMode_Normal, !1))
                                    }
                                }
                                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a), e.setClippingContextBufferForMask(null), this.gl.viewport(i[0], i[1], i[2], i[3])
                            }
                        }, t.prototype.findSameClip = function(t, e) {
                            for (var i = 0; i < this._clippingContextListForMask.getSize(); i++) {
                                var a = this._clippingContextListForMask.at(i),
                                    r = a._clippingIdCount;
                                if (r == e) {
                                    for (var o = 0, n = 0; n < r; n++)
                                        for (var s = a._clippingIdList[n], u = 0; u < r; u++)
                                            if (t[u] == s) {
                                                o++;
                                                break
                                            } if (o == r) return a
                                }
                            }
                            return null
                        }, t.prototype.setupLayoutBounds = function(t) {
                            var e = t / 4,
                                i = t % 4;
                            e = ~~e, i = ~~i;
                            for (var a = 0, r = 0; r < 4; r++) {
                                var o = e + (r < i ? 1 : 0);
                                if (0 == o);
                                else if (1 == o) {
                                    var n = this._clippingContextListForMask.at(a++);
                                    n._layoutChannelNo = r, n._layoutBounds.x = 0, n._layoutBounds.y = 0, n._layoutBounds.width = 1, n._layoutBounds.height = 1
                                } else if (2 == o)
                                    for (var s = 0; s < o; s++) u = ~~(u = s % 2), (l = this._clippingContextListForMask.at(a++))._layoutChannelNo = r, l._layoutBounds.x = .5 * u, l._layoutBounds.y = 0, l._layoutBounds.width = .5, l._layoutBounds.height = 1;
                                else if (o <= 4)
                                    for (s = 0; s < o; s++) u = ~~(u = s % 2), h = ~~(h = s / 2), (l = this._clippingContextListForMask.at(a++))._layoutChannelNo = r, l._layoutBounds.x = .5 * u, l._layoutBounds.y = .5 * h, l._layoutBounds.width = .5, l._layoutBounds.height = .5;
                                else if (o <= 9)
                                    for (s = 0; s < o; s++) {
                                        var u, h, l;
                                        u = ~~(u = s % 3), h = ~~(h = s / 3), (l = this._clippingContextListForMask.at(a++))._layoutChannelNo = r, l._layoutBounds.x = u / 3, l._layoutBounds.y = h / 3, l._layoutBounds.width = 1 / 3, l._layoutBounds.height = 1 / 3
                                    } else c.CubismLogError("not supported mask count : {0}", o)
                            }
                        }, t.prototype.getColorBuffer = function() {
                            return this._colorBuffer
                        }, t.prototype.getClippingContextListForDraw = function() {
                            return this._clippingContextListForDraw
                        }, t.prototype.setClippingMaskBufferSize = function(t) {
                            this._clippingMaskBufferSize = t
                        }, t.prototype.getClippingMaskBufferSize = function() {
                            return this._clippingMaskBufferSize
                        }, t
                    }();
                    t.CubismClippingManager_WebGL = o;
                    var n = function(t, e) {
                        this.frameNo = t, this.texture = e
                    };
                    t.CubismRenderTextureResource = n;
                    var s = function() {
                        function t(t, e, i) {
                            this._owner = t, this._clippingIdList = e, this._clippingIdCount = i, this._allClippedDrawRect = new p, this._layoutBounds = new p, this._clippedDrawableIndexList = [], this._matrixForMask = new f, this._matrixForDraw = new f
                        }
                        return t.prototype.release = function() {
                            null != this._layoutBounds && (this._layoutBounds = null), null != this._allClippedDrawRect && (this._allClippedDrawRect = null), null != this._clippedDrawableIndexList && (this._clippedDrawableIndexList = null)
                        }, t.prototype.addClippedDrawable = function(t) {
                            this._clippedDrawableIndexList.push(t)
                        }, t.prototype.getClippingManager = function() {
                            return this._owner
                        }, t.prototype.setGl = function(t) {
                            this._owner.setGL(t)
                        }, t
                    }();
                    t.CubismClippingContext = s;
                    var u = function() {
                        function i() {
                            this._shaderSets = new d
                        }
                        return i.getInstance = function() {
                            return null == e ? e = new i : e
                        }, i.deleteInstance = function() {
                            e && (e.release(), e = null)
                        }, i.prototype.release = function() {
                            this.releaseShaderProgram()
                        }, i.prototype.setupShaderProgram = function(t, e, i, a, r, o, n, s, u, _, f, p, g) {
                            var d, m, y, v;
                            if (f || c.CubismLogError("NoPremultipliedAlpha is not allowed"), 0 == this._shaderSets.getSize() && this.generateShaders(), null != t.getClippingContextBufferForMask()) {
                                var q = this._shaderSets.at(h.ShaderNames_SetupMask);
                                this.gl.useProgram(q.shaderProgram), this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(q.samplerTexture0Location, 0), null == n.vertex && (n.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(q.attributePositionLocation), this.gl.vertexAttribPointer(q.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == n.uv && (n.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(q.attributeTexCoordLocation), this.gl.vertexAttribPointer(q.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0);
                                var $ = t.getClippingContextBufferForMask()._layoutChannelNo,
                                    A = t.getClippingContextBufferForMask().getClippingManager().getChannelFlagAsColor($);
                                this.gl.uniform4f(q.uniformChannelFlagLocation, A.R, A.G, A.B, A.A), this.gl.uniformMatrix4fv(q.uniformClipMatrixLocation, !1, t.getClippingContextBufferForMask()._matrixForMask.getArray());
                                var x = t.getClippingContextBufferForMask()._layoutBounds;
                                this.gl.uniform4f(q.uniformBaseColorLocation, 2 * x.x - 1, 2 * x.y - 1, 2 * x.getRight() - 1, 2 * x.getBottom() - 1), d = this.gl.ZERO, m = this.gl.ONE_MINUS_SRC_COLOR, y = this.gl.ZERO, v = this.gl.ONE_MINUS_SRC_ALPHA
                            } else {
                                var w = null != t.getClippingContextBufferForDraw(),
                                    S = w ? g ? 2 : 1 : 0;
                                switch (q = new l, u) {
                                    case b.CubismBlendMode_Normal:
                                    default:
                                        q = this._shaderSets.at(h.ShaderNames_NormalPremultipliedAlpha + S), d = this.gl.ONE, m = this.gl.ONE_MINUS_SRC_ALPHA, y = this.gl.ONE, v = this.gl.ONE_MINUS_SRC_ALPHA;
                                        break;
                                    case b.CubismBlendMode_Additive:
                                        q = this._shaderSets.at(h.ShaderNames_AddPremultipliedAlpha + S), d = this.gl.ONE, m = this.gl.ONE, y = this.gl.ZERO, v = this.gl.ONE;
                                        break;
                                    case b.CubismBlendMode_Multiplicative:
                                        q = this._shaderSets.at(h.ShaderNames_MultPremultipliedAlpha + S), d = this.gl.DST_COLOR, m = this.gl.ONE_MINUS_SRC_ALPHA, y = this.gl.ZERO, v = this.gl.ONE
                                }
                                if (this.gl.useProgram(q.shaderProgram), null == n.vertex && (n.vertex = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.vertex), this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(q.attributePositionLocation), this.gl.vertexAttribPointer(q.attributePositionLocation, 2, this.gl.FLOAT, !1, 0, 0), null == n.uv && (n.uv = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.uv), this.gl.bufferData(this.gl.ARRAY_BUFFER, o, this.gl.DYNAMIC_DRAW), this.gl.enableVertexAttribArray(q.attributeTexCoordLocation), this.gl.vertexAttribPointer(q.attributeTexCoordLocation, 2, this.gl.FLOAT, !1, 0, 0), w) {
                                    this.gl.activeTexture(this.gl.TEXTURE1);
                                    var L = t.getClippingContextBufferForDraw().getClippingManager().getColorBuffer();
                                    this.gl.bindTexture(this.gl.TEXTURE_2D, L), this.gl.uniform1i(q.samplerTexture1Location, 1), this.gl.uniformMatrix4fv(q.uniformClipMatrixLocation, !1, t.getClippingContextBufferForDraw()._matrixForDraw.getArray()), $ = t.getClippingContextBufferForDraw()._layoutChannelNo, A = t.getClippingContextBufferForDraw().getClippingManager().getChannelFlagAsColor($), this.gl.uniform4f(q.uniformChannelFlagLocation, A.R, A.G, A.B, A.A)
                                }
                                this.gl.activeTexture(this.gl.TEXTURE0), this.gl.bindTexture(this.gl.TEXTURE_2D, e), this.gl.uniform1i(q.samplerTexture0Location, 0), this.gl.uniformMatrix4fv(q.uniformMatrixLocation, !1, p.getArray()), this.gl.uniform4f(q.uniformBaseColorLocation, _.R, _.G, _.B, _.A)
                            }
                            null == n.index && (n.index = this.gl.createBuffer()), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, n.index), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, r, this.gl.DYNAMIC_DRAW), this.gl.blendFuncSeparate(d, m, y, v)
                        }, i.prototype.releaseShaderProgram = function() {
                            for (var t = 0; t < this._shaderSets.getSize(); t++) this.gl.deleteProgram(this._shaderSets.at(t).shaderProgram), this._shaderSets.at(t).shaderProgram = 0, this._shaderSets.set(t, void 0), this._shaderSets.set(t, null)
                        }, i.prototype.generateShaders = function() {
                            for (var e = 0; e < 10; e++) this._shaderSets.pushBack(new l);
                            this._shaderSets.at(0).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcSetupMask, t.fragmentShaderSrcsetupMask), this._shaderSets.at(1).shaderProgram = this.loadShaderProgram(t.vertexShaderSrc, t.fragmentShaderSrcPremultipliedAlpha), this._shaderSets.at(2).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcMasked, t.fragmentShaderSrcMaskPremultipliedAlpha), this._shaderSets.at(3).shaderProgram = this.loadShaderProgram(t.vertexShaderSrcMasked, t.fragmentShaderSrcMaskInvertedPremultipliedAlpha), this._shaderSets.at(4).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(5).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(6).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(7).shaderProgram = this._shaderSets.at(1).shaderProgram, this._shaderSets.at(8).shaderProgram = this._shaderSets.at(2).shaderProgram, this._shaderSets.at(9).shaderProgram = this._shaderSets.at(3).shaderProgram, this._shaderSets.at(0).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_position"), this._shaderSets.at(0).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(0).shaderProgram, "a_texCoord"), this._shaderSets.at(0).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "s_texture0"), this._shaderSets.at(0).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_clipMatrix"), this._shaderSets.at(0).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_channelFlag"), this._shaderSets.at(0).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(0).shaderProgram, "u_baseColor"), this._shaderSets.at(1).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_position"), this._shaderSets.at(1).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(1).shaderProgram, "a_texCoord"), this._shaderSets.at(1).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "s_texture0"), this._shaderSets.at(1).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_matrix"), this._shaderSets.at(1).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(1).shaderProgram, "u_baseColor"), this._shaderSets.at(2).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_position"), this._shaderSets.at(2).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(2).shaderProgram, "a_texCoord"), this._shaderSets.at(2).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture0"), this._shaderSets.at(2).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "s_texture1"), this._shaderSets.at(2).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_matrix"), this._shaderSets.at(2).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_clipMatrix"), this._shaderSets.at(2).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_channelFlag"), this._shaderSets.at(2).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(2).shaderProgram, "u_baseColor"), this._shaderSets.at(3).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_position"), this._shaderSets.at(3).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(3).shaderProgram, "a_texCoord"), this._shaderSets.at(3).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture0"), this._shaderSets.at(3).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "s_texture1"), this._shaderSets.at(3).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_matrix"), this._shaderSets.at(3).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_clipMatrix"), this._shaderSets.at(3).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_channelFlag"), this._shaderSets.at(3).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(3).shaderProgram, "u_baseColor"), this._shaderSets.at(4).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_position"), this._shaderSets.at(4).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(4).shaderProgram, "a_texCoord"), this._shaderSets.at(4).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "s_texture0"), this._shaderSets.at(4).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_matrix"), this._shaderSets.at(4).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(4).shaderProgram, "u_baseColor"), this._shaderSets.at(5).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_position"), this._shaderSets.at(5).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(5).shaderProgram, "a_texCoord"), this._shaderSets.at(5).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture0"), this._shaderSets.at(5).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "s_texture1"), this._shaderSets.at(5).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_matrix"), this._shaderSets.at(5).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_clipMatrix"), this._shaderSets.at(5).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_channelFlag"), this._shaderSets.at(5).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(5).shaderProgram, "u_baseColor"), this._shaderSets.at(6).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_position"), this._shaderSets.at(6).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(6).shaderProgram, "a_texCoord"), this._shaderSets.at(6).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture0"), this._shaderSets.at(6).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "s_texture1"), this._shaderSets.at(6).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_matrix"), this._shaderSets.at(6).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_clipMatrix"), this._shaderSets.at(6).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_channelFlag"), this._shaderSets.at(6).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(6).shaderProgram, "u_baseColor"), this._shaderSets.at(7).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_position"), this._shaderSets.at(7).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(7).shaderProgram, "a_texCoord"), this._shaderSets.at(7).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "s_texture0"), this._shaderSets.at(7).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_matrix"), this._shaderSets.at(7).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(7).shaderProgram, "u_baseColor"), this._shaderSets.at(8).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_position"), this._shaderSets.at(8).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(8).shaderProgram, "a_texCoord"), this._shaderSets.at(8).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture0"), this._shaderSets.at(8).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "s_texture1"), this._shaderSets.at(8).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_matrix"), this._shaderSets.at(8).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_clipMatrix"), this._shaderSets.at(8).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_channelFlag"), this._shaderSets.at(8).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(8).shaderProgram, "u_baseColor"), this._shaderSets.at(9).attributePositionLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_position"), this._shaderSets.at(9).attributeTexCoordLocation = this.gl.getAttribLocation(this._shaderSets.at(9).shaderProgram, "a_texCoord"), this._shaderSets.at(9).samplerTexture0Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture0"), this._shaderSets.at(9).samplerTexture1Location = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "s_texture1"), this._shaderSets.at(9).uniformMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_matrix"), this._shaderSets.at(9).uniformClipMatrixLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_clipMatrix"), this._shaderSets.at(9).uniformChannelFlagLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_channelFlag"), this._shaderSets.at(9).uniformBaseColorLocation = this.gl.getUniformLocation(this._shaderSets.at(9).shaderProgram, "u_baseColor")
                        }, i.prototype.loadShaderProgram = function(t, e) {
                            var i = this.gl.createProgram(),
                                a = this.compileShaderSource(this.gl.VERTEX_SHADER, t);
                            if (!a) return c.CubismLogError("Vertex shader compile error!"), 0;
                            var r = this.compileShaderSource(this.gl.FRAGMENT_SHADER, e);
                            return r ? (this.gl.attachShader(i, a), this.gl.attachShader(i, r), this.gl.linkProgram(i), this.gl.getProgramParameter(i, this.gl.LINK_STATUS) ? (this.gl.deleteShader(a), this.gl.deleteShader(r), i) : (c.CubismLogError("Failed to link program: {0}", i), this.gl.deleteShader(a), a = 0, this.gl.deleteShader(r), r = 0, i && (this.gl.deleteProgram(i), i = 0), 0)) : (c.CubismLogError("Vertex shader compile error!"), 0)
                        }, i.prototype.compileShaderSource = function(t, e) {
                            var i = e,
                                a = this.gl.createShader(t);
                            if (this.gl.shaderSource(a, i), this.gl.compileShader(a), !a) {
                                var r = this.gl.getShaderInfoLog(a);
                                c.CubismLogError("Shader compile log: {0} ", r)
                            }
                            return this.gl.getShaderParameter(a, this.gl.COMPILE_STATUS) ? a : (this.gl.deleteShader(a), null)
                        }, i.prototype.setGl = function(t) {
                            this.gl = t
                        }, i
                    }();
                    t.CubismShader_WebGL = u;
                    var h, l = function() {};
                    t.CubismShaderSet = l,
                        function(t) {
                            t[t.ShaderNames_SetupMask = 0] = "ShaderNames_SetupMask", t[t.ShaderNames_NormalPremultipliedAlpha = 1] = "ShaderNames_NormalPremultipliedAlpha", t[t.ShaderNames_NormalMaskedPremultipliedAlpha = 2] = "ShaderNames_NormalMaskedPremultipliedAlpha", t[t.ShaderNames_NomralMaskedInvertedPremultipliedAlpha = 3] = "ShaderNames_NomralMaskedInvertedPremultipliedAlpha", t[t.ShaderNames_AddPremultipliedAlpha = 4] = "ShaderNames_AddPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlpha = 5] = "ShaderNames_AddMaskedPremultipliedAlpha", t[t.ShaderNames_AddMaskedPremultipliedAlphaInverted = 6] = "ShaderNames_AddMaskedPremultipliedAlphaInverted", t[t.ShaderNames_MultPremultipliedAlpha = 7] = "ShaderNames_MultPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlpha = 8] = "ShaderNames_MultMaskedPremultipliedAlpha", t[t.ShaderNames_MultMaskedPremultipliedAlphaInverted = 9] = "ShaderNames_MultMaskedPremultipliedAlphaInverted"
                        }(h = t.ShaderNames || (t.ShaderNames = {})), t.vertexShaderSrcSetupMask = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_myPos;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_clipMatrix * a_position;   v_myPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.fragmentShaderSrcsetupMask = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_myPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;void main(){   float isInside =        step(u_baseColor.x, v_myPos.x/v_myPos.w)       * step(u_baseColor.y, v_myPos.y/v_myPos.w)       * step(v_myPos.x/v_myPos.w, u_baseColor.z)       * step(v_myPos.y/v_myPos.w, u_baseColor.w);   gl_FragColor = u_channelFlag * texture2D(s_texture0, v_texCoord).a * isInside;}", t.vertexShaderSrc = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;uniform mat4       u_matrix;void main(){   gl_Position = u_matrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.vertexShaderSrcMasked = "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform mat4       u_matrix;uniform mat4       u_clipMatrix;void main(){   gl_Position = u_matrix * a_position;   v_clipPos = u_clipMatrix * a_position;   v_texCoord = a_texCoord;   v_texCoord.y = 1.0 - v_texCoord.y;}", t.fragmentShaderSrcPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;uniform vec4       u_baseColor;uniform sampler2D  s_texture0;void main(){   gl_FragColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;}", t.fragmentShaderSrcMaskPremultipliedAlpha = "precision mediump float;varying vec2       v_texCoord;varying vec4       v_clipPos;uniform vec4       u_baseColor;uniform vec4       u_channelFlag;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;void main(){   vec4 col_formask = texture2D(s_texture0 , v_texCoord) * u_baseColor;   vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;   float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;   col_formask = col_formask * maskVal;   gl_FragColor = col_formask;}", t.fragmentShaderSrcMaskInvertedPremultipliedAlpha = "precision mediump float;varying vec2 v_texCoord;varying vec4 v_clipPos;uniform sampler2D s_texture0;uniform sampler2D s_texture1;uniform vec4 u_channelFlag;uniform vec4 u_baseColor;void main(){vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;vec4 clipMask = (1.0 - texture2D(s_texture1, v_clipPos.xy / v_clipPos.w)) * u_channelFlag;float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;col_formask = col_formask * (1.0 - maskVal);gl_FragColor = col_formask;}";
                    var v = function(t) {
                        function e() {
                            var e = t.call(this) || this;
                            return e._clippingContextBufferForMask = null, e._clippingContextBufferForDraw = null, e._clippingManager = new o, e.firstDraw = !0, e._textures = new g, e._sortedDrawableIndexList = new d, e._bufferData = {
                                vertex: WebGLBuffer = null,
                                uv: WebGLBuffer = null,
                                index: WebGLBuffer = null
                            }, e._textures.prepareCapacity(32, !0), e
                        }
                        return r(e, t), e.prototype.initialize = function(e) {
                            e.isUsingMasking() && (this._clippingManager = new o, this._clippingManager.initialize(e, e.getDrawableCount(), e.getDrawableMasks(), e.getDrawableMaskCounts())), this._sortedDrawableIndexList.resize(e.getDrawableCount(), 0), t.prototype.initialize.call(this, e)
                        }, e.prototype.bindTexture = function(t, e) {
                            this._textures.setValue(t, e)
                        }, e.prototype.getBindedTextures = function() {
                            return this._textures
                        }, e.prototype.setClippingMaskBufferSize = function(t) {
                            this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this._clippingManager = new o, this._clippingManager.setClippingMaskBufferSize(t), this._clippingManager.initialize(this.getModel(), this.getModel().getDrawableCount(), this.getModel().getDrawableMasks(), this.getModel().getDrawableMaskCounts())
                        }, e.prototype.getClippingMaskBufferSize = function() {
                            return this._clippingManager.getClippingMaskBufferSize()
                        }, e.prototype.release = function() {
                            this._clippingManager.release(), this._clippingManager = void 0, this._clippingManager = null, this.gl.deleteBuffer(this._bufferData.vertex), this._bufferData.vertex = null, this.gl.deleteBuffer(this._bufferData.uv), this._bufferData.uv = null, this.gl.deleteBuffer(this._bufferData.index), this._bufferData.index = null, this._bufferData = null, this._textures = null
                        }, e.prototype.doDrawModel = function() {
                            null != this._clippingManager && (this.preDraw(), this._clippingManager.setupClippingContext(this.getModel(), this)), this.preDraw();
                            for (var t = this.getModel().getDrawableCount(), e = this.getModel().getDrawableRenderOrders(), i = 0; i < t; ++i) {
                                var a = e[i];
                                this._sortedDrawableIndexList.set(a, i)
                            }
                            for (i = 0; i < t; ++i) {
                                var r = this._sortedDrawableIndexList.at(i);
                                this.getModel().getDrawableDynamicFlagIsVisible(r) && (this.setClippingContextBufferForDraw(null != this._clippingManager ? this._clippingManager.getClippingContextListForDraw().at(r) : null), this.setIsCulling(this.getModel().getDrawableCulling(r)), this.drawMesh(this.getModel().getDrawableTextureIndices(r), this.getModel().getDrawableVertexIndexCount(r), this.getModel().getDrawableVertexCount(r), this.getModel().getDrawableVertexIndices(r), this.getModel().getDrawableVertices(r), this.getModel().getDrawableVertexUvs(r), this.getModel().getDrawableOpacity(r), this.getModel().getDrawableBlendMode(r), this.getModel().getDrawableInvertedMaskBit(r)))
                            }
                        }, e.prototype.drawMesh = function(t, e, i, a, r, o, n, s, h) {
                            this.isCulling() ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this.gl.frontFace(this.gl.CCW);
                            var l, c = this.getModelColor();
                            null == this.getClippingContextBufferForMask() && (c.A *= n, this.isPremultipliedAlpha() && (c.R *= c.A, c.G *= c.A, c.B *= c.A)), l = null != this._textures.getValue(t) ? this._textures.getValue(t) : null, u.getInstance().setupShaderProgram(this, l, i, r, a, o, this._bufferData, n, s, c, this.isPremultipliedAlpha(), this.getMvpMatrix(), h), this.gl.drawElements(this.gl.TRIANGLES, e, this.gl.UNSIGNED_SHORT, 0), this.gl.useProgram(null), this.setClippingContextBufferForDraw(null), this.setClippingContextBufferForMask(null)
                        }, e.doStaticRelease = function() {
                            u.deleteInstance()
                        }, e.prototype.setRenderState = function(t, e) {
                            a = t, i = e
                        }, e.prototype.preDraw = function() {
                            this.firstDraw && (this.firstDraw = !1, this._anisortopy = this.gl.getExtension("EXT_texture_filter_anisotropic") || this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")), this.gl.disable(this.gl.SCISSOR_TEST), this.gl.disable(this.gl.STENCIL_TEST), this.gl.disable(this.gl.DEPTH_TEST), this.gl.frontFace(this.gl.CW), this.gl.enable(this.gl.BLEND), this.gl.colorMask(!0, !0, !0, !0), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null)
                        }, e.prototype.setClippingContextBufferForMask = function(t) {
                            this._clippingContextBufferForMask = t
                        }, e.prototype.getClippingContextBufferForMask = function() {
                            return this._clippingContextBufferForMask
                        }, e.prototype.setClippingContextBufferForDraw = function(t) {
                            this._clippingContextBufferForDraw = t
                        }, e.prototype.getClippingContextBufferForDraw = function() {
                            return this._clippingContextBufferForDraw
                        }, e.prototype.startUp = function(t) {
                            this.gl = t, this._clippingManager.setGL(t), u.getInstance().setGl(t)
                        }, e
                    }(m);
                    t.CubismRenderer_WebGL = v, m.staticRelease = function() {
                        v.doStaticRelease()
                    }
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            3621: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var a = i(2307);
                ! function(t) {
                    var e = function(t, e) {
                        this.first = null == t ? null : t, this.second = null == e ? null : e
                    };
                    t.csmPair = e;
                    var i = function() {
                        function t(t) {
                            null != t ? t < 1 ? (this._keyValues = [], this._dummyValue = null, this._size = 0) : (this._keyValues = new Array(t), this._size = t) : (this._keyValues = [], this._dummyValue = null, this._size = 0)
                        }
                        return t.prototype.release = function() {
                            this.clear()
                        }, t.prototype.appendKey = function(t) {
                            this.prepareCapacity(this._size + 1, !1), this._keyValues[this._size] = new e(t), this._size += 1
                        }, t.prototype.getValue = function(t) {
                            for (var e = -1, i = 0; i < this._size; i++)
                                if (this._keyValues[i].first == t) {
                                    e = i;
                                    break
                                } return e >= 0 ? this._keyValues[e].second : (this.appendKey(t), this._keyValues[this._size - 1].second)
                        }, t.prototype.setValue = function(t, e) {
                            for (var i = -1, a = 0; a < this._size; a++)
                                if (this._keyValues[a].first == t) {
                                    i = a;
                                    break
                                } i >= 0 ? this._keyValues[i].second = e : (this.appendKey(t), this._keyValues[this._size - 1].second = e)
                        }, t.prototype.isExist = function(t) {
                            for (var e = 0; e < this._size; e++)
                                if (this._keyValues[e].first == t) return !0;
                            return !1
                        }, t.prototype.clear = function() {
                            this._keyValues = void 0, this._keyValues = null, this._keyValues = [], this._size = 0
                        }, t.prototype.getSize = function() {
                            return this._size
                        }, t.prototype.prepareCapacity = function(e, i) {
                            e > this._keyValues.length && (0 == this._keyValues.length ? (!i && e < t.DefaultSize && (e = t.DefaultSize), this._keyValues.length = e) : (!i && e < 2 * this._keyValues.length && (e = 2 * this._keyValues.length), this._keyValues.length = e))
                        }, t.prototype.begin = function() {
                            return new r(this, 0)
                        }, t.prototype.end = function() {
                            return new r(this, this._size)
                        }, t.prototype.erase = function(t) {
                            var e = t._index;
                            return e < 0 || this._size <= e ? t : (this._keyValues.splice(e, 1), --this._size, new r(this, e))
                        }, t.prototype.dumpAsInt = function() {
                            for (var t = 0; t < this._size; t++) a.CubismLogDebug("{0} ,", this._keyValues[t]), a.CubismLogDebug("\n")
                        }, t.DefaultSize = 10, t
                    }();
                    t.csmMap = i;
                    var r = function() {
                        function t(t, e) {
                            this._map = null != t ? t : new i, this._index = null != e ? e : 0
                        }
                        return t.prototype.set = function(t) {
                            return this._index = t._index, this._map = t._map, this
                        }, t.prototype.preIncrement = function() {
                            return ++this._index, this
                        }, t.prototype.preDecrement = function() {
                            return --this._index, this
                        }, t.prototype.increment = function() {
                            var e = new t(this._map, this._index++);
                            return this._map = e._map, this._index = e._index, this
                        }, t.prototype.decrement = function() {
                            var e = new t(this._map, this._index);
                            return this._map = e._map, this._index = e._index, this
                        }, t.prototype.ptr = function() {
                            return this._map._keyValues[this._index]
                        }, t.prototype.notEqual = function(t) {
                            return this._index != t._index || this._map != t._map
                        }, t
                    }();
                    t.iterator = r
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            4450: (t, e) => {
                "use strict";
                var i, a;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, i = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), a = function() {
                    function t(t, e, i, a) {
                        this.x = t, this.y = e, this.width = i, this.height = a
                    }
                    return t.prototype.getCenterX = function() {
                        return this.x + .5 * this.width
                    }, t.prototype.getCenterY = function() {
                        return this.y + .5 * this.height
                    }, t.prototype.getRight = function() {
                        return this.x + this.width
                    }, t.prototype.getBottom = function() {
                        return this.y + this.height
                    }, t.prototype.setRect = function(t) {
                        this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                    }, t.prototype.expand = function(t, e) {
                        this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                    }, t
                }(), i.csmRect = a
            },
            4244: (t, e) => {
                "use strict";
                var i, a;
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0, i = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}), a = function() {
                    function t(t) {
                        this.s = t
                    }
                    return t.prototype.append = function(t, e) {
                        return this.s += void 0 !== e ? t.substr(0, e) : t, this
                    }, t.prototype.expansion = function(t, e) {
                        for (var i = 0; i < t; i++) this.append(e);
                        return this
                    }, t.prototype.getBytes = function() {
                        return encodeURIComponent(this.s).replace(/%../g, "x").length
                    }, t.prototype.getLength = function() {
                        return this.s.length
                    }, t.prototype.isLess = function(t) {
                        return this.s < t.s
                    }, t.prototype.isGreat = function(t) {
                        return this.s > t.s
                    }, t.prototype.isEqual = function(t) {
                        return this.s == t
                    }, t.prototype.isEmpty = function() {
                        return 0 == this.s.length
                    }, t
                }(), i.csmString = a
            },
            3023: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.Live2DCubismFramework = void 0,
                    function(t) {
                        var e = function() {
                            function t(t) {
                                void 0 === t && (t = 0), t < 1 ? (this._ptr = [], this._capacity = 0, this._size = 0) : (this._ptr = new Array(t), this._capacity = t, this._size = 0)
                            }
                            return t.prototype.at = function(t) {
                                return this._ptr[t]
                            }, t.prototype.set = function(t, e) {
                                this._ptr[t] = e
                            }, t.prototype.get = function(t) {
                                void 0 === t && (t = 0);
                                for (var e = new Array, i = t; i < this._size; i++) e.push(this._ptr[i]);
                                return e
                            }, t.prototype.pushBack = function(e) {
                                this._size >= this._capacity && this.prepareCapacity(0 == this._capacity ? t.s_defaultSize : 2 * this._capacity), this._ptr[this._size++] = e
                            }, t.prototype.clear = function() {
                                this._ptr.length = 0, this._size = 0
                            }, t.prototype.getSize = function() {
                                return this._size
                            }, t.prototype.assign = function(t, e) {
                                this._size < t && this.prepareCapacity(t);
                                for (var i = 0; i < t; i++) this._ptr[i] = e;
                                this._size = t
                            }, t.prototype.resize = function(t, e) {
                                void 0 === e && (e = null), this.updateSize(t, e, !0)
                            }, t.prototype.updateSize = function(t, e, i) {
                                if (void 0 === e && (e = null), void 0 === i && (i = !0), this._size < t)
                                    if (this.prepareCapacity(t), i)
                                        for (var a = this._size; a < t; a++) this._ptr[a] = "function" == typeof e ? JSON.parse(JSON.stringify(new e)) : e;
                                    else
                                        for (a = this._size; a < t; a++) this._ptr[a] = e;
                                else {
                                    var r = this._size - t;
                                    this._ptr.splice(this._size - r, r)
                                }
                                this._size = t
                            }, t.prototype.insert = function(t, e, i) {
                                var a = t._index,
                                    r = e._index,
                                    o = i._index,
                                    n = o - r;
                                this.prepareCapacity(this._size + n);
                                var s = this._size - a;
                                if (s > 0)
                                    for (var u = 0; u < s; u++) this._ptr.splice(a + u, 0, null);
                                for (u = r; u < o; u++, a++) this._ptr[a] = e._vector._ptr[u];
                                this._size = this._size + n
                            }, t.prototype.remove = function(t) {
                                return !(t < 0 || this._size <= t || (this._ptr.splice(t, 1), --this._size, 0))
                            }, t.prototype.erase = function(t) {
                                var e = t._index;
                                return e < 0 || this._size <= e ? t : (this._ptr.splice(e, 1), --this._size, new i(this, e))
                            }, t.prototype.prepareCapacity = function(t) {
                                t > this._capacity && (0 == this._capacity ? (this._ptr = new Array(t), this._capacity = t) : (this._ptr.length = t, this._capacity = t))
                            }, t.prototype.begin = function() {
                                return 0 == this._size ? this.end() : new i(this, 0)
                            }, t.prototype.end = function() {
                                return new i(this, this._size)
                            }, t.prototype.getOffset = function(e) {
                                var i = new t;
                                return i._ptr = this.get(e), i._size = this.get(e).length, i._capacity = this.get(e).length, i
                            }, t.s_defaultSize = 10, t
                        }();
                        t.csmVector = e;
                        var i = function() {
                            function t(t, e) {
                                this._vector = null != t ? t : null, this._index = null != e ? e : 0
                            }
                            return t.prototype.set = function(t) {
                                return this._index = t._index, this._vector = t._vector, this
                            }, t.prototype.preIncrement = function() {
                                return ++this._index, this
                            }, t.prototype.preDecrement = function() {
                                return --this._index, this
                            }, t.prototype.increment = function() {
                                var e = new t(this._vector, this._index++);
                                return this._vector = e._vector, this._index = e._index, this
                            }, t.prototype.decrement = function() {
                                var e = new t(this._vector, this._index--);
                                return this._vector = e._vector, this._index = e._index, this
                            }, t.prototype.ptr = function() {
                                return this._vector._ptr[this._index]
                            }, t.prototype.substitution = function(t) {
                                return this._index = t._index, this._vector = t._vector, this
                            }, t.prototype.notEqual = function(t) {
                                return this._index != t._index || this._vector != t._vector
                            }, t
                        }();
                        t.iterator = i
                    }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            2307: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = e.CubismLogError = e.CubismLogWarning = e.CubismLogInfo = e.CubismLogDebug = e.CubismLogVerbose = e.CSM_ASSERT = e.CubismLogPrintIn = e.CubismLogPrint = void 0;
                var a, r = i(3051),
                    o = i(7990);
                e.CubismLogPrint = function(t, e, i) {
                        a.CubismDebug.print(t, "[CSM]" + e, i)
                    }, e.CubismLogPrintIn = function(t, i, a) {
                        e.CubismLogPrint(t, i + "\n", a)
                    }, e.CSM_ASSERT = function(t) {
                        console.assert(t)
                    }, o.CSM_LOG_LEVEL <= o.CSM_LOG_LEVEL_VERBOSE ? (e.CubismLogVerbose = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Verbose, "[V]" + t, i)
                    }, e.CubismLogDebug = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Debug, "[D]" + t, i)
                    }, e.CubismLogInfo = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Info, "[I]" + t, i)
                    }, e.CubismLogWarning = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Warning, "[W]" + t, i)
                    }, e.CubismLogError = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Error, "[E]" + t, i)
                    }) : o.CSM_LOG_LEVEL == o.CSM_LOG_LEVEL_DEBUG ? (e.CubismLogDebug = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Debug, "[D]" + t, i)
                    }, e.CubismLogInfo = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Info, "[I]" + t, i)
                    }, e.CubismLogWarning = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Warning, "[W]" + t, i)
                    }, e.CubismLogError = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Error, "[E]" + t, i)
                    }) : o.CSM_LOG_LEVEL == o.CSM_LOG_LEVEL_INFO ? (e.CubismLogInfo = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Info, "[I]" + t, i)
                    }, e.CubismLogWarning = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Warning, "[W]" + t, i)
                    }, e.CubismLogError = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Error, "[E]" + t, i)
                    }) : o.CSM_LOG_LEVEL == o.CSM_LOG_LEVEL_WARNING ? (e.CubismLogWarning = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Warning, "[W]" + t, i)
                    }, e.CubismLogError = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Error, "[E]" + t, i)
                    }) : o.CSM_LOG_LEVEL == o.CSM_LOG_LEVEL_ERROR && (e.CubismLogError = function(t) {
                        for (var i = [], a = 1; a < arguments.length; a++) i[a - 1] = arguments[a];
                        e.CubismLogPrintIn(r.LogLevel.LogLevel_Error, "[E]" + t, i)
                    }),
                    function(t) {
                        var e = function() {
                            function t() {}
                            return t.print = function(t, e, i) {
                                if (!(t < r.Live2DCubismFramework.CubismFramework.getLoggingLevel())) {
                                    var a = r.Live2DCubismFramework.CubismFramework.coreLogFunction;
                                    a && a(e.replace(/\{(\d+)\}/g, (function(t, e) {
                                        return i[e]
                                    })))
                                }
                            }, t.dumpBytes = function(t, e, i) {
                                for (var a = 0; a < i; a++) a % 16 == 0 && a > 0 ? this.print(t, "\n") : a % 8 == 0 && a > 0 && this.print(t, "  "), this.print(t, "{0} ", [255 & e[a]]);
                                this.print(t, "\n")
                            }, t
                        }();
                        t.CubismDebug = e
                    }(a = e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            5090: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                    return (a = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                        })(t, e)
                }, function(t, e) {
                    function i() {
                        this.constructor = t
                    }
                    a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                });
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.Live2DCubismFramework = void 0;
                var o = i(4244),
                    n = i(3621),
                    s = i(3023),
                    u = i(2307),
                    h = i(3051),
                    l = s.Live2DCubismFramework.csmVector,
                    c = n.Live2DCubismFramework.csmMap,
                    _ = o.Live2DCubismFramework.csmString;
                ! function(t) {
                    var e = "Error: type mismatch",
                        i = function() {
                            function t() {}
                            return t.prototype.getRawString = function(t, e) {
                                return this.getString(t, e)
                            }, t.prototype.toInt = function(t) {
                                return void 0 === t && (t = 0), t
                            }, t.prototype.toFloat = function(t) {
                                return void 0 === t && (t = 0), t
                            }, t.prototype.toBoolean = function(t) {
                                return void 0 === t && (t = !1), t
                            }, t.prototype.getSize = function() {
                                return 0
                            }, t.prototype.getArray = function(t) {
                                return void 0 === t && (t = null), t
                            }, t.prototype.getVector = function(t) {
                                return t
                            }, t.prototype.getMap = function(t) {
                                return t
                            }, t.prototype.getValueByIndex = function(i) {
                                return t.errorValue.setErrorNotForClientCall(e)
                            }, t.prototype.getValueByString = function(i) {
                                return t.nullValue.setErrorNotForClientCall(e)
                            }, t.prototype.getKeys = function() {
                                return t.s_dummyKeys
                            }, t.prototype.isError = function() {
                                return !1
                            }, t.prototype.isNull = function() {
                                return !1
                            }, t.prototype.isBool = function() {
                                return !1
                            }, t.prototype.isFloat = function() {
                                return !1
                            }, t.prototype.isString = function() {
                                return !1
                            }, t.prototype.isArray = function() {
                                return !1
                            }, t.prototype.isMap = function() {
                                return !1
                            }, t.prototype.equals = function(t) {
                                return !1
                            }, t.prototype.isStatic = function() {
                                return !1
                            }, t.prototype.setErrorNotForClientCall = function(t) {
                                return f.errorValue
                            }, t.staticInitializeNotForClientCall = function() {
                                n.trueValue = new n(!0), n.falseValue = new n(!1), f.errorValue = new f("ERROR", !0), this.nullValue = new p, t.s_dummyKeys = new l
                            }, t.staticReleaseNotForClientCall = function() {
                                n.trueValue = null, n.falseValue = null, f.errorValue = null, t.nullValue = null, t.s_dummyKeys = null, n.trueValue = null, n.falseValue = null, f.errorValue = null, t.nullValue = null, t.s_dummyKeys = null
                            }, t
                        }();
                    t.Value = i;
                    var a = function() {
                        function t(t, e) {
                            this._error = null, this._lineCount = 0, this._root = null, null != t && this.parseBytes(t, e)
                        }
                        return t.create = function(e, i) {
                            var a = new t;
                            return a.parseBytes(e, i) ? a : (t.delete(a), null)
                        }, t.delete = function(t) {}, t.prototype.getRoot = function() {
                            return this._root
                        }, t.prototype.arrayBufferToString = function(t) {
                            for (var e = new Uint8Array(t), i = "", a = 0, r = e.length; a < r; ++a) i += "%" + this.pad(e[a].toString(16));
                            return decodeURIComponent(i)
                        }, t.prototype.pad = function(t) {
                            return t.length < 2 ? "0" + t : t
                        }, t.prototype.parseBytes = function(t, e) {
                            var i, a = new Array(1),
                                r = this.arrayBufferToString(t);
                            return this._root = this.parseValue(r, e, 0, a), this._error ? (i = "Json parse error : @line " + (this._lineCount + 1) + "\n", this._root = new s(i), u.CubismLogInfo("{0}", this._root.getRawString()), !1) : null != this._root || (this._root = new f(new _(this._error), !1), !1)
                        }, t.prototype.getParseError = function() {
                            return this._error
                        }, t.prototype.checkEndOfFile = function() {
                            return this._root.getArray()[1].equals("EOF")
                        }, t.prototype.parseValue = function(t, e, i, a) {
                            if (this._error) return null;
                            for (var r, u = null, l = i; l < e; l++) switch (t[l]) {
                                case "-":
                                case ".":
                                case "0":
                                case "1":
                                case "2":
                                case "3":
                                case "4":
                                case "5":
                                case "6":
                                case "7":
                                case "8":
                                case "9":
                                    var c = new Array(1);
                                    return r = h.strtod(t.slice(l), c), a[0] = t.indexOf(c[0]), new o(r);
                                case '"':
                                    return new s(this.parseString(t, e, l + 1, a));
                                case "[":
                                    return this.parseArray(t, e, l + 1, a);
                                case "{":
                                    return this.parseObject(t, e, l + 1, a);
                                case "n":
                                    return l + 3 < e ? (u = new p, a[0] = l + 4) : this._error = "parse null", u;
                                case "t":
                                    return l + 3 < e ? (u = n.trueValue, a[0] = l + 4) : this._error = "parse true", u;
                                case "f":
                                    return l + 4 < e ? (u = n.falseValue, a[0] = l + 5) : this._error = "illegal ',' position", u;
                                case ",":
                                    return this._error = "illegal ',' position", null;
                                case "]":
                                    return a[0] = l, null;
                                case "\n":
                                    this._lineCount++
                            }
                            return this._error = "illegal end of value", null
                        }, t.prototype.parseString = function(t, e, i, a) {
                            if (this._error) return null;
                            for (var r = i, o = new _(""), n = i; r < e; r++) switch (t[r]) {
                                case '"':
                                    return a[0] = r + 1, o.append(t.slice(n), r - n), o.s;
                                case "//":
                                    if (++r - 1 > n && o.append(t.slice(n), r - n), n = r + 1, r < e) switch (t[r]) {
                                        case "\\":
                                            o.expansion(1, "\\");
                                            break;
                                        case '"':
                                            o.expansion(1, '"');
                                            break;
                                        case "/":
                                            o.expansion(1, "/");
                                            break;
                                        case "b":
                                            o.expansion(1, "\b");
                                            break;
                                        case "f":
                                            o.expansion(1, "\f");
                                            break;
                                        case "n":
                                            o.expansion(1, "\n");
                                            break;
                                        case "r":
                                            o.expansion(1, "\r");
                                            break;
                                        case "t":
                                            o.expansion(1, "\t");
                                            break;
                                        case "u":
                                            this._error = "parse string/unicord escape not supported"
                                    } else this._error = "parse string/escape error"
                            }
                            return this._error = "parse string/illegal end", null
                        }, t.prototype.parseObject = function(t, e, i, a) {
                            if (this._error) return null;
                            for (var r = new d, o = "", n = i, s = Array(1), u = !1; n < e; n++) {
                                t: for (; n < e; n++) switch (t[n]) {
                                    case '"':
                                        if (o = this.parseString(t, e, n + 1, s), this._error) return null;
                                        n = s[0], u = !0;
                                        break t;
                                    case "}":
                                        return a[0] = n + 1, r;
                                    case ":":
                                        this._error = "illegal ':' position";
                                        break;
                                    case "\n":
                                        this._lineCount++
                                }
                                if (!u) return this._error = "key not found",
                                null;u = !1;t: for (; n < e; n++) switch (t[n]) {
                                    case ":":
                                        u = !0, n++;
                                        break t;
                                    case "}":
                                        this._error = "illegal '}' position";
                                        break;
                                    case "\n":
                                        this._lineCount++
                                }
                                if (!u) return this._error = "':' not found",
                                null;
                                var h = this.parseValue(t, e, n, s);
                                if (this._error) return null;n = s[0],
                                r.put(o, h);t: for (; n < e; n++) switch (t[n]) {
                                    case ",":
                                        break t;
                                    case "}":
                                        return a[0] = n + 1, r;
                                    case "\n":
                                        this._lineCount++
                                }
                            }
                            return this._error = "illegal end of perseObject", null
                        }, t.prototype.parseArray = function(t, e, i, a) {
                            if (this._error) return null;
                            for (var r = new g, o = i, n = new Array(1); o < e; o++) {
                                var s = this.parseValue(t, e, o, n);
                                if (this._error) return null;
                                o = n[0], s && r.add(s);
                                t: for (; o < e; o++) switch (t[o]) {
                                    case ",":
                                        break t;
                                    case "]":
                                        return a[0] = o + 1, r;
                                    case "\n":
                                        ++this._lineCount
                                }
                            }
                            return r = void 0, this._error = "illegal end of parseObject", null
                        }, t
                    }();
                    t.CubismJson = a;
                    var o = function(t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return i._value = e, i
                        }
                        return r(e, t), e.prototype.isFloat = function() {
                            return !0
                        }, e.prototype.getString = function(t, e) {
                            return this._value = parseFloat("\0"), this._stringBuffer = "\0", this._stringBuffer
                        }, e.prototype.toInt = function(t) {
                            return void 0 === t && (t = 0), parseInt(this._value.toString())
                        }, e.prototype.toFloat = function(t) {
                            return void 0 === t && (t = 0), this._value
                        }, e.prototype.equals = function(t) {
                            return "number" == typeof t && !Math.round(t) && t == this._value
                        }, e
                    }(i);
                    t.JsonFloat = o;
                    var n = function(t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return i._boolValue = e, i
                        }
                        return r(e, t), e.prototype.isBool = function() {
                            return !0
                        }, e.prototype.toBoolean = function(t) {
                            return void 0 === t && (t = !1), this._boolValue
                        }, e.prototype.getString = function(t, e) {
                            return this._stringBuffer = this._boolValue ? "true" : "false", this._stringBuffer
                        }, e.prototype.equals = function(t) {
                            return "boolean" == typeof t && t == this._boolValue
                        }, e.prototype.isStatic = function() {
                            return !0
                        }, e
                    }(i);
                    t.JsonBoolean = n;
                    var s = function(t) {
                        function e(e) {
                            var i = t.call(this) || this;
                            return "string" == typeof e && (i._stringBuffer = e), e instanceof _ && (i._stringBuffer = e.s), i
                        }
                        return r(e, t), e.prototype.isString = function() {
                            return !0
                        }, e.prototype.getString = function(t, e) {
                            return this._stringBuffer
                        }, e.prototype.equals = function(t) {
                            return "string" == typeof t ? this._stringBuffer == t : t instanceof _ && this._stringBuffer == t.s
                        }, e
                    }(i);
                    t.JsonString = s;
                    var f = function(t) {
                        function e(e, i) {
                            var a = this;
                            return (a = t.call(this, e) || this)._isStatic = i, a
                        }
                        return r(e, t), e.prototype.isStatic = function() {
                            return this._isStatic
                        }, e.prototype.setErrorNotForClientCall = function(t) {
                            return this._stringBuffer = t, this
                        }, e.prototype.isError = function() {
                            return !0
                        }, e
                    }(s);
                    t.JsonError = f;
                    var p = function(t) {
                        function e() {
                            var e = t.call(this) || this;
                            return e._stringBuffer = "NullValue", e
                        }
                        return r(e, t), e.prototype.isNull = function() {
                            return !0
                        }, e.prototype.getString = function(t, e) {
                            return this._stringBuffer
                        }, e.prototype.isStatic = function() {
                            return !0
                        }, e
                    }(i);
                    t.JsonNullvalue = p;
                    var g = function(t) {
                        function a() {
                            var e = t.call(this) || this;
                            return e._array = new l, e
                        }
                        return r(a, t), a.prototype.release = function() {
                            for (var t = this._array.begin(); t.notEqual(this._array.end()); t.preIncrement()) {
                                var e = t.ptr();
                                e && !e.isStatic() && (e = void 0, e = null)
                            }
                        }, a.prototype.isArray = function() {
                            return !0
                        }, a.prototype.getValueByIndex = function(t) {
                            if (t < 0 || this._array.getSize() <= t) return i.errorValue.setErrorNotForClientCall("Error: index out of bounds");
                            var e = this._array.at(t);
                            return null == e ? i.nullValue : e
                        }, a.prototype.getValueByString = function(t) {
                            return i.errorValue.setErrorNotForClientCall(e)
                        }, a.prototype.getString = function(t, e) {
                            for (var i = e + "[\n", a = this._array.begin(); a.notEqual(this._array.end()); a.increment()) {
                                var r = a.ptr();
                                this._stringBuffer += e + "" + r.getString(e + " ") + "\n"
                            }
                            return this._stringBuffer = i + e + "]\n", this._stringBuffer
                        }, a.prototype.add = function(t) {
                            this._array.pushBack(t)
                        }, a.prototype.getVector = function(t) {
                            return void 0 === t && (t = null), this._array
                        }, a.prototype.getSize = function() {
                            return this._array.getSize()
                        }, a
                    }(i);
                    t.JsonArray = g;
                    var d = function(t) {
                        function a() {
                            var e = t.call(this) || this;
                            return e._map = new c, e
                        }
                        return r(a, t), a.prototype.release = function() {
                            for (var t = this._map.begin(); t.notEqual(this._map.end());) {
                                var e = t.ptr().second;
                                e && !e.isStatic() && (e = void 0, e = null), t.preIncrement()
                            }
                        }, a.prototype.isMap = function() {
                            return !0
                        }, a.prototype.getValueByString = function(t) {
                            if (t instanceof _) {
                                var e = this._map.getValue(t.s);
                                return null == e ? i.nullValue : e
                            }
                            for (var a = this._map.begin(); a.notEqual(this._map.end()); a.preIncrement())
                                if (a.ptr().first == t) return null == a.ptr().second ? i.nullValue : a.ptr().second;
                            return i.nullValue
                        }, a.prototype.getValueByIndex = function(t) {
                            return i.errorValue.setErrorNotForClientCall(e)
                        }, a.prototype.getString = function(t, e) {
                            this._stringBuffer = e + "{\n";
                            for (var i = this._map.begin(); i.notEqual(this._map.end());) {
                                var a = i.ptr().first,
                                    r = i.ptr().second;
                                this._stringBuffer += e + " " + a + " : " + r.getString(e + "   ") + " \n", i.preIncrement()
                            }
                            return this._stringBuffer += e + "}\n", this._stringBuffer
                        }, a.prototype.getMap = function(t) {
                            return this._map
                        }, a.prototype.put = function(t, e) {
                            this._map.setValue(t, e)
                        }, a.prototype.getKeys = function() {
                            if (!this._keys) {
                                this._keys = new l;
                                for (var t = this._map.begin(); t.notEqual(this._map.end());) {
                                    var e = t.ptr().first;
                                    this._keys.pushBack(e), t.preIncrement()
                                }
                            }
                            return this._keys
                        }, a.prototype.getSize = function() {
                            return this._keys.getSize()
                        }, a
                    }(i);
                    t.JsonMap = d
                }(e.Live2DCubismFramework || (e.Live2DCubismFramework = {}))
            },
            3105: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.setPreLoadMotion = e.defineDebug = e.defineModelPath = e.setCaptureCanvas = e.captureCanvas = e.preLoadMotion = e.modelJsonName = e.modelPath = e.RenderTargetHeight = e.RenderTargetWidth = e.CubismLoggingLevel = e.DebugTouchLogEnable = e.DebugLogEnable = e.PriorityForce = e.PriorityNormal = e.PriorityIdle = e.PriorityNone = e.HitAreaNameBody = e.HitAreaNameHead = e.MotionGroupTapHead = e.MotionGroupTapBody = e.MotionGroupIdle = e.ViewLogicalMaxTop = e.ViewLogicalMaxBottom = e.ViewLogicalMaxRight = e.ViewLogicalMaxLeft = e.ViewLogicalRight = e.ViewLogicalLeft = e.ViewMinScale = e.ViewMaxScale = void 0;
                var a = i(3051);
                e.ViewMaxScale = 2, e.ViewMinScale = .8, e.ViewLogicalLeft = -1, e.ViewLogicalRight = 1, e.ViewLogicalMaxLeft = -2, e.ViewLogicalMaxRight = 2, e.ViewLogicalMaxBottom = -2, e.ViewLogicalMaxTop = 2, e.MotionGroupIdle = "Idle", e.MotionGroupTapBody = "TapBody", e.MotionGroupTapHead = "TapHead", e.HitAreaNameHead = "Head", e.HitAreaNameBody = "Body", e.PriorityNone = 0, e.PriorityIdle = 1, e.PriorityNormal = 2, e.PriorityForce = 3, e.CubismLoggingLevel = a.LogLevel.LogLevel_Verbose, e.RenderTargetWidth = 1900, e.RenderTargetHeight = 1e3, e.setCaptureCanvas = function(t) {
                    this.captureCanvas = t
                }, e.defineModelPath = function(t, e) {
                    this.modelPath = t, this.modelJsonName = e
                }, e.defineDebug = function(t, e) {
                    this.DebugLogEnable = t, this.DebugTouchLogEnable = e
                }, e.setPreLoadMotion = function(t) {
                    this.preLoadMotion = t
                }
            },
            8010: function(t, e, i) {
                "use strict";
                var a = this && this.__createBinding || (Object.create ? function(t, e, i, a) {
                        void 0 === a && (a = i), Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[i]
                            }
                        })
                    } : function(t, e, i, a) {
                        void 0 === a && (a = i), t[a] = e[i]
                    }),
                    r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    o = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var i in t) "default" !== i && Object.hasOwnProperty.call(t, i) && a(e, t, i);
                        return r(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LAppDelegate = e.frameBuffer = e.gl = e.s_instance = e.canvas = void 0;
                var n = i(3051),
                    s = n.Live2DCubismFramework.CubismFramework,
                    u = i(1843),
                    h = i(5644),
                    l = i(5231),
                    c = i(2394),
                    _ = o(i(3105));
                e.canvas = null, e.s_instance = null, e.gl = null, e.frameBuffer = null;
                var f = function() {
                    function t() {
                        this._captured = !1, this._mouseX = 0, this._mouseY = 0, this._isEnd = !1, this._cubismOption = new n.Option, this._view = new u.LAppView, this._textureManager = new l.LAppTextureManager
                    }
                    return t.getInstance = function() {
                        return null == e.s_instance && (e.s_instance = new t), e.s_instance
                    }, t.releaseInstance = function() {
                        null != e.s_instance && e.s_instance.release(), e.s_instance = null
                    }, t.prototype.initialize = function(t) {
                        return e.canvas = document.getElementById(t), e.gl = e.canvas.getContext("webgl") || e.canvas.getContext("experimental-webgl"), e.gl ? (e.frameBuffer || (e.frameBuffer = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING)), e.gl.enable(e.gl.BLEND), e.gl.blendFunc(e.gl.SRC_ALPHA, e.gl.ONE_MINUS_SRC_ALPHA), "ontouchend" in e.canvas ? (window.ontouchstart = b, window.ontouchmove = y, window.ontouchend = v, window.ontouchcancel = q) : (e.canvas.onmousedown = p, window.onmousemove = g, window.onmouseout = d, e.canvas.onmouseup = m), this._view.initialize(), this.initializeCubism(), !0) : (console.error("Cannot initialize WebGL. This browser does not support."), e.gl = null, document.body.innerHTML = "This browser does not support the <code>&lt;canvas&gt;</code> element.", !1)
                    }, t.prototype.release = function() {
                        window.ontouchstart = void 0, window.ontouchmove = void 0, window.ontouchend = void 0, window.ontouchcancel = void 0, e.canvas.onmousedown = void 0, window.onmousemove = void 0, window.onmouseout = void 0, e.canvas.onmouseup = void 0, this._textureManager.release(), this._textureManager = null, this._view.release(), this._view = null, c.LAppLive2DManager.releaseInstance(), s.dispose()
                    }, t.prototype.run = function() {
                        var t = this,
                            i = function() {
                                null != e.s_instance && (h.LAppPal.updateTime(), e.gl.clearColor(0, 0, 0, 0), e.gl.enable(e.gl.DEPTH_TEST), e.gl.depthFunc(e.gl.LEQUAL), e.gl.clear(e.gl.COLOR_BUFFER_BIT | e.gl.DEPTH_BUFFER_BIT), e.gl.clearDepth(1), e.gl.enable(e.gl.BLEND), e.gl.blendFunc(e.gl.SRC_ALPHA, e.gl.ONE_MINUS_SRC_ALPHA), t._view.render(), _.captureCanvas && (_.setCaptureCanvas(!1), e.canvas.toBlob(window.downloadCap)), requestAnimationFrame(i))
                            };
                        i()
                    }, t.prototype.createShader = function() {
                        var t = e.gl.createShader(e.gl.VERTEX_SHADER);
                        if (null == t) return h.LAppPal.printMessage("failed to create vertexShader"), null;
                        e.gl.shaderSource(t, "precision mediump float;attribute vec3 position;attribute vec2 uv;varying vec2 vuv;void main(void){   gl_Position = vec4(position, 1.0);   vuv = uv;}"), e.gl.compileShader(t);
                        var i = e.gl.createShader(e.gl.FRAGMENT_SHADER);
                        if (null == i) return h.LAppPal.printMessage("failed to create fragmentShader"), null;
                        e.gl.shaderSource(i, "precision mediump float;varying vec2 vuv;uniform sampler2D texture;void main(void){   gl_FragColor = texture2D(texture, vuv);}"), e.gl.compileShader(i);
                        var a = e.gl.createProgram();
                        return e.gl.attachShader(a, t), e.gl.attachShader(a, i), e.gl.deleteShader(t), e.gl.deleteShader(i), e.gl.linkProgram(a), e.gl.useProgram(a), a
                    }, t.prototype.getView = function() {
                        return this._view
                    }, t.prototype.getTextureManager = function() {
                        return this._textureManager
                    }, t.prototype.initializeCubism = function() {
                        this._cubismOption.logFunction = h.LAppPal.printMessage, this._cubismOption.loggingLevel = _.CubismLoggingLevel, s.startUp(this._cubismOption), s.initialize(), c.LAppLive2DManager.getInstance(), h.LAppPal.updateTime(), this._view.initializeSprite()
                    }, t
                }();

                function p(t) {
                    if (f.getInstance()._view) {
                        f.getInstance()._captured = !0;
                        var e = t.pageX,
                            i = t.pageY;
                        f.getInstance()._view.onTouchesBegan(e, i)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function g(t) {
                    if (f.getInstance()._view && f.getInstance()._view._programId) {
                        var i = e.canvas.getBoundingClientRect(),
                            a = t.clientX - i.left,
                            r = t.clientY - i.top;
                        f.getInstance()._view.onTouchesMoved(a, r)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function d(t) {
                    if (t.clientY <= 0 || t.clientX <= 0 || t.clientX >= window.innerWidth - 6 || t.clientY >= window.innerHeight - 6) {
                        if (_.DebugLogEnable && h.LAppPal.printMessage("[Live2Dv4] onMouseLeave"), !f.getInstance()._view || !f.getInstance()._view._programId) return void h.LAppPal.printMessage("view notfound");
                        c.LAppLive2DManager.getInstance().onDrag(0, 0)
                    }
                }

                function m(t) {
                    if (f.getInstance()._captured = !1, f.getInstance()._view && f.getInstance()._view._programId) {
                        var e = t.target.getBoundingClientRect(),
                            i = t.clientX - e.left,
                            a = t.clientY - e.top;
                        _.DebugLogEnable && h.LAppPal.printMessage("[Live2Dv4] onClickEnded:\n       rect left: " + e.left.toFixed(2) + " rect top: " + e.top.toFixed(2) + "\n       clientX: " + t.clientX.toFixed(2) + " clientY: " + t.clientY.toFixed(2)), f.getInstance()._view.onTouchesEnded(i, a)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function b(t) {
                    if (f.getInstance()._view) {
                        f.getInstance()._captured = !0;
                        var i = e.canvas.getBoundingClientRect(),
                            a = t.changedTouches[0].clientX - i.left,
                            r = t.changedTouches[0].clientY - i.top;
                        f.getInstance()._view.onTouchesMoved(a, r)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function y(t) {
                    if (f.getInstance()._view) {
                        var i = e.canvas.getBoundingClientRect(),
                            a = t.changedTouches[0].clientX - i.left,
                            r = t.changedTouches[0].clientY - i.top;
                        f.getInstance()._view.onTouchesMoved(a, r)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function v(t) {
                    if (f.getInstance()._captured = !1, f.getInstance()._view) {
                        c.LAppLive2DManager.getInstance().onDrag(0, 0);
                        var i = e.canvas.getBoundingClientRect(),
                            a = t.changedTouches[0].clientX - i.left,
                            r = t.changedTouches[0].clientY - i.top;
                        f.getInstance()._view.onTouchesEnded(a, r)
                    } else h.LAppPal.printMessage("view notfound")
                }

                function q(t) {
                    if (f.getInstance()._captured = !1, f.getInstance()._view) {
                        c.LAppLive2DManager.getInstance().onDrag(0, 0);
                        var i = e.canvas.getBoundingClientRect(),
                            a = t.changedTouches[0].clientX - i.left,
                            r = t.changedTouches[0].clientY - i.top;
                        f.getInstance()._view.onTouchesEnded(a, r)
                    } else h.LAppPal.printMessage("view notfound")
                }
                e.LAppDelegate = f
            },
            2394: function(t, e, i) {
                "use strict";
                var a = this && this.__createBinding || (Object.create ? function(t, e, i, a) {
                        void 0 === a && (a = i), Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[i]
                            }
                        })
                    } : function(t, e, i, a) {
                        void 0 === a && (a = i), t[a] = e[i]
                    }),
                    r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    o = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var i in t) "default" !== i && Object.hasOwnProperty.call(t, i) && a(e, t, i);
                        return r(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LAppLive2DManager = e.s_instance = void 0;
                var n = i(2900),
                    s = i(3023).Live2DCubismFramework.csmVector,
                    u = n.Live2DCubismFramework.CubismMatrix44,
                    h = i(6955),
                    l = i(5644),
                    c = i(8010),
                    _ = o(i(3105));
                e.s_instance = null;
                var f = function() {
                    function t() {
                        this._finishedMotion = function(t) {
                            _.DebugLogEnable && l.LAppPal.printMessage("[Live2Dv4] Motion Finished")
                        }, this._viewMatrix = new u, this._models = new s, this.changeScene(_.modelPath, _.modelJsonName)
                    }
                    return t.getInstance = function() {
                        return null == e.s_instance && (e.s_instance = new t), e.s_instance
                    }, t.releaseInstance = function() {
                        null != e.s_instance && (e.s_instance = void 0), e.s_instance = null
                    }, t.prototype.getModel = function(t) {
                        return t < this._models.getSize() ? this._models.at(t) : null
                    }, t.prototype.releaseAllModel = function() {
                        for (var t = 0; t < this._models.getSize(); t++) this._models.at(t).release(), this._models.set(t, null);
                        this._models.clear()
                    }, t.prototype.onDrag = function(t, e) {
                        for (var i = 0; i < this._models.getSize(); i++) {
                            var a = this.getModel(i);
                            a && a.setDragging(t, e)
                        }
                    }, t.prototype.onTap = function(t, e) {
                        _.DebugLogEnable && l.LAppPal.printMessage("[Live2Dv4] tap point: {x: " + t.toFixed(2) + " y: " + e.toFixed(2) + "}");
                        for (var i = 0; i < this._models.getSize(); i++) {
                            var a = this._models.at(i).getHitAreaName(t, e);
                            a && (_.DebugLogEnable && l.LAppPal.printMessage("[Live2Dv4] hit area: [" + a + "]"), this._models.at(i).startRandomMotion("Tap" + a, _.PriorityNormal, this._finishedMotion))
                        }
                    }, t.prototype.onUpdate = function() {
                        var t = new u,
                            e = c.canvas.width,
                            i = c.canvas.height;
                        t.scale(1, e / i), null != this._viewMatrix && t.multiplyByMatrix(this._viewMatrix);
                        for (var a = t.clone(), r = this._models.getSize(), o = 0; o < r; ++o) {
                            var n = this.getModel(o);
                            t = a.clone(), n.update(), n.draw(t)
                        }
                    }, t.prototype.changeScene = function(t, e) {
                        _.DebugLogEnable && l.LAppPal.printMessage("[Live2Dv4] load model: " + e), this.releaseAllModel(), this._models.pushBack(new h.LAppModel(_.DebugLogEnable)), this._models.at(0).loadAssets(t, e)
                    }, t
                }();
                e.LAppLive2DManager = f
            },
            6955: function(t, e, i) {
                "use strict";
                var a, r = this && this.__extends || (a = function(t, e) {
                        return (a = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(t, e) {
                                t.__proto__ = e
                            } || function(t, e) {
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                            })(t, e)
                    }, function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        a(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
                    }),
                    o = this && this.__createBinding || (Object.create ? function(t, e, i, a) {
                        void 0 === a && (a = i), Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[i]
                            }
                        })
                    } : function(t, e, i, a) {
                        void 0 === a && (a = i), t[a] = e[i]
                    }),
                    n = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    s = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var i in t) "default" !== i && Object.hasOwnProperty.call(t, i) && o(e, t, i);
                        return n(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LAppModel = void 0;
                var u, h = i(3051),
                    l = i(3897),
                    c = i(3166),
                    _ = i(7269),
                    f = i(4388),
                    p = i(4514),
                    g = i(6849),
                    d = i(3023),
                    m = i(3621),
                    b = i(4585),
                    y = i(2307),
                    v = b.Live2DCubismFramework.InvalidMotionQueueEntryHandleValue,
                    q = m.Live2DCubismFramework.csmMap,
                    $ = d.Live2DCubismFramework.csmVector,
                    A = g.Live2DCubismFramework.CubismBreath,
                    x = g.Live2DCubismFramework.BreathParameterData,
                    w = p.Live2DCubismFramework.CubismEyeBlink,
                    S = f.Live2DCubismFramework.ACubismMotion,
                    L = h.Live2DCubismFramework.CubismFramework,
                    P = l.Live2DCubismFramework.CubismUserModel,
                    C = c.Live2DCubismFramework.CubismModelSettingJson,
                    M = _.Live2DCubismFramework,
                    T = i(5644),
                    D = i(8010),
                    I = s(i(3105));
                i(7147),
                    function(t) {
                        t[t.LoadAssets = 0] = "LoadAssets", t[t.LoadModel = 1] = "LoadModel", t[t.WaitLoadModel = 2] = "WaitLoadModel", t[t.LoadExpression = 3] = "LoadExpression", t[t.WaitLoadExpression = 4] = "WaitLoadExpression", t[t.LoadPhysics = 5] = "LoadPhysics", t[t.WaitLoadPhysics = 6] = "WaitLoadPhysics", t[t.LoadPose = 7] = "LoadPose", t[t.WaitLoadPose = 8] = "WaitLoadPose", t[t.SetupEyeBlink = 9] = "SetupEyeBlink", t[t.SetupBreath = 10] = "SetupBreath", t[t.LoadUserData = 11] = "LoadUserData", t[t.WaitLoadUserData = 12] = "WaitLoadUserData", t[t.SetupEyeBlinkIds = 13] = "SetupEyeBlinkIds", t[t.SetupLipSyncIds = 14] = "SetupLipSyncIds", t[t.SetupLayout = 15] = "SetupLayout", t[t.LoadMotion = 16] = "LoadMotion", t[t.WaitLoadMotion = 17] = "WaitLoadMotion", t[t.CompleteInitialize = 18] = "CompleteInitialize", t[t.CompleteSetupModel = 19] = "CompleteSetupModel", t[t.LoadTexture = 20] = "LoadTexture", t[t.WaitLoadTexture = 21] = "WaitLoadTexture", t[t.CompleteSetup = 22] = "CompleteSetup"
                    }(u || (u = {}));
                var E = function(t) {
                    function e(e) {
                        var i = t.call(this, e) || this;
                        return i._modelSetting = null, i._modelHomeDir = null, i._userTimeSeconds = 0, i._eyeBlinkIds = new $, i._lipSyncIds = new $, i._motions = new q, i._expressions = new q, i._hitArea = new $, i._userArea = new $, i._idParamAngleX = L.getIdManager().getId(M.ParamAngleX), i._idParamAngleY = L.getIdManager().getId(M.ParamAngleY), i._idParamAngleZ = L.getIdManager().getId(M.ParamAngleZ), i._idParamEyeBallX = L.getIdManager().getId(M.ParamEyeBallX), i._idParamEyeBallY = L.getIdManager().getId(M.ParamEyeBallY), i._idParamBodyAngleX = L.getIdManager().getId(M.ParamBodyAngleX), i._state = u.LoadAssets, i._expressionCount = 0, i._textureCount = 0, i._motionCount = 0, i._allMotionCount = 0, i
                    }
                    return r(e, t), e.prototype.loadAssets = function(t, e) {
                        var i = this;
                        this._modelHomeDir = t, fetch(this._modelHomeDir + "/" + e).then((function(t) {
                            return t.arrayBuffer()
                        })).then((function(t) {
                            var e = new C(t, t.byteLength);
                            i._state = u.LoadModel, i.setupModel(e)
                        }))
                    }, e.prototype.setupModel = function(t) {
                        var e = this;
                        if (this._updating = !0, this._initialized = !1, this._modelSetting = t, "" != this._modelSetting.getModelFileName()) {
                            var i = this._modelSetting.getModelFileName();
                            fetch(this._modelHomeDir + "/" + i).then((function(t) {
                                return t.arrayBuffer()
                            })).then((function(t) {
                                e.loadModel(t), e._state = u.LoadExpression, a()
                            })), this._state = u.WaitLoadModel
                        } else T.LAppPal.printMessage("Model data does not exist.");
                        var a = function() {
                                if (e._modelSetting.getExpressionCount() > 0) {
                                    for (var t = e._modelSetting.getExpressionCount(), i = function(i) {
                                            var a = e._modelSetting.getExpressionName(i),
                                                o = e._modelSetting.getExpressionFileName(i);
                                            fetch(e._modelHomeDir + "/" + o).then((function(t) {
                                                return t.arrayBuffer()
                                            })).then((function(i) {
                                                var o = e.loadExpression(i, i.byteLength, a);
                                                null != e._expressions.getValue(a) && (S.delete(e._expressions.getValue(a)), e._expressions.setValue(a, null)), e._expressions.setValue(a, o), e._expressionCount++, e._expressionCount >= t && (e._state = u.LoadPhysics, r())
                                            }))
                                        }, a = 0; a < t; a++) i(a);
                                    e._state = u.WaitLoadExpression
                                } else e._state = u.LoadPhysics, r()
                            },
                            r = function() {
                                if ("" != e._modelSetting.getPhysicsFileName()) {
                                    var t = e._modelSetting.getPhysicsFileName();
                                    fetch(e._modelHomeDir + "/" + t).then((function(t) {
                                        return t.arrayBuffer()
                                    })).then((function(t) {
                                        e.loadPhysics(t, t.byteLength), e._state = u.LoadPose, o()
                                    })), e._state = u.WaitLoadPhysics
                                } else e._state = u.LoadPose, o()
                            },
                            o = function() {
                                if ("" != e._modelSetting.getPoseFileName()) {
                                    var t = e._modelSetting.getPoseFileName();
                                    fetch(e._modelHomeDir + "/" + t).then((function(t) {
                                        return t.arrayBuffer()
                                    })).then((function(t) {
                                        e.loadPose(t, t.byteLength), e._state = u.SetupEyeBlink, n()
                                    })), e._state = u.WaitLoadPose
                                } else e._state = u.SetupEyeBlink, n()
                            },
                            n = function() {
                                e._modelSetting.getEyeBlinkParameterCount() > 0 && (e._eyeBlink = w.create(e._modelSetting), e._state = u.SetupBreath), s()
                            },
                            s = function() {
                                e._breath = A.create();
                                var t = new $;
                                t.pushBack(new x(e._idParamAngleX, 0, 15, 6.5345, .5)), t.pushBack(new x(e._idParamAngleY, 0, 8, 3.5345, .5)), t.pushBack(new x(e._idParamAngleZ, 0, 10, 5.5345, .5)), t.pushBack(new x(e._idParamBodyAngleX, 0, 4, 15.5345, .5)), t.pushBack(new x(L.getIdManager().getId(M.ParamBreath), 0, .5, 3.2345, .5)), e._breath.setParameters(t), e._state = u.LoadUserData, h()
                            },
                            h = function() {
                                if ("" != e._modelSetting.getUserDataFile()) {
                                    var t = e._modelSetting.getUserDataFile();
                                    fetch(e._modelHomeDir + "/" + t).then((function(t) {
                                        return t.arrayBuffer()
                                    })).then((function(t) {
                                        e.loadUserData(t, t.byteLength), e._state = u.SetupEyeBlinkIds, l()
                                    })), e._state = u.WaitLoadUserData
                                } else e._state = u.SetupEyeBlinkIds, l()
                            },
                            l = function() {
                                for (var t = e._modelSetting.getEyeBlinkParameterCount(), i = 0; i < t; ++i) e._eyeBlinkIds.pushBack(e._modelSetting.getEyeBlinkParameterId(i));
                                e._state = u.SetupLipSyncIds, c()
                            },
                            c = function() {
                                for (var t = e._modelSetting.getLipSyncParameterCount(), i = 0; i < t; ++i) e._lipSyncIds.pushBack(e._modelSetting.getLipSyncParameterId(i));
                                e._state = u.SetupLayout, _()
                            },
                            _ = function() {
                                var t = new q;
                                e._modelSetting.getLayoutMap(t), e._modelMatrix.setupFromLayout(t), e._state = u.LoadMotion, f()
                            },
                            f = function() {
                                e._state = u.WaitLoadMotion, e._model.saveParameters(), e._allMotionCount = 0, e._motionCount = 0;
                                for (var t = [], i = e._modelSetting.getMotionGroupCount(), a = 0; a < i; a++) t[a] = e._modelSetting.getMotionGroupName(a), e._allMotionCount += e._modelSetting.getMotionCount(t[a]);
                                if (I.preLoadMotion)
                                    for (I.DebugLogEnable && T.LAppPal.printMessage("perload motion"), a = 0; a < i; a++) e.preLoadMotionGroup(t[a]);
                                else e._state = u.LoadTexture, e._motionManager.stopAllMotions(), e._updating = !1, e._initialized = !0, e.createRenderer(), e.setupTextures(), e.getRenderer().startUp(D.gl), e.startRandomMotion("Start", I.PriorityNormal, (function() {
                                    I.DebugLogEnable && T.LAppPal.printMessage("[Live2Dv4] Start Motion Finished")
                                }))
                            }
                    }, e.prototype.setupTextures = function() {
                        var t = this;
                        if (this._state == u.LoadTexture) {
                            for (var e = this._modelSetting.getTextureCount(), i = function(i) {
                                    if ("" == a._modelSetting.getTextureFileName(i)) return console.log("getTextureFileName null"), "continue";
                                    var r = a._modelSetting.getTextureFileName(i);
                                    r = a._modelHomeDir + "/" + r, D.LAppDelegate.getInstance().getTextureManager().createTextureFromPngFile(r, !0, (function(a) {
                                        t.getRenderer().bindTexture(i, a.id), t._textureCount++, t._textureCount >= e && (t._state = u.CompleteSetup)
                                    })), a.getRenderer().setIsPremultipliedAlpha(!0)
                                }, a = this, r = 0; r < e; r++) i(r);
                            this._state = u.WaitLoadTexture
                        }
                    }, e.prototype.reloadRenderer = function() {
                        this.deleteRenderer(), this.createRenderer(), this.setupTextures()
                    }, e.prototype.update = function() {
                        if (this._state == u.CompleteSetup) {
                            var t = T.LAppPal.getDeltaTime();
                            this._userTimeSeconds += t, this._dragManager.update(t), this._dragX = this._dragManager.getX(), this._dragY = this._dragManager.getY();
                            var e = !1;
                            if (this._model.loadParameters(), this._motionManager.isFinished() ? this.startRandomMotion(I.MotionGroupIdle, I.PriorityIdle) : e = this._motionManager.updateMotion(this._model, t), this._model.saveParameters(), e || null != this._eyeBlink && this._eyeBlink.updateParameters(this._model, t), null != this._expressionManager && this._expressionManager.updateMotion(this._model, t), this._model.addParameterValueById(this._idParamAngleX, 30 * this._dragX), this._model.addParameterValueById(this._idParamAngleY, 30 * this._dragY), this._model.addParameterValueById(this._idParamAngleZ, this._dragX * this._dragY * -30), this._model.addParameterValueById(this._idParamBodyAngleX, 10 * this._dragX), this._model.addParameterValueById(this._idParamEyeBallX, this._dragX), this._model.addParameterValueById(this._idParamEyeBallY, this._dragY), null != this._breath && this._breath.updateParameters(this._model, t), null != this._physics && this._physics.evaluate(this._model, t), this._lipsync)
                                for (var i = 0; i < this._lipSyncIds.getSize(); ++i) this._model.addParameterValueById(this._lipSyncIds.at(i), 0, .8);
                            null != this._pose && this._pose.updateParameters(this._model, t), this._model.update()
                        }
                    }, e.prototype.startMotion = function(t, e, i, a) {
                        var r = this;
                        if (i == I.PriorityForce) this._motionManager.setReservePriority(i);
                        else if (!this._motionManager.reserveMotion(i)) return this._debugMode && T.LAppPal.printMessage("[Live2Dv4] FAIL start motion."), v;
                        var o = this._modelSetting.getMotionFileName(t, e),
                            n = this._modelSetting.getMotionSoundFileName(t, e),
                            s = this._modelSetting.getMotionSoundDelay(t, e);
                        this.playMotionSound(this._modelHomeDir + "/" + n, s);
                        var u = t + "_" + e,
                            h = this._motions.getValue(u),
                            l = !1;
                        return null == h ? (this._debugMode && T.LAppPal.printMessage("[Live2Dv4] load motion: " + o + " => [" + u + "]"), fetch(this._modelHomeDir + "/" + o).then((function(t) {
                            return t.arrayBuffer()
                        })).then((function(o) {
                            h = r.loadMotion(o, o.byteLength, null, a);
                            var n = r._modelSetting.getMotionFadeInTimeValue(t, e);
                            return n >= 0 && h.setFadeInTime(n), (n = r._modelSetting.getMotionFadeOutTimeValue(t, e)) >= 0 && h.setFadeOutTime(n), h.setEffectIds(r._eyeBlinkIds, r._lipSyncIds), l = !1, r._motions.setValue(u, h), r._motionManager.startMotionPriority(h, l, i)
                        }))) : h.setFinishedMotionHandler(a), this._debugMode && T.LAppPal.printMessage("[Live2Dv4] Motion Start: " + t + "_" + e), this._motionManager.startMotionPriority(h, l, i)
                    }, e.prototype.playMotionSound = function(t, e) {
                        var i = this;
                        if (/(\.mp3|\.aac|\.m4a|\.opus|\.ogg|\.caf|\.wav|\.webm|\.flac|\.mp4)$/i.test(t)) {
                            var a = new Audio;
                            a.muted = window.waifuMute;
                            a.src = t, a.autoplay = !0, setTimeout((function() {
                                a.play().then((function() {
                                    return i._debugMode && console.log("[Live2Dv4] play sound: " + t + " delay: " + e)
                                })).catch((function(e) {
                                    return i._debugMode && console.error("[Live2Dv4] FAILED play sound: " + t + " " + e)
                                }))
                            }), e)
                        }
                    }, e.prototype.startRandomMotion = function(t, e, i) {
                        if (0 == this._modelSetting.getMotionCount(t)) return v;
                        var a = Math.floor(Math.random() * this._modelSetting.getMotionCount(t));
                        return this.startMotion(t, a, e, i)
                    }, e.prototype.setExpression = function(t) {
                        var e = this._expressions.getValue(t);
                        this._debugMode && T.LAppPal.printMessage("[Live2Dv4] expression: [" + t + "]"), null != e ? this._expressionManager.startMotionPriority(e, !1, I.PriorityForce) : this._debugMode && T.LAppPal.printMessage("[Live2Dv4] expression[" + t + "] is null")
                    }, e.prototype.setRandomExpression = function() {
                        if (0 != this._expressions.getSize())
                            for (var t = Math.floor(Math.random() * this._expressions.getSize()), e = 0; e < this._expressions.getSize(); e++)
                                if (e == t) {
                                    var i = this._expressions._keyValues[e].first;
                                    return void this.setExpression(i)
                                }
                    }, e.prototype.motionEventFired = function(t) {
                        y.CubismLogInfo("{0} is fired on LAppModel!!", t.s)
                    }, e.prototype.hitTest = function(t, e, i) {
                        if (this._opacity < 1) return !1;
                        for (var a = this._modelSetting.getHitAreasCount(), r = 0; r < a; r++)
                            if (this._modelSetting.getHitAreaName(r) == t) {
                                var o = this._modelSetting.getHitAreaId(r);
                                return this.isHit(o, e, i)
                            } return !1
                    }, e.prototype.getHitAreaName = function(t, e) {
                        if (!(this._opacity < 1))
                            for (var i = this._modelSetting.getHitAreasCount(), a = 0; a < i; a++) {
                                var r = this._modelSetting.getHitAreaId(a);
                                if (this.isHit(r, t, e)) return this._modelSetting.getHitAreaName(a)
                            }
                    }, e.prototype.preLoadMotionGroup = function(t) {
                        for (var e = this, i = function(i) {
                                var r = a._modelSetting.getMotionFileName(t, i),
                                    o = t + "_" + i;
                                a._debugMode && T.LAppPal.printMessage("[Live2Dv4] load motion: " + r + " => [" + o + "]"), fetch(a._modelHomeDir + "/" + r).then((function(t) {
                                    return t.arrayBuffer()
                                })).then((function(a) {
                                    var r = e.loadMotion(a, a.byteLength, o),
                                        n = e._modelSetting.getMotionFadeInTimeValue(t, i);
                                    n >= 0 && r.setFadeInTime(n), (n = e._modelSetting.getMotionFadeOutTimeValue(t, i)) >= 0 && r.setFadeOutTime(n), r.setEffectIds(e._eyeBlinkIds, e._lipSyncIds), null != e._motions.getValue(o) && S.delete(e._motions.getValue(o)), e._motions.setValue(o, r), e._motionCount++, e._motionCount >= e._allMotionCount && (e._state = u.LoadTexture, e._motionManager.stopAllMotions(), e._updating = !1, e._initialized = !0, e.createRenderer(), e.setupTextures(), e.getRenderer().startUp(D.gl), e.startRandomMotion("Start", I.PriorityNormal, (function() {
                                        I.DebugLogEnable && T.LAppPal.printMessage("[Live2Dv4] Start Motion Finished")
                                    })))
                                }))
                            }, a = this, r = 0; r < this._modelSetting.getMotionCount(t); r++) i(r)
                    }, e.prototype.releaseMotions = function() {
                        this._motions.clear()
                    }, e.prototype.releaseExpressions = function() {
                        this._expressions.clear()
                    }, e.prototype.doDraw = function() {
                        if (null != this._model) {
                            var t = [0, 0, D.canvas.width, D.canvas.height];
                            this.getRenderer().setRenderState(D.frameBuffer, t), this.getRenderer().drawModel()
                        }
                    }, e.prototype.draw = function(t) {
                        null != this._model && this._state == u.CompleteSetup && (t.multiplyByMatrix(this._modelMatrix), this.getRenderer().setMvpMatrix(t), this.doDraw())
                    }, e
                }(P);
                e.LAppModel = E
            },
            5644: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LAppPal = void 0;
                var i = function() {
                    function t() {}
                    return t.loadFileAsBytes = function(t, e) {
                        fetch(t).then((function(t) {
                            return t.arrayBuffer()
                        })).then((function(t) {
                            return e(t, t.byteLength)
                        }))
                    }, t.getDeltaTime = function() {
                        return this.s_deltaTime
                    }, t.updateTime = function() {
                        this.s_currentFrame = Date.now(), this.s_deltaTime = (this.s_currentFrame - this.s_lastFrame) / 1e3, this.s_lastFrame = this.s_currentFrame
                    }, t.printMessage = function(t) {
                        console.log(t.indexOf("[Live2Dv4]") > -1 ? t : "[Live2Dv4] " + t)
                    }, t.lastUpdate = Date.now(), t.s_currentFrame = 0, t.s_lastFrame = 0, t.s_deltaTime = 0, t
                }();
                e.LAppPal = i
            },
            5231: (t, e, i) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TextureInfo = e.LAppTextureManager = void 0;
                var a = i(3023).Live2DCubismFramework.csmVector,
                    r = i(8010),
                    o = function() {
                        function t() {
                            this._textures = new a
                        }
                        return t.prototype.release = function() {
                            for (var t = this._textures.begin(); t.notEqual(this._textures.end()); t.preIncrement()) r.gl.deleteTexture(t.ptr().id);
                            this._textures = null
                        }, t.prototype.createTextureFromPngFile = function(t, e, i) {
                            for (var a = this, o = function(a) {
                                    if (a.ptr().fileName == t && a.ptr().usePremultply == e) {
                                        !0 === window.webpReady && (t = t.concat(".webp"));
                                        var r = !1;
                                        return a.ptr().img = new Image, a.ptr().img.crossOrigin = "anonymous", a.ptr().img.onload = function() {
                                            return i(a.ptr())
                                        }, a.ptr().img.src = t, a.ptr().img.onerror = function() {
                                            !0 === window.webpReady && !1 === r ? (console.error("Failed to load WebP image: " + a.ptr().img.src + " Load origin file instead."), r = !0, a.ptr().img.src = t.replace(/\.webp$/, "")) : console.error("Failed to load image: " + a.ptr().img.src)
                                        }, {
                                            value: void 0
                                        }
                                    }
                                }, s = this._textures.begin(); s.notEqual(this._textures.end()); s.preIncrement()) {
                                var u = o(s);
                                if ("object" == typeof u) return u.value
                            }!0 === window.webpReady && (t = t.concat(".webp"));
                            var h = !1,
                                l = new Image;
                            l.crossOrigin = "anonymous", l.onload = function() {
                                var o = r.gl.createTexture();
                                r.gl.bindTexture(r.gl.TEXTURE_2D, o), r.gl.texParameteri(r.gl.TEXTURE_2D, r.gl.TEXTURE_MIN_FILTER, r.gl.LINEAR_MIPMAP_LINEAR), r.gl.texParameteri(r.gl.TEXTURE_2D, r.gl.TEXTURE_MAG_FILTER, r.gl.LINEAR), e && r.gl.pixelStorei(r.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), r.gl.texImage2D(r.gl.TEXTURE_2D, 0, r.gl.RGBA, r.gl.RGBA, r.gl.UNSIGNED_BYTE, l), r.gl.generateMipmap(r.gl.TEXTURE_2D), r.gl.bindTexture(r.gl.TEXTURE_2D, null);
                                var s = new n;
                                null != s && (s.fileName = t, s.width = l.width, s.height = l.height, s.id = o, s.img = l, s.usePremultply = e, a._textures.pushBack(s)), i(s)
                            }, l.onerror = function() {
                                !0 === window.webpReady && !1 === h ? (console.error("Failed to load WebP image: " + l.src + " Load origin file instead."), h = !0, l.src = t.replace(/\.webp$/, "")) : console.error("Failed to load image: " + l.src)
                            }, l.src = t
                        }, t.prototype.releaseTextures = function() {
                            for (var t = 0; t < this._textures.getSize(); t++) this._textures.set(t, null);
                            this._textures.clear()
                        }, t.prototype.releaseTextureByTexture = function(t) {
                            for (var e = 0; e < this._textures.getSize(); e++)
                                if (this._textures.at(e).id == t) {
                                    this._textures.set(e, null), this._textures.remove(e);
                                    break
                                }
                        }, t.prototype.releaseTextureByFilePath = function(t) {
                            for (var e = 0; e < this._textures.getSize(); e++)
                                if (this._textures.at(e).fileName == t) {
                                    this._textures.set(e, null), this._textures.remove(e);
                                    break
                                }
                        }, t
                    }();
                e.LAppTextureManager = o;
                var n = function() {
                    this.id = null, this.width = 0, this.height = 0
                };
                e.TextureInfo = n
            },
            1843: function(t, e, i) {
                "use strict";
                var a = this && this.__createBinding || (Object.create ? function(t, e, i, a) {
                        void 0 === a && (a = i), Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[i]
                            }
                        })
                    } : function(t, e, i, a) {
                        void 0 === a && (a = i), t[a] = e[i]
                    }),
                    r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    o = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var i in t) "default" !== i && Object.hasOwnProperty.call(t, i) && a(e, t, i);
                        return r(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.LAppView = void 0;
                var n = i(2900),
                    s = i(1498).Live2DCubismFramework.CubismViewMatrix,
                    u = n.Live2DCubismFramework.CubismMatrix44,
                    h = i(1124),
                    l = i(2394),
                    c = i(8010),
                    _ = i(5644),
                    f = o(i(3105)),
                    p = function() {
                        function t() {
                            this._programId = null, this._touchManager = new h.TouchManager, this._deviceToScreen = new u, this._viewMatrix = new s
                        }
                        return t.prototype.initialize = function() {
                            var t = c.canvas.width,
                                e = c.canvas.height,
                                i = e / t,
                                a = f.ViewLogicalLeft,
                                r = f.ViewLogicalRight,
                                o = -i,
                                n = i;
                            this._viewMatrix.setScreenRect(a, r, o, n);
                            var s = Math.abs(a - r);
                            this._deviceToScreen.scaleRelative(s / t, -s / t), this._deviceToScreen.translateRelative(.5 * -t, .5 * -e), this._viewMatrix.setMaxScale(f.ViewMaxScale), this._viewMatrix.setMinScale(f.ViewMinScale), this._viewMatrix.setMaxScreenRect(f.ViewLogicalMaxLeft, f.ViewLogicalMaxRight, f.ViewLogicalMaxBottom, f.ViewLogicalMaxTop)
                        }, t.prototype.release = function() {
                            this._viewMatrix = null, this._touchManager = null, this._deviceToScreen = null, c.gl.deleteProgram(this._programId), this._programId = null
                        }, t.prototype.render = function() {
                            c.gl.useProgram(this._programId), c.gl.flush(), l.LAppLive2DManager.getInstance().onUpdate()
                        }, t.prototype.initializeSprite = function() {
                            c.canvas.width, c.canvas.height, c.LAppDelegate.getInstance().getTextureManager(), null == this._programId && (this._programId = c.LAppDelegate.getInstance().createShader())
                        }, t.prototype.onTouchesBegan = function(t, e) {
                            this._touchManager.touchesBegan(t, e)
                        }, t.prototype.onTouchesMoved = function(t, e) {
                            var i = this.transformViewX(t),
                                a = this.transformViewY(e),
                                r = l.LAppLive2DManager.getInstance();
                            f.DebugLogEnable && f.DebugTouchLogEnable && console.log("[Live2Dv4] pointX: " + t + " pointY: " + e + "\n          viewX: " + i + " viewY: " + a), r.onDrag(i, a)
                        }, t.prototype.onTouchesEnded = function(t, e) {
                            var i = l.LAppLive2DManager.getInstance();
                            f.DebugLogEnable && _.LAppPal.printMessage("[Live2Dv4] touchesEnded x: " + t + " y: " + e);
                            var a = this._deviceToScreen.transformX(t),
                                r = this._deviceToScreen.transformY(e);
                            i.onTap(a, r)
                        }, t.prototype.transformViewX = function(t) {
                            var e = this._deviceToScreen.transformX(t);
                            return this._viewMatrix.invertTransformX(e)
                        }, t.prototype.transformViewY = function(t) {
                            var e = this._deviceToScreen.transformY(t);
                            return this._viewMatrix.invertTransformY(e)
                        }, t.prototype.transformScreenX = function(t) {
                            return this._deviceToScreen.transformX(t)
                        }, t.prototype.transformScreenY = function(t) {
                            return this._deviceToScreen.transformY(t)
                        }, t
                    }();
                e.LAppView = p
            },
            2853: function(t, e, i) {
                "use strict";
                var a = this && this.__createBinding || (Object.create ? function(t, e, i, a) {
                        void 0 === a && (a = i), Object.defineProperty(t, a, {
                            enumerable: !0,
                            get: function() {
                                return e[i]
                            }
                        })
                    } : function(t, e, i, a) {
                        void 0 === a && (a = i), t[a] = e[i]
                    }),
                    r = this && this.__setModuleDefault || (Object.create ? function(t, e) {
                        Object.defineProperty(t, "default", {
                            enumerable: !0,
                            value: e
                        })
                    } : function(t, e) {
                        t.default = e
                    }),
                    o = this && this.__importStar || function(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t)
                            for (var i in t) "default" !== i && Object.hasOwnProperty.call(t, i) && a(e, t, i);
                        return r(e, t), e
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var n = i(8010),
                    s = o(i(3105)),
                    u = i(2394);
                Promise.resolve().then((function() {
                    return o(i(4591))
                })).then((function(t) {
                    return eval.call(null, t.default)
                })), window.live2dv4 = window.live2dv4 || {}, window.live2dv4.load = function(t, e, i) {
                    s.defineDebug(!!window.live2dv4.debug, !!window.live2dv4.debugMousemove), s.defineModelPath(e, i), 0 != n.LAppDelegate.getInstance().initialize(t) && n.LAppDelegate.getInstance().run()
                }, window.live2dv4.change = function(t, e) {
                    u.LAppLive2DManager.getInstance().changeScene(t, e)
                }, window.live2dv4.release = function() {
                    n.LAppDelegate.releaseInstance()
                }, window.live2dv4.CaptureCanvas = function() {
                    s.setCaptureCanvas(!0)
                }, window.live2dv4.setPreLoadMotion = function(t) {
                    s.setPreLoadMotion(t)
                }, window.onbeforeunload = function() {
                    return n.LAppDelegate.releaseInstance()
                }
            },
            1124: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.TouchManager = void 0;
                var i = function() {
                    function t() {
                        this._startX = 0, this._startY = 0, this._lastX = 0, this._lastY = 0, this._lastX1 = 0, this._lastY1 = 0, this._lastX2 = 0, this._lastY2 = 0, this._lastTouchDistance = 0, this._deltaX = 0, this._deltaY = 0, this._scale = 1, this._touchSingle = !1, this._flipAvailable = !1
                    }
                    return t.prototype.getCenterX = function() {
                        return this._lastX
                    }, t.prototype.getCenterY = function() {
                        return this._lastY
                    }, t.prototype.getDeltaX = function() {
                        return this._deltaX
                    }, t.prototype.getDeltaY = function() {
                        return this._deltaY
                    }, t.prototype.getStartX = function() {
                        return this._startX
                    }, t.prototype.getStartY = function() {
                        return this._startY
                    }, t.prototype.getScale = function() {
                        return this._scale
                    }, t.prototype.getX = function() {
                        return this._lastX
                    }, t.prototype.getY = function() {
                        return this._lastY
                    }, t.prototype.getX1 = function() {
                        return this._lastX1
                    }, t.prototype.getY1 = function() {
                        return this._lastY1
                    }, t.prototype.getX2 = function() {
                        return this._lastX2
                    }, t.prototype.getY2 = function() {
                        return this._lastY2
                    }, t.prototype.isSingleTouch = function() {
                        return this._touchSingle
                    }, t.prototype.isFlickAvailable = function() {
                        return this._flipAvailable
                    }, t.prototype.disableFlick = function() {
                        this._flipAvailable = !1
                    }, t.prototype.touchesBegan = function(t, e) {
                        this._startX = t, this._startY = e, this._lastTouchDistance = -1, this._flipAvailable = !0, this._touchSingle = !0
                    }, t.prototype.touchesMoved = function(t, e) {
                        this._lastX = t, this._lastY = e, this._lastTouchDistance = -1, this._touchSingle = !0
                    }, t.prototype.getFlickDistance = function() {
                        return this.calculateDistance(this._startX, this._startY, this._lastX, this._lastY)
                    }, t.prototype.calculateDistance = function(t, e, i, a) {
                        return Math.sqrt((t - i) * (t - i) + (e - a) * (e - a))
                    }, t.prototype.calculateMovingAmount = function(t, e) {
                        if (t > 0 != e > 0) return 0;
                        var i = t > 0 ? 1 : -1,
                            a = Math.abs(t),
                            r = Math.abs(e);
                        return i * (a < r ? a : r)
                    }, t
                }();
                e.TouchManager = i
            },
            7147: (t, e, i) => {
                "use strict";
                i.r(e), i.d(e, {
                    Headers: () => p,
                    Request: () => q,
                    Response: () => A,
                    DOMException: () => w,
                    fetch: () => S
                });
                var a = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== a && a,
                    r = "URLSearchParams" in a,
                    o = "Symbol" in a && "iterator" in Symbol,
                    n = "FileReader" in a && "Blob" in a && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    s = "FormData" in a,
                    u = "ArrayBuffer" in a;
                if (u) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    l = ArrayBuffer.isView || function(t) {
                        return t && h.indexOf(Object.prototype.toString.call(t)) > -1
                    };

                function c(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function _(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function f(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return o && (e[Symbol.iterator] = function() {
                        return e
                    }), e
                }

                function p(t) {
                    this.map = {}, t instanceof p ? t.forEach((function(t, e) {
                        this.append(e, t)
                    }), this) : Array.isArray(t) ? t.forEach((function(t) {
                        this.append(t[0], t[1])
                    }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                        this.append(e, t[e])
                    }), this)
                }

                function g(t) {
                    if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0
                }

                function d(t) {
                    return new Promise((function(e, i) {
                        t.onload = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            i(t.error)
                        }
                    }))
                }

                function m(t) {
                    var e = new FileReader,
                        i = d(e);
                    return e.readAsArrayBuffer(t), i
                }

                function b(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer
                }

                function y() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        var e;
                        this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : u && n && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = b(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(t) || l(t)) ? this._bodyArrayBuffer = b(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, n && (this.blob = function() {
                        var t = g(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? g(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(m)
                    }), this.text = function() {
                        var t, e, i, a = g(this);
                        if (a) return a;
                        if (this._bodyBlob) return t = this._bodyBlob, i = d(e = new FileReader), e.readAsText(t), i;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), i = new Array(e.length), a = 0; a < e.length; a++) i[a] = String.fromCharCode(e[a]);
                            return i.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, s && (this.formData = function() {
                        return this.text().then($)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                p.prototype.append = function(t, e) {
                    t = c(t), e = _(e);
                    var i = this.map[t];
                    this.map[t] = i ? i + ", " + e : e
                }, p.prototype.delete = function(t) {
                    delete this.map[c(t)]
                }, p.prototype.get = function(t) {
                    return t = c(t), this.has(t) ? this.map[t] : null
                }, p.prototype.has = function(t) {
                    return this.map.hasOwnProperty(c(t))
                }, p.prototype.set = function(t, e) {
                    this.map[c(t)] = _(e)
                }, p.prototype.forEach = function(t, e) {
                    for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this)
                }, p.prototype.keys = function() {
                    var t = [];
                    return this.forEach((function(e, i) {
                        t.push(i)
                    })), f(t)
                }, p.prototype.values = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        t.push(e)
                    })), f(t)
                }, p.prototype.entries = function() {
                    var t = [];
                    return this.forEach((function(e, i) {
                        t.push([i, e])
                    })), f(t)
                }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
                var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function q(t, e) {
                    if (!(this instanceof q)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    var i, a, r = (e = e || {}).body;
                    if (t instanceof q) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (a = (i = e.method || this.method || "GET").toUpperCase(), v.indexOf(a) > -1 ? a : i), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(r), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
                        var o = /([?&])_=[^&]*/;
                        o.test(this.url) ? this.url = this.url.replace(o, "$1_=" + (new Date).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                    }
                }

                function $(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach((function(t) {
                        if (t) {
                            var i = t.split("="),
                                a = i.shift().replace(/\+/g, " "),
                                r = i.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(a), decodeURIComponent(r))
                        }
                    })), e
                }

                function A(t, e) {
                    if (!(this instanceof A)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
                }
                q.prototype.clone = function() {
                    return new q(this, {
                        body: this._bodyInit
                    })
                }, y.call(q.prototype), y.call(A.prototype), A.prototype.clone = function() {
                    return new A(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new p(this.headers),
                        url: this.url
                    })
                }, A.error = function() {
                    var t = new A(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t
                };
                var x = [301, 302, 303, 307, 308];
                A.redirect = function(t, e) {
                    if (-1 === x.indexOf(e)) throw new RangeError("Invalid status code");
                    return new A(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                };
                var w = a.DOMException;
                try {
                    new w
                } catch (t) {
                    (w = function(t, e) {
                        this.message = t, this.name = e;
                        var i = Error(t);
                        this.stack = i.stack
                    }).prototype = Object.create(Error.prototype), w.prototype.constructor = w
                }

                function S(t, e) {
                    return new Promise((function(i, r) {
                        var o = new q(t, e);
                        if (o.signal && o.signal.aborted) return r(new w("Aborted", "AbortError"));
                        var s = new XMLHttpRequest;

                        function h() {
                            s.abort()
                        }
                        s.onload = function() {
                            var t, e, a = {
                                status: s.status,
                                statusText: s.statusText,
                                headers: (t = s.getAllResponseHeaders() || "", e = new p, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                    var i = t.split(":"),
                                        a = i.shift().trim();
                                    if (a) {
                                        var r = i.join(":").trim();
                                        e.append(a, r)
                                    }
                                })), e)
                            };
                            a.url = "responseURL" in s ? s.responseURL : a.headers.get("X-Request-URL");
                            var r = "response" in s ? s.response : s.responseText;
                            setTimeout((function() {
                                i(new A(r, a))
                            }), 0)
                        }, s.onerror = function() {
                            setTimeout((function() {
                                r(new TypeError("Network request failed"))
                            }), 0)
                        }, s.ontimeout = function() {
                            setTimeout((function() {
                                r(new TypeError("Network request failed"))
                            }), 0)
                        }, s.onabort = function() {
                            setTimeout((function() {
                                r(new w("Aborted", "AbortError"))
                            }), 0)
                        }, s.open(o.method, function(t) {
                            try {
                                return "" === t && a.location.href ? a.location.href : t
                            } catch (e) {
                                return t
                            }
                        }(o.url), !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && (n ? s.responseType = "blob" : u && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !e || "object" != typeof e.headers || e.headers instanceof p ? o.headers.forEach((function(t, e) {
                            s.setRequestHeader(e, t)
                        })) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                            s.setRequestHeader(t, _(e.headers[t]))
                        })), o.signal && (o.signal.addEventListener("abort", h), s.onreadystatechange = function() {
                            4 === s.readyState && o.signal.removeEventListener("abort", h)
                        }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    }))
                }
                S.polyfill = !0, a.fetch || (a.fetch = S, a.Headers = p, a.Request = q, a.Response = A)
            },
            4480: t => {
                t.exports = {
                    DEBUG_LOG: !1,
                    DEBUG_MOUSE_LOG: !1,
                    DEBUG_DRAW_HIT_AREA: !1,
                    DEBUG_DRAW_ALPHA_MODEL: !1,
                    VIEW_MAX_SCALE: 2,
                    VIEW_MIN_SCALE: .8,
                    VIEW_LOGICAL_LEFT: -1,
                    VIEW_LOGICAL_RIGHT: 1,
                    VIEW_LOGICAL_MAX_LEFT: -2,
                    VIEW_LOGICAL_MAX_RIGHT: 2,
                    VIEW_LOGICAL_MAX_BOTTOM: -2,
                    VIEW_LOGICAL_MAX_TOP: 2,
                    PRIORITY_NONE: 0,
                    PRIORITY_IDLE: 1,
                    PRIORITY_SLEEPY: 2,
                    PRIORITY_NORMAL: 3,
                    PRIORITY_FORCE: 4,
                    MOTION_GROUP_IDLE: "idle",
                    MOTION_GROUP_SLEEPY: "sleepy",
                    MOTION_GROUP_TAP_FACE: "tap_face",
                    MOTION_GROUP_FLICK_HEAD: "flick_head",
                    MOTION_GROUP_TAP_BODY: "tap_body",
                    MOTION_GROUP_TAP_BREAST: "tap_breast",
                    MOTION_GROUP_TAP_BELLY: "tap_belly",
                    MOTION_GROUP_TAP_LEG: "tap_leg",
                    MOTION_GROUP_PINCH_IN: "pinch_in",
                    MOTION_GROUP_PINCH_OUT: "pinch_out",
                    MOTION_GROUP_SHAKE: "shake",
                    HIT_AREA_HEAD: "head",
                    HIT_AREA_BODY: "body",
                    HIT_AREA_FACE: "face",
                    HIT_AREA_BREAST: "breast",
                    HIT_AREA_BELLY: "belly",
                    HIT_AREA_LEG: "leg",
                    HIT_AREA_CUSTOM_HEAD: "head",
                    HIT_AREA_CUSTOM_BODY: "body"
                }
            },
            8666: t => {
                function e() {
                    this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.debugMode = !1, this.initialized = !1, this.updating = !1, this.alpha = 1, this.accAlpha = 0, this.lipSync = !1, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new h, this.expressionManager = new h, this.motions = {}, this.expressions = {}, this.isTexLoaded = !1
                }
                var i = 0;

                function a() {
                    AMotion.prototype.constructor.call(this), this.paramList = new Array
                }

                function r() {
                    this.id = "", this.type = -1, this.value = null
                }

                function o() {
                    this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = n.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = !0, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN"
                }
                e.prototype.getModelMatrix = function() {
                    return this.modelMatrix
                }, e.prototype.setAlpha = function(t) {
                    t > .999 && (t = 1), t < .001 && (t = 0), this.alpha = t
                }, e.prototype.getAlpha = function() {
                    return this.alpha
                }, e.prototype.isInitialized = function() {
                    return this.initialized
                }, e.prototype.setInitialized = function(t) {
                    this.initialized = t
                }, e.prototype.isUpdating = function() {
                    return this.updating
                }, e.prototype.setUpdating = function(t) {
                    this.updating = t
                }, e.prototype.getLive2DModel = function() {
                    return this.live2DModel
                }, e.prototype.setLipSync = function(t) {
                    this.lipSync = t
                }, e.prototype.setLipSyncValue = function(t) {
                    this.lipSyncValue = t
                }, e.prototype.setAccel = function(t, e, i) {
                    this.accelX = t, this.accelY = e, this.accelZ = i
                }, e.prototype.setDrag = function(t, e) {
                    this.dragX = t, this.dragY = e
                }, e.prototype.getMainMotionManager = function() {
                    return this.mainMotionManager
                }, e.prototype.getExpressionManager = function() {
                    return this.expressionManager
                }, e.prototype.loadModelData = function(t, e) {
                    var i = g.getPlatformManager();
                    this.debugMode && i.log("Load model : " + t);
                    var a = this;
                    i.loadLive2DModel(t, (function(t) {
                        a.live2DModel = t, a.live2DModel.saveParam(), 0 == Live2D.getError() ? (a.modelMatrix = new u(a.live2DModel.getCanvasWidth(), a.live2DModel.getCanvasHeight()), a.modelMatrix.setWidth(2), a.modelMatrix.setCenterPosition(0, 0), e(a.live2DModel)) : console.error("Error : Failed to loadModelData().")
                    }))
                }, e.prototype.loadTexture = function(t, e, a) {
                    i++;
                    var r = g.getPlatformManager();
                    this.debugMode && r.log("Load Texture : " + e);
                    var o = this;
                    r.loadTexture(this.live2DModel, t, e, (function() {
                        0 == --i && (o.isTexLoaded = !0), "function" == typeof a && a()
                    }))
                }, e.prototype.loadMotion = function(t, e, i) {
                    var a = g.getPlatformManager();
                    this.debugMode && a.log("Load Motion : " + e);
                    var r = null,
                        o = this;
                    a.loadBytes(e, (function(e) {
                        r = Live2DMotion.loadMotion(e), null != t && (o.motions[t] = r), i(r)
                    }))
                }, e.prototype.loadExpression = function(t, e, i) {
                    var r = g.getPlatformManager();
                    this.debugMode && r.log("Load Expression : " + e);
                    var o = this;
                    r.loadBytes(e, (function(e) {
                        null != t && (o.expressions[t] = a.loadJson(e)), "function" == typeof i && i()
                    }))
                }, e.prototype.loadPose = function(t, e) {
                    var i = g.getPlatformManager();
                    this.debugMode && i.log("Load Pose : " + t);
                    var a = this;
                    try {
                        i.loadBytes(t, (function(t) {
                            a.pose = c.load(t), "function" == typeof e && e()
                        }))
                    } catch (t) {
                        console.warn(t)
                    }
                }, e.prototype.loadPhysics = function(t) {
                    var e = g.getPlatformManager();
                    this.debugMode && e.log("Load Physics : " + t);
                    var i = this;
                    try {
                        e.loadBytes(t, (function(t) {
                            i.physics = l.load(t)
                        }))
                    } catch (t) {
                        console.warn(t)
                    }
                }, e.prototype.hitTestSimple = function(t, e, i) {
                    if (null === this.live2DModel) return !1;
                    var a = this.live2DModel.getDrawDataIndex(t);
                    if (a < 0) return !1;
                    for (var r = this.live2DModel.getTransformedPoints(a), o = this.live2DModel.getCanvasWidth(), n = 0, s = this.live2DModel.getCanvasHeight(), u = 0, h = 0; h < r.length; h += 2) {
                        var l = r[h],
                            c = r[h + 1];
                        l < o && (o = l), l > n && (n = l), c < s && (s = c), c > u && (u = c)
                    }
                    var _ = this.modelMatrix.invertTransformX(e),
                        f = this.modelMatrix.invertTransformY(i);
                    return o <= _ && _ <= n && s <= f && f <= u
                }, e.prototype.hitTestSimpleCustom = function(t, e, i, a) {
                    return null !== this.live2DModel && !!(t && e && i >= t[0] && i <= e[0] && a <= t[1] && a >= e[1])
                }, a.prototype = new AMotion, a.EXPRESSION_DEFAULT = "DEFAULT", a.TYPE_SET = 0, a.TYPE_ADD = 1, a.TYPE_MULT = 2, a.loadJson = function(t) {
                    var e = new a,
                        i = g.getPlatformManager().jsonParseFromBytes(t);
                    if (e.setFadeIn(parseInt(i.fade_in) > 0 ? parseInt(i.fade_in) : 1e3), e.setFadeOut(parseInt(i.fade_out) > 0 ? parseInt(i.fade_out) : 1e3), null == i.params) return e;
                    var o = i.params,
                        n = o.length;
                    e.paramList = [];
                    for (var s = 0; s < n; s++) {
                        var u = o[s],
                            h = u.id.toString(),
                            l = parseFloat(u.val),
                            c = a.TYPE_ADD,
                            _ = null != u.calc ? u.calc.toString() : "add";
                        if ((c = "add" === _ ? a.TYPE_ADD : "mult" === _ ? a.TYPE_MULT : "set" === _ ? a.TYPE_SET : a.TYPE_ADD) == a.TYPE_ADD) l -= f = null == u.def ? 0 : parseFloat(u.def);
                        else if (c == a.TYPE_MULT) {
                            var f;
                            0 == (f = null == u.def ? 1 : parseFloat(u.def)) && (f = 1), l /= f
                        }
                        var p = new r;
                        p.id = h, p.type = c, p.value = l, e.paramList.push(p)
                    }
                    return e
                }, a.prototype.updateParamExe = function(t, e, i, r) {
                    for (var o = this.paramList.length - 1; o >= 0; --o) {
                        var n = this.paramList[o];
                        n.type == a.TYPE_ADD ? t.addToParamFloat(n.id, n.value, i) : n.type == a.TYPE_MULT ? t.multParamFloat(n.id, n.value, i) : n.type == a.TYPE_SET && t.setParamFloat(n.id, n.value, i)
                    }
                }, o.prototype.calcNextBlink = function() {
                    return UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1)
                }, o.prototype.setInterval = function(t) {
                    this.blinkIntervalMsec = t
                }, o.prototype.setEyeMotion = function(t, e, i) {
                    this.closingMotionMsec = t, this.closedMotionMsec = e, this.openingMotionMsec = i
                }, o.prototype.updateParam = function(t) {
                    var e, i = UtSystem.getUserTimeMSec(),
                        a = 0;
                    switch (this.eyeState) {
                        case n.STATE_CLOSING:
                            (a = (i - this.stateStartTime) / this.closingMotionMsec) >= 1 && (a = 1, this.eyeState = n.STATE_CLOSED, this.stateStartTime = i), e = 1 - a;
                            break;
                        case n.STATE_CLOSED:
                            (a = (i - this.stateStartTime) / this.closedMotionMsec) >= 1 && (this.eyeState = n.STATE_OPENING, this.stateStartTime = i), e = 0;
                            break;
                        case n.STATE_OPENING:
                            (a = (i - this.stateStartTime) / this.openingMotionMsec) >= 1 && (a = 1, this.eyeState = n.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), e = a;
                            break;
                        case n.STATE_INTERVAL:
                            this.nextBlinkTime < i && (this.eyeState = n.STATE_CLOSING, this.stateStartTime = i), e = 1;
                            break;
                        case n.STATE_FIRST:
                        default:
                            this.eyeState = n.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), e = 1
                    }
                    this.closeIfZero || (e = -e), t.setParamFloat(this.eyeID_L, e), t.setParamFloat(this.eyeID_R, e)
                };
                var n = function() {};

                function s() {
                    this.tr = new Float32Array(16), this.identity()
                }

                function u(t, e) {
                    s.prototype.constructor.call(this), this.width = t, this.height = e
                }

                function h() {
                    MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null, this.super = MotionQueueManager.prototype
                }

                function l() {
                    this.physicsList = new Array, this.startTimeMSec = UtSystem.getUserTimeMSec()
                }

                function c() {
                    this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array
                }

                function _(t) {
                    this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t
                }

                function f() {
                    this.EPSILON = .01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0
                }

                function p() {
                    s.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null, this.max = Number.MAX_VALUE, this.min = 0
                }

                function g() {}
                n.STATE_FIRST = "STATE_FIRST", n.STATE_INTERVAL = "STATE_INTERVAL", n.STATE_CLOSING = "STATE_CLOSING", n.STATE_CLOSED = "STATE_CLOSED", n.STATE_OPENING = "STATE_OPENING", s.mul = function(t, e, i) {
                    var a, r, o, n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    for (a = 0; a < 4; a++)
                        for (r = 0; r < 4; r++)
                            for (o = 0; o < 4; o++) n[a + 4 * r] += t[a + 4 * o] * e[o + 4 * r];
                    for (a = 0; a < 16; a++) i[a] = n[a]
                }, s.prototype.identity = function() {
                    for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0
                }, s.prototype.getArray = function() {
                    return this.tr
                }, s.prototype.getCopyMatrix = function() {
                    return new Float32Array(this.tr)
                }, s.prototype.setMatrix = function(t) {
                    if (null != this.tr && this.tr.length == this.tr.length)
                        for (var e = 0; e < 16; e++) this.tr[e] = t[e]
                }, s.prototype.getScaleX = function() {
                    return this.tr[0]
                }, s.prototype.getScaleY = function() {
                    return this.tr[5]
                }, s.prototype.transformX = function(t) {
                    return this.tr[0] * t + this.tr[12]
                }, s.prototype.transformY = function(t) {
                    return this.tr[5] * t + this.tr[13]
                }, s.prototype.invertTransformX = function(t) {
                    return (t - this.tr[12]) / this.tr[0]
                }, s.prototype.invertTransformY = function(t) {
                    return (t - this.tr[13]) / this.tr[5]
                }, s.prototype.multTranslate = function(t, e) {
                    var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
                    s.mul(i, this.tr, this.tr)
                }, s.prototype.translate = function(t, e) {
                    this.tr[12] = t, this.tr[13] = e
                }, s.prototype.translateX = function(t) {
                    this.tr[12] = t
                }, s.prototype.translateY = function(t) {
                    this.tr[13] = t
                }, s.prototype.multScale = function(t, e) {
                    var i = [t, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                    s.mul(i, this.tr, this.tr)
                }, s.prototype.scale = function(t, e) {
                    this.tr[0] = t, this.tr[5] = e
                }, u.prototype = new s, u.prototype.setPosition = function(t, e) {
                    this.translate(t, e)
                }, u.prototype.setCenterPosition = function(t, e) {
                    var i = this.width * this.getScaleX(),
                        a = this.height * this.getScaleY();
                    this.translate(t - i / 2, e - a / 2)
                }, u.prototype.top = function(t) {
                    this.setY(t)
                }, u.prototype.bottom = function(t) {
                    var e = this.height * this.getScaleY();
                    this.translateY(t - e)
                }, u.prototype.left = function(t) {
                    this.setX(t)
                }, u.prototype.right = function(t) {
                    var e = this.width * this.getScaleX();
                    this.translateX(t - e)
                }, u.prototype.centerX = function(t) {
                    var e = this.width * this.getScaleX();
                    this.translateX(t - e / 2)
                }, u.prototype.centerY = function(t) {
                    var e = this.height * this.getScaleY();
                    this.translateY(t - e / 2)
                }, u.prototype.setX = function(t) {
                    this.translateX(t)
                }, u.prototype.setY = function(t) {
                    this.translateY(t)
                }, u.prototype.setHeight = function(t) {
                    var e = t / this.height,
                        i = -e;
                    this.scale(e, i)
                }, u.prototype.setWidth = function(t) {
                    var e = t / this.width,
                        i = -e;
                    this.scale(e, i)
                }, h.prototype = new MotionQueueManager, h.prototype.getCurrentPriority = function() {
                    return this.currentPriority
                }, h.prototype.getReservePriority = function() {
                    return this.reservePriority
                }, h.prototype.reserveMotion = function(t) {
                    return !(this.reservePriority >= t || this.currentPriority >= t || (this.reservePriority = t, 0))
                }, h.prototype.setReservePriority = function(t) {
                    this.reservePriority = t
                }, h.prototype.updateParam = function(t) {
                    var e = MotionQueueManager.prototype.updateParam.call(this, t);
                    return this.isFinished() && (this.currentPriority = 0), e
                }, h.prototype.startMotionPrio = function(t, e) {
                    return e == this.reservePriority && (this.reservePriority = 0), this.currentPriority = e, this.startMotion(t, !1)
                }, l.load = function(t) {
                    for (var e = new l, i = g.getPlatformManager().jsonParseFromBytes(t).physics_hair, a = i.length, r = 0; r < a; r++) {
                        var o = i[r],
                            n = new PhysicsHair,
                            s = o.setup,
                            u = parseFloat(s.length),
                            h = parseFloat(s.regist),
                            c = parseFloat(s.mass);
                        n.setup(u, h, c);
                        for (var _ = o.src, f = _.length, p = 0; p < f; p++) {
                            var d = _[p],
                                m = d.id,
                                b = PhysicsHair.Src.SRC_TO_X;
                            "x" === (A = d.ptype) ? b = PhysicsHair.Src.SRC_TO_X: "y" === A ? b = PhysicsHair.Src.SRC_TO_Y : "angle" === A ? b = PhysicsHair.Src.SRC_TO_G_ANGLE : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src");
                            var y = parseFloat(d.scale),
                                v = parseFloat(d.weight);
                            n.addSrcParam(b, m, y, v)
                        }
                        var q = o.targets,
                            $ = q.length;
                        for (p = 0; p < $; p++) {
                            var A, x = q[p];
                            m = x.id, b = PhysicsHair.Target.TARGET_FROM_ANGLE, "angle" === (A = x.ptype) ? b = PhysicsHair.Target.TARGET_FROM_ANGLE : "angle_v" === A ? b = PhysicsHair.Target.TARGET_FROM_ANGLE_V : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target"), y = parseFloat(x.scale), v = parseFloat(x.weight), n.addTargetParam(b, m, y, v)
                        }
                        e.physicsList.push(n)
                    }
                    return e
                }, l.prototype.updateParam = function(t) {
                    for (var e = UtSystem.getUserTimeMSec() - this.startTimeMSec, i = 0; i < this.physicsList.length; i++) this.physicsList[i].update(t, e)
                }, c.load = function(t) {
                    for (var e = new c, i = g.getPlatformManager().jsonParseFromBytes(t).parts_visible, a = i.length, r = 0; r < a; r++) {
                        for (var o = i[r].group, n = o.length, s = new Array, u = 0; u < n; u++) {
                            var h = o[u],
                                l = new _(h.id);
                            if (s[u] = l, null != h.link) {
                                var f = h.link,
                                    p = f.length;
                                l.link = new Array;
                                for (var d = 0; d < p; d++) {
                                    var m = new _(f[d]);
                                    l.link.push(m)
                                }
                            }
                        }
                        e.partsGroups.push(s)
                    }
                    return e
                }, c.prototype.updateParam = function(t) {
                    if (null != t) {
                        t != this.lastModel && this.initParam(t), this.lastModel = t;
                        var e = UtSystem.getUserTimeMSec(),
                            i = 0 == this.lastTime ? 0 : (e - this.lastTime) / 1e3;
                        this.lastTime = e, i < 0 && (i = 0);
                        for (var a = 0; a < this.partsGroups.length; a++) this.normalizePartsOpacityGroup(t, this.partsGroups[a], i), this.copyOpacityOtherParts(t, this.partsGroups[a])
                    }
                }, c.prototype.initParam = function(t) {
                    if (null != t)
                        for (var e = 0; e < this.partsGroups.length; e++)
                            for (var i = this.partsGroups[e], a = 0; a < i.length; a++) {
                                i[a].initIndex(t);
                                var r = i[a].partsIndex,
                                    o = i[a].paramIndex;
                                if (!(r < 0)) {
                                    var n = 0 != t.getParamFloat(o);
                                    if (t.setPartsOpacity(r, n ? 1 : 0), t.setParamFloat(o, n ? 1 : 0), null != i[a].link)
                                        for (var s = 0; s < i[a].link.length; s++) i[a].link[s].initIndex(t)
                                }
                            }
                }, c.prototype.normalizePartsOpacityGroup = function(t, e, i) {
                    for (var a = -1, r = 1, o = 0; o < e.length; o++) {
                        var n = e[o].partsIndex,
                            s = e[o].paramIndex;
                        if (!(n < 0) && 0 != t.getParamFloat(s)) {
                            if (a >= 0) break;
                            a = o, r = t.getPartsOpacity(n), (r += i / .5) > 1 && (r = 1)
                        }
                    }
                    for (a < 0 && (a = 0, r = 1), o = 0; o < e.length; o++)
                        if (!((n = e[o].partsIndex) < 0))
                            if (a == o) t.setPartsOpacity(n, r);
                            else {
                                var u, h = t.getPartsOpacity(n);
                                (1 - (u = r < .5 ? -.5 * r / .5 + 1 : .5 * (1 - r) / .5)) * (1 - r) > .15 && (u = 1 - .15 / (1 - r)), h > u && (h = u), t.setPartsOpacity(n, h)
                            }
                }, c.prototype.copyOpacityOtherParts = function(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var a = e[i];
                        if (null != a.link && !(a.partsIndex < 0))
                            for (var r = t.getPartsOpacity(a.partsIndex), o = 0; o < a.link.length; o++) {
                                var n = a.link[o];
                                n.partsIndex < 0 || t.setPartsOpacity(n.partsIndex, r)
                            }
                    }
                }, _.prototype.initIndex = function(t) {
                    this.paramIndex = t.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t.getPartsDataIndex(PartsDataID.getID(this.id)), t.setParamFloat(this.paramIndex, 1)
                }, f.FRAME_RATE = 30, f.prototype.setPoint = function(t, e) {
                    this.faceTargetX = t, this.faceTargetY = e
                }, f.prototype.getX = function() {
                    return this.faceX
                }, f.prototype.getY = function() {
                    return this.faceY
                }, f.prototype.update = function() {
                    var t = 40 / 7.5 / f.FRAME_RATE;
                    if (0 != this.lastTimeSec) {
                        var e = UtSystem.getUserTimeMSec(),
                            i = (e - this.lastTimeSec) * f.FRAME_RATE / 1e3;
                        this.lastTimeSec = e;
                        var a = i * t / (.15 * f.FRAME_RATE),
                            r = this.faceTargetX - this.faceX,
                            o = this.faceTargetY - this.faceY;
                        if (!(Math.abs(r) <= this.EPSILON && Math.abs(o) <= this.EPSILON)) {
                            var n = Math.sqrt(r * r + o * o),
                                s = t * o / n,
                                u = t * r / n - this.faceVX,
                                h = s - this.faceVY,
                                l = Math.sqrt(u * u + h * h);
                            (l < -a || l > a) && (u *= a / l, h *= a / l, l = a), this.faceVX += u, this.faceVY += h;
                            var c = .5 * (Math.sqrt(a * a + 16 * a * n - 8 * a * n) - a),
                                _ = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
                            _ > c && (this.faceVX *= c / _, this.faceVY *= c / _), this.faceX += this.faceVX, this.faceY += this.faceVY
                        }
                    } else this.lastTimeSec = UtSystem.getUserTimeMSec()
                }, p.prototype = new s, p.prototype.getMaxScale = function() {
                    return this.max
                }, p.prototype.getMinScale = function() {
                    return this.min
                }, p.prototype.setMaxScale = function(t) {
                    this.max = t
                }, p.prototype.setMinScale = function(t) {
                    this.min = t
                }, p.prototype.isMaxScale = function() {
                    return this.getScaleX() == this.max
                }, p.prototype.isMinScale = function() {
                    return this.getScaleX() == this.min
                }, p.prototype.adjustTranslate = function(t, e) {
                    this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + e) < this.screenTop && (e = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + e) > this.screenBottom && (e = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]);
                    var i = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1];
                    s.mul(i, this.tr, this.tr)
                }, p.prototype.adjustScale = function(t, e, i) {
                    var a = i * this.tr[0];
                    a < this.min ? this.tr[0] > 0 && (i = this.min / this.tr[0]) : a > this.max && this.tr[0] > 0 && (i = this.max / this.tr[0]);
                    var r = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, 0, 1],
                        o = [i, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                        n = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -e, 0, 1];
                    s.mul(n, this.tr, this.tr), s.mul(o, this.tr, this.tr), s.mul(r, this.tr, this.tr)
                }, p.prototype.setScreenRect = function(t, e, i, a) {
                    this.screenLeft = t, this.screenRight = e, this.screenTop = a, this.screenBottom = i
                }, p.prototype.setMaxScreenRect = function(t, e, i, a) {
                    this.maxLeft = t, this.maxRight = e, this.maxTop = a, this.maxBottom = i
                }, p.prototype.getScreenLeft = function() {
                    return this.screenLeft
                }, p.prototype.getScreenRight = function() {
                    return this.screenRight
                }, p.prototype.getScreenBottom = function() {
                    return this.screenBottom
                }, p.prototype.getScreenTop = function() {
                    return this.screenTop
                }, p.prototype.getMaxLeft = function() {
                    return this.maxLeft
                }, p.prototype.getMaxRight = function() {
                    return this.maxRight
                }, p.prototype.getMaxBottom = function() {
                    return this.maxBottom
                }, p.prototype.getMaxTop = function() {
                    return this.maxTop
                }, g.platformManager = null, g.getPlatformManager = function() {
                    return g.platformManager
                }, g.setPlatformManager = function(t) {
                    g.platformManager = t
                }, t.exports = {
                    L2DTargetPoint: f,
                    Live2DFramework: g,
                    L2DViewMatrix: p,
                    L2DPose: c,
                    L2DPartsParam: _,
                    L2DPhysics: l,
                    L2DMotionManager: h,
                    L2DModelMatrix: u,
                    L2DMatrix44: s,
                    EYE_STATE: n,
                    L2DEyeBlink: o,
                    L2DExpressionParam: r,
                    L2DExpressionMotion: a,
                    L2DBaseModel: e
                }
            },
            2759: t => {
                function e() {}
                e.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e.depth = 0, e.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e.tmp = new Array(16), e.reset = function() {
                    this.depth = 0
                }, e.loadIdentity = function() {
                    for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0
                }, e.push = function() {
                    this.depth;
                    var t = 16 * (this.depth + 1);
                    this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16);
                    for (var e = 0; e < 16; e++) this.matrixStack[t + e] = this.currentMatrix[e];
                    this.depth++
                }, e.pop = function() {
                    this.depth--, this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0);
                    for (var t = 16 * this.depth, e = 0; e < 16; e++) this.currentMatrix[e] = this.matrixStack[t + e]
                }, e.getMatrix = function() {
                    return this.currentMatrix
                }, e.multMatrix = function(t) {
                    var e, i, a;
                    for (e = 0; e < 16; e++) this.tmp[e] = 0;
                    for (e = 0; e < 4; e++)
                        for (i = 0; i < 4; i++)
                            for (a = 0; a < 4; a++) this.tmp[e + 4 * i] += this.currentMatrix[e + 4 * a] * t[a + 4 * i];
                    for (e = 0; e < 16; e++) this.currentMatrix[e] = this.tmp[e]
                }, t.exports = e
            },
            3413: () => {
                ! function() {
                    var t = !0;

                    function e() {
                        t || (this._$MT = null, this._$5S = null, this._$NP = 0, e._$42++, this._$5S = new N(this))
                    }

                    function i(e) {
                        if (!t) {
                            this.clipContextList = new Array, this.glcontext = e.gl, this.dp_webgl = e, this.curFrameNo = 0, this.firstError_clipInNotUpdate = !0, this.colorBuffer = 0, this.isInitGLFBFunc = !1, this.tmpBoundsOnModel = new $, ut.glContext.length > ut.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new I, this.tmpMatrix2 = new I, this.tmpMatrixForMask = new I, this.tmpMatrixForDraw = new I, this.CHANNEL_COLORS = new Array;
                            var i = new L;
                            (i = new L).r = 0, i.g = 0, i.b = 0, i.a = 1, this.CHANNEL_COLORS.push(i), (i = new L).r = 1, i.g = 0, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), (i = new L).r = 0, i.g = 1, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), (i = new L).r = 0, i.g = 0, i.b = 1, i.a = 0, this.CHANNEL_COLORS.push(i);
                            for (var a = 0; a < this.CHANNEL_COLORS.length; a++) this.dp_webgl.setChannelFlagAsColor(a, this.CHANNEL_COLORS[a])
                        }
                    }

                    function a(t, e, i) {
                        this.clipIDList = new Array, this.clipIDList = i, this.clippingMaskDrawIndexList = new Array;
                        for (var a = 0; a < i.length; a++) this.clippingMaskDrawIndexList.push(e.getDrawDataIndex(i[a]));
                        this.clippedDrawContextList = new Array, this.isUsing = !0, this.layoutChannelNo = 0, this.layoutBounds = new $, this.allClippedDrawRect = new $, this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t
                    }

                    function r(t, e) {
                        this._$gP = t, this.drawDataIndex = e
                    }

                    function o() {
                        t || (this.color = null)
                    }

                    function n() {
                        t || (this._$dP = null, this._$eo = null, this._$V0 = null, this._$dP = 1e3, this._$eo = 1e3, this._$V0 = 1, this._$a0())
                    }

                    function s() {}

                    function u() {
                        this._$r = null, this._$0S = null
                    }

                    function h() {
                        t || (this.x = null, this.y = null, this.width = null, this.height = null)
                    }

                    function l(e) {
                        t || at.prototype.constructor.call(this, e)
                    }

                    function c(e) {
                        t || at.prototype.constructor.call(this, e)
                    }

                    function _() {
                        t || (this._$vo = null, this._$F2 = null, this._$ao = 400, this._$1S = 400, _._$42++)
                    }

                    function f() {
                        t || (this.p1 = new p, this.p2 = new p, this._$Fo = 0, this._$Db = 0, this._$L2 = 0, this._$M2 = 0, this._$ks = 0, this._$9b = 0, this._$iP = 0, this._$iT = 0, this._$lL = new Array, this._$qP = new Array, this.setup(.3, .5, .1))
                    }

                    function p() {
                        this._$p = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._$s0 = 0, this._$70 = 0, this._$7L = 0, this._$HL = 0
                    }

                    function g(t, e, i) {
                        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
                    }

                    function d(t, e, i, a) {
                        g.prototype.constructor.call(this, e, i, a), this._$tL = null, this._$tL = t
                    }

                    function b(t, e, i) {
                        this._$wL = null, this.scale = null, this._$V0 = null, this._$wL = t, this.scale = e, this._$V0 = i
                    }

                    function y(t, e, i, a) {
                        b.prototype.constructor.call(this, e, i, a), this._$YP = null, this._$YP = t
                    }

                    function v() {
                        t || (this._$fL = 0, this._$gL = 0, this._$B0 = 1, this._$z0 = 1, this._$qT = 0, this.reflectX = !1, this.reflectY = !1)
                    }
                    e._$0s = 1, e._$4s = 2, e._$42 = 0, e._$62 = function(t, i) {
                        try {
                            if (i instanceof ArrayBuffer && (i = new DataView(i)), !(i instanceof DataView)) throw new lt("_$SS#loadModel(b) / b _$x be DataView or ArrayBuffer");
                            var a, r = new $t(i),
                                o = r._$ST(),
                                n = r._$ST(),
                                u = r._$ST();
                            if (109 != o || 111 != n || 99 != u) throw new lt("_$gi _$C _$li , _$Q0 _$P0.");
                            if (a = r._$ST(), r._$gr(a), a > O._$T7) throw t._$NP |= e._$4s, new lt("_$gi _$C _$li , _$n0 _$_ version _$li ( SDK : " + O._$T7 + " < _$f0 : " + a + " )@_$SS#loadModel()\n");
                            var h = r._$nP();
                            if (a >= O._$s7) {
                                var l = r._$9T(),
                                    c = r._$9T();
                                if (-30584 != l || -30584 != c) throw t._$NP |= e._$0s, new lt("_$gi _$C _$li , _$0 _$6 _$Ui.")
                            }
                            t._$KS(h);
                            var _ = t.getModelContext();
                            _.setDrawParam(t.getDrawParam()), _.init()
                        } catch (t) {
                            s._$Rb(t)
                        }
                    }, e.prototype._$KS = function(t) {
                        this._$MT = t
                    }, e.prototype.getModelImpl = function() {
                        return null == this._$MT && (this._$MT = new _, this._$MT._$zP()), this._$MT
                    }, e.prototype.getCanvasWidth = function() {
                        return null == this._$MT ? 0 : this._$MT.getCanvasWidth()
                    }, e.prototype.getCanvasHeight = function() {
                        return null == this._$MT ? 0 : this._$MT.getCanvasHeight()
                    }, e.prototype.getParamFloat = function(t) {
                        return "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), this._$5S.getParamFloat(t)
                    }, e.prototype.setParamFloat = function(t, e, i) {
                        "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 - i) + e * i)
                    }, e.prototype.addToParamFloat = function(t, e, i) {
                        "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) + e * i)
                    }, e.prototype.multParamFloat = function(t, e, i) {
                        "number" != typeof t && (t = this._$5S.getParamIndex(c.getID(t))), arguments.length < 3 && (i = 1), this._$5S.setParamFloat(t, this._$5S.getParamFloat(t) * (1 + (e - 1) * i))
                    }, e.prototype.getParamIndex = function(t) {
                        return this._$5S.getParamIndex(c.getID(t))
                    }, e.prototype.loadParam = function() {
                        this._$5S.loadParam()
                    }, e.prototype.saveParam = function() {
                        this._$5S.saveParam()
                    }, e.prototype.init = function() {
                        this._$5S.init()
                    }, e.prototype.update = function() {
                        this._$5S.update()
                    }, e.prototype._$Rs = function() {
                        return s._$li("_$60 _$PT _$Rs()"), -1
                    }, e.prototype._$Ds = function(t) {
                        s._$li("_$60 _$PT _$SS#_$Ds() \n")
                    }, e.prototype._$K2 = function() {}, e.prototype.draw = function() {}, e.prototype.getModelContext = function() {
                        return this._$5S
                    }, e.prototype._$s2 = function() {
                        return this._$NP
                    }, e.prototype._$P7 = function(t, e, i, a) {
                        var r = -1,
                            o = 0,
                            n = this;
                        if (0 != i)
                            if (1 == t.length) {
                                f = t[0];
                                var s = 0 != n.getParamFloat(f),
                                    u = (p = e[0], n.getPartsOpacity(p)),
                                    h = i / a;
                                s ? (u += h) > 1 && (u = 1) : (u -= h) < 0 && (u = 0), n.setPartsOpacity(p, u)
                            } else {
                                for (_ = 0; _ < t.length; _++)
                                    if (f = t[_], g = 0 != n.getParamFloat(f)) {
                                        if (r >= 0) break;
                                        r = _, p = e[_], o = n.getPartsOpacity(p), (o += i / a) > 1 && (o = 1)
                                    } for (r < 0 && (console.log("No _$wi _$q0/ _$U default[%s]", t[0]), r = 0, o = 1, n.loadParam(), n.setParamFloat(t[r], o), n.saveParam()), _ = 0; _ < t.length; _++)
                                    if (p = e[_], r == _) n.setPartsOpacity(p, o);
                                    else {
                                        var l, c = n.getPartsOpacity(p);
                                        (1 - (l = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5)) * (1 - o) > .15 && (l = 1 - .15 / (1 - o)), c > l && (c = l), n.setPartsOpacity(p, c)
                                    }
                            }
                        else
                            for (var _ = 0; _ < t.length; _++) {
                                var f = t[_],
                                    p = e[_],
                                    g = 0 != n.getParamFloat(f);
                                n.setPartsOpacity(p, g ? 1 : 0)
                            }
                    }, e.prototype.setPartsOpacity = function(t, e) {
                        "number" != typeof t && (t = this._$5S.getPartsDataIndex(l.getID(t))), this._$5S.setPartsOpacity(t, e)
                    }, e.prototype.getPartsDataIndex = function(t) {
                        return t instanceof l || (t = l.getID(t)), this._$5S.getPartsDataIndex(t)
                    }, e.prototype.getPartsOpacity = function(t) {
                        return "number" != typeof t && (t = this._$5S.getPartsDataIndex(l.getID(t))), t < 0 ? 0 : this._$5S.getPartsOpacity(t)
                    }, e.prototype.getDrawParam = function() {}, e.prototype.getDrawDataIndex = function(t) {
                        return this._$5S.getDrawDataIndex(E.getID(t))
                    }, e.prototype.getDrawData = function(t) {
                        return this._$5S.getDrawData(t)
                    }, e.prototype.getTransformedPoints = function(t) {
                        var e = this._$5S._$C2(t);
                        return e instanceof _t ? e.getTransformedPoints() : null
                    }, e.prototype.getIndexArray = function(t) {
                        if (t < 0 || t >= this._$5S._$aS.length) return null;
                        var e = this._$5S._$aS[t];
                        return null != e && e.getType() == H._$wb && e instanceof ct ? e.getIndexArray() : null
                    }, i.CHANNEL_COUNT = 4, i.RENDER_TEXTURE_USE_MIPMAP = !1, i.NOT_USED_FRAME = -100, i.prototype._$L7 = function() {
                        if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) {
                            for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
                            this.CHANNEL_COLORS = []
                        }
                        this.releaseShader()
                    }, i.prototype.releaseShader = function() {
                        for (var t = ut.frameBuffers.length, e = 0; e < t; e++) this.gl.deleteFramebuffer(ut.frameBuffers[e].framebuffer);
                        ut.frameBuffers = [], ut.glContext = []
                    }, i.prototype.init = function(t, e, i) {
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r].getClipIDList();
                            if (null != o) {
                                var n = this.findSameClip(o);
                                null == n && (n = new a(this, t, o), this.clipContextList.push(n));
                                var s = e[r].getDrawDataID(),
                                    u = t.getDrawDataIndex(s);
                                n.addClippedDrawData(s, u), i[r].clipBufPre_clipContext = n
                            }
                        }
                    }, i.prototype.getMaskRenderTexture = function() {
                        var t;
                        return t = this.dp_webgl.createFramebuffer(), ut.frameBuffers[this.dp_webgl.glno] = t, this.dp_webgl.glno
                    }, i.prototype.setupClip = function(t, e) {
                        for (var i = 0, a = 0; a < this.clipContextList.length; a++) {
                            var r = this.clipContextList[a];
                            this.calcClippedDrawTotalBounds(t, r), r.isUsing && i++
                        }
                        if (i > 0) {
                            var o = e.gl.getParameter(e.gl.FRAMEBUFFER_BINDING),
                                n = new Array(4);
                            for (n[0] = 0, n[1] = 0, n[2] = e.gl.canvas.width, n[3] = e.gl.canvas.height, e.gl.viewport(0, 0, ut.clippingMaskBufferSize, ut.clippingMaskBufferSize), this.setupLayoutBounds(i), e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, ut.frameBuffers[this.curFrameNo].framebuffer), e.gl.clearColor(0, 0, 0, 0), e.gl.clear(e.gl.COLOR_BUFFER_BIT), a = 0; a < this.clipContextList.length; a++) {
                                var s = (r = this.clipContextList[a]).allClippedDrawRect,
                                    u = (r.layoutChannelNo, r.layoutBounds);
                                this.tmpBoundsOnModel._$jL(s), this.tmpBoundsOnModel.expand(.05 * s.width, .05 * s.height);
                                var h = u.width / this.tmpBoundsOnModel.width,
                                    l = u.height / this.tmpBoundsOnModel.height;
                                this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(u.x, u.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(u.x, u.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m);
                                for (var c = this.tmpMatrixForMask.getArray(), _ = 0; _ < 16; _++) r.matrixForMask[_] = c[_];
                                var f = this.tmpMatrixForDraw.getArray();
                                for (_ = 0; _ < 16; _++) r.matrixForDraw[_] = f[_];
                                for (var p = r.clippingMaskDrawIndexList.length, g = 0; g < p; g++) {
                                    var d = r.clippingMaskDrawIndexList[g],
                                        m = t.getDrawData(d),
                                        b = t._$C2(d);
                                    e.setClipBufPre_clipContextForMask(r), m.draw(e, t, b)
                                }
                            }
                            e.gl.bindFramebuffer(e.gl.FRAMEBUFFER, o), e.setClipBufPre_clipContextForMask(null), e.gl.viewport(n[0], n[1], n[2], n[3])
                        }
                    }, i.prototype.getColorBuffer = function() {
                        return this.colorBuffer
                    }, i.prototype.findSameClip = function(t) {
                        for (var e = 0; e < this.clipContextList.length; e++) {
                            var i = this.clipContextList[e],
                                a = i.clipIDList.length;
                            if (a == t.length) {
                                for (var r = 0, o = 0; o < a; o++)
                                    for (var n = i.clipIDList[o], s = 0; s < a; s++)
                                        if (t[s] == n) {
                                            r++;
                                            break
                                        } if (r == a) return i
                            }
                        }
                        return null
                    }, i.prototype.calcClippedDrawTotalBounds = function(t, e) {
                        for (var i = t._$Ri.getModelImpl().getCanvasWidth(), a = t._$Ri.getModelImpl().getCanvasHeight(), r = i > a ? i : a, o = r, n = r, s = 0, u = 0, h = e.clippedDrawContextList.length, l = 0; l < h; l++) {
                            var c = e.clippedDrawContextList[l].drawDataIndex,
                                _ = t._$C2(c);
                            if (_._$yo()) {
                                for (var f = _.getTransformedPoints(), p = f.length, g = [], d = [], m = 0, b = V._$i2; b < p; b += V._$No) g[m] = f[b], d[m] = f[b + 1], m++;
                                var y = Math.min.apply(null, g),
                                    v = Math.min.apply(null, d),
                                    q = Math.max.apply(null, g),
                                    $ = Math.max.apply(null, d);
                                y < o && (o = y), v < n && (n = v), q > s && (s = q), $ > u && (u = $)
                            }
                        }
                        if (o == r) e.allClippedDrawRect.x = 0, e.allClippedDrawRect.y = 0, e.allClippedDrawRect.width = 0, e.allClippedDrawRect.height = 0, e.isUsing = !1;
                        else {
                            var A = s - o,
                                x = u - n;
                            e.allClippedDrawRect.x = o, e.allClippedDrawRect.y = n, e.allClippedDrawRect.width = A, e.allClippedDrawRect.height = x, e.isUsing = !0
                        }
                    }, i.prototype.setupLayoutBounds = function(t) {
                        var e = t / i.CHANNEL_COUNT,
                            a = t % i.CHANNEL_COUNT;
                        e = ~~e, a = ~~a;
                        for (var r = 0, o = 0; o < i.CHANNEL_COUNT; o++) {
                            var n = e + (o < a ? 1 : 0);
                            if (0 == n);
                            else if (1 == n)(c = this.clipContextList[r++]).layoutChannelNo = o, c.layoutBounds.x = 0, c.layoutBounds.y = 0, c.layoutBounds.width = 1, c.layoutBounds.height = 1;
                            else if (2 == n)
                                for (var u = 0; u < n; u++) {
                                    var h = 0;
                                    l = ~~(l = u % 2), (c = this.clipContextList[r++]).layoutChannelNo = o, c.layoutBounds.x = .5 * l, c.layoutBounds.y = 0, c.layoutBounds.width = .5, c.layoutBounds.height = 1
                                } else if (n <= 4)
                                    for (u = 0; u < n; u++) l = ~~(l = u % 2), h = ~~(h = u / 2), (c = this.clipContextList[r++]).layoutChannelNo = o, c.layoutBounds.x = .5 * l, c.layoutBounds.y = .5 * h, c.layoutBounds.width = .5, c.layoutBounds.height = .5;
                                else if (n <= 9)
                                for (u = 0; u < n; u++) {
                                    var l, c;
                                    l = ~~(l = u % 3), h = ~~(h = u / 3), (c = this.clipContextList[r++]).layoutChannelNo = o, c.layoutBounds.x = l / 3, c.layoutBounds.y = h / 3, c.layoutBounds.width = 1 / 3, c.layoutBounds.height = 1 / 3
                                } else s._$li("_$6 _$0P mask count : %d", n)
                        }
                    }, a.prototype.addClippedDrawData = function(t, e) {
                        var i = new r(t, e);
                        this.clippedDrawContextList.push(i)
                    }, n._$JT = function(t, e, i) {
                        var a = t / e,
                            r = i / e,
                            o = 1 / 3,
                            n = 2 / 3,
                            s = 1 - (1 - r) * (1 - r),
                            u = 1 - (1 - r) * (1 - r),
                            h = (1 - r) * o * s + (r * n + (1 - r) * o) * (1 - s),
                            l = (r + (1 - r) * n) * u + (r * o + (1 - r) * n) * (1 - u);
                        if (a <= 0) return 0;
                        if (a >= 1) return 1;
                        var c = a * a;
                        return a * c * (1 - 3 * l + 3 * h - 0) + (3 * l - 6 * h + 0) * c + (3 * h - 0) * a + 0
                    }, n.prototype._$a0 = function() {}, n.prototype.setFadeIn = function(t) {
                        this._$dP = t
                    }, n.prototype.setFadeOut = function(t) {
                        this._$eo = t
                    }, n.prototype._$pT = function(t) {
                        this._$V0 = t
                    }, n.prototype.getFadeOut = function() {
                        return this._$eo
                    }, n.prototype._$4T = function() {
                        return this._$eo
                    }, n.prototype._$mT = function() {
                        return this._$V0
                    }, n.prototype.getDurationMSec = function() {
                        return -1
                    }, n.prototype.getLoopDurationMSec = function() {
                        return -1
                    }, n.prototype.updateParam = function(t, e) {
                        if (e._$AT && !e._$9L) {
                            var i = C.getUserTimeMSec();
                            if (e._$z2 < 0) {
                                e._$z2 = i, e._$bs = i;
                                var a = this.getDurationMSec();
                                e._$Do < 0 && (e._$Do = a <= 0 ? -1 : e._$z2 + a)
                            }
                            var r = this._$V0;
                            0 <= (r = r * (0 == this._$dP ? 1 : ht._$r2((i - e._$bs) / this._$dP)) * (0 == this._$eo || e._$Do < 0 ? 1 : ht._$r2((e._$Do - i) / this._$eo))) && r <= 1 || console.log("### assert!! ### "), this.updateParamExe(t, i, r, e), e._$Do > 0 && e._$Do < i && (e._$9L = !0)
                        }
                    }, n.prototype.updateParamExe = function(t, e, i, a) {}, s._$8s = 0, s._$fT = new Object, s.start = function(t) {
                        var e = s._$fT[t];
                        null == e && ((e = new u)._$r = t, s._$fT[t] = e), e._$0S = C.getSystemTimeMSec()
                    }, s.dump = function(t) {
                        var e = s._$fT[t];
                        if (null != e) {
                            var i = C.getSystemTimeMSec() - e._$0S;
                            return console.log(t + " : " + i + "ms"), i
                        }
                        return -1
                    }, s.end = function(t) {
                        var e = s._$fT[t];
                        return null != e ? C.getSystemTimeMSec() - e._$0S : -1
                    }, s._$li = function(t, e) {
                        console.log("_$li : " + t + "\n", e)
                    }, s._$Ji = function(t, e) {
                        console.log(t, e)
                    }, s._$dL = function(t, e) {
                        console.log(t, e), console.log("\n")
                    }, s._$KL = function(t, e) {
                        for (var i = 0; i < e; i++) i % 16 == 0 && i > 0 ? console.log("\n") : i % 8 == 0 && i > 0 && console.log("  "), console.log("%02X ", 255 & t[i]);
                        console.log("\n")
                    }, s._$nr = function(t, e, i) {
                        console.log("%s\n", t);
                        for (var a = e.length, r = 0; r < a; ++r) console.log("%5d", e[r]), console.log("%s\n", i), console.log(",");
                        console.log("\n")
                    }, s._$Rb = function(t) {
                        console.log("dump exception : " + t), console.log("stack :: " + t.stack)
                    }, h.prototype._$8P = function() {
                        return .5 * (this.x + this.x + this.width)
                    }, h.prototype._$6P = function() {
                        return .5 * (this.y + this.y + this.height)
                    }, h.prototype._$EL = function() {
                        return this.x + this.width
                    }, h.prototype._$5T = function() {
                        return this.y + this.height
                    }, h.prototype._$jL = function(t, e, i, a) {
                        this.x = t, this.y = e, this.width = i, this.height = a
                    }, h.prototype._$jL = function(t) {
                        this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                    }, l.prototype = new at, l._$tP = new Object, l._$27 = function() {
                        l._$tP.clear()
                    }, l.getID = function(t) {
                        var e = l._$tP[t];
                        return null == e && (e = new l(t), l._$tP[t] = e), e
                    }, l.prototype._$3s = function() {
                        return new l
                    }, c.prototype = new at, c._$tP = new Object, c._$27 = function() {
                        c._$tP.clear()
                    }, c.getID = function(t) {
                        var e = c._$tP[t];
                        return null == e && (e = new c(t), c._$tP[t] = e), e
                    }, c.prototype._$3s = function() {
                        return new c
                    }, _._$42 = 0, _.prototype._$zP = function() {
                        null == this._$vo && (this._$vo = new rt), null == this._$F2 && (this._$F2 = new Array)
                    }, _.prototype.getCanvasWidth = function() {
                        return this._$ao
                    }, _.prototype.getCanvasHeight = function() {
                        return this._$1S
                    }, _.prototype._$F0 = function(t) {
                        this._$vo = t._$nP(), this._$F2 = t._$nP(), this._$ao = t._$6L(), this._$1S = t._$6L()
                    }, _.prototype._$6S = function(t) {
                        this._$F2.push(t)
                    }, _.prototype._$Xr = function() {
                        return this._$F2
                    }, _.prototype._$E2 = function() {
                        return this._$vo
                    }, f.prototype.setup = function(t, e, i) {
                        this._$ks = this._$Yb(), this.p2._$xT(), 3 == arguments.length && (this._$Fo = t, this._$L2 = e, this.p1._$p = i, this.p2._$p = i, this.p2.y = t, this.setup())
                    }, f.prototype.getPhysicsPoint1 = function() {
                        return this.p1
                    }, f.prototype.getPhysicsPoint2 = function() {
                        return this.p2
                    }, f.prototype._$qr = function() {
                        return this._$Db
                    }, f.prototype._$pr = function(t) {
                        this._$Db = t
                    }, f.prototype._$5r = function() {
                        return this._$M2
                    }, f.prototype._$Cs = function() {
                        return this._$9b
                    }, f.prototype._$Yb = function() {
                        return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI
                    }, f.prototype.addSrcParam = function(t, e, i, a) {
                        var r = new d(t, e, i, a);
                        this._$lL.push(r)
                    }, f.prototype.addTargetParam = function(t, e, i, a) {
                        var r = new y(t, e, i, a);
                        this._$qP.push(r)
                    }, f.prototype.update = function(t, e) {
                        if (0 == this._$iP) return this._$iP = this._$iT = e, void(this._$Fo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y)));
                        var i = (e - this._$iT) / 1e3;
                        if (0 != i) {
                            for (var a = this._$lL.length - 1; a >= 0; --a) this._$lL[a]._$oP(t, this);
                            this._$oo(t, i), this._$M2 = this._$Yb(), this._$9b = (this._$M2 - this._$ks) / i, this._$ks = this._$M2
                        }
                        for (a = this._$qP.length - 1; a >= 0; --a) this._$qP[a]._$YS(t, this);
                        this._$iT = e
                    }, f.prototype._$oo = function(t, e) {
                        e < .033 && (e = .033);
                        var i = 1 / e;
                        this.p1.vx = (this.p1.x - this.p1._$s0) * i, this.p1.vy = (this.p1.y - this.p1._$70) * i, this.p1.ax = (this.p1.vx - this.p1._$7L) * i, this.p1.ay = (this.p1.vy - this.p1._$HL) * i, this.p1.fx = this.p1.ax * this.p1._$p, this.p1.fy = this.p1.ay * this.p1._$p, this.p1._$xT();
                        var a, r, o = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
                            n = Math.cos(o),
                            s = Math.sin(o),
                            u = 9.8 * this.p2._$p,
                            h = this._$Db * xt._$bS,
                            l = u * Math.cos(o - h);
                        a = l * s, r = l * n;
                        var c = -this.p1.fx * s * s,
                            _ = -this.p1.fy * s * n,
                            f = -this.p2.vx * this._$L2,
                            p = -this.p2.vy * this._$L2;
                        this.p2.fx = a + c + f, this.p2.fy = r + _ + p, this.p2.ax = this.p2.fx / this.p2._$p, this.p2.ay = this.p2.fy / this.p2._$p, this.p2.vx += this.p2.ax * e, this.p2.vy += this.p2.ay * e, this.p2.x += this.p2.vx * e, this.p2.y += this.p2.vy * e;
                        var g = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
                        this.p2.x = this.p1.x + this._$Fo * (this.p2.x - this.p1.x) / g, this.p2.y = this.p1.y + this._$Fo * (this.p2.y - this.p1.y) / g, this.p2.vx = (this.p2.x - this.p2._$s0) * i, this.p2.vy = (this.p2.y - this.p2._$70) * i, this.p2._$xT()
                    }, p.prototype._$xT = function() {
                        this._$s0 = this.x, this._$70 = this.y, this._$7L = this.vx, this._$HL = this.vy
                    }, g.prototype._$oP = function(t, e) {}, d.prototype = new g, d.prototype._$oP = function(t, e) {
                        var i = this.scale * t.getParamFloat(this._$wL),
                            a = e.getPhysicsPoint1();
                        switch (this._$tL) {
                            default:
                            case f.Src.SRC_TO_X:
                                a.x = a.x + (i - a.x) * this._$V0;
                                break;
                            case f.Src.SRC_TO_Y:
                                a.y = a.y + (i - a.y) * this._$V0;
                                break;
                            case f.Src.SRC_TO_G_ANGLE:
                                var r = e._$qr();
                                r += (i - r) * this._$V0, e._$pr(r)
                        }
                    }, b.prototype._$YS = function(t, e) {}, y.prototype = new b, y.prototype._$YS = function(t, e) {
                        switch (this._$YP) {
                            default:
                            case f.Target.TARGET_FROM_ANGLE:
                                t.setParamFloat(this._$wL, this.scale * e._$5r(), this._$V0);
                                break;
                            case f.Target.TARGET_FROM_ANGLE_V:
                                t.setParamFloat(this._$wL, this.scale * e._$Cs(), this._$V0)
                        }
                    }, f.Src = function() {}, f.Src.SRC_TO_X = "SRC_TO_X", f.Src.SRC_TO_Y = "SRC_TO_Y", f.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE", f.Target = function() {}, f.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", f.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V", v.prototype.init = function(t) {
                        this._$fL = t._$fL, this._$gL = t._$gL, this._$B0 = t._$B0, this._$z0 = t._$z0, this._$qT = t._$qT, this.reflectX = t.reflectX, this.reflectY = t.reflectY
                    }, v.prototype._$F0 = function(t) {
                        this._$fL = t._$_T(), this._$gL = t._$_T(), this._$B0 = t._$_T(), this._$z0 = t._$_T(), this._$qT = t._$_T(), t.getFormatVersion() >= O.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._$po(), this.reflectY = t._$po())
                    }, v.prototype._$e = function() {};
                    var q = function() {};

                    function $() {
                        t || (this.x = null, this.y = null, this.width = null, this.height = null)
                    }

                    function A() {}

                    function x() {
                        t || (this.x = null, this.y = null)
                    }

                    function w() {
                        t || (this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null, this.clipID = null, this.clipIDList = new Array)
                    }

                    function S() {
                        t || (this._$Eb = S._$ps, this._$lT = 1, this._$C0 = 1, this._$tT = 1, this._$WL = 1, this.culling = !1, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = S.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array)
                    }

                    function L() {
                        t || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._$ho = 1, this.blendMode = ut.L2D_COLOR_BLEND_MODE_MULT)
                    }

                    function P() {
                        t || (this._$kP = null, this._$dr = null, this._$Ai = !0, this._$mS = null)
                    }

                    function C() {}

                    function M() {
                        t || (this._$VP = 0, this._$wL = null, this._$GP = null, this._$8o = M._$ds, this._$2r = -1, this._$O2 = 0, this._$ri = 0)
                    }

                    function T() {}

                    function D() {
                        t || (this._$Ob = null)
                    }

                    function I() {
                        this.m = new Float32Array(16), this.identity()
                    }

                    function E(e) {
                        t || at.prototype.constructor.call(this, e)
                    }

                    function B() {
                        t || (this._$7 = 1, this._$f = 0, this._$H = 0, this._$g = 1, this._$k = 0, this._$w = 0, this._$hi = STATE_IDENTITY, this._$Z = _$pS)
                    }

                    function F() {
                        t || (n.prototype.constructor.call(this), this.motions = new Array, this._$7r = null, this._$7r = F._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !0, this.loopFadeIn = !0, this._$AS = -1, _$a0())
                    }

                    function k() {
                        this._$P = new Float32Array(100), this.size = 0
                    }

                    function R() {
                        this._$4P = null, this._$I0 = null, this._$RP = null
                    }

                    function V() {}

                    function O() {}

                    function N(e) {
                        t || (this._$QT = !0, this._$co = -1, this._$qo = 0, this._$pb = new Array(N._$is), this._$_2 = new Float32Array(N._$is), this._$vr = new Float32Array(N._$is), this._$Rr = new Float32Array(N._$is), this._$Or = new Float32Array(N._$is), this._$fs = new Float32Array(N._$is), this._$Js = new Array(N._$is), this._$3S = new Array, this._$aS = new Array, this._$Bo = null, this._$F2 = new Array, this._$db = new Array, this._$8b = new Array, this._$Hr = new Array, this._$Ws = null, this._$Vs = null, this._$Er = null, this._$Es = new Int16Array(V._$Qb), this._$ZP = new Float32Array(2 * V._$1r), this._$Ri = e, this._$b0 = N._$HP++, this.clipManager = null, this.dp_webgl = null)
                    }

                    function U() {}

                    function G() {
                        t || (this._$12 = null, this._$bb = null, this._$_L = null, this._$jo = null, this._$iL = null, this._$0L = null, this._$Br = null, this._$Dr = null, this._$Cb = null, this._$mr = null, this._$_L = Y.STATE_FIRST, this._$Br = 4e3, this._$Dr = 100, this._$Cb = 50, this._$mr = 150, this._$jo = !0, this._$iL = "PARAM_EYE_L_OPEN", this._$0L = "PARAM_EYE_R_OPEN")
                    }
                    q._$ni = function(t, e, i, a, r, o, n, s, u) {
                        var h = n * o - s * r;
                        if (0 == h) return null;
                        var l, c = ((t - i) * o - (e - a) * r) / h;
                        return l = 0 != r ? (t - i - c * n) / r : (e - a - c * s) / o, isNaN(l) && (l = (t - i - c * n) / r, isNaN(l) && (l = (e - a - c * s) / o), isNaN(l) && (console.log("a is NaN @UtVector#_$ni() "), console.log("v1x : " + r), console.log("v1x != 0 ? " + (0 != r)))), null == u ? new Array(l, c) : (u[0] = l, u[1] = c, u)
                    }, $.prototype._$8P = function() {
                        return this.x + .5 * this.width
                    }, $.prototype._$6P = function() {
                        return this.y + .5 * this.height
                    }, $.prototype._$EL = function() {
                        return this.x + this.width
                    }, $.prototype._$5T = function() {
                        return this.y + this.height
                    }, $.prototype._$jL = function(t, e, i, a) {
                        this.x = t, this.y = e, this.width = i, this.height = a
                    }, $.prototype._$jL = function(t) {
                        this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                    }, $.prototype.contains = function(t, e) {
                        return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height
                    }, $.prototype.expand = function(t, e) {
                        this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                    }, A._$Z2 = function(t, e, i, a) {
                        var r = e._$Q2(t, i),
                            o = t._$vs(),
                            n = t._$Tr();
                        if (e._$zr(o, n, r), r <= 0) return a[o[0]];
                        if (1 == r) return (s = a[o[0]]) + ((u = a[o[1]]) - s) * (y = n[0]) | 0;
                        if (2 == r) {
                            var s = a[o[0]],
                                u = a[o[1]],
                                h = a[o[2]],
                                l = a[o[3]];
                            return ($ = s + (u - s) * (y = n[0]) | 0) + ((h + (l - h) * y | 0) - $) * (v = n[1]) | 0
                        }
                        if (3 == r) {
                            var c = a[o[0]],
                                _ = a[o[1]],
                                f = a[o[2]],
                                p = a[o[3]],
                                g = a[o[4]],
                                d = a[o[5]],
                                m = a[o[6]],
                                b = a[o[7]];
                            return ($ = (s = c + (_ - c) * (y = n[0]) | 0) + ((u = f + (p - f) * y | 0) - s) * (v = n[1]) | 0) + (((h = g + (d - g) * y | 0) + ((l = m + (b - m) * y | 0) - h) * v | 0) - $) * (q = n[2]) | 0
                        }
                        if (4 == r) {
                            var y, v, q, $, A = a[o[0]],
                                x = a[o[1]],
                                w = a[o[2]],
                                S = a[o[3]],
                                L = a[o[4]],
                                P = a[o[5]],
                                C = a[o[6]],
                                M = a[o[7]],
                                T = a[o[8]],
                                D = a[o[9]],
                                I = a[o[10]],
                                E = a[o[11]],
                                B = a[o[12]],
                                F = a[o[13]],
                                k = a[o[14]],
                                R = a[o[15]];
                            return ($ = (s = (c = A + (x - A) * (y = n[0]) | 0) + ((_ = w + (S - w) * y | 0) - c) * (v = n[1]) | 0) + ((u = (f = L + (P - L) * y | 0) + ((p = C + (M - C) * y | 0) - f) * v | 0) - s) * (q = n[2]) | 0) + (((h = (g = T + (D - T) * y | 0) + ((d = I + (E - I) * y | 0) - g) * v | 0) + ((l = (m = B + (F - B) * y | 0) + ((b = k + (R - k) * y | 0) - m) * v | 0) - h) * q | 0) - $) * n[3] | 0
                        }
                        for (var V = 1 << r, O = new Float32Array(V), N = 0; N < V; N++) {
                            for (var U = N, G = 1, Y = 0; Y < r; Y++) G *= U % 2 == 0 ? 1 - n[Y] : n[Y], U /= 2;
                            O[N] = G
                        }
                        for (var j = new Float32Array(V), z = 0; z < V; z++) j[z] = a[o[z]];
                        var X = 0;
                        for (z = 0; z < V; z++) X += O[z] * j[z];
                        return X + .5 | 0
                    }, A._$br = function(t, e, i, a) {
                        var r = e._$Q2(t, i),
                            o = t._$vs(),
                            n = t._$Tr();
                        if (e._$zr(o, n, r), r <= 0) return a[o[0]];
                        if (1 == r) return (s = a[o[0]]) + ((u = a[o[1]]) - s) * n[0];
                        if (2 == r) {
                            var s = a[o[0]],
                                u = a[o[1]],
                                h = a[o[2]],
                                l = a[o[3]],
                                c = n[0];
                            return (1 - (v = n[1])) * (s + (u - s) * c) + v * (h + (l - h) * c)
                        }
                        if (3 == r) {
                            var _ = a[o[0]],
                                f = a[o[1]],
                                p = a[o[2]],
                                g = a[o[3]],
                                d = a[o[4]],
                                m = a[o[5]],
                                b = a[o[6]],
                                y = a[o[7]],
                                v = (c = n[0], n[1]);
                            return (1 - (k = n[2])) * ((1 - v) * (_ + (f - _) * c) + v * (p + (g - p) * c)) + k * ((1 - v) * (d + (m - d) * c) + v * (b + (y - b) * c))
                        }
                        if (4 == r) {
                            var q = a[o[0]],
                                $ = a[o[1]],
                                A = a[o[2]],
                                x = a[o[3]],
                                w = a[o[4]],
                                S = a[o[5]],
                                L = a[o[6]],
                                P = a[o[7]],
                                C = a[o[8]],
                                M = a[o[9]],
                                T = a[o[10]],
                                D = a[o[11]],
                                I = a[o[12]],
                                E = a[o[13]],
                                B = a[o[14]],
                                F = a[o[15]],
                                k = (c = n[0], v = n[1], n[2]),
                                R = n[3];
                            return (1 - R) * ((1 - k) * ((1 - v) * (q + ($ - q) * c) + v * (A + (x - A) * c)) + k * ((1 - v) * (w + (S - w) * c) + v * (L + (P - L) * c))) + R * ((1 - k) * ((1 - v) * (C + (M - C) * c) + v * (T + (D - T) * c)) + k * ((1 - v) * (I + (E - I) * c) + v * (B + (F - B) * c)))
                        }
                        for (var V = 1 << r, O = new Float32Array(V), N = 0; N < V; N++) {
                            for (var U = N, G = 1, Y = 0; Y < r; Y++) G *= U % 2 == 0 ? 1 - n[Y] : n[Y], U /= 2;
                            O[N] = G
                        }
                        for (var j = new Float32Array(V), z = 0; z < V; z++) j[z] = a[o[z]];
                        var X = 0;
                        for (z = 0; z < V; z++) X += O[z] * j[z];
                        return X
                    }, A._$Vr = function(t, e, i, a, r, o, n, s) {
                        var u = e._$Q2(t, i),
                            h = t._$vs(),
                            l = t._$Tr();
                        e._$zr(h, l, u);
                        var c = 2 * a,
                            _ = n;
                        if (u <= 0) {
                            var f = r[h[0]];
                            if (2 == s && 0 == n) C._$jT(f, 0, o, 0, c);
                            else
                                for (var p = 0; p < c;) o[_] = f[p++], o[_ + 1] = f[p++], _ += s
                        } else if (1 == u) {
                            f = r[h[0]];
                            var g = r[h[1]],
                                d = 1 - (y = l[0]);
                            for (p = 0; p < c;) o[_] = f[p] * d + g[p] * y, ++p, o[_ + 1] = f[p] * d + g[p] * y, ++p, _ += s
                        } else if (2 == u) {
                            f = r[h[0]], g = r[h[1]];
                            var m = r[h[2]],
                                b = r[h[3]],
                                y = l[0],
                                v = (U = 1 - (I = l[1])) * (d = 1 - y),
                                q = U * y,
                                $ = I * d,
                                A = I * y;
                            for (p = 0; p < c;) o[_] = v * f[p] + q * g[p] + $ * m[p] + A * b[p], ++p, o[_ + 1] = v * f[p] + q * g[p] + $ * m[p] + A * b[p], ++p, _ += s
                        } else if (3 == u) {
                            var x = r[h[0]],
                                w = r[h[1]],
                                S = r[h[2]],
                                L = r[h[3]],
                                P = r[h[4]],
                                M = r[h[5]],
                                T = r[h[6]],
                                D = r[h[7]],
                                I = (y = l[0], l[1]),
                                E = (G = 1 - (nt = l[2])) * (U = 1 - I) * (d = 1 - y),
                                B = G * U * y,
                                F = G * I * d,
                                k = G * I * y,
                                R = nt * U * d,
                                V = nt * U * y,
                                O = nt * I * d,
                                N = nt * I * y;
                            for (p = 0; p < c;) o[_] = E * x[p] + B * w[p] + F * S[p] + k * L[p] + R * P[p] + V * M[p] + O * T[p] + N * D[p], ++p, o[_ + 1] = E * x[p] + B * w[p] + F * S[p] + k * L[p] + R * P[p] + V * M[p] + O * T[p] + N * D[p], ++p, _ += s
                        } else if (4 == u) {
                            var U, G, Y = r[h[0]],
                                j = r[h[1]],
                                z = r[h[2]],
                                X = r[h[3]],
                                H = r[h[4]],
                                W = r[h[5]],
                                J = r[h[6]],
                                Q = r[h[7]],
                                Z = r[h[8]],
                                K = r[h[9]],
                                tt = r[h[10]],
                                et = r[h[11]],
                                it = r[h[12]],
                                at = r[h[13]],
                                rt = r[h[14]],
                                ot = r[h[15]],
                                nt = (y = l[0], I = l[1], l[2]),
                                st = l[3],
                                ut = 1 - st,
                                ht = ut * (G = 1 - nt) * (U = 1 - I) * (d = 1 - y),
                                lt = ut * G * U * y,
                                ct = ut * G * I * d,
                                _t = ut * G * I * y,
                                ft = ut * nt * U * d,
                                pt = ut * nt * U * y,
                                gt = ut * nt * I * d,
                                dt = ut * nt * I * y,
                                mt = st * G * U * d,
                                bt = st * G * U * y,
                                yt = st * G * I * d,
                                vt = st * G * I * y,
                                qt = st * nt * U * d,
                                $t = st * nt * U * y,
                                At = st * nt * I * d,
                                xt = st * nt * I * y;
                            for (p = 0; p < c;) o[_] = ht * Y[p] + lt * j[p] + ct * z[p] + _t * X[p] + ft * H[p] + pt * W[p] + gt * J[p] + dt * Q[p] + mt * Z[p] + bt * K[p] + yt * tt[p] + vt * et[p] + qt * it[p] + $t * at[p] + At * rt[p] + xt * ot[p], ++p, o[_ + 1] = ht * Y[p] + lt * j[p] + ct * z[p] + _t * X[p] + ft * H[p] + pt * W[p] + gt * J[p] + dt * Q[p] + mt * Z[p] + bt * K[p] + yt * tt[p] + vt * et[p] + qt * it[p] + $t * at[p] + At * rt[p] + xt * ot[p], ++p, _ += s
                        } else {
                            for (var wt = 1 << u, St = new Float32Array(wt), Lt = 0; Lt < wt; Lt++) {
                                for (var Pt = Lt, Ct = 1, Mt = 0; Mt < u; Mt++) Ct *= Pt % 2 == 0 ? 1 - l[Mt] : l[Mt], Pt /= 2;
                                St[Lt] = Ct
                            }
                            for (var Tt = new Float32Array(wt), Dt = 0; Dt < wt; Dt++) Tt[Dt] = r[h[Dt]];
                            for (p = 0; p < c;) {
                                var It = 0,
                                    Et = 0,
                                    Bt = p + 1;
                                for (Dt = 0; Dt < wt; Dt++) It += St[Dt] * Tt[Dt][p], Et += St[Dt] * Tt[Dt][Bt];
                                p += 2, o[_] = It, o[_ + 1] = Et, _ += s
                            }
                        }
                    }, x.prototype._$HT = function(t, e) {
                        this.x = t, this.y = e
                    }, x.prototype._$HT = function(t) {
                        this.x = t.x, this.y = t.y
                    }, w._$ur = -2, w._$ES = 500, w._$wb = 2, w._$8S = 3, w._$52 = w._$ES, w._$R2 = w._$ES, w._$or = function() {
                        return w._$52
                    }, w._$Pr = function() {
                        return w._$R2
                    }, w.prototype.convertClipIDForV2_11 = function(t) {
                        var e = [];
                        return null == t || 0 == t.length ? null : /,/.test(t) ? e = t.id.split(",") : (e.push(t.id), e)
                    }, w.prototype._$F0 = function(t) {
                        this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(), this._$mS = t._$Tb(), t.getFormatVersion() >= O._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._$MS(this._$Lb)
                    }, w.prototype.getClipIDList = function() {
                        return this.clipIDList
                    }, w.prototype.init = function(t) {}, w.prototype._$Nr = function(t, e) {
                        if (e._$IS[0] = !1, e._$Us = A._$Z2(t, this._$GS, e._$IS, this._$Lb), ut._$Zs);
                        else if (e._$IS[0]) return;
                        e._$7s = A._$br(t, this._$GS, e._$IS, this._$mS)
                    }, w.prototype._$2b = function(t, e) {}, w.prototype.getDrawDataID = function() {
                        return this._$gP
                    }, w.prototype._$j2 = function(t) {
                        this._$gP = t
                    }, w.prototype.getOpacity = function(t, e) {
                        return e._$7s
                    }, w.prototype._$zS = function(t, e) {
                        return e._$Us
                    }, w.prototype._$MS = function(t) {
                        for (var e = t.length - 1; e >= 0; --e) {
                            var i = t[e];
                            i < w._$52 ? w._$52 = i : i > w._$R2 && (w._$R2 = i)
                        }
                    }, w.prototype.getTargetBaseDataID = function() {
                        return this._$dr
                    }, w.prototype._$gs = function(t) {
                        this._$dr = t
                    }, w.prototype._$32 = function() {
                        return null != this._$dr && this._$dr != bt._$2o()
                    }, w.prototype.preDraw = function(t, e, i) {}, w.prototype.draw = function(t, e, i) {}, w.prototype.getType = function() {}, w.prototype._$B2 = function(t, e, i) {}, S._$ps = 32, S.CLIPPING_PROCESS_NONE = 0, S.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, S.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, S.CLIPPING_PROCESS_DRAW = 3, S.CLIPPING_PROCESS_CLEAR_ALPHA = 4, S.prototype.setChannelFlagAsColor = function(t, e) {
                        this.CHANNEL_COLORS[t] = e
                    }, S.prototype.getChannelFlagAsColor = function(t) {
                        return this.CHANNEL_COLORS[t]
                    }, S.prototype._$ZT = function() {}, S.prototype._$Uo = function(t, e, i, a, r, o, n) {}, S.prototype._$Rs = function() {
                        return -1
                    }, S.prototype._$Ds = function(t) {}, S.prototype.setBaseColor = function(t, e, i, a) {
                        t < 0 ? t = 0 : t > 1 && (t = 1), e < 0 ? e = 0 : e > 1 && (e = 1), i < 0 ? i = 0 : i > 1 && (i = 1), a < 0 ? a = 0 : a > 1 && (a = 1), this._$lT = t, this._$C0 = e, this._$tT = i, this._$WL = a
                    }, S.prototype._$WP = function(t) {
                        this.culling = t
                    }, S.prototype.setMatrix = function(t) {
                        for (var e = 0; e < 16; e++) this.matrix4x4[e] = t[e]
                    }, S.prototype._$IT = function() {
                        return this.matrix4x4
                    }, S.prototype.setPremultipliedAlpha = function(t) {
                        this.premultipliedAlpha = t
                    }, S.prototype.isPremultipliedAlpha = function() {
                        return this.premultipliedAlpha
                    }, S.prototype.setAnisotropy = function(t) {
                        this.anisotropy = t
                    }, S.prototype.getAnisotropy = function() {
                        return this.anisotropy
                    }, S.prototype.getClippingProcess = function() {
                        return this.clippingProcess
                    }, S.prototype.setClippingProcess = function(t) {
                        this.clippingProcess = t
                    }, S.prototype.setClipBufPre_clipContextForMask = function(t) {
                        this.clipBufPre_clipContextMask = t
                    }, S.prototype.getClipBufPre_clipContextMask = function() {
                        return this.clipBufPre_clipContextMask
                    }, S.prototype.setClipBufPre_clipContextForDraw = function(t) {
                        this.clipBufPre_clipContextDraw = t
                    }, S.prototype.getClipBufPre_clipContextDraw = function() {
                        return this.clipBufPre_clipContextDraw
                    }, P._$ur = -2, P._$c2 = 1, P._$_b = 2, P.prototype._$F0 = function(t) {
                        this._$kP = t._$nP(), this._$dr = t._$nP()
                    }, P.prototype.readV2_opacity = function(t) {
                        t.getFormatVersion() >= O.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._$mS = t._$Tb())
                    }, P.prototype.init = function(t) {}, P.prototype._$Nr = function(t, e) {}, P.prototype.interpolateOpacity = function(t, e, i, a) {
                        null == this._$mS ? i.setInterpolatedOpacity(1) : i.setInterpolatedOpacity(A._$br(t, e, a, this._$mS))
                    }, P.prototype._$2b = function(t, e) {}, P.prototype._$nb = function(t, e, i, a, r, o, n) {}, P.prototype.getType = function() {}, P.prototype._$gs = function(t) {
                        this._$dr = t
                    }, P.prototype._$a2 = function(t) {
                        this._$kP = t
                    }, P.prototype.getTargetBaseDataID = function() {
                        return this._$dr
                    }, P.prototype.getBaseDataID = function() {
                        return this._$kP
                    }, P.prototype._$32 = function() {
                        return null != this._$dr && this._$dr != bt._$2o()
                    }, C._$W2 = 0, C._$CS = C._$W2, C._$Mo = function() {
                        return !0
                    }, C._$XP = function(t) {
                        try {
                            for (var e = getTimeMSec(); getTimeMSec() - e < t;);
                        } catch (t) {
                            t._$Rb()
                        }
                    }, C.getUserTimeMSec = function() {
                        return C._$CS == C._$W2 ? C.getSystemTimeMSec() : C._$CS
                    }, C.setUserTimeMSec = function(t) {
                        C._$CS = t
                    }, C.updateUserTimeMSec = function() {
                        return C._$CS = C.getSystemTimeMSec()
                    }, C.getTimeMSec = function() {
                        return (new Date).getTime()
                    }, C.getSystemTimeMSec = function() {
                        return (new Date).getTime()
                    }, C._$Q = function(t) {}, C._$jT = function(t, e, i, a, r) {
                        for (var o = 0; o < r; o++) i[a + o] = t[e + o]
                    }, M._$ds = -2, M.prototype._$F0 = function(t) {
                        this._$wL = t._$nP(), this._$VP = t._$6L(), this._$GP = t._$nP()
                    }, M.prototype.getParamIndex = function(t) {
                        return this._$2r != t && (this._$8o = M._$ds), this._$8o
                    }, M.prototype._$Pb = function(t, e) {
                        this._$8o = t, this._$2r = e
                    }, M.prototype.getParamID = function() {
                        return this._$wL
                    }, M.prototype._$yP = function(t) {
                        this._$wL = t
                    }, M.prototype._$N2 = function() {
                        return this._$VP
                    }, M.prototype._$d2 = function() {
                        return this._$GP
                    }, M.prototype._$t2 = function(t, e) {
                        this._$VP = t, this._$GP = e
                    }, M.prototype._$Lr = function() {
                        return this._$O2
                    }, M.prototype._$wr = function(t) {
                        this._$O2 = t
                    }, M.prototype._$SL = function() {
                        return this._$ri
                    }, M.prototype._$AL = function(t) {
                        this._$ri = t
                    }, T.startsWith = function(t, e, i) {
                        var a = e + i.length;
                        if (a >= t.length) return !1;
                        for (var r = e; r < a; r++)
                            if (T.getChar(t, r) != i.charAt(r - e)) return !1;
                        return !0
                    }, T.getChar = function(t, e) {
                        return String.fromCharCode(t.getUint8(e))
                    }, T.createString = function(t, e, i) {
                        for (var a = new ArrayBuffer(2 * i), r = new Uint16Array(a), o = 0; o < i; o++) r[o] = t.getUint8(e + o);
                        return String.fromCharCode.apply(null, r)
                    }, T._$LS = function(t, e, i, a) {
                        t instanceof ArrayBuffer && (t = new DataView(t));
                        var r = i,
                            o = !1,
                            n = !1,
                            s = 0,
                            u = T.getChar(t, r);
                        "-" == u && (o = !0, r++);
                        for (var h = !1; r < e; r++) {
                            switch (u = T.getChar(t, r)) {
                                case "0":
                                    s *= 10;
                                    break;
                                case "1":
                                    s = 10 * s + 1;
                                    break;
                                case "2":
                                    s = 10 * s + 2;
                                    break;
                                case "3":
                                    s = 10 * s + 3;
                                    break;
                                case "4":
                                    s = 10 * s + 4;
                                    break;
                                case "5":
                                    s = 10 * s + 5;
                                    break;
                                case "6":
                                    s = 10 * s + 6;
                                    break;
                                case "7":
                                    s = 10 * s + 7;
                                    break;
                                case "8":
                                    s = 10 * s + 8;
                                    break;
                                case "9":
                                    s = 10 * s + 9;
                                    break;
                                case ".":
                                    n = !0, r++, h = !0;
                                    break;
                                default:
                                    h = !0
                            }
                            if (h) break
                        }
                        if (n)
                            for (var l = .1, c = !1; r < e; r++) {
                                switch (u = T.getChar(t, r)) {
                                    case "0":
                                        break;
                                    case "1":
                                        s += 1 * l;
                                        break;
                                    case "2":
                                        s += 2 * l;
                                        break;
                                    case "3":
                                        s += 3 * l;
                                        break;
                                    case "4":
                                        s += 4 * l;
                                        break;
                                    case "5":
                                        s += 5 * l;
                                        break;
                                    case "6":
                                        s += 6 * l;
                                        break;
                                    case "7":
                                        s += 7 * l;
                                        break;
                                    case "8":
                                        s += 8 * l;
                                        break;
                                    case "9":
                                        s += 9 * l;
                                        break;
                                    default:
                                        c = !0
                                }
                                if (l *= .1, c) break
                            }
                        return o && (s = -s), a[0] = r, s
                    }, D.prototype._$zP = function() {
                        this._$Ob = new Array
                    }, D.prototype._$F0 = function(t) {
                        this._$Ob = t._$nP()
                    }, D.prototype._$Ur = function(t) {
                        if (t._$WS()) return !0;
                        for (var e = t._$v2(), i = this._$Ob.length - 1; i >= 0; --i) {
                            var a = this._$Ob[i].getParamIndex(e);
                            if (a == M._$ds && (a = t.getParamIndex(this._$Ob[i].getParamID())), t._$Xb(a)) return !0
                        }
                        return !1
                    }, D.prototype._$Q2 = function(t, e) {
                        for (var i, a, r = this._$Ob.length, o = t._$v2(), n = 0, s = 0; s < r; s++) {
                            var u = this._$Ob[s];
                            if ((i = u.getParamIndex(o)) == M._$ds && (i = t.getParamIndex(u.getParamID()), u._$Pb(i, o)), i < 0) throw new Exception("err 23242 : " + u.getParamID());
                            var h = i < 0 ? 0 : t.getParamFloat(i);
                            a = u._$N2();
                            var l, c, _ = u._$d2(),
                                f = -1,
                                p = 0;
                            if (a < 1);
                            else if (1 == a)(l = _[0]) - V._$J < h && h < l + V._$J ? (f = 0, p = 0) : (f = 0, e[0] = !0);
                            else if (h < (l = _[0]) - V._$J) f = 0, e[0] = !0;
                            else if (h < l + V._$J) f = 0;
                            else {
                                for (var g = !1, d = 1; d < a; ++d) {
                                    if (h < (c = _[d]) + V._$J) {
                                        c - V._$J < h ? f = d : (f = d - 1, p = (h - l) / (c - l), n++), g = !0;
                                        break
                                    }
                                    l = c
                                }
                                g || (f = a - 1, p = 0, e[0] = !0)
                            }
                            u._$wr(f), u._$AL(p)
                        }
                        return n
                    }, D.prototype._$zr = function(t, e, i) {
                        var a = 1 << i;
                        a + 1 > V._$Qb && console.log("err 23245\n");
                        for (var r = this._$Ob.length, o = 1, n = 1, s = 0, u = 0; u < a; ++u) t[u] = 0;
                        for (var h = 0; h < r; ++h) {
                            var l = this._$Ob[h];
                            if (0 == l._$SL()) {
                                if ((c = l._$Lr() * o) < 0 && ut._$3T) throw new Exception("err 23246");
                                for (u = 0; u < a; ++u) t[u] += c
                            } else {
                                var c = o * l._$Lr(),
                                    _ = o * (l._$Lr() + 1);
                                for (u = 0; u < a; ++u) t[u] += (u / n | 0) % 2 == 0 ? c : _;
                                e[s++] = l._$SL(), n *= 2
                            }
                            o *= l._$N2()
                        }
                        t[a] = 65535, e[s] = -1
                    }, D.prototype._$h2 = function(t, e, i) {
                        for (var a = new Float32Array(e), r = 0; r < e; ++r) a[r] = i[r];
                        var o = new M;
                        o._$yP(t), o._$t2(e, a), this._$Ob.push(o)
                    }, D.prototype._$J2 = function(t) {
                        for (var e = t, i = this._$Ob.length, a = 0; a < i; ++a) {
                            var r = this._$Ob[a],
                                o = r._$N2(),
                                n = e % r._$N2(),
                                s = r._$d2()[n];
                            console.log("%s[%d]=%7.2f / ", r.getParamID(), n, s), e /= o
                        }
                        console.log("\n")
                    }, D.prototype.getParamCount = function() {
                        return this._$Ob.length
                    }, D.prototype._$zs = function() {
                        return this._$Ob
                    }, I.prototype.identity = function() {
                        for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0
                    }, I.prototype.getArray = function() {
                        return this.m
                    }, I.prototype.getCopyMatrix = function() {
                        return new Float32Array(this.m)
                    }, I.prototype.setMatrix = function(t) {
                        if (null != t && 16 == t.length)
                            for (var e = 0; e < 16; e++) this.m[e] = t[e]
                    }, I.prototype.mult = function(t, e, i) {
                        return null == e ? null : (this == e ? this.mult_safe(this.m, t.m, e.m, i) : this.mult_fast(this.m, t.m, e.m, i), e)
                    }, I.prototype.mult_safe = function(t, e, i, a) {
                        if (t == i) {
                            var r = new Array(16);
                            this.mult_fast(t, e, r, a);
                            for (var o = 15; o >= 0; --o) i[o] = r[o]
                        } else this.mult_fast(t, e, i, a)
                    }, I.prototype.mult_fast = function(t, e, i, a) {
                        a ? (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2], i[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6], i[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10], i[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12], i[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6], i[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13], i[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6], i[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14], i[3] = i[7] = i[11] = 0, i[15] = 1) : (i[0] = t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], i[4] = t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], i[8] = t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], i[12] = t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], i[1] = t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], i[5] = t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], i[9] = t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], i[13] = t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], i[2] = t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], i[6] = t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], i[10] = t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], i[14] = t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], i[3] = t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], i[7] = t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], i[11] = t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], i[15] = t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15])
                    }, I.prototype.translate = function(t, e, i) {
                        this.m[12] = this.m[0] * t + this.m[4] * e + this.m[8] * i + this.m[12], this.m[13] = this.m[1] * t + this.m[5] * e + this.m[9] * i + this.m[13], this.m[14] = this.m[2] * t + this.m[6] * e + this.m[10] * i + this.m[14], this.m[15] = this.m[3] * t + this.m[7] * e + this.m[11] * i + this.m[15]
                    }, I.prototype.scale = function(t, e, i) {
                        this.m[0] *= t, this.m[4] *= e, this.m[8] *= i, this.m[1] *= t, this.m[5] *= e, this.m[9] *= i, this.m[2] *= t, this.m[6] *= e, this.m[10] *= i, this.m[3] *= t, this.m[7] *= e, this.m[11] *= i
                    }, I.prototype.rotateX = function(t) {
                        var e = xt.fcos(t),
                            i = xt._$9(t),
                            a = this.m[4];
                        this.m[4] = a * e + this.m[8] * i, this.m[8] = a * -i + this.m[8] * e, a = this.m[5], this.m[5] = a * e + this.m[9] * i, this.m[9] = a * -i + this.m[9] * e, a = this.m[6], this.m[6] = a * e + this.m[10] * i, this.m[10] = a * -i + this.m[10] * e, a = this.m[7], this.m[7] = a * e + this.m[11] * i, this.m[11] = a * -i + this.m[11] * e
                    }, I.prototype.rotateY = function(t) {
                        var e = xt.fcos(t),
                            i = xt._$9(t),
                            a = this.m[0];
                        this.m[0] = a * e + this.m[8] * -i, this.m[8] = a * i + this.m[8] * e, a = this.m[1], this.m[1] = a * e + this.m[9] * -i, this.m[9] = a * i + this.m[9] * e, a = m[2], this.m[2] = a * e + this.m[10] * -i, this.m[10] = a * i + this.m[10] * e, a = m[3], this.m[3] = a * e + this.m[11] * -i, this.m[11] = a * i + this.m[11] * e
                    }, I.prototype.rotateZ = function(t) {
                        var e = xt.fcos(t),
                            i = xt._$9(t),
                            a = this.m[0];
                        this.m[0] = a * e + this.m[4] * i, this.m[4] = a * -i + this.m[4] * e, a = this.m[1], this.m[1] = a * e + this.m[5] * i, this.m[5] = a * -i + this.m[5] * e, a = this.m[2], this.m[2] = a * e + this.m[6] * i, this.m[6] = a * -i + this.m[6] * e, a = this.m[3], this.m[3] = a * e + this.m[7] * i, this.m[7] = a * -i + this.m[7] * e
                    }, E.prototype = new at, E._$tP = new Object, E._$27 = function() {
                        E._$tP.clear()
                    }, E.getID = function(t) {
                        var e = E._$tP[t];
                        return null == e && (e = new E(t), E._$tP[t] = e), e
                    }, E.prototype._$3s = function() {
                        return new E
                    }, B._$kS = -1, B._$pS = 0, B._$hb = 1, B.STATE_IDENTITY = 0, B._$gb = 1, B._$fo = 2, B._$go = 4, B.prototype.transform = function(t, e, i) {
                        var a, r, o, n, s, u, h = 0,
                            l = 0;
                        switch (this._$hi) {
                            default:
                                return;
                            case B._$go | B._$fo | B._$gb:
                                for (a = this._$7, r = this._$H, o = this._$k, n = this._$f, s = this._$g, u = this._$w; --i >= 0;) {
                                    var c = t[h++],
                                        _ = t[h++];
                                    e[l++] = a * c + r * _ + o, e[l++] = n * c + s * _ + u
                                }
                                return;
                            case B._$go | B._$fo:
                                for (a = this._$7, r = this._$H, n = this._$f, s = this._$g; --i >= 0;) c = t[h++], _ = t[h++], e[l++] = a * c + r * _, e[l++] = n * c + s * _;
                                return;
                            case B._$go | B._$gb:
                                for (r = this._$H, o = this._$k, n = this._$f, u = this._$w; --i >= 0;) c = t[h++], e[l++] = r * t[h++] + o, e[l++] = n * c + u;
                                return;
                            case B._$go:
                                for (r = this._$H, n = this._$f; --i >= 0;) c = t[h++], e[l++] = r * t[h++], e[l++] = n * c;
                                return;
                            case B._$fo | B._$gb:
                                for (a = this._$7, o = this._$k, s = this._$g, u = this._$w; --i >= 0;) e[l++] = a * t[h++] + o, e[l++] = s * t[h++] + u;
                                return;
                            case B._$fo:
                                for (a = this._$7, s = this._$g; --i >= 0;) e[l++] = a * t[h++], e[l++] = s * t[h++];
                                return;
                            case B._$gb:
                                for (o = this._$k, u = this._$w; --i >= 0;) e[l++] = t[h++] + o, e[l++] = t[h++] + u;
                                return;
                            case B.STATE_IDENTITY:
                                return void(t == e && h == l || C._$jT(t, h, e, l, 2 * i))
                        }
                    }, B.prototype.update = function() {
                        0 == this._$H && 0 == this._$f ? 1 == this._$7 && 1 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = B.STATE_IDENTITY, this._$Z = B._$pS) : (this._$hi = B._$gb, this._$Z = B._$hb) : 0 == this._$k && 0 == this._$w ? (this._$hi = B._$fo, this._$Z = B._$kS) : (this._$hi = B._$fo | B._$gb, this._$Z = B._$kS) : 0 == this._$7 && 0 == this._$g ? 0 == this._$k && 0 == this._$w ? (this._$hi = B._$go, this._$Z = B._$kS) : (this._$hi = B._$go | B._$gb, this._$Z = B._$kS) : 0 == this._$k && 0 == this._$w ? (this._$hi = B._$go | B._$fo, this._$Z = B._$kS) : (this._$hi = B._$go | B._$fo | B._$gb, this._$Z = B._$kS)
                    }, B.prototype._$RT = function(t) {
                        this._$IT(t);
                        var e = t[0],
                            i = t[2],
                            a = t[1],
                            r = t[3],
                            o = Math.sqrt(e * e + a * a),
                            n = e * r - i * a;
                        0 == o ? ut._$so && console.log("affine._$RT() / rt==0") : (t[0] = o, t[1] = n / o, t[2] = (a * r + e * i) / n, t[3] = Math.atan2(a, e))
                    }, B.prototype._$ho = function(t, e, i, a) {
                        var r = new Float32Array(6),
                            o = new Float32Array(6);
                        t._$RT(r), e._$RT(o);
                        var n = new Float32Array(6);
                        n[0] = r[0] + (o[0] - r[0]) * i, n[1] = r[1] + (o[1] - r[1]) * i, n[2] = r[2] + (o[2] - r[2]) * i, n[3] = r[3] + (o[3] - r[3]) * i, n[4] = r[4] + (o[4] - r[4]) * i, n[5] = r[5] + (o[5] - r[5]) * i, a._$CT(n)
                    }, B.prototype._$CT = function(t) {
                        var e = Math.cos(t[3]),
                            i = Math.sin(t[3]);
                        this._$7 = t[0] * e, this._$f = t[0] * i, this._$H = t[1] * (t[2] * e - i), this._$g = t[1] * (t[2] * i + e), this._$k = t[4], this._$w = t[5], this.update()
                    }, B.prototype._$IT = function(t) {
                        t[0] = this._$7, t[1] = this._$f, t[2] = this._$H, t[3] = this._$g, t[4] = this._$k, t[5] = this._$w
                    }, F.prototype = new n, F._$cs = "VISIBLE:", F._$ar = "LAYOUT:", F._$Co = 0, F._$D2 = [], F._$1T = 1, F.loadMotion = function(t) {
                        var e = new F,
                            i = [0],
                            a = t.length;
                        e._$yT = 0;
                        for (var r = 0; r < a; ++r) {
                            var o = 255 & t[r];
                            if ("\n" != o && "\r" != o)
                                if ("#" != o)
                                    if ("$" != o) {
                                        if ("a" <= o && o <= "z" || "A" <= o && o <= "Z" || "_" == o) {
                                            for (h = r, l = -1; r < a && "\r" != (o = 255 & t[r]) && "\n" != o; ++r)
                                                if ("=" == o) {
                                                    l = r;
                                                    break
                                                } if (l >= 0) {
                                                var n = new R;
                                                T.startsWith(t, h, F._$cs) ? (n._$RP = R._$hs, n._$4P = new String(t, h, l - h)) : T.startsWith(t, h, F._$ar) ? (n._$4P = new String(t, h + 7, l - h - 7), T.startsWith(t, h + 7, "ANCHOR_X") ? n._$RP = R._$xs : T.startsWith(t, h + 7, "ANCHOR_Y") ? n._$RP = R._$us : T.startsWith(t, h + 7, "SCALE_X") ? n._$RP = R._$qs : T.startsWith(t, h + 7, "SCALE_Y") ? n._$RP = R._$Ys : T.startsWith(t, h + 7, "X") ? n._$RP = R._$ws : T.startsWith(t, h + 7, "Y") && (n._$RP = R._$Ns)) : (n._$RP = R._$Fr, n._$4P = new String(t, h, l - h)), e.motions.push(n);
                                                var s = 0;
                                                for (F._$D2.clear(), r = l + 1; r < a && "\r" != (o = 255 & t[r]) && "\n" != o; ++r)
                                                    if ("," != o && " " != o && "\t" != o && (_ = T._$LS(t, a, r, i), i[0] > 0)) {
                                                        F._$D2.push(_), s++;
                                                        var u = i[0];
                                                        if (u < r) {
                                                            console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                                            break
                                                        }
                                                        r = u
                                                    } n._$I0 = F._$D2._$BL(), s > e._$yT && (e._$yT = s)
                                            }
                                        }
                                    } else {
                                        for (var h = r, l = -1; r < a && "\r" != (o = 255 & t[r]) && "\n" != o; ++r)
                                            if ("=" == o) {
                                                l = r;
                                                break
                                            } var c = !1;
                                        if (l >= 0)
                                            for (l == h + 4 && "f" == t[h + 1] && "p" == t[h + 2] && "s" == t[h + 3] && (c = !0), r = l + 1; r < a && "\r" != (o = 255 & t[r]) && "\n" != o; ++r)
                                                if ("," != o && " " != o && "\t" != o) {
                                                    var _ = T._$LS(t, a, r, i);
                                                    i[0] > 0 && c && 5 < _ && _ < 121 && (e._$D0 = _), r = i[0]
                                                } for (; r < a && "\n" != t[r] && "\r" != t[r]; ++r);
                                    }
                            else
                                for (; r < a && "\n" != t[r] && "\r" != t[r]; ++r);
                        }
                        return e._$AS = 1e3 * e._$yT / e._$D0 | 0, e
                    }, F.prototype.getDurationMSec = function() {
                        return this._$AS
                    }, F.prototype.dump = function() {
                        for (var t = 0; t < this.motions.length; t++) {
                            var e = this.motions[t];
                            console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
                            for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
                            console.log("\n")
                        }
                    }, F.prototype.updateParamExe = function(t, e, i, a) {
                        for (var r = (e - a._$z2) * this._$D0 / 1e3, o = 0 | r, n = r - o, s = 0; s < this.motions.length; s++) {
                            var u = this.motions[s],
                                h = u._$I0.length,
                                l = u._$4P;
                            if (u._$RP == R._$hs) {
                                var c = u._$I0[o >= h ? h - 1 : o];
                                t.setParamFloat(l, c)
                            } else if (R._$ws <= u._$RP && u._$RP <= R._$Ys);
                            else {
                                var _ = t.getParamFloat(l),
                                    f = u._$I0[o >= h ? h - 1 : o],
                                    p = _ + (f + (u._$I0[o + 1 >= h ? h - 1 : o + 1] - f) * n - _) * i;
                                t.setParamFloat(l, p)
                            }
                        }
                        o >= this._$yT && (this._$E ? (a._$z2 = e, this.loopFadeIn && (a._$bs = e)) : a._$9L = !0)
                    }, F.prototype._$r0 = function() {
                        return this._$E
                    }, F.prototype._$aL = function(t) {
                        this._$E = t
                    }, F.prototype.isLoopFadeIn = function() {
                        return this.loopFadeIn
                    }, F.prototype.setLoopFadeIn = function(t) {
                        this.loopFadeIn = t
                    }, k.prototype.clear = function() {
                        this.size = 0
                    }, k.prototype.add = function(t) {
                        if (this._$P.length <= this.size) {
                            var e = new Float32Array(2 * this.size);
                            C._$jT(this._$P, 0, e, 0, this.size), this._$P = e
                        }
                        this._$P[this.size++] = t
                    }, k.prototype._$BL = function() {
                        var t = new Float32Array(this.size);
                        return C._$jT(this._$P, 0, t, 0, this.size), t
                    }, R._$Fr = 0, R._$hs = 1, R._$ws = 100, R._$Ns = 101, R._$xs = 102, R._$us = 103, R._$qs = 104, R._$Ys = 105, V._$Ms = 1, V._$Qs = 2, V._$i2 = 0, V._$No = 2, V._$do = V._$Ms, V._$Ls = !0, V._$1r = 5, V._$Qb = 65, V._$J = 1e-4, V._$FT = .001, V._$Ss = 3, O._$o7 = 6, O._$S7 = 7, O._$s7 = 8, O._$77 = 9, O.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, O.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11, O._$T7 = O.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, O._$Is = -2004318072, O._$h0 = 0, O._$4L = 23, O._$7P = 33, O._$uT = function(t) {
                        console.log("_$bo :: _$6 _$mo _$E0 : %d\n", t)
                    }, O._$9o = function(t) {
                        if (t < 40) return O._$uT(t), null;
                        if (t < 50) return O._$uT(t), null;
                        if (t < 60) return O._$uT(t), null;
                        if (t < 100) switch (t) {
                            case 65:
                                return new K;
                            case 66:
                                return new D;
                            case 67:
                                return new M;
                            case 68:
                                return new z;
                            case 69:
                                return new v;
                            case 70:
                                return new ct;
                            default:
                                return O._$uT(t), null
                        } else if (t < 150) switch (t) {
                            case 131:
                                return new nt;
                            case 133:
                                return new et;
                            case 136:
                                return new _;
                            case 137:
                                return new rt;
                            case 142:
                                return new W
                        }
                        return O._$uT(t), null
                    }, N._$HP = 0, N._$_0 = !0, N._$V2 = -1, N._$W0 = -1, N._$jr = !1, N._$ZS = !0, N._$tr = -1e6, N._$lr = 1e6, N._$is = 32, N._$e = !1, N.prototype.getDrawDataIndex = function(t) {
                        for (var e = this._$aS.length - 1; e >= 0; --e)
                            if (null != this._$aS[e] && this._$aS[e].getDrawDataID() == t) return e;
                        return -1
                    }, N.prototype.getDrawData = function(t) {
                        if (t instanceof E) {
                            if (null == this._$Bo) {
                                this._$Bo = new Object;
                                for (var e = this._$aS.length, i = 0; i < e; i++) {
                                    var a = this._$aS[i],
                                        r = a.getDrawDataID();
                                    null != r && (this._$Bo[r] = a)
                                }
                            }
                            return this._$Bo[id]
                        }
                        return t < this._$aS.length ? this._$aS[t] : null
                    }, N.prototype.release = function() {
                        this._$3S.clear(), this._$aS.clear(), this._$F2.clear(), null != this._$Bo && this._$Bo.clear(), this._$db.clear(), this._$8b.clear(), this._$Hr.clear()
                    }, N.prototype.init = function() {
                        this._$co++, this._$F2.length > 0 && this.release();
                        for (var t = this._$Ri.getModelImpl(), e = t._$Xr(), a = e.length, r = new Array, o = new Array, n = 0; n < a; ++n) {
                            var s = e[n];
                            this._$F2.push(s), this._$Hr.push(s.init(this));
                            for (var u = s.getBaseData(), h = u.length, l = 0; l < h; ++l) r.push(u[l]);
                            for (l = 0; l < h; ++l) {
                                var c = u[l].init(this);
                                c._$l2(n), o.push(c)
                            }
                            var _ = s.getDrawData(),
                                f = _.length;
                            for (l = 0; l < f; ++l) {
                                var p = _[l],
                                    g = p.init(this);
                                g._$IP = n, this._$aS.push(p), this._$8b.push(g)
                            }
                        }
                        for (var d = r.length, m = bt._$2o();;) {
                            var b = !1;
                            for (n = 0; n < d; ++n) {
                                var y = r[n];
                                if (null != y) {
                                    var v = y.getTargetBaseDataID();
                                    (null == v || v == m || this.getBaseDataIndex(v) >= 0) && (this._$3S.push(y), this._$db.push(o[n]), r[n] = null, b = !0)
                                }
                            }
                            if (!b) break
                        }
                        var q = t._$E2();
                        if (null != q) {
                            var $ = q._$1s();
                            if (null != $) {
                                var A = $.length;
                                for (n = 0; n < A; ++n) {
                                    var x = $[n];
                                    null != x && this._$02(x.getParamID(), x.getDefaultValue(), x.getMinValue(), x.getMaxValue())
                                }
                            }
                        }
                        this.clipManager = new i(this.dp_webgl), this.clipManager.init(this, this._$aS, this._$8b), this._$QT = !0
                    }, N.prototype.update = function() {
                        N._$e && s.start("_$zL");
                        for (var t = this._$_2.length, e = 0; e < t; e++) this._$_2[e] != this._$vr[e] && (this._$Js[e] = N._$ZS, this._$vr[e] = this._$_2[e]);
                        var i = this._$3S.length,
                            a = this._$aS.length,
                            r = H._$or(),
                            o = H._$Pr() - r + 1;
                        for ((null == this._$Ws || this._$Ws.length < o) && (this._$Ws = new Int16Array(o), this._$Vs = new Int16Array(o)), e = 0; e < o; e++) this._$Ws[e] = N._$V2, this._$Vs[e] = N._$V2;
                        for ((null == this._$Er || this._$Er.length < a) && (this._$Er = new Int16Array(a)), e = 0; e < a; e++) this._$Er[e] = N._$W0;
                        N._$e && s.dump("_$zL"), N._$e && s.start("_$UL");
                        for (var n = null, u = 0; u < i; ++u) {
                            var h = this._$3S[u],
                                l = this._$db[u];
                            try {
                                h._$Nr(this, l), h._$2b(this, l)
                            } catch (t) {
                                null == n && (n = t)
                            }
                        }
                        null != n && N._$_0 && s._$Rb(n), N._$e && s.dump("_$UL"), N._$e && s.start("_$DL");
                        for (var c = null, _ = 0; _ < a; ++_) {
                            var f = this._$aS[_],
                                p = this._$8b[_];
                            try {
                                if (f._$Nr(this, p), p._$u2()) continue;
                                f._$2b(this, p);
                                var g, d = Math.floor(f._$zS(this, p) - r);
                                try {
                                    g = this._$Vs[d]
                                } catch (t) {
                                    console.log("_$li :: %s / %s \t\t\t\t@@_$fS\n", t.toString(), f.getDrawDataID().toString()), d = Math.floor(f._$zS(this, p) - r);
                                    continue
                                }
                                g == N._$V2 ? this._$Ws[d] = _ : this._$Er[g] = _, this._$Vs[d] = _
                            } catch (t) {
                                null == c && (c = t, ut._$sT(ut._$H7))
                            }
                        }
                        for (null != c && N._$_0 && s._$Rb(c), N._$e && s.dump("_$DL"), N._$e && s.start("_$eL"), e = this._$Js.length - 1; e >= 0; e--) this._$Js[e] = N._$jr;
                        return this._$QT = !1, N._$e && s.dump("_$eL"), !1
                    }, N.prototype.preDraw = function(t) {
                        null != this.clipManager && (t._$ZT(), this.clipManager.setupClip(this, t))
                    }, N.prototype.draw = function(t) {
                        if (null != this._$Ws) {
                            var e = this._$Ws.length;
                            t._$ZT();
                            for (var i = 0; i < e; ++i) {
                                var a = this._$Ws[i];
                                if (a != N._$V2)
                                    for (;;) {
                                        var r = this._$aS[a],
                                            o = this._$8b[a];
                                        if (o._$yo()) {
                                            var n = o._$IP,
                                                u = this._$Hr[n];
                                            o._$VS = u.getPartsOpacity(), r.draw(t, this, o)
                                        }
                                        var h = this._$Er[a];
                                        if (h <= a || h == N._$W0) break;
                                        a = h
                                    }
                            }
                        } else s._$li("call _$Ri.update() before _$Ri.draw() ")
                    }, N.prototype.getParamIndex = function(t) {
                        for (var e = this._$pb.length - 1; e >= 0; --e)
                            if (this._$pb[e] == t) return e;
                        return this._$02(t, 0, N._$tr, N._$lr)
                    }, N.prototype._$BS = function(t) {
                        return this.getBaseDataIndex(t)
                    }, N.prototype.getBaseDataIndex = function(t) {
                        for (var e = this._$3S.length - 1; e >= 0; --e)
                            if (null != this._$3S[e] && this._$3S[e].getBaseDataID() == t) return e;
                        return -1
                    }, N.prototype._$UT = function(t, e) {
                        var i = new Float32Array(e);
                        return C._$jT(t, 0, i, 0, t.length), i
                    }, N.prototype._$02 = function(t, e, i, a) {
                        if (this._$qo >= this._$pb.length) {
                            var r = this._$pb.length,
                                o = new Array(2 * r);
                            C._$jT(this._$pb, 0, o, 0, r), this._$pb = o, this._$_2 = this._$UT(this._$_2, 2 * r), this._$vr = this._$UT(this._$vr, 2 * r), this._$Rr = this._$UT(this._$Rr, 2 * r), this._$Or = this._$UT(this._$Or, 2 * r);
                            var n = new Array;
                            C._$jT(this._$Js, 0, n, 0, r), this._$Js = n
                        }
                        return this._$pb[this._$qo] = t, this._$_2[this._$qo] = e, this._$vr[this._$qo] = e, this._$Rr[this._$qo] = i, this._$Or[this._$qo] = a, this._$Js[this._$qo] = N._$ZS, this._$qo++
                    }, N.prototype._$Zo = function(t, e) {
                        this._$3S[t] = e
                    }, N.prototype.setParamFloat = function(t, e) {
                        e < this._$Rr[t] && (e = this._$Rr[t]), e > this._$Or[t] && (e = this._$Or[t]), this._$_2[t] = e
                    }, N.prototype.loadParam = function() {
                        var t = this._$_2.length;
                        t > this._$fs.length && (t = this._$fs.length), C._$jT(this._$fs, 0, this._$_2, 0, t)
                    }, N.prototype.saveParam = function() {
                        var t = this._$_2.length;
                        t > this._$fs.length && (this._$fs = new Float32Array(t)), C._$jT(this._$_2, 0, this._$fs, 0, t)
                    }, N.prototype._$v2 = function() {
                        return this._$co
                    }, N.prototype._$WS = function() {
                        return this._$QT
                    }, N.prototype._$Xb = function(t) {
                        return this._$Js[t] == N._$ZS
                    }, N.prototype._$vs = function() {
                        return this._$Es
                    }, N.prototype._$Tr = function() {
                        return this._$ZP
                    }, N.prototype.getBaseData = function(t) {
                        return this._$3S[t]
                    }, N.prototype.getParamFloat = function(t) {
                        return this._$_2[t]
                    }, N.prototype.getParamMax = function(t) {
                        return this._$Or[t]
                    }, N.prototype.getParamMin = function(t) {
                        return this._$Rr[t]
                    }, N.prototype.setPartsOpacity = function(t, e) {
                        this._$Hr[t].setPartsOpacity(e)
                    }, N.prototype.getPartsOpacity = function(t) {
                        return this._$Hr[t].getPartsOpacity()
                    }, N.prototype.getPartsDataIndex = function(t) {
                        for (var e = this._$F2.length - 1; e >= 0; --e)
                            if (null != this._$F2[e] && this._$F2[e]._$p2() == t) return e;
                        return -1
                    }, N.prototype._$q2 = function(t) {
                        return this._$db[t]
                    }, N.prototype._$C2 = function(t) {
                        return this._$8b[t]
                    }, N.prototype._$Bb = function(t) {
                        return this._$Hr[t]
                    }, N.prototype._$5s = function(t, e) {
                        for (var i = this._$Ws.length, a = t, r = 0; r < i; ++r) {
                            var o = this._$Ws[r];
                            if (o != N._$V2)
                                for (;;) {
                                    var n = this._$8b[o];
                                    n._$yo() && (n._$GT()._$B2(this, n, a), a += e);
                                    var s = this._$Er[o];
                                    if (s <= o || s == N._$W0) break;
                                    o = s
                                }
                        }
                    }, N.prototype.setDrawParam = function(t) {
                        this.dp_webgl = t
                    }, N.prototype.getDrawParam = function() {
                        return this.dp_webgl
                    }, U._$0T = function(t) {
                        return U._$0T(new _$5(t))
                    }, U._$0T = function(t) {
                        if (!t.exists()) throw new _$ls(t._$3b());
                        for (var e, i = t.length(), a = new Int8Array(i), r = new _$Xs(new _$kb(t), 8192), o = 0;
                            (e = r.read(a, o, i - o)) > 0;) o += e;
                        return a
                    }, U._$C = function(t) {
                        var e = null,
                            i = null;
                        try {
                            e = t instanceof Array ? t : new _$Xs(t, 8192), i = new _$js;
                            for (var a, r = new Int8Array(1e3);
                                (a = e.read(r)) > 0;) i.write(r, 0, a);
                            return i._$TS()
                        } finally {
                            null != t && t.close(), null != i && (i.flush(), i.close())
                        }
                    }, G.prototype._$T2 = function() {
                        return C.getUserTimeMSec() + Math._$10() * (2 * this._$Br - 1)
                    }, G.prototype._$uo = function(t) {
                        this._$Br = t
                    }, G.prototype._$QS = function(t, e, i) {
                        this._$Dr = t, this._$Cb = e, this._$mr = i
                    }, G.prototype._$7T = function(t) {
                        var e, i = C.getUserTimeMSec(),
                            a = 0;
                        switch (this._$_L) {
                            case STATE_CLOSING:
                                (a = (i - this._$bb) / this._$Dr) >= 1 && (a = 1, this._$_L = Y.STATE_CLOSED, this._$bb = i), e = 1 - a;
                                break;
                            case STATE_CLOSED:
                                (a = (i - this._$bb) / this._$Cb) >= 1 && (this._$_L = Y.STATE_OPENING, this._$bb = i), e = 0;
                                break;
                            case STATE_OPENING:
                                (a = (i - this._$bb) / this._$mr) >= 1 && (a = 1, this._$_L = Y.STATE_INTERVAL, this._$12 = this._$T2()), e = a;
                                break;
                            case STATE_INTERVAL:
                                this._$12 < i && (this._$_L = Y.STATE_CLOSING, this._$bb = i), e = 1;
                                break;
                            case STATE_FIRST:
                            default:
                                this._$_L = Y.STATE_INTERVAL, this._$12 = this._$T2(), e = 1
                        }
                        this._$jo || (e = -e), t.setParamFloat(this._$iL, e), t.setParamFloat(this._$0L, e)
                    };
                    var Y = function() {};

                    function j() {
                        t || (S.prototype.constructor.call(this), this._$sb = new Int32Array(j._$As), this._$U2 = new Array, this.transform = null, this.gl = null, null == j._$NT && (j._$NT = j._$9r(256), j._$vS = j._$9r(256), j._$no = j._$vb(256)))
                    }

                    function z() {
                        t || (P.prototype.constructor.call(this), this._$GS = null, this._$Y0 = null)
                    }

                    function X(t) {
                        st.prototype.constructor.call(this, t), this._$8r = P._$ur, this._$Yr = null, this._$Wr = null
                    }

                    function H() {
                        t || (w.prototype.constructor.call(this), this._$gP = null, this._$dr = null, this._$GS = null, this._$qb = null, this._$Lb = null, this._$mS = null)
                    }

                    function W() {
                        t || (this._$NL = null, this._$3S = null, this._$aS = null, W._$42++)
                    }

                    function J() {
                        t || (e.prototype.constructor.call(this), this._$zo = new j)
                    }

                    function Q() {
                        t || (n.prototype.constructor.call(this), this.motions = new Array, this._$o2 = null, this._$7r = Q._$Co++, this._$D0 = 30, this._$yT = 0, this._$E = !1, this.loopFadeIn = !0, this._$rr = -1, this._$eP = 0)
                    }

                    function Z(t, e) {
                        return String.fromCharCode(t.getUint8(e))
                    }

                    function k() {
                        this._$P = new Float32Array(100), this.size = 0
                    }

                    function R() {
                        this._$4P = null, this._$I0 = null, this._$RP = null
                    }

                    function K() {
                        t || (P.prototype.constructor.call(this), this._$o = 0, this._$A = 0, this._$GS = null, this._$Eo = null)
                    }

                    function tt(t) {
                        st.prototype.constructor.call(this, t), this._$8r = P._$ur, this._$Cr = null, this._$hr = null
                    }

                    function et() {
                        t || (this.visible = !0, this._$g0 = !1, this._$NL = null, this._$3S = null, this._$aS = null, et._$42++)
                    }

                    function it(t) {
                        this._$VS = null, this._$e0 = null, this._$e0 = t
                    }

                    function at(e) {
                        t || (this.id = e)
                    }

                    function rt() {
                        t || (this._$4S = null)
                    }

                    function ot(t, e) {
                        this.canvas = t, this.context = e, this.viewport = new Array(0, 0, t.width, t.height), this._$6r = 1, this._$xP = 0, this._$3r = 1, this._$uP = 0, this._$Qo = -1, this.cacheImages = {}
                    }

                    function nt() {
                        t || (this._$TT = null, this._$LT = null, this._$FS = null, this._$wL = null)
                    }

                    function st(e) {
                        t || (this._$e0 = null, this._$IP = null, this._$JS = !1, this._$AT = !0, this._$e0 = e, this.totalScale = 1, this._$7s = 1, this.totalOpacity = 1)
                    }

                    function ut() {}

                    function ht() {}

                    function lt(e) {
                        t || (this._$ib = e)
                    }

                    function ct() {
                        t || (H.prototype.constructor.call(this), this._$LP = -1, this._$d0 = 0, this._$Yo = 0, this._$JP = null, this._$5P = null, this._$BP = null, this._$Eo = null, this._$Qi = null, this._$6s = ct._$ms, this.culling = !0, this.gl_cacheImage = null, this.instanceNo = ct._$42++)
                    }

                    function _t(t) {
                        wt.prototype.constructor.call(this, t), this._$8r = H._$ur, this._$Cr = null, this._$hr = null
                    }

                    function ft() {
                        t || (this.x = null, this.y = null)
                    }

                    function pt(i) {
                        t || (e.prototype.constructor.call(this), this.drawParamWebGL = new yt(i), this.drawParamWebGL.setGL(ut.getGL(i)))
                    }

                    function gt() {
                        t || (this.motions = null, this._$eb = !1, this.motions = new Array)
                    }

                    function dt() {
                        this._$w0 = null, this._$AT = !0, this._$9L = !1, this._$z2 = -1, this._$bs = -1, this._$Do = -1, this._$sr = null, this._$sr = dt._$Gs++
                    }

                    function mt() {
                        this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1)
                    }

                    function bt(e) {
                        t || at.prototype.constructor.call(this, e)
                    }

                    function yt(e) {
                        t || (S.prototype.constructor.call(this), this.textures = new Array, this.transform = null, this.gl = null, this.glno = e, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._$As = 32, this._$Gr = !1, this._$NT = null, this._$vS = null, this._$no = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null)
                    }

                    function vt(t, e, i) {
                        return null == e && (e = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, e), t.bufferData(t.ARRAY_BUFFER, i, t.DYNAMIC_DRAW), e
                    }

                    function qt(t, e, i) {
                        return null == e && (e = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e), t.bufferData(t.ELEMENT_ARRAY_BUFFER, i, t.DYNAMIC_DRAW), e
                    }

                    function $t(e) {
                        t || (this._$P = new Int8Array(8), this._$R0 = new DataView(this._$P.buffer), this._$3i = new Int8Array(1e3), this._$hL = 0, this._$v0 = 0, this._$S2 = 0, this._$Ko = new Array, this._$T = e, this._$F = 0)
                    }
                    Y.STATE_FIRST = "STATE_FIRST", Y.STATE_INTERVAL = "STATE_INTERVAL", Y.STATE_CLOSING = "STATE_CLOSING", Y.STATE_CLOSED = "STATE_CLOSED", Y.STATE_OPENING = "STATE_OPENING", j.prototype = new S, j._$As = 32, j._$Gr = !1, j._$NT = null, j._$vS = null, j._$no = null, j._$9r = function(t) {
                        return new Float32Array(t)
                    }, j._$vb = function(t) {
                        return new Int16Array(t)
                    }, j._$cr = function(t, e) {
                        return null == t || t._$yL() < e.length ? ((t = j._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
                    }, j._$mb = function(t, e) {
                        return null == t || t._$yL() < e.length ? ((t = j._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
                    }, j._$Hs = function() {
                        return j._$Gr
                    }, j._$as = function(t) {
                        j._$Gr = t
                    }, j.prototype.setGL = function(t) {
                        this.gl = t
                    }, j.prototype.setTransform = function(t) {
                        this.transform = t
                    }, j.prototype._$ZT = function() {}, j.prototype._$Uo = function(t, e, i, a, r, o, n, s) {
                        if (!(o < .01)) {
                            var u = this._$U2[t],
                                h = o > .9 ? ut.EXPAND_W : 0;
                            this.gl.drawElements(u, i, a, r, o, h, this.transform, s)
                        }
                    }, j.prototype._$Rs = function() {
                        throw new Error("_$Rs")
                    }, j.prototype._$Ds = function(t) {
                        throw new Error("_$Ds")
                    }, j.prototype._$K2 = function() {
                        for (var t = 0; t < this._$sb.length; t++) 0 != this._$sb[t] && (this.gl._$Sr(1, this._$sb, t), this._$sb[t] = 0)
                    }, j.prototype.setTexture = function(t, e) {
                        this._$sb.length < t + 1 && this._$nS(t), this._$sb[t] = e
                    }, j.prototype.setTexture = function(t, e) {
                        this._$sb.length < t + 1 && this._$nS(t), this._$U2[t] = e
                    }, j.prototype._$nS = function(t) {
                        var e = Math.max(2 * this._$sb.length, t + 1 + 10),
                            i = new Int32Array(e);
                        C._$jT(this._$sb, 0, i, 0, this._$sb.length), this._$sb = i;
                        var a = new Array;
                        C._$jT(this._$U2, 0, a, 0, this._$U2.length), this._$U2 = a
                    }, z.prototype = new P, z._$Xo = new Float32Array(2), z._$io = new Float32Array(2), z._$0o = new Float32Array(2), z._$Lo = new Float32Array(2), z._$To = new Float32Array(2), z._$Po = new Float32Array(2), z._$gT = new Array, z.prototype._$zP = function() {
                        this._$GS = new D, this._$GS._$zP(), this._$Y0 = new Array
                    }, z.prototype.getType = function() {
                        return P._$c2
                    }, z.prototype._$F0 = function(t) {
                        P.prototype._$F0.call(this, t), this._$GS = t._$nP(), this._$Y0 = t._$nP(), P.prototype.readV2_opacity.call(this, t)
                    }, z.prototype.init = function(t) {
                        var e = new X(this);
                        return e._$Yr = new v, this._$32() && (e._$Wr = new v), e
                    }, z.prototype._$Nr = function(t, e) {
                        this != e._$GT() && console.log("### assert!! ### ");
                        var i = e;
                        if (this._$GS._$Ur(t)) {
                            var a = z._$gT;
                            a[0] = !1;
                            var r = this._$GS._$Q2(t, a);
                            e._$Ib(a[0]), this.interpolateOpacity(t, this._$GS, e, a);
                            var o = t._$vs(),
                                n = t._$Tr();
                            if (this._$GS._$zr(o, n, r), r <= 0) {
                                var s = this._$Y0[o[0]];
                                i._$Yr.init(s)
                            } else if (1 == r) {
                                s = this._$Y0[o[0]];
                                var u = this._$Y0[o[1]],
                                    h = n[0];
                                i._$Yr._$fL = s._$fL + (u._$fL - s._$fL) * h, i._$Yr._$gL = s._$gL + (u._$gL - s._$gL) * h, i._$Yr._$B0 = s._$B0 + (u._$B0 - s._$B0) * h, i._$Yr._$z0 = s._$z0 + (u._$z0 - s._$z0) * h, i._$Yr._$qT = s._$qT + (u._$qT - s._$qT) * h
                            } else if (2 == r) {
                                s = this._$Y0[o[0]], u = this._$Y0[o[1]];
                                var l = this._$Y0[o[2]],
                                    c = this._$Y0[o[3]],
                                    _ = (h = n[0], n[1]),
                                    f = s._$fL + (u._$fL - s._$fL) * h,
                                    p = l._$fL + (c._$fL - l._$fL) * h;
                                i._$Yr._$fL = f + (p - f) * _, f = s._$gL + (u._$gL - s._$gL) * h, p = l._$gL + (c._$gL - l._$gL) * h, i._$Yr._$gL = f + (p - f) * _, f = s._$B0 + (u._$B0 - s._$B0) * h, p = l._$B0 + (c._$B0 - l._$B0) * h, i._$Yr._$B0 = f + (p - f) * _, f = s._$z0 + (u._$z0 - s._$z0) * h, p = l._$z0 + (c._$z0 - l._$z0) * h, i._$Yr._$z0 = f + (p - f) * _, f = s._$qT + (u._$qT - s._$qT) * h, p = l._$qT + (c._$qT - l._$qT) * h, i._$Yr._$qT = f + (p - f) * _
                            } else if (3 == r) {
                                var g = this._$Y0[o[0]],
                                    d = this._$Y0[o[1]],
                                    m = this._$Y0[o[2]],
                                    b = this._$Y0[o[3]],
                                    y = this._$Y0[o[4]],
                                    v = this._$Y0[o[5]],
                                    q = this._$Y0[o[6]],
                                    $ = this._$Y0[o[7]],
                                    A = (h = n[0], _ = n[1], n[2]),
                                    x = (f = g._$fL + (d._$fL - g._$fL) * h, p = m._$fL + (b._$fL - m._$fL) * h, y._$fL + (v._$fL - y._$fL) * h),
                                    w = q._$fL + ($._$fL - q._$fL) * h;
                                i._$Yr._$fL = (1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _), f = g._$gL + (d._$gL - g._$gL) * h, p = m._$gL + (b._$gL - m._$gL) * h, x = y._$gL + (v._$gL - y._$gL) * h, w = q._$gL + ($._$gL - q._$gL) * h, i._$Yr._$gL = (1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _), f = g._$B0 + (d._$B0 - g._$B0) * h, p = m._$B0 + (b._$B0 - m._$B0) * h, x = y._$B0 + (v._$B0 - y._$B0) * h, w = q._$B0 + ($._$B0 - q._$B0) * h, i._$Yr._$B0 = (1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _), f = g._$z0 + (d._$z0 - g._$z0) * h, p = m._$z0 + (b._$z0 - m._$z0) * h, x = y._$z0 + (v._$z0 - y._$z0) * h, w = q._$z0 + ($._$z0 - q._$z0) * h, i._$Yr._$z0 = (1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _), f = g._$qT + (d._$qT - g._$qT) * h, p = m._$qT + (b._$qT - m._$qT) * h, x = y._$qT + (v._$qT - y._$qT) * h, w = q._$qT + ($._$qT - q._$qT) * h, i._$Yr._$qT = (1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)
                            } else if (4 == r) {
                                var S = this._$Y0[o[0]],
                                    L = this._$Y0[o[1]],
                                    P = this._$Y0[o[2]],
                                    C = this._$Y0[o[3]],
                                    M = this._$Y0[o[4]],
                                    T = this._$Y0[o[5]],
                                    D = this._$Y0[o[6]],
                                    I = this._$Y0[o[7]],
                                    E = this._$Y0[o[8]],
                                    B = this._$Y0[o[9]],
                                    F = this._$Y0[o[10]],
                                    k = this._$Y0[o[11]],
                                    R = this._$Y0[o[12]],
                                    V = this._$Y0[o[13]],
                                    O = this._$Y0[o[14]],
                                    N = this._$Y0[o[15]],
                                    U = (h = n[0], _ = n[1], A = n[2], n[3]),
                                    G = (f = S._$fL + (L._$fL - S._$fL) * h, p = P._$fL + (C._$fL - P._$fL) * h, x = M._$fL + (T._$fL - M._$fL) * h, w = D._$fL + (I._$fL - D._$fL) * h, E._$fL + (B._$fL - E._$fL) * h),
                                    Y = F._$fL + (k._$fL - F._$fL) * h,
                                    j = R._$fL + (V._$fL - R._$fL) * h,
                                    X = O._$fL + (N._$fL - O._$fL) * h;
                                i._$Yr._$fL = (1 - U) * ((1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)) + U * ((1 - A) * (G + (Y - G) * _) + A * (j + (X - j) * _)), f = S._$gL + (L._$gL - S._$gL) * h, p = P._$gL + (C._$gL - P._$gL) * h, x = M._$gL + (T._$gL - M._$gL) * h, w = D._$gL + (I._$gL - D._$gL) * h, G = E._$gL + (B._$gL - E._$gL) * h, Y = F._$gL + (k._$gL - F._$gL) * h, j = R._$gL + (V._$gL - R._$gL) * h, X = O._$gL + (N._$gL - O._$gL) * h, i._$Yr._$gL = (1 - U) * ((1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)) + U * ((1 - A) * (G + (Y - G) * _) + A * (j + (X - j) * _)), f = S._$B0 + (L._$B0 - S._$B0) * h, p = P._$B0 + (C._$B0 - P._$B0) * h, x = M._$B0 + (T._$B0 - M._$B0) * h, w = D._$B0 + (I._$B0 - D._$B0) * h, G = E._$B0 + (B._$B0 - E._$B0) * h, Y = F._$B0 + (k._$B0 - F._$B0) * h, j = R._$B0 + (V._$B0 - R._$B0) * h, X = O._$B0 + (N._$B0 - O._$B0) * h, i._$Yr._$B0 = (1 - U) * ((1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)) + U * ((1 - A) * (G + (Y - G) * _) + A * (j + (X - j) * _)), f = S._$z0 + (L._$z0 - S._$z0) * h, p = P._$z0 + (C._$z0 - P._$z0) * h, x = M._$z0 + (T._$z0 - M._$z0) * h, w = D._$z0 + (I._$z0 - D._$z0) * h, G = E._$z0 + (B._$z0 - E._$z0) * h, Y = F._$z0 + (k._$z0 - F._$z0) * h, j = R._$z0 + (V._$z0 - R._$z0) * h, X = O._$z0 + (N._$z0 - O._$z0) * h, i._$Yr._$z0 = (1 - U) * ((1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)) + U * ((1 - A) * (G + (Y - G) * _) + A * (j + (X - j) * _)), f = S._$qT + (L._$qT - S._$qT) * h, p = P._$qT + (C._$qT - P._$qT) * h, x = M._$qT + (T._$qT - M._$qT) * h, w = D._$qT + (I._$qT - D._$qT) * h, G = E._$qT + (B._$qT - E._$qT) * h, Y = F._$qT + (k._$qT - F._$qT) * h, j = R._$qT + (V._$qT - R._$qT) * h, X = O._$qT + (N._$qT - O._$qT) * h, i._$Yr._$qT = (1 - U) * ((1 - A) * (f + (p - f) * _) + A * (x + (w - x) * _)) + U * ((1 - A) * (G + (Y - G) * _) + A * (j + (X - j) * _))
                            } else {
                                for (var H = 0 | Math.pow(2, r), W = new Float32Array(H), J = 0; J < H; J++) {
                                    for (var Q = J, Z = 1, K = 0; K < r; K++) Z *= Q % 2 == 0 ? 1 - n[K] : n[K], Q /= 2;
                                    W[J] = Z
                                }
                                for (var tt = new Array, et = 0; et < H; et++) tt[et] = this._$Y0[o[et]];
                                var it = 0,
                                    at = 0,
                                    rt = 0,
                                    ot = 0,
                                    nt = 0;
                                for (et = 0; et < H; et++) it += W[et] * tt[et]._$fL, at += W[et] * tt[et]._$gL, rt += W[et] * tt[et]._$B0, ot += W[et] * tt[et]._$z0, nt += W[et] * tt[et]._$qT;
                                i._$Yr._$fL = it, i._$Yr._$gL = at, i._$Yr._$B0 = rt, i._$Yr._$z0 = ot, i._$Yr._$qT = nt
                            }
                            s = this._$Y0[o[0]], i._$Yr.reflectX = s.reflectX, i._$Yr.reflectY = s.reflectY
                        }
                    }, z.prototype._$2b = function(t, e) {
                        this != e._$GT() && console.log("### assert!! ### ");
                        var i = e;
                        if (i._$hS(!0), this._$32()) {
                            var a = this.getTargetBaseDataID();
                            if (i._$8r == P._$ur && (i._$8r = t.getBaseDataIndex(a)), i._$8r < 0) ut._$so && s._$li("_$L _$0P _$G :: %s", a), i._$hS(!1);
                            else {
                                var r = t.getBaseData(i._$8r);
                                if (null != r) {
                                    var o = t._$q2(i._$8r),
                                        n = z._$Xo;
                                    n[0] = i._$Yr._$fL, n[1] = i._$Yr._$gL;
                                    var u = z._$io;
                                    u[0] = 0, u[1] = -.1, o._$GT().getType() == P._$c2 ? u[1] = -10 : u[1] = -.1;
                                    var h = z._$0o;
                                    this._$Jr(t, r, o, n, u, h);
                                    var l = xt._$92(u, h);
                                    r._$nb(t, o, n, n, 1, 0, 2), i._$Wr._$fL = n[0], i._$Wr._$gL = n[1], i._$Wr._$B0 = i._$Yr._$B0, i._$Wr._$z0 = i._$Yr._$z0, i._$Wr._$qT = i._$Yr._$qT - l * xt._$NS;
                                    var c = o.getTotalScale();
                                    i.setTotalScale_notForClient(c * i._$Wr._$B0);
                                    var _ = o.getTotalOpacity();
                                    i.setTotalOpacity(_ * i.getInterpolatedOpacity()), i._$Wr.reflectX = i._$Yr.reflectX, i._$Wr.reflectY = i._$Yr.reflectY, i._$hS(o._$yo())
                                } else i._$hS(!1)
                            }
                        } else i.setTotalScale_notForClient(i._$Yr._$B0), i.setTotalOpacity(i.getInterpolatedOpacity())
                    }, z.prototype._$nb = function(t, e, i, a, r, o, n) {
                        this != e._$GT() && console.log("### assert!! ### ");
                        for (var s, u, h = e, l = null != h._$Wr ? h._$Wr : h._$Yr, c = Math.sin(xt._$bS * l._$qT), _ = Math.cos(xt._$bS * l._$qT), f = h.getTotalScale(), p = l.reflectX ? -1 : 1, g = l.reflectY ? -1 : 1, d = _ * f * p, m = -c * f * g, b = c * f * p, y = _ * f * g, v = l._$fL, q = l._$gL, $ = r * n, A = o; A < $; A += n) s = i[A], u = i[A + 1], a[A] = d * s + m * u + v, a[A + 1] = b * s + y * u + q
                    }, z.prototype._$Jr = function(t, e, i, a, r, o) {
                        e != i._$GT() && console.log("### assert!! ### ");
                        var n = z._$Lo;
                        z._$Lo[0] = a[0], z._$Lo[1] = a[1], e._$nb(t, i, n, n, 1, 0, 2);
                        for (var s = z._$To, u = z._$Po, h = 1, l = 0; l < 10; l++) {
                            if (u[0] = a[0] + h * r[0], u[1] = a[1] + h * r[1], e._$nb(t, i, u, s, 1, 0, 2), s[0] -= n[0], s[1] -= n[1], 0 != s[0] || 0 != s[1]) return o[0] = s[0], void(o[1] = s[1]);
                            if (u[0] = a[0] - h * r[0], u[1] = a[1] - h * r[1], e._$nb(t, i, u, s, 1, 0, 2), s[0] -= n[0], s[1] -= n[1], 0 != s[0] || 0 != s[1]) return s[0] = -s[0], s[0] = -s[0], o[0] = s[0], void(o[1] = s[1]);
                            h *= .1
                        }
                        ut._$so && console.log("_$L0 to transform _$SP\n")
                    }, X.prototype = new st, H.prototype = new w, H._$ur = -2, H._$ES = 500, H._$wb = 2, H._$8S = 3, H._$os = 4, H._$52 = H._$ES, H._$R2 = H._$ES, H._$Sb = function(t) {
                        for (var e = t.length - 1; e >= 0; --e) {
                            var i = t[e];
                            i < H._$52 ? H._$52 = i : i > H._$R2 && (H._$R2 = i)
                        }
                    }, H._$or = function() {
                        return H._$52
                    }, H._$Pr = function() {
                        return H._$R2
                    }, H.prototype._$F0 = function(t) {
                        this._$gP = t._$nP(), this._$dr = t._$nP(), this._$GS = t._$nP(), this._$qb = t._$6L(), this._$Lb = t._$cS(), this._$mS = t._$Tb(), t.getFormatVersion() >= O._$T7 ? (this.clipID = t._$nP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, H._$Sb(this._$Lb)
                    }, H.prototype.getClipIDList = function() {
                        return this.clipIDList
                    }, H.prototype._$Nr = function(t, e) {
                        if (e._$IS[0] = !1, e._$Us = A._$Z2(t, this._$GS, e._$IS, this._$Lb), ut._$Zs);
                        else if (e._$IS[0]) return;
                        e._$7s = A._$br(t, this._$GS, e._$IS, this._$mS)
                    }, H.prototype._$2b = function(t) {}, H.prototype.getDrawDataID = function() {
                        return this._$gP
                    }, H.prototype._$j2 = function(t) {
                        this._$gP = t
                    }, H.prototype.getOpacity = function(t, e) {
                        return e._$7s
                    }, H.prototype._$zS = function(t, e) {
                        return e._$Us
                    }, H.prototype.getTargetBaseDataID = function() {
                        return this._$dr
                    }, H.prototype._$gs = function(t) {
                        this._$dr = t
                    }, H.prototype._$32 = function() {
                        return null != this._$dr && this._$dr != bt._$2o()
                    }, H.prototype.getType = function() {}, W._$42 = 0, W.prototype._$1b = function() {
                        return this._$3S
                    }, W.prototype.getDrawDataList = function() {
                        return this._$aS
                    }, W.prototype._$F0 = function(t) {
                        this._$NL = t._$nP(), this._$aS = t._$nP(), this._$3S = t._$nP()
                    }, W.prototype._$kr = function(t) {
                        t._$Zo(this._$3S), t._$xo(this._$aS), this._$3S = null, this._$aS = null
                    }, J.prototype = new e, J.loadModel = function(t) {
                        var i = new J;
                        return e._$62(i, t), i
                    }, J.loadModel = function(t) {
                        var i = new J;
                        return e._$62(i, t), i
                    }, J._$to = function() {
                        return new J
                    }, J._$er = function(t) {
                        var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
                        if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
                        for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], a = J.loadModel(e._$3b()), r = 0; r < i.length; r++) {
                            var o = new _$5(i[r]);
                            if (0 == o.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + o._$PL());
                            a.setTexture(r, _$nL._$_o(t, o._$3b()))
                        }
                        return a
                    }, J.prototype.setGL = function(t) {
                        this._$zo.setGL(t)
                    }, J.prototype.setTransform = function(t) {
                        this._$zo.setTransform(t)
                    }, J.prototype.draw = function() {
                        this._$5S.draw(this._$zo)
                    }, J.prototype._$K2 = function() {
                        this._$zo._$K2()
                    }, J.prototype.setTexture = function(t, e) {
                        null == this._$zo && s._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
                    }, J.prototype.setTexture = function(t, e) {
                        null == this._$zo && s._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this._$zo.setTexture(t, e)
                    }, J.prototype._$Rs = function() {
                        return this._$zo._$Rs()
                    }, J.prototype._$Ds = function(t) {
                        this._$zo._$Ds(t)
                    }, J.prototype.getDrawParam = function() {
                        return this._$zo
                    }, Q.prototype = new n, Q._$cs = "VISIBLE:", Q._$ar = "LAYOUT:", Q.MTN_PREFIX_FADEIN = "FADEIN:", Q.MTN_PREFIX_FADEOUT = "FADEOUT:", Q._$Co = 0, Q._$1T = 1, Q.loadMotion = function(t) {
                        var e = U._$C(t);
                        return Q.loadMotion(e)
                    }, Q.loadMotion = function(t) {
                        t instanceof ArrayBuffer && (t = new DataView(t));
                        var e = new Q,
                            i = [0],
                            a = t.byteLength;
                        e._$yT = 0;
                        for (var r = 0; r < a; ++r) {
                            var o = Z(t, r),
                                n = o.charCodeAt(0);
                            if ("\n" != o && "\r" != o)
                                if ("#" != o)
                                    if ("$" != o) {
                                        if (97 <= n && n <= 122 || 65 <= n && n <= 90 || "_" == o) {
                                            for (c = r, _ = -1; r < a && "\r" != (o = Z(t, r)) && "\n" != o; ++r)
                                                if ("=" == o) {
                                                    _ = r;
                                                    break
                                                } if (_ >= 0) {
                                                var s = new R;
                                                T.startsWith(t, c, Q._$cs) ? (s._$RP = R._$hs, s._$4P = T.createString(t, c, _ - c)) : T.startsWith(t, c, Q._$ar) ? (s._$4P = T.createString(t, c + 7, _ - c - 7), T.startsWith(t, c + 7, "ANCHOR_X") ? s._$RP = R._$xs : T.startsWith(t, c + 7, "ANCHOR_Y") ? s._$RP = R._$us : T.startsWith(t, c + 7, "SCALE_X") ? s._$RP = R._$qs : T.startsWith(t, c + 7, "SCALE_Y") ? s._$RP = R._$Ys : T.startsWith(t, c + 7, "X") ? s._$RP = R._$ws : T.startsWith(t, c + 7, "Y") && (s._$RP = R._$Ns)) : (s._$RP = R._$Fr, s._$4P = T.createString(t, c, _ - c)), e.motions.push(s);
                                                var u = 0,
                                                    h = [];
                                                for (r = _ + 1; r < a && "\r" != (o = Z(t, r)) && "\n" != o; ++r)
                                                    if ("," != o && " " != o && "\t" != o && (p = T._$LS(t, a, r, i), i[0] > 0)) {
                                                        h.push(p), u++;
                                                        var l = i[0];
                                                        if (l < r) {
                                                            console.log("_$n0 _$hi . @Live2DMotion loadMotion()\n");
                                                            break
                                                        }
                                                        r = l - 1
                                                    } s._$I0 = new Float32Array(h), u > e._$yT && (e._$yT = u)
                                            }
                                        }
                                    } else {
                                        for (var c = r, _ = -1; r < a && "\r" != (o = Z(t, r)) && "\n" != o; ++r)
                                            if ("=" == o) {
                                                _ = r;
                                                break
                                            } var f = !1;
                                        if (_ >= 0)
                                            for (_ == c + 4 && "f" == Z(t, c + 1) && "p" == Z(t, c + 2) && "s" == Z(t, c + 3) && (f = !0), r = _ + 1; r < a && "\r" != (o = Z(t, r)) && "\n" != o; ++r)
                                                if ("," != o && " " != o && "\t" != o) {
                                                    var p = T._$LS(t, a, r, i);
                                                    i[0] > 0 && f && 5 < p && p < 121 && (e._$D0 = p), r = i[0]
                                                } for (; r < a && "\n" != Z(t, r) && "\r" != Z(t, r); ++r);
                                    }
                            else
                                for (; r < a && "\n" != Z(t, r) && "\r" != Z(t, r); ++r);
                        }
                        return e._$rr = 1e3 * e._$yT / e._$D0 | 0, e
                    }, Q.prototype.getDurationMSec = function() {
                        return this._$E ? -1 : this._$rr
                    }, Q.prototype.getLoopDurationMSec = function() {
                        return this._$rr
                    }, Q.prototype.dump = function() {
                        for (var t = 0; t < this.motions.length; t++) {
                            var e = this.motions[t];
                            console.log("_$wL[%s] [%d]. ", e._$4P, e._$I0.length);
                            for (var i = 0; i < e._$I0.length && i < 10; i++) console.log("%5.2f ,", e._$I0[i]);
                            console.log("\n")
                        }
                    }, Q.prototype.updateParamExe = function(t, e, i, a) {
                        for (var r = (e - a._$z2) * this._$D0 / 1e3, o = 0 | r, n = r - o, s = 0; s < this.motions.length; s++) {
                            var u = this.motions[s],
                                h = u._$I0.length,
                                l = u._$4P;
                            if (u._$RP == R._$hs) {
                                var c = u._$I0[o >= h ? h - 1 : o];
                                t.setParamFloat(l, c)
                            } else if (R._$ws <= u._$RP && u._$RP <= R._$Ys);
                            else {
                                var _ = t.getParamIndex(l),
                                    f = t.getModelContext(),
                                    p = .4 * (f.getParamMax(_) - f.getParamMin(_)),
                                    g = f.getParamFloat(_),
                                    d = u._$I0[o >= h ? h - 1 : o],
                                    m = u._$I0[o + 1 >= h ? h - 1 : o + 1],
                                    b = g + ((d < m && m - d > p || d > m && d - m > p ? d : d + (m - d) * n) - g) * i;
                                t.setParamFloat(l, b)
                            }
                        }
                        o >= this._$yT && (this._$E ? (a._$z2 = e, this.loopFadeIn && (a._$bs = e)) : a._$9L = !0), this._$eP = i
                    }, Q.prototype._$r0 = function() {
                        return this._$E
                    }, Q.prototype._$aL = function(t) {
                        this._$E = t
                    }, Q.prototype._$S0 = function() {
                        return this._$D0
                    }, Q.prototype._$U0 = function(t) {
                        this._$D0 = t
                    }, Q.prototype.isLoopFadeIn = function() {
                        return this.loopFadeIn
                    }, Q.prototype.setLoopFadeIn = function(t) {
                        this.loopFadeIn = t
                    }, k.prototype.clear = function() {
                        this.size = 0
                    }, k.prototype.add = function(t) {
                        if (this._$P.length <= this.size) {
                            var e = new Float32Array(2 * this.size);
                            C._$jT(this._$P, 0, e, 0, this.size), this._$P = e
                        }
                        this._$P[this.size++] = t
                    }, k.prototype._$BL = function() {
                        var t = new Float32Array(this.size);
                        return C._$jT(this._$P, 0, t, 0, this.size), t
                    }, R._$Fr = 0, R._$hs = 1, R._$ws = 100, R._$Ns = 101, R._$xs = 102, R._$us = 103, R._$qs = 104, R._$Ys = 105, K.prototype = new P, K._$gT = new Array, K.prototype._$zP = function() {
                        this._$GS = new D, this._$GS._$zP()
                    }, K.prototype._$F0 = function(t) {
                        P.prototype._$F0.call(this, t), this._$A = t._$6L(), this._$o = t._$6L(), this._$GS = t._$nP(), this._$Eo = t._$nP(), P.prototype.readV2_opacity.call(this, t)
                    }, K.prototype.init = function(t) {
                        var e = new tt(this),
                            i = (this._$o + 1) * (this._$A + 1);
                        return null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(2 * i), null != e._$hr && (e._$hr = null), this._$32() ? e._$hr = new Float32Array(2 * i) : e._$hr = null, e
                    }, K.prototype._$Nr = function(t, e) {
                        var i = e;
                        if (this._$GS._$Ur(t)) {
                            var a = this._$VT(),
                                r = K._$gT;
                            r[0] = !1, A._$Vr(t, this._$GS, r, a, this._$Eo, i._$Cr, 0, 2), e._$Ib(r[0]), this.interpolateOpacity(t, this._$GS, e, r)
                        }
                    }, K.prototype._$2b = function(t, e) {
                        var i = e;
                        if (i._$hS(!0), this._$32()) {
                            var a = this.getTargetBaseDataID();
                            if (i._$8r == P._$ur && (i._$8r = t.getBaseDataIndex(a)), i._$8r < 0) ut._$so && s._$li("_$L _$0P _$G :: %s", a), i._$hS(!1);
                            else {
                                var r = t.getBaseData(i._$8r),
                                    o = t._$q2(i._$8r);
                                if (null != r && o._$yo()) {
                                    var n = o.getTotalScale();
                                    i.setTotalScale_notForClient(n);
                                    var u = o.getTotalOpacity();
                                    i.setTotalOpacity(u * i.getInterpolatedOpacity()), r._$nb(t, o, i._$Cr, i._$hr, this._$VT(), 0, 2), i._$hS(!0)
                                } else i._$hS(!1)
                            }
                        } else i.setTotalOpacity(i.getInterpolatedOpacity())
                    }, K.prototype._$nb = function(t, e, i, a, r, o, n) {
                        var s = e,
                            u = null != s._$hr ? s._$hr : s._$Cr;
                        K.transformPoints_sdk2(i, a, r, o, n, u, this._$o, this._$A)
                    }, K.transformPoints_sdk2 = function(t, e, i, a, r, o, n, s) {
                        for (var u, h, l, c = i * r, _ = 0, f = 0, p = 0, g = 0, d = 0, m = 0, b = !1, y = a; y < c; y += r) {
                            var v, q, $, A;
                            if ($ = t[y], q = (A = t[y + 1]) * s, (v = $ * n) < 0 || q < 0 || n <= v || s <= q) {
                                var x = n + 1;
                                if (!b) {
                                    b = !0, _ = .25 * (o[2 * (0 + 0 * x)] + o[2 * (n + 0 * x)] + o[2 * (0 + s * x)] + o[2 * (n + s * x)]), f = .25 * (o[2 * (0 + 0 * x) + 1] + o[2 * (n + 0 * x) + 1] + o[2 * (0 + s * x) + 1] + o[2 * (n + s * x) + 1]);
                                    var w = o[2 * (n + s * x)] - o[2 * (0 + 0 * x)],
                                        S = o[2 * (n + s * x) + 1] - o[2 * (0 + 0 * x) + 1],
                                        L = o[2 * (n + 0 * x)] - o[2 * (0 + s * x)],
                                        P = o[2 * (n + 0 * x) + 1] - o[2 * (0 + s * x) + 1];
                                    _ -= .5 * ((p = .5 * (w + L)) + (d = .5 * (w - L))), f -= .5 * ((g = .5 * (S + P)) + (m = .5 * (S - P)))
                                }
                                if (-2 < $ && $ < 3 && -2 < A && A < 3)
                                    if ($ <= 0)
                                        if (A <= 0) {
                                            var C = o[2 * (0 + 0 * x)],
                                                M = o[2 * (0 + 0 * x) + 1],
                                                T = _ - 2 * p,
                                                D = f - 2 * g,
                                                I = _ - 2 * d,
                                                E = f - 2 * m,
                                                B = _ - 2 * p - 2 * d,
                                                F = f - 2 * g - 2 * m;
                                            (k = .5 * ($ - -2)) + (R = .5 * (A - -2)) <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R))
                                        } else if (A >= 1) I = o[2 * (0 + s * x)], E = o[2 * (0 + s * x) + 1], B = _ - 2 * p + 1 * d, F = f - 2 * g + 1 * m, C = _ + 3 * d, M = f + 3 * m, T = _ - 2 * p + 3 * d, D = f - 2 * g + 3 * m, (k = .5 * ($ - -2)) + (R = .5 * (A - 1)) <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R));
                                else {
                                    (N = 0 | q) == s && (N = s - 1);
                                    var k = .5 * ($ - -2),
                                        R = q - N,
                                        V = N / s,
                                        O = (N + 1) / s;
                                    I = o[2 * (0 + N * x)], E = o[2 * (0 + N * x) + 1], C = o[2 * (0 + (N + 1) * x)], M = o[2 * (0 + (N + 1) * x) + 1], B = _ - 2 * p + V * d, F = f - 2 * g + V * m, T = _ - 2 * p + O * d, D = f - 2 * g + O * m, k + R <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R))
                                } else if (1 <= $)
                                    if (A <= 0) T = o[2 * (n + 0 * x)], D = o[2 * (n + 0 * x) + 1], C = _ + 3 * p, M = f + 3 * g, B = _ + 1 * p - 2 * d, F = f + 1 * g - 2 * m, I = _ + 3 * p - 2 * d, E = f + 3 * g - 2 * m, (k = .5 * ($ - 1)) + (R = .5 * (A - -2)) <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R));
                                    else if (A >= 1) B = o[2 * (n + s * x)], F = o[2 * (n + s * x) + 1], I = _ + 3 * p + 1 * d, E = f + 3 * g + 1 * m, T = _ + 1 * p + 3 * d, D = f + 1 * g + 3 * m, C = _ + 3 * p + 3 * d, M = f + 3 * g + 3 * m, (k = .5 * ($ - 1)) + (R = .5 * (A - 1)) <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R));
                                else {
                                    var N;
                                    (N = 0 | q) == s && (N = s - 1), k = .5 * ($ - 1), R = q - N, V = N / s, O = (N + 1) / s, B = o[2 * (n + N * x)], F = o[2 * (n + N * x) + 1], T = o[2 * (n + (N + 1) * x)], D = o[2 * (n + (N + 1) * x) + 1], I = _ + 3 * p + V * d, E = f + 3 * g + V * m, C = _ + 3 * p + O * d, M = f + 3 * g + O * m, k + R <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R))
                                } else if (A <= 0) {
                                    (Y = 0 | v) == n && (Y = n - 1), k = v - Y, R = .5 * (A - -2);
                                    var U = Y / n,
                                        G = (Y + 1) / n;
                                    T = o[2 * (Y + 0 * x)], D = o[2 * (Y + 0 * x) + 1], C = o[2 * (Y + 1 + 0 * x)], M = o[2 * (Y + 1 + 0 * x) + 1], B = _ + U * p - 2 * d, F = f + U * g - 2 * m, I = _ + G * p - 2 * d, E = f + G * g - 2 * m, k + R <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R))
                                } else if (A >= 1) {
                                    var Y;
                                    (Y = 0 | v) == n && (Y = n - 1), k = v - Y, R = .5 * (A - 1), U = Y / n, G = (Y + 1) / n, B = o[2 * (Y + s * x)], F = o[2 * (Y + s * x) + 1], I = o[2 * (Y + 1 + s * x)], E = o[2 * (Y + 1 + s * x) + 1], T = _ + U * p + 3 * d, D = f + U * g + 3 * m, C = _ + G * p + 3 * d, M = f + G * g + 3 * m, k + R <= 1 ? (e[y] = B + (I - B) * k + (T - B) * R, e[y + 1] = F + (E - F) * k + (D - F) * R) : (e[y] = C + (T - C) * (1 - k) + (I - C) * (1 - R), e[y + 1] = M + (D - M) * (1 - k) + (E - M) * (1 - R))
                                } else System.err.printf("_$li calc : %.4f , %.4f\t\t\t\t\t@@BDBoxGrid\n", $, A);
                                else e[y] = _ + $ * p + A * d, e[y + 1] = f + $ * g + A * m
                            } else u = 2 * ((0 | v) + (0 | q) * (n + 1)), (h = v - (0 | v)) + (l = q - (0 | q)) < 1 ? (e[y] = o[u] * (1 - h - l) + o[u + 2] * h + o[u + 2 * (n + 1)] * l, e[y + 1] = o[u + 1] * (1 - h - l) + o[u + 3] * h + o[u + 2 * (n + 1) + 1] * l) : (e[y] = o[u + 2 * (n + 1) + 2] * (h - 1 + l) + o[u + 2 * (n + 1)] * (1 - h) + o[u + 2] * (1 - l), e[y + 1] = o[u + 2 * (n + 1) + 3] * (h - 1 + l) + o[u + 2 * (n + 1) + 1] * (1 - h) + o[u + 3] * (1 - l))
                        }
                    }, K.prototype.transformPoints_sdk1 = function(t, e, i, a, r, o, n) {
                        for (var s, u, h, l, c, _, f, p = e, g = this._$o, d = this._$A, m = r * n, b = null != p._$hr ? p._$hr : p._$Cr, y = o; y < m; y += n) ut._$ts ? ((s = i[y]) < 0 ? s = 0 : s > 1 && (s = 1), (u = i[y + 1]) < 0 ? u = 0 : u > 1 && (u = 1), (h = 0 | (s *= g)) > g - 1 && (h = g - 1), (l = 0 | (u *= d)) > d - 1 && (l = d - 1), _ = s - h, f = u - l, c = 2 * (h + l * (g + 1))) : (_ = (s = i[y] * g) - (0 | s), f = (u = i[y + 1] * d) - (0 | u), c = 2 * ((0 | s) + (0 | u) * (g + 1))), _ + f < 1 ? (a[y] = b[c] * (1 - _ - f) + b[c + 2] * _ + b[c + 2 * (g + 1)] * f, a[y + 1] = b[c + 1] * (1 - _ - f) + b[c + 3] * _ + b[c + 2 * (g + 1) + 1] * f) : (a[y] = b[c + 2 * (g + 1) + 2] * (_ - 1 + f) + b[c + 2 * (g + 1)] * (1 - _) + b[c + 2] * (1 - f), a[y + 1] = b[c + 2 * (g + 1) + 3] * (_ - 1 + f) + b[c + 2 * (g + 1) + 1] * (1 - _) + b[c + 3] * (1 - f))
                    }, K.prototype._$VT = function() {
                        return (this._$o + 1) * (this._$A + 1)
                    }, K.prototype.getType = function() {
                        return P._$_b
                    }, tt.prototype = new st, et._$42 = 0, et.prototype._$zP = function() {
                        this._$3S = new Array, this._$aS = new Array
                    }, et.prototype._$F0 = function(t) {
                        this._$g0 = t._$8L(), this.visible = t._$8L(), this._$NL = t._$nP(), this._$3S = t._$nP(), this._$aS = t._$nP()
                    }, et.prototype.init = function(t) {
                        var e = new it(this);
                        return e.setPartsOpacity(this.isVisible() ? 1 : 0), e
                    }, et.prototype._$6o = function(t) {
                        if (null == this._$3S) throw new Error("_$3S _$6 _$Wo@_$6o");
                        this._$3S.push(t)
                    }, et.prototype._$3o = function(t) {
                        if (null == this._$aS) throw new Error("_$aS _$6 _$Wo@_$3o");
                        this._$aS.push(t)
                    }, et.prototype._$Zo = function(t) {
                        this._$3S = t
                    }, et.prototype._$xo = function(t) {
                        this._$aS = t
                    }, et.prototype.isVisible = function() {
                        return this.visible
                    }, et.prototype._$uL = function() {
                        return this._$g0
                    }, et.prototype._$KP = function(t) {
                        this.visible = t
                    }, et.prototype._$ET = function(t) {
                        this._$g0 = t
                    }, et.prototype.getBaseData = function() {
                        return this._$3S
                    }, et.prototype.getDrawData = function() {
                        return this._$aS
                    }, et.prototype._$p2 = function() {
                        return this._$NL
                    }, et.prototype._$ob = function(t) {
                        this._$NL = t
                    }, et.prototype.getPartsID = function() {
                        return this._$NL
                    }, et.prototype._$MP = function(t) {
                        this._$NL = t
                    }, it.prototype = new function() {}, it.prototype.getPartsOpacity = function() {
                        return this._$VS
                    }, it.prototype.setPartsOpacity = function(t) {
                        this._$VS = t
                    }, at._$L7 = function() {
                        c._$27(), bt._$27(), E._$27(), l._$27()
                    }, at.prototype.toString = function() {
                        return this.id
                    }, rt.prototype._$1s = function() {
                        return this._$4S
                    }, rt.prototype._$zP = function() {
                        this._$4S = new Array
                    }, rt.prototype._$F0 = function(t) {
                        this._$4S = t._$nP()
                    }, rt.prototype._$Ks = function(t) {
                        this._$4S.push(t)
                    }, ot.tr = new mt, ot._$50 = new mt, ot._$Ti = new Array(0, 0), ot._$Pi = new Array(0, 0), ot._$B = new Array(0, 0), ot.prototype._$lP = function(t, e, i, a) {
                        this.viewport = new Array(t, e, i, a)
                    }, ot.prototype._$bL = function() {
                        this.context.save();
                        var t = this.viewport;
                        null != t && (this.context.beginPath(), this.context._$Li(t[0], t[1], t[2], t[3]), this.context.clip())
                    }, ot.prototype._$ei = function() {
                        this.context.restore()
                    }, ot.prototype.drawElements = function(t, e, i, a, r, o, n, u) {
                        try {
                            r != this._$Qo && (this._$Qo = r, this.context.globalAlpha = r);
                            for (var h = e.length, l = t.width, c = t.height, _ = this.context, f = this._$xP, p = this._$uP, g = this._$6r, d = this._$3r, m = ot.tr, b = ot._$Ti, y = ot._$Pi, v = ot._$B, $ = 0; $ < h; $ += 3) {
                                _.save();
                                var A = e[$],
                                    x = e[$ + 1],
                                    w = e[$ + 2],
                                    S = f + g * i[2 * A],
                                    L = p + d * i[2 * A + 1],
                                    P = f + g * i[2 * x],
                                    C = p + d * i[2 * x + 1],
                                    M = f + g * i[2 * w],
                                    T = p + d * i[2 * w + 1];
                                n && (n._$PS(S, L, v), S = v[0], L = v[1], n._$PS(P, C, v), P = v[0], C = v[1], n._$PS(M, T, v), M = v[0], T = v[1]);
                                var D = l * a[2 * A],
                                    I = c - c * a[2 * A + 1],
                                    E = l * a[2 * x],
                                    B = c - c * a[2 * x + 1],
                                    F = l * a[2 * w],
                                    k = c - c * a[2 * w + 1],
                                    R = Math.atan2(B - I, E - D),
                                    V = Math.atan2(C - L, P - S),
                                    O = P - S,
                                    N = C - L,
                                    U = Math.sqrt(O * O + N * N),
                                    G = E - D,
                                    Y = B - I,
                                    j = U / Math.sqrt(G * G + Y * Y);
                                q._$ni(F, k, D, I, E - D, B - I, -(B - I), E - D, b), q._$ni(M, T, S, L, P - S, C - L, -(C - L), P - S, y);
                                var z = (y[0] - b[0]) / b[1],
                                    X = Math.min(D, E, F),
                                    H = Math.max(D, E, F),
                                    W = Math.min(I, B, k),
                                    J = Math.max(I, B, k),
                                    Q = Math.floor(X),
                                    Z = Math.floor(W),
                                    K = Math.ceil(H),
                                    tt = Math.ceil(J);
                                if (m.identity(), m.translate(S, L), m.rotate(V), m.scale(1, y[1] / b[1]), m.shear(z, 0), m.scale(j, j), m.rotate(-R), m.translate(-D, -I), m.setContext(_), o || (o = 1.2), ut.IGNORE_EXPAND && (o = 0), ut.USE_CACHED_POLYGON_IMAGE) {
                                    var et = u._$e0;
                                    if (et.gl_cacheImage = et.gl_cacheImage || {}, !et.gl_cacheImage[$]) {
                                        var it = ot.createCanvas(K - Q, tt - Z);
                                        ut.DEBUG_DATA.LDGL_CANVAS_MB = ut.DEBUG_DATA.LDGL_CANVAS_MB || 0, ut.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) * (tt - Z) * 4;
                                        var at = it.getContext("2d");
                                        at.translate(-Q, -Z), ot.clip(at, m, o, U, D, I, E, B, F, k, S, L, P, C, M, T), at.drawImage(t, 0, 0), et.gl_cacheImage[$] = {
                                            cacheCanvas: it,
                                            cacheContext: at
                                        }
                                    }
                                    _.drawImage(et.gl_cacheImage[$].cacheCanvas, Q, Z)
                                } else ut.IGNORE_CLIP || ot.clip(_, m, o, U, D, I, E, B, F, k, S, L, P, C, M, T), ut.USE_ADJUST_TRANSLATION && (X = 0, H = l, W = 0, J = c), _.drawImage(t, X, W, H - X, J - W, X, W, H - X, J - W);
                                _.restore()
                            }
                        } catch (t) {
                            s._$Rb(t)
                        }
                    }, ot.clip = function(t, e, i, a, r, o, n, s, u, h, l, c, _, f, p, g) {
                        i > .02 ? ot.expandClip(t, e, i, a, l, c, _, f, p, g) : ot.clipWithTransform(t, null, r, o, n, s, u, h)
                    }, ot.expandClip = function(t, e, i, a, r, o, n, s, u, h) {
                        var l = n - r,
                            c = s - o,
                            _ = u - r,
                            f = h - o,
                            p = l * f - c * _ > 0 ? i : -i,
                            g = -c,
                            d = l,
                            m = u - n,
                            b = h - s,
                            y = -b,
                            v = m,
                            q = Math.sqrt(m * m + b * b),
                            $ = -f,
                            A = _,
                            x = Math.sqrt(_ * _ + f * f),
                            w = r - p * g / a,
                            S = o - p * d / a,
                            L = n - p * g / a,
                            P = s - p * d / a,
                            C = n - p * y / q,
                            M = s - p * v / q,
                            T = u - p * y / q,
                            D = h - p * v / q,
                            I = r + p * $ / x,
                            E = o + p * A / x,
                            B = u + p * $ / x,
                            F = h + p * A / x,
                            k = ot._$50;
                        return null != e._$P2(k) && (ot.clipWithTransform(t, k, w, S, L, P, C, M, T, D, B, F, I, E), !0)
                    }, ot.clipWithTransform = function(t, e, i, a, r, o, n, u) {
                        if (arguments.length < 7) s._$li("err : @LDGL.clip()");
                        else if (arguments[1] instanceof mt) {
                            var h = ot._$B,
                                l = e,
                                c = arguments;
                            if (t.beginPath(), l) {
                                l._$PS(c[2], c[3], h), t.moveTo(h[0], h[1]);
                                for (var _ = 4; _ < c.length; _ += 2) l._$PS(c[_], c[_ + 1], h), t.lineTo(h[0], h[1])
                            } else
                                for (t.moveTo(c[2], c[3]), _ = 4; _ < c.length; _ += 2) t.lineTo(c[_], c[_ + 1]);
                            t.clip()
                        } else s._$li("err : a[0] is _$6 LDTransform @LDGL.clip()")
                    }, ot.createCanvas = function(t, e) {
                        var i = document.createElement("canvas");
                        return i.setAttribute("width", t), i.setAttribute("height", e), i || s._$li("err : " + i), i
                    }, ot.dumpValues = function() {
                        for (var t = "", e = 0; e < arguments.length; e++) t += "[" + e + "]= " + arguments[e].toFixed(3) + " , ";
                        console.log(t)
                    }, nt.prototype._$F0 = function(t) {
                        this._$TT = t._$_T(), this._$LT = t._$_T(), this._$FS = t._$_T(), this._$wL = t._$nP()
                    }, nt.prototype.getMinValue = function() {
                        return this._$TT
                    }, nt.prototype.getMaxValue = function() {
                        return this._$LT
                    }, nt.prototype.getDefaultValue = function() {
                        return this._$FS
                    }, nt.prototype.getParamID = function() {
                        return this._$wL
                    }, st.prototype._$yo = function() {
                        return this._$AT && !this._$JS
                    }, st.prototype._$hS = function(t) {
                        this._$AT = t
                    }, st.prototype._$GT = function() {
                        return this._$e0
                    }, st.prototype._$l2 = function(t) {
                        this._$IP = t
                    }, st.prototype.getPartsIndex = function() {
                        return this._$IP
                    }, st.prototype._$x2 = function() {
                        return this._$JS
                    }, st.prototype._$Ib = function(t) {
                        this._$JS = t
                    }, st.prototype.getTotalScale = function() {
                        return this.totalScale
                    }, st.prototype.setTotalScale_notForClient = function(t) {
                        this.totalScale = t
                    }, st.prototype.getInterpolatedOpacity = function() {
                        return this._$7s
                    }, st.prototype.setInterpolatedOpacity = function(t) {
                        this._$7s = t
                    }, st.prototype.getTotalOpacity = function(t) {
                        return this.totalOpacity
                    }, st.prototype.setTotalOpacity = function(t) {
                        this.totalOpacity = t
                    }, ut._$2s = "2.1.00_1", ut._$Kr = 201001e3, ut._$sP = !0, ut._$so = !0, ut._$cb = !1, ut._$3T = !0, ut._$Ts = !0, ut._$fb = !0, ut._$ts = !0, ut.L2D_DEFORMER_EXTEND = !0, ut._$Wb = !1, ut._$yr = !1, ut._$Zs = !1, ut.L2D_NO_ERROR = 0, ut._$i7 = 1e3, ut._$9s = 1001, ut._$es = 1100, ut._$r7 = 2e3, ut._$07 = 2001, ut._$b7 = 2002, ut._$H7 = 4e3, ut.L2D_COLOR_BLEND_MODE_MULT = 0, ut.L2D_COLOR_BLEND_MODE_ADD = 1, ut.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, ut._$6b = !0, ut._$cT = 0, ut.clippingMaskBufferSize = 256, ut.glContext = new Array, ut.frameBuffers = new Array, ut.fTexture = new Array, ut.IGNORE_CLIP = !1, ut.IGNORE_EXPAND = !1, ut.EXPAND_W = 2, ut.USE_ADJUST_TRANSLATION = !0, ut.USE_CANVAS_TRANSFORM = !0, ut.USE_CACHED_POLYGON_IMAGE = !1, ut.DEBUG_DATA = {}, ut.PROFILE_IOS_SPEED = {
                        PROFILE_NAME: "iOS Speed",
                        USE_ADJUST_TRANSLATION: !0,
                        USE_CACHED_POLYGON_IMAGE: !0,
                        EXPAND_W: 4
                    }, ut.PROFILE_IOS_QUALITY = {
                        PROFILE_NAME: "iOS HiQ",
                        USE_ADJUST_TRANSLATION: !0,
                        USE_CACHED_POLYGON_IMAGE: !1,
                        EXPAND_W: 2
                    }, ut.PROFILE_IOS_DEFAULT = ut.PROFILE_IOS_QUALITY, ut.PROFILE_ANDROID = {
                        PROFILE_NAME: "Android",
                        USE_ADJUST_TRANSLATION: !1,
                        USE_CACHED_POLYGON_IMAGE: !1,
                        EXPAND_W: 2
                    }, ut.PROFILE_DESKTOP = {
                        PROFILE_NAME: "Desktop",
                        USE_ADJUST_TRANSLATION: !1,
                        USE_CACHED_POLYGON_IMAGE: !1,
                        EXPAND_W: 2
                    }, ut.initProfile = function() {
                        St.isIOS() ? ut.setupProfile(ut.PROFILE_IOS_DEFAULT) : St.isAndroid() ? ut.setupProfile(ut.PROFILE_ANDROID) : ut.setupProfile(ut.PROFILE_DESKTOP)
                    }, ut.setupProfile = function(t, e) {
                        if ("number" == typeof t) switch (t) {
                            case 9901:
                                t = ut.PROFILE_IOS_SPEED;
                                break;
                            case 9902:
                                t = ut.PROFILE_IOS_QUALITY;
                                break;
                            case 9903:
                                t = ut.PROFILE_IOS_DEFAULT;
                                break;
                            case 9904:
                                t = ut.PROFILE_ANDROID;
                                break;
                            case 9905:
                                t = ut.PROFILE_DESKTOP;
                                break;
                            default:
                                alert("profile _$6 _$Ui : " + t)
                        }
                        for (var i in arguments.length < 2 && (e = !0), e && console.log("profile : " + t.PROFILE_NAME), t) ut[i] = t[i], e && console.log("  [" + i + "] = " + t[i])
                    }, ut.init = function() {
                        ut._$6b && (console.log("Live2D %s", ut._$2s), ut._$6b = !1, ut.initProfile())
                    }, ut.getVersionStr = function() {
                        return ut._$2s
                    }, ut.getVersionNo = function() {
                        return ut._$Kr
                    }, ut._$sT = function(t) {
                        ut._$cT = t
                    }, ut.getError = function() {
                        var t = ut._$cT;
                        return ut._$cT = 0, t
                    }, ut.dispose = function() {
                        ut.glContext = [], ut.frameBuffers = [], ut.fTexture = []
                    }, ut.setGL = function(t, e) {
                        var i = e || 0;
                        ut.glContext[i] = t
                    }, ut.getGL = function(t) {
                        return ut.glContext[t]
                    }, ut.setClippingMaskBufferSize = function(t) {
                        ut.clippingMaskBufferSize = t
                    }, ut.getClippingMaskBufferSize = function() {
                        return ut.clippingMaskBufferSize
                    }, ut.deleteBuffer = function(t) {
                        ut.getGL(t).deleteFramebuffer(ut.frameBuffers[t].framebuffer), delete ut.frameBuffers[t], delete ut.glContext[t]
                    }, ht._$r2 = function(t) {
                        return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * Math.cos(t * xt.PI_F)
                    }, lt._$fr = -1, lt.prototype.toString = function() {
                        return this._$ib
                    }, ct.prototype = new H, ct._$42 = 0, ct._$Os = 30, ct._$ms = 0, ct._$ns = 1, ct._$_s = 2, ct._$gT = new Array, ct.prototype._$_S = function(t) {
                        this._$LP = t
                    }, ct.prototype.getTextureNo = function() {
                        return this._$LP
                    }, ct.prototype._$ZL = function() {
                        return this._$Qi
                    }, ct.prototype._$H2 = function() {
                        return this._$JP
                    }, ct.prototype.getNumPoints = function() {
                        return this._$d0
                    }, ct.prototype.getType = function() {
                        return H._$wb
                    }, ct.prototype._$B2 = function(t, e, i) {
                        var a = e,
                            r = null != a._$hr ? a._$hr : a._$Cr;
                        switch (V._$do) {
                            default:
                            case V._$Ms:
                                throw new Error("_$L _$ro ");
                            case V._$Qs:
                                for (var o = this._$d0 - 1; o >= 0; --o) r[o * V._$No + 4] = i
                        }
                    }, ct.prototype._$zP = function() {
                        this._$GS = new D, this._$GS._$zP()
                    }, ct.prototype._$F0 = function(t) {
                        H.prototype._$F0.call(this, t), this._$LP = t._$6L(), this._$d0 = t._$6L(), this._$Yo = t._$6L();
                        var e = t._$nP();
                        this._$BP = new Int16Array(3 * this._$Yo);
                        for (var i = 3 * this._$Yo - 1; i >= 0; --i) this._$BP[i] = e[i];
                        if (this._$Eo = t._$nP(), this._$Qi = t._$nP(), t.getFormatVersion() >= O._$s7) {
                            if (this._$JP = t._$6L(), 0 != this._$JP) {
                                if (0 != (1 & this._$JP)) {
                                    var a = t._$6L();
                                    null == this._$5P && (this._$5P = new Object), this._$5P._$Hb = parseInt(a)
                                }
                                0 != (this._$JP & ct._$Os) ? this._$6s = (this._$JP & ct._$Os) >> 1 : this._$6s = ct._$ms, 0 != (32 & this._$JP) && (this.culling = !1)
                            }
                        } else this._$JP = 0
                    }, ct.prototype.init = function(t) {
                        var e = new _t(this),
                            i = this._$d0 * V._$No,
                            a = this._$32();
                        switch (null != e._$Cr && (e._$Cr = null), e._$Cr = new Float32Array(i), null != e._$hr && (e._$hr = null), e._$hr = a ? new Float32Array(i) : null, V._$do) {
                            default:
                            case V._$Ms:
                                if (V._$Ls)
                                    for (var r = this._$d0 - 1; r >= 0; --r) {
                                        var o = r << 1;
                                        this._$Qi[o + 1] = 1 - this._$Qi[o + 1]
                                    }
                                break;
                            case V._$Qs:
                                for (r = this._$d0 - 1; r >= 0; --r) {
                                    o = r << 1;
                                    var n = r * V._$No,
                                        s = this._$Qi[o],
                                        u = this._$Qi[o + 1];
                                    e._$Cr[n] = s, e._$Cr[n + 1] = u, e._$Cr[n + 4] = 0, a && (e._$hr[n] = s, e._$hr[n + 1] = u, e._$hr[n + 4] = 0)
                                }
                        }
                        return e
                    }, ct.prototype._$Nr = function(t, e) {
                        var i = e;
                        if (this != i._$GT() && console.log("### assert!! ### "), this._$GS._$Ur(t) && (H.prototype._$Nr.call(this, t, i), !i._$IS[0])) {
                            var a = ct._$gT;
                            a[0] = !1, A._$Vr(t, this._$GS, a, this._$d0, this._$Eo, i._$Cr, V._$i2, V._$No)
                        }
                    }, ct.prototype._$2b = function(t, e) {
                        try {
                            this != e._$GT() && console.log("### assert!! ### ");
                            var i = !1;
                            e._$IS[0] && (i = !0);
                            var a = e;
                            if (!i && (H.prototype._$2b.call(this, t), this._$32())) {
                                var r = this.getTargetBaseDataID();
                                if (a._$8r == H._$ur && (a._$8r = t.getBaseDataIndex(r)), a._$8r < 0) ut._$so && s._$li("_$L _$0P _$G :: %s", r);
                                else {
                                    var o = t.getBaseData(a._$8r),
                                        n = t._$q2(a._$8r);
                                    null == o || n._$x2() ? a._$AT = !1 : (o._$nb(t, n, a._$Cr, a._$hr, this._$d0, V._$i2, V._$No), a._$AT = !0), a.baseOpacity = n.getTotalOpacity()
                                }
                            }
                        } catch (t) {
                            throw t
                        }
                    }, ct.prototype.draw = function(t, e, i) {
                        if (this != i._$GT() && console.log("### assert!! ### "), !i._$IS[0]) {
                            var a = i,
                                r = this._$LP;
                            r < 0 && (r = 1);
                            var o = this.getOpacity(e, a) * i._$VS * i.baseOpacity,
                                n = null != a._$hr ? a._$hr : a._$Cr;
                            t.setClipBufPre_clipContextForDraw(i.clipBufPre_clipContext), t._$WP(this.culling), t._$Uo(r, 3 * this._$Yo, this._$BP, n, this._$Qi, o, this._$6s, a)
                        }
                    }, ct.prototype.dump = function() {
                        console.log("  _$yi( %d ) , _$d0( %d ) , _$Yo( %d ) \n", this._$LP, this._$d0, this._$Yo), console.log("  _$Oi _$di = { ");
                        for (var t = 0; t < this._$BP.length; t++) console.log("%5d ,", this._$BP[t]);
                        for (console.log("\n  _$5i _$30"), t = 0; t < this._$Eo.length; t++) {
                            console.log("\n    _$30[%d] = ", t);
                            for (var e = this._$Eo[t], i = 0; i < e.length; i++) console.log("%6.2f, ", e[i])
                        }
                        console.log("\n")
                    }, ct.prototype._$72 = function(t) {
                        return null == this._$5P ? null : this._$5P[t]
                    }, ct.prototype.getIndexArray = function() {
                        return this._$BP
                    }, _t.prototype = new wt, _t.prototype.getTransformedPoints = function() {
                        return null != this._$hr ? this._$hr : this._$Cr
                    }, ft.prototype._$HT = function(t) {
                        this.x = t.x, this.y = t.y
                    }, ft.prototype._$HT = function(t, e) {
                        this.x = t, this.y = e
                    }, pt.prototype = new e, pt.loadModel = function(t) {
                        var i = new pt;
                        return e._$62(i, t), i
                    }, pt.loadModel = function(t, i) {
                        var a = new pt(i || 0);
                        return e._$62(a, t), a
                    }, pt._$to = function() {
                        return new pt
                    }, pt._$er = function(t) {
                        var e = new _$5("../_$_r/_$t0/_$Ri/_$_P._$d");
                        if (0 == e.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + e._$PL());
                        for (var i = ["../_$_r/_$t0/_$Ri/_$_P.512/_$CP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$vP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$EP._$1", "../_$_r/_$t0/_$Ri/_$_P.512/_$pP._$1"], a = pt.loadModel(e._$3b()), r = 0; r < i.length; r++) {
                            var o = new _$5(i[r]);
                            if (0 == o.exists()) throw new _$ls("_$t0 _$_ _$6 _$Ui :: " + o._$PL());
                            a.setTexture(r, _$nL._$_o(t, o._$3b()))
                        }
                        return a
                    }, pt.prototype.setGL = function(t) {
                        ut.setGL(t)
                    }, pt.prototype.setTransform = function(t) {
                        this.drawParamWebGL.setTransform(t)
                    }, pt.prototype.update = function() {
                        this._$5S.update(), this._$5S.preDraw(this.drawParamWebGL)
                    }, pt.prototype.draw = function() {
                        this._$5S.draw(this.drawParamWebGL)
                    }, pt.prototype._$K2 = function() {
                        this.drawParamWebGL._$K2()
                    }, pt.prototype.setTexture = function(t, e) {
                        null == this.drawParamWebGL && s._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t, e)
                    }, pt.prototype.setTexture = function(t, e) {
                        null == this.drawParamWebGL && s._$li("_$Yi for QT _$ki / _$XS() is _$6 _$ui!!"), this.drawParamWebGL.setTexture(t, e)
                    }, pt.prototype._$Rs = function() {
                        return this.drawParamWebGL._$Rs()
                    }, pt.prototype._$Ds = function(t) {
                        this.drawParamWebGL._$Ds(t)
                    }, pt.prototype.getDrawParam = function() {
                        return this.drawParamWebGL
                    }, pt.prototype.setMatrix = function(t) {
                        this.drawParamWebGL.setMatrix(t)
                    }, pt.prototype.setPremultipliedAlpha = function(t) {
                        this.drawParamWebGL.setPremultipliedAlpha(t)
                    }, pt.prototype.isPremultipliedAlpha = function() {
                        return this.drawParamWebGL.isPremultipliedAlpha()
                    }, pt.prototype.setAnisotropy = function(t) {
                        this.drawParamWebGL.setAnisotropy(t)
                    }, pt.prototype.getAnisotropy = function() {
                        return this.drawParamWebGL.getAnisotropy()
                    }, gt.prototype._$tb = function() {
                        return this.motions
                    }, gt.prototype.startMotion = function(t, e) {
                        for (var i = null, a = this.motions.length, r = 0; r < a; ++r) null != (i = this.motions[r]) && (i._$qS(i._$w0.getFadeOut()), this._$eb && s._$Ji("MotionQueueManager[size:%2d]->startMotion() / start _$K _$3 (m%d)\n", a, i._$sr));
                        if (null == t) return -1;
                        (i = new dt)._$w0 = t, this.motions.push(i);
                        var o = i._$sr;
                        return this._$eb && s._$Ji("MotionQueueManager[size:%2d]->startMotion() / new _$w0 (m%d)\n", a, o), o
                    }, gt.prototype.updateParam = function(t) {
                        try {
                            for (var e = !1, i = 0; i < this.motions.length; i++) {
                                var a = this.motions[i];
                                if (null != a) {
                                    var r = a._$w0;
                                    null != r ? (r.updateParam(t, a), e = !0, a.isFinished() && (this._$eb && s._$Ji("MotionQueueManager[size:%2d]->updateParam() / _$T0 _$w0 (m%d)\n", this.motions.length - 1, a._$sr), this.motions.splice(i, 1), i--)) : (this.motions = this.motions.splice(i, 1), i--)
                                } else this.motions.splice(i, 1), i--
                            }
                            return e
                        } catch (t) {
                            return s._$li(t), !0
                        }
                    }, gt.prototype.isFinished = function(t) {
                        if (arguments.length >= 1) {
                            for (var e = 0; e < this.motions.length; e++)
                                if (null != (i = this.motions[e]) && i._$sr == t && !i.isFinished()) return !1;
                            return !0
                        }
                        for (e = 0; e < this.motions.length; e++) {
                            var i;
                            if (null != (i = this.motions[e])) {
                                var a = i._$w0;
                                if (null != a) {
                                    if (!i.isFinished()) return !1
                                } else this.motions.splice(e, 1), e--
                            } else this.motions.splice(e, 1), e--
                        }
                        return !0
                    }, gt.prototype.stopAllMotions = function() {
                        for (var t = 0; t < this.motions.length; t++) {
                            var e = this.motions[t];
                            null != e ? (e._$w0, this.motions.splice(t, 1), t--) : (this.motions.splice(t, 1), t--)
                        }
                    }, gt.prototype._$Zr = function(t) {
                        this._$eb = t
                    }, gt.prototype._$e = function() {
                        console.log("-- _$R --\n");
                        for (var t = 0; t < this.motions.length; t++) {
                            var e = this.motions[t]._$w0;
                            console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e.toString())
                        }
                    }, dt._$Gs = 0, dt.prototype.isFinished = function() {
                        return this._$9L
                    }, dt.prototype._$qS = function(t) {
                        var e = C.getUserTimeMSec() + t;
                        (this._$Do < 0 || e < this._$Do) && (this._$Do = e)
                    }, dt.prototype._$Bs = function() {
                        return this._$sr
                    }, mt.prototype.setContext = function(t) {
                        var e = this.m;
                        t.transform(e[0], e[1], e[3], e[4], e[6], e[7])
                    }, mt.prototype.toString = function() {
                        for (var t = "LDTransform { ", e = 0; e < 9; e++) t += this.m[e].toFixed(2) + " ,";
                        return t + " }"
                    }, mt.prototype.identity = function() {
                        var t = this.m;
                        t[0] = t[4] = t[8] = 1, t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0
                    }, mt.prototype._$PS = function(t, e, i) {
                        null == i && (i = new Array(0, 0));
                        var a = this.m;
                        return i[0] = a[0] * t + a[3] * e + a[6], i[1] = a[1] * t + a[4] * e + a[7], i
                    }, mt.prototype._$P2 = function(t) {
                        t || (t = new mt);
                        var e = this.m,
                            i = e[0],
                            a = e[1],
                            r = e[2],
                            o = e[3],
                            n = e[4],
                            s = e[5],
                            u = e[6],
                            h = e[7],
                            l = e[8],
                            c = i * n * l + a * s * u + r * o * h - i * s * h - r * n * u - a * o * l;
                        if (0 == c) return null;
                        var _ = 1 / c;
                        return t.m[0] = _ * (n * l - h * s), t.m[1] = _ * (h * r - a * l), t.m[2] = _ * (a * s - n * r), t.m[3] = _ * (u * s - o * l), t.m[4] = _ * (i * l - u * r), t.m[5] = _ * (o * r - i * s), t.m[6] = _ * (o * h - u * n), t.m[7] = _ * (u * a - i * h), t.m[8] = _ * (i * n - o * a), t
                    }, mt.prototype.transform = function(t, e, i) {
                        null == i && (i = new Array(0, 0));
                        var a = this.m;
                        return i[0] = a[0] * t + a[3] * e + a[6], i[1] = a[1] * t + a[4] * e + a[7], i
                    }, mt.prototype.translate = function(t, e) {
                        var i = this.m;
                        i[6] = i[0] * t + i[3] * e + i[6], i[7] = i[1] * t + i[4] * e + i[7], i[8] = i[2] * t + i[5] * e + i[8]
                    }, mt.prototype.scale = function(t, e) {
                        var i = this.m;
                        i[0] *= t, i[1] *= t, i[2] *= t, i[3] *= e, i[4] *= e, i[5] *= e
                    }, mt.prototype.shear = function(t, e) {
                        var i = this.m,
                            a = i[0] + i[3] * e,
                            r = i[1] + i[4] * e,
                            o = i[2] + i[5] * e;
                        i[3] = i[0] * t + i[3], i[4] = i[1] * t + i[4], i[5] = i[2] * t + i[5], i[0] = a, i[1] = r, i[2] = o
                    }, mt.prototype.rotate = function(t) {
                        var e = this.m,
                            i = Math.cos(t),
                            a = Math.sin(t),
                            r = e[0] * i + e[3] * a,
                            o = e[1] * i + e[4] * a,
                            n = e[2] * i + e[5] * a;
                        e[3] = -e[0] * a + e[3] * i, e[4] = -e[1] * a + e[4] * i, e[5] = -e[2] * a + e[5] * i, e[0] = r, e[1] = o, e[2] = n
                    }, mt.prototype.concatenate = function(t) {
                        var e = this.m,
                            i = t.m,
                            a = e[0] * i[0] + e[3] * i[1] + e[6] * i[2],
                            r = e[1] * i[0] + e[4] * i[1] + e[7] * i[2],
                            o = e[2] * i[0] + e[5] * i[1] + e[8] * i[2],
                            n = e[0] * i[3] + e[3] * i[4] + e[6] * i[5],
                            s = e[1] * i[3] + e[4] * i[4] + e[7] * i[5],
                            u = e[2] * i[3] + e[5] * i[4] + e[8] * i[5],
                            h = e[0] * i[6] + e[3] * i[7] + e[6] * i[8],
                            l = e[1] * i[6] + e[4] * i[7] + e[7] * i[8],
                            c = e[2] * i[6] + e[5] * i[7] + e[8] * i[8];
                        m[0] = a, m[1] = r, m[2] = o, m[3] = n, m[4] = s, m[5] = u, m[6] = h, m[7] = l, m[8] = c
                    }, bt.prototype = new at, bt._$eT = null, bt._$tP = new Object, bt._$2o = function() {
                        return null == bt._$eT && (bt._$eT = bt.getID("DST_BASE")), bt._$eT
                    }, bt._$27 = function() {
                        bt._$tP.clear(), bt._$eT = null
                    }, bt.getID = function(t) {
                        var e = bt._$tP[t];
                        return null == e && (e = new bt(t), bt._$tP[t] = e), e
                    }, bt.prototype._$3s = function() {
                        return new bt
                    }, yt.prototype = new S, yt._$9r = function(t) {
                        return new Float32Array(t)
                    }, yt._$vb = function(t) {
                        return new Int16Array(t)
                    }, yt._$cr = function(t, e) {
                        return null == t || t._$yL() < e.length ? ((t = yt._$9r(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
                    }, yt._$mb = function(t, e) {
                        return null == t || t._$yL() < e.length ? ((t = yt._$vb(2 * e.length)).put(e), t._$oT(0)) : (t.clear(), t.put(e), t._$oT(0)), t
                    }, yt._$Hs = function() {
                        return this._$Gr
                    }, yt._$as = function(t) {
                        this._$Gr = t
                    }, yt.prototype.getGL = function() {
                        return this.gl
                    }, yt.prototype.setGL = function(t) {
                        this.gl = t
                    }, yt.prototype.setTransform = function(t) {
                        this.transform = t
                    }, yt.prototype._$ZT = function() {
                        var t = this.gl;
                        this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.DEPTH_TEST), t.frontFace(t.CW), t.enable(t.BLEND), t.colorMask(1, 1, 1, 1), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null)
                    }, yt.prototype._$Uo = function(t, e, i, a, r, o, n, s) {
                        if (!(o < .01 && null == this.clipBufPre_clipContextMask)) {
                            o > .9 && ut.EXPAND_W;
                            var u = this.gl;
                            if (null == this.gl) throw new Error("gl is null");
                            var h, l, c, _, f = 1 * this._$C0 * o,
                                p = 1 * this._$tT * o,
                                g = 1 * this._$WL * o,
                                d = this._$lT * o;
                            if (null != this.clipBufPre_clipContextMask) {
                                u.frontFace(u.CCW), u.useProgram(this.shaderProgram), this._$vS = vt(u, this._$vS, a), this._$no = qt(u, this._$no, i), u.enableVertexAttribArray(this.a_position_Loc), u.vertexAttribPointer(this.a_position_Loc, 2, u.FLOAT, !1, 0, 0), this._$NT = vt(u, this._$NT, r), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, this.textures[t]), u.uniform1i(this.s_texture0_Loc, 1), u.enableVertexAttribArray(this.a_texCoord_Loc), u.vertexAttribPointer(this.a_texCoord_Loc, 2, u.FLOAT, !1, 0, 0), u.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask);
                                var m = this.getClipBufPre_clipContextMask().layoutChannelNo,
                                    b = this.getChannelFlagAsColor(m);
                                u.uniform4f(this.u_channelFlag, b.r, b.g, b.b, b.a);
                                var y = this.getClipBufPre_clipContextMask().layoutBounds;
                                u.uniform4f(this.u_baseColor_Loc, 2 * y.x - 1, 2 * y.y - 1, 2 * y._$EL() - 1, 2 * y._$5T() - 1), u.uniform1i(this.u_maskFlag_Loc, !0)
                            } else null != this.getClipBufPre_clipContextDraw() ? (u.useProgram(this.shaderProgramOff), this._$vS = vt(u, this._$vS, a), this._$no = qt(u, this._$no, i), u.enableVertexAttribArray(this.a_position_Loc_Off), u.vertexAttribPointer(this.a_position_Loc_Off, 2, u.FLOAT, !1, 0, 0), this._$NT = vt(u, this._$NT, r), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, this.textures[t]), u.uniform1i(this.s_texture0_Loc_Off, 1), u.enableVertexAttribArray(this.a_texCoord_Loc_Off), u.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, u.FLOAT, !1, 0, 0), u.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw), u.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4), u.activeTexture(u.TEXTURE2), u.bindTexture(u.TEXTURE_2D, ut.fTexture[this.glno]), u.uniform1i(this.s_texture1_Loc_Off, 2), m = this.getClipBufPre_clipContextDraw().layoutChannelNo, b = this.getChannelFlagAsColor(m), u.uniform4f(this.u_channelFlag_Loc_Off, b.r, b.g, b.b, b.a), u.uniform4f(this.u_baseColor_Loc_Off, f, p, g, d)) : (u.useProgram(this.shaderProgram), this._$vS = vt(u, this._$vS, a), this._$no = qt(u, this._$no, i), u.enableVertexAttribArray(this.a_position_Loc), u.vertexAttribPointer(this.a_position_Loc, 2, u.FLOAT, !1, 0, 0), this._$NT = vt(u, this._$NT, r), u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, this.textures[t]), u.uniform1i(this.s_texture0_Loc, 1), u.enableVertexAttribArray(this.a_texCoord_Loc), u.vertexAttribPointer(this.a_texCoord_Loc, 2, u.FLOAT, !1, 0, 0), u.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4), u.uniform4f(this.u_baseColor_Loc, f, p, g, d), u.uniform1i(this.u_maskFlag_Loc, !1));
                            if (this.culling ? this.gl.enable(u.CULL_FACE) : this.gl.disable(u.CULL_FACE), this.gl.enable(u.BLEND), null != this.clipBufPre_clipContextMask) h = u.ONE, l = u.ONE_MINUS_SRC_ALPHA, c = u.ONE, _ = u.ONE_MINUS_SRC_ALPHA;
                            else switch (n) {
                                case ct._$ms:
                                    h = u.ONE, l = u.ONE_MINUS_SRC_ALPHA, c = u.ONE, _ = u.ONE_MINUS_SRC_ALPHA;
                                    break;
                                case ct._$ns:
                                    h = u.ONE, l = u.ONE, c = u.ZERO, _ = u.ONE;
                                    break;
                                case ct._$_s:
                                    h = u.DST_COLOR, l = u.ONE_MINUS_SRC_ALPHA, c = u.ZERO, _ = u.ONE
                            }
                            u.blendEquationSeparate(u.FUNC_ADD, u.FUNC_ADD), u.blendFuncSeparate(h, l, c, _), this.anisotropyExt && u.texParameteri(u.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
                            var v = i.length;
                            u.drawElements(u.TRIANGLES, v, u.UNSIGNED_SHORT, 0), u.bindTexture(u.TEXTURE_2D, null)
                        }
                    }, yt.prototype._$Rs = function() {
                        throw new Error("_$Rs")
                    }, yt.prototype._$Ds = function(t) {
                        throw new Error("_$Ds")
                    }, yt.prototype._$K2 = function() {
                        for (var t = 0; t < this.textures.length; t++) 0 != this.textures[t] && (this.gl._$K2(1, this.textures, t), this.textures[t] = null)
                    }, yt.prototype.setTexture = function(t, e) {
                        this.textures[t] = e
                    }, yt.prototype.initShader = function() {
                        var t = this.gl;
                        this.loadShaders2(), this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, "u_mvpMatrix"), this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag = t.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, "u_baseColor"), this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_texCoord"), this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture1"), this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag"), this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor")
                    }, yt.prototype.disposeShader = function() {
                        var t = this.gl;
                        this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null)
                    }, yt.prototype.compileShader = function(t, e) {
                        var i = this.gl,
                            a = e,
                            r = i.createShader(t);
                        if (null == r) return s._$Ji("_$L0 to create shader"), null;
                        if (i.shaderSource(r, a), i.compileShader(r), !i.getShaderParameter(r, i.COMPILE_STATUS)) {
                            var o = i.getShaderInfoLog(r);
                            return s._$Ji("_$L0 to compile shader : " + o), i.deleteShader(r), null
                        }
                        return r
                    }, yt.prototype.loadShaders2 = function() {
                        var t = this.gl;
                        if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return !1;
                        if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return !1;
                        if (this.vertShader = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"), !this.vertShader) return s._$Ji("Vertex shader compile _$li!"), !1;
                        if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"), !this.vertShaderOff) return s._$Ji("OffVertex shader compile _$li!"), !1;
                        if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"), !this.fragShader) return s._$Ji("Fragment shader compile _$li!"), !1;
                        if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"), !this.fragShaderOff) return s._$Ji("OffFragment shader compile _$li!"), !1;
                        if (t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(this.shaderProgram), t.linkProgram(this.shaderProgramOff), !t.getProgramParameter(this.shaderProgram, t.LINK_STATUS)) {
                            var e = t.getProgramInfoLog(this.shaderProgram);
                            return s._$Ji("_$L0 to link program: " + e), this.vertShader && (t.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), !1
                        }
                        return !0
                    }, yt.prototype.createFramebuffer = function() {
                        var t = this.gl,
                            e = ut.clippingMaskBufferSize,
                            i = t.createFramebuffer();
                        t.bindFramebuffer(t.FRAMEBUFFER, i);
                        var a = t.createRenderbuffer();
                        t.bindRenderbuffer(t.RENDERBUFFER, a), t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, e, e), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, a);
                        var r = t.createTexture();
                        return t.bindTexture(t.TEXTURE_2D, r), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, e, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), ut.fTexture[this.glno] = r, {
                            framebuffer: i,
                            renderbuffer: a,
                            texture: ut.fTexture[this.glno]
                        }
                    }, $t.prototype._$fP = function() {
                        var t, e, i, a = this._$ST();
                        if (0 == (128 & a)) return 255 & a;
                        if (0 == (128 & (t = this._$ST()))) return (127 & a) << 7 | 127 & t;
                        if (0 == (128 & (e = this._$ST()))) return (127 & a) << 14 | (127 & t) << 7 | 255 & e;
                        if (0 == (128 & (i = this._$ST()))) return (127 & a) << 21 | (127 & t) << 14 | (127 & e) << 7 | 255 & i;
                        throw new lt("_$L _$0P  _")
                    }, $t.prototype.getFormatVersion = function() {
                        return this._$S2
                    }, $t.prototype._$gr = function(t) {
                        this._$S2 = t
                    }, $t.prototype._$3L = function() {
                        return this._$fP()
                    }, $t.prototype._$mP = function() {
                        return this._$zT(), this._$F += 8, this._$T.getFloat64(this._$F - 8)
                    }, $t.prototype._$_T = function() {
                        return this._$zT(), this._$F += 4, this._$T.getFloat32(this._$F - 4)
                    }, $t.prototype._$6L = function() {
                        return this._$zT(), this._$F += 4, this._$T.getInt32(this._$F - 4)
                    }, $t.prototype._$ST = function() {
                        return this._$zT(), this._$T.getInt8(this._$F++)
                    }, $t.prototype._$9T = function() {
                        return this._$zT(), this._$F += 2, this._$T.getInt16(this._$F - 2)
                    }, $t.prototype._$2T = function() {
                        throw this._$zT(), this._$F += 8, new lt("_$L _$q read long")
                    }, $t.prototype._$po = function() {
                        return this._$zT(), 0 != this._$T.getInt8(this._$F++)
                    };
                    var At = !0;

                    function xt() {}

                    function wt(e) {
                        t || (this._$e0 = null, this._$IP = null, this._$Us = null, this._$7s = null, this._$IS = [!1], this._$VS = null, this._$AT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._$e0 = e)
                    }

                    function St() {}
                    $t.prototype._$bT = function() {
                        this._$zT();
                        var t = this._$3L(),
                            e = null;
                        if (At) try {
                            var i = new ArrayBuffer(2 * t);
                            e = new Uint16Array(i);
                            for (var a = 0; a < t; ++a) e[a] = this._$T.getUint8(this._$F++);
                            return String.fromCharCode.apply(null, e)
                        } catch (t) {
                            At = !1
                        }
                        try {
                            var r = new Array;
                            if (null == e)
                                for (a = 0; a < t; ++a) r[a] = this._$T.getUint8(this._$F++);
                            else
                                for (a = 0; a < t; ++a) r[a] = e[a];
                            return String.fromCharCode.apply(null, r)
                        } catch (t) {
                            console.log("read utf8 / _$rT _$L0 !! : " + t)
                        }
                    }, $t.prototype._$cS = function() {
                        this._$zT();
                        for (var t = this._$3L(), e = new Int32Array(t), i = 0; i < t; i++) e[i] = this._$T.getInt32(this._$F), this._$F += 4;
                        return e
                    }, $t.prototype._$Tb = function() {
                        this._$zT();
                        for (var t = this._$3L(), e = new Float32Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat32(this._$F), this._$F += 4;
                        return e
                    }, $t.prototype._$5b = function() {
                        this._$zT();
                        for (var t = this._$3L(), e = new Float64Array(t), i = 0; i < t; i++) e[i] = this._$T.getFloat64(this._$F), this._$F += 8;
                        return e
                    }, $t.prototype._$nP = function() {
                        return this._$Jb(-1)
                    }, $t.prototype._$Jb = function(t) {
                        if (this._$zT(), t < 0 && (t = this._$3L()), t == O._$7P) {
                            var e = this._$6L();
                            if (0 <= e && e < this._$Ko.length) return this._$Ko[e];
                            throw new lt("_$sL _$4i @_$m0")
                        }
                        var i = this._$4b(t);
                        return this._$Ko.push(i), i
                    }, $t.prototype._$4b = function(t) {
                        if (0 == t) return null;
                        if (50 == t) {
                            var e = this._$bT();
                            return E.getID(e)
                        }
                        if (51 == t) return e = this._$bT(), bt.getID(e);
                        if (134 == t) return e = this._$bT(), l.getID(e);
                        if (60 == t) return e = this._$bT(), c.getID(e);
                        if (t >= 48) {
                            var i = O._$9o(t);
                            return null != i ? (i._$F0(this), i) : null
                        }
                        switch (t) {
                            case 1:
                                return this._$bT();
                            case 10:
                                return new o(this._$6L(), !0);
                            case 11:
                                return new $(this._$mP(), this._$mP(), this._$mP(), this._$mP());
                            case 12:
                                return new $(this._$_T(), this._$_T(), this._$_T(), this._$_T());
                            case 13:
                                return new x(this._$mP(), this._$mP());
                            case 14:
                                return new x(this._$_T(), this._$_T());
                            case 15:
                                for (var a = this._$3L(), r = new Array(a), n = 0; n < a; n++) r[n] = this._$nP();
                                return r;
                            case 17:
                                return new B(this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP(), this._$mP());
                            case 21:
                                return new h(this._$6L(), this._$6L(), this._$6L(), this._$6L());
                            case 22:
                                return new ft(this._$6L(), this._$6L());
                            case 23:
                                throw new Error("_$L _$ro ");
                            case 16:
                            case 25:
                                return this._$cS();
                            case 26:
                                return this._$5b();
                            case 27:
                                return this._$Tb();
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 18:
                            case 19:
                            case 20:
                            case 24:
                            case 28:
                                throw new lt("_$6 _$q : _$nP() of 2-9 ,18,19,20,24,28 : " + t);
                            default:
                                throw new lt("_$6 _$q : _$nP() NO _$i : " + t)
                        }
                    }, $t.prototype._$8L = function() {
                        return 0 == this._$hL ? this._$v0 = this._$ST() : 8 == this._$hL && (this._$v0 = this._$ST(), this._$hL = 0), 1 == (this._$v0 >> 7 - this._$hL++ & 1)
                    }, $t.prototype._$zT = function() {
                        0 != this._$hL && (this._$hL = 0)
                    }, xt._$2S = Math.PI / 180, xt._$bS = Math.PI / 180, xt._$wS = 180 / Math.PI, xt._$NS = 180 / Math.PI, xt.PI_F = Math.PI, xt._$kT = [0, .012368, .024734, .037097, .049454, .061803, .074143, .086471, .098786, .111087, .12337, .135634, .147877, .160098, .172295, .184465, .196606, .208718, .220798, .232844, .244854, .256827, .268761, .280654, .292503, .304308, .316066, .327776, .339436, .351044, .362598, .374097, .385538, .396921, .408243, .419502, .430697, .441826, .452888, .463881, .474802, .485651, .496425, .507124, .517745, .528287, .538748, .549126, .559421, .56963, .579752, .589785, .599728, .609579, .619337, .629, .638567, .648036, .657406, .666676, .675843, .684908, .693867, .70272, .711466, .720103, .72863, .737045, .745348, .753536, .76161, .769566, .777405, .785125, .792725, .800204, .807561, .814793, .821901, .828884, .835739, .842467, .849066, .855535, .861873, .868079, .874153, .880093, .885898, .891567, .897101, .902497, .907754, .912873, .917853, .922692, .92739, .931946, .936359, .940629, .944755, .948737, .952574, .956265, .959809, .963207, .966457, .96956, .972514, .97532, .977976, .980482, .982839, .985045, .987101, .989006, .990759, .992361, .993811, .995109, .996254, .997248, .998088, .998776, .999312, .999694, .999924, 1], xt._$92 = function(t, e) {
                        var i = Math.atan2(t[1], t[0]),
                            a = Math.atan2(e[1], e[0]);
                        return xt._$tS(i, a)
                    }, xt._$tS = function(t, e) {
                        for (var i = t - e; i < -Math.PI;) i += 2 * Math.PI;
                        for (; i > Math.PI;) i -= 2 * Math.PI;
                        return i
                    }, xt._$9 = function(t) {
                        return Math.sin(t)
                    }, xt.fcos = function(t) {
                        return Math.cos(t)
                    }, wt.prototype._$u2 = function() {
                        return this._$IS[0]
                    }, wt.prototype._$yo = function() {
                        return this._$AT && !this._$IS[0]
                    }, wt.prototype._$GT = function() {
                        return this._$e0
                    }, St._$W2 = 0, St.SYSTEM_INFO = null, St.USER_AGENT = navigator.userAgent, St.isIPhone = function() {
                        return St.SYSTEM_INFO || St.setup(), St.SYSTEM_INFO._isIPhone
                    }, St.isIOS = function() {
                        return St.SYSTEM_INFO || St.setup(), St.SYSTEM_INFO._isIPhone || St.SYSTEM_INFO._isIPad
                    }, St.isAndroid = function() {
                        return St.SYSTEM_INFO || St.setup(), St.SYSTEM_INFO._isAndroid
                    }, St.getOSVersion = function() {
                        return St.SYSTEM_INFO || St.setup(), St.SYSTEM_INFO.version
                    }, St.getOS = function() {
                        return St.SYSTEM_INFO || St.setup(), St.SYSTEM_INFO._isIPhone || St.SYSTEM_INFO._isIPad ? "iOS" : St.SYSTEM_INFO._isAndroid ? "Android" : "_$Q0 OS"
                    }, St.setup = function() {
                        var t, e = St.USER_AGENT;

                        function i(t, e) {
                            for (var i = t.substring(e).split(/[ _,;\.]/), a = 0, r = 0; r <= 2 && !isNaN(i[r]); r++) {
                                var o = parseInt(i[r]);
                                if (o < 0 || o > 999) {
                                    s._$li("err : " + o + " @UtHtml5.setup()"), a = 0;
                                    break
                                }
                                a += o * Math.pow(1e3, 2 - r)
                            }
                            return a
                        }
                        var a = St.SYSTEM_INFO = {
                            userAgent: e
                        };
                        if ((t = e.indexOf("iPhone OS ")) >= 0) a.os = "iPhone", a._isIPhone = !0, a.version = i(e, t + "iPhone OS ".length);
                        else if ((t = e.indexOf("iPad")) >= 0) {
                            if ((t = e.indexOf("CPU OS")) < 0) return void s._$li(" err : " + e + " @UtHtml5.setup()");
                            a.os = "iPad", a._isIPad = !0, a.version = i(e, t + "CPU OS ".length)
                        } else(t = e.indexOf("Android")) >= 0 ? (a.os = "Android", a._isAndroid = !0, a.version = i(e, t + "Android ".length)) : (a.os = "-", a.version = -1)
                    }, window.UtSystem = C, window.UtDebug = s, window.LDTransform = mt, window.LDGL = ot, window.Live2D = ut, window.Live2DModelWebGL = pt, window.Live2DModelJS = J, window.Live2DMotion = Q, window.MotionQueueManager = gt, window.PhysicsHair = f, window.AMotion = n, window.PartsDataID = l, window.DrawDataID = E, window.BaseDataID = bt, window.ParamID = c, ut.init(), t = !1
                }()
            },
            671: (t, e, i) => {
                "use strict";
                i(3413);
                var a = i(8666),
                    r = void 0;

                function o() {}

                function n() {
                    this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.HIT_AREAS_CUSTOM = "hit_areas_custom", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.MOTION_EXPRESSION = "expression", this.json = {}
                }
                o.prototype.loadBytes = function(t, e) {
                    var i = new XMLHttpRequest;
                    i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        switch (i.status) {
                            case 200:
                                e(i.response);
                                break;
                            default:
                                console.error("Failed to load (" + i.status + ") : " + t)
                        }
                    }, i.send(null)
                }, o.prototype.loadString = function(t) {
                    this.loadBytes(t, (function(t) {
                        return t
                    }))
                }, o.prototype.loadLive2DModel = function(t, e) {
                    var i = null;
                    this.loadBytes(t, (function(t) {
                        i = Live2DModelWebGL.loadModel(t), e(i)
                    }))
                }, o.prototype.loadTexture = function(t, e, i, a) {
                    !0 === window.webpReady && (i = i.concat(".webp"));
                    let o = !1;
                    var n = new Image;
                    n.crossOrigin = "Anonymous", n.src = i, n.onload = function() {
                        var i = r,
                            o = i.createTexture();
                        if (!o) return console.error("Failed to generate gl texture name."), -1;
                        0 == t.isPremultipliedAlpha() && i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 1), i.activeTexture(i.TEXTURE0), i.bindTexture(i.TEXTURE_2D, o), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, n), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR_MIPMAP_NEAREST), i.generateMipmap(i.TEXTURE_2D), t.setTexture(e, o), o = null, "function" == typeof a && a()
                    }, n.onerror = function() {
                        !0 === window.webpReady && !1 === o ? (console.error("Failed to load WebP image: " + n.src + " Load origin file instead."), o = !0, n.src = i.replace(/\.webp$/, "")) : console.error("Failed to load image: " + n.src)
                    }
                }, o.prototype.jsonParseFromBytes = function(t) {
                    var e, i = new Uint8Array(t, 0, 3);
                    return e = 239 == i[0] && 187 == i[1] && 191 == i[2] ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode.apply(null, new Uint8Array(t)), JSON.parse(e)
                }, o.prototype.log = function(t) {}, n.prototype.loadModelSetting = function(t, e) {
                    var i = this;
                    a.Live2DFramework.getPlatformManager().loadBytes(t, (function(t) {
                        var a = String.fromCharCode.apply(null, new Uint8Array(t));
                        i.json = JSON.parse(a), e()
                    }))
                }, n.prototype.getTextureFile = function(t) {
                    return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t] ? null : this.json[this.TEXTURES][t]
                }, n.prototype.getModelFile = function() {
                    return this.json[this.MODEL]
                }, n.prototype.getTextureNum = function() {
                    return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length
                }, n.prototype.getHitAreaNum = function() {
                    return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length
                }, n.prototype.getHitAreaID = function(t) {
                    return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.ID]
                }, n.prototype.getHitAreaName = function(t) {
                    return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.NAME]
                }, n.prototype.getPhysicsFile = function() {
                    return this.json[this.PHYSICS]
                }, n.prototype.getPoseFile = function() {
                    return this.json[this.POSE]
                }, n.prototype.getExpressionNum = function() {
                    return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length
                }, n.prototype.getExpressionFile = function(t) {
                    return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.FILE]
                }, n.prototype.getExpressionName = function(t) {
                    return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.NAME]
                }, n.prototype.getLayout = function() {
                    return this.json[this.LAYOUT]
                }, n.prototype.getHitAreasCustom = function() {
                    return this.json[this.HIT_AREAS_CUSTOM]
                }, n.prototype.getInitParamNum = function() {
                    return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length
                }, n.prototype.getMotionNum = function(t) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] ? 0 : this.json[this.MOTION_GROUPS][t].length
                }, n.prototype.getMotionFile = function(t, e) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] ? null : this.json[this.MOTION_GROUPS][t][e][this.FILE]
                }, n.prototype.getMotionSound = function(t, e) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.SOUND] ? null : this.json[this.MOTION_GROUPS][t][e][this.SOUND]
                }, n.prototype.getMotionExpression = function(t, e) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.MOTION_EXPRESSION] ? null : this.json[this.MOTION_GROUPS][t][e][this.MOTION_EXPRESSION]
                }, n.prototype.getMotionFadeIn = function(t, e) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_IN] ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_IN]
                }, n.prototype.getMotionFadeOut = function(t, e) {
                    return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][e] || null == this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT] ? 1e3 : this.json[this.MOTION_GROUPS][t][e][this.FADE_OUT]
                }, n.prototype.getInitParamID = function(t) {
                    return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? null : this.json[this.INIT_PARAM][t][this.ID]
                }, n.prototype.getInitParamValue = function(t) {
                    return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? NaN : this.json[this.INIT_PARAM][t][this.VALUE]
                }, n.prototype.getInitPartsVisibleNum = function() {
                    return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length
                }, n.prototype.getInitPartsVisibleID = function(t) {
                    return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? null : this.json[this.INIT_PARTS_VISIBLE][t][this.ID]
                }, n.prototype.getInitPartsVisibleValue = function(t) {
                    return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? NaN : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE]
                };
                var s = i(4480),
                    u = i.n(s),
                    h = i(2759),
                    l = i.n(h);

                function c() {
                    a.L2DBaseModel.prototype.constructor.call(this), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = []
                }

                function _() {
                    this.models = [], this.count = -1, this.reloadFlg = !1, Live2D.init(), a.Live2DFramework.setPlatformManager(new o)
                }
                c.prototype = new a.L2DBaseModel, c.prototype.load = function(t, e, i) {
                    this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = e.substring(0, e.lastIndexOf("/") + 1), this.modelSetting = new n;
                    var a = this;
                    this.modelSetting.loadModelSetting(e, (function() {
                        var t = a.modelHomeDir + a.modelSetting.getModelFile();
                        a.loadModelData(t, (function(t) {
                            for (var e = 0; e < a.modelSetting.getTextureNum(); e++) {
                                if (/^https?:\/\/|^\/\//i.test(a.modelSetting.getTextureFile(e))) var r = a.modelSetting.getTextureFile(e);
                                else r = a.modelHomeDir + a.modelSetting.getTextureFile(e);
                                a.loadTexture(e, r, (function() {
                                    if (a.isTexLoaded) {
                                        if (a.modelSetting.getExpressionNum() > 0) {
                                            a.expressions = {};
                                            for (var t = 0; t < a.modelSetting.getExpressionNum(); t++) {
                                                var e = a.modelSetting.getExpressionName(t),
                                                    r = a.modelHomeDir + a.modelSetting.getExpressionFile(t);
                                                a.loadExpression(e, r)
                                            }
                                        } else a.expressionManager = null, a.expressions = {};
                                        if (a.eyeBlink, null != a.modelSetting.getPhysicsFile() ? a.loadPhysics(a.modelHomeDir + a.modelSetting.getPhysicsFile()) : a.physics = null, null != a.modelSetting.getPoseFile() ? a.loadPose(a.modelHomeDir + a.modelSetting.getPoseFile(), (function() {
                                                a.pose.updateParam(a.live2DModel)
                                            })) : a.pose = null, null != a.modelSetting.getLayout()) {
                                            var o = a.modelSetting.getLayout();
                                            null != o.width && a.modelMatrix.setWidth(o.width), null != o.height && a.modelMatrix.setHeight(o.height), null != o.x && a.modelMatrix.setX(o.x), null != o.y && a.modelMatrix.setY(o.y), null != o.center_x && a.modelMatrix.centerX(o.center_x), null != o.center_y && a.modelMatrix.centerY(o.center_y), null != o.top && a.modelMatrix.top(o.top), null != o.bottom && a.modelMatrix.bottom(o.bottom), null != o.left && a.modelMatrix.left(o.left), null != o.right && a.modelMatrix.right(o.right)
                                        }
                                        if (null != a.modelSetting.getHitAreasCustom()) {
                                            var n = a.modelSetting.getHitAreasCustom();
                                            null != n.head_x && (u().hit_areas_custom_head_x = n.head_x), null != n.head_y && (u().hit_areas_custom_head_y = n.head_y), null != n.body_x && (u().hit_areas_custom_body_x = n.body_x), null != n.body_y && (u().hit_areas_custom_body_y = n.body_y)
                                        } else u().hit_areas_custom_head_x = void 0, u().hit_areas_custom_head_y = void 0, u().hit_areas_custom_body_x = void 0, u().hit_areas_custom_body_y = void 0;
                                        for (t = 0; t < a.modelSetting.getInitParamNum(); t++) a.live2DModel.setParamFloat(a.modelSetting.getInitParamID(t), a.modelSetting.getInitParamValue(t));
                                        for (t = 0; t < a.modelSetting.getInitPartsVisibleNum(); t++) a.live2DModel.setPartsOpacity(a.modelSetting.getInitPartsVisibleID(t), a.modelSetting.getInitPartsVisibleValue(t));
                                        a.live2DModel.saveParam(), a.preloadMotionGroup(u().MOTION_GROUP_IDLE), a.preloadMotionGroup(u().MOTION_GROUP_SLEEPY), a.mainMotionManager.stopAllMotions(), a.setUpdating(!1), a.setInitialized(!0), "function" == typeof i && i()
                                    }
                                }))
                            }
                        }))
                    }))
                }, c.prototype.release = function(t) {
                    var e = a.Live2DFramework.getPlatformManager();
                    t.deleteTexture(e.texture)
                }, c.prototype.preloadMotionGroup = function(t) {
                    for (var e = this, i = 0; i < this.modelSetting.getMotionNum(t); i++) {
                        var a = this.modelSetting.getMotionFile(t, i);
                        this.loadMotion(a, this.modelHomeDir + a, (function(a) {
                            a.setFadeIn(e.modelSetting.getMotionFadeIn(t, i)), a.setFadeOut(e.modelSetting.getMotionFadeOut(t, i))
                        }))
                    }
                }, c.hasSleepyMotion = !0, c.prototype.update = function() {
                    if (null != this.live2DModel) {
                        var t = (UtSystem.getUserTimeMSec() - this.startTimeMSec) / 1e3 * 2 * Math.PI;
                        this.mainMotionManager.isFinished() && ("1" === sessionStorage.getItem("Sleepy") && this.hasSleepyMotion ? this.hasSleepyMotion = this.startRandomMotion(u().MOTION_GROUP_SLEEPY, u().PRIORITY_SLEEPY) : this.startRandomMotion(u().MOTION_GROUP_IDLE, u().PRIORITY_IDLE)), this.live2DModel.loadParam(), this.mainMotionManager.updateParam(this.live2DModel) || null != this.eyeBlink && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), null == this.expressionManager || null == this.expressions || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(t / 6.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(t / 3.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(t / 5.5345)), .5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(t / 15.5345)), .5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(.5 + .5 * Math.sin(t / 3.2345)), 1), null != this.physics && this.physics.updateParam(this.live2DModel), null == this.lipSync && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), null != this.pose && this.pose.updateParam(this.live2DModel), this.live2DModel.update()
                    } else u().DEBUG_LOG && console.error("Failed to update.")
                }, c.prototype.setRandomExpression = function() {
                    var t = [];
                    for (var e in this.expressions) t.push(e);
                    if (0 !== t.length) {
                        var i = parseInt(Math.random() * t.length);
                        this.setExpression(t[i])
                    }
                }, c.prototype.startRandomMotion = function(t, e) {
                    var i = this.modelSetting.getMotionNum(t),
                        a = parseInt(Math.random() * i);
                    return this.startMotion(t, a, e)
                }, c.prototype.startMotion = function(t, e, i) {
                    u().DEBUG_LOG && console.log(`[Live2Dv2] startMotion: ${t} No: ${e} Priority: ${i}`);
                    var a = this.modelSetting.getMotionFile(t, e);
                    const r = this.modelSetting.getMotionExpression(t, e);
                    if (null == a || "" === a) return u().DEBUG_LOG && console.error("[Live2Dv2] Motion undefined."), "motion undefined";
                    if (i === u().PRIORITY_FORCE) this.mainMotionManager.setReservePriority(i);
                    else if (!this.mainMotionManager.reserveMotion(i)) return void(u().DEBUG_LOG && console.log("[Live2Dv2] Motion is running."));
                    var o, n = this;
                    null == this.motions[t] ? this.loadMotion(null, this.modelHomeDir + a, (function(a) {
                        o = a, n.setFadeInFadeOut(t, e, i, o)
                    })) : (o = this.motions[t], n.setFadeInFadeOut(t, e, i, o)), null != r && this.setExpression(r)
                }, c.prototype.setFadeInFadeOut = function(t, e, i, a) {
                    var r = this.modelSetting.getMotionFile(t, e);
                    if (a.setFadeIn(this.modelSetting.getMotionFadeIn(t, e)), a.setFadeOut(this.modelSetting.getMotionFadeOut(t, e)), u().DEBUG_LOG && console.log("[Live2Dv2] Start motion : " + r), null == this.modelSetting.getMotionSound(t, e)) this.mainMotionManager.startMotionPrio(a, i);
                    else {
                        var o = this.modelSetting.getMotionSound(t, e),
                            n = document.createElement("audio");
                        n.src = this.modelHomeDir + o, u().DEBUG_LOG && console.log("[Live2Dv2] Start sound : " + o), n.play(), this.mainMotionManager.startMotionPrio(a, i)
                    }
                }, c.prototype.setExpression = function(t) {
                    var e = this.expressions[t];
                    u().DEBUG_LOG && console.log("[Live2Dv2] Expression : " + t), this.expressionManager.startMotion(e, !1)
                }, c.prototype.draw = function(t) {
                    l().push(), l().multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = l().getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), l().pop()
                }, c.prototype.hitTest = function(t, e, i) {
                    for (var a = this.modelSetting.getHitAreaNum(), r = 0; r < a; r++)
                        if (t == this.modelSetting.getHitAreaName(r)) {
                            var o = this.modelSetting.getHitAreaID(r);
                            return this.hitTestSimple(o, e, i)
                        } return !1
                }, c.prototype.hitTestCustom = function(t, e, i) {
                    return "head" == t ? this.hitTestSimpleCustom(u().hit_areas_custom_head_x, u().hit_areas_custom_head_y, e, i) : "body" == t && this.hitTestSimpleCustom(u().hit_areas_custom_body_x, u().hit_areas_custom_body_y, e, i)
                }, _.prototype.createModel = function() {
                    var t = new c;
                    return this.models.push(t), t
                }, _.prototype.changeModel = function(t, e) {
                    this.reloadFlg && (this.reloadFlg = !1, this.releaseModel(0, t), this.createModel(), this.models[0].load(t, e))
                }, _.prototype.getModel = function(t) {
                    return t >= this.models.length ? null : this.models[t]
                }, _.prototype.releaseModel = function(t, e) {
                    this.models.length <= t || (this.models[t].release(e), delete this.models[t], this.models.splice(t, 1))
                }, _.prototype.numModels = function() {
                    return this.models.length
                }, _.prototype.setDrag = function(t, e) {
                    for (var i = 0; i < this.models.length; i++) this.models[i].setDrag(t, e)
                }, _.prototype.maxScaleEvent = function() {
                    u().DEBUG_LOG && console.log("[Live2Dv2] Max scale event.");
                    for (var t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(u().MOTION_GROUP_PINCH_IN, u().PRIORITY_NORMAL)
                }, _.prototype.minScaleEvent = function() {
                    u().DEBUG_LOG && console.log("[Live2Dv2] Min scale event.");
                    for (var t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(u().MOTION_GROUP_PINCH_OUT, u().PRIORITY_NORMAL)
                }, _.prototype.tapEvent = function(t, e) {
                    u().DEBUG_LOG && console.log("[Live2Dv2] tapEvent view x:" + t + " y:" + e);
                    const i = {
                            head: u().HIT_AREA_HEAD,
                            body: u().HIT_AREA_BODY,
                            face: u().HIT_AREA_FACE,
                            breast: u().HIT_AREA_BREAST,
                            belly: u().HIT_AREA_BELLY,
                            leg: u().HIT_AREA_LEG
                        },
                        a = {
                            head: u().HIT_AREA_CUSTOM_HEAD,
                            body: u().HIT_AREA_CUSTOM_BODY
                        },
                        r = {
                            idle: u().MOTION_GROUP_IDLE,
                            head: u().MOTION_GROUP_FLICK_HEAD,
                            face: u().MOTION_GROUP_TAP_FACE,
                            body: u().MOTION_GROUP_TAP_BODY,
                            breast: u().MOTION_GROUP_TAP_BREAST,
                            belly: u().MOTION_GROUP_TAP_BELLY,
                            leg: u().MOTION_GROUP_TAP_LEG,
                            sleepy: u().MOTION_GROUP_SLEEPY,
                            shake: u().MOTION_GROUP_SHAKE
                        };
                    for (let a = 0; a < this.models.length; a++) this.models[a].hitTest(i.face, t, e) && (u().DEBUG_LOG && console.log("[Live2Dv2] Tap face."), this.models[a].setRandomExpression());
                    for (let o = 0; o < this.models.length; o++) {
                        let n = !1;
                        for (let a in i) this.models[o].hitTest(i[a], t, e) && (u().DEBUG_LOG && console.log(`[Live2Dv2] Tap ${a}.`), this.models[o].startRandomMotion(r[a], u().PRIORITY_NORMAL), n = !0);
                        if (!n)
                            for (let i in a) this.models[o].hitTestCustom(a[i], t, e) && (u().DEBUG_LOG && console.log(`[Live2Dv2] Tap Custom ${i}.`), this.models[o].startRandomMotion(r[i], u().PRIORITY_NORMAL))
                    }
                    return !0
                }, window.navigator.platform.toLowerCase();
                const f = new _;
                let p = !1,
                    g = null,
                    d = null,
                    m = null,
                    b = null,
                    y = null,
                    v = null,
                    q = !1,
                    $ = 0,
                    A = 0,
                    x = .5;

                function w(t, e, i) {
                    if (e.x < i.left + i.width && e.y < i.top + i.height && e.x > i.left && e.y > i.top) return e;
                    let a = t.x - e.x,
                        r = t.y - e.y;

                    function o(t, e) {
                        return 180 * Math.acos((i = {
                            x: 0,
                            y: 1
                        }, a = function(t, e) {
                            let i = Math.sqrt(t * t + e * e);
                            return {
                                x: t / i,
                                y: e / i
                            }
                        }(t, e), i.x * a.x + i.y * a.y)) / Math.PI;
                        var i, a
                    }
                    let n = o(a, r);
                    e.x < t.x && (n = 360 - n);
                    let s = 360 - o(i.left - t.x, -1 * (i.top - t.y)),
                        u = 360 - o(i.left - t.x, -1 * (i.top + i.height - t.y)),
                        h = o(i.left + i.width - t.x, -1 * (i.top - t.y)),
                        l = o(i.left + i.width - t.x, -1 * (i.top + i.height - t.y)),
                        c = r / a,
                        _ = {};
                    if (n < h) {
                        let e = i.top - t.y,
                            a = e / c;
                        _ = {
                            y: t.y + e,
                            x: t.x + a
                        }
                    } else if (n < l) {
                        let e = i.left + i.width - t.x,
                            a = e * c;
                        _ = {
                            y: t.y + a,
                            x: t.x + e
                        }
                    } else if (n < u) {
                        let e = i.top + i.height - t.y,
                            a = e / c;
                        _ = {
                            y: t.y + e,
                            x: t.x + a
                        }
                    } else if (n < s) {
                        let e = t.x - i.left,
                            a = e * c;
                        _ = {
                            y: t.y - a,
                            x: t.x - e
                        }
                    } else {
                        let e = i.top - t.y,
                            a = e / c;
                        _ = {
                            y: t.y + e,
                            x: t.x + a
                        }
                    }
                    return _
                }

                function S(t) {
                    q = !0;
                    let e = d.getBoundingClientRect(),
                        i = I(t.clientX - e.left),
                        a = E(t.clientY - e.top),
                        r = w({
                            x: e.left + e.width / 2,
                            y: e.top + e.height * x
                        }, {
                            x: t.clientX,
                            y: t.clientY
                        }, e),
                        o = T(r.x - e.left),
                        n = D(r.y - e.top);
                    u().DEBUG_MOUSE_LOG && console.log("[Live2Dv2] onMouseMove device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + o + " y:" + n + ")"), $ = i, A = a, m.setPoint(o, n)
                }

                function L() {
                    q && (q = !1), m.setPoint(0, 0)
                }

                function P() {
                    u().DEBUG_LOG && console.log("[Live2Dv2] Set Session Storage: Sleepy = 1."), sessionStorage.setItem("Sleepy", "1")
                }

                function C(t) {
                    if ("mousewheel" == t.type);
                    else if ("mousedown" == t.type) ! function(t) {
                        q = !0;
                        let e = d.getBoundingClientRect(),
                            i = I(t.clientX - e.left),
                            a = E(t.clientY - e.top),
                            r = w({
                                x: e.left + e.width / 2,
                                y: e.top + e.height * x
                            }, {
                                x: t.clientX,
                                y: t.clientY
                            }, e),
                            o = T(r.x - e.left),
                            n = D(r.y - e.top);
                        u().DEBUG_MOUSE_LOG && console.log("[Live2Dv2] onMouseDown device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + o + " y:" + n + ")"), $ = i, A = a, f.tapEvent(o, n)
                    }(t);
                    else if ("mousemove" == t.type) "1" === sessionStorage.getItem("Sleepy") && sessionStorage.setItem("Sleepy", "0"), S(t);
                    else if ("mouseup" == t.type) {
                        if ("button" in t && 0 != t.button) return
                    } else if ("mouseout" == t.type) {
                        u().DEBUG_LOG && console.log("[Live2Dv2] Mouse out Window."), L();
                        var e = sessionStorage.getItem("SleepyTimer");
                        window.clearTimeout(e), e = window.setTimeout(P, 5e4), sessionStorage.setItem("SleepyTimer", e)
                    }
                }

                function M(t) {
                    var e = t.touches[0];
                    "touchstart" == t.type ? 1 == t.touches.length && S(e) : "touchmove" == t.type ? function(t) {
                        let e = d.getBoundingClientRect(),
                            i = I(t.clientX - e.left),
                            a = E(t.clientY - e.top),
                            r = w({
                                x: e.left + e.width / 2,
                                y: e.top + e.height * x
                            }, {
                                x: t.clientX,
                                y: t.clientY
                            }, e),
                            o = T(r.x - e.left),
                            n = D(r.y - e.top);
                        u().DEBUG_MOUSE_LOG && console.log("[Live2Dv2] onMouseMove device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + o + " y:" + n + ")"), q && ($ = i, A = a, m.setPoint(o, n))
                    }(e) : "touchend" == t.type && L()
                }

                function T(t) {
                    var e = v.transformX(t);
                    return b.invertTransformX(e)
                }

                function D(t) {
                    var e = v.transformY(t);
                    return b.invertTransformY(e)
                }

                function I(t) {
                    return v.transformX(t)
                }

                function E(t) {
                    return v.transformY(t)
                }
                window.live2dv2 = window.live2dv2 || {}, window.live2dv2.load = function(t, e, i) {
                    u().DEBUG_LOG = window.live2dv2.debug, u().DEBUG_DRAW_HIT_AREA = window.live2dv2.debug, u().DEBUG_MOUSE_LOG = window.live2dv2.debugMousemove, x = void 0 === i ? .5 : i,
                        function(t) {
                            d = document.getElementById(t), d.addEventListener && (window.addEventListener("click", C), window.addEventListener("mousedown", C), window.addEventListener("mousemove", C), window.addEventListener("mouseup", C), document.addEventListener("mouseout", C), window.addEventListener("touchstart", M), window.addEventListener("touchend", M), window.addEventListener("touchmove", M))
                        }(t),
                        function(t) {
                            let e = d.width,
                                i = d.height;
                            m = new a.L2DTargetPoint;
                            let o = i / e,
                                n = u().VIEW_LOGICAL_LEFT,
                                s = u().VIEW_LOGICAL_RIGHT,
                                h = -o,
                                c = o;
                            if (b = new a.L2DViewMatrix, b.setScreenRect(n, s, h, c), b.setMaxScreenRect(u().VIEW_LOGICAL_MAX_LEFT, u().VIEW_LOGICAL_MAX_RIGHT, u().VIEW_LOGICAL_MAX_BOTTOM, u().VIEW_LOGICAL_MAX_TOP), b.setMaxScale(u().VIEW_MAX_SCALE), b.setMinScale(u().VIEW_MIN_SCALE), y = new a.L2DMatrix44, y.multScale(1, e / i), v = new a.L2DMatrix44, v.multTranslate(-e / 2, -i / 2), v.multScale(2 / e, -2 / e), g = function() {
                                    for (var t = ["webgl", "experimental-webgl"], e = 0; e < t.length; e++) try {
                                        var i = d.getContext(t[e], {
                                            premultipliedAlpha: !0
                                        });
                                        if (i) return i
                                    } catch (t) {}
                                    return null
                                }(), r = g, !g) return console.error("Failed to create WebGL context."), void(window.WebGLRenderingContext && console.error("Your browser don't support WebGL, check https://get.webgl.org/ for futher information."));
                            window.Live2D.setGL(g), g.clearColor(0, 0, 0, 0),
                                function(t) {
                                    f.reloadFlg = !0, f.count++, f.changeModel(g, t)
                                }(t), p || (p = !0, function t() {
                                    ! function() {
                                        l().reset(), l().loadIdentity(), m.update(), f.setDrag(m.getX(), m.getY()), g.clear(g.COLOR_BUFFER_BIT), l().multMatrix(y.getArray()), l().multMatrix(b.getArray()), l().push();
                                        for (let t = 0; t < f.numModels(); t++) {
                                            let e = f.getModel(t);
                                            if (null == e) return;
                                            e.initialized && !e.updating && (e.update(), e.draw(g))
                                        }
                                        l().pop()
                                    }();
                                    let e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
                                    window.live2dv2.captureFrame && (window.live2dv2.captureFrame = !1, d.toBlob(window.downloadCap)), e(t, d)
                                }())
                        }(e)
                }, window.live2dv2.release = function() {
                    f.releaseModel(0, g), window.removeEventListener("click", C), window.removeEventListener("mousedown", C), window.removeEventListener("mousemove", C), window.removeEventListener("mouseup", C), document.removeEventListener("mouseout", C), window.removeEventListener("touchstart", M), window.removeEventListener("touchend", M), window.removeEventListener("touchmove", M)
                }
            }
        },
        e = {};

    function i(a) {
        if (e[a]) return e[a].exports;
        var r = e[a] = {
            exports: {}
        };
        return t[a].call(r.exports, r, r.exports, i), r.exports
    }
    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {
            a: e
        }), e
    }, i.d = (t, e) => {
        for (var a in e) i.o(e, a) && !i.o(t, a) && Object.defineProperty(t, a, {
            enumerable: !0,
            get: e[a]
        })
    }, i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), i.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i(2853), i(671)
})();