## Badge

Un nombre ou un status affiché par-dessus un bouton ou un icône.

### Usage

Affiche le nombre de nouveaux messages.

:::demo La quantité est définit par `value` qui accepte un `Number` ou un `String`.

```html
<top-badge :value="12" class="item">
  <top-button size="small">Commentaires</top-button>
</top-badge>
<top-badge :value="3" class="item">
  <top-button size="small">Réponses</top-button>
</top-badge>
<top-badge :value="1" class="item" type="primary">
  <top-button size="small">Commentaires</top-button>
</top-badge>
<top-badge :value="2" class="item" type="warning">
  <top-button size="small">Réponses</top-button>
</top-badge>

<top-dropdown trigger="click">
  <span class="top-dropdown-link">
    Cliquez<i class="top-icon-caret-bottom top-icon--right"></i>
  </span>
  <top-dropdown-menu slot="dropdown">
    <top-dropdown-item class="clearfix">
      Commentaires
      <top-badge class="mark" :value="12" />
    </top-dropdown-item>
    <top-dropdown-item class="clearfix">
      Réponses
      <top-badge class="mark" :value="3" />
    </top-dropdown-item>
  </top-dropdown-menu>
</top-dropdown>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Valeur maximale

Vous pouvez configurer la valeur maximale.

:::demo La valeur maximale est définit par `max` qui accepte un `Number`. Ceci ne marche qui si `value` est également un `Number`.

```html
<top-badge :value="200" :max="99" class="item">
  <top-button size="small">Commentaires</top-button>
</top-badge>
<top-badge :value="100" :max="10" class="item">
  <top-button size="small">Réponses</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Configuration

Affiche du texte autre que des nombres.

:::demo Quand `value` est un `String`, il affiche un texte personnalisé.

```html
<top-badge value="new" class="item">
  <top-button size="small">Commentaires</top-button>
</top-badge>
<top-badge value="hot" class="item">
  <top-button size="small">Réponses</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Point rouge

Utilisez un point rouge pour signaler du contenu devant être remarqué.

:::demo Utilisez l'attribut `is-dot` qui est un `Boolean`.

```html
<top-badge is-dot class="item">Requète</top-badge>
<top-badge is-dot class="item">
  <top-button class="share-button" icon="top-icon-share" type="primary"></top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Attributs

| Attribut     | Description     | Type            | Valeurs acceptées       | Défaut |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value         | Valeur affichée.   | string, number  |          —            |    —    |
| max           |  Valeur maximale, affiche '{max}+' quand elle est dépassée. Ne marche que si `value` est un `Number`.   | number  |         —              |     —    |
| is-dot        | Affiche un point rouge. | boolean   |    —           |  false  |
| hidden        | Cache le badge.    | boolean         |          —            |  false  |
| type          | Type du bouton.     | string          | primary / success / warning / danger / info |   —  |
