## Checkbox

A group of options for multiple choices.

### Basic usage

Checkbox can be used alone to switch between two states.

:::demo Define `v-model`(bind variable) in `top-checkbox`. The default value is a `Boolean` for single `checkbox`, and it becomes `true` when selected. Content inside the `top-checkbox` tag will become the description following the button of the checkbox.

```html
<template>
  <!-- `checked` should be true or false -->
  <top-checkbox v-model="checked">Option</top-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::

### Disabled State

Disabled state for checkbox.

:::demo Set the `disabled` attribute.

```html
<template>
  <top-checkbox v-model="checked1" disabled>Option</top-checkbox>
  <top-checkbox v-model="checked2" disabled>Option</top-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>
```
:::

### Checkbox group

It is used for multiple checkboxes which are bound in one group, and indicates whether one option is selected by checking if it is checked.

:::demo `checkbox-group` element can manage multiple checkboxes in one group by using `v-model` which is bound as an `Array`. Inside the `top-checkbox` element, `label` is the value of the checkbox. If no content is nested in that tag, `label` will be rendered as the description following the button of the checkbox. `label` also corresponds with the element values in the array. It is selected if the specified value exists in the array, and vice versa.

```html
<template>
  <top-checkbox-group v-model="checkList">
    <top-checkbox label="Option A"></top-checkbox>
    <top-checkbox label="Option B"></top-checkbox>
    <top-checkbox label="Option C"></top-checkbox>
    <top-checkbox label="disabled" disabled></top-checkbox>
    <top-checkbox label="selected and disabled" disabled></top-checkbox>
  </top-checkbox-group>
</template>

<script>
  export default {
    data () {
      return {
        checkList: ['selected and disabled','Option A']
      };
    }
  };
</script>
```
:::

### Indeterminate

The `indeterminate` property can help you to achieve a 'check all' effect.

:::demo

```html
<template>
  <top-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">Check all</top-checkbox>
  <div style="margin: 15px 0;"></div>
  <top-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <top-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</top-checkbox>
  </top-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['Shanghai', 'Beijing'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```
:::

### Minimum / Maximum items checked

The `min` and `max` properties can help you to limit the number of checked items.

:::demo

```html
<template>
  <top-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <top-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</top-checkbox>
  </top-checkbox-group>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  export default {
    data() {
      return {
        checkedCities1: ['Shanghai', 'Beijing'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::

### Button style

Checkbox with button styles.

:::demo You just need to change `top-checkbox` element into `top-checkbox-button` element. We also provide `size` attribute.
```html
<template>
  <div>
    <top-checkbox-group v-model="checkboxGroup1">
      <top-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</top-checkbox-button>
    </top-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox-group v-model="checkboxGroup2" size="medium">
      <top-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</top-checkbox-button>
    </top-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox-group v-model="checkboxGroup3" size="small">
      <top-checkbox-button v-for="city in cities" :label="city" :disabled="city === 'Beijing'" :key="city">{{city}}</top-checkbox-button>
    </top-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
      <top-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</top-checkbox-button>
    </top-checkbox-group>
  </div>
</template>
<script>
  const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

  export default {
    data () {
      return {
        checkboxGroup1: ['Shanghai'],
        checkboxGroup2: ['Shanghai'],
        checkboxGroup3: ['Shanghai'],
        checkboxGroup4: ['Shanghai'],
        cities: cityOptions
      };
    }
  }
</script>
```
:::

### With borders

:::demo The `border` attribute adds a border to Checkboxes.
```html
<template>
  <div>
    <top-checkbox v-model="checked3" label="Option1" border></top-checkbox>
    <top-checkbox v-model="checked4" label="Option2" border></top-checkbox>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox v-model="checked5" label="Option1" border size="medium"></top-checkbox>
    <top-checkbox v-model="checked6" label="Option2" border size="medium"></top-checkbox>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox-group v-model="checkboxGroup5" size="small">
      <top-checkbox label="Option1" border></top-checkbox>
      <top-checkbox label="Option2" border disabled></top-checkbox>
    </top-checkbox-group>
  </div>
  <div style="margin-top: 20px">
    <top-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
      <top-checkbox label="Option1" border></top-checkbox>
      <top-checkbox label="Option2" border></top-checkbox>
    </top-checkbox-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        checked3: true,
        checked4: false,
        checked5: false,
        checked6: true,
        checkboxGroup5: [],
        checkboxGroup6: []
      };
    }
  }
</script>
```
:::

### Checkbox Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | string / number / boolean | — | — |
| label     | value of the Checkbox when used inside a `checkbox-group`   | string / number / boolean   |       —        |     —    |
| true-label | value of the Checkbox if it's checked   | string / number    |       —        |     —    |
| false-label | value of the Checkbox if it's not checked   | string / number    |      —         |     —    |
| disabled  | whether the Checkbox is disabled   | boolean   |  — | false   |
| border  | whether to add a border around Checkbox  | boolean   | — | false   |
| size  | size of the Checkbox, only works when `border` is true  | string  | medium / small / mini | — |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the Checkbox is checked   | boolean   |  — | false   |
| indeterminate  | same as `indeterminate` in native checkbox | boolean   |  — | false   |

### Checkbox Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-group Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | binding value | array | — | — |
|size | size of checkbox buttons or bordered checkboxes | string | medium / small / mini | — |
| disabled  | whether the nesting checkboxes are disabled | boolean   | — | false   |
| min     | minimum number of checkbox checked   | number    |       —        |     —    |
| max     | maximum number of checkbox checked   | number    |       —        |     —    |
|text-color | font color when button is active | string   | — | #ffffff   |
|fill  | border and background color when button is active | string   | — | #409EFF   |

### Checkbox-group Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | the updated value |

### Checkbox-button Attributes
| Attribute      | Description         | Type    | Options                         | Default|
|---------- |-------- |---------- |-------------  |-------- |
| label     | value of the checkbox when used inside a `checkbox-group` | string / number / boolean  |       —        |     —    |
| true-label | value of the checkbox if it's checked | string / number | — |     —    |
| false-label | value of the checkbox if it's not checked | string / number    |      —         |     —    |
| disabled  | whether the checkbox is disabled | boolean   |  — | false   |
| name | native 'name' attribute | string    |      —         |     —    |
| checked  | if the checkbox is checked | boolean   |  — | false   |
