let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


let print = (arr) => {
    for (const user of arr) {
        for (const userKey in user) {
            if (typeof (user[userKey]) !== 'object') {
                let div = document.createElement('div');
                div.innerText = `${userKey} -- ${user[userKey]}`
                document.body.append(div);
            } else {
                for (const address in user[userKey]) {
                    let div = document.createElement('div');
                    div.innerText = `${address} -- ${user[userKey][address]}`
                    document.body.append(div);
                }
            }
        }
        document.write('---------------------------')
    }
}
print(usersWithAddress);
let form = document.getElementsByName("form1");
let byStatus = document.getElementsByName('byStatus');
let byAge = document.getElementsByName('byAge');
let byCity = document.getElementsByName('byCity');


form[0].addEventListener('change', () => {
    let array = usersWithAddress;
    if (byStatus[0].checked) {
        array = array.filter(value => value.status === false)
        print(array);
    }
    if (byAge[0].checked) {
        array = array.filter(value => value.age >= 29);
        print(array);
    }
    if(byCity[0].checked){
        array = array.filter(value => value.address.city === 'Kyiv')
        print(array);
    }
})
// falseCheckbox.addEventListener('change', function (e) {
//     e.preventDefault();
//     if (falseCheckbox.checked) {
//         let statusFilter = usersWithAddress.filter(value => value.status === false)
//     } else {
//
//     }
// })
