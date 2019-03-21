## Progreso
Progreso es usado para mostrar el estado de la operación actual e informar al usuario acerca de ésta.

### Barra de progreso lineal (porcentage externo)

:::demo Usa el atributo `percentage` para asignar el porcentage. Este es **requerido** y tiene que ser un valor entre `0-100`.
```html
<top-progress :percentage="0"></top-progress>
<top-progress :percentage="70"></top-progress>
<top-progress :percentage="80" color="#8e71c7"></top-progress>
<top-progress :percentage="100" status="success"></top-progress>
<top-progress :percentage="50" status="exception"></top-progress>
```
:::

### Barra de progreso lineal (porcentage interno)
En este caso el porcentage no toma espacio adicional.

:::demo El atributo `stroke-width` decide el ancho de la barra de progreso, y usa el atributo `text-inside` para poner la descripción dentro de la misma.
```html
<top-progress :text-inside="true" :stroke-width="18" :percentage="0"></top-progress>
<top-progress :text-inside="true" :stroke-width="18" :percentage="70"></top-progress>
<top-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></top-progress>
<top-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></top-progress>
<top-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></top-progress>
```
:::

### Barra de progreso circular

:::demo Puede asignar el atributo `type` como `circle` para usar la barra circular de progreso, y usar el atributo `width` para cambiar el tamaño del círculo.
```html
<top-progress type="circle" :percentage="0"></top-progress>
<top-progress type="circle" :percentage="25"></top-progress>
<top-progress type="circle" :percentage="80" color="#8e71c7"></top-progress>
<top-progress type="circle" :percentage="100" status="success"></top-progress>
<top-progress type="circle" :percentage="50" status="exception"></top-progress>
<top-progress type="circle" :percentage="100" status="text">Done</top-progress>
```
:::

### Atributos
| Atributo     | Descripción                              | Tipo    | Valores aceptado  | Por defecto |
| ------------ | ---------------------------------------- | ------- | ----------------- | ----------- |
| percentage   | porcentaje, requerido                    | number  | 0-100             | 0           |
| type         | tipo de barra de progreso                | string  | line/circle       | line        |
| stroke-width | ancho de la barra de progreso            | number  | —                 | 6           |
| text-inside  | mostrar el porcentaje dentro de la barra de progreso, solo funciona cuando `type` es 'line' | boolean | —                 | false       |
| status       | estado actual de la barra de progreso    | string  | success/exception/text | —           |
| color        | color de fondo de la barra de progreso. Sobreescribe la propiedad `status` | string     | — |       — |
| width        | ancho del canvas que contiene la barra de progreso circula | number  | —                 | 126         |
| show-text    | mostrar porcentaje                       | boolean | —                 | true        |
