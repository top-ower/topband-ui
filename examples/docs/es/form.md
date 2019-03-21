## Form

Form consiste en `input`, `radio`, `select`, `checkbox`, etcétera. Con el formulario, usted puede recopilar, verificar y enviar datos.

### Form básico

Incluye todo tipo de entradas, tales como `input`, `select`, `radio` y `checkbox`.

:::demo En cada componente `form`, necesita un campo `form-item` para que sea el contenedor del item.

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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) reglamenta que

> <i>Cuando sólo hay un campo de entrada de texto de una sola línea en un formulario, el agente usuario debe aceptar <b>Enter</b> en ese campo como una solicitud para enviar el formulario.</i>

Para prevenir este comportamiento, puede agregar `@submit.native.prevent` on `<top-form>`.
:::

### Formulario inline

Cuando el espacio vertical es limitado y la forma es relativamente simple, puede ponerlo en una unica línea.

:::demo Establezca el atributo `inline` como `true` y el formulario sera inline.

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

### Alineamiento

Dependiendo de su diseño, hay varias maneras diferentes de alinear el elemento de la etiqueta.

:::demo El atributo `labtop-position` decide cómo se alinean las etiquetas, puede estar `top` o `left`. Cuando se establece en `top`, las etiquetas se colocarán en la parte superior del campo de formulario.

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

### Validación

El componente `form` le permite verificar sus datos, ayudándole a encontrar y corregir errores.

:::demo Sólo tiene que añadir el atributo `rules` en el componente `Form`, pasar las reglas de validación y establecer el atributo `prop` para `Form-Item` como una clave específica que necesita ser validada. Ver más información en [async-validator](https://github.com/yiminghe/async-validator).

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

### Reglas personalizadas de validación

Este ejemplo muestra cómo personalizar sus propias reglas de validación para finalizar una verificación de contraseña de dos pasos.

:::demo Aquí utilizamos el `status-icon` para reflejar el resultado de la validación como un icono.

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

### Eliminar o agregar validaciones dinamicamente

:::demo Además de pasar todas las reglas de validación al mismo tiempo en el componente `form`, también puede pasar las reglas de validación o borrar reglas en un único campo de formulario de forma dinámica.

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

### Validación numerica

:::demo La validacion numerica necesita un modificador `.number` añadido en el enlace `v-model` de entrada, sirve para transformar el valor de la cadena al número proporcionado por Vuejs.

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

Cuando un `top-form-item` está anidado en otro `top-form-item`, su ancho de etiqueta será 0. Si es necesario, puede establecer el ancho de etiqueta en ese `top-form-item`.

:::

### Tamaño del control

Todos los componentes de un formulario heredan su atributo `size`. De manera similar, FormItem también tiene un atributo `size`.

:::demo Aún así, puede ajustar el `size` de cada componente si no desea que herede su tamaño de From o FormItem.

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

### Form Atributos

| Atributo                | Descripción                              | Tipo    | Valores aceptados     | Por defecto |
| ----------------------- | ---------------------------------------- | ------- | --------------------- | ----------- |
| model                   | Datos del componente                     | object  | —                     | —           |
| rules                   | Reglas de validación                     | object  | —                     | —           |
| inline                  | Si el form es inline                     | boolean | —                     | false       |
| labtop-position          | Posicion de la etiqueta                  | string  | left / right / top    | right       |
| labtop-width             | ancho de la etiqueta, y todos los form items directos descendientes heredarán este valor | string  | —                     | —           |
| labtop-suffix            | sufijo de la etiqueta                    | string  | —                     | —           |
| hide-required-asterisk       | si los campos obligatorios deben tener un asterisco rojo (estrella) al lado de sus etiquetas | boolean | — | false |
| show-message            | si mostrar o no el mensaje de error      | boolean | —                     | true        |
| inline-message          | si desea visualizar el mensaje de error inline con la posición del form item | boolean | —                     | false       |
| status-icon             | si desea visualizar un icono que indique el resultado de la validación | boolean | —                     | false       |
| validate-on-rule-change | si se dispara la validacion cuando el prop `rules` cambia | boolean | —                     | true        |
| size                    | el tamaño de los componentes en este form | string  | medium / small / mini | —           |
| disabled                | si se desactivan todos los componentes del formulario. Si esta en `true` no puede ser cambiado por el prop `disabled` individual de los componentes. | boolean | —                     | false       |

### Form Metodos

| Metodo        | Descripción                                                                                                                                                                                                                                                                                          | Parametros                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| validate      | el método para validar todo el formulario. Recibe una llamada como parametro. Después de la validación, la llamada de retorno se ejecutará con dos parámetros: un booleano que indica si la validación ha pasado, y un objeto que contiene todos los campos que fallaron en la validación. Devuelve una promesa si se omite el return | Function(callback: Function(boolean, object))                    |
| clearValidate | borra el mensaje de validación para determinados campos. El parámetro es un prop name o un array de props names de los items del formulario cuyos mensajes de validación se eliminarán. Si se omiten, se borrarán todos los mensajes de validación de los campos.                                                                                  | Function(prop: string, callback: Function(errorMessage: string)) |
| resetFields   | restablece todos los campos y elimina el resultado de validación                                                                                                                                                                                                                                     | —                                                                |


### Form Events

| Nombre   | Descripción                                          | Parametros                                                   |
| -------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| validate | se dispara después de validar un item del formulario | la propiedad (`prop name`) nombre del item del form que se esta validando, si la validacion paso o no, y el mensaje de error si existe. |

### Form-Item Atributos

| Atributo       | Descripción                                                  | Tipo    | Valores aceptados                           | Por defecto |
| -------------- | ------------------------------------------------------------ | ------- | ------------------------------------------- | ----------- |
| prop           | un clave del modelo. En el uso del método validate and resetFields, el atributo es obligatorio. | string  | Clave del modelo que se ha pasado a  `form` |             |
| label          | etiqueta                                                     | string  | —                                           | —           |
| labtop-width    | ancho de la etiqueta, e.g. '50px'                            | string  | —                                           | —           |
| required       | si el campo es obligatorio o no, estará determinado por las reglas de validación si se omite. | boolean | —                                           | false       |
| rules          | reglas de validacion del form                                | object  | —                                           | —           |
| error          | mensaje de error de campo, establezca su valor y el campo validará el error y mostrará este mensaje inmediatamente. | string  | —                                           | —           |
| show-message   | si mostrar o no el mensaje de error                          | boolean | —                                           | true        |
| inline-message | mensaje de validación estilo inline                          | boolean | —                                           | false       |
| size           | Tamaño de los componentes en este form item                  | string  | medium / small / mini                       | -           |

### Form-Item Slot

| Nombre | Descripción              |
| ------ | ------------------------ |
| —      | contenido del Form Item  |
| label  | contenido de la etiqueta |

### Form-Item Scoped Slot

| Name  | Description                                                                                        |
| ----- | -------------------------------------------------------------------------------------------------- |
| error | Contenido personalizado para mostrar el mensaje de validacion. El parametro del scope es { error } |

### Form-Item Metodo

| Metodo        | Descripción                                                 | Parametros |
| ------------- | ----------------------------------------------------------- | ---------- |
| resetField    | restablecer campo actual y eliminar resultado de validación | —          |
| clearValidate | elimina el estado de la validacion de un campo              | -          |
