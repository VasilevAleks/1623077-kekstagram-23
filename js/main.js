import {getData} from './api.js';
import {setUserFormSubmit, onChangeFileInput} from './upload-form.js';
import './upload-style-filter.js';

getData();
onChangeFileInput();
setUserFormSubmit(onChangeFileInput);
