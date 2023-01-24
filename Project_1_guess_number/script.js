'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const resetGameButton = function (){

  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Pocni pogadjati...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
  });
};


// Funkcija dohvaća klasu message i prima parametar message od argumenta!
const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
};




// dohvaćanje 'Check' buttona, postavljanje eventa sa 2 parametra:
document.querySelector('.check').addEventListener('click', () => {

  // spremljeno u varijablu guess user input i parsirano iz stringa u broj:
  const guess = Number(document.querySelector('.guess').value);

  // Napravljena varijabala koja provjerava dali je input toohigh ili toolow!
  // varijabla se koristi kao argument funkciji displayMessage();
  let tooHighTooLow = guess > secretNumber ? '📈 Preveliki!' : '📉 Premali!';

// When there is no input
if (!guess){
  displayMessage('⛔ Upisite broj!');

  // When player wins ++ change STYLES ++ HIGHSCORE
  }else if (guess === secretNumber){
    displayMessage('🎉 POGODAK !!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // Add current score to highscore!
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber){

    if (score > 1){
      displayMessage(tooHighTooLow);
      score--;  
      document.querySelector('.score').textContent = score;
    } else {
     displayMessage('⚡ GAME OVER, Ponovi igru');
      document.querySelector('.score').textContent = '0';
      document.querySelector('body').style.backgroundColor = '#AA3535';
    };
  };
});
 
resetGameButton();








