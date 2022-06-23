export function spinWords(string) {

    const splittedArr = string.split(' ');
    const result = [];

    splittedArr.forEach(el => {
        if (el.length > 4) {
            let word = el.split('')
                .reverse()
                .join('');
            return result.push(word);
        }

        result.push(el);
    })

    return result.join(' ');
}

