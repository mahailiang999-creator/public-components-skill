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
      '--global-primary-color': '#1677ff',
    },
  }}
>
  <App />
</ConfigProvider>
```

## 10. 排查顺序建议

出现组件库问题时，按这个顺序判断：

1. 是否是根包公开导出
2. 属性名是否与当前源码一致
3. 是否误用了旧文档示例
4. 是否需要从对应 `type.ts` 再确认
