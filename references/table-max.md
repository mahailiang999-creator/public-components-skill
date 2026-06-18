# TableMax

源码校准基准：

- `src/components/TableMax/index.ts`
- `src/components/TableMax/type.ts`

## 根包导入

```ts
import {
  TableMax,
  ColumnType,
  FilterType,
  InputType,
  type TableMaxProps,
  type TableMaxColumnType,
  type ColumnVisibleConfigType,
  type ColumnPinningConfigType,
} from '@arim-aisdc/public-components';
```

## 基础用法

```tsx
const columns: TableMaxColumnType[] = [
  {
    id: 'name',
    header: 'Name',
    accessorKey: 'name',
    enableSorting: true,
    enableColumnFilter: true,
    filterType: FilterType.Input,
  },
];

<TableMax
  tableId="user-table"
  columns={columns}
  datas={data}
  totalCount={total}
  pageSize={20}
  skipCount={0}
/>;
```

## 必须知道的规则

- `tableId` 必填，且必须唯一
- `columns` 和 `datas` 必填
- 后端分页/排序/筛选优先使用 `changePagination`、`onSortingChange`、`onFilteringChange`
- `manualSortingChange`、`manualFilteringChange`、`getColumnFiltersData` 已是旧接口，优先不要再写

## 常用 props

基础：

- `tableId`
- `version`
- `columns`
- `datas`
- `rowKey`
- `loading`

分页：

- `totalCount`
- `skipCount`
- `pageSize`
- `pageSizeOptions`
- `showSizeChanger`
- `changePagination`
- `showLessItems`

排序与筛选：

- `canSorting`
- `manualSorting`
- `onSortingChange`
- `enableMultiSort`
- `canFilter`
- `manualFiltering`
- `onFilteringChange`
- `defaultColumnFilters`
- `getDynamicFilterOptionsFn`
- `openNullValueFilter`
- `useTextFilter`

选择与拖拽：

- `canSelection`
- `canSelectionUseShift`
- `defaultSelectedRowId`
- `defaultSelectedRowIds`
- `enableRowSelection`
- `onSelectChange`
- `rowSelectionChange`
- `onSelectAllChange`
- `canRowDrag`
- `disableDragRowIds`
- `dragBeforeStart`
- `dragBeforeEnd`
- `rowOrderChange`

编辑：

- `canEditting`
- `canEditRowWhenDClick`
- `saveEditing`
- `onEditValueChange`

展示：

- `rowHeight`
- `defaultCompactMode`
- `canCompact`
- `enableVirtualList`
- `openVirtualColumns`
- `openVirtualRows`
- `autoHeight`
- `tooltip`

顶部与扩展：

- `renderOperate`
- `tableTitle`
- `renderOperateLeft`
- `renderOperateRight`
- `renderSubComponent`
- `getRowCanExpand`

数据操作：

- `canRefresh`
- `refreshFun`
- `canUpload`
- `uploadProps`
- `canDownload`
- `downloadProps`
- `canDelete`
- `deleteFun`
- `canExport`
- `exportConfig`
- `request`

## 导出配置

开启导出按钮：

```tsx
<TableMax
  tableId="user-table"
  columns={columns}
  datas={rows}
  canExport
/>;
```

当前源码支持三类导出数据来源，优先级为：

1. `exportConfig.pageFetcher`
2. `exportConfig.getExportDataList`
3. 当前表格 `datas`

`pageFetcher` 用于分页全量导出：

```tsx
<TableMax
  tableId="user-table"
  columns={columns}
  datas={rows}
  totalCount={total}
  canExport
  exportConfig={{
    fileName: '用户列表',
    pageFetcher: {
      apiFn: params => fetchUsers({ ...query, ...params }),
      extractItems: response => response.items,
      extractTotalCount: response => response.totalCount,
      extraParams: query,
      totalCount: total,
      pageSize: 1000,
      maxConcurrent: 1,
      retryCount: 2,
    },
  }}
/>;
```

`pageFetcher` 字段：

- `apiFn: (params: { skipCount: number; maxResultCount: number }) => Promise<any>`
- `extractItems: (response) => any[]`
- `extractTotalCount?: (response) => number`
- `extraParams?: Record<string, any>`
- `totalCount?: number`
- `initialPageSize?: number`
- `maxConcurrent?: number`
- `pageSize?: number`
- `retryCount?: number`

注意：

- 当前源码把单次 `pageSize` 限制到最大 `1000`。
- 当总数大于 `5000` 且提供 `pageFetcher` 时，会走流式导出路径。
- `ExportOptions` 类型中 `pageFetcher` 是必填字段；不要只为了配置 `fileName/sheetName` 传不完整的 `exportConfig`。依赖当前页 `datas` 导出时优先只传 `canExport`，需要文件名时可用 `tableTitle`，需要全量分页导出时再补齐 `pageFetcher`。
- 导出会自动排除内置选择列、拖拽列、占位列、展开列和序号列；这些列的枚举来自根包公开的 `ColumnType`。

## TableMaxColumnType

列常用字段：

- `id`
- `header`
- `accessorKey`
- `accessorFn`
- `cell`
- `size`
- `columns`

筛选相关：

- `filterType`
- `filterOptions`
- `filterKey`
- `enableColumnFilter`
- `filterFn`
- `filterComProps`
- `dynamicFilterOptionsLabelField`
- `dynamicFilterOptionsValueField`
- `dynamicFilterOptionsLabelFn`
- `getFilterOptionsFn`
- `isFilterOptionsFrontSearch`

编辑相关：

- `editable`
- `editComType`
- `editComDisabled`
- `editOptions`
- `getEditOptionsFn`
- `required`
- `unitsChangeFn`

排序相关：

- `enableSorting`
- `sortingFn`
- `sortUndefined`
- `sortingKey`

其他：

- `tooltip`
- `enableResizing`
- `meta`
- `openMemo`
- `disabledExport`
- `exportValueFormat`

## ColumnType

`ColumnType` 当前从根包公开导出，可用于识别 TableMax 内置列：

- `ColumnType.Selection`
- `ColumnType.Darg`
- `ColumnType.PlaceHolder`
- `ColumnType.Expander`
- `ColumnType.Index`

普通业务列不要使用这些 id，避免被列设置、拖拽、导出逻辑当成内置列处理。

## FilterOperator

当前源码中的枚举包括：

- `Eq`
- `Neq`
- `Gt`
- `Lt`
- `Ge`
- `Le`
- `Contains`
- `NotContains`
- `StartsWith`
- `NotStartsWith`
- `EndsWith`
- `NotEndsWith`
- `In`
- `NotIn`
- `Between`
- `IsNull`
- `IsNotNull`

## 推荐的后端联动模式

```tsx
<TableMax
  tableId="user-table"
  columns={columns}
  datas={rows}
  totalCount={total}
  pageSize={pageSize}
  skipCount={skipCount}
  manualSorting
  manualFiltering
  changePagination={({ skipCount, pageSize }) => fetchData({ skipCount, pageSize })}
  onSortingChange={(sortValueArr, sortValueStr) => fetchData({ sort: sortValueStr })}
  onFilteringChange={({ formatFiltersV2 }) => fetchData({ filters: formatFiltersV2 })}
/>;
```
