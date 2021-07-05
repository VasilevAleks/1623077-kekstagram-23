import {createPosts} from './data.js';
const MAX_POSTS = 25;
const mock = createPosts(MAX_POSTS);

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture');

mock.forEach((elem,index) => {
  const template = pictureTemplate.cloneNode(true);
  const element = template.content.querySelector('.picture');
  element.href = mock[index].url;
  element.querySelector('.picture__img').src = mock[index].url;
  element.querySelector('.picture__likes').textContent = mock[index].likes;
  element.querySelector('.picture__comments').textContent = mock[index].comments.length;
  fragment.appendChild(element);
});

pictures.appendChild(fragment);
