let userMessage = "Name";

console.log(typeof "Hello world!");
console.log(userMessage);

function greet(userName, message) {
  console.log("Hello world!");

  console.log(userMessage);
  console.log(message);
}

greet("Max", "Hello world!");

const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello world!");
    console.log(this.name);
  },
};

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello");
  }
}

const hobbies = ["Sports", "Coking", "Reading"];

console.log(hobbies[0]);

hobbies.push("hobbies");

hobbies.findIndex((item) => {
  return item === "Sports";
});

const point = hobbies.map((item) => item + ".");
console.log(point);
