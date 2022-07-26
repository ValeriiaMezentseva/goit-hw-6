const fontInput = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');
fontInput.addEventListener('input',(event) => {
    const value = event.target.value;
    inputText.style.fontSize = `${value}px`;
    return inputText.style.fontSize
});

