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

const controls = document.querySelector('#controls');
const amount = controls.querySelector('input[type="number"]');
const create = controls.querySelector('button[data-create]');
const destroy = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', () => createBoxes(amount.value));
destroy.addEventListener('click', () => destroyBoxes());

function createBoxes(int) {
  destroyBoxes();
  
  const markup = (int) => `
  <div style="height:${30 + (10 * int)}px; width:${30 + (10 * int)}px; background-color: ${getRandomHexColor()}">
  </div> `;
  
  const elements = [];
  for (let i = 0; i < int; i++) {
    elements.push(markup(i));
  }
  
  boxes.insertAdjacentHTML('beforeend', elements.join(''));
}

function destroyBoxes() {
    boxes.innerHTML = ``;
}