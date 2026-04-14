---
name: public-components-skill
description: 专为使用 `@arim-aisdc/public-components` 组件库的前端开发任务设计的 AI Skill。只要用户需求中出现 `import { ... } from '@arim-aisdc/public-components'`、提到该包名、或涉及其公开导出组件与 hooks，就应自动启用本 Skill。基于当前源码 `C:\Work_Files\public-components` 校准，优先使用真实公共导出，避免生成不存在或未公开导出的 API。
---

# Public Components Skill

本 Skill 用于帮助 AI 正确理解和使用 `@arim-aisdc/public-components`。

它的核心目标不是“尽量多猜组件库能力”，而是：

1. 以当前源码真实导出为准生成代码。
2. 只推荐稳定的公共 API。
3. 当用户项目里出现 `import { ... } from '@arim-aisdc/public-components'` 时自动切换到本 Skill 的约束与最佳实践。

## 强制触发规则

满足以下任一条件时，必须启用本 Skill：

1. 用户明确提到 `@arim-aisdc/public-components`。
2. 用户代码中出现：

```ts
import { Something } from "@arim-aisdc/public-components";
```

3. 用户要开发、重构、排查、解释以下公共导出组件或 hooks：
   `TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider`、`useConfig`、`PermissionProvider`、`Restricted`、`PermissionContext`、`BaseInfo`、`CenterModal`、`DrawerCom`、`SplitPane`、`SplitterPane`、`CacheTabs`、`DraggableBox`、`ConditionExpression`、`Icon`、`Empty`、`FilterSelect`、`FilterInputNumber`、`FilterRadio`、`FilterSlider`、`FilterSwitch`、`FilterColor`、`useEventBus`、`events`、`usePageCacheState`、`useCenterModalState`、`public_zhCN`、`public_enUS`、`public_viVN`。

## 信息来源优先级

回答和生成代码时，按以下优先级判断能力边界：

1. `C:\Work_Files\public-components\src\index.ts`
2. 对应组件的 `type.ts` / `index.ts` / 主实现文件
3. 当前 skill 仓库中的参考文档

如果源码与参考文档冲突，以源码为准。

## 当前版本校准结果

本 Skill 已按当前源码版本校准：

- Skill 版本：`1.1.0`
- 包名：`@arim-aisdc/public-components`
- 当前版本：`2.3.91`
- 主要技术栈：React、Ant Design 5、TanStack Table 8、TypeScript

## 当前真实公共导出

以下内容已在 `src/index.ts` 中公开导出，可直接从根包导入：

```ts
import {
  PermissionContext,
  PermissionProvider,
  Restricted,
  DraggableBox,
  MessageTip,
  ModalTip,
  BaseInfo,
  CenterModal,
  DrawerCom,
  CustomForm,
  QueryFilter,
  SplitPane,
  SplitterPane,
  TableMax,
  ConditionExpression,
  ConfigProvider,
  useConfig,
  FilterColor,
  FilterInputNumber,
  FilterRadio,
  FilterSelect,
  FilterSlider,
  FilterSwitch,
  SchemaForm,
  Icon,
  Empty,
  CacheTabs,
  useCenterModalState,
  useEventBus,
  events,
  usePageCacheState,
  public_zhCN,
  public_enUS,
  public_viVN,
} from "@arim-aisdc/public-components";
```

## 不要默认生成的内容

以下能力虽然能在仓库里看到实现痕迹，但当前版本并没有在根入口公开导出，不能默认写成：

- `ThemeProvider`
- `useTranslation`
- `MicroComponent`
- `ColorSelector`

因此：

1. 不要默认生成 `import { ThemeProvider } from '@arim-aisdc/public-components'`。
2. 不要默认生成 `import { useTranslation } from '@arim-aisdc/public-components'`。
3. 不要把内部文件路径当作公共 API，除非用户明确要求使用内部实现并接受风险。

## 关键使用准则

### 1. TableMax

`TableMax` 是组件库核心表格组件。生成代码时优先遵守以下规则：

- 始终提供唯一的 `tableId`。
- 列定义优先参考 `TableMaxColumnType`。
- 后端分页/排序/筛选场景下，优先使用 `manualSorting`、`manualFiltering`，并配合 `changePagination`、`onSortingChange`、`onFilteringChange`。
- 大数据量场景再考虑 `enableVirtualList`、`openVirtualColumns`、`openVirtualRows`。
- 不要继续推荐已废弃回调，优先用 `onSortingChange`、`onFilteringChange`。

最常见骨架：

```tsx
import { TableMax, FilterType, type TableMaxColumnType } from "@arim-aisdc/public-components";

const columns: TableMaxColumnType[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    enableSorting: true,
    enableColumnFilter: true,
    filterType: FilterType.Input,
  },
];

<TableMax
  tableId='user-table'
  columns={columns}
  datas={data}
  totalCount={total}
  pageSize={pageSize}
  skipCount={skipCount}
  manualSorting
  manualFiltering
  onSortingChange={handleSort}
  onFilteringChange={handleFilter}
  changePagination={handlePagination}
/>;
```

