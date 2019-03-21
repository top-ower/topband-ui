<template>
  <aside class="top-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'TOPAside',

    componentName: 'TOPAside',

    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>
