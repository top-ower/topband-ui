<template>
  <div class="top-breadcrumb" aria-label="Breadcrumb" role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TOPBreadcrumb',

    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorClass: {
        type: String,
        default: ''
      }
    },

    provide() {
      return {
        topBreadcrumb: this
      };
    },

    mounted() {
      const items = this.$el.querySelectorAll('.top-breadcrumb__item');
      if (items.length) {
        items[items.length - 1].setAttribute('aria-current', 'page');
      }
    }
  };
</script>
