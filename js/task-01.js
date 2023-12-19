/** 
 * We are given a list of items with a nested list inside of each item.
 * 
 * Log the number of categories(li.item) in ul#categories, 
 * using the forEach() method log the name of each sub-list (<h2> tag), 
 * log the corresponding number of items in each sub-list (<li>).
 * 
 * @returns {void} // result is logged to console
*/

// We first get the elements for the list
const listWithId = document.getElementById('categories');

// We get all categories by class name and convert into an array.
const listItems = Array.from(listWithId.getElementsByClassName('item'));

// We state the intial count of categories
console.log(`Number of Categories: ${listItems.length}`);
console.log(`\n`);

// Process each category element to log its contents
listItems.forEach((element, index, array) => {
  // Extract the header and list element from each category
  const [headerElement, listElement] = [...element.children];

  // Log the extracted elements
  console.log(`Category: ${headerElement.textContent}`);
  console.log(`Elements: ${listElement.children.length}`);

  // Check if its the last element to log a new line
  if (index < array.length - 1) {
    console.log('\n');
  }
});
