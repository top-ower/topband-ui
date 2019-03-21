## Button

Botones comúnmente usados.

### Uso básico

:::demo Use `type`, `plain`,`round` y `circle` para definir estilos a los botones.

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

### Botón deshabilitado

El atributo `disabled` determina su un botón esta deshabilitado.

:::demo Use el atributo `disabled` para determinar si un botón esta deshabilitado. Acepta un valor `Boolean`.

```html
<top-row>
  <top-button disabled>Default</top-button>
  <top-button type="primary" disabled>Primary</top-button>
  <top-button type="success" disabled>Success</top-button>
  <top-button type="info" disabled>Info</top-button>
  <top-button type="warning" disabled>Warning</top-button>
  <top-button type="danger" disabled>Danger</top-button>
</top-row>

<top-row>
  <top-button plain disabled>Plain</top-button>
  <top-button type="primary" plain disabled>Primary</top-button>
  <top-button type="success" plain disabled>Success</top-button>
  <top-button type="info" plain disabled>Info</top-button>
  <top-button type="warning" plain disabled>Warning</top-button>
  <top-button type="danger" plain disabled>Danger</top-button>
</top-row>
```
:::

### Botón de texto

Botones sin borde ni fondo.

:::demo
```html
<top-button type="text">Text Button</top-button>
<top-button type="text" disabled>Text Button</top-button>
```
:::

### Botón icono

Use iconos para darle mayor significado a Button. Se puede usar simplemente un icono o un icono con texto.

:::demo Use el atributo `icon` para agregar un icono. Puede encontrar el listado de iconos en el componente de iconos. Agregar iconos a la derecha del texto se puede conseguir con un tag `<i>`. También se pueden usar iconos custom.

```html
<top-button type="primary" icon="top-icon-edit"></top-button>
<top-button type="primary" icon="top-icon-share"></top-button>
<top-button type="primary" icon="top-icon-delete"></top-button>
<top-button type="primary" icon="top-icon-search">Search</top-button>
<top-button type="primary">Upload<i class="top-icon-upload top-icon-right"></i></top-button>
```
:::

### Grupo de botones

Mostrar un grupo de botones puede ser usado para mostrar un grupo de operaciones similares.

:::demo Use el tag `<top-button-group>` para agrupar sus botones.

```html
<top-button-group>
  <top-button type="primary" icon="top-icon-arrow-left">Previous Page</top-button>
  <top-button type="primary">Next Page<i class="top-icon-arrow-right top-icon-right"></i></top-button>
</top-button-group>
<top-button-group>
  <top-button type="primary" icon="top-icon-edit"></top-button>
  <top-button type="primary" icon="top-icon-share"></top-button>
  <top-button type="primary" icon="top-icon-delete"></top-button>
</top-button-group>
```
:::

### Botón de descarga 

Cuando se hace clic en un botón para descargar datos, el botón muestra un estado de descarga.

:::demo Ajuste el atributo `loading` a `true` para mostrar el estado de descarga.

```html
<top-button type="primary" :loading="true">Loading</top-button>
```
:::

### Tamaños

Además del tamaño por defecto, el componente Button provee tres tamaños adicionales para utilizar en diferentes escenarios.

:::demo Use el atributo `size` para setear tamaños adicionales con `medium`, `small` or `mini`.

```html
<top-row>
  <top-button>Default</top-button>
  <top-button size="medium">Medium</top-button>
  <top-button size="small">Small</top-button>
  <top-button size="mini">Mini</top-button>
</top-row>
<top-row>
  <top-button round>Default</top-button>
  <top-button size="medium" round>Medium</top-button>
  <top-button size="small" round>Small</top-button>
  <top-button size="mini" round>Mini</top-button>
</top-row>
```
:::

### Atributos
| Atributo    | Descripción                                   | Tipo    | Valores aceptados                                  | Por defecto |
| ----------- | --------------------------------------------- | ------- | -------------------------------------------------- | ----------- |
| size        | tamaño del botón                              | string  | medium / small / mini                              | —           |
| type        | tipo de botón                                 | string  | primary / success / warning / danger / info / text | —           |
| plain       | determinar si es o no un botón plano          | boolean | —                                                  | false       |
| round       | determinar si es o no un botón redondo        | boolean | —                                                  | false       |
| circle      | determina si es un boton circular             | boolean | —                                                  | false       |
| loading     | determinar si es o no un botón de descarga    | boolean | —                                                  | false       |
| disabled    | deshabilitar el botón                         | boolean | —                                                  | false       |
| icon        | nombre de la clase del icono                  | string  | —                                                  | —           |
| autofocus   | misma funcionalidad que la nativa `autofocus` | boolean | —                                                  | false       |
| native-type | misma funcionalidad que la nativa `type`      | string  | button / submit / reset                            | button      |