## Radio
Selección única entre múltiples opciones.

### Uso básico
El elemento Radio no debe tener muchas opciones. De otra manera, utilice el componente Select.

:::demo Crear un elemento Radio es fácil, solo necesita enlazar(`bind`) una variable a la directiva `v-model` del Radio. Va a ser igual al valor `label` del Radio seleccionado. El tipo de dato de `label` es `String`, `Number` o `Boolean`.
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

### Deshabilitado

El atributo `disabled` es utilizado para deshabilitar un Radio.

:::demo Solo necesita agregar el atributo `disabled`.
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

### Grupo de elementos Radio

Recomendado para seleccionar opciones que se excluyen mutuamente.

:::demo Combine `top-radio-group` con `top-radio` para mostrar un grupo de Radios. Enlace la variable con `v-model` del elemento `top-radio-group` y asigne el valor del `label` en `top-radio`. Se provee el evento `change` con el valor actual como parámetro.

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

### Estilo Button

Radio con estilo de botón.

:::demo Solo necesita cambiar el elemento `top-radio` a `top-radio-button`. Se provee el atributo `size`.
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

### Con bordes

:::demo El atributo `border` agrega un borde al elemento Radio.
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

### Atributos de Radio

| Atributo | Descripción                              | Tipo                      | Valores Aceptado      | Por defecto |
| -------- | ---------------------------------------- | ------------------------- | --------------------- | ----------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| label    | el valor del Radio                       | string / number / boolean | —                     | —           |
| disabled | si el Radio está deshabilitado           | boolean                   | —                     | false       |
| border   | agregar borde alrededor del elemento Radio | boolean                   | —                     | false       |
| size     | tamaño del elemento Radio, solo funciona si `border` es verdadero | string                    | medium / small / mini | —           |
| name     | atributo nativo 'name'                   | string                    | —                     | —           |

### Atributos de Radio-button

| Atributo | Descripción                    | Tipo            | Valores Aceptado | Por defecto |
| -------- | ------------------------------ | --------------- | ---------------- | ----------- |
| label    | el valor del Radio             | string / number | —                | —           |
| disabled | si el Radio está deshabilitado | boolean         | —                | false       |
| name     | atributo nativo 'name'         | string          | —                | —           |

### Atributos de Radio-group

| Atributo   | Descripción                              | Tipo    | Valores Aceptado      | Valores por defecto |
| ---------- | ---------------------------------------- | ------- | --------------------- | ------------------- |
| value / v-model | valor enlazado | string / number / boolean | — | — |
| size       | tamaño de los `radio buttons` o `bordered radios` | string  | medium / small / mini | —                   |
| disabled   | si la anidación de radios está desahabilitada | boolean | —                     | false               |
| text-color | color de las letras cuando el botón está activo | string  | —                     | #ffffff             |
| fill       | color del borde y fondo cuando el botón está activo | string  | —                     | #409EFF             |

### Eventos de Radio 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |


### Eventos de Radio-group 

| Nombre de evento | Descripción                       | Parámetros                               |
| ---------------- | --------------------------------- | ---------------------------------------- |
| change           | se dispara cuando el valor cambia | el valor del `label` del Radio seleccionado |