### 2. ConfigProvider

涉及全局配置时，优先从根部包裹：

```tsx
import { ConfigProvider, public_zhCN } from "@arim-aisdc/public-components";

<ConfigProvider
  config={{
    theme: "light",
    userId: "u-001",
    locale: public_zhCN,
    dateFormat: "YYYY-MM-DD HH:mm",
  }}>
  <App />
</ConfigProvider>;
```

重点提醒：

- `ConfigProvider` 内部已经集成 `react-dnd` 的 `DndProvider`。
- 主题变量通过 `variablesJson` 注入。
- 全局配置读取优先使用 `useConfig()`。

### 3. Permission

权限体系优先使用：

```tsx
import { PermissionProvider, Restricted, PermissionContext } from "@arim-aisdc/public-components";
```

生成代码时注意：

- `PermissionProvider` 需要 `permissions: string[]`
- `Restricted` 适合做视图裁剪
- `PermissionContext` 适合在组件内读取权限上下文

### 4. CustomForm / QueryFilter / SchemaForm

表单类组件生成时遵循：

- `CustomForm` 使用 `CustomFormItemType` 与 `CustomSearchFieldType`
- `QueryFilter` 使用自身的 `FormItemType` / `searchFieldType`
- `SchemaForm` 使用 `FieldDefinitionDto`、`ProFieldValueTypeEnum`、`DataSourceTypeEnum`

不要混用三套表单配置类型。

### 5. Hooks

当前从根包稳定可用的 hooks / 事件能力：

- `useCenterModalState`
- `useEventBus`
- `events`
- `usePageCacheState`
- `useConfig`

其中：

- `usePageCacheState` 默认基于 `localStorage` 做页面缓存，缓存有效期约 1 小时
- `useEventBus` 会在组件卸载时自动移除监听
- `useCenterModalState` 基于 `open` 字段控制 `CenterModal`

### 6. 国际化

当前根包公开的是语言包对象，而不是 `useTranslation`：

```ts
import { public_zhCN, public_enUS, public_viVN } from "@arim-aisdc/public-components";
```

如果用户要做 locale 配置，优先指导其通过 `ConfigProvider` 的 `locale` 完成，而不是默认生成 `useTranslation` 的导入代码。

## 额外导入约束

如果用户需要工具函数，可优先考虑以下路径，而不是误写到根导出：

```ts
import { to, getTextWidth, judgeHasPermission } from "@arim-aisdc/public-components/utils";
```

如果用户需要主题变量文件，可再根据实际场景考虑：

```ts
import { publicThemeMap } from "@arim-aisdc/public-components/themes/variablesConfig";
```

只有在用户明确需要这些能力时才这样写，不要无故扩大依赖面。

## 生成代码时的默认检查清单

在使用本 Skill 时，AI 应默认执行以下检查：

1. 先判断用户写的是根包导入还是内部路径导入。
2. 若是根包导入，只使用 `src/index.ts` 已公开的导出。
3. 若要补充 props / type，去对应组件 `type.ts` 校对后再写。
4. 如果参考文档和源码冲突，明确说明“按当前源码修正”。
5. 若用户请求里出现不存在的导出，主动纠正并给出替代写法。

## 常见纠偏

### 错误示例 1

```ts
import { ThemeProvider } from "@arim-aisdc/public-components";
```

处理方式：

- 不要直接沿用。
- 先说明当前根入口未公开导出 `ThemeProvider`。
- 再改为 `ConfigProvider` 方案，或询问是否允许使用内部路径。

### 错误示例 2

```ts
import { useTranslation } from "@arim-aisdc/public-components";
```

处理方式：

- 先说明当前版本根包未公开导出 `useTranslation`。
- 若只是做多语言配置，改用 `ConfigProvider + public_zhCN/public_enUS/public_viVN`。

### 错误示例 3

```ts
import { ColorSelector } from "@arim-aisdc/public-components";
```

处理方式：

- 不要生成。
- 说明它是内部实现依赖，不是当前根包公共 API。

## 回答风格要求

使用本 Skill 时，AI 应：

- 优先给出可直接运行的导入与类型写法
- 明确区分“公共 API”和“内部实现”
- 在表格、表单、权限、缓存等场景主动补充最佳实践
- 遇到源码与旧文档不一致时，直接按源码修正，不延续旧说法

## 维护说明

本 Skill 基于以下源码快照校准：

- Skill 版本：`1.1.0`
- 组件库源码目录：`public-components`
- 核对入口：`public-components\src\index.ts`

当该组件库版本升级后，应优先重新检查：

1. `src/index.ts` 导出变化
2. `TableMax` 类型变化
3. `ConfigProvider` 与 `useConfig` 变化
4. 表单枚举与类型变化
5. 是否新增正式公开导出
