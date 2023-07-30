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
        // document.querySelector('.message').textContent = '⛔️No number!'
        displayMessage('⛔ No number!')
    }

//    WHEN PLAYER WINS
    else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        selectNumber(secretNumber)
        // document.querySelector('.number').textContent = secretNumber;
        bgColor('#60b347')
        // document.querySelector('body').style.backgroundColor = '#60b347';
        styleWidth('30rem')
        // document.querySelector('.number').style.width = '30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    //    WHEN GUESS IS WRONG
    } else if(guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!')
            // document.querySelector('.message').textContent = guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!';
            score--;
            displayScore(score)
            // document.querySelector('.score').textContent = score;
        } else {
            displayMessage('❌ You lost the game!')
            // document.querySelector('.message').textContent = '❌ You lost the game!';
            displayScore('0')
            // document.querySelector('.score').textContent = '0';
        }

    }
// //    WHEN GUESS IS TOO HIGH
//     else if (guess > secretNumber){
//         if (score > 1) {
//             document.querySelector('.message').textContent = ' 📈 Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '❌ You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// //    WHEN GUESS IS TOO LOW
//     else if (guess < secretNumber){
//         if (score > 1) {
//             document.querySelector('.message').textContent = ' 📉 Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = '❌ You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
})

 document.querySelector('.again').addEventListener('click', function(){
     // location.reload()
     secretNumber = Math.trunc(Math.random() * 20) + 1;
     displayScore('20')
     // document.querySelector('.score').textContent = '20';

     displayMessage('Start guessing...')
     // document.querySelector('.message').textContent = 'Start guessing...';
     selectNumber('?')
     // document.querySelector('.number').textContent = '?';
     bgColor('#222')
     // document.querySelector('body').style.backgroundColor = '#222';
     styleWidth('15rem')
     // document.querySelector('.number').style.width = '15rem';
     document.querySelector('.guess').value = '';


 })