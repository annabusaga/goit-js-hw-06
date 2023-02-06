const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const listRef = document.querySelector('[id="ingredients"]')

const array = [];
for (const ingredient of ingredients) {
  const newItem = document.createElement('li')
  newItem.textContent = ingredient
  newItem.classList.add('item')
  array.push(newItem);
}
listRef.append(...array)


