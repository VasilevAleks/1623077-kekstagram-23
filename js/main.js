import {createPosts} from './data.js';

import {createPictures} from './create-pictures.js';

import {renderBigPicture,openPicture} from './fullscreen-picture.js';

//import {uploadPhoto} from './upload-form.js';
const MAX_POSTS = 25;
const mock = createPosts(MAX_POSTS);
createPictures(mock);
openPicture();
renderBigPicture(mock[10]);
//uploadPhoto();
