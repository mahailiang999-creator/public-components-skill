# Hooks

组件库提供了多个实用 Hooks，简化常见开发任务。

## useTranslation

强大的国际化翻译 Hook，支持嵌套键查找、占位符替换和数组翻译辅助函数。

```typescript
import { useTranslation } from '@arim-aisdc/public-components';

const [t, localeCode] = useTranslation();

// 基础翻译
const title = t('global.title');

// 嵌套键翻译
const message = t('user.profile.name');

// 占位符替换
const greeting = t('global.welcome', 'John', '2024');
```

### 返回值

| 值 | 类型 | 说明 |
|----|------|------|
| t | function | 翻译函数 |
| localeCode | string | 当前语言代码 |

### 数组翻译辅助函数

#### tA - 通用数组翻译

```typescript
const translatedData = t.tA(data, {
  fieldKey: 'type',          // 指定哪个字段作为翻译键
  labelKey: 'typeName',      // 指定哪个字段保存翻译后的值
  groupPrefix: 'status',     // 可选的分组前缀
});
```

#### tT - 翻译 TableMax 列配置

```typescript
const columns = t.tT([
  { id: 'name', accessorKey: 'name' },
  { id: 'age', accessorKey: 'age' },
]);
// 自动将 header 设置为 t(`apiField.${accessorKey}`)
```

#### tQ - 翻译 QueryFilter 配置

```typescript
const filterFields = t.tQ([
  { field: 'name', formType: 'text' },
  { field: 'status', formType: 'select' },
]);
// 自动设置 label 和 inputTips
```

#### tF - 翻译 CustomForm 配置

```typescript
const formFields = t.tF([
  { field: 'name', formType: CustomFormItemType.Text },
  { field: 'email', formType: CustomFormItemType.Text },
]);
```

#### tB - 翻译 BaseInfo 配置

```typescript
const infoFields = t.tB([
  { field: 'name', value: 'John' },
  { field: 'age', value: 25 },
]);
// 自动将 text 设置为 t(`apiField.${field}`)
```

### 自定义语言包

```typescript
const customLocales = {
  'zh-CN': {
    myApp: {
      title: '我的应用',
      welcome: '欢迎使用',
    },
  },
  'en-US': {
    myApp: {
      title: 'My App',
      welcome: 'Welcome',
    },
  },
};

const [t] = useTranslation(customLocales);
const title = t('myApp.title');
```

### 函数签名

```typescript
type LocaleFunction = ((...rest: any) => string) & {
  tA: (data: any[], options: TranslateOptions) => any[];
  tT: (data: any[]) => any[];
  tQ: (data: any[]) => any[];
  tF: (data: any[]) => any[];
  tB: (data: any[]) => any[];
};

type TranslateOptions = {
  fieldKey: string;        // 指定哪个字段作为翻译键
  labelKey: string;        // 指定哪个字段保存翻译后的值
  groupPrefix?: string;    // 可选的分组前缀
};
```

## useEventBus

全局事件总线 Hook，用于跨组件通信。

```typescript
import { useEventBus, events } from '@arim-aisdc/public-components';

// 发送事件
events.emit('data-changed', { id: 1, name: 'test' });

// 监听事件
useEventBus('data-changed', data => {
  console.log('数据变化:', data);
});
```

### API

#### 发送事件

```typescript
events.emit(eventName, ...args);
```

#### 监听事件

```typescript
useEventBus(eventName, handler);
// 自动在组件卸载时清理监听器
```

#### 一次性监听

```typescript
events.once(eventName, handler);
```

#### 手动移除监听器

```typescript
const handler = data => console.log(data);
events.on('my-event', handler);
events.off('my-event', handler);
```

#### 调用所有监听器

```typescript
const results = events.invoke(eventName, ...args);
```

## usePageCacheState

自动缓存页面状态到 localStorage/sessionStorage，刷新页面后自动恢复。

