function passMistakeToInput(inputId, mistakeText) {
    let input = document.getElementById(inputId);
    let inputHolder = input.parentNode;
    let mistake = inputHolder.getElementsByTagName("span")[0];
    mistake.innerHTML = mistakeText;
    inputHolder.classList.add("wrong");
}

export default passMistakeToInput;
