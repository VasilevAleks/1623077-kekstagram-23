const getRandomInteger = (min = 0, max = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

getRandomInteger  (1,100);

let commit= 'hello,world';
const lengthCommit=commit.length;
const isSomethingLengthCommit = function (lengthCommit) {
  if(lengthCommit > 0 && lengthCommit< 140) {
    return true;
  }
  else {return false;}
};

isSomethingLengthCommit (lengthCommit);
