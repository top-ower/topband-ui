## Input

Le champ d'input de base.

:::warning
Input est un composant controllé, il **affiche toujours la valeur liée de Vue**.

En règle générale, l'évènement `input` devrait être géré. Son handler devrait mettre à jour la valeur du composant (ou utilisez `v-model`). Dans le cas contraire, la valeur du champ ne sera pas modifiée.

Les modificateurs de `v-model` ne sont pas supportés.
:::

### Usage

:::demo

```html
<top-input placeholder="Entrez quelque chose" v-model="input"></top-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### Désactivé

:::demo Désactivez l'input avec l'attribut `disabled`.

```html
<top-input
  placeholder="Entrez quelque chose"
  v-model="input1"
  :disabled="true">
</top-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```
:::

### Effaçable

:::demo Rendez l'input effaçable avec l'attribut `clearable`.

```html
<top-input
  placeholder="Entrez quelque chose"
  v-model="input10"
  clearable>
</top-input>

<script>
export default {
  data() {
    return {
      input10: ''
    }
  }
}
</script>
```
:::

### Champ de mot de passe

:::demo Créez un champ de mot de passe avec icône de visualisation grâce à l'attribut `show-password`.

```html
<top-input placeholder="Entrez votre mot de passe" v-model="input11" show-password></top-input>

<script>
  export default {
    data() {
      return {
        input11: ''
      }
    }
  }
</script>
```
:::

### Input avec icône

Ajoutez une icône pour indiquer le type d'input.

:::demo Pour ajouter une icône, vous pouvez utiliser les attributs `prefix-icon` et `suffix-icon`. De plus, les slots nommés `prefix` et `suffix` fonctionnent aussi.
```html
<div class="demo-input-suffix">
  <span class="demo-input-label">Avec les attributs</span>
  <top-input
    placeholder="Entrez une date"
    suffix-icon="top-icon-date"
    v-model="input2">
  </top-input>
  <top-input
    placeholder="Entrez du texte"
    prefix-icon="top-icon-search"
    v-model="input21">
  </top-input>
</div>
<div class="demo-input-suffix">
  <span class="demo-input-label">Avec les slots</span>
  <top-input
    placeholder="Entrez une date"
    v-model="input22">
    <i slot="suffix" class="top-input__icon top-icon-date"></i>
  </top-input>
  <top-input
    placeholder="Entrez du texte"
    v-model="input23">
    <i slot="prefix" class="top-input__icon top-icon-search"></i>
  </top-input>
</div>

<style>
  .demo-input-label {
    display: inline-block;
    width: 130px;
  }
</style>

