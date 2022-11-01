// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone){
    this.id = id;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let array_users = [
    new User(1,'anna','eeeeye','hwuhewug@s622222jdjd',777777777777),
    new User(33,'anna','eeeyyyee','hwuhewu62226g@sjdjd',48329777777777797),
    new User(3334,'anna','eeeyee','hwuhewug@sjdjd',482222797),
    new User(4,'anna','eejyjtyeee','hwu6662222hewug@sjdjd',48329444443797),
    new User(533,'anna','eeeee','hwuhewug@sjdjd',4832982573797),
    new User(63,'anna','eeeeyyyykkkke','hwkkuty6yuhewug@sjdjd',4837777772573797)

]

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(array_users.filter((value, index) => value.id % 2 === 0));;
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(array_users.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)




// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,speed,volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.speed = speed;
    this.volume = volume;


}
Car.prototype.drive = function (){
    console.log(`їдемо зі швидкістю ${this.speed} на годину`)
}
Car.prototype.info = function (){
    console.log(`${this.producer} - ${this.year}`)
}
Car.prototype.increaseMaxSpeed = function (newSpeed){
    return this.speed + newSpeed;
};
Car.prototype.changeYear = function (newValue){
    return this.year = newValue;
}
Car.prototype.addDriver = function (driver) {
    function Driver(age,name){
        this.age = age;
        this.name = name;
    }
}
let car = new Car('toyota','fabric',2000,150,50);
console.log(car.increaseMaxSpeed(50));
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.


class Cinderella{
    cin_array = []

    constructor() {
        for (let i = 0; i < 10; i++) {

        }

    }

    getCinderellaObject(name,age,size) {
        return {
            name: name,
            age: age,
            size: size
        }
}
}
let cin_arr = [
    Cinderella('a1',21,56),
    Cinderella('a2',51,16),
    Cinderella('a3',77,57),
    Cinderella('a4',83,40),
    Cinderella('a5',24,38),
    Cinderella('a6',21,32),
    Cinderella('a7',26,35),
    Cinderella('a8',20,30),
    Cinderella('a9',10,56),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
     constructor(name,age,fSize) {
         this.name = name;
         this.age = age;
         this.fSize = fSize;
     }
}
let prince = new Prince('Alladin',26,35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let element of cin_arr) {
//     if( element.size === prince.fSize){
//         console.log(element.name + prince.name)
//     }else {
//         console.log('no cin for u :(')
//     }
// }
cin_array: any[]  = []
cin_names: any[] = ['Anna','GGG','dhjhdedg']
cin_age: any[] = [21,40,70]
cin_size: any[] = [36,37,38]
constructor() {
    this.setCinderellas();
}

setCinderellas(){
    for (let index = 0; index < 3; index++) {
        this.cin_array.push(this.getCinderellaObject(this.cin_names[index],this.cin_age[index],this.cin_size[index]));
    }
    console.log(this.findCinderella(36));
}

getCinderellaObject(name: string, age: number, size: number) {
    return {
        name: name,
        age: age,
        size: size
    }
}

findCinderella(tufelka: number){
    const cin = this.cin_array.find(cin => cin.size === tufelka);
    return cin;
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку