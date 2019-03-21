## Form

Form consists of `input`, `radio`, `select`, `checkbox` and so on. With form, you can collect, verify and submit data.

### Basic form

It includes all kinds of input items, such as `input`, `select`, `radio` and `checkbox`.

:::demo In each `form` component, you need a `form-item` field to be the container of your input item.

```html
<top-form ref="form" :model="form" labtop-width="120px">
  <top-form-item label="Activity name">
    <top-input v-model="form.name"></top-input>
  </top-form-item>
  <top-form-item label="Activity zone">
    <top-select v-model="form.region" placeholder="please select your zone">
      <top-option label="Zone one" value="shanghai"></top-option>
      <top-option label="Zone two" value="beijing"></top-option>
    </top-select>
  </top-form-item>
  <top-form-item label="Activity time">
    <top-col :span="11">
      <top-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></top-date-picker>
    </top-col>
    <top-col class="line" :span="2">-</top-col>
    <top-col :span="11">
      <top-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></top-time-picker>
    </top-col>
  </top-form-item>
  <top-form-item label="Instant delivery">
    <top-switch v-model="form.delivery"></top-switch>
  </top-form-item>
  <top-form-item label="Activity type">
    <top-checkbox-group v-model="form.type">
      <top-checkbox label="Online activities" name="type"></top-checkbox>
      <top-checkbox label="Promotion activities" name="type"></top-checkbox>
      <top-checkbox label="Offline activities" name="type"></top-checkbox>
      <top-checkbox label="Simple brand exposure" name="type"></top-checkbox>
    </top-checkbox-group>
  </top-form-item>
  <top-form-item label="Resources">
    <top-radio-group v-model="form.resource">
      <top-radio label="Sponsor"></top-radio>
      <top-radio label="Venue"></top-radio>
    </top-radio-group>
  </top-form-item>
  <top-form-item label="Activity form">
    <top-input type="textarea" v-model="form.desc"></top-input>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="onSubmit">Create</top-button>
    <top-button>Cancel</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) regulates that
> <i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i>

To prevent this behavior, you can add `@submit.native.prevent` on `<top-form>`.
  :::

### Inline form

When the vertical space is limited and the form is relatively simple, you can put it in one line.

:::demo Set the `inline` attribute to `true` and the form will be inline.

```html
<top-form :inline="true" :model="formInline" class="demo-form-inline">
  <top-form-item label="Approved by">
    <top-input v-model="formInline.user" placeholder="Approved by"></top-input>
  </top-form-item>
  <top-form-item label="Activity zone">
    <top-select v-model="formInline.region" placeholder="Activity zone">
      <top-option label="Zone one" value="shanghai"></top-option>
      <top-option label="Zone two" value="beijing"></top-option>
    </top-select>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="onSubmit">Query</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Alignment

Depending on your design, there are several different ways to align your label element.

:::demo The `labtop-position` attribute decides how labels align, it can be `top` or `left`. When set to `top`, labels will be placed at the top of the form field.

