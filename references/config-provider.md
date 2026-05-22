# ConfigProvider

源码校准基准：

- `src/components/ConfigProvider/index.ts`
- `src/components/ConfigProvider/context.ts`
- `src/components/ConfigProvider/ConfigProvider.tsx`

## 根包导入

```ts
import { ConfigProvider, useConfig, public_zhCN } from '@arim-aisdc/public-components';
```

## 基础用法

```tsx
<ConfigProvider
  config={{
    theme: 'light',
    userId: 'u-001',
    locale: public_zhCN,
    dateFormat: 'YYYY-MM-DD HH:mm',
  }}
>
  <App />
</ConfigProvider>
```

## 当前源码可用配置

基础字段：

- `theme?: string`
- `userId?: string`
- `tableKeyPrefixCls?: string`
- `locale?: Locale`
- `dateFormat?: string`

主题与样式：

- `variablesJson?: Record<string, string>`
- `autoSetCssVars?: boolean`
- `root?: string`
- `getRootContainer?: () => HTMLElement`
- `themePackageName?: 'DefaultThemePackage' | 'DyImsBlueThemePackage'`

表格全局配置：

- `tableMax?.canExport`
- `tableMax?.pageSizeOptions`
- `tableMax?.cacheMaxAge`
- `tableMax?.openMemo`
- `tableMax?.canSelectionUseShift`
- `tableMax?.openNullValueFilter`
- `tableMax?.openIndexColumn`
- `tableMax?.useTextFilter`
- `tableMaxNewPagination?: boolean`

其他：

- `renderEmpty?: (theme?) => React.ReactNode`
- `request?: (...params) => Promise<Blob>`
- `keepAliveActivateKey?: number`
- `keepAliveUnactivateKey?: number`

## 默认值

当前 `DEFAULT_CONTEXT`：

```ts
{
  theme: 'light',
  userId: '',
  tableKeyPrefixCls: 'TableMax',
  locale: public_zhCN,
  dateFormat: 'YYYY-MM-DD HH:mm',
}
```

## useConfig

```ts
const config = useConfig();
```

适合读取：

- 当前主题
- 当前 locale
- 表格缓存前缀
- 全局 tableMax 配置

## 重要说明

- `ConfigProvider` 内部已集成 `react-dnd` 的 `DndProvider`
- 主题 CSS 变量通过 `setCssVars` 自动注入到 `root` 节点
- `renderEmpty` 的参数类型在源码里依赖内部 `ThemeProvider` 类型，但实际消费时可以把它理解为当前主题值

## 示例

```tsx
<ConfigProvider
  config={{
    theme: 'dark',
    userId: currentUserId,
    tableKeyPrefixCls: 'my-app',
    locale: public_zhCN,
    variablesJson: {
      '--global-primary-color': primaryColorFromProjectTheme,
    },
    tableMax: {
      pageSizeOptions: [10, 20, 50, 100],
      openMemo: true,
      canSelectionUseShift: true,
    },
  }}
>
  <App />
</ConfigProvider>
```

`variablesJson` 中的值应来自当前项目主题、设计 token 或主题包配置。不要为了套用能源管理 UI 规范而在业务示例里写死具体颜色。
