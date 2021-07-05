import {getRandomInteger} from './util.js';

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

const MIN_AVATAR = 1;

const MIN_LIKE = 15;

const MAX_LIKE = 200;

export const MAX_POSTS = 25;

const MAX_COMMENTS = 20;

const PHOTOS = 'photos/';

const JPG_FORMAT = '.jpg';

const AVATARS = 'img/avatar-';

const SVG_FORMAT = '.svg';

const generateComments = (count) => {
  const comments = [];
  for (let index = 0; index <count; index++) {
    comments.push({
      id: getRandomInteger(MIN_ID,MAX_ID),
      avatar:`${AVATARS}${getRandomInteger(MIN_AVATAR,MAX_AVATAR)}${SVG_FORMAT}`,
      message: MESSAGES[getRandomInteger(0,MESSAGES.length-1)],
      name: NAMES[getRandomInteger(0,NAMES.length-1)],
    });
  }
  return comments;
};

const createPosts = (count) => {
  const generateMessage = [];
  for (let index = 0; index < count; index++){
    generateMessage.push({
      id:index + 1,
      url: `${PHOTOS}${index + 1}${JPG_FORMAT}`,
      description: 'Как я хорошо отдохнул в Египте',
      likes: getRandomInteger(MIN_LIKE,MAX_LIKE),
      comments: generateComments(getRandomInteger(0,MAX_COMMENTS)),
    });
  }
  return generateMessage;
};

export {createPosts};
