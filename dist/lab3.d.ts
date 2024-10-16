declare function removeOddNumbers(arr: number[]): Promise<number[]>;
declare const arr: number[];
declare function createMessagePrinter(message: string): () => void;
declare const helloPrinter: () => void;
declare const byePrinter: () => void;
declare const sealed: (constructor: Function) => void;
declare function toUpperCase(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<() => string>): TypedPropertyDescriptor<() => string> | void;
declare enum BodyType {
    Sedan = "Sedan",
    SUV = "SUV",
    Hatchback = "Hatchback",
    Coupe = "Coupe",
    Convertible = "Convertible"
}
declare enum CarClass {
    Economy = "Economy",
    Compact = "Compact",
    Midsize = "Midsize",
    FullSize = "FullSize",
    Luxury = "Luxury"
}
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    dateOfBirth: Date;
    documentType: string;
    documentSeries: string;
    documentNumber: string;
    displayOwnerInfo(): void;
}
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayVehicleInfo(): void;
}
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
    displayVehicleInfo(): void;
}
declare class CarManual implements Car {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass);
    get brand(): string;
    set brand(value: string);
    get model(): string;
    set model(value: string);
    get year(): number;
    set year(value: number);
    get vin(): string;
    set vin(value: string);
    get registrationNumber(): string;
    set registrationNumber(value: string);
    get owner(): Owner;
    set owner(value: Owner);
    get bodyType(): BodyType;
    set bodyType(value: BodyType);
    get carClass(): CarClass;
    set carClass(value: CarClass);
    displayVehicleInfo(): string;
}
declare const myCar: CarManual;
declare const carInfo: string;
