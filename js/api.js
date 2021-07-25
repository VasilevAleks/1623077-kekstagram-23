
import {showAlert} from './util.js';
const GET_LINK = 'https://23.javascript.pages.academy/kekstagram/data';
const SEND_LINK = 'https://23.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(GET_LINK)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => showAlert(error));
};


const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_LINK,
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
