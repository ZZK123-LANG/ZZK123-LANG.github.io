@echo off
echo ========================================
echo 2025年九月三号阅兵知识问答网站部署脚本
echo ========================================
echo.

echo 正在检查Git是否安装...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo 错误：未检测到Git，请先安装Git
    echo 下载地址：https://git-scm.com/
    pause
    exit /b 1
)

echo Git已安装，版本信息：
git --version
echo.

echo 正在检查仓库是否存在...
if not exist "ZZK123-LANG.github.io" (
    echo 仓库不存在，正在克隆...
    git clone https://github.com/ZZK123-LANG/ZZK123-LANG.github.io.git
    if %errorlevel% neq 0 (
        echo 错误：无法克隆仓库，请检查网络连接和仓库地址
        pause
        exit /b 1
    )
) else (
    echo 仓库已存在，正在更新...
    cd ZZK123-LANG.github.io
    git pull origin main
    cd ..
)

echo.
echo 正在复制文件到仓库...
copy index.html ZZK123-LANG.github.io\ >nul
copy script.js ZZK123-LANG.github.io\ >nul
copy style.css ZZK123-LANG.github.io\ >nul
copy README.md ZZK123-LANG.github.io\ >nul

echo 文件复制完成！
echo.

echo 正在提交更改...
cd ZZK123-LANG.github.io
git add .
git commit -m "Update 2025 parade quiz website - %date% %time%"
git push origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo 🎉 部署成功！
    echo ========================================
    echo 网站地址：https://ZZK123-LANG.github.io
    echo 请等待几分钟让GitHub Pages更新
    echo ========================================
) else (
    echo.
    echo ========================================
    echo ❌ 部署失败！
    echo ========================================
    echo 请检查网络连接和GitHub凭据
    echo ========================================
)

cd ..
pause

