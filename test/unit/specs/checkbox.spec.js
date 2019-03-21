import { createVue, destroyVM } from '../util';

describe('Checkbox', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
        <top-checkbox v-model="checked">
        </top-checkbox>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    expect(checkboxElm.classList.contains('top-checkbox')).to.be.true;
    checkboxElm.click();
    vm.$nextTick(_ => {
      expect(checkboxElm.querySelector('.is-checked')).to.be.ok;
      done();
    });
  });
  it('disabled', () => {
    vm = createVue({
      template: `
        <top-checkbox
          v-model="checked"
          disabled
        >
        </top-checkbox>
      `,
      data() {
        return {
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    expect(checkboxElm.querySelector('.is-disabled')).to.be.ok;
  });
  it('change event', done => {
    vm = createVue({
      template: `
        <top-checkbox v-model="checked" @change="onChange">
        </top-checkbox>
      `,
      methods: {
        onChange(val) {
          this.data = val;
        }
      },
      data() {
        return {
          data: '',
          checked: false
        };
      }
    }, true);
    let checkboxElm = vm.$el;
    checkboxElm.click();
    setTimeout(_ => {
      expect(vm.data).to.true;
      vm.checked = false;
      setTimeout(_ => {
        expect(vm.data).to.true;
        done();
      }, 10);
    }, 10);
  });
  it('checkbox group', done => {
    vm = createVue({
      template: `
        <top-checkbox-group v-model="checkList">
          <top-checkbox label="a" ref="a"></top-checkbox>
          <top-checkbox label="b" ref="b"></top-checkbox>
          <top-checkbox label="c" ref="c"></top-checkbox>
          <top-checkbox label="d" ref="d"></top-checkbox>
        </top-checkbox-group>
      `,
      data() {
        return {
          checkList: []
        };
      }
    }, true);
    expect(vm.checkList.length === 0).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      done();
    });
  });

  it('checkbox group change event', done => {
    vm = createVue({
      template: `
        <top-checkbox-group v-model="checkList" @change="onChange">
          <top-checkbox label="a" ref="a"></top-checkbox>
          <top-checkbox label="b" ref="b"></top-checkbox>
        </top-checkbox-group>
      `,
      methods: {
        onChange(val) {
          this.data = val;
        }
      },
      data() {
        return {
          data: '',
          checkList: []
        };
      }
    }, true);
    vm.$refs.a.$el.click();
    setTimeout(_ => {
      expect(vm.data).to.deep.equal(['a']);
      vm.checkList = ['b'];
      done();
    }, 10);
  });

  it('checkbox group minimum and maximum', done => {
    vm = createVue({
      template: `
        <top-checkbox-group 
          v-model="checkList" 
          :min="1" 
          :max="2"
        >
          <top-checkbox label="a" ref="a"></top-checkbox>
          <top-checkbox label="b" ref="b"></top-checkbox>
          <top-checkbox label="c" ref="c"></top-checkbox>
          <top-checkbox label="d" ref="d"></top-checkbox>
        </top-checkbox-group>
      `,
      data() {
        return {
          checkList: ['a'],
          lastEvent: null
        };
      }
    }, true);
    expect(vm.checkList.length === 1).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(() => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      vm.$refs.b.$el.click();
      vm.$nextTick(() => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        expect(vm.checkList.indexOf('b') !== -1).to.be.true;
        vm.$refs.c.$el.click();
        vm.$nextTick(() => {
          expect(vm.checkList.indexOf('c') !== -1).to.be.false;
          expect(vm.checkList.indexOf('d') !== -1).to.be.false;
          done();
        });
      });
    });
  });

  it('nested group', done => {
    vm = createVue({
      template: `
        <top-checkbox-group v-model="checkList">
          <top-row>
            <top-checkbox label="a" ref="a"></top-checkbox>
            <top-checkbox label="b" ref="b"></top-checkbox>
            <top-checkbox label="c" ref="c"></top-checkbox>
            <top-checkbox label="d" ref="d"></top-checkbox>
          </top-row>
        </top-checkbox-group>
      `,
      data() {
        return {
          checkList: []
        };
      }
    }, true);
    expect(vm.checkList.length === 0).to.be.true;
    vm.$refs.a.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checkList.indexOf('a') !== -1).to.be.true;
      done();
    });
  });

  it('true false label', done => {
    vm = createVue({
      template: `
        <top-checkbox true-label="a" :false-label="3" v-model="checked"></top-checkbox>
      `,
      data() {
        return {
          checked: 'a'
        };
      }
    }, true);
    vm.$el.click();
    vm.$nextTick(_ => {
      expect(vm.checked === 3).to.be.true;
      done();
    });
  });
  it('checked', () => {
    vm = createVue({
      template: `
        <div>
          <top-checkbox v-model="checked" checked></top-checkbox>
          <top-checkbox-group v-model="checklist">
            <top-checkbox checked label="a"></top-checkbox>
          </top-checkbox-group>
        </div>
      `,
      data() {
        return {
          checked: false,
          checklist: []
        };
      }
    }, true);
    expect(vm.checked).to.be.true;
    expect(vm.checklist.indexOf('a') !== -1).to.be.true;
  });

  describe('checkbox-button', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    });

    it('create', done => {
      vm = createVue({
        template: `
          <top-checkbox-button v-model="checked">
          </top-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('top-checkbox-button')).to.be.true;
      checkboxElm.click();
      vm.$nextTick(_ => {
        expect(checkboxElm.classList.contains('is-checked')).to.be.ok;
        done();
      });
    });
    it('disabled', () => {
      vm = createVue({
        template: `
          <top-checkbox-button
            v-model="checked"
            disabled
          >
          </top-checkbox-button>
        `,
        data() {
          return {
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      expect(checkboxElm.classList.contains('is-disabled')).to.be.ok;
    });

    it('change event', done => {
      vm = createVue({
        template: `
        <top-checkbox-button v-model="checked" @change="onChange">
        </top-checkbox-button>
      `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checked: false
          };
        }
      }, true);
      let checkboxElm = vm.$el;
      checkboxElm.click();
      setTimeout(_ => {
        expect(vm.data).to.true;
        vm.checked = false;
        setTimeout(_ => {
          expect(vm.data).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('checkbox group', done => {
      vm = createVue({
        template: `
          <top-checkbox-group v-model="checkList">
            <top-checkbox-button label="a" ref="a"></top-checkbox-button>
            <top-checkbox-button label="b" ref="b"></top-checkbox-button>
            <top-checkbox-button label="c" ref="c"></top-checkbox-button>
            <top-checkbox-button label="d" ref="d"></top-checkbox-button>
          </top-checkbox-group>
        `,
        data() {
          return {
            checkList: []
          };
        }
      }, true);
      expect(vm.checkList.length === 0).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        vm.$refs.b.$el.click();
        vm.$nextTick(_ => {
          expect(vm.checkList.indexOf('a') !== -1).to.be.true;
          expect(vm.checkList.indexOf('b') !== -1).to.be.true;
          done();
        });
      });
    });

    it('checkbox-button group change event', done => {
      vm = createVue({
        template: `
        <top-checkbox-group v-model="checkList" @change="onChange">
          <top-checkbox-button label="a" ref="a"></top-checkbox-button>
          <top-checkbox-button label="b" ref="b"></top-checkbox-button>
          <top-checkbox-button label="c" ref="c"></top-checkbox-button>
          <top-checkbox-button label="d" ref="d"></top-checkbox-button>
        </top-checkbox-group>
      `,
        methods: {
          onChange(val) {
            this.data = val;
          }
        },
        data() {
          return {
            data: '',
            checkList: []
          };
        }
      }, true);
      vm.$refs.a.$el.click();
      setTimeout(_ => {
        expect(vm.data).to.deep.equal(['a']);
        vm.checkList = ['b'];
        setTimeout(_ => {
          expect(vm.data).to.deep.equal(['a']);
          done();
        }, 10);
      }, 10);
    });

    it('checkbox group props', () => {
      vm = createVue({
        template: `
          <top-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
            <top-checkbox-button label="a" ref="a"></top-checkbox-button>
            <top-checkbox-button label="b" ref="b"></top-checkbox-button>
            <top-checkbox-button label="c" ref="c"></top-checkbox-button>
            <top-checkbox-button label="d" ref="d"></top-checkbox-button>
          </top-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a', 'd']
          };
        }
      }, true);
      expect(vm.checkList.length === 2).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('is-checked')).to.be.true;
      expect(vm.$refs.a.$el.classList.contains('top-checkbox-button--large')).to.be.true;
      expect(vm.$refs.a.$el.querySelector('.top-checkbox-button__inner').style.backgroundColor).to.be.eql('rgb(255, 0, 0)');
      expect(vm.$refs.a.$el.querySelector('.top-checkbox-button__inner').style.boxShadow).to.be.eql('rgb(255, 0, 0) -1px 0px 0px 0px');
      expect(vm.$refs.a.$el.querySelector('.top-checkbox-button__inner').style.borderColor).to.be.eql('rgb(255, 0, 0)');
      expect(vm.$refs.a.$el.querySelector('.top-checkbox-button__inner').style.color).to.be.eql('rgb(0, 0, 0)');
      expect(vm.$refs.b.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.c.$el.classList.contains('is-checked')).to.be.false;
      expect(vm.$refs.d.$el.classList.contains('is-checked')).to.be.true;
    });

    it('checkbox group minimum and maximum', done => {
      vm = createVue({
        template: `
          <top-checkbox-group 
            v-model="checkList" 
            :min="1" 
            :max="2"
          >
            <top-checkbox-button label="a" ref="a"></top-checkbox-button>
            <top-checkbox-button label="b" ref="b"></top-checkbox-button>
            <top-checkbox-button label="c" ref="c"></top-checkbox-button>
            <top-checkbox-button label="d" ref="d"></top-checkbox-button>
          </top-checkbox-group>
        `,
        data() {
          return {
            checkList: ['a'],
            lastEvent: null
          };
        }
      }, true);
      expect(vm.checkList.length === 1).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(() => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        vm.$refs.b.$el.click();
        vm.$nextTick(() => {
          expect(vm.checkList.indexOf('a') !== -1).to.be.true;
          expect(vm.checkList.indexOf('b') !== -1).to.be.true;
          vm.$refs.c.$el.click();
          vm.$nextTick(() => {
            expect(vm.checkList.indexOf('c') !== -1).to.be.false;
            expect(vm.checkList.indexOf('d') !== -1).to.be.false;
            done();
          });
        });
      });
    });

    it('nested group', done => {
      vm = createVue({
        template: `
          <top-checkbox-group v-model="checkList">
            <top-row>
              <top-checkbox-button label="a" ref="a"></top-checkbox-button>
              <top-checkbox-button label="b" ref="b"></top-checkbox-button>
              <top-checkbox-button label="c" ref="c"></top-checkbox-button>
              <top-checkbox-button label="d" ref="d"></top-checkbox-button>
            </top-row>
          </top-checkbox-group>
        `,
        data() {
          return {
            checkList: []
          };
        }
      }, true);
      expect(vm.checkList.length === 0).to.be.true;
      vm.$refs.a.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checkList.indexOf('a') !== -1).to.be.true;
        done();
      });
    });

    it('true false label', done => {
      vm = createVue({
        template: `
          <top-checkbox-button 
            true-label="a" 
            :false-label="3" 
            v-model="checked"
          ></top-checkbox-button>
        `,
        data() {
          return {
            checked: 'a'
          };
        }
      }, true);
      vm.$el.click();
      vm.$nextTick(_ => {
        expect(vm.checked === 3).to.be.true;
        done();
      });
    });
    it('checked', () => {
      vm = createVue({
        template: `
          <div>
            <top-checkbox-button v-model="checked" checked></top-checkbox-button>
            <top-checkbox-group v-model="checklist">
              <top-checkbox-button checked label="a"></top-checkbox-button>
            </top-checkbox-group>
          </div>
        `,
        data() {
          return {
            checked: false,
            checklist: []
          };
        }
      }, true);
      expect(vm.checked).to.be.true;
      expect(vm.checklist.indexOf('a') !== -1).to.be.true;
    });

  });
});
