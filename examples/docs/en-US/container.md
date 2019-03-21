## Container
Container components for scaffolding basic structure of the page:

`<top-container>`: wrapper container. When nested with a `<top-header>` or `<top-footer>`, all its child elements will be vertically arranged. Otherwise horizontally.

`<top-header>`: container for headers.

`<top-aside>`: container for side sections (usually a side nav).

`<top-main>`: container for main sections.

`<top-footer>`: container for footers.

:::tip
These components use flex for layout, so please make sure your browser supports it. Besides, `<top-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<top-container>`.
:::

### Common layouts

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

### Example

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

### Container Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| direction | layout direction for child elements | string | horizontal / vertical | vertical when nested with `top-header` or `top-footer`; horizontal otherwise |

### Header Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the header | string | — | 60px |

### Aside Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | width of the side section | string | — | 300px |

### Footer Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | height of the footer | string | — | 60px |