import {createPosts} from './data.js';

import {createPictures} from './create-pictures.js';

const MAX_POSTS = 25;
const mock = createPosts(MAX_POSTS);
createPictures(mock);
