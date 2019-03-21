## Badge

Marcas en forma de número o estado para botones e iconos.

### Uso básico

Muestra la cantidad de mensajes nuevos.

:::demo La cantidad está definida por `value` que acepta `Number` o `String`.

```html
<top-badge :value="12" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="3" class="item">
  <top-button size="small">replies</top-button>
</top-badge>
<top-badge :value="1" class="item" type="primary">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="2" class="item" type="warning">
  <top-button size="small">replies</top-button>
</top-badge>

<top-dropdown trigger="click">
  <span class="top-dropdown-link">
    Click Me<i class="top-icon-caret-bottom top-icon--right"></i>
  </span>
  <top-dropdown-menu slot="dropdown">
    <top-dropdown-item class="clearfix">
      comments
      <top-badge class="mark" :value="12" />
    </top-dropdown-item>
    <top-dropdown-item class="clearfix">
      replies
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

### Valor máximo

Se puede personalizar el valor máximo.

:::demo El valor máximo se define como `max` el cual es un `Number`. Nota: solo funciona si `value` es también un `Number`.

```html
<top-badge :value="200" :max="99" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge :value="100" :max="10" class="item">
  <top-button size="small">replies</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Personalizaciones

Mostrar texto en vez de números.

:::demo Cuando `value` es un `String`, puede mostrar texto personalizado.

```html
<top-badge value="new" class="item">
  <top-button size="small">comments</top-button>
</top-badge>
<top-badge value="hot" class="item">
  <top-button size="small">replies</top-button>
</top-badge>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
```
:::

### Pequeño punto rojo

Puede utilizar un punto rojo para marcar contenido que debe ser notado.

:::demo Use el atributo `is-dot`. Es un `Boolean`.

```html
<top-badge is-dot class="item">query</top-badge>
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

### Atributos
| Atributo | Descripción                              | Tipo           | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | -------------- | ----------------- | ----------- |
| value    | valor a mostrar                          | string, number | —                 | —           |
| max      | valor máximo, Muestra '{max}+' cuando se excede. Solo funciona si `value` es un `Number` | number         | —                 | —           |
| is-dot   | si se debe mostrar un pequeño punto      | boolean        | —                 | false       |
| hidden   | hidden badge                             | boolean        | —                 | false       |
| type     | tipo de botón                            | string         | primary / success / warning / danger / info | — |
