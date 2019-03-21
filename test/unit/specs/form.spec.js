import { createVue, destroyVM } from '../util';

const DELAY = 50;

describe('Form', () => {
  let vm;
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    destroyVM(vm);
  });

  it('label width', done => {
    vm = createVue({
      template: `
        <top-form ref="form" :model="form" labtop-width="80px">
          <top-form-item label="活动名称">
            <top-input v-model="form.name"></top-input>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$el.querySelector('.top-form-item__label').style.width).to.equal('80px');
    expect(vm.$el.querySelector('.top-form-item__content').style.marginLeft).to.equal('80px');
    done();
  });
  it('inline form', done => {
    vm = createVue({
      template: `
        <top-form ref="form" :model="form" inline>
          <top-form-item>
            <top-input v-model="form.name"></top-input>
          </top-form-item>
          <top-form-item>
            <top-input v-model="form.address"></top-input>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$el.classList.contains('top-form--inline')).to.be.true;
    done();
  });
  it('label position', done => {
    vm = createVue({
      template: `
        <div>
          <top-form :model="form" labtop-position="top" ref="labelTop">
            <top-form-item>
              <top-input v-model="form.name"></top-input>
            </top-form-item>
            <top-form-item>
              <top-input v-model="form.address"></top-input>
            </top-form-item>
          </top-form>
          <top-form :model="form" labtop-position="left" ref="labelLeft">
            <top-form-item>
              <top-input v-model="form.name"></top-input>
            </top-form-item>
            <top-form-item>
              <top-input v-model="form.address"></top-input>
            </top-form-item>
          </top-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$refs.labelTop.$el.classList.contains('top-form--labtop-top')).to.be.true;
    expect(vm.$refs.labelLeft.$el.classList.contains('top-form--labtop-left')).to.be.true;
    done();
  });
  it('label size', () => {
    vm = createVue({
      template: `
        <div>
          <top-form :model="form" size="mini" ref="labelMini">
            <top-form-item>
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$refs.labelMini.$el.children[0].classList.contains('top-form-item--mini')).to.be.true;
  });
  it('show message', done => {
    vm = createVue({
      template: `
        <top-form :model="form" ref="form">
          <top-form-item label="活动名称" prop="name" :show-message="false"
            :rules="{
              required: true,
              message: '请输入活动名称',
              trigger: 'change',
              min: 3,
              max: 6
            }"
          >
            <top-input v-model="form.name"></top-input>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true;
      vm.$refs.form.$nextTick(_ => {
        expect(vm.$el.querySelector('.top-form-item__error')).to.not.exist;
        done();
      });
    });
  });
  it('reset field', done => {
    vm = createVue({
      template: `
        <top-form ref="form" :model="form" :rules="rules">
          <top-form-item label="活动名称" prop="name">
            <top-input v-model="form.name" ref="fieldName"></top-input>
          </top-form-item>
          <top-form-item label="活动地址" prop="address">
            <top-input v-model="form.address" ref="fieldAddr"></top-input>
          </top-form-item>
          <top-form-item label="活动性质" prop="type">
            <top-checkbox-group v-model="form.type">
              <top-checkbox label="美食/餐厅线上活动" name="type"></top-checkbox>
              <top-checkbox label="地推活动" name="type"></top-checkbox>
              <top-checkbox label="线下主题活动" name="type"></top-checkbox>
              <top-checkbox label="单纯品牌曝光" name="type"></top-checkbox>
            </top-checkbox-group>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: []
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        setValue() {
          this.form.name = 'jack';
          this.form.address = 'aaaa';
          this.form.type.push('地推活动');
        }
      }
    }, true);
    vm.setValue();
    vm.$refs.form.resetFields();
    vm.$refs.form.$nextTick(_ => {
      expect(vm.form.name).to.equal('');
      expect(vm.form.address).to.equal('');
      expect(vm.form.type.length).to.equal(0);
      done();
    });
  });
  it('clear validate', done => {
    vm = createVue({
      template: `
        <top-form ref="form" :model="form" :rules="rules">
          <top-form-item label="活动名称" prop="name">
            <top-input v-model="form.name"></top-input>
          </top-form-item>
          <top-form-item label="活动地址" prop="address">
            <top-input v-model="form.address"></top-input>
          </top-form-item>
          <top-form-item label="活动性质" prop="type">
            <top-checkbox-group v-model="form.type">
              <top-checkbox label="美食/餐厅线上活动" name="type"></top-checkbox>
              <top-checkbox label="地推活动" name="type"></top-checkbox>
              <top-checkbox label="线下主题活动" name="type"></top-checkbox>
              <top-checkbox label="单纯品牌曝光" name="type"></top-checkbox>
            </top-checkbox-group>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: '',
            type: []
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' }
            ],
            address: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ]
          }
        };
      }
    }, true);
    const form = vm.$refs.form;
    const nameField = form.fields.filter(field => field.prop === 'name')[0];
    const addressField = form.fields.filter(field => field.prop === 'address')[0];
    form.validate();
    vm.$nextTick(() => {
      expect(nameField.validateMessage).to.equal('请输入活动名称');
      form.clearValidate(['name']);
      vm.$nextTick(() => {
        expect(nameField.validateMessage).to.equal('');
        form.clearValidate();
        vm.$nextTick(() => {
          expect(addressField.validateMessage).to.equal('');
          done();
        });
      });
    });
  });
  it('form item nest', done => {
    vm = createVue({
      template: `
        <top-form ref="form" :model="form" :rules="rules">
          <top-form-item label="活动时间" required>
            <top-col :span="11">
              <top-form-item prop="date1">
                <top-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></top-date-picker>
              </top-form-item>
            </top-col>
            <top-col class="line" :span="2">-</top-col>
            <top-col :span="11">
              <top-form-item prop="date2">
                <top-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></top-time-picker>
              </top-form-item>
            </top-col>
          </top-form-item>
        </top-form>
      `,
      data() {
        return {
          form: {
            date1: '',
            date2: ''
          },
          rules: {
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        setValue() {
          this.name = 'jack';
          this.address = 'aaaa';
        }
      }
    }, true);
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true;
      done();
    });
  });
  describe('validate', () => {
    it('input', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(field.validateMessage).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('textarea', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input type="textarea" v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请输入活动名称');
          vm.setValue('aaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            vm.setValue('aa');

            vm.$refs.form.$nextTick(_ => {
              expect(field.validateMessage).to.equal('请输入活动名称');
              done();
            });
          });
        });
      });
    });
    it('selector', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="记住密码" prop="region" ref="field">
              <top-select v-model="form.region" placeholder="请选择活动区域">
                <top-option label="区域一" value="shanghai"></top-option>
                <top-option label="区域二" ref="opt" value="beijing"></top-option>
              </top-select>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              region: ''
            },
            rules: {
              region: [
                {required: true, message: '请选择活动区域', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.false;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择活动区域');
          // programatic modification triggers change validation
          vm.form.region = 'shanghai';
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('');
            vm.form.region = '';
            setTimeout(_ => {
              expect(field.validateMessage).to.equal('请选择活动区域');
              // user modification of bound value triggers change validation
              vm.$refs.opt.$el.click();
              setTimeout(_ => {
                expect(field.validateMessage).to.equal('');
                done();
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      });
    });
    it('datepicker', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="记住密码" prop="date" ref="field">
              <top-date-picker type="date" ref="picker" placeholder="选择日期" v-model="form.date" style="width: 100%;"></top-date-picker>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              date: ''
            },
            rules: {
              date: [
                {type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择日期');
          // programatic modification triggers change validation
          vm.form.date = new Date();
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('');
            vm.form.date = '';
            // user modification triggers change
            const input = vm.$refs.picker.$el.querySelector('input');
            input.blur();
            input.focus();
            setTimeout(_ => {
              const keyDown = (el, keyCode) => {
                const evt = document.createEvent('Events');
                evt.initEvent('keydown', true, true);
                evt.keyCode = keyCode;
                el.dispatchEvent(evt);
              };
              keyDown(input, 37);
              setTimeout(_ => {
                keyDown(input, 13);
                setTimeout(_ => {
                  expect(field.validateMessage).to.equal('');
                  done();
                }, DELAY);
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
    it('timepicker', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="记住密码" prop="date" ref="field">
              <top-time-picker ref="picker" placeholder="选择时间" v-model="form.date" style="width: 100%;"></top-time-picker>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              date: ''
            },
            rules: {
              date: [
                {type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        setTimeout(_ => {
          expect(field.validateMessage).to.equal('请选择时间');
          // programatic modification does not trigger change
          vm.value = new Date();
          setTimeout(_ => {
            expect(field.validateMessage).to.equal('请选择时间');
            vm.value = '';
            // user modification triggers change
            const input = vm.$refs.picker.$el.querySelector('input');
            input.blur();
            input.focus();
            setTimeout(_ => {
              vm.$refs.picker.picker.$el.querySelector('.confirm').click();
              setTimeout(_ => {
                expect(field.validateMessage).to.equal('');
                done();
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      });
    });
    it('checkbox', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="是否接受协议" prop="accept" ref="field">
              <top-checkbox v-model="form.accept">
                <span>接受协议</span>
              </top-checkbox>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              accept: true
            },
            rules: {
              accept: [
                {
                  validator: (rule, value, callback) => {
                    value ? callback() : callback(new Error('您需要接受用户协议'));
                  },
                  trigger: 'change'
                }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.accept = value;
          }
        }
      }, true);
      vm.form.accept = false;
      vm.$nextTick(_ => {
        expect(vm.$refs.field.validateMessage).to.equal('您需要接受用户协议');
      });
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        expect(field.validateMessage).to.equal('您需要接受用户协议');
        vm.$refs.form.$nextTick(_ => {
          vm.setValue(true);

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('checkbox group', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="type" ref="field">
              <top-checkbox-group v-model="form.type">
                <top-checkbox label="美食/餐厅线上活动" name="type"></top-checkbox>
                <top-checkbox label="地推活动" name="type"></top-checkbox>
                <top-checkbox label="线下主题活动" name="type"></top-checkbox>
                <top-checkbox label="单纯品牌曝光" name="type"></top-checkbox>
              </top-checkbox-group>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              type: []
            },
            rules: {
              type: [
                { type: 'array', required: true, message: '请选择活动类型', trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.type = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请选择活动类型');
          vm.setValue(['地推活动']);

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('radio group', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="type" ref="field">
              <top-radio-group v-model="form.type">
                <top-radio label="线上品牌商赞助"></top-radio>
                <top-radio label="线下场地免费"></top-radio>
              </top-radio-group>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              type: ''
            },
            rules: {
              type: [
                { required: true, message: '请选择活动类型', trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.type = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('请选择活动类型');
          vm.setValue('线下场地免费');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('validate field', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validateField('name', valid => {
        expect(valid).to.not.true;
        done();
      });
    });
    it('custom validate', done => {
      var checkName = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('长度至少为5'));
        } else {
          callback();
        }
      };
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'change' }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.not.true;
        vm.$refs.form.$nextTick(_ => {
          expect(field.validateMessage).to.equal('长度至少为5');
          vm.setValue('aaaaaa');

          vm.$refs.form.$nextTick(_ => {
            expect(field.validateMessage).to.equal('');
            done();
          });
        });
      });
    });
    it('error', done => {
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" :error="error" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            error: 'dsad',
            form: {
              name: 'sada'
            },
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
              ]
            }
          };
        },
        methods: {
          setValue(value) {
            this.form.name = value;
          }
        }
      }, true);
      vm.$refs.form.validate(valid => {
        let field = vm.$refs.field;
        expect(valid).to.true;
        vm.error = '输入不合法';

        vm.$refs.field.$nextTick(_ => {
          expect(field.validateState).to.equal('error');
          expect(field.validateMessage).to.equal('输入不合法');
          done();
        });
      });
    });
    it('invalid fields', done => {
      var checkName = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('长度至少为5'));
        } else {
          callback();
        }
      };
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate((valid, invalidFields) => {
        expect(invalidFields.name.length).to.equal(1);
        done();
      });
    });
    it('validate return promise', done => {
      var checkName = (rule, value, callback) => {
        if (value.length < 5) {
          callback(new Error('长度至少为5'));
        } else {
          callback();
        }
      };
      vm = createVue({
        template: `
          <top-form :model="form" :rules="rules" ref="form">
            <top-form-item label="活动名称" prop="name" ref="field">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
          </top-form>
        `,
        data() {
          return {
            form: {
              name: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'change' }
              ]
            }
          };
        }
      }, true);
      vm.$refs.form.validate().catch(validFailed => {
        expect(validFailed).to.false;
        done();
      });
    });
  });
  it('validate event', done => {
    vm = createVue({
      template: `
          <top-form :model="form" :rules="rules" ref="form" @validate="onValidate">
            <top-form-item label="活动名称" prop="name" ref="name">
              <top-input v-model="form.name"></top-input>
            </top-form-item>
            <top-form-item label="活动地点" prop="addr" ref="addr">
              <top-input v-model="form.addr"></top-input>
            </top-form-item>
          </top-form>
        `,
      data() {
        return {
          form: {
            name: '',
            addr: ''
          },
          valid: {
            name: null,
            addr: null
          },
          error: {
            name: null,
            addr: null
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'change', min: 3, max: 6 }
            ],
            addr: [
              { required: true, message: '请输入活动名称', trigger: 'change' }
            ]
          }
        };
      },
      methods: {
        onValidate(prop, valid, msg) {
          this.valid[prop] = valid;
          this.error[prop] = msg;
        },
        setValue(prop, value) {
          this.form[prop] = value;
        }
      }
    }, true);
    vm.setValue('name', '1');
    setTimeout(() => {
      expect(vm.valid.name).to.equal(false);
      expect(vm.error.name).to.equal('请输入活动名称');
      vm.setValue('addr', '1');
      setTimeout(() => {
        expect(vm.valid.addr).to.equal(true);
        expect(vm.error.addr).to.equal(null);
        vm.setValue('name', '111');
        setTimeout(() => {
          expect(vm.valid.name).to.equal(true);
          expect(vm.error.name).to.equal(null);
          done();
        }, DELAY);
      }, DELAY);
    }, DELAY);
  });
});
