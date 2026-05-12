# Other Components

本文档覆盖除 TableMax、权限、ConfigProvider、Filter 外的常用公开导出组件。

## 当前不要当成根包公开组件

以下能力不要写进根包导入示例：

- `ThemeProvider`
- `MicroComponent`
- `ColorSelector`

## CustomForm

根包导入：

```ts
import {
  CustomForm,
  CustomFormItemType,
  type CustomFormProps,
  type CustomSearchFieldType,
} from '@arim-aisdc/public-components';
```

常用表单枚举：

- `Text`
- `TextArea`
- `Number`
- `Switch`
- `Select`
- `Cascader`
- `RemoteCascader`
- `DateTime`
- `DateRang`
- `Interval`
- `Radio`
- `StartEnd`
- `AutoComplete`
- `MinMax`
- `CheckBox`
- `Color`
- `ConditionExpression`
- `RemoteSelect`
- `UploadImg`

## QueryFilter

根包导入：

```ts
import {
  QueryFilter,
  FormItemType,
  TimeFormatType,
  PickerType,
  type QueryFilterProps,
  type searchFieldType,
} from '@arim-aisdc/public-components';
```

额外公开导出：

- `typeList`
- `useDynamicSearchFiled`

## SchemaForm

根包导入：

```ts
import {
  SchemaForm,
  DataSourceTypeEnum,
  FormActionEnum,
  ProFieldValueTypeEnum,
  type ISchemaFormProps,
  type ILayoutType,
} from '@arim-aisdc/public-components';
```

注意：

- 当前 `SchemaForm` 配置字段叫 `formConfig`
- 不是旧文档里常见的 `columns`
- 支持 `layoutType: 'Form' | 'DrawerForm' | 'ModalForm' | 'QueryFilter' | 'LightFilter'`

## Empty

```tsx
import { Empty } from '@arim-aisdc/public-components';

<Empty />;
```

当前实现 props：

- `emptyDarkImage?: any`
- `emptyLightImage?: any`
- `text?: string`

注意：

- 源码中当前默认展示文案来自内部翻译 `t('global.text.emptyText')`
- 即使传入 `text`，现实现也没有真正使用这个 prop
- 文档应将其视为“声明存在，但当前实现未生效”

## CenterModal

根包导入：

```ts
import { CenterModal, type CenterModalPropsType } from '@arim-aisdc/public-components';
```

关键 props：

- `open`
- `title`
- `okText`
- `hasfooter`
- `footer`
- `width`
- `height`
- `renderContent`
- `maskClosable`
- `handleConfirm`
- `handleCancel`
- `confirmLoading`
- `enableResizing`
- `enableDragging`

## DrawerCom

根包导入：

```ts
import { DrawerCom, type DrawerPropsType } from '@arim-aisdc/public-components';
```

关键 props：

- `open`
- `title`
- `placement`
- `width`
- `height`
- `renderContent`
- `handleConfirm`
- `handleCancel`
- `bodyStyle`

## SplitPane

根包导入：

```ts
import {
  SplitPane,
  SplitTypeList,
  PrimaryList,
  type SplitPaneModuleType,
} from '@arim-aisdc/public-components';
```

除了组件本身，当前还公开导出：

- `DomNames`
- `PrimaryList`
- `SplitSizeType`
- `SplitTypeList`
- `ProjectName`
- `delLocalStorageItem`
- `emptyValueList`
- `getComponentsSize`
- `getCurrentRouterName`
- `getLocalStorageItem`
- `getProAndUserKey`
- `setLocalStorageItem`
- `setSplitSizeData`

## SplitterPane

`SplitterPane` 与 `SplitPane` 是不同实现，均可从根包导入。涉及其布局时，优先以实际业务页面现有用法为准。

## DraggableBox

根包导入：

```ts
import { DraggableBox, type DraggableBoxPropsType } from '@arim-aisdc/public-components';
```

关键 props：

- `open`
- `isShow`
- `renderContent`
- `width`
- `height`
- `position`
- `bounds`
- `handleCancel`

## Icon

根包导入：

```ts
import { Icon } from '@arim-aisdc/public-components';
```

关键 props：

- `type?: 'colours' | 'gray'`
- `name?: string`
- `prefix?: string`
- `className?: string`
- `style?: any`
- `onClick?: (event) => void`
- `animationData?`
- `animationType?: 'loop' | 'click' | 'hover'`

## MessageTip

根包导入：

```ts
import { MessageTip, type MessageTipPropTypes, type tipType } from '@arim-aisdc/public-components';
```

常用方法：

- `MessageTip.success(info)`
- `MessageTip.error(info)`
- `MessageTip.attention(info)`
- `MessageTip.info(info)`
- `MessageTip.loading(info)`

`info` 常用字段：

- `key?: string`
- `content?: any`
- `duration?: number`
- `onClose?: any`

注意：

- 这是当前根包公开导出的全局提示能力。
- 优先用于轻量消息反馈，不要再从内部 `GlobalTip/MessageTip` 路径导入。

## ModalTip

根包导入：

```ts
import { ModalTip, type ModalTipType, type ModalDeleteType } from '@arim-aisdc/public-components';
```

常用方法：

- `ModalTip.loading(info)`
- `ModalTip.success(info)`
- `ModalTip.error(info)`
- `ModalTip.info(info)`
- `ModalTip.attention(info)`
- `ModalTip.delete(info)`

`ModalTipType` 常用字段：

- `type?: 'loading' | 'success' | 'error' | 'info' | 'attention'`
- `title?: string | JSX.Element`
- `content?: string | JSX.Element`
- `duration?: number`
- `afterClose?: () => void`

`ModalDeleteType` 常用字段：

- `handlerConfirm: () => void`
- `handlerCancel?: () => void`
- `title?: string`
- `content?: string`
- `okText?: string`
- `cancelText?: string`
- `centered?: boolean`

注意：

- `ModalTip` 已从根包公开导出，适合全局确认、删除确认和状态型弹窗提示。
- 不要为了使用 `themeStyle` 或内部工具而默认引入内部路径；只有用户明确要求内部能力时再讨论风险。

## CacheTabs

根包导入：

```ts
import { CacheTabs, type CacheTabsProps } from '@arim-aisdc/public-components';
```

当前源码 props：

- `useAliveController: any`
- `pathname: string`
- `history: any`
- `nodeList?: any`
- `shouldCache: boolean`

这不是通用 Tabs 封装，而是强依赖 keep-alive 场景的缓存标签页组件。

## BaseInfo

根包导入：

```ts
import { BaseInfo, type BaseInfoFieldType, foramtBaseInfoField } from '@arim-aisdc/public-components';
```

常用字段：

- `field`
- `label`
- `text`
- `value`
- `units`
- `width`
- `labelWidth`
- `color`
- `disabledColor`
- `formatFun`
- `detail`
- `isShowInterval`
- `isShowToolTip`
