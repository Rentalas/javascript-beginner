export function showCircle(cx, cy, radius): HTMLElement {
    const div = document.createElement('div');

    div.style.width = '0';
    div.style.height = '0';
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';

    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    }, 0);

    return div;
}

export const toTitleCase = (word: string): string => {
    const firstLetter = word[0].toUpperCase();
    const restOfTheWord = word
        .slice(1)
        .toLowerCase();

    return firstLetter + restOfTheWord;
}