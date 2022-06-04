
const managment = {
    firstStudent : {
        name1: "KatyaS",
        phone: "0939944442",
        age: "25",
    },
    secondStudent : {
        name1: "BobT",
        phone: "0939941242",
        age: "23",
    },
    thirdStudent : {
        name1: "MartaA",
        phone: "0931342242",
        age: "33",
    },
    fourthStudent : {
        name1: "JamesA",
        phone: "0931342092",
        age: "328",
    },
}; 


let law = [
    ["NastyaR", "0872332231", 22], 
    ["SergiyO", "0917646424", 21],
    ["KostyaF", "0674521232", 42],
    ["IraN", "06327271111", 21],
    ["TolikU", "0942231124", 23],
];

let finance = {
    firstStudent : ["BrendD", "0752324455", 55],
    secondStudent : ["SigizmundT", "0764828282", 28],
    thirdStudent : ["AnatolK", "0975657234", 21],
    fourthStudent : ["TanyaT", "0939924456", 36],
};

let biology = [
    {name1: "KristinaS", phone: "0939495959", age: 23},
    {name1: "GovardU", phone: "0987654321", age: 24},
    {name1: "KatrinP", phone: "0912254321", age: 25},
    {name1: "SamantaL", phone: "0987623411", age: 29},
];


const academy = [managment,
    law,
    finance,
    biology,
];


console.log(academy[1][2]);

export const sortedStudentsByAge = (managment) => {
    academy.sort((a, b) => {
        return a.age < b.age;
    });
}
