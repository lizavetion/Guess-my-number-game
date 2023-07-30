'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function selectNumber(num){
    document.querySelector('.number').textContent = num;
}
function bgColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function displayScore (scoreValue) {
    document.querySelector('.score').textContent = scoreValue;
}
function styleWidth (sWidth) {
    document.querySelector('.number').style.width = sWidth;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

//    WHEN THERE IS NO INPUT
    if (!guess){
        displayMessage('⛔ No number!')
    }

//    WHEN PLAYER WINS
    else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        selectNumber(secretNumber)
        bgColor('#60b347')
        styleWidth('30rem')

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //    WHEN GUESS IS WRONG
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!')
            score--;
            displayScore(score)
        } else {
            displayMessage('❌ You lost the game!')
            displayScore(0)
        }

    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayScore('20')
    displayMessage('Start guessing...')
    selectNumber('?')
    bgColor('#222')
    styleWidth('15rem')
    document.querySelector('.guess').value = '';
})