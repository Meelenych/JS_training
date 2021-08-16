const inputField = document.querySelector('#validation-input')

inputField.addEventListener('blur', (e) => {

    inputField.classList.forEach(className => inputField.classList.remove(className))
    
    if (Number(inputField.value.length) === 6) {
        return inputField.classList.toggle('valid')
    }
    
    else {
        return inputField.classList.toggle('invalid')
    }
})