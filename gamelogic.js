function displayWordSoFar(word, guesses) {
  let wordArray = word.split("");
  let secretWord = '';
  for (let i = 0; i < wordArray.length ; i++){
    if (guesses.includes(wordArray[i])) {
      secretWord += wordArray[i] + ' ';
    } else {
      secretWord += '_ '
    }
  };
  return secretWord;
}

function isGameWon(word, guesses) {
  let lettersGuessed = 0;
  for (let i = 0; i < word.length; i++ ) {
    if(guesses.includes(word[i])) {
      lettersGuessed ++;
    }
  }
  return lettersGuessed >= word.length;
}

function isGameLost(word, guesses) {
  let wordArray = word.split("");
  let falseGuesses = 0;
  for (let i = 0; i < guesses.length; i++ ){
    if(!wordArray.includes(guesses[i])) {
      falseGuesses ++;
    }
  }
  console.log('Je hebt al ' + falseGuesses + ' letters fout geraden!')
  return falseGuesses >= 7;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
