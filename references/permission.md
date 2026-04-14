# 权限控制

组件库提供细粒度的权限控制能力，包括 Provider、受限组件和 Context。

## PermissionProvider

权限提供者，用于管理全局权限状态。

```typescript
import { PermissionProvider } from '@arim-aisdc/public-components';

<PermissionProvider permissions={['user:read', 'user:write', 'admin']}>
  <App />
</PermissionProvider>
```

### Props

| 属性 | 类型 | 必需 | 说明 |
|------|------|------|------|
| permissions | string[] | 是 | 权限列表 |
| children | JSX.Element | 是 | 子组件 |

## Restricted

权限限制组件，根据权限条件渲染子组件。

```typescript
import { Restricted } from '@arim-aisdc/public-components';

<Restricted
  requiredPermissions={['user:write']}
  isPage={false}
  fallback={<NoPermission />}
>
  <Button>编辑用户</Button>
</Restricted>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| requiredPermissions | string[] | [] | 需要的权限列表 |
| isPage | boolean | false | 是否是页面级别权限控制 |
| children | ReactNode | - | 子组件 |

### Fallback

当用户没有权限时：
- `isPage=false`: 返回 `null`（不渲染任何内容）
- `isPage=true`: 渲染 `<NoPermissionPage />` 组件

## PermissionContext

直接访问权限状态的 Context。

```typescript
import { useContext } from 'react';
import PermissionContext from '@arim-aisdc/public-components/esm/Permission/Context';

const { isAllowedTo } = useContext(PermissionContext);

// 检查权限
const canEdit = isAllowedTo(['user:write']);
```

### Context 值

| 属性 | 类型 | 说明 |
|------|------|------|
| isAllowedTo | function | 检查权限函数 `(permission: Permission[]) => boolean` |

## 使用示例

### 检查单个权限

```typescript
const canEdit = isAllowedTo(['user:write']);
if (canEdit) {
  // 有权限时的操作
}
```

### 检查多个权限（AND）

```typescript
const canViewAndEdit = isAllowedTo(['user:read', 'user:write']);
if (canViewAndEdit) {
  // 有所有权限时的操作
}
```

### 使用 Restricted 组件

```typescript
// 按钮级别权限控制
<Restricted requiredPermissions={['admin']}>
  <Button type="danger">删除用户</Button>
</Restricted>

<Restricted requiredPermissions={['user:read']}>
  <Button type="primary">查看用户</Button>
</Restricted>

// 页面级别权限控制
<Restricted requiredPermissions={['admin']} isPage={true}>
  <AdminPage />
</Restricted>
```

### 提供无权限反馈

```typescript
<Restricted
  requiredPermissions={['user:write']}
  fallback={<Alert message="您没有编辑权限" type="warning" />}
>
  <Form>
    <Form.Item label="用户名">
      <Input />
    </Form.Item>
  </Form>
</Restricted>
```

## 权限模式

### 常见权限字符串

```typescript
'user:read'      // 用户读取权限
'user:write'     // 用户写入权限
'user:delete'    // 用户删除权限
'admin:system'   // 系统管理权限
'data:export'    // 数据导出权限
'report:view'    // 报表查看权限
```

### 与后端集成

```typescript
import { PermissionProvider } from '@arim-aisdc/public-components';

const userPermissions = await fetchUserPermissions();

<PermissionProvider permissions={userPermissions}>
  <App />
</PermissionProvider>
```

## judgeHasPermission 工具函数

用于权限数组比较的工具函数。

```typescript
import { judgeHasPermission } from '@arim-aisdc/public-components';

const hasPermission = judgeHasPermission(
  ['user:read', 'user:write'],  // 需要的权限
  ['user:read', 'user:write', 'admin']  // 用户拥有的权限
);
// 返回 true（用户拥有所有需要的权限）
```

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| requiredPermissions | Permission[] | 需要的权限列表 |
| permissions | Permission[] | 用户拥有的权限列表 |

### 返回值

- `boolean` - 用户是否拥有所有需要的权限
