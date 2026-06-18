# Troubleshooting

本文档只保留当前源码下仍然成立的排查路径。

## 1. TableMax 报 `tableId is required`

原因：

- 没有传 `tableId`

修复：

```tsx
<TableMax tableId="unique-table-id" />
```

## 2. 表格缓存串了

优先检查：

1. `tableId` 是否唯一
2. `ConfigProvider` 是否设置了 `userId`
3. 是否需要调整 `tableKeyPrefixCls`
4. 是否需要升级 `version`

## 3. 后端排序或筛选没生效

优先检查：

- `manualSorting` / `manualFiltering` 是否开启
- 是否监听了 `onSortingChange` / `onFilteringChange`
- 后端接口是否按组件返回参数格式消费

推荐日志：

```ts
onSortingChange={(sortValueArr, sortValueStr) => console.log(sortValueStr)}
onFilteringChange={({ formatFiltersV2 }) => console.log(formatFiltersV2)}
```

## 4. 虚拟滚动看起来没效果

优先检查：

- 是否开启 `enableVirtualList`
- 是否提供合理的 `rowHeight`
- 外层容器是否有稳定高度
- 数据量是否足够大

## 5. 权限控制不生效

优先检查：

1. 是否包裹了 `PermissionProvider`
2. `Restricted` 用的是不是 `requiredPermissions`
3. 权限字符串是否和后端返回一致

调试写法：

```tsx
const { isAllowedTo } = useContext(PermissionContext);
console.log(isAllowedTo(['user:write']));
```

## 6. 多语言配置不生效

优先检查：

- 是否在 `ConfigProvider` 中设置了 `locale`
- 是否错误地把 `useTranslation` 当成根包公开 hook 使用

推荐写法：

```tsx
<ConfigProvider config={{ locale: public_zhCN }}>
  <App />
</ConfigProvider>
```

## 7. CenterModal 状态不对

优先检查：

- 是否使用 `open` 字段
- 是否通过 `useCenterModalState` 返回的 `closeModal` 关闭

不要继续写旧的 `visible` 示例。

## 8. 工具函数导入报错

如果是 `to` / `judgeHasPermission` / `getTextWidth`，正确路径是：

```ts
import { to, judgeHasPermission, getTextWidth } from '@arim-aisdc/public-components/utils';
```

不是根包导出。

## 9. 看到旧文档里的 ThemeProvider

当前应先判断目标是否只是做主题配置。

如果只是业务接入，优先改成：

```tsx
<ConfigProvider
  config={{
    theme: 'dark',
    variablesJson: {
      '--global-primary-color': primaryColorFromProjectTheme,
    },
  }}
>
  <App />
</ConfigProvider>
```

如果只是排查主题变量是否生效，示例值应来自项目已有主题 token 或临时调试变量；不要把固定色值沉淀进业务代码。

## 10. TableMax 导出配置类型报错

现象：

- 给 `exportConfig` 只传 `fileName`、`sheetName` 或 `getExportDataList` 时，TypeScript 提示缺少 `pageFetcher`

原因：

- 当前 `TableMaxProps.exportConfig` 引用的 `ExportOptions` 类型中，`pageFetcher` 是必填字段；运行时逻辑有 `pageFetcher/getExportDataList/datas` 多数据源兜底，但类型声明更严格。

处理：

- 只需要当前 `datas` 导出时，可以只传 `canExport`，不要传 `exportConfig`。
- 只需要调整导出文件名时，优先设置 `tableTitle`，当前导出逻辑会把它作为默认文件名。
- 需要全量分页导出时，补齐 `pageFetcher.apiFn`、`extractItems` 等字段。
- 不要默认建议内部路径导入 `ExportOptions` 绕类型；优先按公开 `TableMax` prop 形状配置。

## 11. ConditionExpression 远程参数选项没有前端筛选

现象：

- 传入 `parameterOptionsRequest` 后，`canFrontFilter` 或 `frontendFilterOptionFun` 看起来不生效

原因：

- 当前实现把远程参数选项视为远程搜索场景，会设置 Select `filterOption={false}`，输入搜索通过 `parameterOptionsRequest` 发请求。

处理：

- 把过滤逻辑放到 `parameterOptionsRequest({ keyword })` 对应的后端或远程数据源里。
- 不需要远程搜索时，移除 `parameterOptionsRequest`，只使用静态 `parameterOptions` / `setting` 与前端筛选。

## 12. CustomForm maxTagPlaceholder 类型报错

现象：

- `CustomForm` 的 Select 配置写了 `maxTagPlaceholder`，但 `CustomSearchFieldType[]` 类型提示字段不存在

原因：

- 当前运行时代码会读取 `item.maxTagPlaceholder`，但公开类型 `CustomSearchFieldType` 还没有声明该字段。

处理：

- 默认依赖组件内置 Tooltip 折叠标签展示。
- 必须自定义时，在业务侧扩展字段类型，或等待组件库补齐类型声明。
- 不要在强类型示例里直接把 `maxTagPlaceholder` 写进 `CustomSearchFieldType` 对象。

## 13. 排查顺序建议

出现组件库问题时，按这个顺序判断：

1. 是否是根包公开导出
2. 属性名是否与当前源码一致
3. 是否误用了旧文档示例
4. 是否需要从对应 `type.ts` 再确认
