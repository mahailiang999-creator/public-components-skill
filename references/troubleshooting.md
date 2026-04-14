# 故障排查

## 表格缓存问题

### 问题：表格设置没有保存

**解决方案：**

1. 检查 tableId 是否唯一
```typescript
// 正确
<TableMax tableId="user-table" />

// 错误 - 多个表格使用相同 ID
<TableMax tableId="table" />
<TableMax tableId="table" />
```

2. 检查 userId 是否设置
```typescript
<ConfigProvider config={{ userId: getCurrentUserId() }}>
  <App />
</ConfigProvider>
```

3. 清除特定表格缓存
```typescript
localStorage.removeItem('TableMax-/path-user-table-user123');
```

4. 升级缓存版本
```typescript
<TableMax version="1.0.1" />
```

### 问题：虚拟滚动不生效

**解决方案：**

1. 确保设置正确的 rowHeight
```typescript
<TableMax
  enableVirtualList={true}
  rowHeight={42}
/>
```

2. 检查容器高度
```typescript
<div style={{ height: 500 }}>
  <TableMax autoHeight={false} />
</div>
```

### 问题：分页不更新

**解决方案：**

1. 检查 changePagination 是否正确实现
```typescript
const handlePagination = useCallback(({ skipCount, pageSize }) => {
  fetchData({ skipCount, pageSize });
}, [fetchData]);

<TableMax changePagination={handlePagination} />
```

2. 检查 totalCount 是否正确
```typescript
<TableMax totalCount={total} />
```

## 主题问题

### 问题：主题不生效

**解决方案：**

1. 检查 autoSetCssVars 是否为 true
```typescript
<ConfigProvider
  config={{
    autoSetCssVars: true,
  }}
>
  <App />
</ConfigProvider>
```

2. 检查 root 配置是否正确
```typescript
<ConfigProvider
  config={{
    root: '#root',
  }}
>
  <App />
</ConfigProvider>
```

3. 检查 ThemeProvider 是否包裹
```typescript
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>
```

### 问题：CSS 变量覆盖不生效

**解决方案：**

1. 确保在 :root 中定义
```css
:root {
  --global-primary-color: #custom-color;
}
```

2. 检查变量名是否正确
```typescript
<ConfigProvider
  config={{
    variablesJson: {
      '--global-primary-color': '#1890ff',
    },
  }}
/>
```

## 权限问题

### 问题：权限不生效

**解决方案：**

1. 确保 PermissionProvider 包裹了组件
```typescript
<PermissionProvider permissions={userPermissions}>
  <App />
</PermissionProvider>
```

2. 检查权限字符串是否正确
```typescript
<Restricted requiredPermissions={['user:write']}>
  <Button>编辑</Button>
</Restricted>
```

3. 使用 isAllowedTo 调试
```typescript
const { isAllowedTo } = useContext(PermissionContext);

const hasPermission = isAllowedTo(['user:write']);
console.log('Has permission:', hasPermission);
```

## 国际化问题

### 问题：翻译不生效

**解决方案：**

1. 检查 locale 配置
```typescript
<ConfigProvider config={{ locale: public_zhCN }}>
  <App />
</ConfigProvider>
```

2. 检查语言包键是否正确
```typescript
const [t] = useTranslation();

const title = t('global.title'); // 确保键存在
```

3. 使用辅助函数调试
```typescript
const columns = t.tT([
  { id: 'name', accessorKey: 'name' },
]);

// 检查翻译后的 header
console.log(columns[0].header);
```

### 问题：翻译键警告

**解决方案：**

useTranslation 会自动警告缺失的翻译键，确保在语言包中添加对应的翻译：

```typescript
const locale = {
  global: {
    title: '标题',
    placeholder: {
      input: '请输入',
      select: '请选择',
      startTime: '开始时间',
      endTime: '结束时间',
    },
  },
  apiField: {
    name: '姓名',
    age: '年龄',
  },
};
```

## 表单问题

### 问题：表单提交不生效

**解决方案：**

1. 检查 handleSubmit 是否正确
```typescript
const handleSubmit = async ({ data }) => {
  const [error] = await to(submitForm(data));
  if (error) {
    message.error('提交失败');
    return false;
  }
  message.success('提交成功');
  return true;
};

<CustomForm handleSubmit={handleSubmit} />
```

2. 检查字段配置
```typescript
const formFields = [
  {
    field: 'name',  // 确保 field 正确
    label: '姓名',
    formType: CustomFormItemType.Text,
  },
];
```

3. 检查 QueryFilter submit 回调参数
```typescript
const handleSubmit = ({ data }, item, type) => {
  console.log('表单数据:', data);
  console.log('当前字段:', item);
  console.log('输入类型:', type); // 'min' | 'max' | 'string'
};
```

### 问题：动态选项不更新

**解决方案：**

1. 使用 getEditOptionsFn
```typescript
const columns = [
  {
    id: 'status',
    getEditOptionsFn: async (inputValue) => {
      const options = await fetchOptions(inputValue);
      return options;
    },
  },
];
```

2. 使用 getOptionsFn (QueryFilter/RemoteSelect)
```typescript
const filterFields = [
  {
    field: 'status',
    formType: FormItemType.RemoteSelect,
    getOptionsFn: async (keyword) => {
      return fetchOptions(keyword);
    },
  },
];
```

## 拖拽问题

### 问题：行拖拽不生效

**解决方案：**

1. 检查是否启用了拖拽
```typescript
<TableMax canRowDrag={true} />
```

2. 检查行是否有唯一 ID
```typescript
<TableMax rowKey="id" />
```

