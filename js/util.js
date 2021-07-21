const MAX_COMMIT_LENGTH = 140;
const ALERT_SHOW_TIME = 500;

const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidLengthCommit = (string = '') => string.length <= MAX_COMMIT_LENGTH;

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, isValidLengthCommit, isEscEvent, showAlert, MAX_COMMIT_LENGTH};
