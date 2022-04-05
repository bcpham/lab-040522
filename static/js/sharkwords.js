const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {
  // Replace this with your code

  const wordContainer = document.querySelector('#word-container');

  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  // Replace this with your code

  const letterButtons = document.querySelector('#letter-buttons');

  for (const letter of ALPHABET) {
    letterButtons.insertAdjacentHTML('beforeend', `<button>${letter}</button>`);

  }

};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  buttonEl.disabled = true;
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  // Replace this with your code
  const letterDiv = document.querySelector(`div.${letter}`);
  if (letterDiv !== null) {
    return true;
  }
};

const getRandomWord = (words) => {
  const wordIndex = Math.floor(Math.random() * words.length); //generates random integer as index
  const randomWord = words[wordIndex]; //sets random word from dictionary words[index]
  console.log(randomWord);
  return randomWord;
}
// The solution had a sneaky one liner: const word = WORDS[Math.floor(Math.random() * WORDS.length)];

const handleCorrectGuess = (letter) => {
  // Replace this with your code
  const letterBox = document.querySelectorAll(`.${letter}`);
  
  for (box of letterBox){
    box.innerHTML = letter;
  }
  
};

const handleWrongGuess = () => {
  if(numWrong === 4){
    for (const button of document.querySelectorAll('button')) {
      button.setAttribute('disabled', '');
    }
    document.querySelector('#play-again').style.display = '';
  } else {
    numWrong += 1;
    const image = document.querySelector('img');
    image.setAttribute('src', `/static/images/guess${numWrong}.png`);
  }
};

const resetGame = () => {
  window.location = '/sharkwords';  //like Flask, redirect
};


// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  
  // const word = 'hello';

 

  word = getRandomWord(WORDS);

  // call the function that makes an empty line for each letter in the word
  // Replace this line with the function call
  createDivsForChars(word);

  // call the function that makes a button for each letter in the alphabet
  // Replace this line with the function call
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE

    button.addEventListener('click', () => {
      const letter = button.innerHTML;
      button.setAttribute('disabled', '');

      if (word.includes(letter)) {
        handleCorrectGuess(letter);
      } else {
        handleWrongGuess();
      }
    });
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
  const playAgainButton = document.querySelector('#play-again');
  playAgainButton.addEventListener('click', () => {
    resetGame();
  });

})();
