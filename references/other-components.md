# 其他核心组件

## ThemeProvider

支持明暗主题切换和自定义主题变量。

```typescript
import { ThemeProvider } from '@arim-aisdc/public-components';

<ThemeProvider
  theme="dark"
  variablesConfig={{
    '--global-primary-color': '#1890ff',
    '--global-default-text-color': '#ffffff',
    '--table-row-hover-bgc': '#f0f0f0',
    '--global-curd-input-background-color': '#494c5d',
  }}
>
  <App />
</ThemeProvider>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| theme | 'light' \| 'dark' | 'light' | 主题类型 |
| variablesConfig | object | - | 自定义主题变量配置 |
| children | ReactNode | - | 子组件 |

## CustomForm

自定义表单组件。

```typescript
import { CustomForm } from '@arim-aisdc/public-components';

const formFields = [
  {
    field: 'name',
    label: '姓名',
    formType: CustomFormItemType.Text,
    required: true,
  },
];

<CustomForm
  data={formFields}
  handleSubmit={handleSubmit}
  layout="horizontal"
/>
```

### 表单类型 CustomFormItemType

| 类型 | 说明 |
|------|------|
| Text | 文本输入 |
| TextArea | 文本域 |
| Number | 数字输入 |
| Switch | 开关 |
| Select | 选择器 |
| Cascader | 级联选择 |
| RemoteCascader | 远程级联选择 |
| DateTime | 日期时间 |
| DateRang | 日期范围 |
| Interval | 区间输入 |
| Radio | 单选 |
| StartEnd | 起止输入 |
| AutoComplete | 自动完成 |
| MinMax | 最小最大值 |
| CheckBox | 复选框 |
| Color | 颜色选择 |
| ConditionExpression | 条件表达式 |
| RemoteSelect | 远程选择 |
| UploadImg | 图片上传 |

### CustomFormProps

| 属性 | 类型 | 说明 |
|------|------|------|
| data | CustomSearchFieldType[] | 表单字段配置 |
| initialValues | object | 初始值 |
| labelCol | string | labelWidth |
| isOkText | string | 确认按钮文字 |
| cancelText | string | 取消按钮文字 |
| handleSubmit | function | 提交回调 |
| handleCancel | function | 取消回调 |
| span | SpanConfig | 栅格占位格数 |
| layout | 'horizontal' \| 'inline' \| 'vertical' | 布局方式 |
| showButton | boolean | 是否展示按钮 |
| submitLoading | boolean | 提交loading状态 |
| labelAlign | FormLabelAlign | label对齐方式 |
| usage | string | 用途 'filter' \| 'submit' |

## QueryFilter

查询筛选器组件。

```typescript
import { QueryFilter } from '@arim-aisdc/public-components';

<QueryFilter
  data={filterFields}
  initialValues={initialValues}
  handleSubmit={handleSubmit}
  handleCancel={handleCancel}
  showButton={true}
/>
```

### 表单类型 FormItemType

| 类型 | 说明 |
|------|------|
| Text | 文本输入 |
| TextArea | 文本域 |
| Number | 数字输入 |
| Switch | 开关 |
| Select | 选择器 |
| RemoteSelect | 远程选择 |
| Cascader | 级联选择 |
| RemoteCascader | 远程级联选择 |
| DateTime | 日期时间 |
| DateRang | 日期范围 |
| Interval | 区间输入 |
| Radio | 单选 |
| StartEnd | 起止输入 |
| AutoComplete | 自动完成 |
| MinMax | 最小最大值 |
| CheckBox | 复选框 |

### 时间格式 TimeFormatType

| 类型 | 格式 |
|------|------|
| monthType | 'YYYY-MM' |
| dayType | 'YYYY-MM-DD' |
| hourType | 'YYYY-MM-DD HH' |
| minuteType | 'YYYY-MM-DD HH:mm' |
| secondType | 'YYYY-MM-DD HH:mm:ss' |
| nonYearMinuteType | 'MM-DD HH:mm' |
| nonYearSecondType | 'MM-DD HH:mm:ss' |
| onlyTimeType | 'HH:mm:ss' |
| nonSecondTimeType | 'HH:mm' |

## SchemaForm

基于 ProComponents 的 Schema 驱动表单，支持动态表单配置和多种数据源。

```typescript
import { SchemaForm, ProFieldValueTypeEnum, DataSourceTypeEnum } from '@arim-aisdc/public-components';

