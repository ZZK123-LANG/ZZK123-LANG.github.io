# 部署到 ZZK123-LANG.github.io 的详细步骤

## 🚀 部署步骤

### 方法一：通过GitHub网页界面部署（推荐）

#### 1. 创建或访问仓库
- 访问：https://github.com/ZZK123-LANG/ZZK123-LANG.github.io
- 如果仓库不存在，点击"Create repository"
- 仓库名必须是：`ZZK123-LANG.github.io`
- 选择"Public"（公开）
- 勾选"Add a README file"

#### 2. 上传文件
- 点击"uploading an existing file"
- 将以下文件拖拽到上传区域：
  - `index.html`
  - `script.js`
  - `style.css`
  - `README.md`
- 在底部填写提交信息：`Add 2025 parade quiz website`
- 点击"Commit changes"

#### 3. 启用GitHub Pages
- 进入仓库设置：点击"Settings"标签
- 在左侧菜单找到"Pages"
- 在"Source"部分选择"Deploy from a branch"
- 选择"main"分支
- 选择"/ (root)"文件夹
- 点击"Save"

#### 4. 访问网站
- 等待几分钟后，访问：https://ZZK123-LANG.github.io
- 网站将自动显示你的阅兵知识问答网站

### 方法二：使用Git命令行部署

#### 1. 安装Git
如果还没有安装Git，请先下载安装：https://git-scm.com/

#### 2. 克隆仓库
```bash
git clone https://github.com/ZZK123-LANG/ZZK123-LANG.github.io.git
cd ZZK123-LANG.github.io
```

#### 3. 复制文件
将以下文件复制到仓库目录：
- `index.html`
- `script.js`
- `style.css`
- `README.md`

#### 4. 提交更改
```bash
git add .
git commit -m "Add 2025 parade quiz website"
git push origin main
```

#### 5. 启用GitHub Pages
- 在GitHub网页上进入仓库设置
- 找到"Pages"选项
- 启用Pages功能

## 📝 重要注意事项

### 仓库命名规则
- 仓库名必须是：`ZZK123-LANG.github.io`
- 用户名必须是：`ZZK123-LANG`
- 这是GitHub Pages的特殊命名规则

### 文件要求
- `index.html` 必须在根目录
- 所有文件使用UTF-8编码
- 确保文件路径正确

### 访问地址
- 主站：https://ZZK123-LANG.github.io
- 如果仓库名不同，访问地址会相应变化

## 🔧 故障排除

### 常见问题

1. **404错误**
   - 检查仓库名是否正确
   - 确认GitHub Pages已启用
   - 等待几分钟让更改生效

2. **样式不显示**
   - 检查CSS文件是否上传
   - 确认文件路径正确

3. **JavaScript不工作**
   - 检查浏览器控制台
   - 确认JavaScript文件路径

### 检查部署状态
- 在仓库设置中查看Pages状态
- 绿色勾号表示部署成功
- 黄色警告表示正在部署

## 📊 后续管理

### 更新网站
1. 修改本地文件
2. 重新上传到GitHub
3. 网站会自动更新

### 查看访问统计
- 在仓库设置中查看Pages统计
- 了解网站访问情况

### 自定义域名（可选）
1. 在Pages设置中添加自定义域名
2. 在域名服务商处配置DNS
3. 等待DNS生效

## 🎉 部署完成

部署成功后，你的2025年九月三号阅兵知识问答网站将在以下地址访问：
**https://ZZK123-LANG.github.io**

网站特点：
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 自动备份
- ✅ 版本控制

---

**祝您部署成功！** 🚀

