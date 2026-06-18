# Public Components Skill

这个 Skill 用于帮助各类 AI 编程助手正确使用 `@arim-aisdc/public-components` 组件库，重点约束根包公开导出、常用组件写法、类型边界、多语言配置、工具路径和页面一致性。

## 当前校准版本

- Skill 版本：`v1.3.0`
- 组件库：`@arim-aisdc/public-components`
- 组件库版本：`2.3.97`
- 源码基线：`C:\Work_Files\public-components`

## 主要能力

- 识别 `@arim-aisdc/public-components` 根包导入和 `/utils` 导入场景。
- 避免生成未公开导出的 API，例如 `ThemeProvider`、`useTranslation`、`ColorSelector`、`MicroComponent`。
- 按真实公共导出支持 `TableMax`、`CustomForm`、`QueryFilter`、`SchemaForm`、`ConfigProvider/useConfig`、权限体系、筛选组件、缓存、事件总线、`MessageTip`、`ModalTip` 和多语言配置。
- 页面开发或重构时，严格遵守 `references/ui-consistency.md` 中的后台管理界面一致性规范。

## 安装

```bash
npx skills add mahailiang999-creator/public-components-skill
```

全局安装：

```bash
npx skills add mahailiang999-creator/public-components-skill -g
```

## 文件说明

- `SKILL.md`：Skill 主入口、触发条件、公共导出边界和参考文档路由。
- `references/`：按任务类型渐进加载的组件、钩子函数、最佳实践和排障说明。
- `scripts/index.js`：维护入口，输出当前源码校准和检查顺序提示。

默认先按 `SKILL.md` 和对应 `references/` 完成任务；当类型、导出或实现细节不确定时，再回到组件库源码校对。
