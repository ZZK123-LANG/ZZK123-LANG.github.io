# 简化的部署脚本
Write-Host "开始部署到 ZZK123-LANG.github.io" -ForegroundColor Green

# 检查仓库是否存在
if (-not (Test-Path "ZZK123-LANG.github.io")) {
    Write-Host "正在克隆仓库..." -ForegroundColor Yellow
    git clone https://github.com/ZZK123-LANG/ZZK123-LANG.github.io.git
}

# 复制文件
Write-Host "正在复制文件..." -ForegroundColor Yellow
Copy-Item "index.html" "ZZK123-LANG.github.io\" -Force
Copy-Item "script.js" "ZZK123-LANG.github.io\" -Force
Copy-Item "style.css" "ZZK123-LANG.github.io\" -Force
Copy-Item "README.md" "ZZK123-LANG.github.io\" -Force

# 提交更改
Set-Location "ZZK123-LANG.github.io"
git add .
git commit -m "Update 2025 parade quiz website"
git push origin main

Write-Host "部署完成！网站地址：https://ZZK123-LANG.github.io" -ForegroundColor Green
Set-Location ..

Read-Host "按任意键退出"

