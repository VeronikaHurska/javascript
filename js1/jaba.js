// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello', a2 = 'owu', a3 = 'com', a4 = 'ua';
let b = 1, b1 = 10, b2 = -999, b3 = 123, b4 = 3.14, b5 = 2.7, b6 = 16;
let c = true, c2 = false;
console.log(a, a2, a3, a4, b, b1, b2, b3, b4, b5, b6, c, c2);
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Вероніка'
let middleName = 'Андріївна'
let lastName = 'Гурська'
let person = firstName + ' ' + middleName + ' ' + lastName;
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);

console.log(typeof b);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let firstName2 = prompt("First name")
let middleName2 = prompt("Middle name")
let age = prompt("Age")
console.log(firstName2,middleName2,age);
