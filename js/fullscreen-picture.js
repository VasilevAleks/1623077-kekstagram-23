/* eslint-disable no-undef */
import {isEscEvent} from './util.js';

const SHOWED_COMMENTS_COUNT = 5;
export const pictures = document.querySelector('.pictures');
const fullscreenPicture = document.querySelector('.big-picture');
const сlosePictureButton = fullscreenPicture.querySelector('#picture-cancel');
const bigPicture = fullscreenPicture.querySelector('.big-picture__img img');
const countLikes = fullscreenPicture.querySelector('.likes-count');
const countComments = fullscreenPicture.querySelector('.comments-count');
const socialCaption = fullscreenPicture.querySelector('.social__caption');
const countSocialComment = fullscreenPicture.querySelector('.comments-display');
const moreComments = fullscreenPicture.querySelector('.comments-loader');
const socialComments= fullscreenPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');

const openPicture = () => {
  fullscreenPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

};

const closePictureElement = () => {
  fullscreenPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onKeydownEsc = (evt) => {
  if (isEscEvent(evt)) {
    onClosePicture ();
  }
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((data) => {
    const comment = socialComment.cloneNode(true);
    const avatar = comment.querySelector('.social__picture');
    const text = comment.querySelector('.social__text');
    avatar.src = data.avatar;
    avatar.alt = data.name;
    text.textContent = data.message;
    fragment.appendChild(comment);
  });
  return fragment;
};

const chunkRenderComments = (comments) => {
  const arrayComments = [];
  let partOfArrayComments = [];
  for ( let index = 0; index < comments.length; index++) {
    partOfArrayComments.push(comments[index]);
    if (partOfArrayComments.length === SHOWED_COMMENTS_COUNT){
      arrayComments.push(partOfArrayComments);
      partOfArrayComments = [];
    }
  }
  if (partOfArrayComments.length) {
    arrayComments.push(partOfArrayComments);
  }
  return arrayComments;
};

const renderBigPicture = (photo) => {
  bigPicture.src = photo.url;
  bigPicture.alt = photo.description;
  countLikes.textContent = photo.likes;
  countComments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  socialComments.innerHTML = '';
  const chunkComments = chunkRenderComments(photo.comments);
  socialComments.appendChild(renderComments(chunkComments[0]));
  moreComments.dataset.index = 1;
  moreComments.disabled = false;
  countSocialComment.textContent = chunkComments[0].length;
  moreComments.addEventListener('click', (evt) => {
    const index = +evt.currentTarget.dataset.index;
    evt.currentTarget.dataset.index = index + 1;
    socialComments.appendChild(renderComments(chunkComments[index]));
    const displayCount = Number(countSocialComment.textContent);
    countSocialComment.textContent = displayCount + chunkComments[index].length;
    if (!chunkComments[index + 1]) {
      evt.currentTarget.disabled = true;
      moreComments.classList.add('visually-hidden');
    }
  });

  document.addEventListener('keydown', onKeydownEsc);
  сlosePictureButton.addEventListener('click', closePictureElement);
};

export {openPicture, renderBigPicture};