```html
<top-radio-group v-model="labelPosition" size="small">
  <top-radio-button label="left">Left</top-radio-button>
  <top-radio-button label="right">Right</top-radio-button>
  <top-radio-button label="top">Top</top-radio-button>
</top-radio-group>
<div style="margin: 20px;"></div>
<top-form :labtop-position="labelPosition" labtop-width="100px" :model="formLabelAlign">
  <top-form-item label="Name">
    <top-input v-model="formLabelAlign.name"></top-input>
  </top-form-item>
  <top-form-item label="Activity zone">
    <top-input v-model="formLabelAlign.region"></top-input>
  </top-form-item>
  <top-form-item label="Activity form">
    <top-input v-model="formLabelAlign.type"></top-input>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

### Validation

Form component allows you to verify your data, helping you find and correct errors.

:::demo Just add the `rules` attribute for `Form` component, pass validation rules, and set `prop` attribute for `Form-Item` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).

```html
<top-form :model="ruleForm" :rules="rules" ref="ruleForm" labtop-width="120px" class="demo-ruleForm">
  <top-form-item label="Activity name" prop="name">
    <top-input v-model="ruleForm.name"></top-input>
  </top-form-item>
  <top-form-item label="Activity zone" prop="region">
    <top-select v-model="ruleForm.region" placeholder="Activity zone">
      <top-option label="Zone one" value="shanghai"></top-option>
      <top-option label="Zone two" value="beijing"></top-option>
    </top-select>
  </top-form-item>
  <top-form-item label="Activity time" required>
    <top-col :span="11">
      <top-form-item prop="date1">
        <top-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1" style="width: 100%;"></top-date-picker>
      </top-form-item>
    </top-col>
    <top-col class="line" :span="2">-</top-col>
    <top-col :span="11">
      <top-form-item prop="date2">
        <top-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></top-time-picker>
      </top-form-item>
    </top-col>
  </top-form-item>
  <top-form-item label="Instant delivery" prop="delivery">
    <top-switch v-model="ruleForm.delivery"></top-switch>
  </top-form-item>
  <top-form-item label="Activity type" prop="type">
    <top-checkbox-group v-model="ruleForm.type">
      <top-checkbox label="Online activities" name="type"></top-checkbox>
      <top-checkbox label="Promotion activities" name="type"></top-checkbox>
      <top-checkbox label="Offline activities" name="type"></top-checkbox>
      <top-checkbox label="Simple brand exposure" name="type"></top-checkbox>
    </top-checkbox-group>
  </top-form-item>
  <top-form-item label="Resources" prop="resource">
    <top-radio-group v-model="ruleForm.resource">
      <top-radio label="Sponsorship"></top-radio>
      <top-radio label="Venue"></top-radio>
    </top-radio-group>
  </top-form-item>
  <top-form-item label="Activity form" prop="desc">
    <top-input type="textarea" v-model="ruleForm.desc"></top-input>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="submitForm('ruleForm')">Create</top-button>
    <top-button @click="resetForm('ruleForm')">Reset</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

### Custom validation rules

This example shows how to customize your own validation rules to finish a two-factor password verification.

:::demo Here we use `status-icon` to reflect validation result as an icon.
```html
<top-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" labtop-width="120px" class="demo-ruleForm">
  <top-form-item label="Password" prop="pass">
    <top-input type="password" v-model="ruleForm2.pass" autocomplete="off"></top-input>
  </top-form-item>
  <top-form-item label="Confirm" prop="checkPass">
    <top-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></top-input>
  </top-form-item>
  <top-form-item label="Age" prop="age">
    <top-input v-model.number="ruleForm2.age"></top-input>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="submitForm('ruleForm2')">Submit</top-button>
    <top-button @click="resetForm('ruleForm2')">Reset</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Please input the age'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Please input digits'));
          } else {
            if (value < 18) {
              callback(new Error('Age must be greater than 18'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
See more advanced usage of validation rules at [async-validator](https://github.com/yiminghe/async-validator)。
:::

### Delete or add form items dynamically

:::demo In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.

```html
<top-form :model="dynamicValidateForm" ref="dynamicValidateForm" labtop-width="120px" class="demo-dynamic">
  <top-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
  >
    <top-input v-model="dynamicValidateForm.email"></top-input>
  </top-form-item>
  <top-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain can not be null', trigger: 'blur'
    }"
  >
    <top-input v-model="domain.value"></top-input><top-button @click.prevent="removeDomain(domain)">Delete</top-button>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="submitForm('dynamicValidateForm')">Submit</top-button>
    <top-button @click="addDomain">New domain</top-button>
    <top-button @click="resetForm('dynamicValidateForm')">Reset</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>
```
:::

### Number Validate

:::demo Number Validate need a `.number` modifier added on the input `v-model` binding，it's used to transform the string value to the number which is provided by Vuejs.
```html
<top-form :model="numberValidateForm" ref="numberValidateForm" labtop-width="100px" class="demo-ruleForm">
  <top-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'age is required'},
      { type: 'number', message: 'age must be a number'}
    ]"
  >
    <top-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></top-input>
  </top-form-item>
  <top-form-item>
    <top-button type="primary" @click="submitForm('numberValidateForm')">Submit</top-button>
    <top-button @click="resetForm('numberValidateForm')">Reset</top-button>
  </top-form-item>
</top-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
When an `top-form-item` is nested in another `top-form-item`, its label width will be `0`. You can set `labtop-width` on that `top-form-item` if needed.
:::

