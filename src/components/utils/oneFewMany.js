function oneFewMany(number, words) {
    let idx = 2;
    if (number === 1) {
        idx = 0;
    } else if ([2, 3, 4].indexOf(number) + 1) {
        idx = 1;
    }
    return `${number} ${words[idx]}`;
}

export default oneFewMany;
