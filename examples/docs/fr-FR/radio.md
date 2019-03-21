## Radio

Boutons de sélection entre plusieurs options.

### Usage

Radio ne devrait pas avoir trop d'options. Dans ce cas utilisez plutôt Select.

:::demo Créer un composant Radio est facile, vous avez juste besoin de lier les `v-model` des options. Chacun équivaut à la valeur de `label` du radio correspondant. Le type de `label` est `String`, `Number` ou `Boolean`.
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

### Désactivé

L'attribut `disabled` désactive le radio.

:::demo Ajoutez simplement l'attribut `disabled` au radio.
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

### Groupe de boutons radio

Utile pour choisir entre plusieurs groupes d'options mutuellement exclusives.

:::demo Combinez `top-radio-group` avec `top-radio` pour afficher un groupe de radios. Liez une variable au `v-model` de `top-radio-group` et configurez le label dans `top-radio`. Cet élément fournit aussi l'évènement `change` qui a en paramètre la valeur courante.

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

### Style bouton

Des radios affichés comme des boutons standards.

:::demo Changez simplement `top-radio` pour `top-radio-button`. L'attribut `size` permet de régler la taille.
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

### Avec bordures

:::demo L'attribut `border` ajoute une bordure aux radios.
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

### Attributs de Radio

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| label | La valeur du radio. | string / number / boolean | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| border  | Si une bordure doit être affichée autour du radio. | boolean   | — | false |
| size  | Taille du radio, ne marche que si `border` est `true`. | string  | medium / small / mini | — |
| name | Attribut 'name' natif. | string | — | — |

### Évènements de Radio

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs de Radio-group

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut
| ---- | ---- | ---- | ---- | ---- |
| value / v-model | La valeur liée. | string / number / boolean | — | — |
| size | Taille des radios. | string | medium / small / mini | —
| disabled  | Si les radios sont désactivés. | boolean   | — | false
| text-color | Couleur du texte quand le bouton est actif. | string | — | #ffffff   |
| fill  | Bordure et couleur de fond quand le bouton est actif. | string | — | #409EFF |

### Évènements de Radio-group

| Nom | Description | Paramètres |
| --- | --- | --- |
| change | Se déclenche quand la valeur change. | La valeur du label. |

### Attributs Radio-button

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut |
| ---- | ---- | ---- | ---- | ---- |
| label | Valeur du radio. | string / number | — | — |
| disabled | Si le radio est désactivé. | boolean | — | false |
| name | Attribut 'name' natif. | string | — | — |
