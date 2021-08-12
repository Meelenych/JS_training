let counterValue = document.querySelector('#value').textContent;

const buttonDown = document.querySelector('button[data-action="decrement"]')
const buttonUp = document.querySelector('button[data-action="increment"]')

buttonDown.addEventListener('click', () => {
    counterValue --
    document.querySelector('#value').textContent = `${counterValue}`
})

buttonUp.addEventListener('click', () => {
    counterValue++
    document.querySelector('#value').textContent = `${counterValue}`
})


