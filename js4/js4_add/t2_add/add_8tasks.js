// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
 let arr = [];
// for( let i = 2; i <=50 ; i+=2){
//     arr[i] = i;
//     console.log(arr[i])
// }
// for( let i = 1; i <=50 ; i+=2){
//     arr[i] = i;
//     console.log(arr[i])
// }
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function arrayInput() {
    for (let i = 0; i < 20; i++) {
         arr.push(getRandomInt(8, 732));
    }
    return arr;
}
console.log(arrayInput());

// 2. Вивести за допомогою console.log кожен третій елемен

// for( let j = 0; j < 20; j+=3 ){
//     if ( arr[j]%2 === 0){
//         console.log(arr[j]);
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// function filter_third_even(){
//     let filter_arr = [];
//     for( let i = 0; i < 20 ; i+=3) {
//         if (arr[i] % 2 === 0) {
//             filter_arr.push(arr[i]);
//         }
//     }
//     return filter_arr;
// }
// console.log(filter_third_even());
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
function neighbour_right_even() {
    let filter_neighbourEven =[];
    for (let i = 0; i < 20; i++) {
        if ((arr[i] % 2 === 0 || arr[i]%2 !== 0 )&& arr[i+1]%2 === 0) {
            filter_neighbourEven.push(arr[i]);
        }
    }
    console.log(filter_neighbourEven);
}
neighbour_right_even();