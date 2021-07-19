import {isEscEvent, MAX_COMMIT_LENGTH} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const closeUploadForm = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const HASHTAG_PATTERN = /[^A-Za-zА-ЯЁа-яё0-9]+/g; //const HASHTAG_PATTERN = /[^A-Za-zА-ЯЁаё-я0-9]+/g - почему то на это ругается
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
      else if (HASHTAG_PATTERN.test(hashtag.slice(1))) {// не работает данный метод
        hashtagsInput.setCustomValidity('В хэштеге не должно быть символов');
      }

      else {
        hashtagsInput.setCustomValidity('');
      }
    }
  });
  hashtagsInput.reportValidity();
};

const uploadPhoto = () => {
  openPictureElement();
  commentInput.addEventListener('input', onCommentInput);
  hashtagsInput.addEventListener('input', onHashtagInput);
  document.addEventListener('keydown', onKeydownEsc);
  closeUploadForm.addEventListener('click', closePictureElement);
};

export const onChangeFileInput = () => {
  uploadFile.addEventListener('change',uploadPhoto);
};
