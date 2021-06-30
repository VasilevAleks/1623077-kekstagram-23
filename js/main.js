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

const MAX_AVATAR = 1;

const MIN_AVATAR = 7;

const MIN_LIKE = 15;

const MAX_LIKE = 200;

const MAX_POSTS = 25;

const MAX_COMMENTS =3;

const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidLengthCommit = (string = '') => string.length <= MAX_COMMIT_LENGTH;

getRandomInteger(1,100);
isValidLengthCommit('Hello, world');


const generateComments = () => {
  const comments = [];
  for (let index = 0; index < MAX_COMMENTS; index++) {
    comments[index] = {
      id: getRandomInteger(MIN_ID,MAX_ID),
      avatar:`img/avatar-${getRandomInteger(MIN_AVATAR,MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomInteger(0,MESSAGES.length-1)],
      name: NAMES[getRandomInteger(0,NAMES.length-1)],
    };
  }
  return comments;
};

const createPosts = () => {
  const postMessage = [];
  for (let index = 0; index < MAX_POSTS; index++){
    postMessage[index] = {
      id: index + 1,
      url: `photos/${index + 1}.jpg`,
      description: 'Как я хорошо отдохнул в Египте',
      likes: getRandomInteger(MIN_LIKE,MAX_LIKE),
      comments: generateComments(),
    };
  }
  return postMessage;
};

createPosts();
