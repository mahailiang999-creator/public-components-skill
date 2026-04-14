---
name: public-components-skill
description: 专为前端开发设计的 AI 技能，帮助理解和使用 @arim-aisdc/public-components 组件库。当用户需要使用 TableMax 高级表格、CustomForm 自定义表单、SchemaForm 表单、ConfigProvider 全局配置、PermissionProvider 权限控制、ThemeProvider 主题系统、QueryFilter 筛选器、各种 Filter 组件、国际化支持、或任何组件库相关功能时使用此技能。支持 React、TypeScript、Ant Design 技术栈。
---

# Public Components Skill

使用此技能来开发和构建使用 @arim-aisdc/public-components 组件库的前端应用。

## 快速开始

### 安装组件库

```bash
npm install @arim-aisdc/public-components
```

### 基础配置

在应用入口使用 ConfigProvider 配置全局设置：

```typescript
import { ConfigProvider, public_zhCN } from '@arim-aisdc/public-components';

<ConfigProvider
  config={{
    theme: 'light',
    userId: 'user123',
    locale: public_zhCN,
    dateFormat: 'YYYY-MM-DD HH:mm',
  }}
>
  <App />
</ConfigProvider>
```

## 核心组件

### TableMax 高级表格

基于 TanStack React Table 的强大表格组件，支持分页、排序、筛选、行选择、行编辑、行拖拽、虚拟滚动等功能。

```typescript
<TableMax
  tableId="user-table"
  columns={columns}
  datas={data}
  totalCount={total}
  pageSize={20}
  skipCount={0}
  canSelection={true}
  canFilter={true}
  changePagination={handlePagination}
  onSortingChange={handleSort}
  onFilteringChange={handleFilter}
/>
```

完整 API 和详细用法见 [references/table-max.md](references/table-max.md)

### ConfigProvider 全局配置

提供全局配置能力，包括主题、国际化、表格缓存等。

完整配置选项见 [references/config-provider.md](references/config-provider.md)

### PermissionProvider 权限控制

提供细粒度的权限控制能力。

```typescript
<PermissionProvider permissions={['user:read', 'user:write']}>
  <App />
</PermissionProvider>

<Restricted permissions={['user:write']}>
  <Button>编辑</Button>
</Restricted>
```

详细用法见 [references/permission.md](references/permission.md)

### Filter 组件系列

提供各种筛选组件，包括 FilterSelect、FilterInputNumber、FilterSlider、FilterSwitch、FilterColor、FilterRadio、ConditionExpression。

详细用法见 [references/filter-components.md](references/filter-components.md)

## Hooks

### useTranslation

国际化翻译 Hook，支持嵌套键查找、占位符替换和数组翻译辅助函数（tT、tQ、tF、tB）。

### useEventBus

全局事件总线 Hook，用于跨组件通信。

### usePageCacheState

自动缓存页面状态到 localStorage，刷新页面后自动恢复。

### useCenterModalState

简化 CenterModal 状态管理的 Hook。

### useConfig

获取 ConfigProvider 提供的全局配置。

详细用法见 [references/hooks.md](references/hooks.md)

## 其他核心组件

- **ThemeProvider** - 主题系统
- **SchemaForm** - Schema 驱动表单
- **CustomForm** - 自定义表单
- **QueryFilter** - 查询筛选器
- **Empty** - 空状态组件
- **CenterModal** - 居中弹窗
- **DrawerCom** - 抽屉组件
- **SplitPane** - 分割面板
- **DraggableBox** - 可拖拽盒子
- **Icon** - 图标组件
- **CacheTabs** - 缓存标签页
- **BaseInfo** - 基础信息展示

详细用法见 [references/other-components.md](references/other-components.md)

## 最佳实践

- 使用 useMemo 缓存列配置
- 使用 useCallback 缓存事件处理函数
- 大数据量时开启虚拟列表
- 每个表格必须设置唯一的 tableId
- 通过 ConfigProvider 设置用户 ID 实现缓存隔离
- 使用 judgeHasPermission 工具函数进行权限判断
- 使用 to() 工具函数进行 Promise 错误处理

详细最佳实践见 [references/best-practices.md](references/best-practices.md)

## 故障排查

遇到问题？查看常见问题解决方案：
- 表格缓存问题
- 主题不生效
- 权限不生效
- 国际化不生效
- 性能问题

详细故障排查指南见 [references/troubleshooting.md](references/troubleshooting.md)

## 工具函数

```typescript
import { getTextWidth, to, judgeHasPermission } from '@arim-aisdc/public-components';

// 计算文本宽度
const width = getTextWidth('Hello World', 14);

// Promise 错误处理
const [error, data] = await to(fetchUserData());

// 权限数组比较
const hasPermission = judgeHasPermission(['user:write'], userPermissions);
```

## 技术栈

- React: >=17.0.1
- Ant Design: ^5.27.3
- @tanstack/react-table: ^8.9.1
- TypeScript: 支持

## 组件库版本

@arim-aisdc/public-components v2.3.77
