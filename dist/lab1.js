var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Задание 1
function findMinPositiveNumber(arr) {
    var positives = arr.filter(function (num) { return num > 0; });
    return positives.length > 0 ? Math.min.apply(Math, positives) : null;
}
// Пример использования
var array1 = [-5, 3, 0, 7, -2, 1];
console.log(findMinPositiveNumber(array1)); // Вывод: 1
// Задание 2
function createBooleanMatrix(matrix) {
    return matrix.map(function (row) { return row.map(function (element) { return element.length % 2 !== 0; }); });
}
// Пример использования
var stringMatrix = [
    ["dark", "world"],
    ["python", "yes"],
    ["fun", "blue"]
];
console.log(createBooleanMatrix(stringMatrix));
function hasEqualDigitSum(tuple) {
    var sumOfDigits = function (num) {
        return num.toString().split('').reduce(function (acc, digit) { return acc + parseInt(digit, 10); }, 0);
    }; //
    return sumOfDigits(tuple[0]) === sumOfDigits(tuple[1]);
}
// Пример использования
var tuple = [123, 321];
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
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet'; //свойства
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Speak: ").concat(pet.speak()));
}
// Пример использования
var dog = new Dog(); //объекты классов 
var cat = new Cat();
printPetInfo(dog); // Вывод: Name: Some pet, Age: 8, Speak: Yaw-Gaw!
printPetInfo(cat); // Вывод: Name: Barsik, Age: 2, Speak: Miyau!
var molecule = {
    base: RnaBases.Guanine,
    name: "Guanine",
    atomicNumber: 5,
    isPurine: true //аминопроизводное пурина
};
console.log(JSON.stringify(molecule, null, 2));
// Вывод:
// {
//   "base": "Guanine",
//   "name": "Guanine",
//   "atomicNumber": 5,
//   "isPurine": true
// }
