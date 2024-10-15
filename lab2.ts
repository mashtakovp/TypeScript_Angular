export namespace Transport{

    // Перечисление для типа документа
    export enum DocType {
        Passport = "Passport",
        DriverLicense = "DriverLicense",
        IDCard = "IDCard",
    }

    // Интерфейс для владельца
    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        dateOfBirth: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        displayOwnerInfo(): void;
    }

    // Интерфейс для транспортного средства
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        displayVehicleInfo(): void;
    }

    // Класс, реализующий интерфейс Owner
    export class OwnerImpl implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _dateOfBirth: Date;
        private _documentType: DocType;
        private _documentSeries: string;
        private _documentNumber: string;

        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            dateOfBirth: Date,
            documentType: DocType,
            documentSeries: string,
            documentNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._dateOfBirth = dateOfBirth;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }

        // Геттеры и Сеттеры
        get lastName(): string {
            return this._lastName;
        }

        set lastName(value: string) {
            this._lastName = value;
        }

        get firstName(): string {
            return this._firstName;
        }

        set firstName(value: string) {
            this._firstName = value;
        }

        get middleName(): string {
            return this._middleName;
        }

        set middleName(value: string) {
            this._middleName = value;
        }

        get dateOfBirth(): Date {
            return this._dateOfBirth;
        }

        set dateOfBirth(value: Date) {
            this._dateOfBirth = value;
        }

        get documentType(): DocType {
            return this._documentType;
        }

        set documentType(value: DocType) {
            this._documentType = value;
        }

        get documentSeries(): string {
            return this._documentSeries;
        }

        set documentSeries(value: string) {
            this._documentSeries = value;
        }

        get documentNumber(): string {
            return this._documentNumber;
        }

        set documentNumber(value: string) {
            this._documentNumber = value;
        }

        displayOwnerInfo(): void {
            console.log(`Owner Information:
            Last Name: ${this._lastName}
            First Name: ${this._firstName}
            Middle Name: ${this._middleName}
            Date of Birth: ${this._dateOfBirth.toDateString()}
            Document Type: ${this._documentType}
            Document Series: ${this._documentSeries}
            Document Number: ${this._documentNumber}`);
        }
    }

    // Класс, реализующий интерфейс Vehicle
    export class VehicleImpl implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }

        // Геттеры и Сеттеры
        get brand(): string {
            return this._brand;
        }

        set brand(value: string) {
            this._brand = value;
        }

        get model(): string {
            return this._model;
        }

        set model(value: string) {
            this._model = value;
        }

        get year(): number {
            return this._year;
        }

        set year(value: number) {
            this._year = value;
        }

        get vin(): string {
            return this._vin;
        }

        set vin(value: string) {
            this._vin = value;
        }

        get registrationNumber(): string {
            return this._registrationNumber;
        }

        set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        get owner(): Owner {
            return this._owner;
        }

        set owner(value: Owner) {
            this._owner = value;
        }

        displayVehicleInfo(): void {
            console.log(`Vehicle Information:
            Brand: ${this._brand}
            Model: ${this._model}
            Year: ${this._year}
            VIN: ${this._vin}
            Registration Number: ${this._registrationNumber}`);
        }
    }
    // ЗАДАНИЕ 2
    // Перечисление для типа кузова автомобиля
    export enum BodyType {
        Sedan = "Sedan",
        SUV = "SUV",
        Hatchback = "Hatchback",
        Coupe = "Coupe",
        Convertible = "Convertible",
    }

    // Перечисление для класса автомобиля
    export enum CarClass {
        Economy = "Economy",
        Compact = "Compact",
        Midsize = "Midsize",
        FullSize = "FullSize",
        Luxury = "Luxury",
    }

    // Интерфейс для автомобиля, наследующий Vehicle
    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
        displayVehicleInfo(): void; // Метод, выводящий информацию об автомобиле
    }

    // Класс, реализующий интерфейс Car
    export class CarImpl implements Car {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _bodyType: BodyType;
        private _carClass: CarClass;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }

        // Геттеры и Сеттеры
        get brand(): string {
            return this._brand;
        }

        set brand(value: string) {
            this._brand = value;
        }

        get model(): string {
            return this._model;
        }

        set model(value: string) {
            this._model = value;
        }

        get year(): number {
            return this._year;
        }

        set year(value: number) {
            this._year = value;
        }

        get vin(): string {
            return this._vin;
        }

        set vin(value: string) {
            this._vin = value;
        }

        get registrationNumber(): string {
            return this._registrationNumber;
        }

        set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        get owner(): Owner {
            return this._owner;
        }

        set owner(value: Owner) {
            this._owner = value;
        }

        get bodyType(): BodyType {
            return this._bodyType;
        }

        set bodyType(value: BodyType) {
            this._bodyType = value;
        }

        get carClass(): CarClass {
            return this._carClass;
        }

        set carClass(value: CarClass) {
            this._carClass = value;
        }

        displayVehicleInfo(): void {
            console.log(`Car Information:
            Brand: ${this._brand}
            Model: ${this._model}
            Year: ${this._year}
            VIN: ${this._vin}
            Registration Number: ${this._registrationNumber}
            Body Type: ${this._bodyType}
            Car Class: ${this._carClass}`);
        }
    }

    // Интерфейс для мотоцикла, наследующий Vehicle
    export interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
        displayVehicleInfo(): void; // Метод, выводящий информацию о мотоцикле
    }

    // Класс, реализующий интерфейс Motorbike
    export class MotorbikeImpl implements Motorbike {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _registrationNumber: string;
        private _owner: Owner;
        private _frameType: string;
        private _isForSport: boolean;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            frameType: string,
            isForSport: boolean
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isForSport = isForSport;
        }

        // Геттеры и Сеттеры
        get brand(): string {
            return this._brand;
        }

        set brand(value: string) {
            this._brand = value;
        }

        get model(): string {
            return this._model;
        }

        set model(value: string) {
            this._model = value;
        }

        get year(): number {
            return this._year;
        }

        set year(value: number) {
            this._year = value;
        }

        get vin(): string {
            return this._vin;
        }

        set vin(value: string) {
            this._vin = value;
        }

        get registrationNumber(): string {
            return this._registrationNumber;
        }

        set registrationNumber(value: string) {
            this._registrationNumber = value;
        }

        get owner(): Owner {
            return this._owner;
        }

        set owner(value: Owner) {
            this._owner = value;
        }

        get frameType(): string {
            return this._frameType;
        }

        set frameType(value: string) {
            this._frameType = value;
        }

        get isForSport(): boolean {
            return this._isForSport;
        }

        set isForSport(value: boolean) {
            this._isForSport = value;
        }

        displayVehicleInfo(): void {
            console.log(`Motorbike Information:
            Brand: ${this._brand}
            Model: ${this._model}
            Year: ${this._year}
            VIN: ${this._vin}
            Registration Number: ${this._registrationNumber}
            Frame Type: ${this._frameType}
            Is For Sport: ${this._isForSport}`);
        }
    }
    // ЗАДАНИЕ 3
    // Интерфейс для хранилища транспортных средств
    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }

    // Класс, реализующий интерфейс VehicleStorage с обобщением типа T
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate: Date;
        private _vehicles: T[];

        constructor(creationDate: Date) {
            this._creationDate = creationDate;
            this._vehicles = [];
        }

        // Геттеры и Сеттеры
        get creationDate(): Date {
            return this._creationDate;
        }

        set creationDate(value: Date) {
            this._creationDate = value;
        }

        get vehicles(): T[] {
            return this._vehicles;
        }

        set vehicles(value: T[]) {
            this._vehicles = value;
        }

        // Метод, возвращающий все элементы массива типа T
        getAllVehicles(): T[] {
            return this._vehicles;
        }

        // Метод для добавления транспортного средства в хранилище
        addVehicle(vehicle: T): void {
            this._vehicles.push(vehicle);
        }
    }
}

