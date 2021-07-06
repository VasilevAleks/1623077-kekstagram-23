import {createPosts} from './data.js';

import {createPictures} from './create-pictures.js';

import {showBigPicture} from './fullscreen-picture.js';
const MAX_POSTS = 25;
const mock = createPosts(MAX_POSTS);
createPictures(mock);
showBigPicture(mock[10]);
