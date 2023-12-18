/**
 * Reflect the value entered into input#name-input in span#name-output.
 * If there is no input have span#name-output be 'Anonymous'.
 */

const inputField = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputField.addEventListener("input", updateValue);

/**
 * 
 * @param {*} e - The event object provided by the input event
 * 
 */
function updateValue(e) {
  // the text content of outputText should either be the value of the event currentTarget or 'Anonymous'.
  outputText.textContent = e.currentTarget.value || 'Anonymous';
};
