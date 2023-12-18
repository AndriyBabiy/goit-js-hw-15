/**
 * Insert the given array into the empty ul#ingredients.
 * 
 * For each element of the given array,
 * using document.createElement() create a li element,
 * add the string content as the contents of the li element,
 * attribute each li element the class 'item',
 * add all of the elements to the ul#ingredients in one operation.
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientList = document.getElementById('ingredients');

/**
 * 
 * @param {string[]} arr - array of strings to be converted to list items.
 * @param {HTMLElement} listElement - the HTML ist elment into which the list items will be appended.
 * 
 * @returns {void} This function does not return a value.
 * 
 */
function makeList(arr, listElement) {
  // use a map method to go through eash element of the array
  const markup = arr.map((element) => {
    // create the li element
    const li = document.createElement('li');

    // attribute the new li element with the class 'item'
    li.setAttribute('class', 'item')
    // add the content of the string into the li element
    li.append(element);

    // we return the li element as the iteration of the map method
    return li;}
  );

  // append the markup into the given HTML element
  listElement.append(...markup);
}

makeList(ingredients, ingredientList);
