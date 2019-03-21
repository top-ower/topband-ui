<template>
  <div class="top-collapse-item" :class="{'is-active': isActive}">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`top-collapse-content-${id}`"
      :aria-describedby ="`top-collapse-content-${id}`"
    >
      <div
        class="top-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`top-collapse-head-${id}`"
        tabindex="0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="top-collapse-item__arrow top-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <top-collapse-transition>
      <div
        class="top-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`top-collapse-head-${id}`"
        :id="`top-collapse-content-${id}`"
      >
        <div class="top-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </top-collapse-transition>
  </div>
</template>
<script>
  import TOPCollapseTransition from 'topband-ui/src/transitions/collapse-transition';
  import Emitter from 'topband-ui/src/mixins/emitter';
  import { generateId } from 'topband-ui/src/utils/util';

  export default {
    name: 'TOPCollapseItem',

    componentName: 'TOPCollapseItem',

    mixins: [Emitter],

    components: { TOPCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      }
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
      id() {
        return generateId();
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        this.dispatch('TOPCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('TOPCollapse', 'item-click', this);
      }
    }
  };
</script>
