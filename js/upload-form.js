import {isEscEvent, MAX_COMMIT_LENGTH} from './util.js';

const uploadForm = document.querySelector('.img-upload__overlay');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const MIN_HASHTAG_LENGHT = 2;
const MAX_HASHTAG_LENGHT = 20;
const MAX_HASHTAG_QUANTITY = 5;

const openPictureElement = () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closePictureElement = () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onKeydownEsc = (evt) => {
  if (isEscEvent(evt)) {
    closePictureElement();
  }
};

const setError = (input) => {
  input.style.borderColor = 'red';
  input.style.borderWidth = '5px';
};

const removeError = (input) => {
  input.style.borderColor = '';
  input.style.borderWidth = '';
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
const onInputEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};
const onHashtagInput = () => {
  const arrayOfHashtags = hashtagsInput.value.split(' ');
  const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  arrayOfHashtags.forEach((hashtag) => {
    if (hashtag.length < MIN_HASHTAG_LENGHT) {
      hashtagsInput.setCustomValidity(`Хэштег должен быть длиннее ${MIN_HASHTAG_LENGHT} символов`);
      setError(hashtagsInput);
    } else if (hashtag.length > MAX_HASHTAG_LENGHT) {
      hashtagsInput.setCustomValidity(`Хэштег не должен быть длиннее ${ MAX_HASHTAG_LENGHT} символов`);
      setError(hashtagsInput);
    } else if (arrayOfHashtags.length > MAX_HASHTAG_QUANTITY) {
      hashtagsInput.setCustomValidity(`Хэштегов не может быть больше ${MAX_HASHTAG_QUANTITY} `);
      setError(hashtagsInput);
    } else if (re.test(hashtag) === false) {
      hashtagsInput.setCustomValidity('Хэштег должен начинаться с решетки и может состоять из букв и чисел');
      setError(hashtagsInput);
    }  else {
      hashtagsInput.setCustomValidity('');
      removeError(hashtagsInput);
    }
  });
  hashtagsInput.reportValidity();
};

export const uploadPhoto = () => {
  openPictureElement();
  commentInput.addEventListener('input', onCommentInput);
  hashtagsInput.addEventListener('input', onHashtagInput);
  document.addEventListener('keydown', onKeydownEsc);
  commentInput.addEventListener('keydown', onInputEscKeydown);
  hashtagsInput.addEventListener('keydown', onInputEscKeydown);
  closeUploadForm.addEventListener('click', closePictureElement);
};
