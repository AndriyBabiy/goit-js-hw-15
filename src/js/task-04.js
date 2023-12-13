// answer found here - https://www.w3schools.com/jsref/event_onclick.asp

let counterValue = 0;

const counter = document.getElementById('counter');
let counterDisplayedValue = counter.querySelector('#value');
const counterButtonIncrement = counter.querySelector('button[data-action="increment"]');
const counterButtonDecrement = counter.querySelector('button[data-action="decrement"]');

counterButtonDecrement.setAttribute('onClick', 'counterDecrementClick()');

counterButtonIncrement.setAttribute('onClick', 'counterIncrementClick()');

counterButtonIncrement.hasAttribute('onClick');
counterButtonDecrement.hasAttribute('onClick');

counterButtonIncrement.onclick = function counterIncrementClick() {
  counterValue += 1;
  counterDisplayedValue.textContent = counterValue;
}

counterButtonDecrement.onclick = function counterDecrementClick() {
  counterValue -= 1;
  counterDisplayedValue.textContent = counterValue;
}
