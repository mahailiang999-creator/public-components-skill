# Permission

源码校准基准：

- `src/components/Permission/Provider/type.ts`
- `src/components/Permission/Restricted/type.ts`
- `src/components/Permission/Restricted/Restricted.tsx`
- `src/components/Permission/Context/type.ts`
- `src/components/Permission/Context/Context.tsx`

## 根包导入

```ts
import {
  PermissionProvider,
  Restricted,
  PermissionContext,
} from '@arim-aisdc/public-components';
```

不要再写内部路径导入。

## PermissionProvider

```tsx
<PermissionProvider permissions={['user:read', 'user:write']}>
  <App />
</PermissionProvider>
```

Props：

- `permissions: string[]`
- `children: JSX.Element`

## Restricted

```tsx
<Restricted requiredPermissions={['user:write']}>
  <Button>Edit</Button>
</Restricted>
```

当前源码 props：

- `requiredPermissions: string[]`
- `isPage?: boolean`
- `children: React.ReactNode`

源码行为：

- 有权限时渲染 `children`
- 无权限且 `isPage=false` 时返回 `null`
- 无权限且 `isPage=true` 时渲染 `NoPermissionPage`

注意：

- 当前版本 `Restricted` 没有 `fallback` prop
- 文档或旧代码如果出现 `fallback`，应视为过时写法

## PermissionContext

```tsx
import { useContext } from 'react';
import { PermissionContext } from '@arim-aisdc/public-components';

const { isAllowedTo } = useContext(PermissionContext);
const canEdit = isAllowedTo(['user:write']);
```

Context 结构：

- `isAllowedTo(permission: string[]): boolean`

## 工具函数

权限数组比较工具不在根包导出，正确路径是：

```ts
import { judgeHasPermission } from '@arim-aisdc/public-components/utils';
```

## 常见纠偏

错误：

```ts
import PermissionContext from '@arim-aisdc/public-components/esm/Permission/Context';
```

改为：

```ts
import { PermissionContext } from '@arim-aisdc/public-components';
```
