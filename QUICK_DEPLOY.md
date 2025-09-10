# 🚀 快速部署到 ZZK123-LANG.github.io

## 方法一：使用部署脚本（推荐）

### Windows用户
1. **双击运行** `deploy.bat` 文件
2. 脚本会自动完成所有部署步骤
3. 等待部署完成

### PowerShell用户
1. **右键点击** `deploy.ps1` 文件
2. 选择"使用PowerShell运行"
3. 如果提示执行策略，输入 `Y` 确认

## 方法二：手动部署

### 1. 访问GitHub仓库
- 打开：https://github.com/ZZK123-LANG/ZZK123-LANG.github.io
- 如果仓库不存在，点击"Create repository"

### 2. 上传文件
- 点击"uploading an existing file"
- 拖拽以下文件到上传区域：
  - ✅ `index.html`
  - ✅ `script.js`
  - ✅ `style.css`
  - ✅ `README.md`

### 3. 提交更改
- 填写提交信息：`Add 2025 parade quiz website`
- 点击"Commit changes"

### 4. 启用GitHub Pages
- 进入仓库设置（Settings）
- 找到"Pages"选项
- 选择"Deploy from a branch"
- 选择"main"分支
- 点击"Save"

## 🌐 访问网站

部署完成后，访问：**https://ZZK123-LANG.github.io**

## ⚠️ 重要提醒

1. **仓库名必须正确**：`ZZK123-LANG.github.io`
2. **用户名必须正确**：`ZZK123-LANG`
3. **等待时间**：部署后需要等待几分钟才能访问
4. **文件编码**：确保所有文件使用UTF-8编码

## 🔧 故障排除

### 如果部署失败
1. 检查网络连接
2. 确认GitHub账户权限
3. 检查仓库名是否正确
4. 等待几分钟后重试

### 如果网站无法访问
1. 确认GitHub Pages已启用
2. 检查仓库是否为公开
3. 等待DNS更新（最多24小时）

## 📞 需要帮助？

如果遇到问题，可以：
- 查看 `deploy_to_github.md` 获取详细说明
- 检查GitHub Pages文档
- 在仓库Issues中提问

---

**祝您部署成功！** 🎉

