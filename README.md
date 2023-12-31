<h1 align="center">源神，启动！</h1>
<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/HowcanoeWang/siyuan-genshin-launcher/cover.png">
</p>

<div align="center">
本项目通过替换思源安装目录下的部分文件，修改思源的启动页和锁屏页为原神的UI风格。

[English](https://github.com/HowcanoeWang/siyuan-genshin-launcher/blob/main/README_en_US.md) | 简体中文

</div>

# 功能

* [X] 启动页面仿原神UI
* [X] 锁屏页面仿原神UI，且跟随时间切换
* [X] 加载页面仿原神加载图标
* [X] 替换应用图标
* [x] 派蒙看板娘
    * [x] 设置中提供显示/隐藏开关
    * [x] 设置中提供静音开关
    * [x] 支持鼠标点击操作穿透模型

# 安装须知

* <b style='color:red'>此插件所使用的图片、图标、音乐和视频片段版权均归米哈游所有。该插件并非思源笔记的官方功能，是插件作者个人为学习前端开发而创建的，供插件开发者学习交流使用，所有代码和素材均无偿公开，请勿用于其他商业用途。</b>
* **此插件通过替换安装目录文件实现，会影响所有的工作空间。**
* 目前支持Windows端、MacOS端、和Linux端
  * Windows端需要管理员权限才可以实现替换(<b style='color:red'>默认为全局安装在<code>C:\Program Files</code>中</b>)。
  * Linux端仅支持`tar.gz`解压安装。   
    * AppImage每次运行都在临时文件夹内，故替换后重启不起效；   
    * 使用包管理器(apt-get, AUR)安装的，往往权限不足无法替换文件。
  * 安卓11以上版本的傻\*文件权限管理直接锁死了这条技术路线。
* 重装思源可以解决因这个插件引起的所有问题。但是重装后需要重新替换。
* 记得在 `设置`-`关于`-`访问授权码`，开启锁屏功能来得到更好的体验。
  * 锁屏页面是有背景音乐的，但是Chrome安全权限要求需要手动点击才能触发播放。
* 明亮和黑暗模式根据当前时间变化(6点-18点为明亮主题)，遵循原神的模式而非思源的明亮和黑暗模式设置。
* 该插件支持自动替换应用图标    
  <details>
    <summary>MacOS由于图标缓存，有时即使重启电脑也不生效。建议手动替换图标 (点击展开图片教程)：</summary>   
    <img src="https://cdn.jsdelivr.net/gh/HowcanoeWang/siyuan-genshin-launcher@main/imgs/macIconReplace.png">
  </details>
* 看板娘功能仅为临时使用，<b style='color:red'>不准备</b>提供更深度的功能定制如移动位置、更换模型等，更完善的功能请期待看板娘插件的更新。    
  <b style='color:red'>看板娘的渲染非常吃性能，不建议在低性能本或离电使用时开启</b>
  

# 参考资料

* 原神UI图标：[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/collections/detail?cid=34264)
* 看板娘js组件：[Konata09/Live2dOnWeb (github.com)](https://github.com/Konata09/Live2dOnWeb)
* 派蒙Live2D模型：[根瘤菌rkzj (bilibili.com)](https://www.bilibili.com/video/BV1pA411j78k)
