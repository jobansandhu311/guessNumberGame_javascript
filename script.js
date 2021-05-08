'use strict';
let message = document.querySelector('.message');
let score = 10;
let highscore = 0;
let correctAns = Math.floor(Math.random() * 20);
console.log(correctAns);

const checkNumber = function () {
  let guessedInt = document.querySelector('.guess').value;
  if (guessedInt == correctAns) {
    message.textContent = 'Correct Number!';
    document.querySelector('.number').textContent = correctAns;
    document.querySelector('.result').textContent = 'You Win!!!';
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.score').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (!guessedInt) {
    message.textContent = 'Not Valid Number!';
  } else {
    if (guessedInt !== correctAns) {
      if (score > 1) {
        message.textContent =
          guessedInt > correctAns ? 'Too Big!' : 'Too Short!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.result').textContent = 'You Lose!!!';
        document.querySelector('body').style.backgroundColor = ' #8B0000';
        document.querySelector('.check').style.display = 'none';
        document.querySelector('.message').textContent = 'Try Again!';
      }
    }
  }
};

const playAgain = function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.result').textContent = 'Guess The Number';
  document.querySelector('.number').textContent = '?';
  correctAns = Math.floor(Math.random() * 20);
  console.log(correctAns);
  document.querySelector('.check').style.display = 'block';
};

document.querySelector('.check').addEventListener('click', checkNumber);

document.querySelector('.again').addEventListener('click', playAgain);

// if (guessedInt == 21) {
//     message.textContent = 'Correct!';
//     score.textContent = '100';
//   } else {
//     message.textContent = 'Wrong!';
//     score.textContent = '0';
//   }
// function digPow(n, p) {
//   // ...
//   let result = 0;
//   n = n.toString();
//   for (let i = 0; i < n.length; i++) {
//     result += n[i] ** p;
//     p++;
//   }
//   let k = result / n;
//   if (Number.isInteger(result / n)) {
//     return k;
//   } else {
//     return -1;
//   }
// }
// console.log(digPow(46288, 3));
// // function isValidWalk(walk) {
//   let horizontal = 0;
//   let vertical = 0;
//   for (let i = 0; i < walk.length; i++) {
//     if (walk[i] == 'n') {
//       vertical += 1;
//     } else if (walk[i] == 's') {
//       vertical -= 1;
//     } else if (walk[i] == 'w') {
//       horizontal += 1;
//     } else if (walk[i] == 'w') {
//       horizontal -= 1;
//     }
//   }
//   console.log(horizontal, vertical);
//   if (walk.length == 10 && vertical == 0 && horizontal == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let directions = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
// console.log(isValidWalk(directions));

// document.querySelector('.message').textContent = 'Wrong Answer';
// document.querySelector('.score').textContent = 10;

// Logic
// let lives = 5;
// let number = 9;

// while (lives > 0) {
//   let answer = Number(prompt('Guess the number: '));

//   if (answer == number) {
//     console.log(`Correct Answer! ${number}`);
//     break;
//   } else if (answer < number) {
//     console.log('Your number is small!');
//     lives--;
//   } else if (answer > number) {
//     console.log('Your number is big');
//     lives--;
//   } else {
//     console.log('Invalid entry');
//     lives--;
//   }
// }
