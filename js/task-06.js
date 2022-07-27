const inputText = document.querySelector('#validation-input');


inputText.addEventListener('blur', checkValue) 

function checkValue(event) {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
         
    } else {
        inputText.classList.remove('valid')
        inputText.classList.add('invalid');

    }
    
};
console.log(inputText);
