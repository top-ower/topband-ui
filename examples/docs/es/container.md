## Contenedor
Componentes contenedores para iniciar una estructura básica de un sitio:

`<top-container>`: Contenedor. Cuando este elemento se anida con un `<top-header>` o `<top-footer>`, todos los elementos secundarios se organizan verticalmente.
De lo contrario, de forma horizontal. 

`<top-header>`: Contenedor para cabeceras.

`<top-aside>`: Contenedor para secciones laterales (generalmente, una barra lateral).

`<top-main>`: Contenedor para sección principal.

`<top-footer>`: Contenedor para pie de página.

:::tip
Estos componentes utilizan flex para el diseño, así que asegurese que el navegador lo soporta. Además, los elementos directos de `<top-container>` tienen que ser uno o más de los últimos cuatro componentes. Y el elemento padre de los últimos cuatro componentes debe ser un `<top-container>`.
:::

### Diseños comunes

:::demo
```html
<top-container>
  <top-header>Cabecera</top-header>
  <top-main>Principal</top-main>
</top-container>

<top-container>
  <top-header>Cabecera</top-header>
  <top-main>Principal</top-main>
  <top-footer>Pie de página</top-footer>
</top-container>

<top-container>
  <top-aside width="200px">Barra lateral</top-aside>
  <top-main>Principal</top-main>
</top-container>

<top-container>
  <top-header>Cabecera</top-header>
  <top-container>
    <top-aside width="200px">Barra lateral</top-aside>
    <top-main>Principal</top-main>
  </top-container>
</top-container>

<top-container>
  <top-header>Cabecera</top-header>
  <top-container>
    <top-aside width="200px">Barra lateral</top-aside>
    <top-container>
      <top-main>Principal</top-main>
      <top-footer>Pie de página</top-footer>
    </top-container>
  </top-container>
</top-container>

<top-container>
  <top-aside width="200px">Barra lateral</top-aside>
  <top-container>
    <top-header>Cabecera</top-header>
    <top-main>Principal</top-main>
  </top-container>
</top-container>

<top-container>
  <top-aside width="200px">Barra lateral</top-aside>
  <top-container>
    <top-header>Cabecera</top-header>
    <top-main>Principal</top-main>
    <top-footer>Pie de página</top-footer>
  </top-container>
</top-container>

<style>
  .top-header, .top-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .top-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .top-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .top-container {
    margin-bottom: 40px;
  }
  
  .top-container:nth-child(5) .top-aside,
  .top-container:nth-child(6) .top-aside {
    line-height: 260px;
  }
  
  .top-container:nth-child(7) .top-aside {
    line-height: 320px;
  }
</style>
```
:::

### Ejemplo

:::demo
```html
<top-container style="height: 500px; border: 1px solid #eee">
  <top-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <top-menu :default-openeds="['1', '3']">
      <top-submenu index="1">
        <template slot="title"><i class="top-icon-message"></i>Navigator One</template>
        <top-menu-item-group>
          <template slot="title">Group 1</template>
          <top-menu-item index="1-1">Option 1</top-menu-item>
          <top-menu-item index="1-2">Option 2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="Group 2">
          <top-menu-item index="1-3">Option 3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="1-4">
          <template slot="title">Option4</template>
          <top-menu-item index="1-4-1">Option 4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
      <top-submenu index="2">
        <template slot="title"><i class="top-icon-menu"></i>Navigator Two</template>
        <top-menu-item-group>
          <template slot="title">Group 1</template>
          <top-menu-item index="2-1">Option 1</top-menu-item>
          <top-menu-item index="2-2">Option 2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="Group 2">
          <top-menu-item index="2-3">Option 3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="2-4">
          <template slot="title">Option 4</template>
          <top-menu-item index="2-4-1">Option 4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
      <top-submenu index="3">
        <template slot="title"><i class="top-icon-setting"></i>Navigator Three</template>
        <top-menu-item-group>
          <template slot="title">Group 1</template>
          <top-menu-item index="3-1">Option 1</top-menu-item>
          <top-menu-item index="3-2">Option 2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="Group 2">
          <top-menu-item index="3-3">Option 3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="3-4">
          <template slot="title">Option 4</template>
          <top-menu-item index="3-4-1">Option 4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
    </top-menu>
  </top-aside>
  
  <top-container>
    <top-header style="text-align: right; font-size: 12px">
      <top-dropdown>
        <i class="top-icon-setting" style="margin-right: 15px"></i>
        <top-dropdown-menu slot="dropdown">
          <top-dropdown-item>View</top-dropdown-item>
          <top-dropdown-item>Add</top-dropdown-item>
          <top-dropdown-item>Delete</top-dropdown-item>
        </top-dropdown-menu>
      </top-dropdown>
      <span>Tom</span>
    </top-header>
    
    <top-main>
      <top-table :data="tableData">
        <top-table-column prop="date" label="Date" width="140">
        </top-table-column>
        <top-table-column prop="name" label="Name" width="120">
        </top-table-column>
        <top-table-column prop="address" label="Address">
        </top-table-column>
      </top-table>
    </top-main>
  </top-container>
</top-container>

<style>
  .top-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .top-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
```
:::

### Atributos de contenedor
| Atributo  | Descripción                              | Tipo   | Valores aceptados     | Por defecto                              |
| --------- | ---------------------------------------- | ------ | --------------------- | ---------------------------------------- |
| direction | dirección de diseño para elementos secundarios | string | horizontal / vertical | vertical cuando el elemento está anidado con `top-header`, de lo contrario, horizontal |

### Atributos de cabecera
| Atributo | Descripción           | Tipo   | Valores aceptados | Por defecto |
| -------- | --------------------- | ------ | ----------------- | ----------- |
| height   | altura de la cabecera | string | —                 | 60px        |

### Atributos de barra lateral
| Atributo | Descripción               | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------- | ------ | ----------------- | ----------- |
| width    | ancho de la barra lateral | string | —                 | 300px       |

### Atributos de pie de página
| Atributo | Descripción              | Tipo   | Valores aceptados | Por defecto |
| -------- | ------------------------ | ------ | ----------------- | ----------- |
| height   | altura del pie de página | string | —                 | 60px        |