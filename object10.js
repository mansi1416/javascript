let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];


let peopleObject = people.reduce((acc, person, index) => {
    acc[`person${index + 1}`] = person;
    return acc;
}, {});

console.log(peopleObject);
