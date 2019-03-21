## Radio

Single selection among multiple options.

### Basic usage

Radio should not have too many options. Otherwise, use the Select component instead.

:::demo Creating a radio component is easy, you just need to bind a variable to Radio's `v-model`. It equals to the value of `label` of the chosen radio. The type of `label` is `String`, `Number` or `Boolean`.
```html
<template>
  <top-radio v-model="radio" label="1">Option A</top-radio>
  <top-radio v-model="radio" label="2">Option B</top-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### Disabled

`disabled` attribute is used to disable the radio.

:::demo You just need to add the `disabled` attribute.
```html
<template>
  <top-radio disabled v-model="radio1" label="disabled">Option A</top-radio>
  <top-radio disabled v-model="radio1" label="selected and disabled">Option B</top-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio1: 'selected and disabled'
      };
    }
  }
</script>
```
:::

### Radio button group

Suitable for choosing from some mutually exclusive options.

:::demo Combine `top-radio-group` with `top-radio` to display a radio group. Bind a variable with `v-model` of `top-radio-group` element and set label value in `top-radio`. It also provides `change` event with the current value as its parameter.

```html
<top-radio-group v-model="radio2">
  <top-radio :label="3">Option A</top-radio>
  <top-radio :label="6">Option B</top-radio>
  <top-radio :label="9">Option C</top-radio>
</top-radio-group>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
:::

### Button style

Radio with button styles.

:::demo You just need to change `top-radio` element into `top-radio-button` element. We also provide `size` attribute.
```html
<template>
  <div>
    <top-radio-group v-model="radio3">
      <top-radio-button label="New York"></top-radio-button>
      <top-radio-button label="Washington"></top-radio-button>
      <top-radio-button label="Los Angeles"></top-radio-button>
      <top-radio-button label="Chicago"></top-radio-button>
    </top-radio-group>
  </div>
  <div style="margin-top: 20px">
    <top-radio-group v-model="radio4" size="medium">
      <top-radio-button label="New York" ></top-radio-button>
      <top-radio-button label="Washington"></top-radio-button>
      <top-radio-button label="Los Angeles"></top-radio-button>
      <top-radio-button label="Chicago"></top-radio-button>
    </top-radio-group>
  </div>
  <div style="margin-top: 20px">
    <top-radio-group v-model="radio5" size="small">
      <top-radio-button label="New York"></top-radio-button>
      <top-radio-button label="Washington" disabled ></top-radio-button>
      <top-radio-button label="Los Angeles"></top-radio-button>
      <top-radio-button label="Chicago"></top-radio-button>
    </top-radio-group>
  </div>
  <div style="margin-top: 20px">
    <top-radio-group v-model="radio6" disabled size="mini">
      <top-radio-button label="New York"></top-radio-button>
      <top-radio-button label="Washington"></top-radio-button>
      <top-radio-button label="Los Angeles"></top-radio-button>
      <top-radio-button label="Chicago"></top-radio-button>
    </top-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: 'New York',
        radio4: 'New York',
        radio5: 'New York',
        radio6: 'New York'
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Radios.
```html
<template>
  <div>
    <top-radio v-model="radio7" label="1" border>Option A</top-radio>
    <top-radio v-model="radio7" label="2" border>Option B</top-radio>
  </div>
  <div style="margin-top: 20px">
    <top-radio v-model="radio8" label="1" border size="medium">Option A</top-radio>
    <top-radio v-model="radio8" label="2" border size="medium">Option B</top-radio>
  </div>
  <div style="margin-top: 20px">
    <top-radio-group v-model="radio9" size="small">
      <top-radio label="1" border>Option A</top-radio>
      <top-radio label="2" border disabled>Option B</top-radio>
    </top-radio-group>
  </div>
  <div style="margin-top: 20px">
    <top-radio-group v-model="radio10" size="mini" disabled>
      <top-radio label="1" border>Option A</top-radio>
      <top-radio label="2" border>Option B</top-radio>
    </top-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      };
    }
  }
</script>
```
:::

### Radio Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | binding value | string / number / boolean | — | —
label | the value of Radio | string / number / boolean | — | —
disabled | whether Radio is disabled | boolean | — | false
border  | whether to add a border around Radio  | boolean   | — | false
size  | size of the Radio, only works when `border` is true  | string  | medium / small / mini | —
name | native 'name' attribute | string    |      —         |     —

### Radio Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-group Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
value / v-model | binding value | string / number / boolean | — | —
size | the size of radio buttons or bordered radios | string | medium / small / mini | —
disabled  | whether the nesting radios are disabled | boolean   | — | false
text-color | font color when button is active | string   | — | #ffffff   |
fill  | border and background color when button is active | string   | — | #409EFF   |

### Radio-group Events

| Event Name | Description | Parameters |
| --- | --- | --- |
| change | triggers when the bound value changes | the label value of the chosen radio |

### Radio-button Attributes

 Attribute      | Description          | Type      | Accepted Values       | Default
---- | ---- | ---- | ---- | ----
label | the value of radio | string / number | — | —
disabled | whether radio is disabled | boolean | — | false
name | native 'name' attribute | string    |      —         |     —
