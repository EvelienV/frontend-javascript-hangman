const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  console.log("Weet je het woord al? " + displayWordSoFar(word,guesses));
  if(isGameWon(word, guesses)) {
    console.log("HOERA, Je hebt het woord geraden!");
  } else if (isGameLost(word, guesses)) {
    console.log("HELAAS, Je hebt het niet gered!");
  } else {
    const letter = question("Raad een letter: ");
    // voeg de geraden letter toe aan de array met guesses
    guesses.push(letter);
    // volgende ronde! we roepen game nog een keer aan
    game(word, guesses);
  }
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
