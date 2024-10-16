export declare namespace Transport {
    enum DocType {
        Passport = "Passport",
        DriverLicense = "DriverLicense",
        IDCard = "IDCard"
    }
    interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        dateOfBirth: Date;
        documentType: DocType;
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
    class OwnerImpl implements Owner {
        private _lastName;
        private _firstName;
        private _middleName;
        private _dateOfBirth;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(lastName: string, firstName: string, middleName: string, dateOfBirth: Date, documentType: DocType, documentSeries: string, documentNumber: string);
        get lastName(): string;
        set lastName(value: string);
        get firstName(): string;
        set firstName(value: string);
        get middleName(): string;
        set middleName(value: string);
        get dateOfBirth(): Date;
        set dateOfBirth(value: Date);
        get documentType(): DocType;
        set documentType(value: DocType);
        get documentSeries(): string;
        set documentSeries(value: string);
        get documentNumber(): string;
        set documentNumber(value: string);
        displayOwnerInfo(): void;
    }
    class VehicleImpl implements Vehicle {
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
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
        displayVehicleInfo(): void;
    }
    enum BodyType {
        Sedan = "Sedan",
        SUV = "SUV",
        Hatchback = "Hatchback",
        Coupe = "Coupe",
        Convertible = "Convertible"
    }
    enum CarClass {
        Economy = "Economy",
        Compact = "Compact",
        Midsize = "Midsize",
        FullSize = "FullSize",
        Luxury = "Luxury"
    }
    interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
        displayVehicleInfo(): void;
    }
    class CarImpl implements Car {
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
        displayVehicleInfo(): void;
    }
    interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
        displayVehicleInfo(): void;
    }
    class MotorbikeImpl implements Motorbike {
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        private _frameType;
        private _isForSport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isForSport: boolean);
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
        get frameType(): string;
        set frameType(value: string);
        get isForSport(): boolean;
        set isForSport(value: boolean);
        displayVehicleInfo(): void;
    }
    interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }
    class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _creationDate;
        private _vehicles;
        constructor(creationDate: Date);
        get creationDate(): Date;
        set creationDate(value: Date);
        get vehicles(): T[];
        set vehicles(value: T[]);
        getAllVehicles(): T[];
        addVehicle(vehicle: T): void;
    }
}
