const MAX_COMMIT_LENGTH = 140;

const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const isValidLengthCommit = (string = '') => string.length <= MAX_COMMIT_LENGTH;

export {getRandomInteger, isValidLengthCommit};
