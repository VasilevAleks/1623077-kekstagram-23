import {getData} from './api.js';
import {setUserFormSubmit} from './upload-form.js';
import './upload-style-filter.js';
import {createPictures} from './create-pictures.js';

let data= [];

const onSuccessGetData = (response) => {
  data = [...response];
  createPictures(data);
};

getData(onSuccessGetData);
setUserFormSubmit();
