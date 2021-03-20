'use strict';
// let message = document.querySelector('.message');
// console.log(message);
// message.textContent = 'Correct Number';
// document.querySelector('.number').value = 13;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
let score = 10;
document.querySelector('.score').textContent = score;
const reduceScore = message => {
  if (score > 1) {
    score--;
    document.querySelector('.message').textContent = message;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the Game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#913d3d';
    document.querySelector('.number').textContent = secretNumber;
  }
};
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'Provide a Number!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Won!!';
    document.querySelector('body').style.backgroundColor = 'green';
    let numberEl = document.querySelector('.number');
    numberEl.style.width = '30rem';
    numberEl.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    reduceScore('Too High');
  } else {
    reduceScore('Too Low');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing!!';
});
