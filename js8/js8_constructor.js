// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let array_users = [
    new User(1, 'anna', 'eeeeye', 'hwuhewug@s622222jdjd', 777777777777),
    new User(33, 'anna', 'eeeyyyee', 'hwuhewu62226g@sjdjd', 48329777777777797),
    new User(3334, 'anna', 'eeeyee', 'hwuhewug@sjdjd', 482222797),
    new User(4, 'anna', 'eejyjtyeee', 'hwu6662222hewug@sjdjd', 48329444443797),
    new User(533, 'anna', 'eeeee', 'hwuhewug@sjdjd', 4832982573797),
    new User(63, 'anna', 'eeeeyyyykkkke', 'hwkkuty6yuhewug@sjdjd', 4837777772573797)
]

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array_users.filter((value, index) => value.id % 2 === 0));
;
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array_users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client_arr = [
    new Client(1, 'sss', 'ee', 'ydehhdhdhdhdhd@hdhh', 98809809809, ['item1', 'item2']),
    new Client(3223, 'ss32s', 'eвввe', 'ydehhdedeeehh', 555555555, ['item441', 'item2034']),
    new Client(1, 'frtyhyth', 'eowidje0f', 'ydehhdheeeeeeee', 98844444449809, ['item1', 'item2', 23, 89]),
    new Client(1, 'sljlypui,', 'qodkwpwep', 'ydefrefiwow', 33300309809, ['item1', 'item2', 100, 100, 100, 100])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(client_arr.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, speed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.volume = volume;


}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.speed} на годину`)
}
Car.prototype.info = function () {
    console.log(`${this.producer} - ${this.year}`)
}
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.speed + newSpeed;
};
Car.prototype.changeYear = function (newValue) {
    return this.year = newValue;
}
Car.prototype.addDriver = function (driver) {
    function Driver(age, name) {
        this.age = age;
        this.name = name;
    }
}
let car = new Car('toyota', 'fabric', 2000, 150, 50);
console.log(car.increaseMaxSpeed(500));
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//
class Cinderella {

    constructor(name, age, size) {
        this.name = name,
            this.age = age,
            this.size = size
    }
}

//
let cin_arr = [
    new Cinderella('a1', 21, 56),
    new Cinderella('a2', 51, 16),
    new Cinderella('a3', 77, 57),
    new Cinderella('a4', 83, 40),
    new Cinderella('a5', 24, 38),
    new Cinderella('a6', 21, 32),
    new Cinderella('a7', 26, 35),
    new Cinderella('a8', 20, 30),
    new Cinderella('a9', 10, 56),
]

// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, fSize) {
        this.name = name;
        this.age = age;
        this.fSize = fSize;
    }
}

let prince = new Prince('Vova', 26, 16);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < cin_arr.length; i++) {
   if(cin_arr[i].size === prince.fSize ) {
       console.log('yes ' + cin_arr[i].name)
   }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cin_arr.find(value => Cinderella.size === prince.fSize));






// // }
// cin_array: any[]  = []
// cin_names: any[] = ['Anna','GGG','dhjhdedg']
// cin_age: any[] = [21,40,70]
// cin_size: any[] = [36,37,38]
// constructor() {
//     this.setCinderellas();
// }
//
// setCinderellas(){
//     for (let index = 0; index < 3; index++) {
//         this.cin_array.push(this.getCinderellaObject(this.cin_names[index],this.cin_age[index],this.cin_size[index]));
//     }
//     console.log(this.findCinderella(36));
// }
//
// getCinderellaObject(name: string, age: number, size: number) {
//     return {
//         name: name,
//         age: age,
//         size: size
//     }
// }
//
// findCinderella(tufelka: number){
//     const cin = this.cin_array.find(cin => cin.size === tufelka);
//     return cin;
// }