<SchemaForm
  layoutType="ModalForm"
  title="创建用户"
  open={visible}
  onOpenChange={setVisible}
  columns={columns}
  onFinish={async (values) => {
    await createUser(values);
    return true;
  }}
/>
```

### ProFieldValueTypeEnum

| 类型 | 说明 |
|------|------|
| Text | 文本输入 |
| Select | 下拉选择 |
| Radio | 单选 |
| Checkbox | 复选 |
| DatePicker | 日期选择 |
| DateTimePicker | 日期时间选择 |
| DateRangePicker | 日期范围 |
| TextArea | 文本域 |
| Digit | 数字输入 |
| Money | 金额输入 |
| Password | 密码输入 |
| Switch | 开关 |

### DataSourceTypeEnum

| 类型 | 说明 |
|------|------|
| Static | 静态数据 |
| Remote | 远程数据 |

## Empty

用于显示空数据状态。

```typescript
import { Empty } from '@arim-aisdc/public-components';

<Empty
  emptyDarkImage={customDarkImage}
  emptyLightImage={customLightImage}
  text="暂无数据"
/>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| emptyDarkImage | string | - | 自定义暗色主题空状态图片 |
| emptyLightImage | string | - | 自定义亮色主题空状态图片 |
| text | string | - | 自定义文本 |

## CenterModal

居中弹窗，支持拖拽和调整大小。

```typescript
import { CenterModal } from '@arim-aisdc/public-components';

<CenterModal
  open={visible}
  title="标题"
  handleConfirm={handleOk}
  handleCancel={handleCancel}
  okText="确认"
  cancelText="取消"
  width={520}
  maskClosable={false}
  enableResizing={true}
  enableDragging={true}
>
  弹窗内容
</CenterModal>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| open | boolean | - | 弹窗（开关）状态 |
| title | JSX.Element | - | 弹窗标题 |
| okText | string | - | 确认按钮文字 |
| hasfooter | boolean | - | 是否需要底部按钮 |
| footer | ReactNode | - | 自定义底部按钮 |
| width | number \| string | - | 宽度 |
| size | string | - | Modal的类名 |
| renderContent | JSX.Element | - | 弹窗内容 |
| maskClosable | boolean | - | 点击蒙层是否允许关闭 |
| handleConfirm | function | - | 点击确定回调 |
| handleCancel | function | - | 取消回调 |
| confirmLoading | boolean | - | 确认按钮的loading |
| bodyStyle | object | - | Modal body 样式 |
| afterClose | function | - | Modal 完全关闭后的回调 |
| enableResizing | boolean | - | 是否可调整大小 |
| enableDragging | boolean | - | 是否可拖动 |
| minResizeWidth | number \| string | - | 可调整最小宽度 |
| minResizeHeight | number \| string | - | 可调整最小高度 |
| maxResizeWidth | number \| string | - | 可调整最大宽度 |
| maxResizeHeight | number \| string | - | 可调整最大高度 |
| height | number \| string | - | 高度 |

## DrawerCom

抽屉组件。

```typescript
import { DrawerCom } from '@arim-aisdc/public-components';

<DrawerCom
  open={visible}
  title="标题"
  placement="right"
  handleConfirm={handleOk}
  handleCancel={handleClose}
  width={300}
  height={300}
>
  抽屉内容
</DrawerCom>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| open | boolean | - | 是否显示 |
| title | JSX.Element | - | 抽屉标题 |
| placement | 'left' \| 'top' \| 'right' \| 'bottom' | 'right' | 位置 |
| handleConfirm | function | - | 确认回调 |
| handleCancel | function | - | 关闭回调 |
| width | number | - | 宽度（left/right时） |
| height | number | - | 高度（top/bottom时） |
| renderContent | JSX.Element | - | 抽屉内容 |
| bodyStyle | object | - | 抽屉内容区域样式 |

## SplitPane

分割面板组件。

