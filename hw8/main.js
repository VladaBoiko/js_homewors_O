// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function User(name, surname, email, phone) {
    this.id = getRandomIntInclusive(0, 100)
}

const userArr = [
    new User("John", "Smith", "john.smith@example.com", "1234567890"),
    new User("Alice", "Johnson", "alice.johnson@example.com", "9876543210"),
    new User("Michael", "Brown", "michael.brown@example.com", "4567890123"),
    new User("Emily", "Davis", "emily.davis@example.com", "3210987654"),
    new User("David", "Taylor", "david.taylor@example.com", "6789012345"),
    new User("Sarah", "Anderson", "sarah.anderson@example.com", "5432109876"),
    new User("Daniel", "Wilson", "daniel.wilson@example.com", "8901234567"),
    new User("Olivia", "Thomas", "olivia.thomas@example.com", "2345678901"),
    new User("James", "Robinson", "james.robinson@example.com", "7890123456"),
    new User("Sophia", "Harris", "sophia.harris@example.com", "0123456789")]

console.log(userArr);

// ==================================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const even = userArr.filter(user => user.id % 2 === 0)
console.log(even);

// ==================================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedArr = userArr.sort((a, b) => a.id - b.id)
console.log(sortedArr);
// ==================================================================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = getRandomIntInclusive(0, 100);
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clientArr = [
    new Client(getRandomIntInclusive(0, 100), "John", "Smith", "john.smith@example.com", "1234567890", ["Item 1", "Item 2", "Item 3"]),
    new Client(getRandomIntInclusive(0, 100), "Alice", "Johnson", "alice.johnson@example.com", "9876543210", ["Item 4", "Item 5"]),
    new Client(getRandomIntInclusive(0, 100), "Michael", "Brown", "michael.brown@example.com", "4567890123", ["Item 6", "Item 7", "Item 8"]),
    new Client(getRandomIntInclusive(0, 100), "Emily", "Davis", "emily.davis@example.com", "3210987654", ["Item 9"]),
    new Client(getRandomIntInclusive(0, 100), "David", "Taylor", "david.taylor@example.com", "6789012345", ["Item 10", "Item 11"]),
    new Client(getRandomIntInclusive(0, 100), "Sarah", "Anderson", "sarah.anderson@example.com", "5432109876", ["Item 12", "Item 13", "Item 14"]),
    new Client(getRandomIntInclusive(0, 100), "Daniel", "Wilson", "daniel.wilson@example.com", "8901234567", ["Item 15", "Item 16"]),
    new Client(getRandomIntInclusive(0, 100), "Olivia", "Thomas", "olivia.thomas@example.com", "2345678901", ["Item 17", "Item 18", "Item 19"]),
    new Client(getRandomIntInclusive(0, 100), "James", "Robinson", "james.robinson@example.com", "7890123456", ["Item 20"]),
    new Client(getRandomIntInclusive(0, 100), "Sophia", "Harris", "sophia.harris@example.com", "0123456789", ["Item 21", "Item 22"])
];
// ==================================================================================================================================
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortedClients = clientArr.sort((a, b) => a.order.length - b.order.length)
console.log(sortedClients);
// ==================================================================================================================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function NewCar(model, madeBy, year, speed, volume) {
    this.id = getRandomIntInclusive(0, 100);
    this.model = model;
    this.madeBy = madeBy;
    this.year = year;
    this.speed = speed;
    this.volume = volume;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log(`
        Full information:
        Identificator: car#${this.id};
        Model: ${this.model};
        Manufacturer: ${this.madeBy};
        Year of production: ${this.year};
        Speed: ${this.speed};
        Engine capacity: ${this.volume};
        `)
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed += newSpeed;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        return this.year = newValue
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver) {
        return this.drive = driver
    }
}

const car = new NewCar('model', 'madeBy', 1996, 666, 222)
console.log(car.increaseMaxSpeed(190));

//
// ==================================================================================================================================
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(id, model, madeBy, year, speed, volume) {
        this.id = getRandomIntInclusive(0, 100);
        this.model = model;
        this.madeBy = madeBy;
        this.year = year;
        this.speed = speed;
        this.volume = volume;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Їдемо зі швидкістю ${this.speed} на годину`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`
        Full information:
        Identificator: car#${this.id};
        Model: ${this.model};
        Manufacturer: ${this.madeBy};
        Year of production: ${this.year};
        Speed: ${this.speed};
        Engine capacity: ${this.volume};
        `)
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        return this.speed += newSpeed;
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        return this.year = newValue
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver) {
        return this.drive = driver
    }
}
const carClass = new Car('model', 'madeBy', 1996, 666, 662)
console.log(carClass.increaseMaxSpeed(666));

// ==================================================================================================================================
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella{
    constructor(name, age, footSize) {
        this.name=name;
        this.age=age;
        this.footSize=footSize;
    }
}
const cinArr = [
    { name: "Johnita", age: getRandomIntInclusive(18, 30), footSize: 35 },
    { name: "Alice", age: getRandomIntInclusive(18, 30), footSize: 37 },
    { name: "Michaella", age: getRandomIntInclusive(18, 30), footSize: 36 },
    { name: "Emily", age: getRandomIntInclusive(18, 30), footSize: 31 },
    { name: "Davida", age: getRandomIntInclusive(18, 30), footSize: 38 },
    { name: "Sarah", age: getRandomIntInclusive(18, 30), footSize: 33 },
    { name: "Daniella", age: getRandomIntInclusive(18, 30), footSize: 32 },
    { name: "Olivia", age: getRandomIntInclusive(18, 30), footSize: 29 },
    { name: "Jamesonia", age: getRandomIntInclusive(18, 30), footSize: 30 },
    { name: "Sophia", age: getRandomIntInclusive(18, 30), footSize: 34 }
];
class Prince{
    constructor(princeName, princeAge, foundedShoes){
        this.name=princeName;
        this.age=princeAge;
        this.foundedShoes=foundedShoes;
    }
   cicleFind(cinderellas, foundedSize) {
       for (const cinderella of cinderellas) {
           if(cinderella.footSize===foundedSize) return cinderella
       }
   }
findSoulmate(cinderellas, foundedSize){
        return cinderellas.find(girl=>girl.footSize===foundedSize)
}
}
let losted=new Prince('Diablo', 30, 38)

console.log(losted.findSoulmate(cinArr, 35));
console.log(losted.cicleFind(cinArr, 38));