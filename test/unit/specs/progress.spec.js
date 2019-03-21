import { createVue, destroyVM } from '../util';

describe('Progress', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <div>
          <top-progress ref="percent0" :percentage="0"></top-progress>
          <top-progress ref="percent50" :percentage="50"></top-progress>
          <top-progress ref="percent100" :percentage="100"></top-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.percent0.$el.querySelector('.top-progress__text').innerText).to.be.equal('0%');
    expect(vm.$refs.percent0.$el.querySelector('.top-progress-bar__inner').style.width).to.be.equal('0%');

    expect(vm.$refs.percent50.$el.querySelector('.top-progress__text').innerText).to.be.equal('50%');
    expect(vm.$refs.percent50.$el.querySelector('.top-progress-bar__inner').style.width).to.be.equal('50%');

    expect(vm.$refs.percent100.$el.querySelector('.top-progress__text').innerText).to.be.equal('100%');
    expect(vm.$refs.percent100.$el.querySelector('.top-progress-bar__inner').style.width).to.be.equal('100%');
  });
  it('status', () => {
    vm = createVue({
      template: `
        <div>
          <top-progress ref="lineSuccess" :percentage="100" status="success"></top-progress>
          <top-progress ref="lineException" :percentage="0" status="exception"></top-progress>
          <top-progress type="circle" ref="circleSuccess" :percentage="100" status="success"></top-progress>
          <top-progress type="circle" ref="circleException" :percentage="0" status="exception"></top-progress>
          <top-progress type="circle" ref="textException" :percentage="100" status="text">Done</top-progress>
        </div>
      `
    }, true);
    expect(vm.$refs.lineSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.lineSuccess.$el.querySelector('.top-progress__text .top-icon-circle-check')).to.be.exist;
    expect(vm.$refs.lineException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.lineException.$el.querySelector('.top-progress__text .top-icon-circle-close')).to.be.exist;

    expect(vm.$refs.circleSuccess.$el.classList.contains('is-success')).to.be.true;
    expect(vm.$refs.circleSuccess.$el.querySelector('.top-progress__text .top-icon-check')).to.be.exist;
    expect(vm.$refs.circleException.$el.classList.contains('is-exception')).to.be.true;
    expect(vm.$refs.circleException.$el.querySelector('.top-progress__text .top-icon-close')).to.be.exist;
    expect(vm.$refs.textException.$el.querySelector('.top-progress__text').innerText).to.be.equal('Done');
  });
  it('text inside', () => {
    vm = createVue({
      template: `
        <top-progress :percentage="50" text-inside></top-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('top-progress--text-inside')).to.be.true;
  });
  it('stroke width', () => {
    vm = createVue({
      template: `
        <top-progress :percentage="50" :stroke-width="8"></top-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.top-progress-bar__outer').style.height).to.be.equal('8px');
  });
  it('show text', () => {
    vm = createVue({
      template: `
        <top-progress :percentage="50" :show-text="false"></top-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.top-progress__text')).to.not.exist;
  });
  it('circle', () => {
    vm = createVue({
      template: `
        <top-progress type="circle" :percentage="50"></top-progress>
      `
    }, true);
    expect(vm.$el.classList.contains('top-progress--circle')).to.be.true;
  });
  it('width', () => {
    vm = createVue({
      template: `
        <top-progress type="circle" :percentage="50" :width="120"></top-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.top-progress-circle').style.height).to.be.equal('120px');
    expect(vm.$el.querySelector('.top-progress-circle').style.width).to.be.equal('120px');
  });
  it('should work with stroke-width', () => {
    vm = createVue({
      template: `
        <top-progress :text-inside="true" :stroke-width="36" :percentage="0"></top-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.top-progress-bar__innerText').offsetTop).to.be.equal(12);
  });
  it('color', () => {
    vm = createVue({
      template: `
      <top-progress :percentage="50" color="rgb(0, 0, 0)"></top-progress>
      `
    }, true);
    expect(vm.$el.querySelector('.top-progress-bar__inner').style.backgroundColor).to.equal('rgb(0, 0, 0)');
  });
});
