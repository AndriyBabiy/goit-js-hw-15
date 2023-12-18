/**
 * Change the background color of <body> using inline styles.
 * The color changes should occur based on the click of the button 'button.change-color',
 * the color value should also be returned in the span element 'span.color'.
 * 
 */

// function that generates a random hexadecimal color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// retrieving element from the DOM
const body = document.querySelector('body');
const widget = body.querySelector('.widget');
const widgetButton = widget.querySelector('button');

// add an event listener that will wait for clicks of the widget button
widgetButton.addEventListener('click', handlerEvent);

// function handles the event that occurs when the widget button is clicked.
function handlerEvent() {
  // get a random color that will be used
  let randomColor = getRandomHexColor();
  // get the textfield responsible for showing what random color is being used
  const widgetText = widget.querySelector('.color');

  // change the background color via an inline-style
  body.setAttribute('style',`background-color: ${randomColor}`);

  // update the span text content to reflect the hexadecimal of the color
  widgetText.textContent = randomColor;
};
