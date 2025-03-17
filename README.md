# YouTube Embed Converter

一个简单而实用的 Chrome 浏览器扩展，可以自动将 YouTube 观看链接转换为嵌入链接，并支持自动播放功能。

## 功能特点

- 自动将 YouTube 观看链接转换为嵌入链接
- 支持自动播放功能
- 简洁的用户界面
- 支持所有 YouTube 视频页面
- 实时状态显示

## 安装说明

1. 下载本项目代码
2. 打开 Chrome 浏览器，进入扩展管理页面：
   - 在地址栏输入 `chrome://extensions/`
   - 或点击右上角菜单 → 更多工具 → 扩展程序
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择本项目文件夹

## 使用方法

1. 安装扩展后，访问任意 YouTube 视频页面
2. 扩展会自动将观看链接转换为嵌入链接
3. 转换后的链接格式为：
   - 原始链接：`https://www.youtube.com/watch?v=xxx`
   - 转换后：`https://www.youtube.com/embed/xxx?autoplay=1`

## 技术细节

- 基于 Chrome Extension Manifest V3
- 使用原生 JavaScript 开发
- 支持所有主流 YouTube 视频页面
- 轻量级设计，不影响页面加载速度

## 权限说明

本扩展需要以下权限：

- `storage`: 用于存储用户设置
- `activeTab`: 用于访问当前标签页
- `scripting`: 用于执行内容脚本
- `*://*.youtube.com/*`: 用于访问 YouTube 域名

## 开发说明

### 项目结构

```
├── manifest.json      // 扩展配置文件
├── popup.html        // 弹出窗口界面
├── popup.js         // 弹出窗口逻辑
├── content.js       // 内容脚本
├── background.js    // 后台脚本
├── styles.css       // 样式文件
└── images/          // 图标文件夹
    ├── icon_16.png
    ├── icon_32.png
    ├── icon_48.png
    └── icon_128.png
```

## 许可证

Public Domain

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 更新日志

### v1.0

- 初始版本发布
- 实现基本的链接转换功能
- 支持自动播放
