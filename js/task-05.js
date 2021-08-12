let inputName = document.querySelector('#name-input')
let outputName = document.querySelector('#name-output')
    
let changeName = name => {

    if (inputName.value !== '') {
        return outputName.textContent = name.currentTarget.value;
    }
    else {
        return outputName.textContent = 'незнакомец';
    }
}

inputName.addEventListener('input', changeName);