<script>
export default {
  data() {
    return {
      input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
  }
}
</script>
```
:::

### Zone de texte

Une zone de texte de taille réglable à la souris pour écrire plusieurs lignes. Ajoutez l'attribut `type="textarea"` pour changer `input` en un `textarea` natif.

:::demo Réglez la hauteur grâce à la propriété `rows`.

```html
<top-input
  type="textarea"
  :rows="2"
  placeholder="Entrez quelque chose"
  v-model="textarea">
</top-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### Zone de texte avec taille automatique

Configurer la propriété `autosize` pour une zone de texte permet de rendre la hauteur automatique en fonction de la taille du texte. Un objet options pour être fournit à `autosize` les nombres minimal et maximal de lignes.

:::demo

```html
<top-input
  type="textarea"
  autosize
  placeholder="Entrez quelque chose"
  v-model="textarea2">
</top-input>
<div style="margin: 20px 0;"></div>
<top-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Entrez quelque chose"
  v-model="textarea3">
</top-input>

<script>
export default {
  data() {
    return {
      textarea2: '',
      textarea3: ''
    }
  }
}
</script>
```
:::

### Input mixte

Ajouter un élément avant ou après l'input, généralement du texte ou un bouton.

:::demo Utilisez `slot` pour ajouter des éléments avant ou après l'input.

```html
<div>
  <top-input placeholder="Entrez quelque chose" v-model="input3">
    <template slot="prepend">Http://</template>
  </top-input>
</div>
<div style="margin-top: 15px;">
  <top-input placeholder="Entrez quelque chose" v-model="input4">
    <template slot="append">.com</template>
  </top-input>
</div>
<div style="margin-top: 15px;">
  <top-input placeholder="Entrez quelque chose" v-model="input5" class="input-with-select">
    <top-select v-model="select" slot="prepend" placeholder="Choisir">
      <top-option label="Restaurant" value="1"></top-option>
      <top-option label="Num. Commande" value="2"></top-option>
      <top-option label="Tel" value="3"></top-option>
    </top-select>
    <top-button slot="append" icon="top-icon-search"></top-button>
  </top-input>
</div>

<style>
  .top-select .top-input {
    width: 110px;
  }
  .input-with-select .top-input-group__prepend {
    background-color: #fff;
  }
</style>
<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>
```
:::

### Tailles

:::demo Ajoutez l'attribut `size` pour changer la taille de l'input. En plus de la taille par défaut, il y a trois autres options: `large`, `small` et `mini`.
```html
<div class="demo-input-size">
  <top-input
    placeholder="Entrez quelque chose"
    v-model="input6">
  </top-input>
  <top-input
    size="medium"
    placeholder="Entrez quelque chose"
    v-model="input7">
  </top-input>
  <top-input
    size="small"
    placeholder="Entrez quelque chose"
    v-model="input8">
  </top-input>
  <top-input
    size="mini"
    placeholder="Entrez quelque chose"
    v-model="input9">
  </top-input>
</div>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>
```
:::

### Autocomplétion

Vous pouvez obtenir de l'aide ou des suggestions basées sur ce que vous entrez.

:::demo Le composant d'autocomplétion fournit des suggestions d'entrées. L'attribut `fetch-suggestions` est une méthode qui retourne les suggestions. Dans cet exemple, `querySearch(queryString, cb)` renvoie des suggestions à l'autocomplétion via `cb(data)` quand elles sont prêtes.
```html
<top-row class="demo-autocomplete">
  <top-col :span="12">
    <div class="sub-title">Liste des suggestions au focus</div>
    <top-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Entrez quelque chose"
      @select="handleSelect"
    ></top-autocomplete>
  </top-col>
  <top-col :span="12">
    <div class="sub-title">Liste des suggestions à l'écriture</div>
    <top-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Entrez quelque chose"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></top-autocomplete>
  </top-col>
</top-row>
<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Template personnalisé

Vous pouvez personnaliser la manière dont les suggestions sont affichées.

:::demo Utilisez `scoped slot` pour personnaliser les différentes suggestions. Dans le scope, vous pouvez accéder à l'objet suggestion via la clé `item`.
```html
<top-autocomplete
  popper-class="my-autocomplete"
  v-model="state3"
  :fetch-suggestions="querySearch"
  placeholder="Entrez quelque chose"
  @select="handleSelect">
  <i
    class="top-icon-edit top-input__icon"
    slot="suffix"
    @click="handleIconClick">
  </i>
  <template slot-scope="{ item }">
    <div class="value">{{ item.value }}</div>
    <span class="link">{{ item.link }}</span>
  </template>
</top-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        links: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestion objects
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Recherche distante

Vous pouvez aller chercher des infos de suggestions sur un serveur distant.

:::demo
```html
<top-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="Entrez quelque chose"
  @select="handleSelect"
></top-autocomplete>
<script>
  export default {
    data() {
      return {
        links: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>
```
:::

### Attributs de l'Input

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ----| ----| ----| ---- | ----- |
| type| Type de l'input. | string | text, textarea et autres [types d'input natifs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | Variable liée. | string / number | — | — |
| maxlength| Identique à `maxlength` dans l'input natif. | number| — | — |
| minlength| Identique à `minlength` dans l'input natif. | number | — | — |
| placeholder| Placeholder de l' Input. | string | — | — |
| clearable | Si le bouton de reset apparaît. | boolean | — | false |
| show-password | Si le champ doit un champ de mot de passe avec bouton de visualisation. | boolean         | — | false |
| disabled | Si le champ est désactivé. | boolean | — | false |
| size | Taille du champ, marche quand `type` n'est pas 'textarea'. | string | medium / small / mini | — |
| prefix-icon   | Classe de l'icône de préfixe.  | string          | — | — |
| suffix-icon   | Classe de l'iĉone de suffixe.  | string          | — | — |
| rows | Nombre de ligne pour une zone de texte, ne marche que si `type` est 'textarea'. | number | — | 2 |
| autosize | Si la zone de texte à une hauteur adaptative, ne marche que si `type` est 'textarea'. Peut accepter un objet, e.g. { minRows: 2, maxRows: 6 }  | boolean / object | — | false |
| autocomplete | Identique à `autocomplete` dans l'input natif. | string | on / off | off |
| auto-complete | @DEPRECATED dans la prochaine version majeure. | string | on/off | off |
| name | Identique à `name` dans l'input natif. | string | — | — |
| readonly | Identique à `readonly` dans l'input natif. | boolean | — | false |
| max | Identique à `max` dans l'input natif. | — | — | — |
| min | Identique à `min` dans l'input natif. | — | — | — |
| step| Identique à `step` dans l'input natif. | — | — | — |
| resize| Contrôle les changements de taille autorisés. | string | none, both, horizontal, vertical | — |
| autofocus | Identique à `autofocus` dans l'input natif. | boolean | — | false |
| form | Identique à `form` dans l'input natif. | string | — | — |
| label | Texte du label. | string | — | — |
| tabindex | tabindex de l'input. | string | - | - |
| validate-event | Si la validation doit avoir lieu. | boolean | - | true |

### Slots de l'Input

| Nom | Description |
|------|--------|
| prefix | Contenu du préfixe, ne marche que si `type` est 'text'. |
| suffix | Contenu du suffixe, ne marche que si `type` est 'text'. |
| prepend | Contenu à ajouter avant l'Input, ne marche que si `type` est 'text'. |
| append | Contenu à ajouter après l'Input, ne marche que si `type` est 'text'. |

### Évènements

| Nom | Description | Paramètres |
|----| ----| ----|
| blur | Se déclenche quand Input perds le focus. | (event: Event) |
| focus | Se déclenche quand Input a le focus. | (event: Event) |
| change | Se déclenche quand la valeur change. | (value: string \ number) |
| clear | Se déclenche quand le champ est effacé par le bouton de reset. | — |

### Méthodes de l'Input

| Méthode | Description | Paramètres |
|------|--------|-------|
| focus | Met le focus sur le champ. | — |
| blur | Retire le focus de le champ. | — |
| select | Sélectionne le texte du champ. | — |

### Attributs de l'autocomplétion

| Attribut | Description | Type | Options | Défaut |
|----| ----| ----| ---- | -----|
| placeholder| Le placeholder de l'autocomplétion. | string | — | — |
| clearable | Si un bouton d'effacement doit apparaître. | boolean | — | false |
| disabled | Si l'autocomplétion est déactivée. | boolean | — | false|
| value-key | Nom de la clé de l'objet suggestion pour l'affichage. | string | — | value |
| icon | Nom de l'icône. | string | — | — |
| value | Variable liée. | string | — | — |
| debounce | Délai d'attente après écriture, en millisecondes. | number | — | 300 |
| placement | Emplacement du menu popup. | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-start |
| fetch-suggestions | La méthode pour rechercher les suggestions. Lorsqu'elles sont prêtes, appelle `callback(data:[])` pour les renvoyer à l'autocomplétion. | Function(queryString, callback) | — | — |
| popper-class | Nom de classe pour le menu de l'autocomplétion. | string | — | — |
| trigger-on-focus | Si les suggestions doivent apparaître quand l'input a le focus. | boolean | — | true |
| name | Identique à `name` dans l'input natif. | string | — | — |
| select-when-unmatched | Si un évènement `select` doit être émis après pression sur entrée quand il n'y a pas de résultats. | boolean | — | false |
| label | Texte du label. | string | — | — |
| prefix-icon | Classe de l'icône de préfixe. | string | — | — |
| suffix-icon | Classe de l'iĉone de suffixe. | string | — | — |
| hide-loading | Si l'icône de chargement doit être cachée dans le cas d'une recherche distante. | boolean | — | false |
| popper-append-to-body | Si le menu doit être ajouter au body. Si le positionnement du menu est incorrect, essayez de mettre cette propriété à `false`. | boolean | - | true |
| highlight-first-item | Si la première suggestion de la liste issue de la recherche distante doit être en surbrillance par défaut. | boolean | — | false |

### Slots de l'autocomplétion

| Nom | Description |
|------|--------|
| prefix | Contenu du préfixe. |
| suffix | Contenu du suffixe. |
| prepend | Contenu à ajouter avant le champ. |
| append | Contenu à ajouter après le champ. |

### Template personnalisé pour l'autocomplétion

| Nom | Description |
|------|--------|
| — | Contenu personnalisé pour les suggestions. Le paramètre de scope est { item }. |

### Évènements de l'autocomplétion

| Nom | Description | Paramètres |
|----| ----| ----|
| select | Se déclenche quand une suggestion est cliquée. | La suggestion sélectionnée. |

### Méthodes de l'autocomplétion

| Méthode | Description | Paramètres |
|------|--------|-------|
| focus | Met le focus sur l'élément. | — |
