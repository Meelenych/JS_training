const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



const uList = document.getElementById('ingredients')


let content = element => {
    const line = document.createElement('li');
    line.textContent = element;
    return line
    
}


uList.append(...ingredients.map(content))
