<template>
  <transition name="top-alert-fade">
    <div
      class="top-alert"
      :class="[typeClass, center ? 'is-center' : '']"
      v-show="visible"
      role="alert"
    >
      <i class="top-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="top-alert__content">
        <span class="top-alert__title" :class="[ isBoldTitle ]" v-if="title || $slots.title">
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="top-alert__description" v-if="$slots.default && !description"><slot></slot></p>
        <p class="top-alert__description" v-if="description && !$slots.default">{{ description }}</p>
        <i class="top-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'top-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'top-icon-success',
    'warning': 'top-icon-warning',
    'error': 'top-icon-error'
  };
  export default {
    name: 'TOPAlert',

    props: {
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: Boolean,
      center: Boolean
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `top-alert--${ this.type }`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'top-icon-info';
      },

      isBigIcon() {
        return this.description || this.$slots.default ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description || this.$slots.default ? 'is-bold' : '';
      }
    }
  };
</script>
