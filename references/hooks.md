# Hooks

本文档只记录当前版本从根包稳定可用的 hooks 和事件能力。

源码校准基准：

- `src/index.ts`
- `src/hooks/useEventBus.ts`
- `src/hooks/usePageCacheState.ts`
- `src/hooks/useCenterModalState.ts`
- `src/components/ConfigProvider/index.ts`

## 当前根包公开导出

```ts
import {
  useCenterModalState,
  useEventBus,
  events,
  usePageCacheState,
  useConfig,
} from '@arim-aisdc/public-components';
```

## 非根包公开导出

以下能力在库内部存在实现，但当前版本不应写成根包导入：

- `useTranslation`

如果只是做多语言配置，优先使用 `ConfigProvider` 的 `locale`。

## useEventBus

```ts
import { useEventBus, events } from '@arim-aisdc/public-components';

events.emit('data-changed', { id: 1 });

useEventBus('data-changed', data => {
  console.log(data);
});
```

要点：

- `useEventBus(event, cb)` 会在组件卸载时自动 `off`
- `events` 额外提供 `on`、`off`、`once`、`emit`、`invoke`
- `invoke` 返回 `Promise`

## usePageCacheState

```ts
import { usePageCacheState } from '@arim-aisdc/public-components';

const [state, setState, initState, clearState] = usePageCacheState(
  'page-key',
  {
    defaultValue: { pageNo: 1, keyword: '' },
    noCacheFields: ['keyword'],
  },
  [userId],
);
```

返回值：

- `state`
- `setState`
- `initState`
- `clearState`

源码行为：

- 基于 `localStorage`
- 使用固定 key `HBIS_PAGE_CACHE`
- 默认缓存有效期约 1 小时
- 对对象做合并恢复
- 数组直接覆盖，不做深合并

## useCenterModalState

```tsx
import { CenterModal, useCenterModalState } from '@arim-aisdc/public-components';

const [modalProps, setModalProps, closeModal] = useCenterModalState();

setModalProps({
  open: true,
  title: <span>Edit User</span>,
  width: 640,
});

<CenterModal {...modalProps} />;
```

要点：

- 当前状态字段是 `open`，不是 `visible`
- `closeModal()` 会把 `open` 置为 `false`
- 若未传 `handleCancel`，hook 会自动补成关闭逻辑

## useConfig

```ts
import { useConfig } from '@arim-aisdc/public-components';

const config = useConfig();
```

常用字段：

- `theme`
- `userId`
- `tableKeyPrefixCls`
- `locale`
- `dateFormat`
- `variablesJson`
- `tableMax`
- `renderEmpty`
- `request`

## 不建议写法

不要这样写：

```ts
import { useTranslation } from '@arim-aisdc/public-components';
```

也不要继续使用旧版 `visible` 语义去驱动 `useCenterModalState`。
