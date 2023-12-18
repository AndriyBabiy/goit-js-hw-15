/**
 * Create a counter for which the indicated number changes based on interactions with buttons.
 * 
 * Create a variable 'counterValue' which hods the current value of the counter.
 * Add eventListeners to buttons that increase and decrease the counter.
 * Update the interface with the new value upon change.
 */

const counter = document.getElementById('counter');
let counterDisplayedValue = counter.querySelector('#value');
const counterButtonIncrement = counter.querySelector('button[data-action="increment"]');
const counterButtonDecrement = counter.querySelector('button[data-action="decrement"]');

/**
 * 
 * @param {HTMLElement} counterElement - The counter elemnet reflecting the 'counterValue'.
 * @param {HTMLElement} incrementButton - Button element that increases counter value.
 * @param {HTMLElement} decrementButton - Button element that decreases the counter value.
 * 
 */
function counterFunction(counterElement, incrementButton, decrementButton) {
  // setting the counterValue that will be changed based on interaction with buttons;
  let counterValue = 0;

  // adding an event listener to the increment button
  incrementButton.addEventListener('click', () => {
    // the occurrence of a click invreases the counterValue element
    counterValue += 1;
    // the occurrence of a click adjusts the HTML textContent of the counterElement to reflect the change.
    counterElement.textContent = counterValue;
  });
  
  // adding an event listener to the decrement button
  decrementButton.addEventListener('click', () => {
    // the occurrence of a click decreases the counterValue element
    counterValue -= 1;
    // the occurrence of a click adjusts the HTML textContent of the counterElement to reflect the change.
    counterElement.textContent = counterValue;
  });
}

counterFunction(counterDisplayedValue, counterButtonIncrement, counterButtonDecrement);
