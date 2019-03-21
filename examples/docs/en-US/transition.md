## Built-in transition

You can use Element's built-in transitions directly. Before that, please read the [transition docs](https://vuejs.org/v2/api/#transition).

### fade

:::demo We have two fading effects: `top-fade-in-linear` and `top-fade-in`.
```html
<template>
  <div>
    <top-button @click="show = !show">Click Me</top-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="top-fade-in-linear">
        <div v-show="show" class="transition-box">.top-fade-in-linear</div>
      </transition>
      <transition name="top-fade-in">
        <div v-show="show" class="transition-box">.top-fade-in</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### zoom

:::demo `top-zoom-in-center`, `top-zoom-in-top` and `top-zoom-in-bottom` are provided.
```html
<template>
  <div>
    <top-button @click="show2 = !show2">Click Me</top-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="top-zoom-in-center">
        <div v-show="show2" class="transition-box">.top-zoom-in-center</div>
      </transition>

      <transition name="top-zoom-in-top">
        <div v-show="show2" class="transition-box">.top-zoom-in-top</div>
      </transition>

      <transition name="top-zoom-in-bottom">
        <div v-show="show2" class="transition-box">.top-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show2: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::


### collapse

For collapse effect, use the `top-collapse-transition` component.

:::demo
```html
<template>
  <div>
    <top-button @click="show3 = !show3">Click Me</top-button>

    <div style="margin-top: 20px; height: 200px;">
      <top-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">top-collapse-transition</div>
          <div class="transition-box">top-collapse-transition</div>
        </div>
      </top-collapse-transition>
    </div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      show3: true
    })
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
```
:::

### On demand

```js
// fade/zoom
import 'topband-ui/lib/theme-chalk/base.css';
// collapse
import CollapseTransition from 'topband-ui/lib/transitions/collapse-transition';
import Vue from 'vue'

Vue.component(CollapseTransition.name, CollapseTransition)
```
