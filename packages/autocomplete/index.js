import TOPAutocomplete from './src/autocomplete';

/* istanbul ignore next */
TOPAutocomplete.install = function(Vue) {
  Vue.component(TOPAutocomplete.name, TOPAutocomplete);
};

export default TOPAutocomplete;
