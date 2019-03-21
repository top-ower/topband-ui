## Breadcrumb

Affiche le chemin de la page actuelle, afin de pouvoir naviguer plus facilement.

### Usage


:::demo Dans `top-breadcrumb`, chaque `top-breadcrumb-item` est un tag représentant chaque niveau depuis la page d'accueil. Ce Composant possède un attribut de type `String` appelé `separator`qui détermine le séparateur. Sa valeur par défaut est '/'.

```html
<top-breadcrumb separator="/">
  <top-breadcrumb-item :to="{ path: '/' }">Accueil</top-breadcrumb-item>
  <top-breadcrumb-item><a href="/">Gestion promotions</a></top-breadcrumb-item>
  <top-breadcrumb-item>Liste promotions</top-breadcrumb-item>
  <top-breadcrumb-item>Détail promotion</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Icône de séparation

:::demo Configurez `separator-class` pour utiliser `iconfont` en tant que séparateur. Cela remplacera `separator`.

```html
<top-breadcrumb separator-class="top-icon-arrow-right">
  <top-breadcrumb-item :to="{ path: '/' }">Accueil</top-breadcrumb-item>
  <top-breadcrumb-item>Gestion promotions</top-breadcrumb-item>
  <top-breadcrumb-item>Liste promotions</top-breadcrumb-item>
  <top-breadcrumb-item>Détail promotion</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Attributs de Breadcrumb
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | Caractère de séparation | string | — | / |
| separator-class | Classe de l'icône de séparation | string | — | - |

### Attributs de Breadcrumb Item
| Attributs      | Description          | Type      | Valeurs acceptées            | Défaut|
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to | Route cible du lien, identique au `to` de `vue-router`. | string/object | — | — |
| replace | Si `true`, la navigation ne laissera pas d'enregistrement dans l'historique. | boolean | — | false |
