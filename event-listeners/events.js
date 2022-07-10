const addEventListeners = (e) => {
  // get our elements from the DOM
  const input = document.getElementById('red-input');
  const addItems = document.getElementById('add-item');
  const inputValue = document.getElementById('list-add');
  const unorderdList = document.querySelector('#section-2 > ul');
  const colorSelector = document.getElementById('color-select');
  const section = document.getElementById('section-3');
  const removeButton = document.getElementById('remove-listeners');

  const changeToRed = (e) => {
    if (e.target.value.toLowerCase().includes('red')) {
      input.style.backgroundColor = 'red';
    } else {
      input.style.backgroundColor = '';
    }
  };

  const addItem = (e) => {
    const newItem = document.createElement('li');
    newItem.append(inputValue.value);
    unorderdList.append(newItem);
  };

  const backgroundChangeColor = (e) => {
    section.style.backgroundColor = e.target.value;
  };

  const removeListeners = (e) => {
    input.removeEventListener('input', changeToRed);
    console.log('removed listener');
  };

  // listeners
  input.addEventListener('input', changeToRed);
  addItems.addEventListener('click', addItem);
  colorSelector.addEventListener('change', backgroundChangeColor);
  removeButton.addEventListener('click', removeListeners);
};

window.addEventListener('DOMContentLoaded', addEventListeners);
