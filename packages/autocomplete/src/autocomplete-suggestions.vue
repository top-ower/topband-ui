<template>
  <transition name="top-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="top-autocomplete-suggestion top-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <top-scrollbar
        tag="ul"
        wrap-class="top-autocomplete-suggestion__wrap"
        view-class="top-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="top-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </top-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'topband-ui/src/utils/vue-popper';
  import Emitter from 'topband-ui/src/mixins/emitter';
  import TOPScrollbar from 'topband-ui/packages/scrollbar';

  export default {
    components: { TOPScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'TOPAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('TOPAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input;
      this.referenceList = this.$el.querySelector('.top-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
