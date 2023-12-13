const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientList = document.getElementById('ingredients');
console.log(ingredientList);

function makeMarkup(arr) {
  const markup = arr.map((element) => {
    const li = document.createElement('li');

    li.setAttribute('class', 'item')
    li.append(element);

    return li;}
  );

  ingredientList.append(...markup);
}

makeMarkup(ingredients);
