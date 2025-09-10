# Deploy script for ZZK123-LANG.github.io
Write-Host "Starting deployment to ZZK123-LANG.github.io" -ForegroundColor Green

# Check if repository exists
if (-not (Test-Path "ZZK123-LANG.github.io")) {
    Write-Host "Cloning repository..." -ForegroundColor Yellow
    git clone https://github.com/ZZK123-LANG/ZZK123-LANG.github.io.git
}

# Copy files
Write-Host "Copying files..." -ForegroundColor Yellow
Copy-Item "index.html" "ZZK123-LANG.github.io\" -Force
Copy-Item "script.js" "ZZK123-LANG.github.io\" -Force
Copy-Item "style.css" "ZZK123-LANG.github.io\" -Force
Copy-Item "README.md" "ZZK123-LANG.github.io\" -Force

# Commit changes
Set-Location "ZZK123-LANG.github.io"
git add .
git commit -m "Update 2025 parade quiz website"
git push origin main

Write-Host "Deployment complete! Website: https://ZZK123-LANG.github.io" -ForegroundColor Green
Set-Location ..

Read-Host "Press any key to exit"

