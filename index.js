/**
 * Public Components Skill - 主要入口文件
 * 
 * 这个技能提供了对@arim-aisdc/public-components组件库的完整支持
 */

module.exports = {
  name: 'public-components-skill',
  description: '专为前端开发设计的AI技能，专门用于理解和使用@arim-aisdc/public-components组件库',
  
  /**
   * 技能初始化
   */
  async initialize() {
    console.log('Public Components Skill 已初始化');
  },

  /**
   * 处理组件使用请求
   */
  async handleComponentRequest(componentName, props = {}) {
    const components = {
      Button: {
        import: "import { Button } from '@arim-aisdc/public-components';",
        example: `<Button type="primary" onClick={handleClick}>
  ${props.text || '点击按钮'}
</Button>`,
        props: {
          type: 'primary | default | dashed | text | link',
          size: 'small | middle | large',
          onClick: '点击事件处理函数',
          loading: 'boolean - 是否显示加载状态'
        }
      },
      Input: {
        import: "import { Input } from '@arim-aisdc/public-components';",
        example: `<Input 
  placeholder="${props.placeholder || '请输入内容'}"
  value={value}
  onChange={handleChange}
  ${props.disabled ? 'disabled' : ''}
/>`,
        props: {
          placeholder: 'string - 输入提示文本',
          value: 'string - 输入框值',
          onChange: 'function - 值变化回调',
          disabled: 'boolean - 是否禁用'
        }
      },
      Modal: {
        import: "import { Modal } from '@arim-aisdc/public-components';",
        example: `<Modal
  title="${props.title || '标题'}"
  open={visible}
  onOk={handleOk}
  onCancel={handleCancel}
>
  <p>${props.content || '模态框内容'}</p>
</Modal>`,
        props: {
          title: 'string - 模态框标题',
          open: 'boolean - 是否显示',
          onOk: 'function - 确定回调',
          onCancel: 'function - 取消回调'
        }
      }
    };

    return components[componentName] || null;
  },

  /**
   * 生成完整组件示例
   */
  async generateExample(componentName, customProps = {}) {
    const component = await this.handleComponentRequest(componentName, customProps);
    
    if (!component) {
      return `组件 ${componentName} 暂不支持，请检查组件名称是否正确。`;
    }

    return `
// ${componentName} 组件使用示例

${component.import}

function Example() {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);

  ${componentName === 'Input' ? `
  const handleChange = (e) => {
    setValue(e.target.value);
  };` : ''}

  ${componentName === 'Modal' ? `
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };` : ''}

  return (
    <div>
      ${component.example}
    </div>
  );
}

export default Example;
    `.trim();
  }
};