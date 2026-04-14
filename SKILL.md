---
name: public-components-skill
description: 使用 `@arim-aisdc/public-components` 组件库进行前端开发、重构、排查、解释或生成代码时使用本 Skill。只要用户需求、代码片段或报错中出现 `import { ... } from '@arim-aisdc/public-components'`、提到该包名、或涉及其根包公开导出的组件、hooks、类型、locale 与工具路径，即触发本 Skill。优先依据当前源码真实公共导出生成代码，避免使用未公开导出或仅内部可见的 API；尤其适用于 `TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider/useConfig`、权限体系、Filter 系列、缓存、事件总线和 locale 配置场景。
---

# Public Components Skill

先以本 Skill 仓库文档为准使用 `@arim-aisdc/public-components`；只有在出现 TypeScript 报错、类型不匹配、导出不一致或文档无法覆盖的场景时，再回到源码核对。

## Core Rules

1. 默认先以本仓库 `SKILL.md` 与对应 `references/` 文档为准，不先展开源码排查。
2. 仍然以根包公开导出边界为准，不猜测不存在的 API。
3. 只有在出现 TypeScript 报错、类型不匹配、导出异常或文档覆盖不到的细节时，才回到源码核对。
4. 遇到文档与源码冲突时，以源码为准，并同步修正文档认知。
5. 只在用户明确接受风险时才建议内部路径导入。

## Source Calibration Prerequisite

- 默认校准基线就是本仓库的 `SKILL.md` 与相关 `references/`。
- 只有在当前任务环境能访问 `public-components` 源码仓库，且已经出现 TypeScript 报错、类型不匹配、导出不一致或说明缺口时，才执行 `src/index.ts`、组件 `type.ts`、实现文件的补充校准。
- 如果当前环境不能直接访问源码，则继续以本仓库文档输出，并明确说明“当前结论基于 Skill 文档基线”。
- 一旦后续获得源码访问权限，再回到源码重新确认公开导出、类型边界与实现差异。

## Version

- Skill 版本：`1.1.0`
- 组件库版本：`2.3.91`

## Public Exports

当前应默认视为根包公开可用的重点能力：

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

## Do Not Generate By Default

不要默认生成以下根包导入：

- `ThemeProvider`
- `useTranslation`
- `ColorSelector`
- `MicroComponent`

如果用户请求这些能力：

1. 先说明当前根包未公开导出。
2. 提供根包内可替代方案。
3. 仅在用户明确要求时再讨论内部路径。

## Import Rules

根包正确示例：

```ts
import { TableMax, ConfigProvider, public_zhCN } from '@arim-aisdc/public-components';
```

工具函数路径：

```ts
import { to, getTextWidth, judgeHasPermission } from '@arim-aisdc/public-components/utils';
```

主题变量路径仅在必要时使用：

```ts
import { publicThemeMap } from '@arim-aisdc/public-components/themes/variablesConfig';
```

## Reference Map

按任务类型读取对应参考文档，不要一次性把全部 `references/` 装入上下文。

- 涉及 `TableMax`、列定义、分页、排序、筛选、拖拽、虚拟滚动：
  读取 `references/table-max.md`

- 涉及 `ConfigProvider`、`useConfig`、全局主题变量、locale、tableMax 全局配置：
  读取 `references/config-provider.md`

- 涉及 `PermissionProvider`、`Restricted`、`PermissionContext`、权限判断：
  读取 `references/permission.md`

- 涉及 `useEventBus`、`events`、`usePageCacheState`、`useCenterModalState`、`useConfig`：
  读取 `references/hooks.md`

- 涉及 `FilterSelect`、`FilterInputNumber`、`FilterSlider`、`FilterSwitch`、`FilterColor`、`FilterRadio`、`ConditionExpression`：
  读取 `references/filter-components.md`

- 涉及 `CustomForm`、`QueryFilter`、`SchemaForm`、`Empty`、`CenterModal`、`DrawerCom`、`SplitPane`、`SplitterPane`、`DraggableBox`、`Icon`、`CacheTabs`、`BaseInfo`：
  读取 `references/other-components.md`

- 涉及实现建议、推荐写法、默认约束：
  读取 `references/best-practices.md`

- 涉及报错排查、行为异常、旧文档纠偏：
  读取 `references/troubleshooting.md`

- 涉及“文档说法”和“源码实现”是否完全一致：
  读取 `references/source-consistency-checklist.md`

## Task Workflow

处理 `@arim-aisdc/public-components` 任务时，按以下顺序工作：

1. 先判断用户写的是根包导入还是内部路径导入。
2. 先读取本仓库 `SKILL.md` 的相关规则。
3. 再读取当前任务对应的 reference 文档。
4. 先按 Skill 文档基线输出，不额外展开源码排查。
5. 若出现 TypeScript 报错、类型不匹配、导出异常、示例无法落地，或 reference 未覆盖关键细节，再判断当前环境能否访问 `public-components` 源码仓库。
6. 若能访问源码，再查 `src/index.ts`、对应组件 `type.ts` 与主实现文件。
7. 若文档与源码冲突，直接按源码修正输出，并把冲突视为后续需要回写文档的信号。

## Task-Specific Notes

### TableMax

- 始终提供唯一 `tableId`
- 后端联动优先使用 `changePagination`、`onSortingChange`、`onFilteringChange`
- 需要大数据量优化时再考虑 `enableVirtualList`、`openVirtualColumns`、`openVirtualRows`

### ConfigProvider

- 优先在应用根部包裹
- 优先通过 `locale` 配置语言包
- 优先通过 `variablesJson` 注入主题变量
- 通过 `useConfig()` 读取全局配置

### Permission

- `PermissionProvider` 需要 `permissions: string[]`
- `Restricted` 当前只支持 `requiredPermissions`、`isPage`、`children`
- 不要继续编造 `fallback` prop

### Forms

不要混用三套表单配置模型：

- `CustomForm` 使用 `CustomFormItemType`
- `QueryFilter` 使用 `FormItemType`
- `SchemaForm` 对外使用 `formConfig`

### Locale

- 根包公开的是 `public_zhCN`、`public_enUS`、`public_viVN`
- 不要默认写 `import { useTranslation } from '@arim-aisdc/public-components'`

## Correction Patterns

错误：

```ts
import { ThemeProvider } from '@arim-aisdc/public-components';
```

修正：

- 说明当前根包未公开导出 `ThemeProvider`
- 优先改成 `ConfigProvider` 方案

错误：

```ts
import { useTranslation } from '@arim-aisdc/public-components';
```

修正：

- 说明当前根包未公开导出 `useTranslation`
- 若只是多语言接入，改成 `ConfigProvider + public_zhCN/public_enUS/public_viVN`

错误：

```ts
import { ColorSelector } from '@arim-aisdc/public-components';
```

修正：

- 不生成该导入
- 说明这是内部实现，不是根包公共 API

## Maintenance

组件库升级后，优先重新检查：

1. `src/index.ts` 导出变化
2. `TableMax` 类型变化
3. `ConfigProvider` / `useConfig` 变化
4. 表单枚举与类型变化
5. `references/source-consistency-checklist.md` 中记录的源码级差异是否已消除
