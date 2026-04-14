# Public Components Skill

这个 Skill 专门用于帮助 AI 正确使用 `@arim-aisdc/public-components`。

1. 让 AI 在用户代码出现 `import { ... } from '@arim-aisdc/public-components';` 时自动进入本 Skill 语境。
2. 避免 AI 继续生成当前版本里并未公开导出的 API。

## 当前校准版本

- Skill 版本：`1.1.0`
- 包名：`@arim-aisdc/public-components`
- 版本：`2.3.91`

## 核心能力

- 自动识别 `@arim-aisdc/public-components` 的根包导入场景
- 按真实公共导出生成组件、hooks、类型和 locale 用法
- 优先支持 `TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider`、权限体系、过滤组件、缓存与事件总线
- 在源码与旧文档不一致时，以源码为准纠偏

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
请使用 public-components-skill 帮我实现一个基于 TableMax 的分页列表
```

或者直接在用户代码中出现：

```ts
import { TableMax, ConfigProvider } from '@arim-aisdc/public-components';
```

AI 就应该自动套用本 Skill 的规则。

## 仓库说明

- `SKILL.md`：主 Skill 定义与触发规则
- `references/`：补充说明文档
- `references/source-consistency-checklist.md`：references 与源码实现差异清单

默认先以 `SKILL.md` 和对应 `references/` 为准完成任务。

只有在出现 TypeScript 报错、类型不匹配、导出异常，或者现有说明无法覆盖问题时，再回到 `public-components` 源码仓库核对 `src/index.ts`、组件 `type.ts` 与实现文件。
