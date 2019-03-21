## Breadcrumb

Muestra la localización de la página actual, haciendo más fácil el poder ir a la página anterior.

### Uso básico


:::demo En `top-breadcrumb`, cada `top-breadcrumb-item` es un tag que representa cada nivel empezando desde la homepage. Este componente tiene un atributo `String` llamado `separator`, el mismo determina el caracter separador. El valor por defecto es '/'.

```html
<top-breadcrumb separator="/">
  <top-breadcrumb-item :to="{ path: '/' }">homepage</top-breadcrumb-item>
  <top-breadcrumb-item><a href="/">promotion management</a></top-breadcrumb-item>
  <top-breadcrumb-item>promotion list</top-breadcrumb-item>
  <top-breadcrumb-item>promotion detail</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Icono separador

:::demo Setee `separator-class` para que utilice `iconfont` como separador，el mismo va a cubrir `separator`

```html
<top-breadcrumb separator-class="top-icon-arrow-right">
  <top-breadcrumb-item :to="{ path: '/' }">homepage</top-breadcrumb-item>
  <top-breadcrumb-item>promotion management</top-breadcrumb-item>
  <top-breadcrumb-item>promotion list</top-breadcrumb-item>
  <top-breadcrumb-item>promotion detail</top-breadcrumb-item>
</top-breadcrumb>
```
:::

### Breadcrumb atributos
| Atributo        | Descripción                            | Tipo   | Valores aceptados | Por defecto |
| --------------- | -------------------------------------- | ------ | ----------------- | ----------- |
| separator       | caracter separador                     | string | —                 | /           |
| separator-class | nombre de la clase del icono separador | string | —                 | -           |

### Breadcrumb Item atributos
| Atributo | Descripción                              | Tipo          | Valores aceptados | Por defecto |
| -------- | ---------------------------------------- | ------------- | ----------------- | ----------- |
| to       | ruta del link, lo mismo que `to` de `vue-router` | string/object | —                 | —           |
| replace  | si `true`,  la navegación no dejara una entrada en la historia | boolean       | —                 | false       |





