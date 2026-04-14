# TableMax 高级表格组件

TableMax 是组件库的核心组件，基于 TanStack React Table 构建，功能极其强大。

## 核心特性

- **数据管理**: 支持前端/后端分页、排序、筛选
- **交互功能**: 行选择、行拖拽、列拖拽、行编辑
- **展示优化**: 虚拟列表、列固定、列宽调整、紧凑模式
- **数据操作**: 导出 Excel、上传数据、刷新、删除
- **缓存机制**: 自动缓存用户的列设置、筛选条件、排序状态

## 基础用法

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

## Props 参数

### 基础配置

| 参数 | 类型 | 默认值 | 必需 | 说明 |
|------|------|--------|------|------|
| tableId | string | - | 是 | 用于缓存，必须唯一 |
| version | string | - | 否 | 缓存版本 |
| columns | TableMaxColumnType[] | - | 是 | 列配置 |
| datas | any[] | [] | 是 | 表格数据 |
| rowKey | string | 'id' | 否 | 行唯一标识字段 |
| loading | boolean | false | 否 | 加载状态 |
| theme | string | - | 否 | 已废弃，通过 ConfigProvider 统一配置 |

### 分页配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| totalCount | number | - | 数据总条数 |
| skipCount | number | 0 | 数据从第几条开始 |
| pageSize | number | 20 | 每页条数 |
| pageSizeOptions | number[] | - | 每页多少条可选值 |
| showSizeChanger | boolean | - | 是否显示每页条数选择器 |
| changePagination | function | - | 分页回调，参数 `{ skipCount, pageSize }` |
| showLessItems | boolean | - | 翻页组件显示较少页码 |
| defaultScrollY | number | 600 | 表格内容区高度 |

### 列配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| columnVisibleConfig | ColumnVisibleConfigType | - | 控制列显示隐藏 `{ name: true }` |
| columnPinningConfig | ColumnPinningConfigType | - | 列固定配置 `{ left: [], right: [] }` |
| disableColumnDrag | boolean | false | 禁止列拖拽 |
| columnResizeMode | ColumnResizeMode | - | 列宽调整时机 'onEnd' \| 'onChange' |
| defaultHeaderRowNum | number | 1 | 表头默认行数 |

### 选择功能

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canSelection | boolean | false | 是否支持多选 |
| canSelectionUseShift | boolean | - | 是否支持 Shift 多选，可在 ConfigProvider 配置 |
| selectionWithoutChecked | boolean | false | 多选不显示勾选框 |
| defaultSelectedRowId | string | - | 默认选中的行ID（单选） |
| defaultSelectedRowIds | any[] | - | 默认选中的行ID数组（多选） |
| enableRowSelection | boolean \| function | true | 行是否可选 |
| selectRowWhenClick | boolean | true | 点击行时是否选中 |
| onSelectChange | function | - | 行单选回调 `(row, original, selected, event)` |
| rowSelectionChange | function | - | 行多选回调 `(rowOriginal[], row[])` |
| onRowCheckboxClick | function | - | 行 checkbox 点击回调 |
| onSelectAllChange | function | - | 全选回调 `(isAllSelected, rows[])` |
| selectedRowChange | function | - | 已废弃，用 onSelectChange 替代 |

### 拖拽功能

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canRowDrag | boolean | false | 是否支持行拖拽 |
| disableDragRowIds | any[] | - | 禁止拖拽的行ID |
| dragBeforeStart | function | - | 拖拽开始前回调，返回 boolean |
| dragBeforeEnd | function | - | 拖拽结束前验证 `(toDatas, fromDatas)` |
| rowOrderChange | function | - | 行拖拽顺序变化回调 |

### 筛选功能

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canFilter | boolean | false | 是否支持筛选（是否展示筛选开关） |
| defaultEnableFilters | boolean | false | 默认是否开启筛选组件 |
| manualFiltering | boolean | false | 是否后端筛选 |
| defaultColumnFilters | ColumnFiltersState | - | 默认筛选参数 |
| onFilteringChange | function | - | 筛选变化回调 |
| manualFilteringChange | function | - | 已废弃，用 onFilteringChange 替代 |
| getColumnFiltersData | function | - | 已废弃，用 onFilteringChange 替代 |
| getDynamicFilterOptionsFn | function | - | 动态筛选选项获取函数 |
| openNullValueFilter | boolean | - | 开启空值过滤 |

### 排序功能

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canSorting | boolean | true | 是否支持排序 |
| enableMultiSort | boolean | false | 是否支持多列同时排序 |
| manualSorting | boolean | false | 是否后端排序 |
| onSortingChange | function | - | 排序变化回调 |
| manualSortingChange | function | - | 已废弃，用 onSortingChange 替代 |

