"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person = {
    name: "nicolas",
    age: 22,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello, ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHi(Person));
//# sourceMappingURL=index.js.map