### Size control

All components in a Form inherit their `size` attribute from that Form. Similarly, FormItem also has a `size` attribute.

:::demo Still you can fine tune each component's `size` if you don't want that component to inherit its size from From or FormIten.
```html
<top-form ref="form" :model="sizeForm" labtop-width="120px" size="mini">
  <top-form-item label="Activity name">
    <top-input v-model="sizeForm.name"></top-input>
  </top-form-item>
  <top-form-item label="Activity zone">
    <top-select v-model="sizeForm.region" placeholder="please select your zone">
      <top-option label="Zone one" value="shanghai"></top-option>
      <top-option label="Zone two" value="beijing"></top-option>
    </top-select>
  </top-form-item>
  <top-form-item label="Activity time">
    <top-col :span="11">
      <top-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></top-date-picker>
    </top-col>
    <top-col class="line" :span="2">-</top-col>
    <top-col :span="11">
      <top-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></top-time-picker>
    </top-col>
  </top-form-item>
  <top-form-item label="Activity type">
    <top-checkbox-group v-model="sizeForm.type">
      <top-checkbox-button label="Online activities" name="type"></top-checkbox-button>
      <top-checkbox-button label="Promotion activities" name="type"></top-checkbox-button>
    </top-checkbox-group>
  </top-form-item>
  <top-form-item label="Resources">
    <top-radio-group v-model="sizeForm.resource" size="medium">
      <top-radio border label="Sponsor"></top-radio>
      <top-radio border label="Venue"></top-radio>
    </top-radio-group>
  </top-form-item>
  <top-form-item size="large">
    <top-button type="primary" @click="onSubmit">Create</top-button>
    <top-button>Cancel</top-button>
  </top-form-item>
</top-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
```
:::

### Form Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| model| data of form component | object | — | — |
| rules | validation rules of form | object | — | — |
| inline | whether the form is inline | boolean | — | false |
| labtop-position | position of label. If set to 'left' or 'right', `labtop-width` prop is also required | string | left / right / top | right |
| labtop-width | width of label, and all its direct child form items will inherit this value | string | — | — |
| labtop-suffix | suffix of the label | string | — | — |
| hide-required-asterisk | whether required fields should have a red asterisk (star) beside their labels | boolean | — | false |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | whether to display the error message inline with the form item | boolean | — | false |
| status-icon  | whether to display an icon indicating the validation result | boolean | — | false |
| validate-on-rule-change  | whether to trigger validation when the `rules` prop is changed | boolean | — | true |
| size  | control the size of components in this form | string | medium / small / mini | — |
| disabled | whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop | boolean | — | false |

### Form Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| validate | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object)) |
| validateField | validate one or several form items | Function(props: string | array, callback: Function(errorMessage: string)) |
| resetFields | reset all the fields and remove validation result | — |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared | Function(props: string | array) |

### Form Events
| Event Name | Description | Parameters |
|----------- |------------ |----------- |
| validate   | triggers after a form item is validated | prop name of the form item being validated, whether validation is passed and the error message if not |

### Form-Item Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ---- | ----| ---- | ---- | ---- |
| prop | a key of `model`. In the use of validate and resetFields method, the attribute is required | string | keys of model that passed to `form` |
| label | label | string | — | — |
| labtop-width | width of label, e.g. '50px' | string | — | — |
| required | whether the field is required or not, will be determined by validation rules if omitted | boolean |  — | false |
| rules | validation rules of form | object | — | — |
| error | field error message, set its value and the field will validate error and show this message immediately | string | — | — |
| show-message  | whether to show the error message | boolean | — | true |
| inline-message  | inline style validate message | boolean | — | false |
| size  | control the size of components in this form-item | string | medium / small / mini | - |

### Form-Item Slot
| Name | Description |
|------|--------|
| — | content of Form Item |
| label | content of label |

### Form-Item Scoped Slot
|      Name     | Description |
|---------------|-------------|
|      error    | Custom content to display validation message. The scope parameter is { error } |

### Form-Item Methods

| Method | Description | Parameters |
| ---- | ---- | ---- |
| resetField | reset current field and remove validation result | — |
| clearValidate | remove validation status of the field | - |
