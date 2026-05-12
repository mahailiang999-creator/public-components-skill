---
name: public-components-skill
description: Use when Codex 需要使用、生成、重构、排查或解释 `@arim-aisdc/public-components` 相关前端代码、imports、TypeScript errors、locale、root-package exports、`/utils`，或涉及 TableMax、CustomForm、QueryFilter、SchemaForm、ConfigProvider/useConfig、权限、Filter 系列、缓存、事件总线、MessageTip、ModalTip、页面 UI 一致性等场景。
---

# Public Components Skill

使用本 Skill 来生成、审查或排查消费 `@arim-aisdc/public-components` 的代码。始终把组件库根入口导出视为公共 API 边界，并按任务类型只读取必要的 `references/` 文档。

## 源码基线

- Skill 版本：`v1.2.0`
- 组件库：`@arim-aisdc/public-components`
- 源码基线：`C:\Work_Files\public-components`
- 组件库版本：`2.3.92`

如果 Skill 文档与可访问源码冲突，以源码为准，并把该冲突视为后续需要修正文档的漂移信号。

## 核心规则

1. 优先从 `@arim-aisdc/public-components` 根包导入。
2. 不要编造 `src/index.ts` 或已记录二级路径没有公开的 API。
3. 按任务类型读取相关 `references/` 文件，不要默认一次性加载全部 reference。
4. 只要涉及页面开发或页面重构，就额外读取 `references/ui-consistency.md`。
5. 只有当 reference 缺少关键细节、出现 TypeScript 报错，或导出/类型冲突时，才回到源码校对。
6. 仅在用户明确接受风险时，才建议内部路径导入。

## 根包公共导出

默认可安全使用的常见根包导出：

- 组件：`TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider`、`PermissionProvider`、`Restricted`、`PermissionContext`、`BaseInfo`、`CenterModal`、`DrawerCom`、`SplitPane`、`SplitterPane`、`CacheTabs`、`DraggableBox`、`ConditionExpression`、`Icon`、`Empty`、`MessageTip`、`ModalTip`
- Filter 系列：`FilterSelect`、`FilterInputNumber`、`FilterRadio`、`FilterSlider`、`FilterSwitch`、`FilterColor`
- hooks 与事件：`useConfig`、`useEventBus`、`events`、`usePageCacheState`、`useCenterModalState`
- locale：`public_zhCN`、`public_enUS`、`public_viVN`

不要默认把以下能力作为根包导入：

- `ThemeProvider`
- `useTranslation`
- `ColorSelector`
- `MicroComponent`

如果用户要求这些能力，先说明它们不是当前根包公共导出，再优先提供根包已公开的替代方案。

## 导入模式

根包导入：

```ts
import { TableMax, ConfigProvider, public_zhCN } from '@arim-aisdc/public-components';
```

工具函数：

```ts
import { to, getTextWidth, judgeHasPermission } from '@arim-aisdc/public-components/utils';
```

主题变量仅在必要时使用：

```ts
import { publicThemeMap } from '@arim-aisdc/public-components/themes/variablesConfig';
```

## Reference 路由

- `TableMax`、列定义、分页、排序、筛选、拖拽、虚拟行/列：读取 `references/table-max.md`。
- `ConfigProvider`、`useConfig`、主题变量、locale、TableMax 全局配置：读取 `references/config-provider.md`。
- `PermissionProvider`、`Restricted`、`PermissionContext`、权限判断：读取 `references/permission.md`。
- `useEventBus`、`events`、`usePageCacheState`、`useCenterModalState`、hook 行为：读取 `references/hooks.md`。
- `FilterSelect`、`FilterInputNumber`、`FilterSlider`、`FilterSwitch`、`FilterColor`、`FilterRadio`、`ConditionExpression`：读取 `references/filter-components.md`。
- `CustomForm`、`QueryFilter`、`SchemaForm`、`Empty`、`CenterModal`、`DrawerCom`、`SplitPane`、`SplitterPane`、`DraggableBox`、`Icon`、`CacheTabs`、`BaseInfo`、`MessageTip`、`ModalTip`：读取 `references/other-components.md`。
- 推荐写法与防漂移规则：读取 `references/best-practices.md`。
- 页面开发、页面重构、列表页、详情页、表单页、弹窗页、区块式表格、UI 一致性：读取 `references/ui-consistency.md`。
- 报错、异常行为、旧文档、导出或类型不匹配：读取 `references/troubleshooting.md`。
- reference 与源码一致性记录：读取 `references/source-consistency-checklist.md`。

## 任务流程

1. 先判断用户代码使用的是根包、`/utils`、主题变量路径，还是内部路径。
2. 生成 import 前，先确认公共导出边界。
3. 按上面的 reference 路由读取当前任务需要的文档。
4. 如果是 UI 或页面任务，把 `references/ui-consistency.md` 作为额外约束。
5. 按已记录公共 API 生成代码。
6. 如果细节缺失或 TypeScript 结果不一致，再查看源码基线文件并修正输出。

## 高风险错误

- 不要写 `Restricted fallback`；当前 `Restricted` 只支持 `requiredPermissions`、`isPage`、`children`。
- 不要给 `useCenterModalState` 使用 `visible`；当前状态字段是 `open`。
- 不要混用三套表单模型：`CustomForm` 使用 `CustomFormItemType`，`QueryFilter` 使用 `FormItemType`，`SchemaForm` 使用 `formConfig`。
- 不要把 `useTranslation` 写成根包导入；多语言优先通过 `ConfigProvider` 和 `public_zhCN/public_enUS/public_viVN` 配置。
- 不要把 `CacheTabs` 当成通用 Tabs 封装；它绑定 keep-alive 缓存场景。
