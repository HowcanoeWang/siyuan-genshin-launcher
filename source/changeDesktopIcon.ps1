param(
    [string]$icoPath=''
)

$publiclink='C:\Users\Public\Desktop\SiYuan.lnk'

# Write-Output $publiclink $icoPath
$shell = New-Object -ComObject ("WScript.Shell")
$shortcut = $Shell.CreateShortcut($publiclink)
$Shortcut.IconLocation = $icoPath
$Shortcut.Save()