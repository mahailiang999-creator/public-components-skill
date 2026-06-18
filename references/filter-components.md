# Filter Components

源码校准基准：

- `src/components/Filter/*`
- `src/components/ConditionExpression/index.tsx`

## 根包导入

```ts
import {
  FilterSelect,
  FilterInputNumber,
  FilterSlider,
  FilterSwitch,
  FilterColor,
  FilterRadio,
  ConditionExpression,
} from '@arim-aisdc/public-components';
```

## FilterSelect

```tsx
<FilterSelect
  title="Status"
  name="status"
  defaultValue="1"
  dataList={[
    { label: 'Enabled', value: '1' },
    { label: 'Disabled', value: '0' },
  ]}
  filterReturnEvt={console.log}
/>
```

当前源码 props：

- `title?: string`
- `name: string`
- `defaultValue?: string | number`
- `dataList: { label: string; value: string | number }[]`
- `filterReturnEvt: Function`
- `width?: number`
- `labelWidth?: number`
- `marginBottom?: number`

## FilterInputNumber

当前源码更偏向简单单值输入，不是区间版。

Props：

- `title?: string`
- `name?: string`
- `defaultValue?: number`
- `value?: number`
- `filterReturnEvt?: Function`
- `width?: number`
- `labelWidth?: number`
- `marginBottom?: number`
- `max?: number`
- `min?: number`
- `step?: number`

## FilterSlider

Props：

- `title: string`
- `name?: string`
- `maxValue: number`
- `minValue: number`
- `defaultValue: number`
- `filterReturnEvt: Function`
- `width?: number`
- `labelWidth?: number`
- `marginSpace?: string | number`

注意：

- 当前实现使用 `value={defaultValue}`，更接近受控初值展示，不是完整 antd Slider API 透传

## FilterSwitch

Props：

- `title: string`
- `name?: string`
- `defaultValue: boolean`
- `filterReturnEvt: Function`
- `width?: number`
- `labelWidth?: number`
- `marginBottom?: number`

## FilterColor

Props：

- `title: string`
- `name: string`
- `size?: 'small' | 'middle' | 'large'`
- `filterReturnEvt: Function`
- `defaultColor?: string`
- `align?: 'left' | 'right'`
- `width?: number`
- `labelWidth?: number`

注意：

- 这是独立过滤组件，不等于根包未公开导出的 `ColorSelector`
- 当前内部使用 `react-color` 的 `SketchPicker`

## FilterRadio

Props：

- `title?: string`
- `name: string`
- `defaultValue?: string | number`
- `dataList: { label: string; value: string | number }[]`
- `filterReturnEvt: Function`
- `width?: number`
- `labelWidth?: number`
- `isShowLabel?: boolean`
- `hasMargin?: boolean`

## ConditionExpression

```tsx
<ConditionExpression
  value={conditions}
  onChange={setConditions}
  showParameter
  parameterOptions={[
    { label: 'Name', value: 'name' },
    { label: 'Age', value: 'age' },
  ]}
/>
```

Props：

- `value?: conditionExpressionItemType[]`
- `onChange?: (value) => void`
- `showParameter?: boolean`
- `parameterOptions?: ConditionExpressionOptionType[]`
- `parameterOptionsRequest?: (params) => Promise<ConditionExpressionParameterOptionsRequestResult>`
- `parameterOptionsPageSize?: number`
- `labelInValue?: boolean`
- `canFrontFilter?: boolean`
- `frontendFilterOptionFun?: (input, option) => boolean`

远程参数选项类型：

```ts
type ConditionExpressionOptionType = {
  label: any;
  value: any;
  [key: string]: any;
};

type ConditionExpressionParameterOptionsRequestParams = {
  page: number;
  pageSize: number;
  keyword?: string;
  groupIndex?: number;
  conditionIndex?: number;
};

type ConditionExpressionParameterOptionsRequestResult =
  | ConditionExpressionOptionType[]
  | {
      options: ConditionExpressionOptionType[];
      total?: number;
      hasMore?: boolean;
    };
```

远程参数选项示例：

```tsx
<ConditionExpression
  value={conditions}
  onChange={setConditions}
  parameterOptions={[{ label: '静态字段', value: 'staticField' }]}
  parameterOptionsRequest={async ({ page, pageSize, keyword }) => {
    const response = await fetchFields({ page, pageSize, keyword });
    return {
      options: response.items.map(item => ({ label: item.name, value: item.code })),
      total: response.totalCount,
    };
  }}
  parameterOptionsPageSize={20}
/>;
```

远程选项行为：

- 打开参数下拉框时加载第一页。
- 输入搜索有 500ms debounce，会把页码重置为 1。
- 下拉滚动到底部且仍有更多数据时继续加载下一页。
- 静态 `parameterOptions` 会和远程返回选项合并，按 `value` 去重。
- 传入 `parameterOptionsRequest` 后，组件内部使用远程搜索，`filterOption` 会设为 `false`；不要再依赖前端筛选。

默认值结构：

```ts
[
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
]
```

支持操作符：

- `=`
- `!=`
- `>`
- `>=`
- `<`
- `<=`
- `Between`
- `NotBetween`
- `In`
- `NotIn`
