# TableMax

源码校准基准：

- `src/components/TableMax/index.ts`
- `src/components/TableMax/type.ts`

## 根包导入

```ts
import {
  TableMax,
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
