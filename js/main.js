import {getData}  from './api.js';
import {createPictures} from './create-pictures.js';

import {openPicture, renderBigPicture} from './fullscreen-picture.js';
import {onChangeFileInput} from './upload-form.js';
import './upload-style-filter.js';

const MAX_POSTS = 25;
const mock = createPosts(MAX_POSTS);
createPictures(mock);
openPicture();
renderBigPicture(mock[11]);
onChangeFileInput();
