# UI 色板颜色变量参考

本文件由 `对应关系（色板-颜色变量）.xlsx` 转换而来，用作最低优先级的颜色变量兜底参考。

使用优先级：项目已有写法 > 组件内置能力/props > 当前项目 token/Less 变量 > `references/ui-consistency.md` 语义变量 > 本文件 > 不写颜色覆盖。

注意：

- 仅当项目中找不到现成写法、组件内置能力不能满足、且 `ui-consistency.md` 没有合适语义变量时，才查本文件。
- `对应颜色变量` 列按原表保留，包含历史拼写、多个变量同格、废弃说明或业务专用变量时不要自行改名。
- 写 `.less` / `.module.less` 时优先使用项目已有 Less 变量；不要因为本文件出现色值就把裸色写进业务样式。
- `暗色`、`亮色` 是色板值，不是要求业务代码直接写入的色值。

## 通用

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色 | #030621 | #EAEAEA | @global-background-color |  |
|  | 表格第二种底色 | #010C31 | #FFFFFF | @global-card-other-background-color |  |
|  | hover背景底色 | #010C31 95% | #FFFFFF 95% | @global-hover-background-color | 暂未使用 |
|  | 卡片底色 | #0C1B3B | #F7F7F8 | @global-card-background-color |  |
|  | 右键菜单底色 | #0F2347 95% | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 禁用填充色 | #0F2347 | #F2F2F2 | @global-disabled-background-color | 暂未使用 |
|  | 卡片上主要辅助色 | #1E345B | #E8E8E8 | @global-card-effect-background-color |  |
|  | 信息hover色 | #1E345B 95% | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 线条颜色 | #243D65 | #D9D9D9 | @global-default-border-line-color |  |
|  | 线条颜色2 | #798293 | #A2A2A2 | @global-default-border-line-color2 | 新增颜色，用途：图表hover下指示线条 |
|  | 全局提醒底色 | #FFFFF 95% | #23467A 95% | @global-message-tip-backgroud-color | 暗色模式下全局提醒为95%白 |
|  | 铸轧甘特图CC灰色背景 | #2C3A58 | #F9F0EC | @global-roll-gant-cc-background-color | 新增颜色，用途：铸轧甘特图CC灰色部分 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color |  |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color |  |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color |  |
|  | 100%白色 | #FFFFFF | #FFFFFF |  |  |
| 彩色 | 橙色填充 | #D46E3F | F57632 | @global-primary-color |  |
|  | 橙色字体 | #F99057 | F99057 | @global-primary-text-color |  |
|  | 橙色-深 | #C45D2E | C75F30 |  |  |
|  | 橙色40% | #D46E3F 40% | F57632 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 橙色20% | #D46E3F 20% | F57632 20% |  |  |
|  | 橙色10% | #D46E3F 10% | F57632 10% |  |  |
|  | 绿色填充 | #00867A | 239790 |  |  |
|  | 绿色字体 | #33D1C9 | 1FC1B3 |  |  |
|  | 绿色-深 | #046B62 | 03756B |  |  |
|  | 绿色40% | #00867A 40% | 239790 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 绿色20% | #00867A 20% | 239790 20% |  |  |
|  | 绿色10% | #00867A 10% | 239790 10% |  |  |
|  | 蓝色填充 | #206CCF | 1D6FE8 |  |  |
|  | 蓝色字体 | #57A9FB | 4287EC |  |  |
|  | 蓝色-深 | #1151A5 | 1158B5 |  |  |
|  | 蓝色40% | #206CCF 40% | 1D6FE8 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色20% | #206CCF 20% | 1D6FE8 20% |  |  |
|  | 蓝色10% | #206CCF 10% | 1D6FE8 10% |  |  |
|  | 黄色填充 | #D88C00 | EBA63E |  |  |
|  | 黄色字体 | #E59500 | FEB445 |  |  |
|  | 黄色40% | #D88C00 40% | EBA63E 40% |  |  |
|  | 红色填充 | #CC433A | FF5449 |  |  |
|  | 红色字体 | #FF5449 | F95F55 | @global-red-text-color | 新增颜色，用途：表格 \| 标题 红色字体 |
|  | 红色40% | #CC433A 40% | FF5449 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 红色20% | #CC433A 20% | FF5449 20% |  |  |
|  | 红色10% | #CC433A 10% | FF5449 10% |  |  |
|  | 玫红 | #AA4FA6 | BC50B2 |  |  |
|  | 玫红-深 | #974194 | AD46A4 |  |  |
|  | 玫红40% | #AA4FA6 40% | BC50B2 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 玫红20% | #AA4FA6 20% | BC50B2 20% |  |  |
|  | 玫红10% | #AA4FA6 10% | BC50B2 10% |  |  |
|  | 紫色 | #722ED1 | 8955D3 |  |  |
|  | 紫色40% | #722ED1 40% | 8955D3 40% |  |  |
|  | 草绿色 | #7BB212 | 71A807 |  |  |
| 甘特图作业条颜色 | 未完成CC1 | #206CCF | 1D6FE8 | @global-gantt-task-cc1-backgroud-color |  |
|  | 未完成CC2 | #00867A | 239790 | @global-gantt-task-cc2-backgroud-color |  |
|  | 未完成CC3 | #AA4FA6 | BC50B2 | @global-gantt-task-cc3-backgroud-color |  |
|  | 未完成CC4 | 69990F | 7BB212 | @global-gantt-task-cc4-backgroud-color |  |
|  | 未完成铁次 | #411DC4 | #4820D9 |  |  |
|  | 未完成长材 | #D88C00 | EBA63E | @global-gantt-task-lang-slab-backgroud-color |  |
|  | 未完成板材 | #722ED1 | 8955D3 | @global-gantt-task-slab-backgroud-color |  |
|  | 备用 | #D4380D | #FA541C |  |  |
|  | CC1未完成准备色 | #164485 | 9CBBF6 | @global-gantt-task-cc1-unfinish-backgroud-color |  |
|  | CC2未完成准备色 | #06515B | 82C9C3 | @global-gantt-task-cc2-unfinish-backgroud-color |  |
|  | CC3未完成准备色 | #5B3571 | E18CD8 | @global-gantt-task-cc3-unfinish-backgroud-color |  |
|  | CC4未完成准备色 | 476537 | BBD191 | @global-gantt-task-cc4-unfinish-backgroud-color |  |
|  | 未完成铁次准备色 | #271C80 | A08CE8 |  |  |
|  | 长材未完成准备色 | #72541E | F2CF9A | @global-gantt-task-lang-slab-unfinish-backgroud-color |  |
|  | 板材未完成准备色 | #3F2586 | B28CE7 | @global-gantt-task-slab-unfinish-backgroud-color |  |
|  | 备用准备色 | #702A24 | E59782 |  |  |
|  | CC1未完成等待色 | #102B59 | CDDEFC | @global-gantt-task-cc1-unfinish-wait-backgroud-color |  |
|  | CC2未完成等待色 | #0A3048 | D3ECE9 | @global-gantt-task-cc2-unfinish-wait-backgroud-color |  |
|  | CC3未完成等待色 | #2C2550 | F8CDF4 | @global-gantt-task-cc3-unfinish-wait-backgroud-color |  |
|  | CC4未完成等待色 | 233B30 | DFEACB |  |  |
|  | 铁次未完成等待色 | #171B56 | #D4CCF2 |  |  |
|  | CC1已完成 | #234982 | #A1C1F2 | @global-gantt-task-cc1-finish-backgroud-color |  |
|  | CC2已完成 | #165460 | #A3D1CF | @global-gantt-task-cc2-finish-backgroud-color |  |
|  | CC3已完成 | #5A3E71 | #E0B5DC | @global-gantt-task-cc3-finish-backgroud-color |  |
|  | CC4已完成 | #405B35 | C6DC9D | @global-gantt-task-cc4-finish-backgroud-color |  |
|  | 铁次已完成 | 302A7E | B2A2EC |  |  |
|  | 长材已完成 | #6C562F | #F3D7AE | @global-gantt-task-lang-slab-finish-backgroud-color |  |
|  | 板材已完成 | #443083 | #CCB7E9 | @global-gantt-task-slab-finish-backgroud-color |  |
|  | 警告色已完成 | #683946 | #FBB7B2 |  |  |
|  | 已完成准备色 | #455169 | #CDCED1 | @global-gantt-finished-waiting-color |  |
|  | 等待时间线条-蓝 | #1151A5 | 1158B5 | @global-gantt-task-cc1-wait-line-color |  |
|  | 等待时间线条-绿 | #046B62 | 03756B | @global-gantt-task-cc2-wait-line-color |  |
|  | 等待时间线条-玫红 | #974194 | AD46A4 | @global-gantt-task-cc3-wait-line-color |  |
| 表格选中色 | 橙色选中色 | #5C3C3C | #F7DED0 |  |  |
|  | 蓝色选中色 | #143B76 | #CCDCF4 | @global-blue-selected-background-color |  |
|  | 绿色选中色 | #074654 | #CDE4E3 |  |  |
| 表格异常色 | 红色 | #592B3A | #F9D7D5 |  |  |

