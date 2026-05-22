# UI 一致性

本文件是 `public-components-skill` 的强制 UI 规范。只要任务涉及页面开发、页面重构、列表页、详情页、表单页、弹窗页、区块式表格、按钮、分页、滚动条或任何样式问题，就必须读取并遵守本文件。

这套基线适用于数据密集型后台管理页面，目标是让基于 `@arim-aisdc/public-components` 生成的 UI 保持紧凑、专业、可交互，并能自然融入不同业务项目。颜色必须优先复用当前项目已有主题 token 或本文列出的语义化主题变量，不要在业务代码、示例代码或组件描述里写死具体色值。没有可用变量时，宁愿删除对应颜色覆盖，也不要临时创造裸色。

## 1. 执行优先级

1. 先复用当前项目已经存在的页面骨架、主题 token、组件封装和样式变量。
2. 如果现有项目没有明确先例，严格使用本文给出的后台管理 UI 布局、密度和交互基线。
3. 颜色只引用语义化变量；允许通过 `ConfigProvider variablesJson`、项目主题文件或 `data-theme` 机制注入变量值。
4. 如果用户要求、现有代码和本文冲突，必须说明冲突点，并只做最小必要偏离。
5. 不要把示例页面做成孤立 demo；生成结果应像现有系统自然长出来的一部分。

## 2. 颜色变量

变量使用原则：

- 优先引用语义化颜色变量，避免重复写死具体色值。
- Light 与 Dark 两套主题应保持同名变量，仅变量值不同。
- 变量可由当前项目主题、`ConfigProvider variablesJson`、Less 全局变量、CSS `:root[data-theme="light"]` / `:root[data-theme="dark"]` 或等效机制提供。
- 如果项目变量名与本文不同，但语义一致，优先使用项目已有变量名。
- 不要为了某个局部样式临时新增不可复用的颜色变量；确实缺失时先省略颜色覆盖或复用最近的语义变量。

Less 代码生成规则：

- 如果当前项目使用 `.less` / `.module.less`，输出样式时必须优先使用 Less 变量，例如 `@global-card-background-color`、`@global-default-text-color`、`@global-primary-text-color`。
- 不要在业务 `.less` 中直接写 `var(--global-card-background-color)`、`var(--global-default-text-color)` 这类 CSS 变量；这些通常只应出现在主题变量定义文件或项目已存在的特殊兼容场景中。
- 本文件中的 `--global-*` 表示语义 token 名称；在 Less 文件里应按项目约定转换为对应的 `@global-*` 写法，例如 `--global-card-background-color` 对应 `@global-card-background-color`。

推荐语义变量：

- 页面与容器：`--global-background-color`、`--global-card-background-color`、`--global-card-effect-background-color`、`--global-card-other-background-color`、`--global-hover-background-color`、`--global-row-hover-background-color`、`--row-hover-background-color`
- 交互主色：`--global-primary-color`、`--global-primary-text-color`、`--global-blue-selected-background-color`、`--global-focus-ring-color`
- 文本与图标：`--global-default-text-color`、`--global-desc-text-color`、`--global-nav-text-color`、`--global-white-text-color`、`--global-tip-text-color`、`--global-disabled-text-color`、`--global-primary-text-color`、`--global-icon-text-color`、`--global-danger-text-color`
- 边框与填充：`--global-default-border-line-color`、`--global-filled-background-color`、`--global-transparent-color`
- 业务状态：`--global-status-warning-color`、`--global-status-info-color`、`--global-status-processing-color`、`--global-status-danger-color`、`--global-status-offline-color`
- 表格扩展：`--global-table-header-divider-color`
- 业务卡片扩展：`--global-abnormalAlarm-card-color`

常见映射：

- 页面背景使用 `--global-background-color`。
- 卡片、面板、弹窗主体使用 `--global-card-background-color`。
- 次级面板、表头、滚动条滑块默认态使用 `--global-card-effect-background-color`。
- 偶数行、滚动条轨道、横竖滚动条交界块使用 `--global-card-other-background-color`。
- 主按钮背景使用 `--global-primary-color`，hover 和选中态使用 `--global-primary-text-color`。
- 常规文本使用 `--global-default-text-color`，说明和 placeholder 使用 `--global-desc-text-color`，禁用文本使用 `--global-disabled-text-color`。
- 常规边框使用 `--global-default-border-line-color`。
- 表格 hover 或明确选中行使用 `--row-hover-background-color`；如果项目只有 `--global-row-hover-background-color`，使用项目已有变量。
- 必填星号和危险数据使用 `--global-status-danger-color` 或 `--global-danger-text-color`，以项目已有语义为准。

