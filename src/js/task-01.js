const listWithId = document.getElementById('categories');
const listItems = [...listWithId.getElementsByClassName('item')];

console.log(`Number of Categories: ${listItems.length}`);
console.log(`\n`);
listItems.forEach((element, index, array) => {
  const nestedElements = [...element.children];

  const headerElement = nestedElements[0].textContent;
  console.log(`Category: ${headerElement}`);
  
  const nestedList = nestedElements[1];
  console.log(`Elements: ${nestedList.children.length}`);

  if (index < array.length - 1) {
    console.log('\n');
  }
});