## 中唐

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色 | #030621 | #EAEAEA | @global-background-color |  |
|  | 表格第二种底色 | #010C31 | #FFFFFF | @global-card-other-background-color |  |
|  | hover背景底色 | #010C31 95% | #FFFFFF 95% | @global-hover-background-color | 暂未使用 |
|  | 卡片底色 | #0C1B3B | #F7F7F8 | @global-card-background-color |  |
|  | 右键菜单底色 | #0F2347 95% | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 禁用填充色 | #0F2347 | #F2F2F2 | @global-disabled-background-color | 暂未使用 |
|  | 卡片上主要辅助色 | #1E345B | #E8E8E8 | @global-card-effect-background-color |  |
|  | 信息hover色 | #1E345B 95% | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 线条颜色 | #243D65 | #D9D9D9 | @global-default-border-line-color |  |
|  | 线条颜色2 | #798293 | #A2A2A2 | @global-default-border-line-color2 | 新增颜色，用途：图表hover下指示线条 |
|  | 全局提醒底色 | #FFFFF 95% | #23467A 95% | @global-message-tip-backgroud-color | 暗色模式下全局提醒为95%白 |
|  | 铸轧甘特图CC灰色背景 | #2C3A58 | #F9F0EC | @global-roll-gant-cc-background-color | 新增颜色，用途：铸轧甘特图CC灰色部分 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color |  |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color |  |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color |  |
|  | 100%白色 | #FFFFFF | #FFFFFF |  |  |
| 彩色 | 橙色填充 | #D46E3F | F57632 | @global-primary-color |  |
|  | 橙色字体 | #F99057 | F99057 | @global-primary-text-color |  |
|  | 橙色-深 | #C45D2E | C75F30 |  |  |
|  | 橙色40% | #D46E3F 40% | F57632 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 橙色20% | #D46E3F 20% | F57632 20% |  |  |
|  | 橙色10% | #D46E3F 10% | F57632 10% | @global-orange-selected-background-color |  |
|  | 绿色填充 | #00867A | 239790 |  |  |
|  | 绿色字体 | #33D1C9 | 1FC1B3 |  |  |
|  | 绿色-深 | #046B62 | 03756B |  |  |
|  | 绿色40% | #00867A 40% | 239790 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 绿色20% | #00867A 20% | 239790 20% |  |  |
|  | 绿色10% | #00867A 10% | 239790 10% |  |  |
|  | 蓝色填充 | #206CCF | 1D6FE8 |  |  |
|  | 蓝色字体 | #57A9FB | 4287EC |  |  |
|  | 蓝色-深 | #1151A5 | 1158B5 |  |  |
|  | 蓝色40% | #206CCF 40% | 1D6FE8 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色20% | #206CCF 20% | 1D6FE8 20% |  |  |
|  | 蓝色10% | #206CCF 10% | 1D6FE8 10% |  |  |
|  | 黄色填充 | #D88C00 | EBA63E |  |  |
|  | 黄色字体 | #E59500 | FEB445 |  |  |
|  | 黄色40% | #D88C00 40% | EBA63E 40% |  |  |
|  | 红色填充 | #CC433A | FF5449 |  |  |
|  | 红色字体 | #FF5449 | F95F55 | --global-red-text-color | 新增颜色，用途：表格 \| 标题 红色字体 |
|  | 红色40% | #CC433A 40% | FF5449 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 红色20% | #CC433A 20% | FF5449 20% |  |  |
|  | 红色10% | #CC433A 10% | FF5449 10% |  |  |
|  | 玫红 | #AA4FA6 | BC50B2 |  |  |
|  | 玫红-深 | #974194 | AD46A4 |  |  |
|  | 玫红40% | #AA4FA6 40% | BC50B2 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 玫红20% | #AA4FA6 20% | BC50B2 20% |  |  |
|  | 玫红10% | #AA4FA6 10% | BC50B2 10% |  |  |
|  | 紫色 | #722ED1 | 8955D3 |  |  |
|  | 紫色40% | #722ED1 40% | 8955D3 40% |  |  |
|  | 草绿色 | #7BB212 | 71A807 |  |  |
| 甘特图作业条颜色 | 未完成CC1 | #206CCF | 1D6FE8 |  |  |
|  | 未完成CC2 | #00867A | 239790 |  |  |
|  | 未完成CC3 | #AA4FA6 | BC50B2 |  |  |
|  | 未完成CC4 | #411DC4 | #4820D9 |  |  |
|  | 未完成铁次 | 69990F | 7BB212 |  |  |
|  | 未完成未匹配铁包 | #D88C00 | EBA63E |  |  |
|  | 未完成尾包 | #722ED1 | 8955D3 |  |  |
|  | 备用 | #D4380D | #FA541C |  |  |
|  | CC1未完成准备色 | #164485 | 9CBBF6 |  |  |
|  | CC2未完成准备色 | #06515B | 82C9C3 |  |  |
|  | CC3未完成准备色 | #5B3571 | E18CD8 |  |  |
|  | CC4未完成准备色 | #271C80 | A08CE8 |  |  |
|  | 铁次未完成准备色 | 476537 | BBD191 |  |  |
|  | 未匹配铁包未完成准备色 | #72541E | F2CF9A |  |  |
|  | 尾包未完成准备色 | #3F2586 | B28CE7 |  |  |
|  | 备用准备色 | #702A24 | E59782 |  |  |
|  | CC1未完成等待色 | #102B59 | CDDEFC |  |  |
|  | CC2未完成等待色 | #0A3048 | D3ECE9 |  |  |
|  | CC3未完成等待色 | #2C2550 | F8CDF4 |  |  |
|  | CC4未完成等待色 | #171B56 | #D4CCF2 |  |  |
|  | 铁次未完成等待色 | 233B30 | DFEACB |  |  |
|  | CC1已完成 | #234982 | #A1C1F2 |  |  |
|  | CC2已完成 | #165460 | #A3D1CF |  |  |
|  | CC3已完成 | #5A3E71 | #E0B5DC |  |  |
|  | CC4已完成 | 302A7E | B2A2EC |  |  |
|  | 铁次已完成 | #405B35 | C6DC9D |  |  |
|  | 未匹配铁包已完成） | #6C562F | #F3D7AE |  |  |
|  | 尾包已完成 | #443083 | #CCB7E9 |  |  |
|  | 警告色已完成 | #683946 | #FBB7B2 |  |  |
|  | 已完成准备色 | #455169 | #CDCED1 | @global-gantt-finished-waiting-color |  |
|  | 等待时间线条-蓝 | #1151A5 | 1158B5 |  |  |
|  | 等待时间线条-绿 | #046B62 | 03756B |  |  |
|  | 等待时间线条-玫红 | #974194 | AD46A4 |  |  |
| 表格选中色 | 橙色选中色 | #5C3C3C | #F7DED0 |  |  |
|  | 蓝色选中色 | #143B76 | #CCDCF4 |  |  |
|  | 绿色选中色 | #074654 | #CDE4E3 |  |  |
| 表格异常色 | 红色 | #592B3A | #F9D7D5 |  |  |

