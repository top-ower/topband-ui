<template>
  <span class="top-breadcrumb__item">
    <span
      :class="['top-breadcrumb__inner', to ? 'is-link' : '']"
      ref="link"
      role="link">
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="top-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="top-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>
<script>
  export default {
    name: 'TOPBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: '',
        separatorClass: ''
      };
    },

    inject: ['topBreadcrumb'],

    mounted() {
      this.separator = this.topBreadcrumb.separator;
      this.separatorClass = this.topBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', _ => {
        const { to, $router } = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      });
    }
  };
</script>
