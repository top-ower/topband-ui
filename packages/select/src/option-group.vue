<template>
  <ul class="top-select-group__wrap" v-show="visible">
    <li class="top-select-group__title">{{ label }}</li>
    <li>
      <ul class="top-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'topband-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'ElOptionGroup',

    componentName: 'ElOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('ElOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
