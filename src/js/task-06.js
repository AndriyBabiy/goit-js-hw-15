/**
 * Check the length of the input into input#validation-input,
 * if it matches the value of input[data-length] then attribute a 'valid' class to the input element,
 * if it doesnt match then attribute the 'invlid' class
 */

let inputGiven = document.querySelector('#validation-input');

inputGiven.addEventListener('blur', handlerInput);

/**
 * 
 * @param {*} evt - Event that will occur based on the occurence on a blur event on the input field
 * 
 */
function handlerInput(evt) {
  let requiredLength = Number(evt.currentTarget.getAttribute('data-length'));
  let inputLength = Number(evt.currentTarget.value.length);

  // if the length of the input value is not equal to the outlined value then attribute the 'invalid' class.
  if (inputLength !== requiredLength) {
    return evt.currentTarget.setAttribute('class', 'invalid');
  }

  // if the conditional case didnt activate then a 'valid' class will be attributed to the input element
  return evt.currentTarget.setAttribute('class', 'valid');
}