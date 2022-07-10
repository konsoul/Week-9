const addListeners = () => {
  // DOM elements
  const inputField = document.getElementById('name');
  const inputType = document.getElementById('type');
  const addItemBtn = document.getElementById('add');
  const shoppingList = document.getElementById('shopping-list');

  const addItem = (e) => {
    console.log('clicked');
  };

  // Listeners
  addItemBtn.addEventListener('click', addItem);
};

window.addEventListener('DOMContentLoaded', addListeners);
