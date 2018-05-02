function inputRemoveWrong(input) {
    const inputHolder = input.parentNode;
    const mistake = inputHolder.getElementsByTagName('span')[0];
    inputHolder.classList.remove('wrong');
    mistake.innerHTML = '';
}

export default inputRemoveWrong;
