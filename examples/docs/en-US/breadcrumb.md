## Breadcrumb

Displays the location of the current page, making it easier to browser back.

### Basic usage


:::demo In `top-breadcrumb`, each `top-breadcrumb-item` is a tag that stands for every level starting from homepage. This component has a `String` attribute `separator`, and it determines the separator. Its default value is '/'.

```html
<top-breadcrumb separator="/">
  <top-breadcrumb-item :to="{ path: '/' }">homepage</top-breadcrumb-item>
  <top-breadcrumb-item><a href="/">promotion management</a></top-breadcrumb-item>
  <top-breadcrumb-item>promotion list</top-breadcrumb-item>
  <top-breadcrumb-item>promotion detail</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Icon separator

:::demo Set `separator-class` to use `iconfont` as the separator，it will cover `separator`

```html
<top-breadcrumb separator-class="top-icon-arrow-right">
  <top-breadcrumb-item :to="{ path: '/' }">homepage</top-breadcrumb-item>
  <top-breadcrumb-item>promotion management</top-breadcrumb-item>
  <top-breadcrumb-item>promotion list</top-breadcrumb-item>
  <top-breadcrumb-item>promotion detail</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Breadcrumb Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | separator character | string | — | / |
| separator-class | class name of icon separator | string | — | - |

### Breadcrumb Item Attributes
| Attribute      | Description          | Type      | Accepted Values            | Default|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | target route of the link, same as `to` of `vue-router` | string/object | — | — |
| replace | if `true`, the navigation will not leave a history record | boolean | — | false |





