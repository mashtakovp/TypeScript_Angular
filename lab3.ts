// ЗАДАНИЕ 1
function removeOddNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        const newArr = [...arr]; // создаем копию массива, чтобы не изменять исходный

        function removeNextOddNumber(index: number) {
            if (index >= newArr.length) {
                resolve(newArr);
                return;
            }

            if (newArr[index] % 2 !== 0) {
                console.log(`Удаление нечетного числа: ${newArr[index]}`);
                newArr.splice(index, 1); // удаляем число
                setTimeout(() => {
                    removeNextOddNumber(index); // переходим к следующему числу после задержки
                }, 1000); // задержка 1 секунда
            } else {
                removeNextOddNumber(index + 1); // переходим к следующему числу без задержки
            }
        }

        removeNextOddNumber(0);
    });
}

// Пример использования:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
removeOddNumbers(arr).then((newArr) => {
    console.log('Остались только четные числа:', newArr);
});



// ЗАДАНИЕ 2
function createMessagePrinter(message: string) {
    return function () {
        console.log(`Сообщение: ${message}`);
    };
}

// Пример использования
const helloPrinter = createMessagePrinter('Привет, мир!');
const byePrinter = createMessagePrinter('До свидания!');

// Вызов замкнутых функций
helloPrinter();  // Сообщение: Привет, мир!
byePrinter();    // Сообщение: До свидания!



// ЗАДАНИЕ 3, 4
// Декоратор для блокировки изменения конструктора и его прототипа
const sealed = (constructor: Function) => {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

// Перечисление для типа кузова автомобиля
enum BodyType {
    Sedan = "Sedan",
    SUV = "SUV",
    Hatchback = "Hatchback",
    Coupe = "Coupe",
    Convertible = "Convertible",
}

// Перечисление для класса автомобиля
enum CarClass {
    Economy = "Economy",
    Compact = "Compact",
    Midsize = "Midsize",
    FullSize = "FullSize",
    Luxury = "Luxury",
}

// Интерфейс для владельца
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

// Интерфейс для транспортного средства
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayVehicleInfo(): void;
}

// Интерфейс для автомобиля, наследующий Vehicle
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
    displayVehicleInfo(): void; // Метод, выводящий информацию об автомобиле
}

// Класс, реализующий интерфейс Car и использующий декоратор
@sealed
class CarManual implements Car {
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

    // Геттеры и сеттеры
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

// Проверка работы декоратора
const myCar = new CarManual(
    'Toyota',
    'Corolla',
    2020,
    '1234VIN5678',
    'ABC123',
    {
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
    },
    BodyType.Sedan,
    CarClass.Compact
);

// Попытка добавить новое свойство к прототипу класса
(CarManual.prototype as any).newProperty = 'Это новое свойство';

console.log('Новое свойство: ', (CarManual.prototype as any).newProperty);
