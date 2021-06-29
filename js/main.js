const MAX_COMMIT_LENGTH = 140;

const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidLengthCommit= (string = '') => string.length <= MAX_COMMIT_LENGTH;

getRandomInteger(1,100);
isValidLengthCommit('Hello, world');

const MESSAGE = [
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

const createPost = () => {
  id: getRandomInteger(1,25),
  url: 'photos/'+ getRandomInteger(1,25) +'.jpg',
  description: 'Как я хорошо отдохнул в Египте',
  likes: getRandomInteger(15,200),
  comments: {
    id: getRandomInteger(1,25),
    avatar: 'img/avatar-'+getRandomInteger(1,6)+'.svg',
    message: MESSAGE[getRandomInteger(0,MESSAGE.length-1)],
    name: NAMES[getRandomInteger(0,NAMES.length-1)],
  },
};

