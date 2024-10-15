import { Transport } from './lab2';
//задание 1
// Создание объектов
const owner = new Transport.OwnerImpl(
    "Ivanov",
    "Ivan",
    "Ivanovich",
    new Date(1980, 5, 15),
    Transport.DocType.Passport,
    "AB",
    "123456"
);

// Использование геттера для получения фамилии владельца
// console.log(`Фамилия владельца: ${owner.lastName}`);

// Использование сеттера для изменения фамилии владельца
// owner.lastName = "Petrov";

// Повторное использование геттера, чтобы убедиться, что фамилия изменена
// console.log(`Обновленная фамилия владельца: ${owner.lastName}`);

const vehicle = new Transport.VehicleImpl(
    "Toyota",
    "Camry",
    2020,
    "1HGCM82633A123456",
    "A123BC77",
    owner
);

// Вывод информации о созданных объектах
owner.displayOwnerInfo();
vehicle.displayVehicleInfo();

//задание 2

// Пример создания объектов Car и Motorbike
const car = new Transport.CarImpl(
    "BMW",
    "X5",
    2022,
    "WBADE6323VBW12345",
    "B456CD77",
    owner,
    Transport.BodyType.SUV,
    Transport.CarClass.Luxury
);

const motorbike = new Transport.MotorbikeImpl(
    "Yamaha",
    "YZF-R1",
    2023,
    "JYARN23E3TA011234",
    "M789EF77",
    owner,
    "Sport Frame",
    true
);

// Вывод информации о созданных объектах
car.displayVehicleInfo();
motorbike.displayVehicleInfo();

//задание 3

// Пример использования VehicleStorageImpl с объектами типа Car и Motorbike
const carStorage = new Transport.VehicleStorageImpl<Transport.Car>(new Date());
const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.Motorbike>(new Date());

// Создание объектов Car и Motorbike
const car1 = new Transport.CarImpl(
    "Mercedes-Benz",
    "C-Class",
    2021,
    "WDBRF52H77F123456",
    "C123DE77",
    owner,
    Transport.BodyType.Sedan,
    Transport.CarClass.Luxury
);

const motorbike1 = new Transport.MotorbikeImpl(
    "Honda",
    "CBR600RR",
    2022,
    "JH2PC3704MM101234",
    "M123GH77",
    owner,
    "Sport Frame",
    true
);

// Добавление транспортных средств в хранилища
carStorage.addVehicle(car1);
motorbikeStorage.addVehicle(motorbike1);

// Вывод всех транспортных средств из хранилища
console.log("Car Storage Vehicles:", carStorage.getAllVehicles());
console.log("Motorbike Storage Vehicles:", motorbikeStorage.getAllVehicles());
