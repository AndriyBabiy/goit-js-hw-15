/**
 * Have the input form check and return values once the form is submitted.
 * Initally check that the form has all of the fileds filled as if not then return an alert.
 * When both fields are filled, make sure that the page doesnt reload upon form submit,
 * return the input values as an object in the console,
 * clear the input fields of the input values.
 */

// get access to the form element via the DOM.
const loginForm = document.querySelector('.login-form');

// add an event listener for the submit event.
loginForm.addEventListener('submit', handlerSubmit);

// function that checks the form inputs and processes the values if valid.
function handlerSubmit(evt) {
  // prevent the page from reloading upon submit.
  evt.preventDefault();
  
  // retrieve and deconstruct the two elements of the form into their own values
  const { email, password } = evt.currentTarget.elements;
  
  // check if either of the elments are empty
  if (email.value === '' || password.value === '') {
    // if either of the elements are empty return an alert to the user
    return alert('All fields must be filled out')
  }

  // create an object that will return the input data
  const data = {};
  
  // process each element of the input elements
  for (let element of evt.currentTarget.elements) {
    // exlude the button element is being used to submit the form
    if (element.type !== 'submit') {
      // add the element type as the object key and the element value as the respective value 
      data[element.type] = element.value;
    }
  }
  
  // log the data input in the form to the console
  console.log(data);
  
  // reset the input fields ot be blank
  evt.currentTarget.reset();
}