// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day_week = +prompt("enter day: ");
// switch (day_week) {
//     case  1 :
//             console.log("Monday");
//             break;
//     case  2 :
//         console.log("Tuesday");
//         break;
//     case  3 :
//         console.log("Wednesday");
//         break;
//     case  4 :
//         console.log("Thursday");
//         break;
//     case  5 :
//         console.log("Friday");
//         break;
//     case  6 :
//         console.log("Saturday");
//         break;
//     case  7 :
//         console.log("Sunday");
//         break;
//     default :
//         console.log("Enter day ");
// }
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a = 46;
// let b = 1;
//     if (a > b) {
//         console.log("a > b");
//     }else if(a < b) {
//         console.log("a < b");
//     } else {
//         console.log("a = b");
//     }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    // за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = prompt('Enter value x')
if ( x === false){     // || x === NaN || x === undefined || x === null || x === 0 || x === -0
    x = "default";
    console.log(x)
}else{
    console.log(x)
}

