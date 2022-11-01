// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_rectangle(a, b) {
    return console.log(a * b);
}

area_rectangle(5, 6);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_circle(radius_circle) {
    return console.log(3.14 * radius_circle * radius_circle);
}

area_circle(7);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cylinder(height_cylinder, radius_cylinder) {
    return console.log(2 * 3.14 * radius_cylinder * height_cylinder)
}

area_cylinder(12, 4);
// - створити функцію яка приймає масив та виводить кожен його елемент
let num_array = [1, 2, 6, 34, 65, 44, 305]

function array_iter(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
    return array;
}

array_iter(num_array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function create_paragraph(text) {
    document.write(`
        <div>
        <p>${text}</p>
        </div>
    `)
}

create_paragraph('lorem ipsum')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create_list(text_list) {
    document.write(`
        <div> 
            <ul>
                <li>${text_list}</li>
                <li>${text_list}</li>
                <li>${text_list}</li>
            </ul>
        </div>       
    `)
}

create_list('item')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function create_variable_list(text, number) {
    document.write(`
            <ul style="margin: 0"> 
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>      
        `)
    for (let i = 3; i < number; i++) {
        document.write(`
                <ul  style="margin: 0"><li>${text}</li></ul>
        `)
    }
}
create_variable_list('bebra',20);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function array_list(array_primitive){
    for (let i = 0; i < array_primitive.length; i++) {
        document.write(`
                <li>${array_primitive[i]}</li>
        `);
    }
}
array_list([ 1,4, 646,'safsefs',false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
];
function object_block() {
        for( let i = 0 ; i < users.length; i++){
            document.write(`<div style="background-color: orange; margin-bottom: 10px">${users[i].name} ${users[i].age} ${users[i].id}</div>`)
    }
}
object_block();

// - створити функцію яка повертає найменьше число з масиву
let array_min_num = [ 1,0.5,-100,45,223,323,-23213];
function find_minimum(){
    let min = array_min_num[0];
    for (let i = 1; i < array_min_num.length; i++) {
        if( min > array_min_num[i]){
            min = array_min_num[i]
        }
    }
    console.log(min);
}
find_minimum();

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array_sum = [1,2,3,4];
let sum = array_sum[0];
function sum_num_of_array(){
    for (let i = 1; i < array_sum.length; i++) {
         sum = sum + array_sum[i];
    }
    console.log(sum);
}
sum_num_of_array();