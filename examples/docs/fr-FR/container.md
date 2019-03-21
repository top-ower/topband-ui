## Container
Les composants Container servent à structurer la page:

`<top-container>`: Conteneur de wrapping. QUand iil est placé à l'intérieur de `<top-header>` ou `<top-footer>`, tout les éléments enfants seront placés verticalement. Dans le cas contraire ils seront placés horizontalement.

`<top-header>`: Conteneur pour headers.

`<top-aside>`: Conteneur pour section latérale (en général un menu).

`<top-main>`: Conteneur pour le contenu principal.

`<top-footer>`: Conteneur pour footers.

:::tip
Ces composants utlisent flexbox, assurez vous que le navigateur supporte cette fonctionnalité. De plus, les éléments enfants directs de `<top-container>` doivent être un des quatres éléments précédents, leur élément père devant obligatoirement être `<top-container>`.
:::

### Mises en page habituelles

:::demo
```html
<top-container>
  <top-header>Header</top-header>
  <top-main>Main</top-main>
</top-container>

<top-container>
  <top-header>Header</top-header>
  <top-main>Main</top-main>
  <top-footer>Footer</top-footer>
</top-container>

<top-container>
  <top-aside width="200px">Aside</top-aside>
  <top-main>Main</top-main>
</top-container>

<top-container>
  <top-header>Header</top-header>
  <top-container>
    <top-aside width="200px">Aside</top-aside>
    <top-main>Main</top-main>
  </top-container>
</top-container>

<top-container>
  <top-header>Header</top-header>
  <top-container>
    <top-aside width="200px">Aside</top-aside>
    <top-container>
      <top-main>Main</top-main>
      <top-footer>Footer</top-footer>
    </top-container>
  </top-container>
</top-container>

<top-container>
  <top-aside width="200px">Aside</top-aside>
  <top-container>
    <top-header>Header</top-header>
    <top-main>Main</top-main>
  </top-container>
</top-container>

<top-container>
  <top-aside width="200px">Aside</top-aside>
  <top-container>
    <top-header>Header</top-header>
    <top-main>Main</top-main>
    <top-footer>Footer</top-footer>
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

### Exemple

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

### Attributs de Container
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | Direction d'affichage pour les éléments enfants. | string | horizontal / vertical | vertical quand dans `top-header` ou `top-footer`; horizontal sinon |

### Attributs de Header
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du header. | string | — | 60px |

### Attributs de Aside
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | Largeur de la section. | string | — | 300px |

### Attributs de Footer
| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | Hauteur du footer. | string | — | 60px |
