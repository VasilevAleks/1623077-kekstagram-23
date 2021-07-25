import {getData} from './api.js';
import {setUserFormSubmit} from './upload-form.js';
import './upload-style-filter.js';
import {getPhotos} from './foto-filter.js';

let data = [];

const onSuccessGetData = (response) => {
  data = [...response];
  getPhotos(data);
};
setUserFormSubmit();
getData(onSuccessGetData);