3. 检查 dragBeforeEnd
```typescript
const dragBeforeEnd = (toDatas, fromDatas) => {
  console.log('拖拽验证:', toDatas, fromDatas);
  return true; // 返回 false 会阻止拖拽
};
```

4. 检查 disableDragRowIds
```typescript
<TableMax
  canRowDrag={true}
  disableDragRowIds={[1, 2]}
/>
```

### 问题：SplitPane 拖拽不生效

**解决方案：**

1. 检查 allowResize
```typescript
<SplitPane
  allowResize={true}
  pane1Dom={<LeftPanel />}
  pane2Dom={<RightPanel />}
/>
```

2. 检查缓存数据
```typescript
import { setSplitSizeData, getSplitSizeData } from './util';

// 查看缓存
const cachedSize = getSplitSizeData(pageName, moduleName, userId, prefix);

// 清除缓存
localStorage.removeItem(`${prefix}_${pageName}_${moduleName}_${userId}_splitSize`);
```

## 筛选排序问题

### 问题：后端筛选不生效

**解决方案：**

1. 确保 manualFiltering 为 true
```typescript
<TableMax
  manualFiltering={true}
  onFilteringChange={handleFilter}
/>
```

2. 检查筛选格式
```typescript
const handleFilter = useCallback(({ formatFiltersV2 }) => {
  console.log('筛选条件:', formatFiltersV2);
  fetchData({ filters: formatFiltersV2 });
}, [fetchData]);
```

3. 检查筛选操作符
```typescript
// formatFiltersV2 格式
{
  columnId: {
    operator: 'Eq',  // FilterOperator
    value: 'value',
  },
}
```

### 问题：后端排序不生效

**解决方案：**

1. 确保 manualSorting 为 true
```typescript
<TableMax
  manualSorting={true}
  onSortingChange={handleSort}
/>
```

2. 检查排序参数
```typescript
const handleSort = useCallback((sortValueArr, sortValueStr, sortedData) => {
  console.log('排序参数:', sortValueStr);  // 如 "name desc,age asc"
  fetchData({ sort: sortValueStr });
}, [fetchData]);
```

## 弹窗问题

### 问题：弹窗无法关闭

**解决方案：**

1. 检查 maskClosable
```typescript
<CenterModal maskClosable={true} />
```

2. 检查 handleCancel
```typescript
<CenterModal
  handleCancel={() => setOpen(false)}
/>
```

### 问题：弹窗状态管理混乱

**解决方案：**

使用 useCenterModalState Hook
```typescript
const [modalProps, setModalProps, closeModal] = useCenterModalState();

// 打开
setModalProps({ open: true, title: '标题' });

// 关闭
closeModal();
```

## 常见错误

### TypeError: Cannot read property of undefined

**原因：** 组件未正确初始化或配置缺失

**解决方案：**
```typescript
// 确保 ConfigProvider 正确配置
<ConfigProvider config={config}>
  <App />
</ConfigProvider>
```

### Error: tableId is required

**原因：** TableMax 缺少 tableId

**解决方案：**
```typescript
<TableMax tableId="unique-id" />
```

### Error: Cannot read property 'name' of undefined

**原因：** 列配置缺少 id

**解决方案：**
```typescript
const columns = [
  { id: 'name', header: '姓名', accessorKey: 'name' }, // 必须有 id
];
```

### Error: isAllowedTo is not a function

**原因：** 未正确使用 PermissionContext

**解决方案：**
```typescript
import PermissionContext from '@arim-aisdc/public-components/esm/Permission/Context';

const { isAllowedTo } = useContext(PermissionContext);
```

## 调试技巧

### 1. 启用日志

```typescript
<TableMax
  onFilteringChange={(data) => console.log('筛选变化:', data)}
  onSortingChange={(data) => console.log('排序变化:', data)}
  onSelectChange={(row, original, selected) => console.log('选择变化:', row, selected)}
/>
```

### 2. 检查缓存

```typescript
// 查看所有表格缓存
Object.keys(localStorage)
  .filter(key => key.startsWith('TableMax'))
  .forEach(key => {
    console.log(key, localStorage.getItem(key));
  });

// 查看页面缓存
Object.keys(localStorage)
  .filter(key => key.includes('HBIS_PAGE_CACHE'))
  .forEach(key => {
    console.log(key, localStorage.getItem(key));
  });
```

### 3. 检查配置

```typescript
const config = useConfig();
console.log('全局配置:', config);
```

### 4. 检查权限

```typescript
const { isAllowedTo } = useContext(PermissionContext);
console.log('当前权限检查:', isAllowedTo(['user:read']));
```

### 5. 检查翻译

```typescript
const [t, localeCode] = useTranslation();
console.log('当前语言:', localeCode);
console.log('翻译 global.title:', t('global.title'));
```

## 性能问题

### 问题：表格渲染慢

**解决方案：**

1. 开启虚拟列表
```typescript
<TableMax enableVirtualList={true} />
```

2. 减少 re-render
```typescript
const columns = useMemo(() => [...], []);
const handleSort = useCallback(() => {}, []);
```

3. 减少 memo 范围
```typescript
<TableMax openMemo={false} />
```

4. 使用 openVirtualColumns 和 openVirtualRows
```typescript
<TableMax
  openVirtualColumns={true}
  openVirtualRows={true}
/>
```

### 问题：表单提交慢

**解决方案：**

1. 减少表单字段
2. 使用异步校验
3. 优化网络请求

## 联系支持

如果以上方法都无法解决问题，请检查：

1. 组件库版本是否正确
```bash
npm list @arim-aisdc/public-components
```

2. 依赖是否完整
```bash
npm install
```

3. 浏览器控制台是否有错误信息
