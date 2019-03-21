## Button

Commonly used button.

### Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

```html
<top-row>
  <top-button>Default</top-button>
  <top-button type="primary">Primary</top-button>
  <top-button type="success">Success</top-button>
  <top-button type="info">Info</top-button>
  <top-button type="warning">Warning</top-button>
  <top-button type="danger">Danger</top-button>
</top-row>

<top-row>
  <top-button plain>Plain</top-button>
  <top-button type="primary" plain>Primary</top-button>
  <top-button type="success" plain>Success</top-button>
  <top-button type="info" plain>Info</top-button>
  <top-button type="warning" plain>Warning</top-button>
  <top-button type="danger" plain>Danger</top-button>
</top-row>

<top-row>
  <top-button round>Round</top-button>
  <top-button type="primary" round>Primary</top-button>
  <top-button type="success" round>Success</top-button>
  <top-button type="info" round>Info</top-button>
  <top-button type="warning" round>Warning</top-button>
  <top-button type="danger" round>Danger</top-button>
</top-row>

<top-row>
  <top-button icon="top-icon-search" circle></top-button>
  <top-button type="primary" icon="top-icon-edit" circle></top-button>
  <top-button type="success" icon="top-icon-check" circle></top-button>
  <top-button type="info" icon="top-icon-message" circle></top-button>
  <top-button type="warning" icon="top-icon-star-off" circle></top-button>
  <top-button type="danger" icon="top-icon-delete" circle></top-button>
</top-row>
```
:::

### Disabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```html
<top-row>
  <top-button disabled>Default</top-button>
  <top-button type="primary" disabled>Primary</top-button>
  <top-button type="success" disabled>Success</top-button>
  <top-button type="info" disabled>Info</top-button>
  <top-button type="warning" disabled>Warning</top-button>
  <top-button type="danger" disabled>Danger</top-button>
</top-row>

<top-row>
  <top-button plain disabled>Plain</top-button>
  <top-button type="primary" plain disabled>Primary</top-button>
  <top-button type="success" plain disabled>Success</top-button>
  <top-button type="info" plain disabled>Info</top-button>
  <top-button type="warning" plain disabled>Warning</top-button>
  <top-button type="danger" plain disabled>Danger</top-button>
</top-row>
```
:::

### Text Button

Buttons without border and background.

:::demo
```html
<top-button type="text">Text Button</top-button>
<top-button type="text" disabled>Text Button</top-button>
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```html
<top-button type="primary" icon="top-icon-edit"></top-button>
<top-button type="primary" icon="top-icon-share"></top-button>
<top-button type="primary" icon="top-icon-delete"></top-button>
<top-button type="primary" icon="top-icon-search">Search</top-button>
<top-button type="primary">Upload<i class="top-icon-upload top-icon-right"></i></top-button>
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `<top-button-group>` to group your buttons.

```html
<top-button-group>
  <top-button type="primary" icon="top-icon-arrow-left">Previous Page</top-button>
  <top-button type="primary">Next Page<i class="top-icon-arrow-right top-icon-right"></i></top-button>
</top-button-group>
<top-button-group>
  <top-button type="primary" icon="top-icon-edit"></top-button>
  <top-button type="primary" icon="top-icon-share"></top-button>
  <top-button type="primary" icon="top-icon-delete"></top-button>
</top-button-group>
```
:::

### Loading Button

Click the button to load data, then the button displays a loading state.

:::demo Set `loading` attribute to `true` to display loading state.

```html
<top-button type="primary" :loading="true">Loading</top-button>
```
:::

### Sizes

Besides default size, Button component provides three additional sizes for you to choose among different scenarios.

:::demo Use attribute `size` to set additional sizes with `medium`, `small` or `mini`.

```html
<top-row>
  <top-button>Default</top-button>
  <top-button size="medium">Medium</top-button>
  <top-button size="small">Small</top-button>
  <top-button size="mini">Mini</top-button>
</top-row>
<top-row>
  <top-button round>Default</top-button>
  <top-button size="medium" round>Medium</top-button>
  <top-button size="small" round>Small</top-button>
  <top-button size="mini" round>Mini</top-button>
</top-row>
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   medium / small / mini            |    —     |
| type     | button type   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | determine whether it's a plain button   | boolean    | — | false   |
| round     | determine whether it's a round button   | boolean    | — | false   |
| circle     | determine whether it's a circle button   | boolean    | — | false   |
| loading   | determine whether it's loading   | boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | icon class name | string   |  —  |  —  |
| autofocus  | same as native button's `autofocus` | boolean   |  —  |  false  |
| native-type | same as native button's `type` | string | button / submit / reset | button |