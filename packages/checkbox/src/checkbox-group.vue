<script>
  import Emitter from 'topband-ui/src/mixins/emitter';

  export default {
    name: 'TOPCheckboxGroup',

    componentName: 'TOPCheckboxGroup',

    mixins: [Emitter],

    inject: {
      topFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _elFormItemSize() {
        return (this.elFormItem || {}).elFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('TOPFormItem', 'top.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="top-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
