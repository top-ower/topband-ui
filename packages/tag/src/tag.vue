<script>
  export default {
    name: 'ElTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        event.stopPropagation();
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const classes = [ 'top-tag', this.type ? `top-tag--${this.type}` : '',
        this.tagSize ? `top-tag--${this.tagSize}` : '',
        {'is-hit': this.hit}
      ];
      const tagEl = (<span class={classes} style={{backgroundColor: this.color}} on-click={this.handleClick}>
        { this.$slots.default }
        {
          this.closable && <i class="top-tag__close top-icon-close" on-click={this.handleClose}></i>
        }
      </span>);

      return this.disableTransitions ? tagEl : <transition name="top-zoom-in-center">{ tagEl }</transition>;
    }
  };
</script>
