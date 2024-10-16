"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    // Перечисление для типа документа
    var DocType;
    (function (DocType) {
        DocType["Passport"] = "Passport";
        DocType["DriverLicense"] = "DriverLicense";
        DocType["IDCard"] = "IDCard";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    // Класс, реализующий интерфейс Owner
    var OwnerImpl = /** @class */ (function () {
        function OwnerImpl(lastName, firstName, middleName, dateOfBirth, documentType, documentSeries, documentNumber) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._dateOfBirth = dateOfBirth;
            this._documentType = documentType;
            this._documentSeries = documentSeries;
            this._documentNumber = documentNumber;
        }
        Object.defineProperty(OwnerImpl.prototype, "lastName", {
            // Геттеры и Сеттеры
            get: function () {
                return this._lastName;
            },
            set: function (value) {
                this._lastName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                this._firstName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "middleName", {
            get: function () {
                return this._middleName;
            },
            set: function (value) {
                this._middleName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "dateOfBirth", {
            get: function () {
                return this._dateOfBirth;
            },
            set: function (value) {
                this._dateOfBirth = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentType", {
            get: function () {
                return this._documentType;
            },
            set: function (value) {
                this._documentType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentSeries", {
            get: function () {
                return this._documentSeries;
            },
            set: function (value) {
                this._documentSeries = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OwnerImpl.prototype, "documentNumber", {
            get: function () {
                return this._documentNumber;
            },
            set: function (value) {
                this._documentNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        OwnerImpl.prototype.displayOwnerInfo = function () {
            console.log("Owner Information:\n            Last Name: ".concat(this._lastName, "\n            First Name: ").concat(this._firstName, "\n            Middle Name: ").concat(this._middleName, "\n            Date of Birth: ").concat(this._dateOfBirth.toDateString(), "\n            Document Type: ").concat(this._documentType, "\n            Document Series: ").concat(this._documentSeries, "\n            Document Number: ").concat(this._documentNumber));
        };
        return OwnerImpl;
    }());
    Transport.OwnerImpl = OwnerImpl;
    // Класс, реализующий интерфейс Vehicle
    var VehicleImpl = /** @class */ (function () {
        function VehicleImpl(brand, model, year, vin, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        Object.defineProperty(VehicleImpl.prototype, "brand", {
            // Геттеры и Сеттеры
            get: function () {
                return this._brand;
            },
            set: function (value) {
                this._brand = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (value) {
                this._vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleImpl.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        VehicleImpl.prototype.displayVehicleInfo = function () {
            console.log("Vehicle Information:\n            Brand: ".concat(this._brand, "\n            Model: ").concat(this._model, "\n            Year: ").concat(this._year, "\n            VIN: ").concat(this._vin, "\n            Registration Number: ").concat(this._registrationNumber));
        };
        return VehicleImpl;
    }());
    Transport.VehicleImpl = VehicleImpl;
    // ЗАДАНИЕ 2
    // Перечисление для типа кузова автомобиля
    var BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "Sedan";
        BodyType["SUV"] = "SUV";
        BodyType["Hatchback"] = "Hatchback";
        BodyType["Coupe"] = "Coupe";
        BodyType["Convertible"] = "Convertible";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    // Перечисление для класса автомобиля
    var CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "Economy";
        CarClass["Compact"] = "Compact";
        CarClass["Midsize"] = "Midsize";
        CarClass["FullSize"] = "FullSize";
        CarClass["Luxury"] = "Luxury";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    // Класс, реализующий интерфейс Car
    var CarImpl = /** @class */ (function () {
        function CarImpl(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        Object.defineProperty(CarImpl.prototype, "brand", {
            // Геттеры и Сеттеры
            get: function () {
                return this._brand;
            },
            set: function (value) {
                this._brand = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (value) {
                this._vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "bodyType", {
            get: function () {
                return this._bodyType;
            },
            set: function (value) {
                this._bodyType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarImpl.prototype, "carClass", {
            get: function () {
                return this._carClass;
            },
            set: function (value) {
                this._carClass = value;
            },
            enumerable: false,
            configurable: true
        });
        CarImpl.prototype.displayVehicleInfo = function () {
            console.log("Car Information:\n            Brand: ".concat(this._brand, "\n            Model: ").concat(this._model, "\n            Year: ").concat(this._year, "\n            VIN: ").concat(this._vin, "\n            Registration Number: ").concat(this._registrationNumber, "\n            Body Type: ").concat(this._bodyType, "\n            Car Class: ").concat(this._carClass));
        };
        return CarImpl;
    }());
    Transport.CarImpl = CarImpl;
    // Класс, реализующий интерфейс Motorbike
    var MotorbikeImpl = /** @class */ (function () {
        function MotorbikeImpl(brand, model, year, vin, registrationNumber, owner, frameType, isForSport) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isForSport = isForSport;
        }
        Object.defineProperty(MotorbikeImpl.prototype, "brand", {
            // Геттеры и Сеттеры
            get: function () {
                return this._brand;
            },
            set: function (value) {
                this._brand = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (value) {
                this._vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "frameType", {
            get: function () {
                return this._frameType;
            },
            set: function (value) {
                this._frameType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MotorbikeImpl.prototype, "isForSport", {
            get: function () {
                return this._isForSport;
            },
            set: function (value) {
                this._isForSport = value;
            },
            enumerable: false,
            configurable: true
        });
        MotorbikeImpl.prototype.displayVehicleInfo = function () {
            console.log("Motorbike Information:\n            Brand: ".concat(this._brand, "\n            Model: ").concat(this._model, "\n            Year: ").concat(this._year, "\n            VIN: ").concat(this._vin, "\n            Registration Number: ").concat(this._registrationNumber, "\n            Frame Type: ").concat(this._frameType, "\n            Is For Sport: ").concat(this._isForSport));
        };
        return MotorbikeImpl;
    }());
    Transport.MotorbikeImpl = MotorbikeImpl;
    // Класс, реализующий интерфейс VehicleStorage с обобщением типа T
    var VehicleStorageImpl = /** @class */ (function () {
        function VehicleStorageImpl(creationDate) {
            this._creationDate = creationDate;
            this._vehicles = [];
        }
        Object.defineProperty(VehicleStorageImpl.prototype, "creationDate", {
            // Геттеры и Сеттеры
            get: function () {
                return this._creationDate;
            },
            set: function (value) {
                this._creationDate = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(VehicleStorageImpl.prototype, "vehicles", {
            get: function () {
                return this._vehicles;
            },
            set: function (value) {
                this._vehicles = value;
            },
            enumerable: false,
            configurable: true
        });
        // Метод, возвращающий все элементы массива типа T
        VehicleStorageImpl.prototype.getAllVehicles = function () {
            return this._vehicles;
        };
        // Метод для добавления транспортного средства в хранилище
        VehicleStorageImpl.prototype.addVehicle = function (vehicle) {
            this._vehicles.push(vehicle);
        };
        return VehicleStorageImpl;
    }());
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
