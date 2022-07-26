const inputText = document.querySelector('#validation-input');

inputText.addEventListener('focus', () => {
    inputText.classList.add('invalid');
    inputText.classList.remove('valid')
}
);
inputText.addEventListener('blur', () => {
       if (inputText.value.length === Number(inputText.getAttribute(["data-length"]))) {
    inputText.classList.add('valid');
           inputText.classList.remove('invalid');
}
    
})
console.log(inputText);
