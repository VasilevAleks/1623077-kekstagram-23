const fullscreenPicture = document.querySelector('.big-picture');
const closePictureButton = fullscreenPicture.querySelector('#picture-cancel');
const bigPicture = fullscreenPicture.querySelector('.big-picture__img img');
const countLikes = fullscreenPicture.querySelector('.likes-count');
const countComments = fullscreenPicture.querySelector('.comments-count');
const socialCaption = fullscreenPicture.querySelector('.social__caption');
const countSocialComment = fullscreenPicture.querySelector('.social__comment-count');
const moreComments = fullscreenPicture.querySelector('.comments-loader');
const socialComments= fullscreenPicture.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');

const openPicture =() => {
  fullscreenPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  countSocialComment.classList.add('hidden');
  moreComments.classList.add('hidden');
};

const closePicture =() => {
  fullscreenPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const isEscEvent =(evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closePicture();
  }
};

export const showBigPicture = (photo) => {
  openPicture ();
  bigPicture.src = photo.url;
  bigPicture.alt = photo.description;
  countLikes.textContent = photo.likes;
  countComments.textContent = photo.comments.length;
  socialCaption.textContent = photo.description;
  const fragment = document.createDocumentFragment();
  photo.comments.forEach((data) => {
    const comment = socialComment.cloneNode(true);
    const avatar = comment.querySelector('.social__picture');
    const text = comment.querySelector('.social__text');
    avatar.src = data.avatar;
    avatar.alt = data.name;
    text.textContent = data.message;
    fragment.appendChild(comment);
  });
  socialComments.appendChild(fragment);
  document.addEventListener('keydown', isEscEvent);
  closePictureButton.addEventListener('click',closePicture);
};
