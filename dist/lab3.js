var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ЗАДАНИЕ 1
function removeOddNumbers(arr) {
    return new Promise(function (resolve) {
        var newArr = __spreadArray([], arr, true); // создаем копию массива, чтобы не изменять исходный
        function removeNextOddNumber(index) {
            if (index >= newArr.length) {
                resolve(newArr);
                return;
            }
            if (newArr[index] % 2 !== 0) {
                console.log("\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u0447\u0435\u0442\u043D\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430: ".concat(newArr[index]));
                newArr.splice(index, 1); // удаляем число
                setTimeout(function () {
                    removeNextOddNumber(index); // переходим к следующему числу после задержки
                }, 1000); // задержка 1 секунда
            }
            else {
                removeNextOddNumber(index + 1); // переходим к следующему числу без задержки
            }
        }
        removeNextOddNumber(0);
    });
}
// Пример использования:
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeOddNumbers(arr).then(function (newArr) {
    console.log('Остались только четные числа:', newArr);
});
// ЗАДАНИЕ 2
function createMessagePrinter(message) {
    return function () {
        console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ".concat(message));
    };
}
// Пример использования
var helloPrinter = createMessagePrinter('Привет, мир!');
var byePrinter = createMessagePrinter('До свидания!');
// Вызов замкнутых функций
helloPrinter(); // Сообщение: Привет, мир!
byePrinter(); // Сообщение: До свидания!
// ЗАДАНИЕ 3, 4
// Декоратор для блокировки изменения конструктора и его прототипа
var sealed = function (constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};
// Декоратор метода, который преобразует возвращаемую строку в верхний регистр
function toUpperCase(target, propertyKey, descriptor) {
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }
    var originalMethod = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod === null || originalMethod === void 0 ? void 0 : originalMethod.apply(this, args);
        // Проверяем, является ли результат строкой, и преобразуем в верхний регистр
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
// Перечисление для типа кузова автомобиля
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "Sedan";
    BodyType["SUV"] = "SUV";
    BodyType["Hatchback"] = "Hatchback";
    BodyType["Coupe"] = "Coupe";
    BodyType["Convertible"] = "Convertible";
})(BodyType || (BodyType = {}));
// Перечисление для класса автомобиля
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Economy";
    CarClass["Compact"] = "Compact";
    CarClass["Midsize"] = "Midsize";
    CarClass["FullSize"] = "FullSize";
    CarClass["Luxury"] = "Luxury";
})(CarClass || (CarClass = {}));
// Класс, реализующий интерфейс Car и использующий декоратор
var CarManual = /** @class */ (function () {
    function CarManual(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Object.defineProperty(CarManual.prototype, "brand", {
        // Геттеры и сеттеры
        get: function () {
            return this._brand;
        },
        set: function (value) {
            this._brand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "vin", {
        get: function () {
            return this._vin;
        },
        set: function (value) {
            this._vin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "registrationNumber", {
        get: function () {
            return this._registrationNumber;
        },
        set: function (value) {
            this._registrationNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "bodyType", {
        get: function () {
            return this._bodyType;
        },
        set: function (value) {
            this._bodyType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarManual.prototype, "carClass", {
        get: function () {
            return this._carClass;
        },
        set: function (value) {
            this._carClass = value;
        },
        enumerable: false,
        configurable: true
    });
    CarManual.prototype.displayVehicleInfo = function () {
        var info = "Car Information:\n            Brand: ".concat(this._brand, "\n            Model: ").concat(this._model, "\n            Year: ").concat(this._year, "\n            VIN: ").concat(this._vin, "\n            Registration Number: ").concat(this._registrationNumber, "\n            Body Type: ").concat(this._bodyType, "\n            Car Class: ").concat(this._carClass);
        console.log(info);
        return info;
    };
    __decorate([
        toUpperCase
    ], CarManual.prototype, "displayVehicleInfo", null);
    CarManual = __decorate([
        sealed
    ], CarManual);
    return CarManual;
}());
// Проверка работы декоратора
var myCar = new CarManual('Toyota', 'Corolla', 2020, '1234VIN5678', 'ABC123', {
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'A.',
    dateOfBirth: new Date('1990-01-01'),
    documentType: 'Passport',
    documentSeries: 'AB',
    documentNumber: '123456',
    displayOwnerInfo: function () {
        console.log('Owner Info');
    }
}, BodyType.Sedan, CarClass.Compact);
// Попытка добавить новое свойство к прототипу класса
CarManual.prototype.newProperty = 'Это новое свойство';
console.log('Новое свойство: ', CarManual.prototype.newProperty);
// Вызов метода с декоратором
var carInfo = myCar.displayVehicleInfo();
console.log('Преобразованная информация об автомобиле: ', carInfo);
