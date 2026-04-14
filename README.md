# Public Components Skill

专为前端开发设计的 AI 技能，帮助理解和使用 `@arim-aisdc/public-components` 组件库。

## 功能特性

- 提供组件库的完整使用指南
- 包含所有组件的示例代码和最佳实践
- 支持快速查找和学习组件使用方法
- 提供 TypeScript 类型定义和属性说明

## 安装方法

### 通过 npx skills add 安装（推荐）

**项目级别安装（当前项目）：**

```bash
npx skills add mahailiang999-creator/public-components-skill
```

**全局安装（所有项目）：**

```bash
npx skills add mahailiang999-creator/public-components-skill -g
```

**仅安装到 Claude Code（项目级别）：**

```bash
npx skills add mahailiang999-creator/public-components-skill --agent claude-code
```

**仅安装到 Claude Code（全局）：**

```bash
npx skills add mahailiang999-creator/public-components-skill -g --agent claude-code
```

**指定多个 agents：**

```bash
npx skills add mahailiang999-creator/public-components-skill --agent claude-code,cursor
```

### 安装步骤

1. 使用上述任一方法下载 skill 文件
2. 确保您使用的是支持技能扩展的 AI 助手
3. 按照您的 AI 助手的文档安装 skill
4. 重启 AI 助手以加载新 skill

## 使用方法

安装后，您可以通过以下方式使用此 skill：

```
请使用 public-components-skill 帮我创建一个 TableMax 表格
```

## 包含的组件

### 核心组件
- `@arim-aisdc/public-components` - 组件库包名
- `TableMax` - 高级表格组件
- `ConfigProvider` - 全局配置提供者
- `PermissionProvider`、`Restricted`、`PermissionContext` - 权限控制
- `ThemeProvider` - 主题提供者
- `CustomForm` - 自定义表单
- `QueryFilter` - 查询筛选器
- `SchemaForm` - Schema 驱动表单
- `BaseInfo` - 基础信息展示
- `CenterModal` - 居中弹窗
- `DrawerCom` - 抽屉组件
- `SplitPane`、`SplitterPane` - 分割面板
- `CacheTabs` - 缓存标签页
- `DraggableBox` - 可拖拽盒子
- `Empty` - 空状态组件
- `Icon` - 图标组件
- `ColorSelector` - 颜色选择器
- `MessageTip`、`ModalTip` - 全局提示
- `MicroComponent` - 微组件

### Filter 组件系列
- `FilterSelect` - 选择器筛选
- `FilterInputNumber` - 数值筛选
- `FilterSlider` - 滑块筛选
- `FilterSwitch` - 开关筛选
- `FilterColor` - 颜色筛选
- `FilterRadio` - 单选筛选
- `ConditionExpression` - 条件表达式

### Hooks
- `useTranslation` - 国际化翻译
- `useEventBus` - 事件总线
- `usePageCacheState` - 页面缓存状态
- `useCenterModalState` - 弹窗状态管理
- `useConfig` - 配置获取

### 国际化
- `public_zhCN` - 中文语言包
- `public_enUS` - 英文语言包
- `public_viVN` - 越南文语言包

## 技术栈

- React 18
- TypeScript
- Ant Design 5
- Umi 4

## 快速开始

### 安装组件库

```bash
npm install @arim-aisdc/public-components
```

### 基础配置

在应用入口使用 ConfigProvider 配置全局设置：

```typescript
import { ConfigProvider, public_zhCN } from '@arim-aisdc/public-components';

<ConfigProvider
  config={{
    theme: 'light',
    userId: 'user123',
    locale: public_zhCN,
    dateFormat: 'YYYY-MM-DD HH:mm',
  }}
>
  <App />
</ConfigProvider>
```

### 使用 TableMax 表格

```typescript
import { TableMax } from '@arim-aisdc/public-components';

const columns = [
  {
    id: 'name',
    header: '姓名',
    accessorKey: 'name',
    size: 120,
  },
];

<TableMax
  tableId="user-table"
  columns={columns}
  datas={data}
  totalCount={total}
  pageSize={20}
  skipCount={0}
/>
```

## 文档结构

- `SKILL.md` - 技能主文档，包含快速开始和组件概览
- `references/table-max.md` - TableMax 高级表格详细文档
- `references/config-provider.md` - ConfigProvider 全局配置文档
- `references/permission.md` - 权限控制文档
- `references/filter-components.md` - Filter 组件系列文档
- `references/hooks.md` - Hooks 使用文档
- `references/other-components.md` - 其他核心组件文档
- `references/best-practices.md` - 最佳实践文档
- `references/troubleshooting.md` - 故障排查文档

## 组件库版本

@arim-aisdc/public-components v2.3.77

## 许可证

MIT

## 链接

- GitHub 仓库：https://github.com/mahailiang999-creator/public-components-skill
