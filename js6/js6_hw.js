// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase())
console.log('lorem ipsum'.toUpperCase())
console.log('javascript is cool'.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase())
console.log('LOREM IPSUM'.toLowerCase())
console.log('JAVASCRIPT IS COOL'.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let stringa = ' dirty string   '
console.log(stringa.length);//16
console.log(stringa.trim());//12
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
stringToArray(str);

function stringToArray(str) {
    let str_array = [];
    str_array.push(str.split(' '));
    return console.log(str_array);
}

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let number_array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(number_array.map((value) => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(nums, direction) {
    let sorted = nums.sort((a, b) => {
        if (direction === 'ascending') {
            return a - b;
        } else if (direction === 'descending') {
            return b - a;
        }
    })
    return sorted;
}

//console.log(sortNums(nums, 'ascending'));// [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sorted_month = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(sorted_month)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sorted_month2 = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration > 5 && b.monthDuration > 5;
});
console.log(sorted_month2)
// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];

// cards.forEach( card => (card.value === 'Ace' && card.cardSuit === 'spade') ? (console.log(card) ): (console.log('')));
let findAce = cards.find(card => card.value === 'Ace' && card.cardSuit === 'Spade');
console.log(findAce);


let reducedCards = cards.reduce((accumulator, card) => {
    if (card.value === 6) {
        accumulator.arrSix.push(card)
    }
    if(card.color === "Red"){
        accumulator.redArray.push(card)
    }
    if(card.cardSuit === "Diamonds"){
        accumulator.diamondArray.push(card)
    }
    if ( card.cardSuit === "Clubs" && (card.value > 8 || card.value.length > 2) ){
        accumulator.arrayClubs.push(card)
    }
    return accumulator;

}, { arrSix: [],redArray: [] , diamondArray: [] , arrayClubs: [] });
console.log(reducedCards);
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduced = cards.reduce((accumulator, card ) => {
    if(card.cardSuit ==='Spade'){
        accumulator.spades.push(card);
    }
    if(card.cardSuit ==='Diamonds'){
        accumulator.diamonds.push(card);
    }
    if(card.cardSuit ==='Hearts'){
        accumulator.hearts.push(card);
    }
    if(card.cardSuit ==='Clubs'){
        accumulator.clubs.push(card);
    }

    return accumulator;
},{ spades:[],diamonds:[],hearts:[],clubs:[]})
console.log(reduced);