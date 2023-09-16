<h1 align="center">Genshin, Launch!</h1>
<p align="center">
    <img src="https://cdn.jsdelivr.net/gh/HowcanoeWang/siyuan-genshin-launcher/cover.png">
</p>

<div align="center">
This project replaces some files in the Siyuan installation directory, modifying the startup page and lock screen page to the UI style of Genshin Impact.

English | [简体中文](https://github.com/HowcanoeWang/siyuan-genshin-launcher/blob/main/README.md)

</div>

# Installation Notes

* <b style='color:red'>The copyright of the images, icons, music, and video clips used in this plugin belongs to miHoYo. This plugin is not an official feature of SiYuan Note, but was created by the plugin author for personal learning of front-end development. It is provided as teaching and learning purposes for plugin developers. All code and materials are publicly available for free, please do not use for other commercial purposes.</b>
* **This plugin achieves its functionality by replacing files in the installation directory, which will affect all workspaces!**</b>**
* Currently only supports Windows and MacOS
    * Windows requires administrator privileges for replacement.
    * The Linux version does not work after restarting due to AppImage running in a temporary folder each time.
    * The f\*\*king stupid file permission in the Android 11+ completely blocks this technical approach.
* Reinstalling SiYuan can solve all issues caused by this plugin.
    *  After reinstalling, need to re-run the plugin.
* Remember to enable the lock screen feature in `Settings` - `About` - `Access Authorization Code` for better experience.
    * The lock screen page has background music, but Chrome security permissions require manual click to trigger playback.
* Light and dark mode change according to local time (6:00 to 18:00 as light mode), following Genshin's logic rather than SiYuan's mode setting.
* The plugin also has the capability to automatically replace the application icon.    
  However, on Mac, due to icon caching, the changes may not take effect immediately and even after restart.     
  Please manually replace the icon by the following step:    
  <img src="https://cdn.jsdelivr.net/gh/HowcanoeWang/siyuan-genshin-launcher@main/imgs/macIconReplace.png">    
  Applications -> SiYuan.app -> (1) Get Info  (2) Show package contents -> Drag icon from package contents to icon area in info panel.

# Features

* [X] Startup page simulates Genshin Impact UI.
* [X] Lock screen page simulates Genshin Impact UI and changes with local time.
* [X] Loading page with Genshin Impact loading icon.
* [ ] Replace App Icon
* [X] Paimon as a virtual assistant.
    * [ ] Provide OnOff in setting
    * [ ] Allow drag by mouse
    * [ ] Allow mute


# References

* Genshin Impact UI icons：[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/collections/detail?cid=34264)
* Live2D character component：[Konata09/Live2dOnWeb (github.com)](https://github.com/Konata09/Live2dOnWeb)
* Paimon Live2D model：[根瘤菌rkzj (bilibili.com)](https://www.bilibili.com/video/BV1pA411j78k)
