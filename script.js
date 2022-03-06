'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '😜 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 14;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23
*/
const minNumber = 1
const maxNumber = 20
let score = maxNumber
let highscore = 0

document.querySelector('.between').textContent = `Between ${minNumber} and ${maxNumber}`;
document.querySelector('.message').textContent = '✨ Start guessing...';

let number = minNumber + Math.trunc(Math.random()*(maxNumber-minNumber + 1) );

document.querySelector('.again').addEventListener
('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    number = minNumber + Math.trunc(Math.random()*(maxNumber-minNumber + 1) );
    score = maxNumber
    document.querySelector('.score').textContent = maxNumber;
    document.querySelector('.number').textContent = '?' ;
    document.querySelector('.message').textContent = '✨ Start guessing...';
}
)

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if (!guess){
        document.querySelector('.message').textContent = '✨ No number yet...';
    }

    // when player wins
    else if (guess === number) {
        document.querySelector('.message').textContent = '😜 Correct Number!';
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
    }

    else if (guess < minNumber || guess > maxNumber) {
        document.querySelector('.message').textContent = `👻 Pick a number between ${minNumber} and ${maxNumber}`;
    }

    // if too low
    else if (number > guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = '🔺 Too low!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😪 Try again!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
    }

    // if too high
    else {
        if (score > 1) {
            document.querySelector('.message').textContent = '🔻 Too high!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😪 Try again!';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }
    }

})

//        document.querySelector('.message').textContent = '😒!';