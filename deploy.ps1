# 2025年九月三号阅兵知识问答网站部署脚本
# PowerShell版本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "2025年九月三号阅兵知识问答网站部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查Git是否安装
Write-Host "正在检查Git是否安装..." -ForegroundColor Yellow
try {
    $gitVersion = git --version
    Write-Host "Git已安装：$gitVersion" -ForegroundColor Green
} catch {
    Write-Host "错误：未检测到Git，请先安装Git" -ForegroundColor Red
    Write-Host "下载地址：https://git-scm.com/" -ForegroundColor Yellow
    Read-Host "按任意键退出"
    exit 1
}

Write-Host ""

# 检查仓库是否存在
$repoPath = "ZZK123-LANG.github.io"
if (-not (Test-Path $repoPath)) {
    Write-Host "仓库不存在，正在克隆..." -ForegroundColor Yellow
    try {
        git clone https://github.com/ZZK123-LANG/ZZK123-LANG.github.io.git
        Write-Host "仓库克隆成功！" -ForegroundColor Green
    } catch {
        Write-Host "错误：无法克隆仓库，请检查网络连接和仓库地址" -ForegroundColor Red
        Read-Host "按任意键退出"
        exit 1
    }
} else {
    Write-Host "仓库已存在，正在更新..." -ForegroundColor Yellow
    Set-Location $repoPath
    git pull origin main
    Set-Location ..
}

Write-Host ""

# 复制文件
Write-Host "正在复制文件到仓库..." -ForegroundColor Yellow
$files = @("index.html", "script.js", "style.css", "README.md")

foreach ($file in $files) {
    if (Test-Path $file) {
        Copy-Item $file $repoPath\ -Force
        Write-Host "已复制：$file" -ForegroundColor Green
    } else {
        Write-Host "警告：文件 $file 不存在" -ForegroundColor Yellow
    }
}

Write-Host "文件复制完成！" -ForegroundColor Green
Write-Host ""

# 提交更改
Write-Host "正在提交更改..." -ForegroundColor Yellow
Set-Location $repoPath

try {
    git add .
    $commitMessage = "Update 2025 parade quiz website - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m $commitMessage
    git push origin main
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "🎉 部署成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "网站地址：https://ZZK123-LANG.github.io" -ForegroundColor Cyan
    Write-Host "请等待几分钟让GitHub Pages更新" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Green
    
    # 询问是否打开网站
    $openWebsite = Read-Host "是否现在打开网站？(y/n)"
    if ($openWebsite -eq "y" -or $openWebsite -eq "Y") {
        Start-Process "https://ZZK123-LANG.github.io"
    }
    
} catch {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ 部署失败！" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "请检查网络连接和GitHub凭据" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Red
}

Set-Location ..
Read-Host "按任意键退出"

