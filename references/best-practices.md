# 最佳实践

## 性能优化

### 使用 useMemo 缓存列配置

```typescript
const columns = useMemo(
  () => [
    { id: 'id', header: 'ID', accessorKey: 'id', size: 80 },
    { id: 'name', header: '姓名', accessorKey: 'name' },
  ],
  [],
);
```

### 使用 useCallback 缓存事件处理函数

```typescript
const handlePagination = useCallback(({ skipCount, pageSize }) => {
  fetchData({ skipCount, pageSize });
}, [fetchData]);

const handleSort = useCallback((sortValueArr, sortValueStr, sortedData) => {
  fetchData({ sort: sortValueStr });
}, [fetchData]);
```

### 大数据量时开启虚拟列表

```typescript
<TableMax
  enableVirtualList={true}
  rowHeight={42}
/>
```

### 合理设置缓存时间

```typescript
<ConfigProvider
  config={{
    tableMax: {
      cacheMaxAge: 3600000, // 1小时
    },
  }}
/>
```

## 缓存策略

### 每个表格必须设置唯一的 tableId

```typescript
<TableMax tableId="user-table" />
<TableMax tableId="order-table" />
```

### 设置用户 ID 实现缓存隔离

```typescript
<ConfigProvider config={{ userId: getCurrentUserId() }}>
  <App />
</ConfigProvider>
```

### 使用 version 参数控制缓存版本

```typescript
<TableMax version="1.0.1" />
```

### 配置 tableKeyPrefixCls 避免缓存冲突

```typescript
<ConfigProvider config={{ tableKeyPrefixCls: 'my-app' }}>
  <App />
</ConfigProvider>
```

### 使用 openMemo 控制行缓存

```typescript
<TableMax openMemo={true} />
```

## 国际化配置

### 配置语言包

```typescript
import { public_zhCN, public_enUS, public_viVN } from '@arim-aisdc/public-components';

<ConfigProvider config={{ locale: public_zhCN }}>
  <App />
</ConfigProvider>
```

### 使用 useTranslation 的辅助函数

```typescript
const [t] = useTranslation();

// 翻译 TableMax 列
const columns = t.tT([
  { id: 'name', accessorKey: 'name' },
]);

// 翻译 QueryFilter
const filterFields = t.tQ([
  { field: 'name', formType: 'text' },
]);

// 翻译 CustomForm
const formFields = t.tF([
  { field: 'name', formType: CustomFormItemType.Text },
]);
```

### 自定义语言包扩展

```typescript
const customLocales = {
  'zh-CN': {
    myApp: {
      title: '我的应用',
    },
  },
};

const [t] = useTranslation(customLocales);
```

## 权限控制

### 使用 PermissionProvider 包裹应用

```typescript
<PermissionProvider permissions={userPermissions}>
  <App />
</PermissionProvider>
```

### 使用 Restricted 组件进行条件渲染

```typescript
<Restricted requiredPermissions={['admin']}>
  <Button type="danger">删除</Button>
</Restricted>
```

### 使用 isAllowedTo 检查权限

```typescript
const { isAllowedTo } = useContext(PermissionContext);

if (isAllowedTo(['user:write'])) {
  // 有权限
}
```

## 主题配置

### 在应用根配置主题

```typescript
<ConfigProvider
  config={{
    theme: 'dark',
    variablesJson: {
      '--global-primary-color': '#1890ff',
    },
    autoSetCssVars: true,
  }}
>
  <ThemeProvider theme="dark">
    <App />
  </ThemeProvider>
</ConfigProvider>
```

### 使用 ThemeProvider 实现主题切换

```typescript
const [theme, setTheme] = useState<'light' | 'dark'>('light');

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### 通过 CSS 变量覆盖主题

```css
:root {
  --global-primary-color: #custom-color;
  --table-row-hover-bgc: #custom-hover;
}
```

## 错误处理

### 使用 to 工具函数处理 Promise 错误

```typescript
import { to } from '@arim-aisdc/public-components';

const [error, data] = await to(fetchUserData());
if (error) {
  console.error('请求失败:', error);
  return;
}
```

### 表格操作时添加 loading 状态

```typescript
const [loading, setLoading] = useState(false);

const handleDelete = async (id) => {
  setLoading(true);
  const [error] = await to(deleteUser(id));
  setLoading(false);
  if (!error) {
    message.success('删除成功');
  }
};

<TableMax loading={loading} canDelete={true} deleteFun={handleDelete} />
```

### 合理处理空数据状态

```typescript
<Empty text="暂无数据" />
```

## 表格开发

### 后端分页配置

```typescript
<TableMax
  manualSorting={true}
  manualFiltering={true}
  onSortingChange={handleSort}
  onFilteringChange={handleFilter}
  changePagination={handlePagination}
/>
```

### 行选择配置

```typescript
<TableMax
  canSelection={true}
  canSelectionUseShift={true}
  onSelectChange={handleSelectChange}
/>
```

### 行拖拽配置

```typescript
<TableMax
  canRowDrag={true}
  disableDragRowIds={[1, 2]}
  dragBeforeEnd={dragValidator}
  rowOrderChange={handleRowOrderChange}
/>
```

### 行编辑配置

```typescript
<TableMax
  canEditting={true}
  canEditRowWhenDClick={true}
  saveEditing={handleSaveEditing}
/>
```

## 表单开发

### CustomForm 配置

```typescript
const formFields = [
  {
    field: 'name',
    label: '姓名',
    formType: CustomFormItemType.Text,
    required: true,
  },
  {
    field: 'status',
    label: '状态',
    formType: CustomFormItemType.Select,
    setting: [
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' },
    ],
  },
];

<CustomForm
  data={formFields}
  handleSubmit={handleSubmit}
  layout="horizontal"
/>
```

### QueryFilter 配置

```typescript
const filterFields = [
  { field: 'name', formType: FormItemType.Text, label: '姓名' },
  { field: 'status', formType: FormItemType.Select, setting: [...] },
];

<QueryFilter
  data={filterFields}
  handleSubmit={handleSubmit}
  handleCancel={handleReset}
/>
```

## 状态管理

### 使用 usePageCacheState 缓存页面状态

```typescript
const [state, setState] = usePageCacheState('page-key', { count: 0 });
// 刷新页面后自动恢复
```

### 使用 useCenterModalState 管理弹窗状态

```typescript
const [modalProps, setModalProps, closeModal] = useCenterModalState();

// 打开弹窗
setModalProps({ open: true, title: '标题' });

// 关闭弹窗
closeModal();
```

### 使用 useEventBus 进行跨组件通信

```typescript
// 发送事件
events.emit('data-changed', data);

// 监听事件
useEventBus('data-changed', handler);
```

## SplitPane 使用

### 基础用法

```typescript
<SplitPane
  splitType={SplitTypeList.horizontal}
  defaultSize="50%"
  minSize="10%"
  maxSize="90%"
  pane1Dom={<LeftPanel />}
  pane2Dom={<RightPanel />}
  currentModulePageName="myPage"
  currentModuleDataName="myModule"
  routerName={window.location.pathname}
  pane1Name="leftPanel"
  pane2Name="rightPanel"
  userId={userId}
/>
```

### 配置项说明

- `splitType`: 分割方向，'horizontal' 或 'vertical'
- `defaultSize`: 默认尺寸，可以是百分比或像素值
- `minSize` / `maxSize`: 拖拽范围限制
- `currentModulePageName`: 当前页面名称（用于缓存）
- `currentModuleDataName`: 当前模块名称（用于缓存）
- `userId`: 用户ID（用于缓存隔离）
- `dragFinished`: 拖拽完成回调
