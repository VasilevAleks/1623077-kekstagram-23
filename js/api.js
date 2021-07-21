import {createPictures} from './create-pictures.js';
import {showAlert} from './util.js';
let dataArray = [];

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => showAlert(error));
};

const onSuccessGetData = (response) => {
  dataArray = [...response];
  createPictures(dataArray);
};
getData(onSuccessGetData);
const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch((error) => onFail(error));
};


export {getData, sendData};
