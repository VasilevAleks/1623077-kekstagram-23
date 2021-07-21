import {renderBigPicture} from './fullscreen-picture.js';

const createPictures = (mock) => {
  const pictures = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');
  const fragment = document.createDocumentFragment();
  mock.forEach((elem,index) => {
    const template = pictureTemplate.cloneNode(true);
    const element = template.content.querySelector('.picture');
    element.dataset.index = index;
    element.href = mock[index].url;
    element.querySelector('.picture__img').src = mock[index].url;
    element.querySelector('.picture__likes').textContent = mock[index].likes;
    element.querySelector('.picture__comments').textContent = mock[index].comments.length;
    fragment.appendChild(element);
    element.addEventListener('click', renderBigPicture[index]);
  });
  pictures.appendChild(fragment);
};

export {createPictures};
