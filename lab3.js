var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
var CarManual = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CarManual = _classThis = /** @class */ (function () {
        function CarManual_1(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        Object.defineProperty(CarManual_1.prototype, "brand", {
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
        Object.defineProperty(CarManual_1.prototype, "model", {
            get: function () {
                return this._model;
            },
            set: function (value) {
                this._model = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "year", {
            get: function () {
                return this._year;
            },
            set: function (value) {
                this._year = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "vin", {
            get: function () {
                return this._vin;
            },
            set: function (value) {
                this._vin = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "registrationNumber", {
            get: function () {
                return this._registrationNumber;
            },
            set: function (value) {
                this._registrationNumber = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            set: function (value) {
                this._owner = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "bodyType", {
            get: function () {
                return this._bodyType;
            },
            set: function (value) {
                this._bodyType = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarManual_1.prototype, "carClass", {
            get: function () {
                return this._carClass;
            },
            set: function (value) {
                this._carClass = value;
            },
            enumerable: false,
            configurable: true
        });
        CarManual_1.prototype.displayVehicleInfo = function () {
            console.log("Car Information:\n            Brand: ".concat(this._brand, "\n            Model: ").concat(this._model, "\n            Year: ").concat(this._year, "\n            VIN: ").concat(this._vin, "\n            Registration Number: ").concat(this._registrationNumber, "\n            Body Type: ").concat(this._bodyType, "\n            Car Class: ").concat(this._carClass));
        };
        return CarManual_1;
    }());
    __setFunctionName(_classThis, "CarManual");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CarManual = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CarManual = _classThis;
}();
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
