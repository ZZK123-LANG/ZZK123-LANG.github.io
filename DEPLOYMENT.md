# 部署说明

## 🚀 GitHub Pages 部署

### 方法一：直接上传到GitHub仓库

1. **创建GitHub仓库**
   - 登录GitHub
   - 点击"New repository"
   - 仓库名建议使用：`2025-parade-quiz` 或 `parade-quiz-2025`
   - 选择"Public"（公开仓库）
   - 勾选"Add a README file"

2. **上传文件**
   - 将以下文件上传到仓库根目录：
     - `index.html`
     - `script.js`
     - `style.css`
     - `README.md`

3. **启用GitHub Pages**
   - 进入仓库设置（Settings）
   - 找到"Pages"选项
   - 在"Source"中选择"Deploy from a branch"
   - 选择"main"分支
   - 点击"Save"

4. **访问网站**
   - 等待几分钟后，访问：`https://你的用户名.github.io/仓库名`

### 方法二：使用Git命令行

```bash
# 1. 克隆仓库
git clone https://github.com/你的用户名/仓库名.git
cd 仓库名

# 2. 复制文件
# 将 index.html, script.js, style.css, README.md 复制到仓库目录

# 3. 提交更改
git add .
git commit -m "Add 2025 parade quiz website"
git push origin main

# 4. 在GitHub上启用Pages功能
```

## 🌐 其他部署方式

### Netlify部署
1. 访问 [netlify.com](https://netlify.com)
2. 注册/登录账户
3. 点击"New site from Git"
4. 连接GitHub仓库
5. 设置构建命令（留空）
6. 设置发布目录（留空）
7. 点击"Deploy site"

### Vercel部署
1. 访问 [vercel.com](https://vercel.com)
2. 注册/登录账户
3. 点击"New Project"
4. 导入GitHub仓库
5. 点击"Deploy"

### 本地服务器部署
```bash
# 使用Python简单服务器
python -m http.server 8000

# 使用Node.js serve
npx serve .

# 使用Live Server (VS Code扩展)
# 右键index.html -> Open with Live Server
```

## 📝 注意事项

1. **文件路径**：确保所有文件都在同一目录下
2. **文件名**：不要修改文件名，特别是`index.html`
3. **编码**：确保文件使用UTF-8编码
4. **HTTPS**：GitHub Pages自动提供HTTPS支持

## 🔧 自定义配置

### 修改仓库名
如果仓库名不是`2025-parade-quiz`，需要修改访问URL：
- 原URL：`https://用户名.github.io/2025-parade-quiz`
- 新URL：`https://用户名.github.io/新仓库名`

### 自定义域名
1. 在仓库设置中添加自定义域名
2. 在域名服务商处添加CNAME记录
3. 等待DNS生效

## 📊 访问统计

GitHub Pages提供基本的访问统计：
- 进入仓库设置
- 找到"Pages"选项
- 查看访问统计

## 🛠️ 故障排除

### 常见问题

1. **网站无法访问**
   - 检查仓库是否为公开
   - 确认GitHub Pages已启用
   - 等待几分钟让更改生效

2. **样式不显示**
   - 检查CSS文件路径
   - 确认文件编码为UTF-8

3. **JavaScript不工作**
   - 检查浏览器控制台错误
   - 确认JavaScript文件路径正确

### 联系支持
如果遇到问题，可以：
- 查看GitHub Pages文档
- 在仓库Issues中提问
- 联系技术支持

---

**祝您部署成功！** 🎉

