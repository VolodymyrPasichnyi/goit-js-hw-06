const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  const list = document.querySelector('ul');
  ingredients.forEach(item => {
    const items = document.createElement('li')
    items.textContent = item
    items.classList.add('item')
    list.append(items)
  });
  console.log(list);  

  
