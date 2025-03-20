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