## 3. 页面布局与标题

模块标题：

- 位于卡片左上角。
- 文本颜色使用 `--global-default-text-color`。
- 字号 `16px`。
- 字重 `500` 或 Medium。
- 标题右侧通常跟随右对齐工具栏。

操作栏：

- 位于表格右上角。
- 按钮组右对齐。
- 文字按钮之间间距 `8px`。
- `TableMax renderOperateRight` 中页面主操作按钮之间间距必须为 `8px`。
- 页面主操作按钮组与 `TableMax` 自带刷新、列设置等小图标按钮组之间间距必须为 `12px`，中间不使用分割线。
- 如果 `TableMax` 自带小图标外层已有 `8px` 左边距，页面主操作按钮组只补 `4px` 右边距，合计形成 `12px`，不要叠加成更大的间距。
- 文字按钮组与图标按钮组之间间距 `12px`，中间不使用分割线。
- 图标按钮组内部间距 `12px`。

内部间距：

- 标题加右侧按钮整体与下方表格间距 `8px`。
- 表格与下方分页器整体间距 `8px`。
- 卡片与上下卡片之间垂直间距 `12px`。

Tab 与按钮同时存在时：

- 操作栏必须单独起一行，放在 Tab 下方。
- Tab 与操作栏垂直间距 `8px`。

## 4. 页面骨架

标准列表页优先使用这种结构：

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

常见容器：

```less
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: @global-background-color;
}

.tableWrapper {
  flex: 1;
  padding: 0 12px 12px;
  overflow: hidden;
}
```

嵌入式表格区块：

```less
.block {
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: @global-card-background-color;
  border-radius: 6px;
}
```

## 5. 按钮

主要按钮：

- 一个页面最多两个主要按钮。
- 自动选取表格上方操作栏文字按钮组中最左侧第一个按钮作为主要按钮。
- 背景使用 `--global-primary-color`。
- 文本使用 `--global-white-text-color`，字重 Regular。
- 无边框。
- 圆角 `2px`。
- 内边距约 `6px 16px`。
- Hover 背景使用 `--global-primary-text-color`。
- Disabled 背景使用 `--global-disabled-background-color`，边框使用 `--global-default-border-line-color`，文字使用 `--global-disabled-text-color`，无交互反馈。
- Focus 使用 `--global-focus-ring-color`。
- 背景色过渡 `150ms` 缓动。

次要或幽灵按钮：

- 背景使用 `--global-transparent-color` 或不设置背景。
- 文本使用 `--global-default-text-color`，字重 Regular。
- 边框使用 `1px solid @global-default-border-line-color`。
- 圆角 `2px`。
- 内边距 `6px 16px`。
- Hover 背景不变，文字和边框使用 `--global-primary-text-color`。
- Disabled 文字和边框均使用 `--global-disabled-text-color`，无交互反馈。

图标按钮：

- 背景使用 `--global-transparent-color` 或不设置背景。
- 图标颜色使用 `--global-icon-text-color`。
- 图标大小 `16px`。
- Hover 图标颜色使用 `--global-primary-text-color`。
- 主要按钮、次要按钮与图标按钮之间间距 `12px`。

## 6. 徽章与状态标签

状态标签由状态灯加文本组成：

- 状态灯直径 `8px`。
- 状态灯 `border-radius: 50%`。
- 状态灯与文本间距 `6px`。
- 文本使用 `--global-default-text-color`。
- 字号 `14px`。

状态色映射：

- 待检修：使用 `--global-status-warning-color`。
- 周转包、使用包、新登记：使用 `--global-status-info-color`，除非项目已有更精确的业务状态变量。
- 待烘烤：使用 `--global-status-processing-color`。
- 已报废、在修包：使用 `--global-status-danger-color`。
- 停备包或已下线：使用 `--global-status-offline-color`。
- 若某个业务状态没有对应变量，不要写死新颜色；先复用最近的状态语义或省略状态灯颜色覆盖。

## 7. Tabs

页面级多页签：

- 位于顶部导航栏下方、主内容卡片上方。
- 未选中背景使用 `--global-background-color`。
- 已选中背景使用 `--global-card-background-color`，与下方主卡片视觉连通。
- 文本使用 `--global-default-text-color`，字号 `14px`。
- 可包含页面标题和右侧关闭按钮。
- Hover 关闭按钮时图标使用 `--global-primary-text-color` 或项目已有高亮变量。

模块标签页：