## 大冶

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色 | #101827 | #EAEAEA | @global-background-color |  |
|  | 表格第二种底色 | 无 |  | @global-card-other-background-color |  |
|  | hover背景底色 | 无（和右键菜单底色一样） |  | @global-hover-background-color | 暂未使用 |
|  | 卡片底色 | #1E293B | #F7F7F8 | @global-card-background-color |  |
|  | 右键菜单底色 | #334155 95% | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 表头筛选底色（新增） | #334155 | #FFFFFF | @global-filter-popover-background-color | 表格筛选浮窗背景色 |
|  | 禁用填充色 | #334155 | #F2F2F2 | @global-disabled-background-color | 暂未使用 |
|  | 表格check颜色 | 2D3A4D | EDEDED | @selectTableRow（废弃） / @global-table-row-checked-background-color（启用） | 多选时checked行的背景色，hover色，表单禁用填充色 |
|  | 卡片上主要辅助色 | #334155 | #E8E8E8 | @global-card-effect-background-color |  |
|  | 灰色选择颜色（新增） | #475569 | #E8E8E8 | @global-item-selected-background-color | 下拉选择/菜单选择/树等选中色 |
|  | 信息hover色 | #475569 95% | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 线条颜色 | #475569 | #D9D9D9 | @global-default-border-line-color |  |
|  | 线条颜色2 | 无（用线条颜色即可） |  |  | 新增颜色，用途：图表hover下指示线条 |
|  | 滚动条滑块颜色（新增） | #64748B | #CCCCCC | @global-scrollbar-slider-background-color |  |
|  | 全局提醒底色 | #FFFFFF 95% | #475569 95% | @global-message-tip-backgroud-color |  |
|  | 铸轧甘特图CC灰色背景 | #2C3A58 | #F9F0EC | @global-roll-gant-cc-background-color | 新增颜色，用途：铸轧甘特图CC灰色部分 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
|  | 弹窗蒙版色（新增） | #242A30 40% | #242A30 70% | @global-mask-background-color |  |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color | 表单禁用文字色 |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color |  |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color |  |
|  | 纯色icon2 | #FFFFFF 20% | #C2C5CD | @global-icon-desc-text-color | 新增颜色，用途：icon图标二级灰色 |
|  | 100%白色 | #FFFFFF | #FFFFFF |  |  |
| 彩色 | 橙色填充 | #D46E3F | F57632 | @global-orange-primary-color |  |
|  | 橙色字体 | #F99057 | F99057 | @global-orange-primary-text-color |  |
|  | 橙色-深 | #C45D2E | C75F30 |  |  |
|  | 橙色40% | #D46E3F 40% | F57632 40% |  |  |
|  | 橙色20% | #D46E3F 20% | F57632 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 橙色10% | #D46E3F 10% | F57632 10% |  |  |
|  | 绿色填充 | #00867A | 239790 |  |  |
|  | 绿色字体 | #33D1C9 | 1FC1B3 |  |  |
|  | 绿色-深 | #046B62 | 03756B |  |  |
|  | 绿色40% | #00867A 40% | 239790 40% |  |  |
|  | 绿色20% | #00867A 20% | 239790 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色填充 | #206CCF | 1D6FE8 |  |  |
|  | 蓝色字体 | #57A9FB | 4287EC |  |  |
|  | 蓝色-深 | #1151A5 | 1158B5 |  |  |
|  | 蓝色40% | #206CCF 40% | 1D6FE8 40% |  |  |
|  | 蓝色20% | #206CCF 20% | 1D6FE8 20% | @global-blue-bg-color-20 | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色10% | #206CCF 10% | 1D6FE8 10% | @global-blue-selected-background-color | 新增颜色，用途：list选中色 |
|  | 黄色填充 | #D88C00 | EBA63E |  |  |
|  | 黄色字体 | #E59500 | FEB445 |  |  |
|  | 黄色40% | #D88C00 40% | EBA63E 40% |  |  |
|  | 红色填充 | #CC433A | FF5449 |  |  |
|  | 红色字体 | #FF5449 | F95F55 | --global-red-text-color | 新增颜色，用途：表格 \| 标题 红色字体 |
|  | 红色40% | #CC433A 40% | FF5449 40% |  |  |
|  | 红色20% | #CC433A 20% | FF5449 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 玫红 | #AA4FA6 | BC50B2 |  |  |
|  | 玫红-深 | #974194 | AD46A4 |  |  |
|  | 玫红40% | #AA4FA6 40% | BC50B2 40% |  |  |
|  | 玫红20% | #AA4FA6 20% | BC50B2 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 紫色 | #722ED1 | 8955D3 |  |  |
|  | 紫色40% | #722ED1 40% | 8955D3 40% |  |  |
|  | 草绿色 | #7BB212 | 71A807 |  |  |
| 甘特图作业条颜色 | 未完成CC1 | #206CCF | 1D6FE8 | @global-gantt-task-cc1-backgroud-color |  |
|  | 未完成CC2 | #00867A | 239790 | @global-gantt-task-cc2-backgroud-color |  |
|  | 未完成CC3 | #AA4FA6 | BC50B2 | @global-gantt-task-cc3-backgroud-color |  |
|  | 未完成长材 | #D88C00 | EBA63E | @global-gantt-task-lang-slab-backgroud-color |  |
|  | 未完成板材 | #722ED1 | 8955D3 | @global-gantt-task-slab-backgroud-color |  |
|  | 未完成铁次 | 69990F | 7BB212 |  |  |
|  | CC1未完成准备色 | #164485 | 9CBBF6 | @global-gantt-task-cc1-unfinish-backgroud-color |  |
|  | CC2未完成准备色 | #06515B | 82C9C3 | @global-gantt-task-cc2-unfinish-backgroud-color |  |
|  | CC3未完成准备色 | #5B3571 | E18CD8 | @global-gantt-task-cc3-unfinish-backgroud-color |  |
|  | 长材未完成准备色 | #72541E | F2CF9A | @global-gantt-task-lang-slab-unfinish-backgroud-color |  |
|  | 板材未完成准备色 | #3F2586 | B28CE7 | @global-gantt-task-slab-unfinish-backgroud-color |  |
|  | 未完成铁次准备色 | 476537 | BBD191 |  |  |
|  | CC1未完成等待色 | #102B59 | CDDEFC | @global-gantt-task-cc1-unfinish-wait-backgroud-color |  |
|  | CC2未完成等待色 | #0A3048 | D3ECE9 | @global-gantt-task-cc2-unfinish-wait-backgroud-color |  |
|  | CC3未完成等待色 | #2C2550 | F8CDF4 | @global-gantt-task-cc3-unfinish-wait-backgroud-color |  |
|  | CC1已完成 | #234982 | #A1C1F2 | @global-gantt-task-cc1-finish-backgroud-color |  |
|  | CC2已完成 | #165460 | #A3D1CF | @global-gantt-task-cc2-finish-backgroud-color |  |
|  | CC3已完成 | #5A3E71 | #E0B5DC | @global-gantt-task-cc3-finish-backgroud-color |  |
|  | 长材已完成 | #6C562F | #F3D7AE | @global-gantt-task-lang-slab-finish-backgroud-color |  |
|  | 板材已完成 | #443083 | #CCB7E9 | @global-gantt-task-slab-finish-backgroud-color |  |
|  | 警告色已完成 | #683946 | #FBB7B2 |  |  |
|  | 已完成准备色 | #455169 | #CDCED1 | @global-gantt-finished-waiting-color |  |
|  | 等待时间线条-蓝 | #1151A5 | 1158B5 | @global-gantt-task-cc1-wait-line-color |  |
|  | 等待时间线条-绿 | #046B62 | 03756B | @global-gantt-task-cc2-wait-line-color |  |
|  | 等待时间线条-玫红 | #974194 | AD46A4 | @global-gantt-task-cc3-wait-line-color |  |
| 表格选中色 | 橙色选中色 | #5C3C3C | #F7DED0 |  |  |
|  | 蓝色选中色 | #143B76 | #CCDCF4 | @global-blue-selected-background-color |  |
|  | 绿色选中色 | #074654 | #CDE4E3 |  |  |
| 表格异常色 | 红色 | #592B3A | #F9D7D5 |  |  |