### 编辑功能

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canEditting | boolean | false | 是否支持编辑 |
| canEditRowWhenDClick | boolean | false | 是否双击行进入编辑 |
| saveEditing | function | - | 保存编辑内容回调 `(row)` |
| onEditValueChange | function | - | 编辑值变化时触发 `(field, value, extra)` |

### 展示配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| rowHeight | number | 42 | 行高度 |
| defaultCompactMode | boolean | false | 是否默认紧凑模式 |
| canCompact | boolean | true | 是否显示紧凑模式按钮 |
| compactMode | boolean | - | 紧凑模式 |
| enableVirtualList | boolean | false | 是否开启虚拟列表 |
| openVirtualColumns | boolean | false | 开启虚拟列 |
| openVirtualRows | boolean | false | 开启虚拟行 |
| autoHeight | boolean | false | 高度是否自动占满父级 |
| tooltip | boolean | true | 所有单元格是否展示tooltip |
| emptyDataHeight | number \| string | - | 已废弃，暂无数据高度 |

### 数据操作

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canRefresh | boolean | true | 是否显示刷新按钮 |
| refreshFun | function | - | 刷新回调 |
| canUpload | boolean | true | 是否显示上传按钮 |
| uploadProps | UploadProps | - | 上传组件属性 |
| canDownload | boolean | true | 是否显示下载按钮 |
| downloadProps | DownloadProps | - | 下载配置 `{ url, data, title, method }` |
| canDelete | boolean | false | 是否显示删除按钮 |
| deleteFun | function | - | 删除回调，返回选中的行 |
| canExport | boolean | - | 是否导出表格数据 |
| exportConfig | ExportOptions | - | 导出配置 |
| request | function | - | 自定义请求函数（用于下载） |

### 缓存配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| openMemo | boolean | - | useMemo 缓存 row |
| hasTotalRow | boolean | - | 是否有总计行 |
| totalDatas | any[] | - | 总计行数据 `{ '列id': '数据' }` |
| openIndexColumn | boolean | - | 开启序号列 |

### 自定义渲染

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| renderOperate | ReactNode | - | 自定义表格顶部所有内容 |
| tableTitle | string | - | 表格顶部左侧标题 |
| renderOperateLeft | ReactNode | - | 自定义表格顶部左侧内容 |
| renderOperateRight | ReactNode | - | 表格顶部右侧自定义内容 |
| renderSubComponent | function | - | 子表渲染组件 `(value: { row })` |
| getRowCanExpand | function | - | 行是否可展开 |

### 样式配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| rowClassName | function | - | 行类名函数 `(row) => string[]` |
| cellClassName | function | - | 单元格类名函数 `(cell) => string[]` |
| rowStyle | object | - | 行内样式 |
| getCellProps | function | - | 单元格属性获取函数 `(ctx)` |
| getHeaderCellProps | function | - | 表头单元格属性获取函数 `(columns)` |
| defaultHighLightRowId | string | - | 默认高亮的 rowId |

### 事件处理

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| onRowMouseEnter | function | - | 鼠标进入行事件 `(row)` |
| onRowMouseLeave | function | - | 鼠标离开行事件 `(row)` |
| onRowMouseClick | function | - | 鼠标点击行事件 `(row)` |
| onRowMouseDoubleClick | function | - | 鼠标双击行事件 `(row)` |
| getContextMenu | function | - | 获取右键菜单配置 `(params: { row, column })` |
| onClickContextMenu | function | - | 点击菜单选项 `(params: { row, column, clickedMenuValue })` |
| getRowHoverTipConfig | function | - | 获取行 hover 提示配置 `(row) => { title, color }` |

### 其他配置

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| canSetting | boolean | true | 是否显示设置按钮 |
| usage | string | - | 用途 'filter' \| 'submit' |
| labelAlign | FormLabelAlign | - | label 对齐方式 |

## 列配置 TableMaxColumnType

