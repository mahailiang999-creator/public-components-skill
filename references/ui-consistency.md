# UI 一致性

这份参考文档定义了 `public-components-skill` 内置的 UI 一致性基线。只要任务涉及页面开发、页面重构、列表页、详情页、弹窗页、表单页、区块式表格，或用户明确要求“保持项目原有风格”“贴近现有页面”“不要另起一套样式”，就应默认遵守本文件。

目标不是强制所有项目长成同一个样子，而是让基于 `@arim-aisdc/public-components` 构建的页面优先贴近“当前项目已经存在的页面语言”。

## 1. 页面骨架

### 标准列表页

当项目里已经存在统一的顶层列表页骨架时，优先参考这种模式：

```tsx
<div className={styles.wrapper}>
  <PageHeader title="页面标题" />
  <div className={styles.tableWrapper}>
    <TableMax
      renderOperateLeft={<QueryFilter {...filterProps} />}
      renderOperateRight={<Button type="primary">主操作</Button>}
      autoHeight
      refreshFun={getData}
      {...tableProps}
    />
  </div>
  <CenterModal {...modalProps} />
</div>
```

常见容器特征：

```less
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--surface-color);
}

.tableWrapper {
  flex: 1;
  padding: 0 12px 12px;
  overflow: hidden;
}
```

如果项目已经有共享标题组件，就直接复用；如果没有，就模仿现有页面标题处理方式，而不是新造一套。

### 嵌入式表格区块

用于大页面中的局部表格区块时，可优先参考这种模式：

```less
.block {
  background: var(--surface-color);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
```

常见局部区块标题：

```less
.title {
  color: var(--text-primary);
  font-size: 18px;
  font-weight: 500;
}
```

## 2. 标题层级

### 页面标题

顶层页面标题应与项目既有页面标题模式保持一致。一个常见基线是：

```less
.pageTitle {
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: var(--text-primary);
}
```

### 区块标题

如果项目中没有更强的本地先例，一个实用的区块标题基线是：

- `18px`
- `500`
- 使用主题主文字色

### 密集内容行高

当表格单元格里的多行内容需要显式行高时，可优先使用像 `20px` 这样的稳定行高，除非附近页面已经采用了其他节奏。

## 3. 间距节奏

优先沿用附近页面已有的间距节奏。如果没有明显先例，可以参考以下紧凑基线：

- 外层内容内边距：`12px`
- 表格容器内边距：`0 12px 12px`
- 区块间距：`12px`
- 标题或元信息碎片间距：`12px`
- 次级偏移：`16px`

除非当前项目本来就有明确使用，否则不要混用 `10px`、`14px`、`18px`、`22px` 这类随意数值。

## 4. 主题 Token

优先使用项目现有主题系统来表达：

- 页面或卡片背景色
- 抬升层或次级背景色
- 边框色
- 主文字色
- 次文字色
- 禁用文字色
- 强调色或主操作色

规则：

- 优先使用 token
- 当组件默认样式已经符合项目风格时，可直接沿用默认值
- 只有在和周边未改动旧代码保持一致更重要时，才保留历史硬编码值

## 5. 操作样式

行内操作通常更适合保持为轻量文字操作或小型控件：

```less
.operationBtn {
  cursor: pointer;
  color: var(--action-color);
}
```

组合规则：

- 多个行内操作使用 `Space`
- 操作文案尽量简短
- 页面级主业务操作放在 `renderOperateRight`
- 除非周边页面本来就这样做，否则不要堆叠多个相互竞争的主按钮

## 6. `TableMax` 组合方式

常见基线：

- 设置稳定的 `rowKey`
- 在项目需要时提供唯一的 `tableId`
- 按项目表格类型模式定义 `columns`
- 传入 `datas`、`loading`、`totalCount`、`skipCount`、`pageSize`
- 实现 `changePagination`
- 全高页面使用 `autoHeight={true}`
- 页面自身负责刷新时使用 `refreshFun={getData}`

头部区域：

- `renderOperateLeft`：`QueryFilter`
- `renderOperateRight`：页面主操作

列顺序规则：

- 序号列在前
- 操作列在后
- 时间和日期列保持统一格式
- 当表格较宽且附近页面已有先例时，将操作列固定到右侧

示例：

```tsx
columnPinningConfig={{ left: [], right: ['operation'] }}
```

## 7. `QueryFilter` 密度

筛选区应尽量与所在页面的整体密度一致。只有项目里本来就有这种紧凑处理时，才增加额外覆盖样式。

行为规则：

- 即时筛选优先使用 `showButton={false}`
- 只有页面交互明确需要“查询 / 重置”时，才使用 `showButton={true}`
- 页面需要保留筛选状态时，补充 `initialValues`

## 8. 弹窗与表单

### `CenterModal`

在新增一个宽度之前，先选择附近页面已经使用过且最接近的宽度。一个实用基线范围是：

- `450`：较窄的审核或确认流程
- `750`：常见编辑表单
- `840`：详情或附件查看
- `920`：更大的新建或详情流程

### `CustomForm`

常见默认约定：

- `layout="vertical"`
- 根容器 `span={24}`
- 成对字段 `span: 12`
- 长文本、上传、大块内容字段 `span: 24`

## 9. 输出要求

当本基线生效时，生成的代码应满足：

- 看起来像当前项目中的自然组成部分，而不是孤立 demo
- 没有明确先例时，不引入新的 spacing 尺度
- 项目已有 token 时，不额外引入新的裸色主题色
- 不从零重造已经成熟的列表页结构

如果产品要求与当前项目的 UI 基线冲突，应明确指出冲突点，并只做最小必要偏离。

## 10. 自查清单

完成前请确认：

- 页面是否复用了现有项目骨架？
- 颜色是否来自主题 token 或组件默认样式？
- 间距是否沿用了已有节奏？
- 标题层级是否与附近页面一致？
- `QueryFilter` 和主操作位置是否一致？
- 如果使用 `TableMax`，序号列和操作列的位置是否符合既有习惯？
- 是否避免了不受支持的自定义工具栏、随意的表格高亮和写死主题色？

如果任何一项是否定的，优先复用最接近的现有项目模式，再考虑新增样式。
