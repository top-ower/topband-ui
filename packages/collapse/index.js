import TOPCollapse from './src/collapse';

/* istanbul ignore next */
TOPCollapse.install = function(Vue) {
  Vue.component(TOPCollapse.name, TOPCollapse);
};

export default TOPCollapse;