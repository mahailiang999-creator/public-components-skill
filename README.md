# Public Components Skill

这是一个专为前端开发设计的AI技能，专门用于理解和使用@arim-aisdc/public-components组件库。

## 功能特性

- 提供public-components组件库的完整使用指南
- 包含所有组件的示例代码和最佳实践
- 支持快速查找和学习组件使用方法
- 提供TypeScript类型定义和属性说明

## 安装方法

### 通过npx skills add安装（推荐）

**项目级别安装（当前项目）：**
```bash
npx skills add mahailiang999-creator/public-components-skill
```

**全局安装（所有项目）：**
```bash
npx skills add mahailiang999-creator/public-components-skill -g
```

**仅安装到Claude Code（项目级别）：**
```bash
npx skills add mahailiang999-creator/public-components-skill --agent claude-code
```

**仅安装到Claude Code（全局）：**
```bash
npx skills add mahailiang999-creator/public-components-skill -g --agent claude-code
```

**指定多个agents：**
```bash
npx skills add mahailiang999-creator/public-components-skill --agent claude-code,cursor
```

### 安装步骤
1. 选择合适的安装方式（推荐全局安装到Claude Code）
2. 确保您使用的是支持技能扩展的AI助手
3. 按照您的AI助手的文档安装skill
4. 重启AI助手以加载新skill

### 快速安装（推荐Claude Code用户）
如果您主要使用Claude Code，建议全局安装：
```bash
npx skills add mahailiang999-creator/public-components-skill -g --agent claude-code
```

<!-- 
其他安装方法（暂时注释）

### 方法1：Git克隆
```bash
git clone https://github.com/mahailiang999-creator/public-components-skill.git
```

### 方法2：GitHub CLI
```bash
gh repo clone mahailiang999-creator/public-components-skill
```

### 方法3：下载ZIP
访问 [GitHub仓库页面](https://github.com/mahailiang999-creator/public-components-skill) 点击 "Code" → "Download ZIP"

### 备用安装方式（如果上面命令失败）
```bash
npx skills add https://github.com/mahailiang999-creator/public-components-skill.git
```
-->

### 安装步骤
1. 使用上述任一方法下载skill文件
2. 确保您使用的是支持技能扩展的AI助手
3. 按照您的AI助手的文档安装skill
4. 重启AI助手以加载新skill

### 快速安装
如果您已安装skills CLI，可以直接运行：
```bash
npx skills add public-components --skill https://github.com/mahailiang999-creator/public-components-skill.git
```

## 使用方法

安装后，您可以通过以下方式使用此skill：

```
请使用public-components-skill帮我创建一个按钮组件
```

## 包含的组件

- Button（按钮）
- Input（输入框）
- Modal（模态框）
- Table（表格）
- Form（表单）
- 以及更多...

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- Umi 4

## 贡献

欢迎提交Issue和Pull Request来改进此skill！

## 许可证

MIT License