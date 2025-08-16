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
  // Basic Commands
  {
    id: 'claude-help',
    name: 'claude --help',
    description: '显示Claude CLI的帮助信息和可用命令',
    syntax: 'claude --help [command]',
    example: 'claude --help',
    output: `Claude CLI - AI Assistant Command Line Interface

Usage: claude [options] [command]

Commands:
  chat        Start an interactive chat session
  generate    Generate code or text
  analyze     Analyze files or code
  config      Manage configuration settings

Options:
  --help      Show help information
  --version   Show version number
  --verbose   Enable verbose output`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '总是先查看帮助信息了解可用选项',
      '使用 --help 获取特定命令的详细信息',
      '定期检查新功能和更新'
    ],
    commonMistakes: [
      '忘记查看帮助就直接使用命令',
      '不了解命令的完整语法'
    ],
    relatedCommands: ['claude --version', 'claude config']
  },
  {
    id: 'claude-version',
    name: 'claude --version',
    description: '显示当前Claude CLI的版本信息',
    syntax: 'claude --version',
    example: 'claude --version',
    output: 'Claude CLI v2.1.0\nBuild: 2024.01.15\nAPI Version: 3.0',
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '定期检查版本确保使用最新功能',
      '在报告问题时提供版本信息',
      '升级前备份重要配置'
    ],
    commonMistakes: [
      '使用过时版本导致功能缺失',
      '不检查兼容性就升级'
    ],
    relatedCommands: ['claude --help', 'claude update']
  },
  {
    id: 'claude-config-list',
    name: 'claude config list',
    description: '列出当前的配置设置',
    syntax: 'claude config list [--format json|table]',
    example: 'claude config list',
    output: `Configuration Settings:
┌─────────────────┬──────────────────────────────┐
│ Setting         │ Value                        │
├─────────────────┼──────────────────────────────┤
│ api_key         │ sk-ant-*********************  │
│ model           │ claude-3-sonnet-20240229     │
│ max_tokens      │ 4096                         │
│ temperature     │ 0.7                          │
│ output_format   │ markdown                     │
└─────────────────┴──────────────────────────────┘`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '定期检查配置确保设置正确',
      '使用表格格式便于阅读',
      '保护敏感信息如API密钥'
    ],
    commonMistakes: [
      '暴露完整的API密钥',
      '忘记检查配置导致意外行为'
    ],
    relatedCommands: ['claude config set', 'claude config get']
  },
  {
    id: 'claude-interactive',
    name: 'claude',
    description: '启动Claude Code交互模式',
    syntax: 'claude',
    example: 'claude',
    output: `Claude Code Interactive Mode
Version: 2.1.0

Welcome to Claude Code! Type your commands or questions.
Type '/help' for available commands, 'exit' to quit.

> `,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '使用交互模式进行复杂的多轮对话',
      '利用上下文进行连续的代码开发',
      '定期保存重要的对话内容'
    ],
    commonMistakes: [
      '忘记保存重要的交互会话',
      '不利用上下文连续性'
    ],
    relatedCommands: ['claude -c', 'claude -r', '/help']
  },
  {
    id: 'claude-task',
    name: 'claude "task"',
    description: '运行一次性任务',
    syntax: 'claude "[task description]"',
    example: 'claude "fix the build error"',
    output: `Analyzing build error...

Found issue in package.json:
- Missing dependency: @types/react

Suggested fix:
npm install @types/react --save-dev

Task completed successfully.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '提供清晰具体的任务描述',
      '使用双引号包围任务内容',
      '验证任务执行结果'
    ],
    commonMistakes: [
      '任务描述过于模糊',
      '忘记使用引号包围任务'
    ],
    relatedCommands: ['claude -p', 'claude generate']
  },
  {
    id: 'claude-query',
    name: 'claude -p "query"',
    description: '运行一次性查询，然后退出',
    syntax: 'claude -p "[query]"',
    example: 'claude -p "explain this function"',
    output: `Query: explain this function

This function appears to be a React component that:
1. Uses useState hook for state management
2. Implements event handlers for user interactions
3. Returns JSX elements for rendering

Key features:
- Functional component pattern
- Hook-based state management
- Event-driven architecture

Query completed.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '使用-p参数进行快速查询',
      '提供具体的查询内容',
      '适用于单次信息获取'
    ],
    commonMistakes: [
      '查询内容不够具体',
      '在需要多轮对话时使用单次查询'
    ],
    relatedCommands: ['claude', 'claude "task"']
  },
  {
    id: 'claude-continue',
    name: 'claude -c',
    description: '继续最近的对话',
    syntax: 'claude -c',
    example: 'claude -c',
    output: `Resuming conversation from session: sess_20240115_143022
Last message: "Can you help me optimize this React component?"

Continuing where we left off...

> I can help you optimize that React component. Let me review the code we were discussing.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '用于恢复中断的对话',
      '保持对话的连续性',
      '确保会话已正确保存'
    ],
    commonMistakes: [
      '没有保存的会话无法继续',
      '混淆不同的对话会话'
    ],
    relatedCommands: ['claude -r', 'claude chat --save']
  },
  {
    id: 'claude-restore',
    name: 'claude -r',
    description: '恢复之前的对话',
    syntax: 'claude -r [session_id]',
    example: 'claude -r',
    output: `Available sessions:
1. sess_20240115_143022 - React optimization (2 hours ago)
2. sess_20240115_120045 - Python debugging (5 hours ago)
3. sess_20240114_165530 - API integration (1 day ago)

Select session (1-3): 1

Restoring session: React optimization
Loaded 15 messages, 2,847 tokens

> Welcome back! We were working on optimizing your React component.`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '定期查看可用的会话',
      '使用描述性的会话名称',
      '清理过期的会话文件'
    ],
    commonMistakes: [
      '会话文件管理混乱',
      '恢复错误的会话'
    ],
    relatedCommands: ['claude -c', 'claude chat --list']
  },
  {
    id: 'claude-commit',
    name: 'claude commit',
    description: '创建Git提交',
    syntax: 'claude commit [--message "commit message"]',
    example: 'claude commit',
    output: `Analyzing staged changes...

Files to commit:
  modified: src/components/Header.tsx
  modified: src/styles/main.css
  new file: src/utils/helpers.ts

Generated commit message:
"feat: add responsive header component with utility helpers

- Implement mobile-responsive navigation
- Add CSS utilities for consistent styling
- Create helper functions for common operations"

Commit created: a1b2c3d
Pushed to origin/main`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '确保代码已暂存到Git',
      '让Claude生成语义化的提交信息',
      '检查提交内容的准确性'
    ],
    commonMistakes: [
      '提交前未暂存文件',
      '不检查生成的提交信息'
    ],
    relatedCommands: ['git add', 'git status']
  },
  {
    id: 'clear-command',
    name: '/clear',
    description: '清除对话历史',
    syntax: '/clear',
    example: '/clear',
    output: `Conversation history cleared.
Starting fresh session...

> Hello! How can I help you today?`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '在开始新主题前清除历史',
      '保护敏感信息不被保留',
      '定期清理以提高性能'
    ],
    commonMistakes: [
      '清除前未保存重要内容',
      '频繁清除导致上下文丢失'
    ],
    relatedCommands: ['claude chat --save', '/help']
  },
  {
    id: 'help-command',
    name: '/help',
    description: '显示可用命令',
    syntax: '/help [command]',
    example: '/help',
    output: `Available Commands:

Basic Commands:
  claude              Start interactive mode
  claude "task"       Run one-time task
  claude -p "query"   Quick query and exit
  claude -c           Continue recent conversation
  claude -r           Restore previous conversation
  claude commit       Create Git commit

Session Commands:
  /clear              Clear conversation history
  /help               Show this help message
  /save [filename]    Save current session
  /load [filename]    Load saved session

Navigation:
  exit, Ctrl+C        Exit Claude Code

For detailed help on a specific command, use: /help [command]`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '经常查看帮助了解新功能',
      '使用具体命令获取详细帮助',
      '熟悉所有可用命令'
    ],
    commonMistakes: [
      '不查看帮助就使用命令',
      '忽略命令的可选参数'
    ],
    relatedCommands: ['claude --help', '/clear']
  },
  {
    id: 'exit-command',
    name: 'exit',
    description: '退出Claude Code',
    syntax: 'exit 或 Ctrl+C',
    example: 'exit',
    output: `Saving session...
Session saved to: ~/.claude/sessions/sess_20240115_143022.json

Thank you for using Claude Code!
Goodbye! 👋`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '使用exit命令正常退出',
      '确保重要会话已保存',
      '检查是否有未完成的任务'
    ],
    commonMistakes: [
      '强制关闭导致会话丢失',
      '退出前未保存重要内容'
    ],
    relatedCommands: ['claude chat --save', '/clear']
  },
  {    id: 'claude-update',    name: 'claude update',    description: '更新Claude CLI到最新版本',    syntax: 'claude update',    example: 'claude update',    output: `Checking for updates...

Current version: 2.1.0
Latest version: 2.2.0

Downloading update...
████████████████████████████████ 100%

Update completed successfully!
Claude CLI updated to version 2.2.0

Changelog:
- Improved performance
- Added new MCP support
- Bug fixes and stability improvements

Restart your terminal to use the new version.`,    category: 'basic',    difficulty: 'beginner',    bestPractices: [      '定期检查和安装更新',      '更新前备份重要配置',      '阅读更新日志了解新功能'    ],    commonMistakes: [      '长期不更新导致功能缺失',      '不备份配置直接更新'    ],    relatedCommands: ['claude --version', 'claude --help']  },  {    id: 'claude-mcp',    name: 'claude mcp',    description: '配置模型上下文协议(MCP)服务器',    syntax: 'claude mcp [subcommand] [options]',    example: 'claude mcp list',    output: `MCP Server Configuration

Available servers:
┌─────────────────┬──────────────┬─────────────┐
│ Name            │ Status       │ Version     │
├─────────────────┼──────────────┼─────────────┤
│ filesystem      │ ✅ Active    │ 1.0.2       │
│ git             │ ✅ Active    │ 0.9.1       │
│ database        │ ❌ Inactive  │ 1.1.0       │
└─────────────────┴──────────────┴─────────────┘

Commands:
  claude mcp list     - List all MCP servers
  claude mcp enable   - Enable MCP server
  claude mcp disable  - Disable MCP server
  claude mcp config   - Configure MCP settings`,    category: 'basic',    difficulty: 'intermediate',    bestPractices: [      '定期检查MCP服务器状态',      '只启用需要的MCP服务器',      '了解每个服务器的功能'    ],    commonMistakes: [      '启用过多不必要的服务器',      '不了解服务器权限范围'    ],    relatedCommands: ['claude config', 'claude --allowedTools']  },  {    id: 'claude-allowed-tools',    name: 'claude --allowedTools',    description: '指定允许的工具列表，无需用户许可',    syntax: 'claude --allowedTools "tool1" "tool2" ...',    example: 'claude --allowedTools "Bash(git log:*)" "Bash(git diff:*)" "Read"',    output: `Configuring allowed tools...

✅ Allowed tools configured:
- Bash(git log:*) - Git log operations
- Bash(git diff:*) - Git diff operations  
- Read - File reading operations

These tools will execute without permission prompts.

Starting session with pre-approved tools...`,    category: 'flags',    difficulty: 'advanced',    bestPractices: [      '只允许安全的工具操作',      '使用通配符模式限制范围',      '定期审查允许的工具列表'    ],    commonMistakes: [      '允许过于宽泛的工具权限',      '不了解工具的安全影响'    ],    relatedCommands: ['claude --disallowedTools', 'claude --add-dir']  },  {    id: 'claude-disallowed-tools',    name: 'claude --disallowedTools',    description: '指定禁止的工具列表',    syntax: 'claude --disallowedTools "tool1" "tool2" ...',    example: 'claude --disallowedTools "Bash(rm:*)" "Edit" "Delete"',    output: `Configuring disallowed tools...

🚫 Disallowed tools configured:
- Bash(rm:*) - File deletion operations
- Edit - File editing operations
- Delete - File deletion operations

These tools are blocked and will not be available.

Starting session with tool restrictions...`,    category: 'flags',    difficulty: 'advanced',    bestPractices: [      '禁止危险的操作工具',      '使用通配符模式精确控制',      '平衡安全性和功能性'    ],    commonMistakes: [      '禁止过多必要工具',      '不测试工具限制效果'    ],    relatedCommands: ['claude --allowedTools', 'claude --permission-mode']  },  {    id: 'claude-append-system-prompt',    name: 'claude --append-system-prompt',    description: '附加到系统提示(仅与--print一起使用)',    syntax: 'claude --append-system-prompt "custom instruction" -p "query"',    example: 'claude --append-system-prompt "Always respond in JSON format" -p "analyze this code"',    output: `System prompt configured with custom instruction:
"Always respond in JSON format"

Query: analyze this code

{
  "analysis": {
    "language": "JavaScript",
    "complexity": "medium",
    "issues": [
      {
        "type": "performance",
        "description": "Inefficient loop structure",
        "line": 15
      }
    ],
    "suggestions": [
      "Use array methods for better performance",
      "Add error handling"
    ]
  }
}`,    category: 'flags',    difficulty: 'intermediate',    bestPractices: [      '仅在打印模式下使用',      '提供清晰的自定义指令',      '测试指令对输出的影响'    ],    commonMistakes: [      '在交互模式下使用',      '指令与查询内容冲突'    ],    relatedCommands: ['claude -p', 'claude --output-format']  },  {    id: 'claude-output-format',    name: 'claude --output-format',    description: '为打印模式指定输出格式',    syntax: 'claude -p "query" --output-format [text|json|stream-json]',    example: 'claude -p "analyze this function" --output-format json',    output: `{
  "query": "analyze this function",
  "analysis": {
    "function_name": "calculateTotal",
    "parameters": ["items", "taxRate"],
    "return_type": "number",
    "complexity": "low",
    "performance": "good",
    "suggestions": [
      "Add input validation",
      "Consider memoization for large datasets"
    ]
  },
  "timestamp": "2024-01-15T14:30:22Z"
}`,    category: 'flags',    difficulty: 'intermediate',    bestPractices: [      '选择适合用途的输出格式',      '使用JSON格式便于程序处理',      '流式JSON适用于实时处理'    ],    commonMistakes: [      '格式选择与用途不匹配',      '不处理JSON解析错误'    ],    relatedCommands: ['claude -p', 'claude --input-format']  },  {    id: 'claude-verbose',    name: 'claude --verbose',    description: '启用详细日志记录，显示完整的轮次输出',    syntax: 'claude --verbose [other options]',    example: 'claude --verbose -p "debug this issue"',    output: `🔍 Verbose mode enabled

[DEBUG] Session started at 2024-01-15T14:30:22Z
[DEBUG] Model: claude-3-sonnet-20240229
[DEBUG] Max tokens: 4096
[DEBUG] Temperature: 0.7

[TURN 1] User input: "debug this issue"
[DEBUG] Input tokens: 4
[DEBUG] Processing time: 1.2s

[TURN 1] Assistant response:
I'll help you debug this issue. Let me analyze the problem...

[DEBUG] Output tokens: 156
[DEBUG] Total tokens used: 160
[DEBUG] Session duration: 3.4s

✅ Query completed successfully`,    category: 'flags',    difficulty: 'beginner',    bestPractices: [      '用于调试和性能分析',      '监控token使用情况',      '分析响应时间'    ],    commonMistakes: [      '在生产环境中启用详细模式',      '忽略性能指标信息'    ],    relatedCommands: ['claude -p', 'claude --max-turns']  },  {    id: 'claude-model',    name: 'claude --model',    description: '为当前会话设置模型',    syntax: 'claude --model [sonnet|opus|model-name]',    example: 'claude --model claude-sonnet-4-20250514',    output: `Model configuration updated:

🤖 Selected model: claude-sonnet-4-20250514
📊 Model capabilities:
- Context length: 200K tokens
- Multimodal: Yes (text, images)
- Code generation: Advanced
- Reasoning: Enhanced

✅ Session started with selected model

> Hello! I'm Claude Sonnet. How can I help you today?`,    category: 'flags',    difficulty: 'intermediate',    bestPractices: [      '选择适合任务的模型',      '了解不同模型的能力',      '考虑成本和性能平衡'    ],    commonMistakes: [      '使用过于强大的模型处理简单任务',      '不了解模型的限制'    ],    relatedCommands: ['claude --verbose', 'claude config']  },  {    id: 'claude-add-dir',    name: 'claude --add-dir',    description: '添加额外的工作目录供Claude访问',    syntax: 'claude --add-dir <directory1> [directory2] ...',    example: 'claude --add-dir ../apps ../lib',    output: `Adding additional directories...

✅ Added: /project/apps (verified as directory)
✅ Added: /project/lib (verified as directory)

Claude now has access to:
- Current directory: /project/current
- Additional directories:
  - /project/apps
  - /project/lib

Starting interactive session with expanded access...`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '验证目录路径存在',
      '只添加必要的目录',
      '使用相对路径保持可移植性'
    ],
    commonMistakes: [
      '添加不存在的目录',
      '添加过多目录影响性能',
      '添加敏感目录造成安全风险'
    ],
    relatedCommands: ['claude config', 'claude --allowedTools']
  },
  {
    id: 'claude-update',
    name: 'claude update',
    description: '更新Claude Code到最新版本',
    syntax: 'claude update [--check-only]',
    example: 'claude update',
    output: `Checking for updates...

Current version: 1.2.3
Latest version: 1.3.0

Downloading update...
✅ Update downloaded
✅ Installation complete

Claude Code has been updated to version 1.3.0
Restart your terminal to use the new version.`,
    category: 'basic',
    difficulty: 'beginner',
    bestPractices: [
      '定期检查更新',
      '在更新前备份重要配置',
      '阅读更新日志了解新功能'
    ],
    commonMistakes: [
      '网络连接问题导致更新失败',
      '更新后不重启终端'
    ],
    relatedCommands: ['claude --version', 'claude --help']
  },
  {
    id: 'claude-mcp',
    name: 'claude mcp',
    description: '配置模型上下文协议(MCP)服务器',
    syntax: 'claude mcp [configure|list|add|remove] [options]',
    example: 'claude mcp configure',
    output: `MCP Configuration

Available MCP servers:
1. filesystem - File system operations
2. git - Git repository management
3. database - Database connections
4. web - Web scraping and API calls

Select servers to enable (1-4, comma separated): 1,2

Configuring MCP servers...
✅ filesystem server configured
✅ git server configured

MCP setup completed!
Restart Claude to apply changes.`,
    category: 'basic',
    difficulty: 'advanced',
    bestPractices: [
      '只启用需要的MCP服务器',
      '定期检查MCP服务器状态',
      '了解每个服务器的功能'
    ],
    commonMistakes: [
      '启用过多不必要的服务器',
      '不了解MCP服务器的安全影响'
    ],
    relatedCommands: ['claude config', 'claude --help']
  },
  {
    id: 'claude-continue-sdk',
    name: 'claude -c -p "query"',
    description: '通过SDK继续对话并执行查询',
    syntax: 'claude -c -p "[query]"',
    example: 'claude -c -p "Check for type errors"',
    output: `Continuing previous conversation...
Session: sess_20240115_143022

Executing query: "Check for type errors"

Analyzing TypeScript files...

Found 3 type errors:
1. src/components/Header.tsx:15 - Property 'title' is missing
2. src/utils/helpers.ts:8 - Type 'string' is not assignable to 'number'
3. src/pages/Home.tsx:22 - Object is possibly 'undefined'

Suggested fixes:
- Add title prop to Header component
- Update helper function return type
- Add null check for object access

Query completed.`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '确保有活跃的对话会话',
      '提供具体的查询内容',
      '验证查询结果的准确性'
    ],
    commonMistakes: [
      '没有活跃会话时使用此命令',
      '查询内容过于模糊'
    ],
    relatedCommands: ['claude -c', 'claude -p', 'claude -r']
  },
  {
    id: 'claude-restore-session',
    name: 'claude -r "<session-id>" "query"',
    description: '通过ID恢复特定会话并执行查询',
    syntax: 'claude -r "[session-id]" "[query]"',
    example: 'claude -r "abc123" "Finish this PR"',
    output: `Restoring session: abc123
Session title: "React component optimization"
Loaded 12 messages, 1,847 tokens

Executing query: "Finish this PR"

Analyzing current PR status...

PR Summary:
- 5 files changed
- 2 tests passing
- 1 test failing

Remaining tasks:
1. Fix failing test in Header.test.tsx
2. Update documentation
3. Add type definitions

Generating fixes...
✅ Test fixed
✅ Documentation updated
✅ Types added

PR is ready for review!`,
    category: 'basic',
    difficulty: 'intermediate',
    bestPractices: [
      '使用正确的会话ID',
      '提供清晰的任务描述',
      '验证会话恢复是否成功'
    ],
    commonMistakes: [
      '使用错误或过期的会话ID',
      '任务描述不够具体'
    ],
    relatedCommands: ['claude -r', 'claude -c', 'claude chat --list']
  },

  // Chat Commands
  {
    id: 'claude-chat',
    name: 'claude chat',
    description: '启动交互式聊天会话',
    syntax: 'claude chat [--model model_name] [--system system_prompt]',
    example: 'claude chat --model claude-3-sonnet',
    output: `Starting Claude chat session...
Model: claude-3-sonnet-20240229
Type 'exit' to quit, 'help' for commands

> Hello! I'm Claude, an AI assistant. How can I help you today?`,
    category: 'chat',
    difficulty: 'beginner',
    bestPractices: [
      '选择适合任务的模型',
      '使用清晰的系统提示',
      '保存重要的对话内容'
    ],
    commonMistakes: [
      '使用错误的模型导致性能问题',
      '没有设置合适的系统提示'
    ],
    relatedCommands: ['claude chat --save', 'claude chat --load']
  },
  {
    id: 'claude-chat-save',
    name: 'claude chat --save',
    description: '保存当前聊天会话到文件',
    syntax: 'claude chat --save [filename]',
    example: 'claude chat --save my-session.json',
    output: `Chat session saved to: my-session.json
Session ID: sess_abc123
Messages: 15
Tokens used: 2,847`,
    category: 'chat',
    difficulty: 'intermediate',
    bestPractices: [
      '使用描述性的文件名',
      '定期保存重要对话',
      '组织会话文件到合适的目录'
    ],
    commonMistakes: [
      '忘记保存重要对话',
      '覆盖已有的会话文件'
    ],
    relatedCommands: ['claude chat --load', 'claude chat --list']
  },

  // Code Generation
  {
    id: 'claude-generate',
    name: 'claude generate',
    description: '生成代码或文本内容',
    syntax: 'claude generate [--type code|text] [--language lang] [--output file]',
    example: 'claude generate --type code --language python "Create a function to calculate fibonacci"',
    output: `def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Example usage
print(fibonacci(10))  # Output: 55`,
    category: 'generation',
    difficulty: 'intermediate',
    bestPractices: [
      '提供清晰的需求描述',
      '指定目标编程语言',
      '验证生成的代码'
    ],
    commonMistakes: [
      '需求描述不够清晰',
      '不验证生成代码的正确性'
    ],
    relatedCommands: ['claude analyze', 'claude review']
  },

  // File Analysis
  {
    id: 'claude-analyze',
    name: 'claude analyze',
    description: '分析文件或代码结构',
    syntax: 'claude analyze [file|directory] [--type security|performance|style]',
    example: 'claude analyze src/main.py --type security',
    output: `Security Analysis Report for src/main.py

✅ No critical security issues found
⚠️  2 warnings detected:

1. Line 23: Potential SQL injection vulnerability
   - Use parameterized queries instead of string concatenation
   
2. Line 45: Hardcoded API key detected
   - Move sensitive data to environment variables

Recommendations:
- Implement input validation
- Use environment variables for secrets
- Consider using an ORM for database operations`,
    category: 'analysis',
    difficulty: 'advanced',
    bestPractices: [
      '定期进行安全分析',
      '关注性能瓶颈',
      '遵循代码风格指南'
    ],
    commonMistakes: [
      '忽略安全警告',
      '不定期进行代码审查'
    ],
    relatedCommands: ['claude review', 'claude fix']
  },

  // CLI Flags Commands
  {
    id: 'claude-add-dir',
    name: 'claude --add-dir',
    description: '添加额外的工作目录供Claude访问',
    syntax: 'claude --add-dir [directory1] [directory2] ...',
    example: 'claude --add-dir ../apps ../lib',
    output: `Adding directories to Claude workspace...

✅ ../apps - Directory added successfully
✅ ../lib - Directory added successfully

Claude now has access to:
- /current/project
- /current/apps
- /current/lib

Total files accessible: 247
Starting interactive session...`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '只添加必要的目录',
      '验证目录路径的正确性',
      '注意文件访问权限'
    ],
    commonMistakes: [
      '添加过多不相关的目录',
      '路径不存在或无权限访问'
    ],
    relatedCommands: ['claude config', 'claude --verbose']
  },
  {
    id: 'claude-allowed-tools',
    name: 'claude --allowedTools',
    description: '指定允许的工具列表',
    syntax: 'claude --allowedTools "[tool1]" "[tool2]" ...',
    example: 'claude --allowedTools "Bash(git log:*)" "Bash(git diff:*)" "Read"',
    output: `Configuring allowed tools...

Allowed tools:
✅ Bash(git log:*) - Git log operations
✅ Bash(git diff:*) - Git diff operations  
✅ Read - File reading operations

Restricted tools:
❌ Edit - File editing disabled
❌ Bash(*) - Other bash commands disabled

Security mode: Restricted
Starting session with limited tool access...`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '明确指定需要的工具',
      '使用通配符模式匹配',
      '定期审查工具权限'
    ],
    commonMistakes: [
      '权限设置过于宽泛',
      '忘记包含必要的工具'
    ],
    relatedCommands: ['claude --disallowedTools', 'claude --permission-mode']
  },
  {
    id: 'claude-disallowed-tools',
    name: 'claude --disallowedTools',
    description: '指定禁止的工具列表',
    syntax: 'claude --disallowedTools "[tool1]" "[tool2]" ...',
    example: 'claude --disallowedTools "Bash(rm:*)" "Edit" "Delete"',
    output: `Configuring disallowed tools...

Disallowed tools:
❌ Bash(rm:*) - File deletion commands blocked
❌ Edit - File editing blocked
❌ Delete - File deletion blocked

Allowed tools:
✅ Read - File reading enabled
✅ Bash(git:*) - Git commands enabled
✅ Search - Code search enabled

Security mode: Enhanced
Starting session with restricted tool access...`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '明确禁止危险操作',
      '使用通配符阻止命令类别',
      '保持安全和功能的平衡'
    ],
    commonMistakes: [
      '禁止过多必要工具',
      '安全设置过于严格影响功能'
    ],
    relatedCommands: ['claude --allowedTools', 'claude --permission-mode']
  },
  {
    id: 'claude-append-system-prompt',
    name: 'claude --append-system-prompt',
    description: '附加到系统提示(仅与--print一起使用)',
    syntax: 'claude --append-system-prompt "[custom instruction]" -p "[query]"',
    example: 'claude --append-system-prompt "Always provide TypeScript examples" -p "Create a React component"',
    output: `System prompt updated with custom instruction.

Query: Create a React component

Here's a TypeScript React component example:

\`\`\`typescript
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'primary' 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
\`\`\``,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '提供清晰的自定义指令',
      '与-p参数结合使用',
      '测试自定义提示的效果'
    ],
    commonMistakes: [
      '不与-p参数一起使用',
      '自定义指令过于复杂'
    ],
    relatedCommands: ['claude -p', 'claude --output-format']
  },
  {
    id: 'claude-output-format',
    name: 'claude --output-format',
    description: '为打印模式指定输出格式',
    syntax: 'claude -p "[query]" --output-format [text|json|stream-json]',
    example: 'claude -p "List project files" --output-format json',
    output: `{
  "response": {
    "content": "Here are the project files:",
    "files": [
      {
        "name": "package.json",
        "type": "file",
        "size": "1.2KB"
      },
      {
        "name": "src/",
        "type": "directory",
        "children": 15
      },
      {
        "name": "README.md",
        "type": "file",
        "size": "3.4KB"
      }
    ]
  },
  "metadata": {
    "timestamp": "2024-01-15T14:30:22Z",
    "tokens_used": 156
  }
}`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '选择适合的输出格式',
      '与自动化脚本集成时使用JSON',
      '验证输出格式的正确性'
    ],
    commonMistakes: [
      '格式选择不当影响解析',
      '不处理JSON格式的错误'
    ],
    relatedCommands: ['claude -p', 'claude --input-format']
  },
  {
    id: 'claude-input-format',
    name: 'claude --input-format',
    description: '为打印模式指定输入格式',
    syntax: 'claude -p --input-format [text|stream-json] --output-format json',
    example: 'claude -p --input-format stream-json --output-format json',
    output: `Reading stream-json input...

Input processed:
- 3 messages received
- 247 tokens processed
- Context established

Generating JSON response...

{
  "status": "success",
  "processed_messages": 3,
  "response": {
    "content": "Input stream processed successfully",
    "context_tokens": 247
  }
}`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '确保输入格式匹配',
      '验证JSON输入的有效性',
      '处理流式输入的错误'
    ],
    commonMistakes: [
      '输入格式不匹配',
      '无效的JSON输入'
    ],
    relatedCommands: ['claude --output-format', 'claude -p']
  },
  {
    id: 'claude-verbose',
    name: 'claude --verbose',
    description: '启用详细日志记录，显示完整的轮次输出',
    syntax: 'claude --verbose [other options]',
    example: 'claude --verbose -p "analyze code"',
    output: `[DEBUG] Starting Claude CLI v2.1.0
[DEBUG] Loading configuration from ~/.claude/config.json
[DEBUG] API endpoint: https://api.anthropic.com/v1/messages
[DEBUG] Model: claude-3-sonnet-20240229
[DEBUG] Max tokens: 4096

[INFO] Processing query: "analyze code"
[DEBUG] Scanning directory: /current/project
[DEBUG] Found 23 files to analyze
[DEBUG] Processing file: src/main.ts
[DEBUG] Token count: 156/4096

Code Analysis Results:
✅ No syntax errors found
⚠️  2 style issues detected
📊 Complexity score: 7/10

[DEBUG] Response generated in 2.3s
[DEBUG] Total tokens used: 342
[INFO] Analysis completed successfully`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '用于调试和故障排除',
      '监控API使用情况',
      '了解处理流程'
    ],
    commonMistakes: [
      '在生产环境中启用详细日志',
      '忽略日志中的警告信息'
    ],
    relatedCommands: ['claude -p', 'claude --max-turns']
  },
  {
    id: 'claude-max-turns',
    name: 'claude --max-turns',
    description: '在非交互模式下限制代理轮次数量',
    syntax: 'claude -p --max-turns [number] "[query]"',
    example: 'claude -p --max-turns 3 "fix build errors"',
    output: `Max turns set to: 3

Turn 1/3: Analyzing build errors...
Found 2 TypeScript errors in src/components/

Turn 2/3: Applying fixes...
✅ Fixed missing import in Header.tsx
✅ Fixed type annotation in Button.tsx

Turn 3/3: Verifying fixes...
✅ Build successful
✅ All tests passing

Task completed in 3 turns.
Build errors resolved successfully!`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '设置合理的轮次限制',
      '用于控制复杂任务的范围',
      '监控每轮的进度'
    ],
    commonMistakes: [
      '轮次设置过少导致任务未完成',
      '不监控轮次使用情况'
    ],
    relatedCommands: ['claude -p', 'claude --verbose']
  },
  {
    id: 'claude-model',
    name: 'claude --model',
    description: '为当前会话设置模型',
    syntax: 'claude --model [sonnet|opus|model-name]',
    example: 'claude --model claude-sonnet-4-20250514',
    output: `Setting model for current session...

Model: claude-sonnet-4-20250514
Capabilities:
- Advanced reasoning
- Code generation
- Multi-language support
- Context length: 200K tokens

✅ Model configured successfully
Starting session with Claude Sonnet 4...`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '选择适合任务的模型',
      '了解不同模型的特点',
      '考虑成本和性能平衡'
    ],
    commonMistakes: [
      '使用过于强大的模型处理简单任务',
      '不了解模型的限制'
    ],
    relatedCommands: ['claude --help', 'claude config']
  },
  {
    id: 'claude-permission-mode',
    name: 'claude --permission-mode',
    description: '在指定的权限模式下开始',
    syntax: 'claude --permission-mode [plan|ask|auto]',
    example: 'claude --permission-mode plan',
    output: `Permission mode set to: plan

In plan mode:
- Claude will describe actions before executing
- User approval required for each step
- Enhanced security for sensitive operations

Starting session...

> I'll help you with your request. Before making any changes, I'll outline my plan and ask for your approval.`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '在敏感项目中使用plan模式',
      '了解不同权限模式的影响',
      '根据任务选择合适的模式'
    ],
    commonMistakes: [
      '在自动化脚本中使用ask模式',
      '不了解权限模式的限制'
    ],
    relatedCommands: ['claude --allowedTools', 'claude --disallowedTools']  },  {    id: 'claude-input-format',    name: 'claude --input-format',    description: '指定输入数据的格式',    syntax: 'claude --input-format [text|json] -p "query"',    example: 'echo "{\"task\": \"analyze\"}" | claude --input-format json -p "process this data"',    output: `Processing JSON input...

📊 Input data parsed:
{
  "task": "analyze"
}

🔍 Analysis results:
The input contains a task specification requesting analysis. This appears to be a structured request for data processing or examination.

✅ JSON input processed successfully`,    category: 'flags',    difficulty: 'intermediate',    bestPractices: [      '确保输入格式与数据匹配',      '验证JSON格式的有效性',      '处理格式解析错误'    ],    commonMistakes: [      '格式声明与实际数据不符',      '不处理格式错误'    ],    relatedCommands: ['claude --output-format', 'claude -p']  },  {    id: 'claude-max-turns',    name: 'claude --max-turns',    description: '设置对话的最大轮次数',    syntax: 'claude --max-turns <number>',    example: 'claude --max-turns 5',    output: `Session configuration updated:

🔄 Max turns: 5
⚠️  Session will automatically end after 5 exchanges

✅ Interactive session started with turn limit

> Hello! I'm Claude. We have 5 turns for this conversation. How can I help you?`,    category: 'flags',    difficulty: 'beginner',    bestPractices: [      '根据任务复杂度设置合理轮次',      '考虑成本控制',      '为复杂任务预留足够轮次'    ],    commonMistakes: [      '轮次设置过少导致任务未完成',      '不考虑对话的自然流程'    ],    relatedCommands: ['claude --verbose', 'claude -c']  },  {    id: 'claude-print',    name: 'claude --print',    description: '等同于 -p，运行一次性查询并打印结果',    syntax: 'claude --print "query"',    example: 'claude --print "what is the current time format in ISO 8601?"',    output: `ISO 8601 is an international standard for date and time representation. The format is:

📅 Basic format: YYYY-MM-DDTHH:mm:ss.sssZ

Examples:
- 2024-01-15T14:30:22.123Z (UTC)
- 2024-01-15T14:30:22+08:00 (with timezone)
- 2024-01-15T14:30:22 (local time)

🔍 Components:
- YYYY: 4-digit year
- MM: 2-digit month (01-12)
- DD: 2-digit day (01-31)
- T: separator between date and time
- HH: 2-digit hour (00-23)
- mm: 2-digit minute (00-59)
- ss: 2-digit second (00-59)
- sss: milliseconds (optional)
- Z: UTC timezone indicator

✅ This format ensures unambiguous date/time representation across systems.`,    category: 'flags',    difficulty: 'beginner',    bestPractices: [      '用于快速查询',      '适合脚本和自动化',      '结合输出格式使用'    ],    commonMistakes: [      '与 -p 混用造成困惑',      '不了解两者完全等价'    ],    relatedCommands: ['claude -p', 'claude --output-format']  },
  {
    id: 'claude-permission-prompt-tool',
    name: 'claude --permission-prompt-tool',
    description: '指定一个MCP工具来处理非交互模式下的权限提示',
    syntax: 'claude -p --permission-prompt-tool [tool_name] "[query]"',
    example: 'claude -p --permission-prompt-tool mcp_auth_tool "deploy to production"',
    output: `Permission prompt tool: mcp_auth_tool

Query: deploy to production

Calling permission tool for authorization...
🔐 MCP Auth Tool activated
📋 Deployment request logged
✅ Authorization granted by admin

Proceeding with deployment...
🚀 Deploying to production environment
✅ Deployment completed successfully
📊 Status: Live
🔗 URL: https://app.example.com`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '配置适当的权限工具',
      '确保工具正确处理授权',
      '记录权限请求和批准'
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
    description: '通过ID恢复特定会话，或在交互模式下选择',
    syntax: 'claude --resume [session_id] "[query]"',
    example: 'claude --resume abc123 "continue development"',
    output: `Resuming session: abc123
Session: "React component refactoring"
Last activity: 2 hours ago
Messages: 18

Query: continue development

Continuing where we left off...
Previous context: Refactoring Header component

Next steps:
1. ✅ Extract reusable hooks
2. 🔄 Optimize re-renders
3. ⏳ Add unit tests

Let's continue with render optimization...`,
    category: 'flags',
    difficulty: 'intermediate',
    bestPractices: [
      '使用正确的会话ID',
      '提供上下文相关的查询',
      '验证会话恢复状态'
    ],
    commonMistakes: [
      '使用过期的会话ID',
      '查询与会话上下文不匹配'
    ],
    relatedCommands: ['claude -r', 'claude -c']
  },
  {
    id: 'claude-continue-flag',
    name: 'claude --continue',
    description: '在当前目录中加载最近的对话',
    syntax: 'claude --continue',
    example: 'claude --continue',
    output: `Loading recent conversation in current directory...

Found session: sess_20240115_143022
Project: /current/project
Last activity: 30 minutes ago
Messages: 12

Session summary:
- Working on TypeScript migration
- Fixed 8/10 type errors
- Remaining: interface definitions

Continuing conversation...

> Welcome back! Let's finish the TypeScript migration. We still need to define interfaces for the remaining components.`,
    category: 'flags',
    difficulty: 'beginner',
    bestPractices: [
      '在项目目录中使用',
      '确保有最近的会话',
      '检查会话相关性'
    ],
    commonMistakes: [
      '在错误的目录中使用',
      '没有最近会话时使用'
    ],
    relatedCommands: ['claude -c', 'claude --resume']  },  {    id: 'claude-session-list',    name: 'claude session list',    description: '列出所有保存的会话',    syntax: 'claude session list [--recent] [--project]',    example: 'claude session list --recent 10',    output: `📋 Recent Sessions (10 most recent):

┌─────────────┬──────────────────────────────┬─────────────────────┬──────────┐
│ Session ID  │ Title                        │ Last Activity       │ Messages │
├─────────────┼──────────────────────────────┼─────────────────────┼──────────┤
│ abc123      │ React component refactoring  │ 2 hours ago         │ 18       │
│ def456      │ TypeScript migration         │ 1 day ago           │ 25       │
│ ghi789      │ API endpoint optimization    │ 2 days ago          │ 12       │
│ jkl012      │ Database schema design       │ 3 days ago          │ 31       │
│ mno345      │ CSS grid layout              │ 1 week ago          │ 8        │
└─────────────┴──────────────────────────────┴─────────────────────┴──────────┘

💡 Use 'claude --resume <session_id>' to continue a session
💡 Use 'claude session delete <session_id>' to remove a session`,    category: 'chat',    difficulty: 'beginner',    bestPractices: [      '定期查看会话列表',      '使用描述性的会话标题',      '清理过期的会话'    ],    commonMistakes: [      '会话过多导致管理困难',      '不删除无用的会话'    ],    relatedCommands: ['claude --resume', 'claude session delete']  },  {    id: 'claude-session-delete',    name: 'claude session delete',    description: '删除指定的会话',    syntax: 'claude session delete <session_id> [--force]',    example: 'claude session delete abc123',    output: `🗑️  Deleting session: abc123

Session details:
- Title: "React component refactoring"
- Created: 3 days ago
- Messages: 18
- Size: 2.3KB

⚠️  Are you sure you want to delete this session? (y/N): y

✅ Session abc123 deleted successfully
💾 Freed 2.3KB of storage space

💡 Tip: Use --force flag to skip confirmation`,    category: 'chat',    difficulty: 'beginner',    bestPractices: [      '确认删除前检查会话内容',      '定期清理无用会话',      '备份重要会话'    ],    commonMistakes: [      '误删重要会话',      '不使用确认提示'    ],    relatedCommands: ['claude session list', 'claude session backup']  },  {    id: 'claude-session-rename',    name: 'claude session rename',    description: '重命名会话标题',    syntax: 'claude session rename <session_id> "<new_title>"',    example: 'claude session rename abc123 "Header Component Optimization"',    output: `📝 Renaming session: abc123

Current title: "React component refactoring"
New title: "Header Component Optimization"

✅ Session renamed successfully

📋 Updated session info:
- Session ID: abc123
- Title: "Header Component Optimization"
- Last activity: 2 hours ago
- Messages: 18

💡 Use descriptive titles to easily identify sessions later`,    category: 'chat',    difficulty: 'beginner',    bestPractices: [      '使用描述性的标题',      '包含项目或功能名称',      '避免过长的标题'    ],    commonMistakes: [      '标题过于简单或模糊',      '不及时更新标题'    ],    relatedCommands: ['claude session list', 'claude --resume']  },  {    id: 'claude-session-export',    name: 'claude session export',    description: '导出会话到文件',    syntax: 'claude session export <session_id> [--format json|markdown] [--output file]',    example: 'claude session export abc123 --format markdown --output session.md',    output: `📤 Exporting session: abc123

Session: "Header Component Optimization"
Format: Markdown
Output: session.md

Exporting conversation...
✅ Exported 18 messages
✅ Included code blocks and attachments
✅ Generated table of contents

📄 File saved: ./session.md (15.2KB)

📋 Export summary:
- Messages: 18
- Code blocks: 12
- Images: 2
- Total size: 15.2KB

💡 Use JSON format for programmatic processing`,    category: 'chat',    difficulty: 'intermediate',    bestPractices: [      '选择合适的导出格式',      '包含完整的上下文',      '定期备份重要会话'    ],    commonMistakes: [      '导出格式选择不当',      '忘记包含附件'    ],    relatedCommands: ['claude session list', 'claude session import']  },
  {
    id: 'claude-dangerously-skip-permissions',
    name: 'claude --dangerously-skip-permissions',
    description: '跳过权限提示(谨慎使用)',
    syntax: 'claude --dangerously-skip-permissions [other options]',
    example: 'claude --dangerously-skip-permissions -p "automated deployment"',
    output: `⚠️  WARNING: Permission checks disabled
🚨 This mode bypasses all security prompts

Query: automated deployment

Executing without permission checks...
🔄 Starting deployment process
📦 Building application
🚀 Deploying to server
✅ Deployment completed

⚠️  Remember to re-enable permission checks for interactive use`,
    category: 'flags',
    difficulty: 'advanced',
    bestPractices: [
      '仅在自动化脚本中使用',
      '确保环境安全',
      '使用后重新启用权限检查'
    ],
    commonMistakes: [
      '在交互模式中使用',
      '忘记重新启用权限检查',
      '在不安全环境中使用'
    ],
    relatedCommands: ['claude --permission-mode', 'claude --allowedTools']
  },

  // Pipeline Commands
  {
    id: 'cat-pipe-claude',
    name: 'cat file | claude -p "query"',
    description: '处理管道内容',
    syntax: 'cat [file] | claude -p "[query]"',
    example: 'cat logs.txt | claude -p "explain errors"',
    output: `Reading piped content from logs.txt...
Content size: 2.3KB
Lines processed: 156

Query: explain errors

Analyzing log file...

Error Summary:
🔴 3 Critical errors found:

1. Line 45: Database connection timeout
   - Cause: Network latency spike
   - Solution: Increase connection timeout

2. Line 78: Memory allocation failed
   - Cause: Insufficient heap space
   - Solution: Increase JVM memory settings

3. Line 134: Authentication token expired
   - Cause: Token TTL exceeded
   - Solution: Implement token refresh logic

Recommendations:
- Monitor database connection pool
- Optimize memory usage patterns
- Implement proper token management`,
    category: 'pipeline',
    difficulty: 'intermediate',
    bestPractices: [
      '验证文件内容格式',
      '提供具体的分析查询',
      '处理大文件时注意性能'
    ],
    commonMistakes: [
      '管道传输过大的文件',
      '查询内容不够具体'
    ],
    relatedCommands: ['claude -p', 'claude analyze']  },  {    id: 'echo-pipe-claude',    name: 'echo "text" | claude -p "query"',    description: '处理文本输入的管道操作',    syntax: 'echo "[text]" | claude -p "[query]"',    example: 'echo "function add(a, b) { return a + b; }" | claude -p "review this code"',    output: `Reading piped text input...
Content: "function add(a, b) { return a + b; }"

Query: review this code

🔍 Code Review Results:

✅ **Strengths:**
- Simple and clear function purpose
- Proper parameter naming
- Correct return statement

💡 **Suggestions:**
- Add JSDoc documentation
- Consider type checking (TypeScript)
- Add input validation for edge cases

📝 **Improved version:**
\`\`\`javascript
/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}
\`\`\``,    category: 'pipeline',    difficulty: 'beginner',    bestPractices: [      '使用双引号包围文本',      '提供明确的分析指令',      '处理特殊字符转义'    ],    commonMistakes: [      '忘记转义特殊字符',      '文本过长导致命令行限制'    ],    relatedCommands: ['claude -p', 'cat file | claude']  },  {    id: 'git-diff-pipe-claude',    name: 'git diff | claude -p "query"',    description: '分析Git差异的管道操作',    syntax: 'git diff [options] | claude -p "[query]"',    example: 'git diff HEAD~1 | claude -p "summarize changes"',    output: `Reading git diff output...
Files changed: 3
Insertions: +45
Deletions: -12

Query: summarize changes

📊 **Change Summary:**

🔄 **Modified Files:**
1. \`src/components/Header.tsx\` (+15, -3)
   - Added responsive navigation menu
   - Improved accessibility attributes

2. \`src/styles/globals.css\` (+25, -5)
   - Added mobile-first media queries
   - Updated color scheme variables

3. \`package.json\` (+5, -4)
   - Updated React to v18.2.0
   - Added new dependency: @headlessui/react

🎯 **Overall Impact:**
- Enhanced mobile responsiveness
- Improved user experience
- Updated dependencies for better performance

✅ Changes look good and follow best practices!`,    category: 'pipeline',    difficulty: 'intermediate',    bestPractices: [      '使用具体的diff范围',      '结合具体的分析需求',      '检查diff输出大小'    ],    commonMistakes: [      'diff输出过大',      '不指定具体的commit范围'    ],    relatedCommands: ['git log | claude', 'claude -p']  },  {    id: 'ls-pipe-claude',    name: 'ls -la | claude -p "query"',    description: '分析目录结构的管道操作',    syntax: 'ls [options] | claude -p "[query]"',    example: 'ls -la src/ | claude -p "analyze project structure"',    output: `Reading directory listing...
Directory: src/
Total items: 12

Query: analyze project structure

📁 **Project Structure Analysis:**

🏗️ **Directory Organization:**
- \`components/\` - React components (well organized)
- \`hooks/\` - Custom React hooks
- \`utils/\` - Utility functions
- \`styles/\` - CSS and styling files
- \`types/\` - TypeScript type definitions

📊 **File Distribution:**
- Components: 8 files (.tsx)
- Utilities: 4 files (.ts)
- Styles: 3 files (.css)
- Types: 2 files (.d.ts)

✅ **Strengths:**
- Clear separation of concerns
- Consistent naming conventions
- Good use of TypeScript

💡 **Suggestions:**
- Consider adding a \`constants/\` folder
- Group related components in subdirectories
- Add \`__tests__/\` folder for unit tests`,    category: 'pipeline',    difficulty: 'beginner',    bestPractices: [      '使用合适的ls选项',      '分析特定目录',      '提供结构化的查询'    ],    commonMistakes: [      '分析根目录导致输出过多',      '不使用具体的分析指令'    ],    relatedCommands: ['find | claude', 'tree | claude']  },  {    id: 'curl-pipe-claude',    name: 'curl url | claude -p "query"',    description: '分析HTTP响应的管道操作',    syntax: 'curl [options] [url] | claude -p "[query]"',    example: 'curl -s https://api.github.com/users/octocat | claude -p "explain this API response"',    output: `Reading HTTP response...
Status: 200 OK
Content-Type: application/json
Response size: 1.2KB

Query: explain this API response

🌐 **API Response Analysis:**

📋 **Response Structure:**
\`\`\`json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "type": "User",
  "name": "The Octocat",
  "company": "@github",
  "public_repos": 8,
  "followers": 9999,
  "following": 9
}
\`\`\`

🔍 **Key Information:**
- **User Profile**: GitHub user \"octocat\"
- **Account Type**: Regular user account
- **Activity**: 8 public repositories
- **Social**: 9999 followers, following 9 users
- **Organization**: Works at GitHub

✅ **API Usage Notes:**
- This is GitHub's REST API v3
- No authentication required for public data
- Rate limit: 60 requests/hour for unauthenticated requests`,    category: 'pipeline',    difficulty: 'intermediate',    bestPractices: [      '使用-s选项避免进度信息',      '检查API响应状态',      '处理JSON格式数据'    ],    commonMistakes: [      '不处理HTTP错误',      '忘记使用静默模式',      '不验证响应格式'    ],    relatedCommands: ['wget | claude', 'claude -p']  }];

export const categories: CommandCategory[] = [
  {
    id: 'basic',
    name: '基础命令',
    description: 'Claude CLI的基本操作和配置命令',
    icon: '🔧',
    commands: commands.filter(cmd => cmd.category === 'basic')
  },
  {
    id: 'chat',
    name: '聊天会话',
    description: '交互式聊天和会话管理命令',
    icon: '💬',
    commands: commands.filter(cmd => cmd.category === 'chat')
  },
  {
    id: 'generation',
    name: '代码生成',
    description: '自动生成代码和文本内容',
    icon: '⚡',
    commands: commands.filter(cmd => cmd.category === 'generation')
  },
  {
    id: 'analysis',
    name: '代码分析',
    description: '分析和审查代码质量',
    icon: '🔍',
    commands: commands.filter(cmd => cmd.category === 'analysis')
  },
  {
    id: 'flags',
    name: 'CLI标志',
    description: 'Claude CLI的命令行标志和选项',
    icon: '🏁',
    commands: commands.filter(cmd => cmd.category === 'flags')
  },
  {
    id: 'pipeline',
    name: '管道命令',
    description: '处理管道输入和数据流',
    icon: '🔄',
    commands: commands.filter(cmd => cmd.category === 'pipeline')
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