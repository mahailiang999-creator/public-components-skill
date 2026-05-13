# Best Practices

本文档以当前源码公开导出为准，总结推荐写法。

## 1. 根包导入先核对公共导出

遇到：

```ts
import { ... } from '@arim-aisdc/public-components';
```

应先确认目标能力是否在 `src/index.ts` 公开导出。

不要默认继续生成：

- `ThemeProvider`
- `useTranslation`
- `ColorSelector`
- `MicroComponent`

## 2. TableMax 一定给唯一 tableId

```tsx
<TableMax tableId="user-table" />
```

否则缓存和状态恢复会互相污染。

## 3. 后端联动优先新回调

优先：

- `changePagination`
- `onSortingChange`
- `onFilteringChange`

少用或不再推荐：

- `manualSortingChange`
- `manualFilteringChange`
- `getColumnFiltersData`

## 4. ConfigProvider 放在应用根部

```tsx
<ConfigProvider
  config={{
    userId,
    locale: public_zhCN,
    tableKeyPrefixCls: 'my-app',
  }}
>
  <App />
</ConfigProvider>
```

这样可以统一：

- 表格缓存前缀
- 用户隔离
- locale
- 主题变量

## 5. 多语言优先走 locale，不要默认写 useTranslation

推荐：

```tsx
<ConfigProvider config={{ locale: public_zhCN }}>
  <App />
</ConfigProvider>
```

不推荐默认写：

```ts
import { useTranslation } from '@arim-aisdc/public-components';
```

## 6. 工具函数走 /utils 路径

```ts
import { to, getTextWidth, judgeHasPermission } from '@arim-aisdc/public-components/utils';
```

不要误写成根包导出。

## 7. 权限控制优先根包 Context

推荐：

```ts
import { PermissionContext } from '@arim-aisdc/public-components';
```

不要再写内部 `esm` 或 `dist` 路径。

## 8. useCenterModalState 用 open

当前 modal 状态字段是：

```ts
{ open: true }
```

不是旧版示例里的 `visible`。

## 9. 大表格再启用虚拟化

```tsx
<TableMax
  enableVirtualList
  rowHeight={42}
/>
```

如果开启虚拟滚动，优先同时检查：

- 容器高度
- `rowHeight`
- 是否真的有大数据量

## 10. 全局提示优先使用根包导出

推荐：

```ts
import { MessageTip, ModalTip } from '@arim-aisdc/public-components';
```

适用场景：

- `MessageTip`：轻量成功、失败、注意、信息、加载提示。
- `ModalTip`：全局状态弹窗、删除确认、操作结果反馈。

不要默认写内部路径，例如 `components/GlobalTip/MessageTip` 或 `components/GlobalTip/ModalTip`。

## 11. 明确区分三类表单

- `CustomForm` 使用 `CustomFormItemType`
- `QueryFilter` 使用 `FormItemType`
- `SchemaForm` 使用 `formConfig + ProFieldValueTypeEnum`

不要混用三套配置结构。

## 12. UI 任务必须加载能源管理 UI 规范

涉及页面、表格、弹窗、表单、按钮、分页或样式覆盖时，先读取 `references/ui-consistency.md`。

生成 UI 代码时不要临时创造新的暗色主题、间距体系、圆角、表格滚动或分页交互。默认按能源管理 UI 基线处理：

- 背景、面板、按钮、状态色优先使用规范色值。
- 数据密集页面优先使用紧凑节奏。
- `TableMax` 的表头、滚动区域、滚动条和分页器必须按规范避免穿透、错位和中间态闪色。
- 若现有业务代码与规范冲突，指出冲突并按用户目标选择最小偏离。
