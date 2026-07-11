# Claude Code 最佳实践教程

![Version](https://img.shields.io/github/v/release/xinpengfei520/claude-code-best-practices?style=flat-square)
![License](https://img.shields.io/github/license/xinpengfei520/claude-code-best-practices?style=flat-square)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat-square&logo=vite)

🌐 **在线预览：** [https://traeclaude-code-best-practicesrmwk-vancexin-vance-xins-projects.vercel.app](https://traeclaude-code-best-practicesrmwk-vancexin-vance-xins-projects.vercel.app)

## 📖 项目简介

这是一个交互式的 Claude Code CLI 命令学习教程应用，旨在帮助开发者掌握 Claude Code 的各种命令和最佳实践。通过模拟终端界面和渐进式学习路径，让用户能够系统地学习和练习 Claude Code 的使用。

## ⭐ Star 趋势

[![Star History Chart](https://api.star-history.com/svg?repos=xinpengfei520/claude-code-best-practices&type=Date)](https://star-history.com/#xinpengfei520/claude-code-best-practices&Date)

> 感谢所有为项目点赞的开发者！你们的支持是我们持续改进的动力。

## ✨ 功能特色

### 🎯 完整的命令集覆盖（60+ 命令 · 5 大分类）
- 🔧 **基础命令** (14个) - 交互模式、配置管理、更新、认证等核心操作
- 🏁 **CLI 标志** (15个) - 命令行标志与选项（`--model`、`--permission-mode`、`--print` 等）
- 🔄 **管道命令** (5个) - 处理管道输入与数据流
- ⌨️ **斜杠命令** (15个) - 交互模式中最新的 `/` 命令（`/agents`、`/context`、`/rewind`、`/usage`、`/security-review` 等）
- 🚀 **高级功能** (11个) - 子代理、技能、钩子、插件、MCP、计划模式、扩展思考、CLAUDE.md 记忆、@ 文件引用等

> 命令数据全部集中在 `src/data/commands.ts`，采用数据驱动方式维护，便于持续更新最新特性。

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

- **前端框架：** React 18.3.1 + TypeScript 5.8.3
- **构建工具：** Vite 6.3.5
- **样式方案：** Tailwind CSS 3.4.17（class 模式暗色主题）
- **状态管理：** Zustand 5.0.3（持久化到 localStorage）
- **路由：** React Router DOM 7.3.0
- **图标库：** Lucide React 0.511.0
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
npm run check
# 或
pnpm check
```

## 📁 项目结构

```
src/
├── components/               # React 组件
│   ├── DocumentationPanel.tsx  # 命令文档面板
│   ├── Sidebar.tsx             # 侧边栏（分类 / 命令 / 进度）
│   ├── Terminal.tsx            # iTerm2 风格终端组件
│   └── Empty.tsx               # 空状态组件
├── data/
│   └── commands.ts             # 命令数据定义（数据驱动的命令目录）
├── hooks/
│   └── useTheme.ts             # 主题钩子
├── pages/
│   └── Home.tsx                # 主页面
├── store/
│   └── useAppStore.ts          # Zustand 状态管理（持久化学习进度）
├── styles/
│   └── terminal.css            # 终端样式
├── lib/
│   └── utils.ts                # 工具函数
├── App.tsx                     # 根组件与路由
├── main.tsx                    # 应用入口
└── index.css                   # 全局样式与 Tailwind 指令
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
