function passMistakeToInput(inputId, mistakeText) {
    const input = document.getElementById(inputId);
    const inputHolder = input.parentNode;
    const mistake = inputHolder.getElementsByTagName('span')[0];
    mistake.innerHTML = mistakeText;
    inputHolder.classList.add('wrong');
}

export default passMistakeToInput;
