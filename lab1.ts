// Задание 1
function findMinPositiveNumber(arr: number[]): number | null {
    const positives = arr.filter(num => num > 0);
    return positives.length > 0 ? Math.min(...positives) : null;
}

// Пример использования
const array1 = [-5, 3, 0, 7, -2, 1];
console.log(findMinPositiveNumber(array1)); // Вывод: 1

// Задание 2
function createBooleanMatrix(matrix: string[][]): boolean[][] {
    return matrix.map(row => row.map(element => element.length % 2 !== 0));
}

// Пример использования
const stringMatrix = [
    ["dark", "world"],
    ["python", "yes"],
    ["fun", "blue"]
];
console.log(createBooleanMatrix(stringMatrix));


// Задание 3
type NumberTuple = [number, number];

function hasEqualDigitSum(tuple: NumberTuple): boolean {
    const sumOfDigits = (num: number): number => 
        num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0); //
    
    return sumOfDigits(tuple[0]) === sumOfDigits(tuple[1]);
}

// Пример использования
const tuple: NumberTuple = [123, 321];
console.log(hasEqualDigitSum(tuple)); // Вывод: true

// Задание 4
enum RnaBases {
    Adenine = "Adenine",
    Guanine = "Guanine",
    Cytosine = "Cytosine",
    Uracil = "Uracil"
}

// Пример использования
console.log(RnaBases.Adenine); // Вывод: "Adenine"

// Задание 5
class Pet {
    name: string = 'Some pet'; //свойства
    age: number = -1;
    speak() { //метод
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {   //наследование
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {  //Обобщённый тип означает, что функция принимает объект типа T, который должен быть подклассом или самим классом Pet
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}

// Пример использования
const dog = new Dog(); //объекты классов 
const cat = new Cat();
printPetInfo(dog); // Вывод: Name: Some pet, Age: 8, Speak: Yaw-Gaw!
printPetInfo(cat); // Вывод: Name: Barsik, Age: 2, Speak: Miyau!

// Задание 6

type RnaMolecule = {
    base: RnaBases;
    name: string;
    atomicNumber: number;
    isPurine: boolean;
};

const molecule: RnaMolecule = {   //объект
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