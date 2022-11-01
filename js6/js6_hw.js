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
let stringa  = ' dirty string   '
console.log(stringa.length);//16
console.log(stringa.substring(1, stringa.length - 3).length);//12
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
 stringToArray(str);
function stringToArray(str){
    let str_array =[];
    str_array.push(str.split(' '));
    return console.log(str_array);
}
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let number_array = [10,8,-7,55,987,-1011,0,1050,0];
console.log(number_array.map((value) => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
  let nums = [11,21,3];
  function sortNums(nums,direction){
      let sorted = nums.sort((a, b) => {
          if(direction === 'ascending' ){
              return a - b;
          }else if( direction ==='descending'){
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
        return a.monthDuration > 5 && b.monthDuration > 5 ;
    });
    console.log(sorted_month2)