```typescript
import { SplitPane } from '@arim-aisdc/public-components';
import { SplitTypeList, PrimaryList } from './config';

<SplitPane
  splitType={SplitTypeList.horizontal}
  splitPrimary={PrimaryList.firstComponent}
  defaultSize="50%"
  minSize="10%"
  maxSize="90%"
  pane1Dom={<LeftContent />}
  pane2Dom={<RightContent />}
  currentModulePageName="pageName"
  currentModuleDataName="moduleName"
  routerName="routerName"
  pane1Name="pane1"
  pane2Name="pane2"
  userId="user123"
  dragFinished={handleResize}
/>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| splitType | SplitType | SplitTypeList.horizontal | 拖拽类型 'horizontal' \| 'vertical' |
| splitPrimary | SplitPrimary | PrimaryList.firstComponent | 拖拽目标组件 |
| defaultSize | Size | - | 默认尺寸 |
| minSize | Size | 50 | 拖拽最小值 |
| maxSize | Size | - | 拖拽最大值 |
| splitStep | number | - | 拖拽步数 |
| pane1Dom | JSX.Element | - | 第一个dom |
| pane2Dom | JSX.Element | - | 第二个dom |
| allowResize | boolean | true | 是否可以拖动 |
| resizerClassName | string | - | 拖拽杆类名 |
| resizerStyle | React.CSSProperties | - | 拖拽杆样式 |
| paneStyle | React.CSSProperties | - | 子组件公共样式 |
| pane1Style | React.CSSProperties | - | 第一个组件样式 |
| pane2Style | React.CSSProperties | - | 第二个组件样式 |
| splitStyle | React.CSSProperties | - | SplitPane父层样式 |
| currentModulePageName | string | - | 当前页面名称（用于缓存） |
| currentModuleDataName | string | - | 当前模块名称（用于缓存） |
| routerName | string | - | 当前路由名称（用于缓存） |
| pane1Name | string | - | 第一个组件名称（用于缓存） |
| pane2Name | string | - | 第二个组件名称（用于缓存） |
| userId | string | - | 用户id（用于缓存） |
| dragFinished | function | - | 拖拽完成事件 |

## DraggableBox

可拖拽盒子组件。

```typescript
import { DraggableBox } from '@arim-aisdc/public-components';

<DraggableBox
  open={true}
  isShow={true}
  renderContent={<Content />}
  width={400}
  height={300}
  position={{ left: 100, top: 100 }}
  bounds={{ left: 0, right: 800, top: 0, bottom: 600 }}
  handleCancel={handleClose}
/>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| open | boolean | - | 是否显示 |
| isShow | boolean | - | 是否显示 |
| renderContent | JSX.Element | - | 拖拽内容 |
| width | number | - | 宽度 |
| height | number | - | 高度 |
| position | { left?, right?, top?, bottom? } | - | 初始位置 |
| handleCancel | function | - | 关闭回调 |
| bounds | { left?, right?, top?, bottom? } | - | 边界限制 |

## Icon

图标组件。

```typescript
import { Icon } from '@arim-aisdc/public-components';

<Icon
  prefix="other"
  name="add"
  size={16}
  color="#1890ff"
  className="custom-icon"
  onClick={handleClick}
/>
```

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| prefix | string | - | 图标前缀 |
| name | string | - | 图标名称 |
| size | number | - | 图标大小 |
| color | string | - | 图标颜色 |
| className | string | - | 自定义类名 |
| onClick | function | - | 点击回调 |

## CacheTabs

缓存标签页组件。

```typescript
import { CacheTabs } from '@arim-aisdc/public-components';

<CacheTabs
  activeKey={activeKey}
  onChange={handleChange}
  items={items}
  type="card"
  size="default"
/>
```

## BaseInfo

基础信息展示组件。

```typescript
import { BaseInfo } from '@arim-aisdc/public-components';

const fields: BaseInfoFieldType[] = [
  { field: 'name', text: '姓名', value: '张三' },
  { field: 'age', text: '年龄', value: 25, units: '岁' },
];

<BaseInfo
  data={fields}
  layout="vertical"
  labelWidth={120}
  bordered={true}
/>
```

### BaseInfoFieldType

| 属性 | 类型 | 说明 |
|------|------|------|
| field | string | 字段 |
| label | string | 标签 |
| text | string \| Element \| JSX.Element | 显示文本 |
| value | any | 值 |
| units | string | 单位 |
| width | string | 宽度 |
| labelWidth | string | 标签宽度 |
| color | string | 颜色 |
| disabledColor | string | 未完成的颜色 |
| formatFun | function | 数据格式化方法 |
| detail | object | 全部数据 |
| isShowInterval | boolean | 是否显示区间选项 |
| isShowToolTip | boolean | 是否超出隐藏显示tooltip |
