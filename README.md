# Public Components Skill

这个 Skill 专门用于帮助 AI 正确使用 `@arim-aisdc/public-components`。

1. 让 AI 在用户代码中出现 `import { ... } from '@arim-aisdc/public-components';` 时自动进入本 Skill 语境。
2. 避免 AI 继续生成当前版本里并未公开导出的 API。
3. 在涉及页面开发时，默认同时遵守内置的 UI 一致性基线，尽量让生成结果贴近当前项目既有页面风格。

## 当前校准版本

- Skill 版本：`v1.2.0`
- 包名：`@arim-aisdc/public-components`
- 组件库版本：`2.3.91`

## 核心能力

- 自动识别 `@arim-aisdc/public-components` 的根包导入场景
- 按真实公共导出生成组件、hooks、类型和 locale 用法
- 优先支持 `TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider`、权限体系、过滤组件、缓存与事件总线
- 在源码与旧文档不一致时，以源码为准纠偏
- 在页面开发、页面重构、列表页、表单页、详情页、弹窗页等场景下，默认附带 UI 一致性约束

## UI 一致性

`public-components-skill` 现在已经内置 UI 一致性规则。

只要任务涉及以下场景，就会默认要求模型额外遵守页面层约束：

- 列表页开发或重构
- `TableMax` 页面组合
- 表单页、详情页、弹窗页
- 区块式表格区域
- 用户明确要求“保持项目现有风格”“贴近现有页面”“不要另起一套样式”

相关规则集中在 `references/ui-consistency.md`，重点约束：

- 优先复用当前项目已有的页面骨架
- 优先使用项目主题 token，而不是硬编码颜色
- 间距、标题层级、筛选区、主操作区与附近页面保持一致
- 对 `TableMax` 页面，延续既有的筛选区、主操作区、列顺序、工具栏和表格间距模式
- 当原型与现有项目模式冲突时，优先保留项目一致性，只做最小必要偏离

## 当前真实公共导出重点

可直接从根包导入的常用能力包括：

- `TableMax`
- `CustomForm`
- `QueryFilter`
- `SchemaForm`
- `ConfigProvider`
- `useConfig`
- `PermissionProvider`
- `Restricted`
- `PermissionContext`
- `BaseInfo`
- `CenterModal`
- `DrawerCom`
- `SplitPane`
- `SplitterPane`
- `CacheTabs`
- `DraggableBox`
- `ConditionExpression`
- `Icon`
- `Empty`
- `FilterSelect`
- `FilterInputNumber`
- `FilterRadio`
- `FilterSlider`
- `FilterSwitch`
- `FilterColor`
- `useEventBus`
- `events`
- `usePageCacheState`
- `useCenterModalState`
- `public_zhCN`
- `public_enUS`
- `public_viVN`

## 当前不要默认使用的能力

以下内容在仓库里能看到实现，但当前根入口没有公开导出，不应默认让 AI 生成：

- `ThemeProvider`
- `useTranslation`
- `ColorSelector`
- `MicroComponent`

## 安装

```bash
npx skills add mahailiang999-creator/public-components-skill
```

全局安装：

```bash
npx skills add mahailiang999-creator/public-components-skill -g
```

## 使用示例

```text
请使用 public-components-skill 帮我实现一个基于 TableMax 的分页列表页
```

或者直接在用户代码中出现：

```ts
import { TableMax, ConfigProvider } from '@arim-aisdc/public-components';
```

AI 就应自动套用本 Skill 的规则；如果任务属于页面开发场景，还应同时遵守 `references/ui-consistency.md` 中的 UI 基线。

## 仓库说明

- `SKILL.md`：主 Skill 定义与触发规则
- `references/`：补充说明文档
- `references/ui-consistency.md`：页面开发场景下的 UI 一致性基线
- `references/source-consistency-checklist.md`：references 与源码实现差异清单

默认先以 `SKILL.md` 和对应 `references/` 为准完成任务。
只有在出现 TypeScript 报错、类型不匹配、导出异常，或者现有说明无法覆盖问题时，再回到 `public-components` 源码仓库核对 `src/index.ts`、组件 `type.ts` 与实现文件。
