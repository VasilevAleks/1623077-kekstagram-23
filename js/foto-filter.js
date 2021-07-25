import {createPictures} from './create-pictures.js';
import {debounce} from './utils/debounce.js';

const filter = document.querySelector('.img-filters');
const filterButtons = filter.querySelectorAll('.img-filters__button');
const defaultButton = filter.querySelector('#filter-default');
const discussedButton = filter.querySelector('#filter-discussed');
const randomButton = filter.querySelector('#filter-random');
const DELAY = 500;
const COUNT_RANDOM_PHOTOS = 10;

const showFilter = () => {
  filter.classList.remove('img-filters--inactive');};

const onDiscussPhotos = (array) => array.sort((aa, bb) => bb.comments.length - aa.comments.length);


const onRandomPhotos = (array) => array.sort(() => Math.round(Math.random() * 100) - 50).slice(0,COUNT_RANDOM_PHOTOS);

const clearPhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((element) => element.remove());
};

const renderDebounce = debounce(createPictures, DELAY);

const setFilterButtonsStyle = (array) => {
  const temporaryArray = Array.from(array);
  filterButtons.forEach((button) => {
    button.addEventListener('click', (evt)  => {
      filterButtons.forEach((element) => element.classList.remove('img-filters__button--active'));
      button.classList.add('img-filters__button--active');
      const target = evt.target;
      if (target === defaultButton) {
        clearPhotos();
        renderDebounce(array);
      } else if (target === discussedButton) {
        clearPhotos();
        renderDebounce(onDiscussPhotos(temporaryArray));
      } else if (target === randomButton) {
        clearPhotos();
        renderDebounce(onRandomPhotos(temporaryArray));
      }
    });
  });
};

const getPhotos = (array) => {
  showFilter();
  createPictures(array);
  setFilterButtonsStyle(array);

};

export {getPhotos};
