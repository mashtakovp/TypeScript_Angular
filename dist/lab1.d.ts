declare function findMinPositiveNumber(arr: number[]): number | null;
declare const array1: number[];
declare function createBooleanMatrix(matrix: string[][]): boolean[][];
declare const stringMatrix: string[][];
type NumberTuple = [number, number];
declare function hasEqualDigitSum(tuple: NumberTuple): boolean;
declare const tuple: NumberTuple;
declare enum RnaBases {
    Adenine = "Adenine",
    Guanine = "Guanine",
    Cytosine = "Cytosine",
    Uracil = "Uracil"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare const dog: Dog;
declare const cat: Cat;
type RnaMolecule = {
    base: RnaBases;
    name: string;
    atomicNumber: number;
    isPurine: boolean;
};
declare const molecule: RnaMolecule;
