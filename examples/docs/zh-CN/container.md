## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<top-container>`：外层容器。当子元素中包含 `<top-header>` 或 `<top-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<top-header>`：顶栏容器。

`<top-aside>`：侧边栏容器。

`<top-main>`：主要区域容器。

`<top-footer>`：底栏容器。

:::tip
以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<top-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<top-container>`。
:::

### 常见页面布局

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

### 实例

:::demo
```html
<top-container style="height: 500px; border: 1px solid #eee">
  <top-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <top-menu :default-openeds="['1', '3']">
      <top-submenu index="1">
        <template slot="title"><i class="top-icon-message"></i>导航一</template>
        <top-menu-item-group>
          <template slot="title">分组一</template>
          <top-menu-item index="1-1">选项1</top-menu-item>
          <top-menu-item index="1-2">选项2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="分组2">
          <top-menu-item index="1-3">选项3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="1-4">
          <template slot="title">选项4</template>
          <top-menu-item index="1-4-1">选项4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
      <top-submenu index="2">
        <template slot="title"><i class="top-icon-menu"></i>导航二</template>
        <top-menu-item-group>
          <template slot="title">分组一</template>
          <top-menu-item index="2-1">选项1</top-menu-item>
          <top-menu-item index="2-2">选项2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="分组2">
          <top-menu-item index="2-3">选项3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="2-4">
          <template slot="title">选项4</template>
          <top-menu-item index="2-4-1">选项4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
      <top-submenu index="3">
        <template slot="title"><i class="top-icon-setting"></i>导航三</template>
        <top-menu-item-group>
          <template slot="title">分组一</template>
          <top-menu-item index="3-1">选项1</top-menu-item>
          <top-menu-item index="3-2">选项2</top-menu-item>
        </top-menu-item-group>
        <top-menu-item-group title="分组2">
          <top-menu-item index="3-3">选项3</top-menu-item>
        </top-menu-item-group>
        <top-submenu index="3-4">
          <template slot="title">选项4</template>
          <top-menu-item index="3-4-1">选项4-1</top-menu-item>
        </top-submenu>
      </top-submenu>
    </top-menu>
  </top-aside>
  
  <top-container>
    <top-header style="text-align: right; font-size: 12px">
      <top-dropdown>
        <i class="top-icon-setting" style="margin-right: 15px"></i>
        <top-dropdown-menu slot="dropdown">
          <top-dropdown-item>查看</top-dropdown-item>
          <top-dropdown-item>新增</top-dropdown-item>
          <top-dropdown-item>删除</top-dropdown-item>
        </top-dropdown-menu>
      </top-dropdown>
      <span>王小虎</span>
    </top-header>
    
    <top-main>
      <top-table :data="tableData">
        <top-table-column prop="date" label="日期" width="140">
        </top-table-column>
        <top-table-column prop="name" label="姓名" width="120">
        </top-table-column>
        <top-table-column prop="address" label="地址">
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
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
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
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `top-header` 或 `top-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数    | 说明     | 类型    | 可选值      | 默认值 |
|---------|----------|---------|-------------|--------|
| height | 底栏高度 | string | — | 60px |