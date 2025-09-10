# Cursor Installation Guide

## 📥 Step 1: Download Cursor

### **Official Download**
1. Visit: https://cursor.sh/
2. Click "Download for Windows"
3. Download the `.exe` installer file

### **Alternative Download (if official site is slow)**
- **GitHub Releases**: https://github.com/getcursor/cursor/releases
- Download the latest Windows `.exe` file

## 🔧 Step 2: Installation

### **Basic Installation**
1. **Run the installer** as Administrator
2. **Accept the license agreement**
3. **Choose installation location** (recommend: `C:\Users\[YourName]\AppData\Local\Programs\Cursor`)
4. **Select components**:
   - ✅ Cursor Editor
   - ✅ Desktop Shortcut
   - ✅ Add to PATH
5. **Click Install**

### **Post-Installation**
1. **Restart your computer** (recommended)
2. **Launch Cursor** from Start Menu or Desktop

## ⚙️ Step 3: Basic Settings (Optional)

### **Language Settings (Optional)**
If you prefer Chinese interface:
1. Open Cursor
2. Press `Ctrl + Shift + P`
3. Type "Configure Display Language"
4. Select "Chinese (Simplified)"
5. Restart Cursor

**Note**: This step is completely optional. You can use Cursor in English if you prefer.

## 🤖 Step 4: AI Assistant Setup

### **First-Time Setup**
1. **Sign in to Cursor**:
   - **Option 1**: Click "Log in" button in the AI chat interface
   - **Option 2**: Go to Settings (gear icon) → Sign In
   - **Option 3**: Look for "Sign In" button in the bottom-left corner
   - Use your GitHub account (recommended)
   - Or create a new account

2. **Verify Sign-In Success**:
   - **"Agents" button** should be available
   - **AI chat** should work without asking you to log in

3. **AI Model Selection**:
   - Cursor automatically uses the best available model
   - No additional configuration needed

## 🐍 Step 5: Python Environment Setup

### **Install Python**
1. Download Python 3.9+ from: https://www.python.org/downloads/
2. **Important**: Check "Add Python to PATH" during installation
3. Verify installation: Open Command Prompt and type `python --version`

### **Install Required Packages**

#### **Option 1: Set Tsinghua Mirror as Default (Recommended)**
**This makes Tsinghua mirror permanent - you won't need to type it again:**

```bash
# Set Tsinghua mirror as default for pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/

# Now you can install packages normally (faster in China)
pip install pandas numpy matplotlib plotly streamlit jupyter
```

#### **Option 2: One-time Use (Not Recommended)**
```bash
# Use Tsinghua mirror for this installation only
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ pandas numpy matplotlib plotly streamlit jupyter
```

#### **Option 3: Standard Installation (Slowest in China)**
```bash
pip install pandas numpy matplotlib plotly streamlit jupyter
```

**Why Option 1 is best:**
- **Set once, use forever** - no need to remember the mirror URL
- **All future pip installs** will automatically use Tsinghua mirror
- **Faster downloads** for all Python packages
- **Easy to change back** if needed: `pip config unset global.index-url`

### **Verify Installation**
```bash
# Check if packages installed correctly
python -c "import pandas; print('Pandas version:', pandas.__version__)"

# Verify your mirror setting (if you used Option 1)
pip config list
```

### **Managing Your Mirror Setting**
```bash
# Check current mirror setting
pip config list

# Change back to official PyPI (if needed)
pip config unset global.index-url

# Set a different mirror (e.g., Aliyun)
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

## 📚 Step 6: Course Project Setup

### **Create Project Folder**
1. Create a new folder: `C:\Users\[YourName]\Desktop\Demo1`
2. Put files to be analyzed (e.g. 'Student Handbook_2025-26 Cohort.pdf') to this folder
3. Open the folder in Cursor: `File → Open Folder`
4. Try "Create a webapp to nicely present the content from 'Student Handbook_2025-26 Cohort' document. Make it beautiful with navigation, sections, and professional styling."

### **Create Project Folder**
1. Create a new folder: `C:\Users\[YourName]\Desktop\Demo2`
2. Copy `UM_C19_2021.csv` to this folder
3. Open the folder in Cursor: `File → Open Folder`

## 🔍 Step 7: Troubleshooting

### **Common Issues in China**

#### **Slow Download/Installation**
- Use a VPN if available
- Try downloading during off-peak hours
- Use alternative download sources

#### **AI Assistant Not Working**
- Check internet connection
- Try refreshing the page
- Restart Cursor
- Check if you're signed in

#### **Python Not Found**
- Ensure Python is added to PATH
- Restart Command Prompt after installation
- Use full path: `C:\Python39\python.exe`

#### **Package Installation Errors**
- **Use Tsinghua mirror for faster installation:**
```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple/ pandas numpy matplotlib plotly streamlit jupyter
```
- **If pip fails, try conda:**
```bash
conda install pandas numpy matplotlib plotly streamlit jupyter
```
- **Alternative mirrors if Tsinghua is slow:**
```bash
# Aliyun mirror
pip install -i https://mirrors.aliyun.com/pypi/simple/ pandas

# Douban mirror  
pip install -i https://pypi.douban.com/simple/ pandas
```

### **Performance Issues**
- Close unnecessary browser tabs
- Disable antivirus real-time scanning temporarily
- Use SSD if available
- Increase virtual memory

## ✅ Verification Checklist

- [ ] Cursor installed and launches successfully
- [ ] Can sign in to Cursor account
- [ ] AI assistant responds to `Ctrl + K`
- [ ] Python installed and accessible from command line
- [ ] Required packages installed successfully
- [ ] Can open course project folder
- [ ] AI generates code for CSV reading

## 🆘 Getting Help

### **Official Resources**
- **Cursor Documentation**: https://cursor.sh/docs
- **Discord Community**: https://discord.gg/cursor
- **GitHub Issues**: https://github.com/getcursor/cursor/issues

### **Course Support**
- Ask questions during the course
- Use the troubleshooting section above
- Check the course materials for solutions

## 🎯 Next Steps

Once installation is complete:
1. **Practice using AI assistant** with simple prompts
2. **Familiarize yourself** with Cursor interface
3. **Prepare for Hour 2** of the course
4. **Have your CSV file ready** for analysis

---

**Congratulations!** You're now ready to learn AI-powered data analysis with Cursor! 🎉

