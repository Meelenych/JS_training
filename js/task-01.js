
const getCategories = document.querySelector('#categories');

const getItems = getCategories.querySelectorAll('.item');

console.log(`Всего категорий: ${getItems.length}`);



getItems.forEach(item => {

  console.log(`В категории ${item.getElementsByTagName('h2')[0].textContent} ${item.getElementsByTagName('li').length} элемента(ов)`);
    
});

