import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <top-col :span="12">
        </top-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('top-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <top-col :span="12">
        </top-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('top-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <top-col :span="12" :pull="3">
        </top-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('top-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <top-col :span="12" :push="3">
        </top-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('top-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <top-row :gutter="20">
          <top-col :span="12" ref="col">
          </top-col>
        </top-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <top-row :gutter="20">
          <top-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </top-col>
        </top-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('top-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('top-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('top-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('top-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('top-col-md-8')).to.be.true;
  });
});
