const slider = document.querySelector('#font-size-control')
console.log(slider)

const text = document.querySelector('#text')
console.log(text)



slider.addEventListener('input', (e) => {

     text.style.fontSize = e.currentTarget.value + 'px'
    
})
