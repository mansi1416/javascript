let person = {
    name: "John Doe",
    age: 30
};

let address = {
    city: "New York",
    country: "USA"
};

let mergedObject = {...person, ...address};
console.log(mergedObject);
