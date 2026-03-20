# 腾讯会议Web端组件库

这是一个类似于TDesign的组件库展示网站，用于展示和管理腾讯会议Web端的UI组件。

## 功能特性

- 🎨 **深浅色主题切换** - 支持明亮和深色两种主题模式
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- 🧩 **组件展示** - 展示Color色彩、Radius圆角、Button按钮等组件
- 📖 **文档完整** - 每个组件包含示例、API文档和使用指南
- 🔍 **清晰的导航** - 左侧分类导航，便于快速查找组件

## 项目结构

```
.
├── index.html          # 主页面
├── styles.css          # 样式文件
├── main.js            # JavaScript逻辑
└── README.md          # 项目说明
```

## 使用方法

### 直接打开

直接在浏览器中打开 `index.html` 文件即可查看。

### 本地服务器

使用本地服务器运行（推荐）：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要先安装 http-server)
npx http-server -p 8000

# 使用 PHP
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

## 组件列表

### 全局规范
- **Color色彩** - 品牌色、功能色、中性色规范
- **Shadow阴影** - 阴影层级和视觉深度
- **Radius圆角** - 圆角大小规范

### 基础
- **Button按钮** - 各种类型、尺寸和状态的按钮
- **Icon图标** - 图标组件

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 开发计划

- [ ] 添加更多组件（输入框、选择器、表格等）
- [ ] 集成Figma设计稿
- [ ] 添加组件代码示例复制功能
- [ ] 实现搜索功能
- [ ] 添加国际化支持

## 许可证

MIT License
