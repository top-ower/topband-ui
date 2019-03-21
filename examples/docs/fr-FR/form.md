## Form

Un formulaire est constitué des éléments `input`, `radio`, `select`, `checkbox`, etc. Il sert principalement à collecter, vérifier et soumettre des données.

### Formulaire de base

Il peut contenir toutes sortes de champs tels que `input`, `select`, `radio` et `checkbox`.

:::demo Dans chaque composant `form`, il vous faudra utiliser la balise `form-item` pour servir de conteneur à chaque champ.

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
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) stipule que
> <i>Lorsqu'il n'y a qu'un seul champ de type texte dans un formulaire, le navigateur devrait accepter la pression de la touche Entrée sur ce champ comme méthode de soumission du formulaire</i>

Pour éviter ce comportement, vous pouvez ajouter `@submit.native.prevent` dans `<top-form>`.
  :::

### Formulaire horizontal

Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez le placer sur une seule ligne.

:::demo Mettez l'attribut `inline` à `true` et le formulaire sera en une seul ligne.

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

### Alignement

Suivant votre design, il y a différents moyens d'aligner vos labels.

:::demo L'attribut `labtop-position` permet de régler l'alignement, il peut être à `top` ou `left`. Quand il est à `top`, les labels sont placés au-dessus des champs.

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

Le composant Form vous permet d'effectuer des vérifications, afin de détecter et corriger les erreurs facilement.

:::demo Ajoutez l'attribut `rules` au composant `Form`, passez les règles de validation, et configurez l'attribut `prop` de `Form-Item` pour ajouter la clé de la règle correspondante au champ. Plus d'informations ici:  [async-validator](https://github.com/yiminghe/async-validator).

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

### Validations personnalisées

Cet exemple montre comment vous pouvez personnaliser vos règles de validation pour effectuer une identification à deux facteurs.

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

### Ajouter ou supprimer des champs dynamiquement

:::demo En plus de pouvoir passer toutes les règles de validation en une seule fois au formulaire, vous pouvez aussi ajouter ou supprimer des règles sur un seul champ de manière dynamique.
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

### Validation des nombres

:::demo Pour valider les nombres correctement, il vous faudra ajouter le modificateur `.number` à l'attribut `v-model`. Il est utilisé par Vuejs pour transformer les valeurs en nombres .
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

### Taille

Tout les composants d'un formulaire héritent leur attribut `size` de ce formulaire. Il est aussi possible de l'utiliser individuellement sur chaque FormItem.

:::demo Vous pouvez régler le `size` de chaque item si vous ne souhaitez pas qu'il hérite de son parent.
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

### Attributs de Form

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| model| Données du formulaire. | object | — | — |
| rules | Règles de validation du formulaire. | object | — | — |
| inline | Si le formulaire est horizontal. | boolean | — | false |
| labtop-position | Position des labels. Si 'left' ou 'right', `labtop-width` est aussi requis. | string | left / right / top | right |
| labtop-width | Largeur des labels, tout les enfants directs hériteront de cette valeur. | string | — | — |
| labtop-suffix | Suffixe de labels. | string | — | — |
| hide-required-asterisk | Si les champs obligatoires doivent avoir une astérisque rouge (étoile) à coté de leurs labels. | boolean | — | false |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit apparaître en ligne avec son champ. | boolean | — | false |
| status-icon  | Si une icône indiquant le résultat de validation doit apparaître. | boolean | — | false |
| validate-on-rule-change  | Si la validation doit se déclencher lorsque `rules` est modifié. | boolean | — | true |
| size  | Contrôle la taille des champs du formulaire. | string | medium / small / mini | — |
| disabled | Si tout les champs du formulaire doivent être désactivés. Si `true`, il ne peut pas être modifié par l'attribut `disabled` des enfants. | boolean | — | false |

### Méthodes de Form

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| validate | Valide le formulaire. Prends une callback en paramètre. Après la validation, la callback est exécutée avec deux paramètres: un boolean indiquant si la validation est bonne, et un objet contenant tout les champs qui ont échoués. Retourne une promesse si aucune callback n'est passée. | Function(callback: Function(boolean, object)) |
| validateField | Valide un ou plusieurs champs du formulaire. | Function(props: string | array, callback: Function(errorMessage: string)) |
| resetFields | Efface tout les champs et les résultats de validation. | — |
| clearValidate | Efface les messages de validation de certains champs. Le paramètre est le nom du champ ou une liste des champs concernés. Si il est omis, tout les champs seront concernés. | Function(props: string | array) |

### Évènnements de Form

| Nom | Description | Paramètres |
|----------- |------------ |----------- |
| validate   | Se déclenche après la validation d'un champ. | Nom du champs qui a été validé, si la validation est bonne et le message d'erreur sinon. |

### Attributs de FormItem

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| prop | Une des clés de `model`. Utilisés par les méthodes validate et resetFields. Requis. | string | Clés du model passé à `form`. |
| label | Le label. | string | — | — |
| labtop-width | Largeur du label, e.g. '50px'. | string | — | — |
| required | Si le champ est requis ou non. Si omis, sera déterminé par les règles de validation. | boolean |  — | false |
| rules | Règles de validation du formulaire. | object | — | — |
| error | Message d'erreur du champ. Si il est modifié, le champ l'affichera immédiatement. | string | — | — |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit être en ligne avec le champ. | boolean | — | false |
| size  | Contrôle la taille du FormItem. | string | medium / small / mini | - |

### Slot de Form-Item
| Nom | Description |
|------|--------|
| — | Contenu de Form Item. |
| label | Contenu du label. |

### Slot avec portée de Form-Item
|      Nom     | Description |
|---------------|-------------|
|      error    | Contenu personnalisé pour les messages de validation. Le paramètre du scope est { error }. |

### Méthodes de Form-Item

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| resetField | Efface le champ et les résultats de validation. | — |
| clearValidate | Efface le status de validation du champ. | - |
