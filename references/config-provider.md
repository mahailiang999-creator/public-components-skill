# ConfigProvider 全局配置

ConfigProvider 提供全局配置能力，是使用组件库的基础。

## 基础用法

```typescript
import { ConfigProvider } from '@arim-aisdc/public-components';

<ConfigProvider config={config}>
  <App />
</ConfigProvider>
```

## 配置选项

### 基础配置

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| theme | string | 'light' | 主题：'dark' \| 'light' |
| userId | string | '' | 用户ID，用于缓存隔离 |
| tableKeyPrefixCls | string | 'TableMax' | 表格缓存前缀 |
| locale | Locale | public_zhCN | 国际化语言配置 |
| dateFormat | string | 'YYYY-MM-DD HH:mm' | 日期格式 |

### 主题配置

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| themePackageName | string | 'DefaultThemePackage' | 主题包名称 |
| variablesJson | VariablesJsonType | - | 主题变量配置 `{ [code: string]: string }` |
| autoSetCssVars | boolean | true | 是否自动设置CSS变量 |
| root | string | '#root' | 项目根节点选择器 |
| getRootContainer | function | - | 获取根容器函数 `() => HTMLElement` |

### TableMax 全局配置

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| tableMax.canExport | boolean | - | 全局导出权限 |
| tableMax.pageSizeOptions | number[] | - | 全局分页选项 |
| tableMax.cacheMaxAge | number | - | 缓存过期时间（毫秒） |
| tableMax.openMemo | boolean | - | 是否开启memo缓存 |
| tableMax.canSelectionUseShift | boolean | - | Shift多选 |
| tableMax.openNullValueFilter | boolean | - | 空值过滤 |
| tableMax.openIndexColumn | boolean | - | 序号列 |
| tableMaxNewPagination | boolean | false | 是否使用新翻页组件 |

### 自定义配置

| 配置项 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| renderEmpty | function | - | 自定义空状态组件 `(theme?) => ReactNode` |
| request | function | - | 自定义请求函数（用于下载等） |
| keepAliveActivateKey | number \| string | - | 激活key |
| keepAliveUnactivateKey | number \| string | - | 非激活key |

## 完整示例

```typescript
import { ConfigProvider, public_zhCN } from '@arim-aisdc/public-components';

<ConfigProvider
  config={{
    theme: 'dark',
    userId: 'user123',
    tableKeyPrefixCls: 'my-app',
    locale: public_zhCN,
    dateFormat: 'YYYY-MM-DD HH:mm',
    themePackageName: 'DefaultThemePackage',
    variablesJson: {
      '--global-primary-color': '#1890ff',
      '--table-row-hover-bgc': '#f0f0f0',
    },
    autoSetCssVars: true,
    root: '#root',
    getRootContainer: () => document.getElementById('root'),
    tableMax: {
      canExport: true,
      pageSizeOptions: [10, 20, 50, 100],
      cacheMaxAge: 3600000,
      openMemo: true,
      canSelectionUseShift: true,
      openNullValueFilter: true,
      openIndexColumn: false,
    },
    tableMaxNewPagination: false,
    renderEmpty: theme => <CustomEmpty theme={theme} />,
    request: customRequest,
    keepAliveActivateKey: 1,
    keepAliveUnactivateKey: 2,
  }}
>
  <App />
</ConfigProvider>
```

## 默认配置

```typescript
const DEFAULT_CONTEXT = {
  theme: 'light',
  userId: '',
  tableKeyPrefixCls: 'TableMax',
  locale: public_zhCN,
  dateFormat: 'YYYY-MM-DD HH:mm',
};
```

## 主题变量

### 主要颜色变量

```css
--global-primary-color              /* 全局主色 */
--global-curd-input-background-color /* 输入框背景色 */
--global-desc-text-disabled-color    /* 禁用文字颜色 */
--scrollThumb                       /* 滚动条颜色 */
--rowHoverBackgroundColor           /* 行hover背景色 */
```

### 表格颜色变量

```css
--tableColor1                      /* 表格字体颜色 */
--tableColor2                      /* 表格边框颜色 */
--tableColor3                      /* 表格边框颜色 */
--selectTableRow                    /* 选中行颜色 */
--tableTooltipBgc                  /* 表格tooltip背景色 */
```

### 布局颜色变量

```css
--globalColor0 ~ globalColor17    /* 布局颜色系列 */
--splite-line                       /* 分割线颜色 */
--global-tip-text-color            /* 提示文字颜色 */
```

## 使用 useConfig 获取配置

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
