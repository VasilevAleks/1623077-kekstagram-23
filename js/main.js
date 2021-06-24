const MAX_COMMIT_LENGTH = 141;

const GET_RANDOM_INTEGER = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const IS_VALID_LENGTH_COMMIT = (string = '') => string.length <= MAX_COMMIT_LENGTH;

GET_RANDOM_INTEGER(1,100);
IS_VALID_LENGTH_COMMIT('Hello, world');