## 能源仿真

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色（作废） | #101827 | #EAEAEA | @global-background-color |  |
|  | 背景底色（新） | #101827 | #F7F7F8 |  |  |
|  | 卡片底色（新） | #1E293B | #FFFFFF | @global-card-background-color |  |
|  | 右键菜单底色 | #334155 95% | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 表头筛选底色（新增） | #334155 | #FFFFFF | @global-filter-popover-background-color | 表格筛选浮窗背景色 |
|  | 禁用填充色 | #334155 | #F2F2F2 | @global-disabled-background-color | 暂未使用 |
|  | 表格check颜色 | 2D3A4D | EDEDED | @selectTableRow | 多选时checked行的背景色 |
|  | 卡片上主要辅助色（新） | #334155 | #F7F7F8 | @global-card-effect-background-color |  |
|  | 灰色选择颜色（新增） | #475569 | #E8E8E8 | @global-item-selected-background-color | 下拉选择/菜单选择/树等选中色 |
|  | 信息hover色 | #475569 95% | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 线条颜色（新） | #475569 | #E9E9E9 | @global-default-border-line-color |  |
|  | 滚动条滑块颜色（新增） | #64748B | #CCCCCC | @global-scrollbar-slider-background-color |  |
|  | 全局提醒底色 | #FFFFFF 95% | #475569 95% | @global-message-tip-backgroud-color |  |
|  | 铸轧甘特图CC灰色背景 | #2C3A58 | #F9F0EC | @global-roll-gant-cc-background-color | 新增颜色，用途：铸轧甘特图CC灰色部分 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
|  | 弹窗蒙版色（新增） | #242A30 40% | #242A30 70% | @global-mask-background-color |  |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color |  |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color |  |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color |  |
|  | 纯色icon2 | #FFFFFF 20% | #C2C5CD | @global-icon-desc-text-color | 新增颜色，用途：icon图标二级灰色 |
|  | 100%白色 | #FFFFFF | #FFFFFF |  |  |
| 彩色 | 橙色填充 | #D46E3F | F57632 | @global-primary-color |  |
|  | 橙色字体 | #F99057 | F99057 | @global-primary-text-color |  |
|  | 橙色-深 | #C45D2E | C75F30 |  |  |
|  | 橙色40% | #D46E3F 40% | F57632 40% |  |  |
|  | 橙色20% | #D46E3F 20% | F57632 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 橙色10% | #D46E3F 10% | F57632 10% |  |  |
|  | 绿色填充 | #00867A | 239790 |  |  |
|  | 绿色字体 | #33D1C9 | 1FC1B3 |  |  |
|  | 绿色-深 | #046B62 | 03756B |  |  |
|  | 绿色40% | #00867A 40% | 239790 40% |  |  |
|  | 绿色20% | #00867A 20% | 239790 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色填充 | #206CCF | 1D6FE8 |  |  |
|  | 蓝色字体 | #57A9FB | 4287EC |  |  |
|  | 蓝色-深 | #1151A5 | 1158B5 |  |  |
|  | 蓝色40% | #206CCF 40% | 1D6FE8 40% |  |  |
|  | 蓝色20% | #206CCF 20% | 1D6FE8 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色10% | #206CCF 10% | 1D6FE8 10% | @global-blue-selected-background-color | 新增颜色，用途：list选中色 |
|  | 黄色填充 | #D88C00 | EBA63E |  |  |
|  | 黄色字体 | #E59500 | FEB445 |  |  |
|  | 黄色40% | #D88C00 40% | EBA63E 40% |  |  |
|  | 红色填充 | #CC433A | FF5449 |  |  |
|  | 红色字体 | #FF5449 | F95F55 | --global-red-text-color | 新增颜色，用途：表格 \| 标题 红色字体 |
|  | 红色40% | #CC433A 40% | FF5449 40% |  |  |
|  | 红色20% | #CC433A 20% | FF5449 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 玫红 | #AA4FA6 | BC50B2 |  |  |
|  | 玫红-深 | #974194 | AD46A4 |  |  |
|  | 玫红40% | #AA4FA6 40% | BC50B2 40% |  |  |
|  | 玫红20% | #AA4FA6 20% | BC50B2 20% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 紫色 | #722ED1 | 8955D3 |  |  |
|  | 紫色40% | #722ED1 40% | 8955D3 40% |  |  |
|  | 草绿色 | #7BB212 | 71A807 |  |  |
| 甘特图作业条颜色 | 未完成CC1 | #206CCF | 1D6FE8 |  |  |
|  | 未完成CC2 | #00867A | 239790 |  |  |
|  | 未完成CC3 | #AA4FA6 | BC50B2 |  |  |
|  | 未完成长材 | #D88C00 | EBA63E |  |  |
|  | 未完成板材 | #722ED1 | 8955D3 |  |  |
|  | 未完成铁次 | 69990F | 7BB212 |  |  |
|  | CC1未完成准备色 | #164485 | 9CBBF6 |  |  |
|  | CC2未完成准备色 | #06515B | 82C9C3 |  |  |
|  | CC3未完成准备色 | #5B3571 | E18CD8 |  |  |
|  | 长材未完成准备色 | #72541E | F2CF9A |  |  |
|  | 板材未完成准备色 | #3F2586 | B28CE7 |  |  |
|  | 未完成铁次准备色 | 476537 | BBD191 |  |  |
|  | CC1未完成等待色 | #102B59 | CDDEFC |  |  |
|  | CC2未完成等待色 | #0A3048 | D3ECE9 |  |  |
|  | CC3未完成等待色 | #2C2550 | F8CDF4 |  |  |
|  | CC1已完成 | #234982 | #A1C1F2 |  |  |
|  | CC2已完成 | #165460 | #A3D1CF |  |  |
|  | CC3已完成 | #5A3E71 | #E0B5DC |  |  |
|  | 长材已完成 | #6C562F | #F3D7AE |  |  |
|  | 板材已完成 | #443083 | #CCB7E9 |  |  |
|  | 警告色已完成 | #683946 | #FBB7B2 |  |  |
|  | 已完成准备色 | #455169 | #CDCED1 | @global-gantt-finished-waiting-color |  |
|  | 等待时间线条-蓝 | #1151A5 | 1158B5 |  |  |
|  | 等待时间线条-绿 | #046B62 | 03756B |  |  |
|  | 等待时间线条-玫红 | #974194 | AD46A4 |  |  |
| 表格选中色 | 橙色选中色 | #5C3C3C | #F7DED0 |  |  |
|  | 蓝色选中色 | #143B76 | #CCDCF4 |  |  |
|  | 绿色选中色 | #074654 | #CDE4E3 |  |  |
| 表格异常色 | 红色 | #592B3A | #F9D7D5 |  |  |
|  | 黄色 | #5E4823 | #EBCC95 |  |  |

