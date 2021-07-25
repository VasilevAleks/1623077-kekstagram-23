import {isEscEvent, MAX_COMMIT_LENGTH} from './util.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const sizeFilter = document.querySelector('.img-upload__scale');
const minusButton = sizeFilter.querySelector('.scale__control--smaller');
const plusButton = sizeFilter.querySelector('.scale__control--bigger');
const uploadedPhoto = document.querySelector('.img-upload__preview');
const sizeValue = sizeFilter.querySelector('.scale__control--value');
const success = document.querySelector('#success').content.querySelector('.success');
const successButton = success.querySelector('.success__button');
const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = success.querySelector('.error__button');
const DEFAULT_PREVIEW_SIZE = 100;
const HASHTAG_PATTERN = /[^A-Za-zА-ЯЁа-яё0-9]+/g;
const MAX_HASHTAG_LENGHT = 20;
const MAX_HASHTAG_QUANTITY = 5;
const STEP_SIZE = 25;

let currentSize = DEFAULT_PREVIEW_SIZE;

const openPictureElement = () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  sizeFilter.classList.remove('visually-hidden');
};

const closePictureElement = () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onKeydownEsc = (evt) => {
  if ((document.activeElement === commentInput && isEscEvent(evt)) || (document.activeElement === hashtagsInput && isEscEvent(evt))) {
    evt.preventDefault();
  }
  else if (isEscEvent(evt)) {
    closePictureElement();
  }
};

const onCommentInput = () => {
  const valueLength = commentInput.value.length;
  if (valueLength > MAX_COMMIT_LENGTH) {
    commentInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_COMMIT_LENGTH} симв.`);
  } else {
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
};

const onHashtagInput = () => {
  const arrayOfHashtags = hashtagsInput.value.replace(/ +/g, ' ').toLowerCase().trim().split(' ');
  const unique = [...new Set(arrayOfHashtags)];
  arrayOfHashtags.forEach((hashtag) => {
    if (arrayOfHashtags.length === 0 || arrayOfHashtags[0] === '') {
      hashtagsInput.setCustomValidity('');
    } else if (arrayOfHashtags.length > MAX_HASHTAG_QUANTITY) {
      hashtagsInput.setCustomValidity(`Хэштегов не может быть больше ${MAX_HASHTAG_QUANTITY}`);
    } else {
      if (hashtag.length > MAX_HASHTAG_LENGHT) {
        hashtagsInput.setCustomValidity(`Хэштег не должен быть длиннее ${MAX_HASHTAG_LENGHT} символов`);}
      else if (hashtag.charAt(0) !== '#') {
        hashtagsInput.setCustomValidity('Хэштег должен начинаться с решетки');}
      else if ((hashtag.length === 1) && (hashtag === '#')){
        hashtagsInput.setCustomValidity('Хэштег не может состоять только из этого символа');
      }
      else if (HASHTAG_PATTERN.test(hashtag.slice(1))) {
        hashtagsInput.setCustomValidity('В хэштеге не должно быть символов');
      } else if(arrayOfHashtags.length !== unique.length) {
        hashtagsInput.setCustomValidity('Удалите одинаковые хештеги');
      } else {
        hashtagsInput.setCustomValidity('');
      }
    }
  });
  hashtagsInput.reportValidity();
};

const setImageSize = (size) => {
  sizeValue.value = `${size}%`;
  uploadedPhoto.style = `transform: scale(${size / 100})`;
  currentSize = size;
};

const onMinusButtonClick = () => {
  if (currentSize > STEP_SIZE) {
    currentSize -= STEP_SIZE;
    setImageSize(currentSize);
  }
};

const onPlusButtonClick = () => {
  if (currentSize < DEFAULT_PREVIEW_SIZE) {
    currentSize += STEP_SIZE;
    setImageSize(currentSize);
  }
};

const uploadPhoto = () => {
  openPictureElement();
  commentInput.addEventListener('input', onCommentInput);
  hashtagsInput.addEventListener('input', onHashtagInput);
  document.addEventListener('keydown', onKeydownEsc);
  minusButton.addEventListener('click', onMinusButtonClick);
  plusButton.addEventListener('click', onPlusButtonClick);
  closeUploadForm.addEventListener('click', closePictureElement);
};

const renderTemplate = (informing,informingButton) => {
  document.body.append(informing);
  closePictureElement();
  document.body.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      document.body.lastChild.remove(informing);}
  });
  informingButton.addEventListener('click', () => {
    document.body.lastChild.remove(informing);
  });
};

const setUserFormSubmit = () => {
  uploadFile.addEventListener('change',uploadPhoto);
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => renderTemplate(success, successButton),
      () => renderTemplate(error, errorButton),
      new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
