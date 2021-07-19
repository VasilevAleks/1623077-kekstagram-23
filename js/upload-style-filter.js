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
  },
  sepia: {
    name: 'sepia',
    htmlClass: 'effects__preview--sepia',
    unit: '',
  },
  marvin: {
    name: 'invert',
    htmlClass: 'effects__preview--marvin',
    unit: '%',
  },
  phobos: {
    name: 'blur',
    htmlClass: 'effects__preview--phobos',
    unit: 'px',
  },
  heat: {
    name: 'brightness',
    htmlClass: 'effects__preview--heat',
    unit: '',
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
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});


const showEffect = (effectClass, effectStyle, effectUnit) => {
  uploadedPhoto.classList.add(`${effectClass}`);

  sliderElement.noUiSlider.on('update', (values, handle, unencoded) => { // eslint-disable-line
    valueElement.value = unencoded[handle];
    uploadedPhoto.style.filter = `${effectStyle}(${valueElement.value}${effectUnit})`;
  });
};

const styleEffects = () => {
  if (none.checked) {
    sliderObject.classList.add('visually-hidden');
    uploadedPhoto.style.filter = 'none';
  } else {
    sliderObject.classList.remove('visually-hidden');
    if (chrome.checked) {
      showEffect(effects.chrome.htmlClass, effects.chrome.name, effects.chrome.unit);
    } else if (sepia.checked) {
      showEffect(effects.sepia.htmlClass, effects.sepia.name, effects.sepia.unit);
    } else if (marvin.checked) {
      showEffect(effects.marvin.htmlClass, effects.marvin.name, effects.marvin.unit);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
    } else if (phobos.checked) {
      showEffect(effects.phobos.htmlClass, effects.phobos.name, effects.phobos.unit);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0.3,
          max: 3,
        },
        start: 3,
      });
    } else if (heat.checked) {
      showEffect(effects.heat.htmlClass, effects.heat.name, effects.heat.unit);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
      });
    }
  }

};

none.addEventListener('click', styleEffects);
chrome.addEventListener('click', styleEffects);
sepia.addEventListener('click', styleEffects);
marvin.addEventListener('click', styleEffects);
phobos.addEventListener('click', styleEffects);
heat.addEventListener('click', styleEffects);