- 背景使用 `--global-transparent-color` 或不设置背景。
- 未选中文本使用 `--global-default-text-color`，字号 `16px`。
- 已选中文本使用 `--global-primary-text-color`，字号 `16px`，字重 Medium。
- 指示器为底部 `2px` 实线，颜色使用 `--global-primary-text-color`，实线宽度与文字同宽。
- Tabs 区域底部有 `1px solid @global-default-border-line-color` 贯穿细线。
- 标签整体与下方表格间距 `8px`。
- 最左侧 Tab 文字必须与下方表格左边界完全对齐，去除首个 Tab 的左侧 padding。
- Tab 文字必须在自己的 Tab item 内水平居中，尤其是单个 `历史记录` 这类模块标签页。
- 只居中 `.ant-tabs-tab` / `.ant-tabs-tab-btn` 内部文字，不要把整个 `.ant-tabs-nav-list` 或 Tab 导航条整体居中，除非用户明确要求整组 Tabs 居中。

## 8. 数据表格

表头：

- 背景使用 `--global-card-effect-background-color`。
- 高度 `32px`。
- 文本使用 `--global-default-text-color`，字重 Medium。
- 表头文字距左侧 `8px`。
- 必填星号使用 `--global-status-danger-color`，与文字间距 `2px`。
- 表头单元格之间使用 `1px` 垂直分割线，颜色使用 `--global-table-header-divider-color`。

表格行：

- 奇数行背景使用 `--global-card-background-color`，在 Less 中写作 `@global-card-background-color`；边框使用 `1px solid @global-card-effect-background-color`，高度 `32px`。
- 偶数行背景使用 `--global-card-other-background-color`，在 Less 中写作 `@global-card-other-background-color`；边框使用 `1px solid @global-card-effect-background-color`，高度 `32px`。
- 默认状态没有任何选中色，包括第一行。
- 只有 hover 或明确选中时，才显示 `--row-hover-background-color` 或项目已有同义变量。
- 文本使用 `--global-default-text-color`。
- 警示数据使用 `--global-danger-text-color`；没有该变量时使用 `--global-status-danger-color`。
- 表格内部文本通常左对齐，`padding-left: 8px`。

`TableMax` 组合基线：

- 设置稳定 `rowKey`。
- 在项目需要时提供唯一 `tableId`。
- 传入 `datas`、`loading`、`totalCount`、`skipCount`、`pageSize`。
- 实现 `changePagination`。
- 全高页面使用 `autoHeight={true}`。
- 页面自身负责刷新时使用 `refreshFun={getData}`。
- `renderOperateLeft` 放 `QueryFilter`。
- `renderOperateRight` 放页面主操作。
- `renderOperateRight` 中文字按钮组推荐用 `Space size={8}` 或等效 `gap: 8px`；按钮组与 `TableMax` 内置图标按钮的视觉间距固定为 `12px`。
- 序号列在前。
- 操作列在后，必要时固定到右侧。

```tsx
columnPinningConfig={{ left: [], right: ['operation'] }}
```

## 9. 表格滚动

表格滚动行为是高风险区域，必须严格处理：

- 表格内部向下滚动的有效区域必须限制在表头下方到横向滚动条上方之间。
- 表格内容向下滚动时，不得穿透或覆盖表头。
- 表头必须有足够 `z-index` 和不透明背景。
- 右侧竖向滚动条轨道必须从表头正下方开始，不得覆盖表头。
- 表头右侧、竖向滚动条上方必须有与竖向滚动条同宽的表头同色占位块，无文字，使表头视觉上横向贯穿。
- 横向和竖向滚动条交界处死角块使用 `--global-card-other-background-color`。

滚动条样式：

- 轨道宽度或高度 `12px`。
- 轨道背景使用 `--global-card-other-background-color`。
- 滑块宽度 `6px`。
- 滑块默认颜色使用 `--global-card-effect-background-color`。
- 滑块两端为胶囊形全圆角。
- 滑块距离轨道顶部或左侧边缘 `2px`。
- Hover 或拖动时滑块颜色使用 `--global-default-border-line-color`。

## 10. 分页器

分页器位于表格下方，整体与表格间距 `8px`。

左侧区域：

- 显示“当前条数/共xx条”，例如“6条/共100条”。
- 左对齐。

右侧区域从左到右依次排列，并整体右对齐：

