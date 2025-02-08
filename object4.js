let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

if ("age" in person) {
    console.log("Age property exists");
} else {
    console.log("Age property does not exist");
}
