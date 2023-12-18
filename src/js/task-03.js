/**
 * Turning an array of data into an image gallery.
 * 
 * For each item of the array 'images',
 * create an '<img>' element within a '<li>' element,
 * add all of the corresponding information from the given array into the '<img>',
 * append all of the '<li>' into the outlined 'HTML <ul>' using the 'insertAdjacentHTML()' method.
 * 
 */

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let galleryList = document.querySelector('.gallery');

/**
 * 
 * @param {Object[]} arr - Array of image objects to add to the HTML list.
 * @param {HTMLElement} listElement  - HTML list element to add images into.
 * 
 * @returns {void} This function does not return a value.
 * 
 */
function addImagesToList(arr, listElement) {
  // create the markdoen that will be added into the HTML element
  const markdown = arr
    // itearating over the elements of the decomposed array element combinations of 'url' and 'alt'
    .map(({ url, alt }) => `
      <li>
        <img src="${url}", alt="${alt}">
      </li>
      `
    )
    // join all of the elements of the mapped array of code
    .join('');
  
  // append the code into the outlined HTML list element
  listElement.insertAdjacentHTML('afterbegin', markdown);
}

addImagesToList(images, galleryList);
