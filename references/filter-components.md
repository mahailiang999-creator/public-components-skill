# Filter 组件系列

组件库提供各种筛选组件，用于表格筛选或表单筛选。

## FilterSelect

选择器筛选组件。

```typescript
import { FilterSelect } from '@arim-aisdc/public-components';

<FilterSelect
  title="状态"
  name="status"
  defaultValue="1"
  dataList={[
    { label: '选项1', value: '1' },
    { label: '选项2', value: '2' }
  ]}
  filterReturnEvt={(data) => console.log(data)}
  width={400}
  labelWidth={120}
  marginBottom={20}
/>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | string | - | 标题 |
| name | string | - | 字段名 |
| defaultValue | number \| string | - | 默认值 |
| dataList | Array<{ label: string, value: number \| string }> | - | 选项列表 |
| filterReturnEvt | function | - | 值变化回调 `(data: { name, value })` |
| width | number | 400 | 宽度 |
| labelWidth | number | 120 | 标题宽度 |
| marginBottom | number | 20 | 底部边距 |

## FilterInputNumber

数值范围筛选组件。

```typescript
import { FilterInputNumber } from '@arim-aisdc/public-components';
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | number \| number[] | - | 当前值 |
| onChange | function | - | 值变化回调 |
| min | number | - | 最小值 |
| max | number | - | 最大值 |
| step | number | 1 | 步长 |
| precision | number | - | 保留小数位数 |
| placeholder | string | - | placeholder |
| isShowInterval | boolean | - | 是否显示为区间输入 |
| suffix | string | - | 后缀单位 |

## FilterSlider

滑块筛选组件。

```typescript
import { FilterSlider } from '@arim-aisdc/public-components';
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | number | - | 当前值 |
| onChange | function | - | 值变化回调 |
| range | number[] | - | 滑块范围 |
| min | number | - | 最小值 |
| max | number | - | 最大值 |
| step | number | 1 | 步长 |
| marks | object | - | 刻度标记 |
| tooltipVisible | boolean | - | 是否显示tooltip |

## FilterSwitch

开关筛选组件。

```typescript
import { FilterSwitch } from '@arim-aisdc/public-components';
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | boolean | - | 当前值 |
| onChange | function | - | 值变化回调 |
| checkedChildren | ReactNode | - | 选中时文字 |
| unCheckedChildren | ReactNode | - | 未选中时文字 |
| disabled | boolean | false | 是否禁用 |

## FilterColor

颜色筛选组件。

```typescript
import { FilterColor } from '@arim-aisdc/public-components';
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string | - | 当前值 |
| onChange | function | - | 值变化回调 |
| showText | boolean | - | 是否显示文字 |
| allowClear | boolean | - | 是否可清除 |
| presets | Array<{ label, value }> | - | 预设颜色 |

## FilterRadio

单选筛选组件。

```typescript
import { FilterRadio } from '@arim-aisdc/public-components';
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | any | - | 当前值 |
| onChange | function | - | 值变化回调 |
| options | Array<{ label, value }> | [] | 选项列表 |
| optionType | 'default' \| 'button' | - | 选项类型 |
| disabled | boolean | false | 是否禁用 |

## ConditionExpression

用于构建复杂的查询条件，支持多条件组合和多分组。

```typescript
import { ConditionExpression } from '@arim-aisdc/public-components';

const defaultConditions = [
  {
    conditionItem: [
      {
        arguments: null,
        operator: '=',
        argumentsValue: null,
        logicOperator: null,
      },
    ],
    logicOperator: null,
  },
];

<ConditionExpression
  value={conditions}
  onChange={setConditions}
  showParameter={true}
  parameterOptions={[
    { label: '姓名', value: 'name' },
    { label: '年龄', value: 'age' },
    { label: '创建时间', value: 'createTime' },
  ]}
  labelInValue={false}
  canFrontFilter={true}
  frontendFilterOptionFun={(input, option) => {
    return option.label.toLowerCase().includes(input.toLowerCase());
  }}
/>
```

### 数据结构

```typescript
// 条件项类型
type conditionItemType = {
  arguments?: any;                    // 参数值
  operator?: any;                     // 操作符
  argumentsValue?: any;               // 参数具体值
  logicOperator?: string | null;      // 逻辑操作符：'and', 'or', null
};

// 条件表达式项类型
type conditionExpressionItemType = {
  conditionItem: conditionItemType[];  // 条件项数组
  logicOperator?: string | null;       // 与下一组的连接符
};
```

### 操作符

| 操作符 | 说明 |
|--------|------|
| = | 等于 |
| != | 不等于 |
| > | 大于 |
| >= | 大于等于 |
| < | 小于 |
| <= | 小于等于 |
| Between | 在...之间（需用逗号分隔） |
| NotBetween | 不在...之间 |
| In | 包含（需用逗号分隔） |
| NotIn | 不包含 |

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | conditionExpressionItemType[] | 默认值 | 组件的值 |
| onChange | function | - | 值变化回调 |
| showParameter | boolean | true | 第一个参数是否展示 |
| parameterOptions | Array<{ label, value }> | - | 参数选项 |
| labelInValue | boolean | - | Select的labelInValue属性 |
| canFrontFilter | boolean | - | 是否支持前端筛选 |
| frontendFilterOptionFun | function | - | 前端筛选函数 |

### 默认值

```typescript
const ConditionExpressionDefaultValue = [
  {
    conditionItem: [
      {
        arguments: null,
        operator: '=',
        argumentsValue: null,
        logicOperator: null,
      },
    ],
    logicOperator: null,
  },
];
```
