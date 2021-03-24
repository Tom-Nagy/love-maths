// Add eventListener once the Dom is completely loaded 

document.addEventListener('DOMContentLoaded', function () {
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

    // Add eventListener to the input box to enable the user to use the 'Enter' key to submit the answer
    document.getElementById('answer-box').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    })

    runGame('addition');
})

function runGame(gameType) {

  document.getElementById('answer-box').value = ''; // Set the input box to empty string to clear the content ech time the function is called
  document.getElementById('answer-box').focus(); // Set the focus to the input so we don't have to click on it to type the answer

  // Create two random number and add them as parameter in the display function
  // Analyse the operator sign from the DOM to display the right game

  let num1 = Math.floor(Math.random()* 100 +1); // Math.floor => for whole number && x 100 for number delimitation && + 1 to avoid 0
  let num2 = Math.floor(Math.random()* 100 +1);

   if (gameType === 'addition'){
       displayAdditionQuestion(num1, num2);
   } else if (gameType === 'subtraction') {
       displaySubtractionQuestion(num1, num2);
   } else if (gameType === 'multiplication') {
       displayMultiplicationQuestion(num1, num2);
   } else if (gameType === 'division') {
       displayDivisionQuestion(num1, num2);
   }
}

function checkAnswer() {
  // Check the answer given by the user against the calculated answer
  // Run another game   

  let userAnswer = parseInt(document.getElementById('answer-box').value);
  let correctAnswer = calculatedAnswer()[0];

  if (userAnswer === correctAnswer) {
      alert(`Well done, you found the correct answer! => ${correctAnswer} ;)`)
      incrementCorrectAnswer();
  } else {
      alert(`Too bad, you answered ${userAnswer} :(, but the correct answer is : ${correctAnswer}`)
      incrementIncorrectAnswer();
  }

  runGame(calculatedAnswer()[1]);
}

function calculatedAnswer() {
  // fetch the operands and the operator from the DOM to calculate the correct answer
  
  let operator = document.getElementById('operator').innerText;
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);

  if (operator === '+') {
      return [operand1 + operand2, 'addition']
  } else if (operator === '-') {
      return [operand1 - operand2, 'subtraction']
  } else if (operator === 'x') {
      return [operand1 * operand2, 'multiplication']
  } else if (operator === '/') {
      return [operand1 / operand2, 'division'] 
  }

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

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').innerText = operand1;
  document.getElementById('operand2').innerText = operand2;
  document.getElementById('operator').innerText = '+';
}

function displaySubtractionQuestion(operand1, operand2) {
  document.getElementById('operand1').innerText = operand1 > operand2 ? operand1 : operand2;
  document.getElementById('operand2').innerText = operand1 > operand2 ? operand2 : operand1;
  document.getElementById('operator').innerText = '-';
}

function displayMultiplicationQuestion(operand1, operand2) {
  document.getElementById('operand1').innerText = operand1;
  document.getElementById('operand2').innerText = operand2;
  document.getElementById('operator').innerText = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
  if (operand1 % operand2 === 0 && operand1 !== operand2 && operand2 !== 1) {
    document.getElementById('operand1').innerText = operand1;
    document.getElementById('operand2').innerText = operand2;
  } else {
    runGame('division');
  }

    document.getElementById('operator').innerText = '/';
}