```typescript
import { usePageCacheState } from '@arim-aisdc/public-components';

// 基础用法
const [state, setState] = usePageCacheState('page-key', { count: 0 });

// 完整配置
const [state, setState, initState, clearState] = usePageCacheState(
  'page-key',
  {
    defaultValue: { count: 0 },
    noCacheFields: ['pageSize'],  // 不需要缓存的字段
  },
  [deps]  // 依赖值
);
```

### 返回值

| 值 | 类型 | 说明 |
|----|------|------|
| state | T | 当前状态 |
| setState | function | 设置状态函数 `(customData: Partial<T>) => void` |
| initState | function | 初始化状态函数 `(newDeps: any[]) => void` |
| clearState | function | 清除状态函数 `(newData?: object) => void` |

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| originStateCacheKey | string | state 存储到 storage 时的 key 值 |
| defaultConfig | T \| { defaultValue: T, noCacheFields?: string[] } | 默认配置 |
| deps | any[] | 依赖值，state 存储 key = originStateCacheKey + deps |

### 使用示例

```typescript
// 基础用法
const [state, setState] = usePageCacheState('page-key', { count: 0 });

// 支持嵌套字段更新
const [formData, setFormData] = usePageCacheState('form-data', {
  user: { name: '', age: 0 },
  settings: { theme: 'light' },
});

setFormData({ user: { name: 'John' } }); // 深度合并

// 初始化状态
const [state, setState, initState] = usePageCacheState('key', initialValue);
initState();

// 清除缓存
const [state, setState, initState, clearState] = usePageCacheState('key', initialValue);
clearState();
```

### 缓存特性

- 自动缓存到 localStorage
- 缓存有效期：1小时（3600000ms）
- 支持深度合并嵌套对象
- 组件卸载时保留缓存
- 刷新页面自动恢复状态
- 数组不合并，直接覆盖

### 常量

```typescript
const PAGE_CACHE_KEY = 'HBIS_PAGE_CACHE';  // 缓存数据使用的 key
const CACHE_MAX_AGE = 1 * 60 * 60 * 1000;  // 页面缓存有效期：1小时
```

## useCenterModalState

简化 CenterModal 状态管理的 Hook。

```typescript
import { useCenterModalState, CenterModal } from '@arim-aisdc/public-components';

const [modalProps, setModalProps, closeModal] = useCenterModalState();
```

### 返回值

| 值 | 类型 | 说明 |
|----|------|------|
| modalProps | object | Modal props |
| setModalProps | function | 设置 Modal props |
| closeModal | function | 关闭 Modal |

### 使用示例

```typescript
// 打开弹窗
const openModal = () => {
  setModalProps({
    visible: true,
    title: '编辑用户',
    width: 600,
  });
};

// 关闭弹窗
const handleOk = () => {
  closeModal();
};

// 渲染弹窗
<CenterModal
  {...modalProps}
  onOk={handleOk}
  onCancel={closeModal}
>
  弹窗内容
</CenterModal>
```

## useConfig

获取 ConfigProvider 提供的全局配置。

```typescript
import { useConfig } from '@arim-aisdc/public-components';

const config = useConfig();

// 访问配置
const theme = config.theme;
const locale = config.locale;
const userId = config.userId;
const dateFormat = config.dateFormat;
const tableMaxConfig = config.tableMax;
```

### 配置对象

| 属性 | 类型 | 说明 |
|------|------|------|
| theme | string | 主题 'light' \| 'dark' |
| userId | string | 用户ID |
| tableKeyPrefixCls | string | 表格缓存前缀 |
| locale | object | 语言包对象 |
| dateFormat | string | 日期格式 |
| tableMax | object | TableMax 全局配置 |
| variablesJson | object | 主题变量配置 |
| autoSetCssVars | boolean | 是否自动设置CSS变量 |
| renderEmpty | function | 自定义空状态组件 |
| request | function | 自定义请求函数 |