```typescript
interface TableMaxColumnType {
  id: string;                          // 每一列的id是唯一的
  header: string | ((arg: any) => React.ReactNode);  // 表头文案
  accessorKey?: string;                // 每一行在渲染当前列的时候使用的key值
  accessorFn?: (originalRow, index) => any;  // 取值函数
  cell?: (info: any) => ReactNode;     // 单元格渲染函数
  size?: number;                       // 列宽度
  parent?: boolean;                    // 是否为父列（分组）
  child?: boolean;                     // 是否为子列
  columns?: TableMaxColumnType[];      // 子列配置（分组用）

  // 筛选配置
  filterType?: FilterType;             // 筛选组件类型
  filterOptions?: { value, label }[];  // 筛选组件的可选值
  filterKey?: string;                  // 自定义筛选值所使用的key
  enableColumnFilter?: boolean;        // 当前列是否可筛选，默认true
  filterFn?: FilterFnType | ((row, columnId, filterValue) => boolean);  // 筛选函数
  filterComProps?: {                   // 筛选组件属性配置
    showTime?: boolean;                // 时间筛选是否可以选择时分秒
    format?: string;                   // 时间筛选显示的格式
    picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';  // 时间筛选器类型
    rangePresets?: TimeRangePickerProps['presets'];  // 快捷选项
  };
  dynamicFilterOptionsLabelField?: string;      // 动态选项 label 字段
  dynamicFilterOptionsValueField?: string;      // 动态选项 value 字段
  dynamicFilterOptionsLabelFn?: Function;       // 动态选项 label 函数
  getFilterOptionsFn?: (inputValue) => Promise<{ label, value }[]>;  // 获取可选项
  isFilterOptionsFrontSearch?: boolean;         // 筛选选项是否前端搜索

  // 编辑配置
  editable?: boolean;                  // 列是否可编辑
  editComType?: InputType;             // 编辑组件类型
  editComDisabled?: boolean;           // 编辑组件是否禁用
  editOptions?: { value, label }[];    // 编辑选项（select用）
  getEditOptionsFn?: (inputValue) => Promise<{ label, value }[]>;  // 远程搜索函数
  required?: boolean;                  // 编辑时该列是否必填
  unitsChangeFn?: (num) => number;     // 单位转换函数

  // 排序配置
  enableSorting?: boolean;             // 当前列是否可排序
  sortingFn?: SortFnType | ((rowA, rowB, columnId) => 1 | -1 | 0);  // 排序函数
  sortUndefined?: false | 1 | -1;      // undefined值处理方式
  sortingKey?: string;                 // 自定义排序所使用的key

  // 样式配置
  columnClassName?: string[];          // 自定义列的类名
  tooltip?: boolean;                   // 是否显示tooltip
  ellipsis?: boolean;                  // 已废弃，用 tooltip 替代
  enableResizing?: boolean;            // 是否可调整列宽

  // 元数据配置
  meta?: {
    isDate?: boolean;                  // 是否为日期
    dateFormat?: string;               // 日期展示格式
  };

  // 其他配置
  openMemo?: boolean;                  // 是否缓存行单元格
  disabledExport?: boolean;            // 禁止导出
  exportValueFormat?: (val) => any;    // 导出格式化函数
}
```

## 筛选操作符 FilterOperator

```typescript
enum FilterOperator {
  Eq = 'Eq',           // 等于
  Neq = 'Neq',         // 不等于
  Gt = 'Gt',           // 大于
  Lt = 'Lt',           // 小于
  Ge = 'Ge',           // 大于等于
  Le = 'Le',           // 小于等于
  Contains = 'Contains',           // 包含
  NotContains = 'NotContains',     // 不包含
  StartsWith = 'StartsWith',       // 开头是
  NotStartsWith = 'NotStartsWith', // 开头不是
  EndsWith = 'EndsWith',           // 结尾是
  NotEndsWith = 'NotEndsWith',     // 结尾不是
  In = 'In',           // 在列表中
  NotIn = 'NotIn',     // 不在列表中
  Between = 'Between', // 区间
  IsNull = 'IsNull',   // 为空
  IsNotNull = 'IsNotNull',  // 不为空
}
```

## CRUD 操作模式

```typescript
const columns = useMemo(() => [
  { id: 'id', header: 'ID', accessorKey: 'id', size: 80 },
  { id: 'name', header: '姓名', accessorKey: 'name', editable: true, filterType: FilterType.Input },
], []);

const handlePagination = useCallback(({ skipCount, pageSize }) => {
  fetchData({ skipCount, pageSize });
}, [fetchData]);

const handleSort = useCallback((sortValueArr, sortValueStr, sortedData) => {
  fetchData({ sort: sortValueStr });
}, [fetchData]);

const handleFilter = useCallback(({ filters, formatFiltersV2 }) => {
  fetchData({ filters: formatFiltersV2 });
}, [fetchData]);

<TableMax
  tableId="user-table"
  columns={columns}
  datas={users}
  totalCount={total}
  pageSize={pageSize}
  skipCount={skipCount}
  canSelection={true}
  canEditting={true}
  canFilter={true}
  manualSorting={true}
  manualFiltering={true}
  changePagination={handlePagination}
  onSortingChange={handleSort}
  onFilteringChange={handleFilter}
/>
```
