import { createTest, createVue, destroyVM } from '../util';
import Alert from 'packages/alert';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.top-alert__title').textContent).to.equal('test');
    expect(vm.$el.classList.contains('top-alert--info')).to.true;
  });

  it('type', () => {
    vm = createTest(Alert, {
      title: 'test',
      type: 'success',
      showIcon: true
    }, true);
    expect(vm.$el.classList.contains('top-alert--success')).to.true;
  });

  it('description', () => {
    vm = createTest(Alert, {
      title: 'Dorne',
      description: 'Unbowed, Unbent, Unbroken',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.top-alert__description').textContent)
      .to.equal('Unbowed, Unbent, Unbroken');
  });

  it('title slot', () => {
    vm = createVue(`
      <top-alert>
        <span slot="title">foo</span>
      </top-alert>
    `);

    expect(vm.$el.querySelector('.top-alert__title').textContent).to.equal('foo');
  });

  it('close', () => {
    vm = createVue({
      template: `
        <div>
          <top-alert
            title="test"
            close-text="close"></top-alert>
        </div>
      `
    }, true);
    vm.$el.querySelector('.top-alert__closebtn').click();
    expect(vm.$children[0].visible).to.false;
  });
});
