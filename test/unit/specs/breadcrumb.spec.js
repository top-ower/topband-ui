import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <top-breadcrumb separator=">">
        <top-breadcrumb-item to="/">首页</top-breadcrumb-item>
        <top-breadcrumb-item>活动管理</top-breadcrumb-item>
        <top-breadcrumb-item>活动列表</top-breadcrumb-item>
        <top-breadcrumb-item>活动详情</top-breadcrumb-item>
      </top-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.top-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
