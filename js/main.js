const MAX_COMMIT_LENGTH = 140;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Август',
  'Августин',
  'Беатрис',
  'Белла',
  'Вадим',
  'Валентин',
  'Габриэлла',
  'Гавриил',
  'Давид',
  'Дана',
  'Жаклин',
  'Жанна',
  'Ева',
  'Евгений',
  'Шарлотта',
  'Шейла',
  'Эдгар',
  'Эдита',
  'Юи',
  'Юлиан',
  'Яков',
  'Ямато',
];

const MIN_ID = 1;

const MAX_ID = 25;

const MAX_AVATAR = 6;

const MIN_AVATAR = 7;

const MIN_LIKE = 15;

const MAX_LIKE = 200;

const MAX_POSTS = 25;

const PHOTOS = 'photos/';

const JPG_FORMAT = '.jpg';

const AVATARS = 'img/avatar-';

const SVG_FORMAT = '.svg';

const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidLengthCommit = (string = '') => string.length <= MAX_COMMIT_LENGTH;

getRandomInteger(1,100);
isValidLengthCommit('Hello, world');

const postMessage = [];
const addComments = () => {
  const comments = [];

  for (let i = 0; i <= MAX_COMMENTS; i++) {
    comments.push({
      id: getRandomInteger(MIN_ID,MAX_ID),
      avatar:[AVATARS,getRandomInteger(MIN_AVATAR,MAX_AVATAR),SVG_FORMAT],
      message: MESSAGE[getRandomInteger(0,MESSAGE.length-1)],
      name: NAMES[getRandomInteger(0,NAMES.length-1)],
    })
  };
};

const createPost = (index) => {
  id: getRandomInteger(MIN_ID,MAX_ID),
  url: [PHOTOS,index,JPG_FORMAT],
  description: 'Как я хорошо отдохнул в Египте',
  likes: getRandomInteger(MIN_LIKE,MAX_LIKE),
  comments: addComments,
};

const createPost = () => {
  for (let i = 0; i <= MAX_POSTS; i++){
    postMessage.push(createPost(i));
  }
}

