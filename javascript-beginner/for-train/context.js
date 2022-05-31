// context loss inside object
export const obj = {
    name: 'Vasya',
    greeting: function () {
        return `Hello ${this.name}`;
    },
};

export const obj1 = {
    name: 'Vasya',
    greeting: function() {
        return function(adjective) {
            return `Hello ${adjective} ${this.name}`; // this was lost
        }

    },
};

export const obj2 = {
    name: 'Vasya',
    greeting: function() {
        const func = function(adjective) {

            return `Hello ${adjective} ${this.name}`
        };

        return func.bind(this);
    },
};

export const obj3 = {
    name: 'Vasya',
    greeting: function() {
        const context = this;
        return function(adjective) {
            return `Hello ${adjective} ${context.name}`;
        }

    },
};

export const obj4 = {
    name: 'Vasya',
    greeting: function() {
        return (adjective) => (function() {
            return `Hello ${adjective} ${this.name}`;
        }).call(this);
    },
};

export const obj5 = {
    name: 'Vasya',
    greeting: function() {
        return (adjective) => {
            return `Hello ${adjective} ${this.name}`;
        }

    },
};

const tested = obj5;

console.log(tested.greeting()('strong')); // 'Hello strong Vasya'

tested.name = 'Masha';

console.log(tested.greeting()('sweet')); // 'Hello sweet Masha'



// context lost outside object
export const obj6 = {
    name: 'Vasya',
    greeting: function () {
        return `Hello ${this.name}`;
    },
};

const testedOutside = obj6;

console.log('outside');

testedOutside.name = 'Masha';

const greeting = testedOutside.greeting;

console.log(greeting()); // Hello Masha // context was lost

console.log(greeting.bind(testedOutside)());

const obj7 = {
    name: 'Stas',
    greetingFull(surname, adverb) {
        return `${toTitleCase(adverb)} greeting ${this.name} ${surname}`
    }
}

console.log(greeting.bind(obj7)())

const greetingFull = obj7.greetingFull;


console.log('first', greetingFull.bind(testedOutside)('Petroff', 'kindly'));
console.log('second', greetingFull.bind(testedOutside, 'Eskalona')('kindly'));
console.log('third', greetingFull.call(testedOutside, 'Eskalona', 'kindly'));
const args = ['Eskalona', 'kindly'];
console.log('fourth', greetingFull.apply(testedOutside, args));



function toTitleCase(word) {
    const firstLetter = word[0].toUpperCase();
    const restOfTheWord = word
        .slice(1)
        .toLowerCase();

    return firstLetter + restOfTheWord;
}