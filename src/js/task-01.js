const taskOne = document.querySelectorAll('.item').length
console.log('Nubmer of categories:', taskOne);

const task = document.querySelectorAll('.item')
    task.forEach.call(task, (el) => { 
    const taskTwo = el.querySelector('h2').innerHTML
    const taskTwoList = el.querySelectorAll('li').length
    console.log('Category:', taskTwo)
    console.log('Elements:', taskTwoList)
});
  