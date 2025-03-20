# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
# Solution Code

## Project 1 (Color Changer)

``` Javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor=e.target.id;
    }
  })
})
```

## Project 2 (BMI Calculator)
``` Javascript
const form = document.querySelector('form');
// this use case will give you empty 
// const height = parseInt(document.querySelector('#height'));
form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const desc = document.querySelector('#desc');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give valid Height"
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give valid weight"
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
    if(results < 18.6){
      desc.innerHTML="Under weight"
    }
    else if(results > 18.6 && results < 24.9){
      desc.innerHTML="Normal weight"
    }
    else{
      desc.innerHTML="Over weight"
    }
  }
})
```

## Project 3 (Digital Clock)

``` Javascript
const clock=document.getElementById('clock')
// const clock=document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## Project 4 (Guess Number)

``` js
let randomNumber=parseInt(Math.random() * 100 + 1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value)
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter valid Number');
  }
  else if(guess < 1){
    alert('Please enter more than 1 Number');
  }
  else if(guess > 100){
    alert('Please enter less than 100 Number');
  }
  else{
    prevGuess.push(guess);
    if(numGuess == 11){
      displayGuess(guess);
      displayMessage(`Game Over , Random Number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
  
    }
  }
}
function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage('You guessed it Right');
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage('You guessed too smaller');
  }
  else if(guess > randomNumber){
    displayMessage('You guessed too larger');
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start NewGame</h2>`
  startOver.appendChild(p)
  playGame=false;
  newGame();
}

function newGame(){
  const newgamebutton=document.querySelector('#newGame')
  newgamebutton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disables')
    startOver.removeChild('p')
    playGame=true;
  })
}
```