# References 与源码实现差异清单

本文档用于记录当前 `references/` 文档与 `C:\Work_Files\public-components` 源码之间的一致性状态。

原则：

1. 能与源码保持一致的，已经全部按源码修正。
2. 仍保留下来的差异，都是“源码本身存在实现/导出/设计不一致”，不是 references 再次写错。

## 已完成对齐的部分

以下内容已按当前源码修正完成：

- 根包公开导出清单已统一以 `src/index.ts` 为准
- `hooks.md` 不再把 `useTranslation` 写成根包公开 hook
- `permission.md` 不再使用内部 `esm` 路径作为正确示例
- `permission.md` 已移除 `Restricted.fallback` 的错误文档说法
- `hooks.md` 已改为使用 `useCenterModalState` 的 `open` 语义，而不是旧的 `visible`
- `config-provider.md` 已改为当前 `ConfigConsumerProps` 结构
- `table-max.md` 已改为当前 `TableMaxProps` / `TableMaxColumnType` 和推荐新回调
- `filter-components.md` 已改为当前 Filter 系列的实际 props，而不是伪装成通用 antd 风格 API
- `other-components.md` 已改为当前 `CustomForm` / `QueryFilter` / `SchemaForm` / `CacheTabs` / `Icon` / `DraggableBox` 等公开能力
- `best-practices.md` 与 `troubleshooting.md` 已统一成当前导出边界

## 仍然存在的源码级差异

以下问题已经在 references 中尽量按实际情况备注，但它们本身来自组件库源码，而不是 references 的错误。

### 1. Empty 组件声明了 `text`，但当前实现没有使用

源码位置：

- `src/components/Empty/index.tsx`

现状：

- props 中声明了 `text?: string`
- 实际渲染时始终使用内部 `t('global.text.emptyText')`
- 无论是否传 `text`，当前实现都不会把它显示出来

处理结果：

- references 已保留该 prop
- 同时明确标注“声明存在，但当前实现未生效”

如果要彻底一致，建议改源码实现。

### 2. Empty 组件内部依赖未公开导出的能力

源码位置：

- `src/components/Empty/index.tsx`

现状：

- 内部使用 `../../hooks/useTranslation`
- 内部引用 `../ThemeProvider/type`

但当前根包并未公开导出：

- `useTranslation`
- `ThemeProvider`

处理结果：

- references 已明确说明这些不是根包公共 API
- 这里只能视为库内部实现依赖

### 3. ConfigProvider 的类型层仍依赖内部路径

源码位置：

- `src/components/ConfigProvider/context.ts`

现状：

- `renderEmpty` 的参数类型引用了 `@arim-aisdc/public-components/dist/components/ThemeProvider`

这意味着：

- 类型层与实际公开导出边界并不完全一致
- 业务使用时虽然不一定立刻报错，但设计上是“对内路径泄漏”

处理结果：

- references 已按“可消费语义”描述，不再鼓励依赖内部 ThemeProvider

### 4. ConfigProvider / context 存在包内自引用写法

源码位置：

- `src/components/ConfigProvider/ConfigProvider.tsx`
- `src/components/ConfigProvider/context.ts`

现状：

- 源码内部直接从 `@arim-aisdc/public-components` 或 `dist` 路径引用自身内容

这类写法会让：

- 维护边界变模糊
- 文档编写必须始终区分“内部依赖”和“对外 API”

处理结果：

- references 已统一把外部使用方式收敛到根包公开导出

### 5. Restricted 的能力边界比旧文档更窄

源码位置：

- `src/components/Permission/Restricted/type.ts`
- `src/components/Permission/Restricted/Restricted.tsx`

现状：

- 当前只支持 `requiredPermissions`、`isPage`、`children`
- 没有 `fallback`

处理结果：

- references 已完全按当前源码收敛

如果业务希望继续支持 `fallback`，需要改源码，不是改文档。

### 6. Filter 系列组件是旧式封装，不是通用受控组件 API

源码位置：

- `src/components/Filter/*`

现状：

- 多数组件通过 `filterReturnEvt({ name, value })` 回传
- props 命名偏旧，如 `dataList`、`defaultValue`、`marginSpace`
- 与 antd 原生 `value/onChange/options` 风格并不完全一致

处理结果：

- references 已按真实 props 记录
- 不再把它们包装成更现代但不真实的 API

### 7. SchemaForm 的对外配置名与内部实际渲染名不同

源码位置：

- `src/components/SchemaForm/type.ts`
- `src/components/SchemaForm/SchemaForm.tsx`

现状：

- 对外 props 名是 `formConfig`
- 内部传给 `BetaSchemaForm` 时会转换为 `columns`

处理结果：

- references 已按“对外使用 `formConfig`”记录
- 不再使用旧文档里错误的 `columns` 作为用户层 API

### 8. CacheTabs 是强业务耦合组件，不是通用 Tabs 封装

源码位置：

- `src/components/CacheTabs/CacheTabs.tsx`

现状：

- 强依赖 `useAliveController`
- 强依赖 `pathname`、`history`、`shouldCache`

处理结果：

- references 已改成“keep-alive 缓存标签页组件”的准确描述
- 不再伪装成普通 Tabs 组件文档

## 当前建议

如果你的目标是“Skill 与当前 public-components 源码长期保持一致”，建议后续维护顺序固定为：

1. 先检查 `src/index.ts`
2. 再检查各组件 `type.ts`
3. 再看实现文件里是否存在“声明有、实现没用”或“内部依赖未公开导出”
4. 最后才更新 `references/`

## 更进一步可做的事

如果你愿意，我下一步可以继续帮你做两件事中的任意一件：

1. 输出一份“建议修改 public-components 源码本身的问题清单”
2. 直接在 skill 仓库里加入一个维护脚本/维护规范，让以后升级组件库时更容易重新校对
