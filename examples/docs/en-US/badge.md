## Badge

A number or status mark on buttons and icons.

### Basic usage

Displays the amount of new messages.

:::demo The amount is defined with `value` which accepts `Number` or `String`.

```html
<top-badge :value="12" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="3" class="item">
  <top-button size="small">replies</top-button>
</top-badge>
<top-badge :value="1" class="item" type="primary">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="2" class="item" type="warning">
  <top-button size="small">replies</top-button>
</top-badge>

<top-dropdown trigger="click">
  <span class="top-dropdown-link">
    Click Me<i class="top-icon-caret-bottom top-icon--right"></i>
  </span>
  <top-dropdown-menu slot="dropdown">
    <top-dropdown-item class="clearfix">
      comments
      <top-badge class="mark" :value="12" />
    </top-dropdown-item>
    <top-dropdown-item class="clearfix">
      replies
      <top-badge class="mark" :value="3" />
    </top-dropdown-item>
  </top-dropdown-menu>
</top-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Max value

You can customize the max value.

:::demo The max value is defined by property `max` which is a `Number`. Note that it only works when `value` is also a `Number`.

```html
<top-badge :value="200" :max="99" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="100" :max="10" class="item">
  <top-button size="small">replies</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Customizations

Displays text content other than numbers.

:::demo When `value` is a `String`, it can display customized text.

```html
<top-badge value="new" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge value="hot" class="item">
  <top-button size="small">replies</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Little red dot

Use a red dot to mark content that needs to be noticed.

:::demo Use the attribute `is-dot`. It is a `Boolean`.

```html
<top-badge is-dot class="item">query</top-badge>
<top-badge is-dot class="item">
  <top-button class="share-button" icon="top-icon-share" type="primary"></top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| Attribute     | Description     | Type            | Accepted Values       | Default |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | display value   | string, number  |          —            |    —    |
| max           |  maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`   | number  |         —              |     —    |
| is-dot        | if a little dot is displayed | boolean   |    —           |  false  |
| hidden        | hidden badge    | boolean         |          —            |  false  |
| type          | button type     | string          | primary / success / warning / danger / info |   —  |