## QMS

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色 | #030621 | #EAEAEA | @global-background-color |  |
|  | 表格第二种底色 | #010C31 | #FFFFFF | @global-card-other-background-color @global-table-even-row-color<br>@global-card-other-background-color  @-global-card-form-background-color<br>@globalColor0 |  |
|  | hover背景底色 | #010C31 95% | #FFFFFF 95% | @global-hover-background-color | 暂未使用 |
|  | 卡片底色 | #0C1B3B | #F7F7F8 | @global-card-background-color @global-table-odd-row-color<br>@globalColor7 |  |
|  | 右键菜单底色 | #0F2347 95% | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 禁用填充色 | #0F2347 | #F2F2F2 | @global-disabled-background-color @global-drop-down-list-background-color | 暂未使用 |
|  | 卡片上主要辅助色 | #1E345B | #E8E8E8 | @global-card-effect-background-color  @globalColor_14 |  |
|  | 信息hover色 | #1E345B 95% | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 卡片背景色 40% | #1E345B 40% | #E8E8E8 40% | @global-card-effect-background-color-40 |  |
|  | 线条颜色 | #243D65 | #D9D9D9 | @global-default-border-line-color @global-judgmement-gray-color <br>@global-scrollbar-slider-background-color @tableColor7 @tableColor8<br>@tableTooltipBgc  |  |
|  | 线条颜色2 | #798293 | #A2A2A2 | @global-default-border-line-color2 | 新增颜色，用途：图表hover下指示线条 |
|  | 全局提醒底色 | #FFFFF 95% | #23467A 95% | @global-message-tip-backgroud-color | 暗色模式下全局提醒为95%白 |
|  | 铸轧甘特图CC灰色背景 | #2C3A58 | #F9F0EC | @global-roll-gant-cc-background-color | 新增颜色，用途：铸轧甘特图CC灰色部分 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
|  | 全局默认错误颜色 | #FD5D5D | #FD5D5D | @global-default-error-color |  |
|  | 默认盒边框颜色 | #5E6175 | #5E6175 | @global-box-border-color @globalColor5 @globalColor_12 @globalColor_13 |  |
|  | 表格第二种底色 | #5E6175 40% | #EAEAEA | @tableColor2 |  |
|  |  | #05081A | #FFFFFF | @global-background-bring-color | 暂未使用 |
|  | 输入框背景 | #1D253A | #1D253A | @global-curd-input-background-color |  |
|  | 默认表格行颜色 | #292E44 | #292E44 | @global-default-table-row-color |  |
|  | 表头及悬浮背景色 | #38405F | #D9D9D9 | @global-table-header-or-hover-color |  |
|  | tablemax 选中色 | #052347 | #052347 | @global-select-tablemax-from-color |  |
|  | 盒阴影 | #030521 48% | #FFFFFF 48% | @global-box-shadow-color |  |
|  | 滚动条 | #1E345B | #D9D9D9 | @scrollThumbHover @scrollThumb |  |
|  | 滑块右侧边框 | #3E3B3B | #3E3B3B | @sliderRightBorder |  |
|  | 全局颜色4 | #838695 | #838695 | @globalColor4  |  |
|  | 全局颜色6 | #363847 | #363847 | @globalColor6 |  |
|  | 全局颜色8 | #243D65 | #EAEAEA | @globalColor8 |  |
|  | 全局颜色9 | #2A2D48 | #2A2D48 | @globalColor9 |  |
|  | 全局颜色10 | #F5F6F7 10% | #F5F6F7 10% | @globalColor_10 |  |
|  | 全局颜色11 | #1A1D2E | #1A1D2E | @globalColor_11 |  |
|  | 全局颜色15 | #717385 | #717385 | @globalColor_15 |  |
|  | 全局颜色16 | #171A2B | #171A2B | @globalColor_16 |  |
|  | 甘特 | #9B9EA5 | #9B9EA5 | @globalColor_roll_gantt-cut-item |  |
|  | 表格边框 | #373B54 | #FFFFFF | @global-table-line-color |  |
|  | 表格第四种底色 | #DADBDF 50% | #DADBDF 50% | @tableColor4 |  |
|  | 表格第五种底色 | #DADBDF  | #DADBDF | @tableColor5 |  |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color @global-nav-text-color @tableColor1 |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color @global-navigation-text-grey-color  <br>@globalColor2 @globalColor3 |  |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color  |  |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color  @globalColor1 |  |
|  | 100%白色 | #FFFFFF | #FFFFFF | @globalColor_17 |  |
|  | 全局字体描述颜色 | #D3E7FA3F | #D9D9D9 | @global-desc-text-disabled-color |  |
|  | 白色 10% | #FFFFFF 10% | #FFFFFF 10% | @arh-color |  |
| 彩色 | 橙色填充 | #D46E3F | F57632 | @global-primary-color |  |
|  | 橙色字体 | #F99057 | F99057 | @global-primary-text-color |  |
|  | 橙色-深 | #C45D2E | C75F30 |  |  |
|  | 橙色40% | #D46E3F 40% | F57632 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 橙色20% | #D46E3F 20% | F57632 20% |  |  |
|  | 橙色10% | #D46E3F 10% | F57632 10% |  |  |
|  | 绿色填充 | #00867A | 239790 | @global-primary-fill-color  @global-primary-color |  |
|  | 绿色字体 | #33D1C9 | 1FC1B3 | @global-primary-text-color @global-content-text-color @global-layout-select-color @tableColor6 |  |
|  | 判定选中颜色 | #33D1C9 10% | #2ECABC | @global-judge-label-select-color |  |
|  | 绿色-深 | #046B62 | 03756B | @global-primary-strong-color |  |
|  | 绿色40% | #00867A 40% | 239790 40% | @global-primary-40-color | 新增颜色，用途：质量追溯节点颜色 |
|  | 绿色20% | #00867A 20% | 239790 20% | @global-primary-20-color |  |
|  | 绿色10% | #00867A 10% | 239790 10% |  |  |
|  | 蓝色填充 | #206CCF | 1D6FE8 |  |  |
|  | 蓝色字体 | #57A9FB | 4287EC |  |  |
|  | 蓝色-深 | #1151A5 | 1158B5 |  |  |
|  | 蓝色40% | #206CCF 40% | 1D6FE8 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 蓝色20% | #206CCF 20% | 1D6FE8 20% |  |  |
|  | 蓝色10% | #206CCF 10% | 1D6FE8 10% |  |  |
|  | 黄色填充 | #D88C00 | EBA63E |  | 评估模型、热轧表面质量判定 等级颜色 |
|  | 黄色字体 | #E59500 | FEB445 |  |  |
|  | 黄色40% | #D88C00 40% | EBA63E 40% |  |  |
|  | 红色填充 | #CC433A | FF5449 |  |  |
|  | 红色字体 | #FF5449 | F95F55 | @global-red-text-color @global-judgmement-err-color | 新增颜色，用途：表格 \| 标题 红色字体 |
|  | 红色40% | #CC433A 40% | FF5449 40% | @global-red-primary-color-40 | 新增颜色，用途：质量追溯节点颜色 |
|  | 红色20% | #CC433A 20% | FF5449 20% | @global-red-primary-color-20 |  |
|  | 红色10% | #CC433A 10% | FF5449 10% |  |  |
|  | 玫红 | #AA4FA6 | BC50B2 |  |  |
|  | 玫红-深 | #974194 | AD46A4 |  |  |
|  | 玫红40% | #AA4FA6 40% | BC50B2 40% |  | 新增颜色，用途：质量追溯节点颜色 |
|  | 玫红20% | #AA4FA6 20% | BC50B2 20% |  |  |
|  | 玫红10% | #AA4FA6 10% | BC50B2 10% |  |  |
| 表格选中色 | 橙色错误色 | #5C3C3D | #F6C4A9  | @global-orange-error-color |  |
|  | 蓝色选中色 | #143B76 | #CCDCF4 | @global-blue-selected-background-color |  |
|  | 橙色 | #5E4823  | #EBCC95 | @global-table-row-orange-color |  |
|  | 绿色选中色 | #074654 | #CDE4E3 | @select-table-row @table-row-hover-bgc |  |
| 表格异常色 | 红色 | #592B3A | #F9D7D5 | @global-table-row-err-color |  |

