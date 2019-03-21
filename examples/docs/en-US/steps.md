## Steps

Guide the user to complete tasks in accordance with the process. Its steps can be set according to the actual application scenario and the number of the steps can't be less than 2.

### Basic usage

Simple step bar.

:::demo Set `active` attribute with `Number` type, which indicates the index of steps and starts from 0. You can set `space` attribute when the width of the step needs to be fixed which accepts `Boolean` type. The unit of the `space` attribute is `px`. If not set, it is responsive. Setting the `finish-status` attribute can change the state of the steps that have been completed.

```html
<top-steps :active="active" finish-status="success">
  <top-step title="Step 1"></top-step>
  <top-step title="Step 2"></top-step>
  <top-step title="Step 3"></top-step>
</top-steps>

<top-button style="margin-top: 12px;" @click="next">Next step</top-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### Step bar that contains status

Shows the status of the step for each step.

:::demo Use `title` attribute to set the name of the step, or override the attribute by using a named `slot`. We have listed all the slot names for you at the end of this page.

```html
<top-steps :space="200" :active="1" finish-status="success">
  <top-step title="Done"></top-step>
  <top-step title="Processing"></top-step>
  <top-step title="Step 3"></top-step>
</top-steps>
```
:::

### Center 

Title and desription can be centered.

:::demo
```html
<top-steps :active="2" align-center>
  <top-step title="Step 1" description="Some description"></top-step>
  <top-step title="Step 2" description="Some description"></top-step>
  <top-step title="Step 3" description="Some description"></top-step>
  <top-step title="Step 4" description="Some description"></top-step>
</top-steps>
```
:::

### Step bar with description

There is description for each step.

:::demo
```html
<top-steps :active="1">
  <top-step title="Step 1" description="Some description"></top-step>
  <top-step title="Step 2" description="Some description"></top-step>
  <top-step title="Step 3" description="Some description"></top-step>
</top-steps>
```
:::

### Step bar with icon

A variety of custom icons can be used in the step bar.

:::demo The icon is set by the `icon` property. The types of icons can be found in the document for the Icon component. In addition, you can customize the icon through a named `slot`.

```html
<top-steps :active="1">
  <top-step title="Step 1" icon="top-icon-edit"></top-step>
  <top-step title="Step 2" icon="top-icon-upload"></top-step>
  <top-step title="Step 3" icon="top-icon-picture"></top-step>
</top-steps>
```
:::

### Vertical step bar

Vertical step bars.

:::demo You only need to set the `direction` attribute to` vertical` in the `top-steps` element.

```html
<div style="height: 300px;">
  <top-steps direction="vertical" :active="1">
    <top-step title="Step 1"></top-step>
    <top-step title="Step 2"></top-step>
    <top-step title="Step 3"></top-step>
  </top-steps>
</div>
```
:::

### Simple step bar
Simple step bars, where `align-center`, `description`, `direction` and `space` will be ignored.

:::demo
```html

<top-steps :space="200" :active="1" simple>
  <top-step title="Step 1" icon="top-icon-edit"></top-step>
  <top-step title="Step 2" icon="top-icon-upload"></top-step>
  <top-step title="Step 3" icon="top-icon-picture"></top-step>
</top-steps>

<top-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <top-step title="Step 1" ></top-step>
  <top-step title="Step 2" ></top-step>
  <top-step title="Step 3" ></top-step>
</top-steps>
```
:::

### Steps Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| space | the spacing of each step, will be responsive if omitted. Supports percentage. | number / string | — | — |
| direction | display direction | string | vertical/horizontal | horizontal |
| active | current activation step  | number | — | 0 |
| process-status | status of current step | string | wait / process / finish / error / success | process |
| finish-status | status of end step | string | wait / process / finish / error / success | finish |
| align-center | center title and description | boolean | — | false |
| simple | whether to apply simple theme | boolean | - | false |

### Step Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| title | step title | string | — | — |
| description | step description | string | — | — |
| icon | step icon | step icon's class name. Icons can be passed via named slot as well | string | — |
| status | current status. It will be automatically set by Steps if not configured. | wait / process / finish / error / success | - |

### Step Slot
| Name | Description |
|----|----|
| icon | custom icon |
| title | step title |
| description | step description |

