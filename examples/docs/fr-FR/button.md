## Bouton

Bouton communément utilisé.

### Usage

:::demo Utilisez `type`, `plain`, `round` et `circle` pour définir le style du bouton.

```html
<top-row>
  <top-button>Default</top-button>
  <top-button type="primary">Primary</top-button>
  <top-button type="success">Success</top-button>
  <top-button type="info">Info</top-button>
  <top-button type="warning">Warning</top-button>
  <top-button type="danger">Danger</top-button>
</top-row>

<top-row>
  <top-button plain>Plain</top-button>
  <top-button type="primary" plain>Primary</top-button>
  <top-button type="success" plain>Success</top-button>
  <top-button type="info" plain>Info</top-button>
  <top-button type="warning" plain>Warning</top-button>
  <top-button type="danger" plain>Danger</top-button>
</top-row>

<top-row>
  <top-button round>Round</top-button>
  <top-button type="primary" round>Primary</top-button>
  <top-button type="success" round>Success</top-button>
  <top-button type="info" round>Info</top-button>
  <top-button type="warning" round>Warning</top-button>
  <top-button type="danger" round>Danger</top-button>
</top-row>

<top-row>
  <top-button icon="top-icon-search" circle></top-button>
  <top-button type="primary" icon="top-icon-edit" circle></top-button>
  <top-button type="success" icon="top-icon-check" circle></top-button>
  <top-button type="info" icon="top-icon-message" circle></top-button>
  <top-button type="warning" icon="top-icon-star-off" circle></top-button>
  <top-button type="danger" icon="top-icon-delete" circle></top-button>
</top-row>
```
:::

### Bouton désactivé

L'attribut `disabled` détermine si le bouton est désactivé.

:::demo Utilisez l'attribut `disabled` pour déterminer si un bouton est désactivé ou non. Il accepte un `Boolean`.

```html
<top-row>
  <top-button disabled>Défaut</top-button>
  <top-button type="primary" disabled>Principal</top-button>
  <top-button type="success" disabled>Succès</top-button>
  <top-button type="info" disabled>Info</top-button>
  <top-button type="warning" disabled>Attention</top-button>
  <top-button type="danger" disabled>Danger</top-button>
</top-row>

<top-row>
  <top-button plain disabled>Plein</top-button>
  <top-button type="primary" plain disabled>Principal</top-button>
  <top-button type="success" plain disabled>Succès</top-button>
  <top-button type="info" plain disabled>Info</top-button>
  <top-button type="warning" plain disabled>Attention</top-button>
  <top-button type="danger" plain disabled>Danger</top-button>
</top-row>
```
:::

### Bouton texte

Bouton sans bordure ni fond.

:::demo
```html
<top-button type="text">Bouton texte</top-button>
<top-button type="text" disabled>Bouton texte</top-button>
```
:::

### Icône

Utilisez des icônes pour ajouter plus de sens aux boutons. Vous pouvez utiliser uniquement l'icône pour économiser de l'espace, ou bien l'utiliser en plus du texte.

:::demo Utilisez l'attribut `icon` pour ajouter une icône. Vous pourrez trouver la liste des icônes dans le composant Icon d'Element. Ajouter des icônes sur le coté droit du texte est possible grâce à la balise `<i>`. Des icônes personnalisées peuvent également être utilisées.

```html
<top-button type="primary" icon="top-icon-edit"></top-button>
<top-button type="primary" icon="top-icon-share"></top-button>
<top-button type="primary" icon="top-icon-delete"></top-button>
<top-button type="primary" icon="top-icon-search">Recherche</top-button>
<top-button type="primary">Upload<i class="top-icon-upload top-icon-right"></i></top-button>
```
:::

### Groupes de boutons

Affiche un groupe de bouton. Peut être utilisé pour grouper un ensemble d'opérations similaires.

:::demo Utilisez la balise `<top-button-group>` pour grouper vos boutons.

```html
<top-button-group>
  <top-button type="primary" icon="top-icon-arrow-left">Page précédente</top-button>
  <top-button type="primary">Page suivante<i class="top-icon-arrow-right top-icon-right"></i></top-button>
</top-button-group>
<top-button-group>
  <top-button type="primary" icon="top-icon-edit"></top-button>
  <top-button type="primary" icon="top-icon-share"></top-button>
  <top-button type="primary" icon="top-icon-delete"></top-button>
</top-button-group>
```
:::

### Bouton en chargement

Cliquez sur le bouton pour charger des données et il affichera un état de chargement.

:::demo Configurez l'attribut `loading` à `true` pour afficher un état de chargement.

```html
<top-button type="primary" :loading="true">Chargement</top-button>
```
:::

### Tailles

En plus de la taille par défaut, le composant Button fournit trois tailles supplémentaires pour différents scénarios.

:::demo Utilisez l'attribut `size` pour choisir d'autres tailles parmi `medium`, `small` ou `mini`.

```html
<top-row>
  <top-button>Défaut</top-button>
  <top-button size="medium">Medium</top-button>
  <top-button size="small">Small</top-button>
  <top-button size="mini">Mini</top-button>
</top-row>
<top-row>
  <top-button round>Défaut</top-button>
  <top-button size="medium" round>Medium</top-button>
  <top-button size="small" round>Small</top-button>
  <top-button size="mini" round>Mini</top-button>
</top-row>
```
:::

### Attributs
| Attribut      | Description    | Type      | Valeurs acceptées       | Défaut   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | Taille du bouton.   | string  |   medium / small / mini            |    —     |
| type     | Type du bouton.   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | Détermine si le bouton est plein.   | boolean    | — | false   |
| round     | Détermine si le bouton est arrondi.   | boolean    | — | false   |
| circle     | Détermine si le bouton est un cercle.   | boolean    | — | false   |
| loading   | Détermine si l'état de chargement est affiché.   | boolean    | — | false   |
| disabled  | Désactive le bouton    | boolean   | —   | false   |
| icon  | Classe de l'icône. | string   |  —  |  —  |
| autofocus  | Identique à l'attribut natif `autofocus` | boolean   |  —  |  false  |
| native-type | Identique à l'attribut natif `type` | string | button / submit / reset | button |
