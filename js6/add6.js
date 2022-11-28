// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
function cutStr(str, n) {
    for (let i = 0; i < str.length; i += n) {
        console.log(str.substring(i, i + n));
    }
}

cutStr('наслаждение', 3)
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
function delete_characters(str, length) {
    return (str.substring(0, length));
}

console.log(delete_characters('Каждый охотник желает знать', 8));
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let insert_dash = (str) => {
    return str.toUpperCase().replaceAll(' ', '-');
}
console.log(insert_dash("HTML JavaScript PHP"));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let up = (str) => {
    return str[0].toUpperCase() + str.substring(1, str.length);
}
console.log(up('bebra'));

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randArr() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}

// console.log(randArr());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randArr().sort((a, b) => a - b));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
let array = randArr();
let evenNum = array.filter(value => {
    let newArray = [];
    if (value % 2 === 0 && value !== 0) {
        newArray.push(value)
        return newArray;
    }
})
console.log(evenNum);

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (str[i] === ' ') {
            result += str[i + 1].toUpperCase()
        }
    }
    return result;
}

console.log(capitalize('shiku jjk ijshdfsdhs udhfiueshfise fdsufhhehfisdhuf bydhd ddjjdjd'));
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
function validator(str) {

    if (str.includes('@')) {
        let dog = str.indexOf('@');
        let dot = str.lastIndexOf('.')
        if (dog !== 0 && dot >= dog + 2) {
            return 'valid email'
        } else {
            return ' error';
        }
    } else {
        return 'error';
    }

}

console.log(validator('some.email@gmail.com'));

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let sortArr = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(sortArr);
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, char) => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            counter++;
        }
    }
    return counter;
}
console.log(count('Астрономия это наука о небесных объектах', 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (string, n) => {

    return   string.split(' ').slice(0,n).join(' ');

}
console.log(cutString("Сила тяжести приложена к центру масс тела", 5));