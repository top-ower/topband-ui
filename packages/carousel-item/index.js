import TOPCarouselItem from '../carousel/src/item';

/* istanbul ignore next */
TOPCarouselItem.install = function(Vue) {
  Vue.component(TOPCarouselItem.name, TOPCarouselItem);
};

export default TOPCarouselItem;
