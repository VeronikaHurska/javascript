// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let div = document.createElement('div');
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
// div.style.backgroundColor = 'orange';
// div.style.color = 'white';
// div.style.fontSize = '25px';
// div.innerText = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum labore modi nisi possimus suscipit vitae. Ad maxime soluta totam vitae?'
// document.body.appendChild(div);
//
//
// let clone = div.cloneNode(true);
// document.body.appendChild(clone)
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let divCourse = document.createElement('div');
//     let title = document.createElement('h1')
//     title.innerText = element.title;
//     let duration = document.createElement('h2');
//     duration.innerText = element.monthDuration;
//     divCourse.append(title, duration);
//     document.body.appendChild(divCourse);
// }


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title// елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     document.body.appendChild(div)
//     div.classList.add('item');
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText = course.title
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerText = course.monthDuration
//     div.append(h1,p)
// }
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let button= document.createElement('button');
// button.innerText = 'click';
// document.body.appendChild(button);
// let del = document.getElementById("text");
// button.onclick = function (){
//     del.style.display = 'none';
// }
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік
// чи меньше він ніж 18, та повідомити про це користувача

let button = document.createElement('button');
button.innerText = 'click';
let input = document.createElement('input');
document.body.append(button, input)

button.onclick = function () {
    input.oninput;
    if (input.value < 18) {
        alert('!!!!')
    }else if (input.value >= 18){
        alert('yes')
    }
}