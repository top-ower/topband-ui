import { createTest, createVue, triggerEvent, destroyVM, waitImmediate } from '../util';
import Slider from 'packages/slider';

describe('Slider', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Slider);
    expect(vm.value).to.equal(0);
  });

  it('should not exceed min and max', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" :min="50">
          </top-slider>
        </div>
      `,

      data() {
        return {
          value: 50
        };
      }
    }, true);
    setTimeout(() => {
      vm.value = 40;
      vm.$nextTick(() => {
        expect(vm.value).to.equal(50);
        vm.value = 120;
        vm.$nextTick(() => {
          expect(vm.value).to.equal(100);
          done();
        });
      });
    }, 10);
  });

  it('show tooltip', () => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value">
          </top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    slider.handleMouseEnter();
    expect(slider.$refs.tooltip.showPopper).to.true;
    slider.handleMouseLeave();
    expect(slider.$refs.tooltip.showPopper).to.false;
  });

  it('hide tooltip', () => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" :show-tooltip="false">
          </top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    expect(slider.$refs.tooltip.disabled).to.true;
  });

  it('format tooltip', async() => {
    vm = createVue({
      template: `
        <div>
          <top-slider ref="slider" v-model="value" :format-tooltip="formatTooltip">
          </top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      },
      methods: {
        formatTooltip(val) {
          return '$' + val;
        }
      }
    }, true);
    const sliderButton = vm.$refs.slider.$children[0];
    await waitImmediate();
    expect(sliderButton.formatValue).to.equal('$0');
  });

  it('drag', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" :vertical="vertical"></top-slider>
        </div>
      `,

      data() {
        return {
          vertical: false,
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    slider.onButtonDown({ clientX: 0, preventDefault() {} });
    slider.onDragging({ clientX: 100 });
    slider.onDragEnd();
    setTimeout(() => {
      expect(vm.value > 0).to.true;
      vm.vertical = true;
      vm.value = 0;
      vm.$nextTick(() => {
        expect(vm.value === 0).to.true;
        slider.onButtonDown({ clientY: 0, preventDefault() {} });
        slider.onDragging({ clientY: -100 });
        slider.onDragEnd();
        setTimeout(() => {
          expect(vm.value > 0).to.true;
          done();
        }, 10);
      });
    }, 10);
  });

  it('accessibility', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value"></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0.1
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    slider.onRightKeyDown();
    setTimeout(() => {
      expect(vm.value).to.equal(1);
      slider.onLeftKeyDown();
      setTimeout(() => {
        expect(vm.value).to.equal(0);
        done();
      }, 10);
    }, 10);
  });

  it('step', done => {
    vm = createVue({
      template: `
        <div style="width: 200px;">
          <top-slider v-model="value" :min="0" :max="1" :step="0.1"></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    slider.onButtonDown({ clientX: 0, preventDefault() {} });
    slider.onDragging({ clientX: 100 });
    slider.onDragEnd();
    setTimeout(() => {
      expect(vm.value > 0.4 && vm.value < 0.6).to.true;
      done();
    }, 10);
  });

  it('click', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value"></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    setTimeout(() => {
      slider.onSliderClick({ clientX: 100 });
      setTimeout(() => {
        expect(vm.value > 0).to.true;
        done();
      }, 10);
    }, 10);
  });

  it('change event', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" @change="onChange">
          </top-slider>
        </div>
      `,

      data() {
        return {
          data: 0,
          value: 0
        };
      },
      methods: {
        onChange(val) {
          this.data = val;
        }
      }
    }, true);
    const slider = vm.$children[0];
    vm.value = 10;
    setTimeout(() => {
      expect(vm.data).to.equal(0);
      slider.onSliderClick({ clientX: 100 });
      setTimeout(() => {
        expect(vm.data > 0).to.true;
        done();
      }, 10);
    }, 10);
  });

  it('disabled', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" disabled></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0].$children[0];
    slider.onButtonDown({ clientX: 0 });
    slider.onDragging({ clientX: 100 });
    slider.onDragEnd();
    setTimeout(() => {
      expect(vm.value).to.equal(0);
      done();
    }, 10);
  });

  it('show input', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider v-model="value" show-input></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    setTimeout(() => {
      triggerEvent(vm.$el.querySelector('.top-input-number'), 'keyup');
      const inputNumber = vm.$el.querySelector('.top-input-number').__vue__;
      inputNumber.setCurrentValue(40);
      setTimeout(() => {
        expect(vm.value).to.equal(40);
        done();
      }, 10);
    }, 10);
  });

  it('show stops', () => {
    vm = createTest(Slider, {
      showStops: true,
      step: 10
    }, true);
    const stops = vm.$el.querySelectorAll('.top-slider__stop');
    expect(stops.length).to.equal(9);
  });

  it('vertical mode', done => {
    vm = createVue({
      template: `
        <div>
          <top-slider vertical v-model="value" height="200px"></top-slider>
        </div>
      `,

      data() {
        return {
          value: 0
        };
      }
    }, true);
    const slider = vm.$children[0];
    setTimeout(() => {
      slider.onSliderClick({ clientY: 100 });
      setTimeout(() => {
        expect(vm.value > 0).to.true;
        done();
      }, 10);
    }, 10);
  });

  describe('range', () => {
    it('basic ranged slider', () => {
      vm = createVue({
        template: `
        <div>
          <top-slider v-model="value" range></top-slider>
        </div>
      `,

        data() {
          return {
            value: [10, 20]
          };
        }
      }, true);
      const buttons = vm.$children[0].$children;
      expect(buttons.length).to.equal(2);
    });

    it('should not exceed min and max', done => {
      vm = createVue({
        template: `
        <div>
          <top-slider v-model="value" range :min="50">
          </top-slider>
        </div>
      `,

        data() {
          return {
            value: [50, 60]
          };
        }
      }, true);
      setTimeout(() => {
        vm.value = [40, 60];
        setTimeout(() => {
          expect(vm.value).to.deep.equal([50, 60]);
          vm.value = [50, 120];
          setTimeout(() => {
            expect(vm.value).to.deep.equal([50, 100]);
            done();
          }, 10);
        }, 10);
      }, 10);
    });

    it('click', done => {
      vm = createVue({
        template: `
        <div style="width: 200px;">
          <top-slider range v-model="value"></top-slider>
        </div>
      `,

        data() {
          return {
            value: [0, 100]
          };
        }
      }, true);
      const slider = vm.$children[0];
      setTimeout(() => {
        slider.onSliderClick({ clientX: 100 });
        setTimeout(() => {
          expect(vm.value[0] > 0).to.true;
          expect(vm.value[1]).to.equal(100);
          done();
        }, 10);
      }, 10);
    });

    it('responsive to dynamic min and max', done => {
      vm = createVue({
        template: `
        <div>
          <top-slider v-model="value" range :min="min" :max="max">
          </top-slider>
        </div>
      `,

        data() {
          return {
            min: 0,
            max: 100,
            value: [50, 80]
          };
        }
      }, true);
      setTimeout(() => {
        vm.min = 60;
        setTimeout(() => {
          expect(vm.value).to.deep.equal([60, 80]);
          vm.min = 30;
          vm.max = 40;
          setTimeout(() => {
            expect(vm.value).to.deep.equal([40, 40]);
            done();
          }, 10);
        }, 10);
      }, 10);
    });

    it('show stops', done => {
      vm = createVue({
        template: `
        <div>
          <top-slider
            v-model="value"
            range
            :step="10"
            show-stops></top-slider>
        </div>
      `,

        data() {
          return {
            value: [30, 60]
          };
        }
      }, true);
      setTimeout(() => {
        const stops = vm.$el.querySelectorAll('.top-slider__stop');
        expect(stops.length).to.equal(5);
        done();
      }, 10);
    });
  });
});
