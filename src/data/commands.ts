export interface Command {
  id: string;
  name: string;
  description: string;
  syntax: string;
  example: string;
  output: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  bestPractices: string[];
  commonMistakes: string[];
  relatedCommands: string[];
}

export interface CommandCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  commands: Command[];
}

export const commands: Command[] = [
  // ===== Basic Commands (基础命令) =====
  {
    id: 'claude-help',
    name: 'claude --help',
    description: '显示 Claude Code 的帮助信息和可用子命令',
    syntax: 'claude --help',
    example: 'claude --help',
    output: `Usage: claude [options] [prompt]

Claude Code - agentic coding in your terminal

Commands:
  claude                 启动交互式会话
  claude "task"          运行一次性任务
  config                 管理配置
  mcp                    配置 MCP 服务器
  update                 更新到最新版本
  doctor                 诊断安装与配置

Options:
  -p, --print            非交互模式输出后退出
  -c, --continue         继续最近的会话
  -r, --resume           恢复指定会话
  --model <name>         选择模型
  --help                 显示帮助
  --version              显示版本`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '先查看帮助了解可用子命令与选项',
      '不确定某个标志时随时查阅',
      '配合 /help 查看交互模式内的斜杠命令'
    ],
    commonMistakes: [
      '不看帮助凭印象拼凑命令',
      '混淆 CLI 标志与交互模式斜杠命令'
    ],
    relatedCommands: ['claude --version', '/help']
  },
  {
    id: 'claude-version',
    name: 'claude --version',
    description: '显示当前 Claude Code 的版本号',
    syntax: 'claude --version',
    example: 'claude --version',
    output: `2.0.x (Claude Code)`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '反馈问题时附上版本号',
      '定期更新以获得新功能',
      '升级前留意变更说明'
    ],
    commonMistakes: [
      '长期不更新导致缺失新特性',
      '报告问题时不提供版本信息'
    ],
    relatedCommands: ['claude update', '/doctor']
  },
  {
    id: 'claude-interactive',
    name: 'claude',
    description: '启动 Claude Code 交互模式',
    syntax: 'claude',
    example: 'claude',
    output: `Welcome to Claude Code!

输入你的需求，或用 / 触发斜杠命令。
Shift+Tab 切换权限模式，Esc 中断，Ctrl+C 退出。

>`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '复杂多轮开发优先用交互模式',
      '善用上下文进行连续迭代',
      '用 @ 引用文件、用 / 调用命令'
    ],
    commonMistakes: [
      '简单一次性查询也开交互模式',
      '不利用上下文连续性反复重述'
    ],
    relatedCommands: ['claude -c', 'claude -r']
  },
  {
    id: 'claude-task',
    name: 'claude "task"',
    description: '运行一次性任务',
    syntax: 'claude "[任务描述]"',
    example: 'claude "fix the build error"',
    output: `Analyzing build error...

Found issue in package.json:
- Missing dependency: @types/react

Applying fix:
  npm install --save-dev @types/react

✅ Build passes.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '提供清晰具体的任务描述',
      '用双引号包裹任务内容',
      '验证任务执行结果'
    ],
    commonMistakes: [
      '任务描述过于模糊',
      '忘记用引号包裹任务'
    ],
    relatedCommands: ['claude -p "query"', 'claude']
  },
  {
    id: 'claude-query',
    name: 'claude -p "query"',
    description: '非交互模式运行一次查询后退出，适合脚本',
    syntax: 'claude -p "[查询]"',
    example: 'claude -p "explain this function"',
    output: `This function is a React component that:
1. 用 useState 管理状态
2. 绑定事件处理用户交互
3. 返回 JSX 进行渲染

适合在脚本或管道中获取单次结果。`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '用于脚本化、自动化的单次查询',
      '配合 --output-format json 便于程序解析',
      '提供具体的查询内容'
    ],
    commonMistakes: [
      '需要多轮对话时却用单次查询',
      '查询内容不够具体'
    ],
    relatedCommands: ['claude --output-format', 'claude --print']
  },
  {
    id: 'claude-continue',
    name: 'claude -c',
    description: '在当前目录继续最近的一次对话',
    syntax: 'claude -c',
    example: 'claude -c',
    output: `Resuming most recent session in this directory...

Last topic: optimizing a React component
Loaded 15 messages

> 我们接着上次的优化继续。`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '用于恢复被中断的工作',
      '在项目目录内使用以匹配正确会话',
      '保持上下文连续'
    ],
    commonMistakes: [
      '在错误的目录中使用',
      '没有最近会话时使用'
    ],
    relatedCommands: ['claude -r', 'claude --continue']
  },
  {
    id: 'claude-resume',
    name: 'claude -r',
    description: '从历史会话列表中选择并恢复',
    syntax: 'claude -r [会话ID]',
    example: 'claude -r',
    output: `Available sessions:
1. React optimization      (2 hours ago)
2. Python debugging        (5 hours ago)
3. API integration         (1 day ago)

Select session: 1

Restored. Loaded 15 messages.
> Welcome back!`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '定期查看可恢复的会话',
      '为长期任务挑选正确的会话',
      '清理不再需要的会话'
    ],
    commonMistakes: [
      '恢复了错误的会话',
      '会话过多难以辨认'
    ],
    relatedCommands: ['claude -c', 'claude --resume']
  },
  {
    id: 'clear-command',
    name: '/clear',
    description: '清空当前对话上下文，开始全新会话',
    syntax: '/clear',
    example: '/clear',
    output: `Conversation cleared. Starting fresh.

> 有什么可以帮你？`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '切换到全新主题前清空',
      '上下文塞满且无需保留时使用',
      '需要保留要点时改用 /compact'
    ],
    commonMistakes: [
      '清空前丢失了仍需要的上下文',
      '该用 /compact 时却用了 /clear'
    ],
    relatedCommands: ['/compact', '/context']
  },
  {
    id: 'help-command',
    name: '/help',
    description: '在交互模式中列出可用的斜杠命令',
    syntax: '/help',
    example: '/help',
    output: `Slash commands:

  /init         生成 CLAUDE.md
  /agents       管理子代理
  /compact      压缩对话
  /context      查看上下文占用
  /model        切换模型
  /config       设置
  /permissions  权限规则
  /review       审查 PR
  /rewind       回退检查点
  /clear        清空对话
  /help         显示此帮助

输入 / 可查看全部命令。`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '不熟悉时先用 /help 浏览命令',
      '关注新加入的命令',
      '区分 CLI 标志与斜杠命令'
    ],
    commonMistakes: [
      '不知道有哪些命令而手动重复劳动',
      '忽略命令的参数'
    ],
    relatedCommands: ['claude --help', '/clear']
  },
  {
    id: 'exit-command',
    name: 'exit',
    description: '退出 Claude Code（也可用 Ctrl+C）',
    syntax: 'exit',
    example: 'exit',
    output: `Session saved.
Goodbye! 👋`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '正常退出以保存会话',
      '退出前确认无未完成任务',
      '需要时可用 -c/-r 恢复'
    ],
    commonMistakes: [
      '强制关闭终端导致会话异常',
      '退出前未确认改动已保存'
    ],
    relatedCommands: ['claude -c', '/clear']
  },
  {
    id: 'claude-update',
    name: 'claude update',
    description: '更新 Claude Code 到最新版本',
    syntax: 'claude update',
    example: 'claude update',
    output: `Checking for updates...

✅ Downloaded latest version
✅ Installation complete

Restart your terminal to use the new version.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '定期更新获取新功能与修复',
      '更新后重启终端',
      '留意变更说明'
    ],
    commonMistakes: [
      '更新后不重启终端',
      '长期不更新'
    ],
    relatedCommands: ['claude --version', '/doctor']
  },
  {
    id: 'claude-mcp',
    name: 'claude mcp',
    description: '从命令行配置 MCP（模型上下文协议）服务器',
    syntax: 'claude mcp [add|list|remove] [options]',
    example: 'claude mcp list',
    output: `Configured MCP servers:

  filesystem   ✅ connected   (stdio)
  github       ✅ connected   (stdio)
  database     ⚠️  not started

Manage in-session with /mcp.`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '只连接可信的服务器',
      '用 /mcp 检查连接与鉴权',
      '按项目/用户范围管理配置'
    ],
    commonMistakes: [
      '连接来源不明的服务器',
      '启用过多不必要的服务器'
    ],
    relatedCommands: ['MCP 服务器', '/mcp']
  },
  {
    id: 'claude-continue-sdk',
    name: 'claude -c -p "query"',
    description: '非交互地继续上次会话并执行一次查询',
    syntax: 'claude -c -p "[查询]"',
    example: 'claude -c -p "Check for type errors"',
    output: `Continuing previous conversation...

Running: Check for type errors

Found 2 type errors:
- src/utils/helpers.ts:8  类型不匹配
- src/pages/Home.tsx:22   可能为 undefined

建议已给出，查询完成。`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '在脚本中链接上一次会话上下文',
      '提供具体的查询内容',
      '验证结果准确性'
    ],
    commonMistakes: [
      '没有可继续的会话时使用',
      '查询内容过于模糊'
    ],
    relatedCommands: ['claude -c', 'claude -p "query"']
  },
  {
    id: 'claude-restore-session',
    name: 'claude -r "<id>" "query"',
    description: '通过会话 ID 恢复指定会话并执行一次查询',
    syntax: 'claude -r "[会话ID]" "[查询]"',
    example: 'claude -r "abc123" "Finish this PR"',
    output: `Restoring session: abc123
Loaded 12 messages

Running: Finish this PR

- 修复了失败的测试
- 更新了文档
- 补充了类型定义

PR is ready for review!`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '使用正确的会话 ID',
      '提供清晰的任务描述',
      '确认会话恢复成功'
    ],
    commonMistakes: [
      '使用过期或错误的会话 ID',
      '任务描述不具体'
    ],
    relatedCommands: ['claude -r', 'claude --resume']
  },

  // ===== CLI Flags (CLI 标志) =====
  {
    id: 'claude-add-dir',
    name: 'claude --add-dir',
    description: '为 Claude 添加额外可访问的工作目录',
    syntax: 'claude --add-dir <dir1> [dir2] ...',
    example: 'claude --add-dir ../apps ../lib',
    output: `Adding directories...

✅ ../apps
✅ ../lib

Claude 现在可访问当前目录及以上目录。`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '只添加必要的目录',
      '确认目录路径存在',
      '注意访问范围与安全'
    ],
    commonMistakes: [
      '添加不存在的目录',
      '添加过多目录或敏感目录'
    ],
    relatedCommands: ['/add-dir', 'claude --allowedTools']
  },
  {
    id: 'claude-allowed-tools',
    name: 'claude --allowedTools',
    description: '指定无需确认即可使用的工具列表',
    syntax: 'claude --allowedTools "tool1" "tool2" ...',
    example: 'claude --allowedTools "Bash(git log:*)" "Read"',
    output: `Allowed tools:
✅ Bash(git log:*)
✅ Read

这些工具将不再弹出权限确认。`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '只允许安全的操作',
      '用通配符精确限定范围',
      '定期审查允许列表'
    ],
    commonMistakes: [
      '允许范围过于宽泛',
      '不了解工具的安全影响'
    ],
    relatedCommands: ['claude --disallowedTools', '/permissions']
  },
  {
    id: 'claude-disallowed-tools',
    name: 'claude --disallowedTools',
    description: '指定被禁止使用的工具列表',
    syntax: 'claude --disallowedTools "tool1" "tool2" ...',
    example: 'claude --disallowedTools "Bash(rm:*)" "Edit"',
    output: `Disallowed tools:
🚫 Bash(rm:*)
🚫 Edit

这些工具将被阻止使用。`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '禁止危险操作',
      '用通配符阻止整类命令',
      '平衡安全与可用性'
    ],
    commonMistakes: [
      '禁止了必要工具影响效率',
      '不测试限制效果'
    ],
    relatedCommands: ['claude --allowedTools', '/permissions']
  },
  {
    id: 'claude-append-system-prompt',
    name: 'claude --append-system-prompt',
    description: '向系统提示追加自定义指令（与 -p 配合）',
    syntax: 'claude --append-system-prompt "[指令]" -p "[查询]"',
    example: 'claude --append-system-prompt "Always respond in JSON" -p "analyze this code"',
    output: `System prompt appended.

{
  "language": "JavaScript",
  "issues": [
    { "type": "performance", "line": 15 }
  ],
  "suggestions": ["use array methods", "add error handling"]
}`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '与 -p 打印模式配合使用',
      '指令清晰、聚焦',
      '验证对输出的影响'
    ],
    commonMistakes: [
      '指令与查询冲突',
      '指令过于复杂'
    ],
    relatedCommands: ['claude -p "query"', 'claude --output-format']
  },
  {
    id: 'claude-output-format',
    name: 'claude --output-format',
    description: '为打印模式指定输出格式',
    syntax: 'claude -p "[查询]" --output-format [text|json|stream-json]',
    example: 'claude -p "analyze this function" --output-format json',
    output: `{
  "query": "analyze this function",
  "analysis": {
    "complexity": "low",
    "suggestions": ["add input validation"]
  }
}`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '与自动化集成时用 json',
      '实时处理用 stream-json',
      '处理好解析错误'
    ],
    commonMistakes: [
      '格式与用途不匹配',
      '不处理 JSON 解析失败'
    ],
    relatedCommands: ['claude --input-format', 'claude -p "query"']
  },
  {
    id: 'claude-input-format',
    name: 'claude --input-format',
    description: '为打印模式指定输入格式',
    syntax: 'claude -p --input-format [text|stream-json] --output-format json',
    example: 'claude -p --input-format stream-json --output-format json',
    output: `Reading stream-json input...

{
  "status": "success",
  "processed_messages": 3
}`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '确保输入格式与实际数据一致',
      '校验 JSON 有效性',
      '处理流式输入错误'
    ],
    commonMistakes: [
      '声明格式与数据不符',
      '无效的 JSON 输入'
    ],
    relatedCommands: ['claude --output-format', 'claude -p "query"']
  },
  {
    id: 'claude-verbose',
    name: 'claude --verbose',
    description: '启用详细日志，显示完整的逐轮输出',
    syntax: 'claude --verbose [其它选项]',
    example: 'claude --verbose -p "debug this issue"',
    output: `🔍 Verbose mode enabled

[DEBUG] Model: opus
[TURN 1] Input: "debug this issue"
[DEBUG] Processing time: 1.2s
[DEBUG] Output tokens: 156

✅ Completed`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '用于调试与排查',
      '观察 token 与耗时',
      '了解处理流程'
    ],
    commonMistakes: [
      '在正常使用中始终开启',
      '忽略日志中的告警'
    ],
    relatedCommands: ['claude --max-turns', '/debug']
  },
  {
    id: 'claude-max-turns',
    name: 'claude --max-turns',
    description: '在非交互模式下限制代理的最大轮次',
    syntax: 'claude -p --max-turns [n] "[查询]"',
    example: 'claude -p --max-turns 3 "fix build errors"',
    output: `Max turns: 3

Turn 1/3: 分析错误
Turn 2/3: 应用修复
Turn 3/3: 验证通过 ✅

Done in 3 turns.`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '为自动化任务设置合理上限',
      '控制成本与范围',
      '监控每轮进度'
    ],
    commonMistakes: [
      '上限过低导致任务未完成',
      '不监控轮次使用'
    ],
    relatedCommands: ['claude -p "query"', 'claude --verbose']
  },
  {
    id: 'claude-model',
    name: 'claude --model',
    description: '为本次会话选择模型',
    syntax: 'claude --model [opus|sonnet|haiku|model-id]',
    example: 'claude --model opus',
    output: `Model: Opus 4.8

- 最强推理，适合复杂任务
- 200K 上下文，支持多模态

✅ Session started.`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '按任务难度选择模型',
      '可用别名（opus/sonnet/haiku）',
      '权衡成本与能力'
    ],
    commonMistakes: [
      '强模型处理琐碎任务浪费成本',
      '弱模型处理复杂任务导致返工'
    ],
    relatedCommands: ['/model', '扩展思考']
  },
  {
    id: 'claude-permission-mode',
    name: 'claude --permission-mode',
    description: '以指定的权限模式启动',
    syntax: 'claude --permission-mode [default|acceptEdits|plan|bypassPermissions]',
    example: 'claude --permission-mode plan',
    output: `Permission mode: plan

Claude 会先给出方案、获批后再动手，
不会直接修改文件。`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '高风险改动用 plan 模式',
      '可信环境批量改动用 acceptEdits',
      '了解各模式的边界'
    ],
    commonMistakes: [
      '在不该自动化的场景用 bypassPermissions',
      '不了解模式差异'
    ],
    relatedCommands: ['计划模式', '/permissions']
  },
  {
    id: 'claude-permission-prompt-tool',
    name: 'claude --permission-prompt-tool',
    description: '指定一个 MCP 工具来处理非交互模式下的权限提示',
    syntax: 'claude -p --permission-prompt-tool [tool] "[查询]"',
    example: 'claude -p --permission-prompt-tool mcp_auth "deploy to staging"',
    output: `Permission tool: mcp_auth

🔐 Authorization requested...
✅ Granted

Proceeding with deploy to staging...`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '配置可靠的权限处理工具',
      '记录授权请求与结果',
      '用于自动化流水线'
    ],
    commonMistakes: [
      '权限工具配置错误',
      '不验证授权结果'
    ],
    relatedCommands: ['claude mcp', 'claude --permission-mode']
  },
  {
    id: 'claude-resume-flag',
    name: 'claude --resume',
    description: '通过 ID 恢复指定会话（-r 的完整写法）',
    syntax: 'claude --resume [会话ID] "[查询]"',
    example: 'claude --resume abc123 "continue development"',
    output: `Resuming session: abc123
Last activity: 2 hours ago

继续之前的开发...
下一步：优化重渲染、补充单元测试。`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '使用正确的会话 ID',
      '提供与上下文相关的查询',
      '确认恢复状态'
    ],
    commonMistakes: [
      '使用过期的会话 ID',
      '查询与会话上下文不符'
    ],
    relatedCommands: ['claude -r', '/resume']
  },
  {
    id: 'claude-continue-flag',
    name: 'claude --continue',
    description: '在当前目录加载最近的对话（-c 的完整写法）',
    syntax: 'claude --continue',
    example: 'claude --continue',
    output: `Loading recent conversation here...

Found session, last activity 30 min ago.
> Welcome back! 我们继续 TypeScript 迁移。`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '在项目目录中使用',
      '确保存在最近会话',
      '确认会话相关性'
    ],
    commonMistakes: [
      '在错误目录使用',
      '没有最近会话时使用'
    ],
    relatedCommands: ['claude -c', 'claude --resume']
  },
  {
    id: 'claude-print',
    name: 'claude --print',
    description: '等同于 -p，运行一次查询并打印结果',
    syntax: 'claude --print "[查询]"',
    example: 'claude --print "what is ISO 8601?"',
    output: `ISO 8601 是日期时间的国际标准格式：

  YYYY-MM-DDTHH:mm:ssZ
  例如 2026-06-24T14:30:22Z (UTC)

适合脚本与自动化场景。`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '用于快速、脚本化查询',
      '与 --output-format 配合',
      '清楚它与 -p 完全等价'
    ],
    commonMistakes: [
      '与 -p 混用造成困惑',
      '在需要多轮时使用'
    ],
    relatedCommands: ['claude -p "query"', 'claude --output-format']
  },
  {
    id: 'claude-dangerously-skip-permissions',
    name: 'claude --dangerously-skip-permissions',
    description: '跳过所有权限确认（等同 bypassPermissions，谨慎使用）',
    syntax: 'claude --dangerously-skip-permissions [其它选项]',
    example: 'claude --dangerously-skip-permissions -p "run CI fixes"',
    output: `⚠️  WARNING: 所有权限确认已禁用

正在无确认执行任务...
✅ Done

仅在隔离/可信环境中使用此模式。`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '仅在隔离/可信环境的自动化中使用',
      '确保操作可回退',
      '严格限制使用范围'
    ],
    commonMistakes: [
      '在日常交互中使用',
      '在不安全环境中使用'
    ],
    relatedCommands: ['claude --permission-mode', '/permissions']
  },

  // ===== Pipeline Commands (管道命令) =====
  {
    id: 'cat-pipe-claude',
    name: 'cat file | claude -p "query"',
    description: '把文件内容通过管道交给 Claude 处理',
    syntax: 'cat [file] | claude -p "[查询]"',
    example: 'cat logs.txt | claude -p "explain errors"',
    output: `Reading piped content (156 lines)...

Error Summary:
🔴 Line 45: 数据库连接超时 → 增大超时时间
🔴 Line 78: 内存分配失败 → 提高堆内存
🔴 Line 134: 令牌过期 → 实现刷新逻辑`,
    category: 'pipeline',
    difficulty: 'intermediate',
    bestPractices: [
      '提供具体的分析查询',
      '注意大文件的性能',
      '确认文件内容格式'
    ],
    commonMistakes: [
      '管道传输过大文件',
      '查询不够具体'
    ],
    relatedCommands: ['echo "text" | claude -p "query"', 'claude -p "query"']
  },
  {
    id: 'echo-pipe-claude',
    name: 'echo "text" | claude -p "query"',
    description: '把一段文本通过管道交给 Claude',
    syntax: 'echo "[文本]" | claude -p "[查询]"',
    example: 'echo "function add(a,b){return a+b}" | claude -p "review this"',
    output: `Reviewing piped code...

✅ 逻辑正确
💡 建议：补充 JSDoc、加入类型与边界校验`,
    category: 'pipeline',
    difficulty: 'beginner',
    bestPractices: [
      '用双引号包裹文本',
      '给出明确的分析指令',
      '注意特殊字符转义'
    ],
    commonMistakes: [
      '忘记转义特殊字符',
      '文本过长触及命令行限制'
    ],
    relatedCommands: ['cat file | claude -p "query"', 'claude -p "query"']
  },
  {
    id: 'git-diff-pipe-claude',
    name: 'git diff | claude -p "query"',
    description: '把 Git 差异通过管道交给 Claude 分析',
    syntax: 'git diff [options] | claude -p "[查询]"',
    example: 'git diff HEAD~1 | claude -p "summarize changes"',
    output: `Reading git diff (3 files, +45/-12)...

📊 改动摘要：
- Header.tsx：新增响应式导航
- globals.css：移动端媒体查询
- package.json：依赖升级

整体符合最佳实践 ✅`,
    category: 'pipeline',
    difficulty: 'intermediate',
    bestPractices: [
      '指定具体的 diff 范围',
      '结合明确的分析需求',
      '注意 diff 输出大小'
    ],
    commonMistakes: [
      'diff 输出过大',
      '不指定提交范围'
    ],
    relatedCommands: ['/code-review', 'claude -p "query"']
  },
  {
    id: 'ls-pipe-claude',
    name: 'ls -la | claude -p "query"',
    description: '把目录列表通过管道交给 Claude 分析',
    syntax: 'ls [options] | claude -p "[查询]"',
    example: 'ls -la src/ | claude -p "analyze project structure"',
    output: `Reading directory listing...

📁 结构分析：
- components/  组件（组织良好）
- hooks/       自定义 Hook
- utils/       工具函数

💡 建议新增 __tests__/ 放单元测试`,
    category: 'pipeline',
    difficulty: 'beginner',
    bestPractices: [
      '选择合适的目录与 ls 选项',
      '给出结构化的分析指令',
      '聚焦特定目录'
    ],
    commonMistakes: [
      '分析根目录导致输出过多',
      '指令不明确'
    ],
    relatedCommands: ['cat file | claude -p "query"', 'claude -p "query"']
  },
  {
    id: 'curl-pipe-claude',
    name: 'curl url | claude -p "query"',
    description: '把 HTTP 响应通过管道交给 Claude 分析',
    syntax: 'curl [options] [url] | claude -p "[查询]"',
    example: 'curl -s https://api.github.com/users/octocat | claude -p "explain this response"',
    output: `Reading HTTP response (200 OK, JSON)...

🌐 响应解析：
- 用户：octocat
- 公开仓库：8
- 这是 GitHub REST API v3

未认证请求限速：60 次/小时。`,
    category: 'pipeline',
    difficulty: 'intermediate',
    bestPractices: [
      '用 -s 静默模式避免进度干扰',
      '检查响应状态码',
      '处理 JSON 数据'
    ],
    commonMistakes: [
      '不处理 HTTP 错误',
      '不验证响应格式'
    ],
    relatedCommands: ['cat file | claude -p "query"', 'claude -p "query"']
  },

  // ===== Modern Slash Commands (斜杠命令) =====
  {
    id: 'slash-init',
    name: '/init',
    description: '扫描代码库并生成 CLAUDE.md 项目记忆文件',
    syntax: '/init',
    example: '/init',
    output: `Analyzing project structure...

Detected: React 18 + TypeScript + Vite
Package manager: npm (package-lock.json)
Found: ESLint config, Tailwind, Vercel deploy

✅ Created CLAUDE.md with:
- Build / test / lint commands
- Architecture overview
- Code style conventions

Tip: review and trim CLAUDE.md so it only contains
what Claude would otherwise get wrong.`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '在新项目首次使用时运行以建立项目记忆',
      '生成后人工审查并精简内容',
      '随项目演进定期重新运行以更新'
    ],
    commonMistakes: [
      '生成后从不审查导致信息过时',
      '在 CLAUDE.md 中堆砌过多无关内容'
    ],
    relatedCommands: ['/memory', 'CLAUDE.md 记忆']
  },
  {
    id: 'slash-memory',
    name: '/memory',
    description: '编辑各级 CLAUDE.md 记忆文件',
    syntax: '/memory',
    example: '/memory',
    output: `Select a memory file to edit:

  1. ./CLAUDE.md            (project, checked in)
  2. ./CLAUDE.local.md      (project, gitignored)
  3. ~/.claude/CLAUDE.md    (user, all projects)

Opening in your editor...
Changes take effect in the next message.`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '把团队规范写进项目级 CLAUDE.md',
      '把个人偏好放进 CLAUDE.local.md（不入库）',
      '用 # 开头快速向记忆追加一条内容'
    ],
    commonMistakes: [
      '把个人偏好写进团队共享文件',
      '把会频繁变化的信息硬编码进记忆'
    ],
    relatedCommands: ['/init', 'CLAUDE.md 记忆']
  },
  {
    id: 'slash-compact',
    name: '/compact',
    description: '总结并压缩当前对话以释放上下文空间',
    syntax: '/compact [关注重点]',
    example: '/compact 保留关于鉴权重构的决定',
    output: `Compacting conversation...

Summarized 42 messages → 1 summary
Freed ~38k tokens of context
Kept focus: 鉴权重构的决定

✅ You can keep working with more headroom.`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '在上下文接近上限前主动压缩',
      '用关注重点参数保留关键决定',
      '长任务中分阶段压缩而非一次性清空'
    ],
    commonMistakes: [
      '用 /clear 丢弃了仍需要的上下文',
      '压缩后未确认关键信息是否保留'
    ],
    relatedCommands: ['/context', '/clear']
  },
  {
    id: 'slash-context',
    name: '/context',
    description: '可视化当前上下文窗口的占用情况',
    syntax: '/context',
    example: '/context',
    output: `Context usage (200k window)

  System prompt + tools   ████░░░░░░░░░░░░  12%
  CLAUDE.md + memory      ██░░░░░░░░░░░░░░   6%
  Conversation           ██████████░░░░░░  48%
  Free                    ░░░░░░░░░░░░░░░░  34%

Tip: run /compact when free space gets low.`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '在长会话中定期查看占用',
      '占用过高时配合 /compact 使用',
      '关注记忆文件是否占用过多空间'
    ],
    commonMistakes: [
      '忽视上下文占用导致响应质量下降',
      '不清楚哪些内容在消耗上下文'
    ],
    relatedCommands: ['/compact', '/clear']
  },
  {
    id: 'slash-model',
    name: '/model',
    description: '在会话中切换使用的模型',
    syntax: '/model [opus|sonnet|haiku|model-id]',
    example: '/model opus',
    output: `Available models:

  > Opus 4.8     最强推理，适合复杂任务
    Sonnet 4.6   速度与能力均衡，日常默认
    Haiku 4.5    最快最省，适合简单任务

✅ Switched to Claude Opus 4.8`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '复杂重构或架构设计用更强模型',
      '简单批量改动用更快的模型省成本',
      '根据任务难度动态切换'
    ],
    commonMistakes: [
      '用最强模型处理琐碎任务浪费成本',
      '用过弱模型处理复杂任务导致返工'
    ],
    relatedCommands: ['/config', '扩展思考']
  },
  {
    id: 'slash-config',
    name: '/config',
    description: '打开设置界面或直接设置某个配置项',
    syntax: '/config [key=value]',
    example: '/config',
    output: `Settings

  Theme            dark
  Editor mode      normal        (was /vim)
  Output style     default
  Auto-compact     on
  Notifications    on

Use arrow keys to change, or: /config key=value`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '通过 Editor mode 开启 Vim 编辑（/vim 已移除）',
      '用 /config key=value 快速修改单项',
      '团队统一的设置写入 settings.json'
    ],
    commonMistakes: [
      '仍在找已被移除的 /vim 命令',
      '把项目级设置误改为全局设置'
    ],
    relatedCommands: ['/model', '/permissions']
  },
  {
    id: 'slash-permissions',
    name: '/permissions',
    description: '管理工具的允许/询问/拒绝规则',
    syntax: '/permissions',
    example: '/permissions',
    output: `Permission rules

  Allow:
    Read, Edit, Bash(npm run *)
  Ask:
    Bash(git push:*)
  Deny:
    Bash(rm -rf:*), WebFetch

Mode: default   (Shift+Tab to cycle)
Edit rules here or in .claude/settings.json`,
    category: 'slash',
    difficulty: 'intermediate',
    bestPractices: [
      '把安全的高频操作加入 Allow 减少打断',
      '把危险操作显式加入 Deny',
      '用 Shift+Tab 在权限模式间快速切换'
    ],
    commonMistakes: [
      '允许范围过宽带来安全风险',
      '把必要工具误加入 Deny 影响效率'
    ],
    relatedCommands: ['计划模式', 'claude --permission-mode']
  },
  {
    id: 'slash-review',
    name: '/review',
    description: '审查一个 GitHub 拉取请求(PR)',
    syntax: '/review [PR编号或URL]',
    example: '/review 128',
    output: `Reviewing PR #128: "Add retry to upload"

Changed: 4 files (+182 / -33)

Findings:
⚠️  src/upload.ts:54 — 重试未设置上限，可能无限循环
⚠️  src/upload.ts:71 — 错误被吞掉，建议记录日志
✅ 测试覆盖了主要路径

Overall: 需要小修改后可合并`,
    category: 'slash',
    difficulty: 'intermediate',
    bestPractices: [
      '合并前用它做一次自动审查',
      '结合人工审查而非完全替代',
      '关注边界条件与错误处理'
    ],
    commonMistakes: [
      '只看结论不看具体问题点',
      '把 /review 用于本地未提交改动'
    ],
    relatedCommands: ['/code-review', '/security-review']
  },
  {
    id: 'slash-code-review',
    name: '/code-review',
    description: '审查当前工作区改动中的 bug 与可简化点',
    syntax: '/code-review [low|medium|high] [--fix] [--comment]',
    example: '/code-review high',
    output: `Reviewing local diff (effort: high)

src/store/useAppStore.ts
  🐛 markCommandCompleted 未去重，重复 id 会共享完成状态
  ♻️  history 截断逻辑可抽成工具函数

Run with --fix to apply, or --comment to post on PR.`,
    category: 'slash',
    difficulty: 'intermediate',
    bestPractices: [
      '提交前对本地改动做一次审查',
      '用 --fix 让其直接应用修复',
      '根据改动规模选择 effort 级别'
    ],
    commonMistakes: [
      '把它当作 bug 猎手以外的全能工具',
      '不复核 --fix 自动应用的改动'
    ],
    relatedCommands: ['/simplify', '/review']
  },
  {
    id: 'slash-security-review',
    name: '/security-review',
    description: '对当前分支的待提交改动做安全审查',
    syntax: '/security-review',
    example: '/security-review',
    output: `Scanning pending changes for vulnerabilities...

🔴 High: src/api.ts:22 — 拼接 SQL，存在注入风险
🟡 Medium: src/config.ts:9 — 硬编码 API key
✅ 未发现敏感信息泄漏到日志

Recommendations:
- 使用参数化查询
- 将密钥移入环境变量`,
    category: 'slash',
    difficulty: 'advanced',
    bestPractices: [
      '在合并涉及输入处理的改动前运行',
      '优先修复高危项',
      '把密钥等敏感信息移出代码'
    ],
    commonMistakes: [
      '忽略中危及以下的告警',
      '只在上线前才做唯一一次安全检查'
    ],
    relatedCommands: ['/review', '/code-review']
  },
  {
    id: 'slash-rewind',
    name: '/rewind',
    description: '回退到之前的检查点(代码与/或对话)',
    syntax: '/rewind   (或连按两次 Esc)',
    example: '/rewind',
    output: `Checkpoints (most recent first)

  ● now            current state
  ○ 3 min ago      edited Terminal.tsx
  ○ 8 min ago      created commands entries
  ○ 15 min ago     before refactor

Select restore scope:
  [1] Code only  [2] Conversation only  [3] Both`,
    category: 'slash',
    difficulty: 'intermediate',
    bestPractices: [
      '尝试有风险的改动前心里有"可回退"的底',
      '可只回退代码而保留对话上下文',
      '连按两次 Esc 是更快的入口'
    ],
    commonMistakes: [
      '把检查点当作 Git 提交的替代品',
      '回退范围选错（误删了想保留的对话）'
    ],
    relatedCommands: ['Esc Esc 检查点', 'claude --continue']
  },
  {
    id: 'slash-usage',
    name: '/usage',
    description: '查看本次会话的用量与成本(别名 /cost)',
    syntax: '/usage',
    example: '/usage',
    output: `Session usage

  Model            Opus 4.8
  Input tokens     128,540
  Output tokens    24,310
  Cache read       512,000
  ─────────────────────────
  Est. cost        $1.84
  Duration         42m`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '定期查看以掌握成本',
      '成本偏高时考虑切换更轻的模型',
      '利用缓存命中降低开销'
    ],
    commonMistakes: [
      '完全不关注 token 消耗',
      '长时间用最强模型处理简单任务'
    ],
    relatedCommands: ['/model', '/status']
  },
  {
    id: 'slash-doctor',
    name: '/doctor',
    description: '诊断 Claude Code 的安装与配置健康状况',
    syntax: '/doctor',
    example: '/doctor',
    output: `Running diagnostics...

✅ Version            up to date
✅ Auth               logged in
✅ Network            api reachable
⚠️  MCP server "db"   failed to start
✅ Settings           valid JSON

1 warning. See above for details.`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '遇到异常行为时先运行诊断',
      '根据告警逐项排查',
      '升级后确认环境正常'
    ],
    commonMistakes: [
      '忽略诊断中的告警继续使用',
      '不读取具体错误就重装'
    ],
    relatedCommands: ['/status', 'claude --version']
  },
  {
    id: 'slash-status',
    name: '/status',
    description: '显示版本、模型、账户与连接状态',
    syntax: '/status',
    example: '/status',
    output: `Claude Code status

  Version    latest
  Model      Opus 4.8
  Account    you@example.com (Max)
  Workdir    ~/project
  MCP        2 connected
  Output     interactive`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '反馈问题时附上 /status 信息',
      '确认当前所用模型与目录',
      '检查 MCP 连接是否正常'
    ],
    commonMistakes: [
      '不确认当前模型就开始重要任务',
      '在错误的工作目录中操作'
    ],
    relatedCommands: ['/doctor', '/usage']
  },
  {
    id: 'slash-export',
    name: '/export',
    description: '将当前对话导出为纯文本',
    syntax: '/export [文件名]',
    example: '/export session.md',
    output: `Exporting conversation...

✅ Wrote 36 messages → session.md
   Included code blocks and tool results

Tip: 用于分享调试过程或留存复盘。`,
    category: 'slash',
    difficulty: 'beginner',
    bestPractices: [
      '复盘或分享时导出留存',
      '用描述性文件名便于检索',
      '导出前注意去除敏感信息'
    ],
    commonMistakes: [
      '导出包含密钥等敏感内容',
      '文件名无意义难以归档'
    ],
    relatedCommands: ['/resume', '/copy']
  },

  // ===== Advanced Features (高级功能) =====
  {
    id: 'feat-subagents',
    name: '/agents (子代理)',
    description: '创建与管理拥有独立上下文、可并行工作的子代理',
    syntax: '/agents   ·   配置目录 .claude/agents/',
    example: '/agents',
    output: `Subagents

  > code-reviewer   审查改动，只读
    test-runner     运行并修复测试
    + Create new agent

子代理拥有独立上下文，可并行执行，
主会话只接收它们的最终结论，避免污染主上下文。
定义文件位于 .claude/agents/<name>。`,
    category: 'features',
    difficulty: 'advanced',
    bestPractices: [
      '把可并行、范围清晰的工作交给子代理',
      '给子代理最小必要的工具权限',
      '让其返回结论而非冗长过程'
    ],
    commonMistakes: [
      '把需要主上下文的任务硬塞给子代理',
      '赋予过宽的工具权限'
    ],
    relatedCommands: ['技能', '自定义斜杠命令']
  },
  {
    id: 'feat-hooks',
    name: 'Hooks (钩子)',
    description: '在生命周期事件上自动执行的确定性 Shell 命令',
    syntax: '.claude/settings.json → hooks   ·   /hooks 查看',
    example: '/hooks',
    output: `Configured hooks

  PostToolUse (Write|Edit) → npm run format
  Stop                     → npm run build

钩子由 harness 确定性执行，Claude 无法跳过。
常见用途：编辑后自动格式化、提交前校验、
完成时发送通知。`,
    category: 'features',
    difficulty: 'advanced',
    bestPractices: [
      '用钩子强制执行格式化/校验等确定性步骤',
      '保持钩子命令快速，避免拖慢交互',
      '在 settings.json 中版本化团队钩子'
    ],
    commonMistakes: [
      '把应交给钩子的强约束写进 CLAUDE.md（可能被忽略）',
      '钩子命令过慢拖累每次编辑'
    ],
    relatedCommands: ['技能', '/config']
  },
  {
    id: 'feat-skills',
    name: 'Agent Skills (技能)',
    description: '打包的可复用指令，匹配任务时自动调用或用斜杠触发',
    syntax: '.claude/skills/<name>/SKILL.md   ·   /skills 列表',
    example: '/skills',
    output: `Available skills

  /commit-push-pr   提交、推送并开 PR
  /frontend-design  生成高质量前端界面
  /deep-research    多源检索并产出带引用报告

技能由带 description 的 SKILL.md 定义；
可由模型自动调用，也可用 /<name> 手动触发。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '把重复的多步工作流沉淀为技能',
      '写清楚 description 以便正确触发',
      '有副作用的技能禁用模型自动调用'
    ],
    commonMistakes: [
      'description 含糊导致技能不被触发',
      '把一次性任务也做成技能'
    ],
    relatedCommands: ['自定义斜杠命令', '/agents']
  },
  {
    id: 'feat-plugins',
    name: 'Plugins (插件与市场)',
    description: '一键安装打包好的技能、子代理、钩子与 MCP 服务器',
    syntax: '/plugin   ·   /plugin install <name>@<marketplace>',
    example: '/plugin install frontend-design@claude-plugins-official',
    output: `Installing frontend-design@claude-plugins-official...

✅ Added: 1 skill, 2 subagents, 1 hook

Browse more with /plugin
插件把技能/代理/钩子/MCP 捆绑分发，便于团队共享。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '用官方市场发现可复用能力',
      '只安装需要的插件保持环境精简',
      '可自建插件在团队内共享'
    ],
    commonMistakes: [
      '安装过多插件造成干扰',
      '不了解插件引入的权限与行为'
    ],
    relatedCommands: ['技能', 'MCP 服务器']
  },
  {
    id: 'feat-mcp',
    name: 'MCP 服务器',
    description: '通过模型上下文协议连接外部工具与数据源',
    syntax: 'claude mcp add <name> -- <command>   ·   /mcp 管理',
    example: 'claude mcp add github -- npx -y @modelcontextprotocol/server-github',
    output: `Adding MCP server "github"...

✅ Registered (stdio)
   Tools: search_repos, get_issue, create_pr ...

Manage & authenticate with /mcp
MCP 让 Claude 安全地访问数据库、API、文件系统等。`,
    category: 'features',
    difficulty: 'advanced',
    bestPractices: [
      '只连接可信的 MCP 服务器',
      '用 /mcp 检查连接与鉴权状态',
      '按项目/用户范围管理服务器配置'
    ],
    commonMistakes: [
      '连接来源不明的服务器带来安全风险',
      '启用过多不必要的服务器'
    ],
    relatedCommands: ['插件', '/status']
  },
  {
    id: 'feat-plan-mode',
    name: 'Plan Mode (计划模式)',
    description: '让 Claude 先给出方案、获批后再动手',
    syntax: 'Shift+Tab 循环切换  ·  claude --permission-mode plan',
    example: 'Shift+Tab',
    output: `Permission mode: plan

在计划模式下：
- Claude 先调研并提出实现方案
- 不会直接修改文件
- 你批准后才进入执行

适合复杂或高风险改动，先对齐再动手。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '复杂任务先用计划模式对齐方案',
      '审阅计划后再批准执行',
      '用 Shift+Tab 在模式间快速切换'
    ],
    commonMistakes: [
      '高风险改动跳过计划直接执行',
      '不审阅计划就一路批准'
    ],
    relatedCommands: ['/permissions', '扩展思考']
  },
  {
    id: 'feat-thinking',
    name: 'Extended Thinking (扩展思考)',
    description: '让模型在回答前进行更深入的推理',
    syntax: '提示中说 "think" / 切换 Alt+T / 设置思考强度',
    example: 'think hard about the edge cases before refactoring',
    output: `Extended thinking: on

模型会在作答前展开更长的推理链，
更适合架构权衡、棘手 bug、算法设计等。

提示词中加入 "think" 可临时加深思考；
更高强度可通过设置或 effort 级别调整。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '难题（架构/算法/疑难 bug）开启更深思考',
      '简单任务无需开启以免变慢',
      '在提示中明确要思考的重点'
    ],
    commonMistakes: [
      '对琐碎任务也强制深度思考',
      '期望它替代清晰的问题描述'
    ],
    relatedCommands: ['/model', '计划模式']
  },
  {
    id: 'feat-claude-md',
    name: 'CLAUDE.md 记忆',
    description: '每次会话自动加载的项目记忆，可用 # 快速追加',
    syntax: 'CLAUDE.md / CLAUDE.local.md   ·   输入以 # 开头追加',
    example: '# 始终使用 2 空格缩进',
    output: `Saved to memory (CLAUDE.md):
  "始终使用 2 空格缩进"

记忆文件在会话开始时自动注入：
- ./CLAUDE.md         团队共享（入库）
- ./CLAUDE.local.md   个人私有（gitignore）
- ~/.claude/CLAUDE.md 所有项目通用
支持用 @path 内联引用其他文件。`,
    category: 'features',
    difficulty: 'beginner',
    bestPractices: [
      '只写"不写就会出错"的关键信息',
      '用 # 在工作流中随手沉淀约定',
      '团队约定入库、个人偏好放 local'
    ],
    commonMistakes: [
      '把易变信息硬编码进记忆',
      '记忆冗长稀释了关键指令'
    ],
    relatedCommands: ['/memory', '/init']
  },
  {
    id: 'feat-at-mentions',
    name: '@ 文件引用',
    description: '在提示中用 @ 直接引用文件或目录',
    syntax: '@路径   (输入 @ 触发路径自动补全)',
    example: '解释 @src/store/useAppStore.ts 的状态结构',
    output: `Referenced: src/store/useAppStore.ts

已读取该文件并纳入上下文。
@ 支持自动补全文件与目录路径，
比手动粘贴更精确，也便于一次引用多个文件。`,
    category: 'features',
    difficulty: 'beginner',
    bestPractices: [
      '用 @ 精确指向相关文件而非泛泛描述',
      '一次只引用真正需要的文件',
      '配合补全减少路径输入错误'
    ],
    commonMistakes: [
      '一次性引用过多文件撑爆上下文',
      '描述模糊不指明具体文件'
    ],
    relatedCommands: ['CLAUDE.md 记忆', '/context']
  },
  {
    id: 'feat-custom-commands',
    name: '自定义斜杠命令',
    description: '把常用提示保存为可复用的 /命令',
    syntax: '.claude/commands/<name>.md → /<name>',
    example: '/fix-issue 128',
    output: `Created .claude/commands/fix-issue.md

  ---
  description: 按编号修复 GitHub issue
  ---
  读取 issue $ARGUMENTS，定位相关代码并修复，
  补充测试后开 PR。

之后输入 /fix-issue 128 即可复用，
$ARGUMENTS 会被替换为你传入的参数。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '把高频提示固化为命令统一团队用法',
      '用 $ARGUMENTS 接收参数提升复用性',
      '为命令写清晰 description'
    ],
    commonMistakes: [
      '命令职责过宽难以维护',
      '把有副作用的命令暴露给自动调用'
    ],
    relatedCommands: ['技能', '/agents']
  },
  {
    id: 'feat-background',
    name: '后台任务 (Ctrl+B)',
    description: '把长耗时命令放到后台运行，不阻塞当前会话',
    syntax: 'Ctrl+B  ·  /tasks 查看后台任务',
    example: 'Ctrl+B',
    output: `Backgrounded: npm run dev

  [bg] dev server starting on :5173 ...

会话不被阻塞，可继续对话；
任务完成或有输出时会通知你，用 /tasks 查看与管理。`,
    category: 'features',
    difficulty: 'intermediate',
    bestPractices: [
      '把 dev server、长测试等放到后台',
      '用 /tasks 跟踪后台任务状态',
      '需要其输出时再回看'
    ],
    commonMistakes: [
      '把需要即时结果的命令放后台',
      '忘记后台仍在运行的进程'
    ],
    relatedCommands: ['/status', '/usage']
  }
];

export const categories: CommandCategory[] = [
  {
    id: 'basic',
    name: '基础命令',
    description: 'Claude Code 的基本操作与会话命令',
    icon: '🔧',
    commands: commands.filter(cmd => cmd.category === 'basic')
  },
  {
    id: 'flags',
    name: 'CLI 标志',
    description: 'Claude Code 的命令行标志与选项',
    icon: '🏁',
    commands: commands.filter(cmd => cmd.category === 'flags')
  },
  {
    id: 'pipeline',
    name: '管道命令',
    description: '处理管道输入与数据流',
    icon: '🔄',
    commands: commands.filter(cmd => cmd.category === 'pipeline')
  },
  {
    id: 'slash',
    name: '斜杠命令',
    description: '交互模式中最新的 / 斜杠命令',
    icon: '⌨️',
    commands: commands.filter(cmd => cmd.category === 'slash')
  },
  {
    id: 'features',
    name: '高级功能',
    description: '子代理、技能、钩子、插件、MCP、计划模式等',
    icon: '🚀',
    commands: commands.filter(cmd => cmd.category === 'features')
  }
];

export const getDifficultyColor = (difficulty: Command['difficulty']) => {
  switch (difficulty) {
    case 'beginner':
      return 'text-green-400';
    case 'intermediate':
      return 'text-yellow-400';
    case 'advanced':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
};

export const getDifficultyLabel = (difficulty: Command['difficulty']) => {
  switch (difficulty) {
    case 'beginner':
      return '初级';
    case 'intermediate':
      return '中级';
    case 'advanced':
      return '高级';
    default:
      return '未知';
  }
};
