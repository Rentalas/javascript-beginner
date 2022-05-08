function copySorted (arr) {
    return arr
    .slice()
    .sort();
};

const arr = ["HTML", "JavaScript", "CSS"];
const sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)