mkdir MyIcon.iconset
sips -z 16 16     iconMac.png --out MyIcon.iconset/icon_16x16.png
sips -z 32 32     iconMac.png --out MyIcon.iconset/icon_16x16@2x.png
sips -z 32 32     iconMac.png --out MyIcon.iconset/icon_32x32.png
sips -z 64 64     iconMac.png --out MyIcon.iconset/icon_32x32@2x.png
sips -z 128 128   iconMac.png --out MyIcon.iconset/icon_128x128.png
sips -z 256 256   iconMac.png --out MyIcon.iconset/icon_128x128@2x.png
sips -z 256 256   iconMac.png --out MyIcon.iconset/icon_256x256.png
sips -z 512 512   iconMac.png --out MyIcon.iconset/icon_256x256@2x.png
sips -z 512 512   iconMac.png --out MyIcon.iconset/icon_512x512.png
cp iconMac.png MyIcon.iconset/icon_512x512@2x.png
iconutil -c icns MyIcon.iconset
rm -R MyIcon.iconset