1. 文本“每页”。
2. 下拉框，包含页大小数字，例如 `50`，右侧带 `16px` 下拉箭头，边框在 Less 中使用 `1px solid @global-default-border-line-color`。
3. 文本“条”。
4. 上一页按钮，`32px` 正方形，边框在 Less 中使用 `1px solid @global-default-border-line-color`，内部左箭头。
5. 页码数字，例如 `1`、`2`、`3`、`...`、`10`。
6. 下一页按钮，`32px` 正方形，边框在 Less 中使用 `1px solid @global-default-border-line-color`，内部右箭头。

分页状态：

- 未选中页码文本使用 `--global-default-text-color`。
- 当前页页码文本使用 `--global-primary-text-color`，边框在 Less 中使用 `1px solid @global-primary-text-color`，尺寸 `32px`。
- 上一页和下一页 disabled 时，边框颜色保持 `--global-default-border-line-color`，箭头颜色使用 `--global-disabled-text-color`。

分页交互：

- 每页条数下拉框、上一页、下一页、数字页码点击必须具备实际数据切换响应。
- 数字页码切换时，边框颜色必须从透明直接平滑过渡为 `--global-primary-text-color`。
- 绝不允许边框先闪成白色或灰色再变成高亮色。
- 如果缺少透明过渡专用变量，使用 `transparent` 到 `--global-primary-text-color` 的过渡，不要新增裸色中间态。

## 11. 输入与表单

输入控件：

- 背景无、透明或使用 `--global-transparent-color`。
- 标题使用 `--global-default-text-color`，字号 `14px`，字重 Medium。
- 文本使用 `--global-default-text-color`，字号 `14px`。
- 边框使用 `1px solid @global-default-border-line-color`。
- 圆角 `2px`。
- Focus 边框颜色使用 `--global-primary-text-color`。
- Placeholder 使用 `--global-desc-text-color`。

Label 与字段：

- Label 宽度由文本实际长度自动决定，不设固定死宽。
- Label 与紧随其后的输入框或选择框间距必须为 `0px`。
- 不同“Label + Input”表单项组之间横向距离 `12px`。

`QueryFilter`：

- 筛选区密度必须与页面整体一致。
- 即时筛选优先使用 `showButton={false}`。
- 只有明确需要“查询 / 重置”时才使用 `showButton={true}`。
- 页面需要保留筛选状态时补充 `initialValues`。
- 放在 `TableMax renderOperateLeft` 的搜索项，字段文字与输入框之间必须保留 `8px` 空隙；例如通过作用域样式给 `#QueryFilter .custom-form-item > span` 设置 `display: inline-block; margin-right: 8px;`。

`CustomForm`：

- 常用 `layout="vertical"`。
- 根容器 `span={24}`。
- 成对字段 `span: 12`。
- 长文本、上传、大块内容字段 `span: 24`。

## 12. 弹窗

`CenterModal` 新增宽度前，先选择附近页面已经使用过且最接近的宽度。

常见宽度：

- `450`：较窄审核或确认流程。
- `750`：常见编辑表单。
- `840`：详情或附件查看。
- `920`：更大的新建或详情流程。

弹窗内表单、按钮、状态、表格仍应遵守本文件的颜色变量、间距和交互规则。

## 13. 输出自查

完成 UI 任务前逐项确认：

- 是否读取了本文件？
- 是否复用了现有项目骨架或本文件标准骨架？
- 是否复用了项目已有主题 token 或本文列出的语义颜色变量？
- 如果输出 `.less` / `.module.less`，是否使用了 `@global-*` Less 变量，而不是直接写 `var(--global-*)`？
- 是否避免了在业务代码、示例代码或组件描述中写死具体色值？
- 缺少对应颜色变量时，是否删除了该颜色覆盖或复用了已有语义变量？
- 页面背景是否使用 `--global-background-color` 或项目同义 token？
- 面板背景是否使用 `--global-card-background-color` 或项目同义 token？
- 主按钮、hover、文本、边框、禁用态是否全部使用语义变量？
- 页面是否最多只有两个主要按钮？
- 标题、操作栏、表格、分页之间的间距是否为 `8px` 或 `12px` 节奏？
- 表格表头、行高、斑马纹、hover 和滚动条是否符合规范？
- 表格内容滚动是否不会穿透表头？
- 分页器是否具备真实交互，且页码边框不会先闪白或灰？
- 普通表单 Label 与字段之间是否为 `0px` 间距，而 `TableMax renderOperateLeft` 中的 `QueryFilter` 搜索文字与输入框之间是否保留 `8px` 空隙？
- 是否避免了随意裸色、随意圆角、随意阴影、营销式卡片和孤立 demo 样式？

任何一项不满足时，先按本文件修正，再输出最终代码。
