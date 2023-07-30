'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

//    WHEN THERE IS NO INPUT
    if (!guess){
        document.querySelector('.message').textContent = '⛔️No number!'
    }

//    WHEN PLAYER WINS
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    }
//    WHEN GUESS IS TOO HIGH
    else if (guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
//    WHEN GUESS IS TOO LOW
    else if (guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = ' 📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
})

 document.querySelector('.again').addEventListener('click', function(){
     // location.reload()
     secretNumber = Math.trunc(Math.random() * 20) + 1;
     score = 20;

     document.querySelector('.message').textContent = 'Start guessing...';
     document.querySelector('.number').textContent = '?';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '30rem';
     document.querySelector('.guess').value = '';


 })