/**
 * Write a function that takes in a number via na input field,
 * upon clicking the 'create' button it will create the oulined number of elements,
 * each of the elements is assigned a random number and sequentially increases in width and height by 10px.
 * There is also another button labelled 'destroy',
 * which upon being clicked all of the elements will be removed.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// obtaining access to the HTML elements via the DOM
const controls = document.querySelector('#controls');
const amount = controls.querySelector('input[type="number"]');
const create = controls.querySelector('button[data-create]');
const destroy = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

// adding event listeners for when the buttons are clicked
create.addEventListener('click', () => createBoxes(amount.value));
destroy.addEventListener('click', () => destroyBoxes());

// this is the create event that creates the outlined number of boxes and places them into the box div#boxes.
function createBoxes(int) {
  // create the markup of the box elements that sequentially increase in sise
  const markup = (int) => `
  <div style="height:${30 + (10 * int)}px; width:${30 + (10 * int)}px; background-color: ${getRandomHexColor()}">
  </div> `;
  
  // iterate the creation of boxes for the amount of boxes that the user outlines
  for (let i = 0; i < int; i++) {
    // boxes are added sequentially with the smallest box on top
    boxes.insertAdjacentHTML('beforeend', markup(i));
  }
}

// this is the handler function that occuers when the destroy button is clicked.
function destroyBoxes() {
  // the elements inside the div div#boxes are removed and returned to the original empty state.
  boxes.innerHTML = ``;
}