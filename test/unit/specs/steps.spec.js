import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <top-steps>
        <top-step title="step1"></top-step>
        <top-step title="step2"></top-step>
        <top-step title="step3"></top-step>
      </top-steps>
    `);

    expect(vm.$el.querySelectorAll('.top-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <top-steps>
        <top-step title="step1"></top-step>
        <top-step title="step2"></top-step>
        <top-step title="step3"></top-step>
      </top-steps>
    `, true);

    const vm2 = createVue(`
      <top-steps :space="100">
        <top-step title="step1"></top-step>
        <top-step title="step2"></top-step>
        <top-step title="step3"></top-step>
        <top-step title="step4"></top-step>
      </top-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.top-step');
    const stepElm2 = vm2.$el.querySelector('.top-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <top-steps :active="1" process-status="error">
        <top-step title="step1"></top-step>
        <top-step title="step2"></top-step>
        <top-step title="step3"></top-step>
      </top-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.top-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <top-steps :active="1" :process-status="processStatus">
          <top-step title="abc"></top-step>
          <top-step title="abc2"></top-step>
        </top-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.top-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.top-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <top-steps :active="1" finish-status="error">
        <top-step title="abc"></top-step>
        <top-step title="abc2"></top-step>
      </top-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.top-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <top-steps :active="active" finish-status="error">
          <top-step title="abc"></top-step>
          <top-step title="abc2"></top-step>
        </top-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.top-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.top-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <top-steps direction="vertical">
        <top-step title="aaa"></top-step>
        <top-step title="bbb"></top-step>
      </top-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <top-steps direction="vertical" :space="200">
        <top-step title="aaa"></top-step>
        <top-step title="bbb"></top-step>
      </top-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.top-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <top-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <top-step title="step1"></top-step>
        <top-step title="step2" status="error"></top-step>
        <top-step title="step3"></top-step>
      </top-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.top-step:nth-child(2) .top-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.top-step:nth-child(3) .top-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
