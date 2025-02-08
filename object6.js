let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    printProperties: function() {
        for (let key in this) {
            if (typeof this[key] !== "function") { // Avoid printing the function itself
                console.log(key + ": " + this[key]);
            }
        }
    }
};

person.printProperties();
