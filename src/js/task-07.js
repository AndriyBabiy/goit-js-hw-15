/**
 * Change the font size relative to the value of the slider
 */

// input range and text elments from the DOM.
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Listener for changes in the slider value
fontSizeControl.addEventListener('input', handlerInput);

// handler for the input event on the font size slider
function handlerInput() {
  // based on the value of the slider, the text should match the font-size equivalent
  text.style.fontSize = `${fontSizeControl.value}px`;
}
