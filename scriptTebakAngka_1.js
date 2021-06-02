var randomNumber = Math.floor(Math.random() * 10);
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Anda Memasukan : ';
  }


  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'SELAMAT! Tebakan Anda Benar!';
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.textContent = '!!!Sayang sekali Anda Kurang Beruntung Permainan Selesai, Coba lagi !!!';
    lowOrHigh.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Mohon Maaf, Anda Salah!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHigh.textContent='Angka yang anda masukan Terlalu Rendah!' ;
    } else if(userGuess > randomNumber) {
      lowOrHigh.textContent = 'Angka yang anda masukan Terlalu Tinggi!';
    }
  }

  guessCount++;
  guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent='';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value='';
  guessField.focus();
  lastResult.style.backgroundColor='white';
  randomNumber=Math.floor(Math.random() * 10) + 1;
}
