// Задание 1
function findMinPositiveNumber(arr) {
    const positives = arr.filter(num => num > 0);
    return positives.length > 0 ? Math.min(...positives) : null;
}
// Пример использования
const array1 = [-5, 3, 0, 7, -2, 1];
console.log(findMinPositiveNumber(array1)); // Вывод: 1
// Задание 2
function createBooleanMatrix(matrix) {
    return matrix.map(row => row.map(element => element.length % 2 !== 0));
}
// Пример использования
const stringMatrix = [
    ["dark", "world"],
    ["python", "yes"],
    ["fun", "blue"]
];
console.log(createBooleanMatrix(stringMatrix));
function hasEqualDigitSum(tuple) {
    const sumOfDigits = (num) => num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return sumOfDigits(tuple[0]) === sumOfDigits(tuple[1]);
}
// Пример использования
const tuple = [123, 321];
console.log(hasEqualDigitSum(tuple)); // Вывод: true
// Задание 4
var RnaBases;
(function (RnaBases) {
    RnaBases["Adenine"] = "Adenine";
    RnaBases["Guanine"] = "Guanine";
    RnaBases["Cytosine"] = "Cytosine";
    RnaBases["Uracil"] = "Uracil";
})(RnaBases || (RnaBases = {}));
// Пример использования
console.log(RnaBases.Adenine); // Вывод: "Adenine"
// Задание 5
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}
// Пример использования
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog); // Вывод: Name: Some pet, Age: 8, Speak: Yaw-Gaw!
printPetInfo(cat); // Вывод: Name: Barsik, Age: 2, Speak: Miyau!
const molecule = {
    base: RnaBases.Guanine,
    name: "Guanine",
    atomicNumber: 5,
    isPurine: true
};
console.log(JSON.stringify(molecule, null, 2));
// Вывод:
// {
//   "base": "Guanine",
//   "name": "Guanine",
//   "atomicNumber": 5,
//   "isPurine": true
// }
