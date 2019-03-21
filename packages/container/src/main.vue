<template>
  <section class="top-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'TOPContainer',

    componentName: 'TOPContainer',

    props: {
      direction: String
    },

    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'top-header' || tag === 'top-footer';
          })
          : false;
      }
    }
  };
</script>