## ODS

| 分组 | 颜色名 | 暗色 | 亮色 | 对应颜色变量 | 备注 |
| --- | --- | --- | --- | --- | --- |
| 辅助底色 | 背景底色 | #14141A | #EAEAEA | @global-background-color |  |
|  | 表格第二种底色 | #232635 | #FFFFFF | @global-card-other-background-color |  |
|  | hover背景底色 | #010C31 95% | #FFFFFF 95% | @global-hover-background-color | 暂未使用 |
|  | 卡片底色 | #0C1B3B | #F7F7F8 | @global-card-background-color |  |
|  | 右键菜单底色 | #292E44 | #FFFFFF 95% | @global-context-menu-background-color |  |
|  | 禁用填充色 | #29334C | #F2F2F2 | @global-disabled-background-color | 暂未使用 |
|  | 卡片上主要辅助色 | #38405F | #E8E8E8 | @global-card-effect-background-color |  |
|  | 信息hover色 | #38405F | #E8E8E8 95% | @global-row-hover-background-color |  |
|  | 线条颜色 | #243D65 | #D9D9D9 | @global-default-border-line-color |  |
|  | 全局提醒底色 | #FFFFF 95% | #23467A 95% | @global-message-tip-backgroud-color | 暗色模式下全局提醒为95%白 |
|  | hover和右键投影 | #030621  45% | #030621  12% | @global-hover-box-shadow-color | hover/右键下拉框投影颜色 |
|  | popover表单颜色（新增） | #05081A | #F7F7F8 | @global-background-bring-color |  |
|  | 边框颜色（新增） | #5e6175 | #5e6175 | @global-box-border-color | 订单展开 - 边框颜色 |
|  | 阴影颜色 | #030521 48% | #ffffff  48% | @global-box-shadow-color |  |
|  | 设计规则定义card背景 | #010C31 | #ffffff | @global-card-form-background-color |  |
|  | 检验计划及历史记录背景色 | #0C1B3B | #F7F7F8 | @global-content-background-color |  |
|  | 角色管理 输入框颜色 | #1D253A | #1D253A | @global-curd-input-background-color |  |
|  | 全局错误颜色 | #FD5D5D | #FD5D5D | @global-default-error-color |  |
|  | 滚动条颜色 | #43609CFF | #D9D9D9 | @global-default-scrollbar-color |  |
|  | 全局成功颜色 | #1FC173 | #1FC173 | @global-default-success-color |  |
|  | 表格行背景颜色 | #292E44 | #FFFFFFf2 | @global-default-table-row-color |  |
|  | 全局警告颜色 | #EDA531 | #EDA531 | @global-default-warning-color |  |
|  | 下拉背景颜色 | #202539 | #F2F2F2 | @global-drop-down-list-background-color |  |
|  | tableMax 奇数行背景颜色 | #292E44 | #ffffff | @global-table-even-row-color |  |
|  | 表格头部 | #38405F | #D9D9D9 | @-global-table-header-or-hover-color |  |
|  | 表格偶数行背景颜色 | #232635 | #F7F7F8 | @global-table-odd-row-color |  |
| 字体和部分填充色 | 字体1号色（默认） | #FFFFFF | #242A30 | @global-default-text-color |  |
|  | 字体2号色（二级） | #FFFFFF 65% | #242A30 65% | @global-desc-text-color | 暂未使用 |
|  | 字体3号色（禁用） | #FFFFFF 45% | #242A30 45% | @global-tip-text-color | 暂未使用 |
|  | 20%黑白填充 | #FFFFFF 20% | #242A30 20% | @global-disabled-text-color |  |
|  | 10%黑白填充 | #FFFFFF 10% | #242A30 10% | @global-filled-background-color |  |
|  | 纯色icon | #FFFFFF | #455169 | @global-icon-text-color |  |
|  | 100%白色 | #FFFFFF | #FFFFFF |  | 暂未使用 |
|  | 内容文字颜色（新增） | #66A2FF | #66A2FF | @global-content-text-color |  |
|  | 文字禁用颜色 | #D3E7FA3F | #D9D9D9 | @global-desc-text-disabled-color |  |
|  | 导航文字颜色 | #242A30 | #242A30 | @global-nav-text-color |  |
|  | 导航灰色文字 | #FFFFFFA5 | #242A30A5 | @global-navigation-text-grey-color |  |
|  | primary强调色 | #03756B | #03756B | @global-primary-strong-color |  |
| 彩色 | 橙色填充 | #D46E3F | #43609C | @global-primary-color;@global-primary-selected-background-color ;  |  |
|  | 橙色字体 | #66A2FF | #66A2FF | @global-primary-text-color |  |
|  | 绿色40% | #00867A 40% | 239790 40% | @global-primary-40-color |  |
|  | 绿色20% | #00867A 20% | 239790 20% | @global-primary-20-color |  |
|  | 蓝色填充 | #206CCF | 1D6FE8 | @global-primary-blue-color |  |
