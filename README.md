# Claude Code 最佳实践教程

![Version](https://img.shields.io/github/v/release/xinpengfei520/claude-code-best-practices?style=flat-square)
![License](https://img.shields.io/github/license/xinpengfei520/claude-code-best-practices?style=flat-square)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.0.1-646CFF?style=flat-square&logo=vite)

🌐 **在线预览：** [https://traeclaude-code-best-practicesrmwk-vancexin-vance-xins-projects.vercel.app](https://traeclaude-code-best-practicesrmwk-vancexin-vance-xins-projects.vercel.app)

## 📖 项目简介

这是一个交互式的 Claude Code CLI 命令学习教程应用，旨在帮助开发者掌握 Claude Code 的各种命令和最佳实践。通过模拟终端界面和渐进式学习路径，让用户能够系统地学习和练习 Claude Code 的使用。

## ✨ 功能特色

### 🎯 完整的命令集覆盖
- **基础命令** (15个) - 核心功能如交互模式、配置管理、更新等
- **聊天会话** (2个) - 会话管理和保存功能
- **代码生成** (2个) - 自动生成代码和文本
- **代码分析** (1个) - 文件和代码质量分析
- **CLI标志** (14个) - 命令行标志和选项
- **管道命令** (5个) - 实用的管道操作

### 🎨 用户体验
- **iTerm2风格终端界面** - 真实的命令行体验
- **渐进式学习路径** - 初级 → 中级 → 高级
- **交互式"运行"按钮** - 模拟命令执行
- **真实可信的输出示例** - 基于实际使用场景
- **响应式设计** - 支持桌面和移动设备
- **本地进度存储** - 自动保存学习进度

### 📚 学习内容
- **详细的命令文档** - 语法、参数、示例
- **最佳实践指南** - 实际使用建议
- **常见错误提醒** - 避免常见陷阱
- **相关命令推荐** - 扩展学习路径

## 🛠️ 技术栈

- **前端框架：** React 18.3.1 + TypeScript 5.6.2
- **构建工具：** Vite 6.0.1
- **样式方案：** Tailwind CSS 3.4.17
- **状态管理：** Zustand 5.0.2
- **图标库：** Lucide React 0.468.0
- **代码质量：** ESLint + TypeScript
- **部署平台：** Vercel

## 🚀 本地开发

### 环境要求
- Node.js >= 18.0.0
- npm 或 pnpm

### 安装依赖
```bash
# 克隆项目
git clone git@github.com:xinpengfei520/claude-code-best-practices.git
cd claude-code-best-practices

# 安装依赖
npm install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建生产版本
```bash
npm run build
# 或
pnpm build
```

### 代码检查
```bash
npm run lint
# 或
pnpm lint
```

### 类型检查
```bash
npm run type-check
# 或
pnpm type-check
```

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── DocumentationPanel.tsx  # 文档面板
│   ├── Sidebar.tsx            # 侧边栏
│   ├── Terminal.tsx           # 终端组件
│   └── Empty.tsx              # 空状态组件
├── data/
│   └── commands.ts            # 命令数据定义
├── hooks/
│   └── useTheme.ts            # 主题钩子
├── pages/
│   └── Home.tsx               # 主页面
├── store/
│   └── useAppStore.ts         # 应用状态管理
├── styles/
│   └── terminal.css           # 终端样式
└── lib/
    └── utils.ts               # 工具函数
```

## 🌐 部署

### Vercel 部署

1. Fork 本项目到你的 GitHub 账户
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 配置构建设置（通常自动检测）
4. 部署完成

### 其他平台

项目使用标准的 Vite 构建，可以部署到任何支持静态网站的平台：
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 开发规范
- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 规则
- 组件保持单一职责
- 添加适当的注释和文档

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Claude](https://claude.ai) - 提供强大的AI能力
- [React](https://reactjs.org) - 优秀的前端框架
- [Vite](https://vitejs.dev) - 快速的构建工具
- [Tailwind CSS](https://tailwindcss.com) - 实用的CSS框架

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- 创建 [Issue](https://github.com/xinpengfei520/claude-code-best-practices/issues)
- 发送邮件到项目维护者

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
