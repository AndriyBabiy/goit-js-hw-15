// answer found on https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event

const inputField = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputField.addEventListener("change", updateValue);

function updateValue(e) {
  outputText.textContent = e.target.value || 'Anonymous';
};
