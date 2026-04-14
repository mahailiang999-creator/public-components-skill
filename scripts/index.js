/**
 * Public Components Skill - helper entry
 *
 * This file intentionally does not embed component examples.
 * Example snippets tend to drift from the real public exports and
 * would conflict with the rules in SKILL.md.
 */

module.exports = {
  name: 'public-components-skill',
  description: '读取 SKILL.md 与 references/，按 @arim-aisdc/public-components 当前公开导出提供帮助。',

  async initialize() {
    console.log('Public Components Skill helper 已初始化');
  },

  async handleComponentRequest(componentName) {
    return {
      componentName,
      message:
        '请先根据 SKILL.md 校验该能力是否属于根包公开导出，再按任务类型读取 references/ 中对应文档。',
    };
  },

  async generateExample(componentName) {
    return [
      `未内置 ${componentName} 的静态示例。`,
      '请先检查 SKILL.md 中的 Public Exports / Do Not Generate By Default / Task Workflow，',
      '再结合组件库源码或 references 生成示例，避免输出已过期或未公开导出的 API。',
    ].join('');
  },
};
