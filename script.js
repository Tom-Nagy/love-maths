// Add eventListener once the Dom is completely loaded 

document.addEventListener(DOMContentLoaded, function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (button.getAttribute('data-type') === 'submit') {
                checkAnswer();
            } else {
                let gameType = button.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }
})

function runGame(gameType) {

}

function checkAnswer() {
  // Check the answer given by the user against the calculated answer

  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let correctAnswer = calculatedAnswer();

  if (userAnswer === correctAnswer) {
      incrementCorrectAnswer();
  } else {
      incrementIncorrectAnswer();
  }
}

function calculatedAnswer() {
  // fetch the operands and the operator from the DOM to calculate the correct answer
  
}

function incrementCorrectAnswer() {
  //fetch the Correct Answer score from the DOM and increment it by one
    
  let rightAnswer = parseInt(document.getElementById('right-answer').innerText);
  document.getElementById('right-answer').innerText = ++rightAnswer;
}

function incrementIncorrectAnswer() {
  //fetch the Incorrect Answer score from the DOM and increment it by one

  let wrongAnswer = parseInt(document.getElementById('wrong-answer').innerText);
  document.getElementById('wrong-answer').innerText = ++wrongAnswer;
}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplicationQuestion() {

}

function displayDivisionQuestion() {

}