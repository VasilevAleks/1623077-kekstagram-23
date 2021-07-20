/* eslint-disable no-unused-vars */
const sliderObject = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const uploadedPhoto = document.querySelector('.img-upload__preview');
const allStyles = document.querySelector('.effects__list');
const chrome = allStyles.querySelector('#effect-chrome');
const sepia = allStyles.querySelector('#effect-sepia');
const marvin = allStyles.querySelector('#effect-marvin');
const phobos = allStyles.querySelector('#effect-phobos');
const heat = allStyles.querySelector('#effect-heat');
const none = allStyles.querySelector('#effect-none');

const effects = {
  chrome: {
    name: 'grayscale',
    htmlClass: 'effects__preview--chrome',
    unit: '',
    minEffect: 0,
    maxEffect: 1,
    step: 0.1,
  },
  sepia: {
    name: 'sepia',
    htmlClass: 'effects__preview--sepia',
    unit: '',
    minEffect: 0,
    maxEffect: 1,
    step: 0.1,
  },
  marvin: {
    name: 'invert',
    htmlClass: 'effects__preview--marvin',
    unit: '%',
    minEffect: 0,
    maxEffect: 100,
    step: 1,
  },
  phobos: {
    name: 'blur',
    htmlClass: 'effects__preview--phobos',
    unit: 'px',
    minEffect: 0.3,
    maxEffect: 3,
    step: 0.1,
  },
  heat: {
    name: 'brightness',
    htmlClass: 'effects__preview--heat',
    unit: '',
    minEffect: 1,
    maxEffect: 3,
    step: 0.1,
  },
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const showEffect = (style) => {
  const effectClass = style.htmlClass;
  const effectStyle = style.name;
  const effectUnit = style.unit;
  uploadedPhoto.classList.add(effectClass);
  sliderElement.noUiSlider.on('update', (__, handle, unencoded) => {
    valueElement.value = unencoded[handle];
    uploadedPhoto.style.filter = `${effectStyle}(${valueElement.value}${effectUnit})`;
  });
};

const parametsSlider = (style) =>{
  const startRangeSlider = style.minEffect;
  const endRangeSlider = style.maxEffect;
  const startSlider = style.maxEffect;
  const stepSlider = style.step;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: startRangeSlider,
      max: endRangeSlider,
    },
    start: startSlider,
    step: stepSlider,
  });
};

const styleEffects = (evt) => {
  const effect = evt.currentTarget;
  if (effect.checked) {
    sliderObject.classList.remove('visually-hidden');
    showEffect(effects[effect.value]);
    parametsSlider(effects[effect.value]);
  }
};

none.addEventListener('click', () => {
  sliderObject.classList.add('visually-hidden');
  uploadedPhoto.style.filter = 'none';
});
chrome.addEventListener('click', styleEffects);
sepia.addEventListener('click', styleEffects);
marvin.addEventListener('click', styleEffects);
phobos.addEventListener('click', styleEffects);
heat.addEventListener('click', styleEffects);
