let books_library = [
    {
        name:'Пікнік на узбіччі',
        authors: ['Аркадій Стругацький','Борис Стругацький'],
        pages:220,
        genres:['фантастика','роман']
    },
    {
        name:'Воно',
        authors: ['Стівен кінг'],
        pages:1000,
        genres:['фантастика','жахи','фентезі']
    }
    ,
    {
        name:'Тріумфальна арка',
        authors: ['Еріх Марія Ремарк'],
        pages:300,
        genres: ['воєнна література','роман','драма']
    },
    {
        name:'Бот ',
        authors: ['Макс Кідрук '],
        pages:450,
        genres: ['наукова фантастика']
    },
    {
        name:'Добрі передвісники',
        authors: ['Ніл Гейман','Террі Пратчетт'],
        pages:470,
        genres: ['гумористичне фентезі']
    }

]


let max = books_library[0].pages;
let name_biggest_pages = books_library[0].name;
for (let i = 1; i < books_library.length; i++) {

    if(   books_library[i].pages > max ){
        max = books_library[i].pages;
        name_biggest_pages = books_library[i].name;
    }
}
console.log(name_biggest_pages + ' ---Найбільше сторінок')

let biggest_enum_genre = books_library[0].genres.length;
let name_biggest_genres = books_library[0].name;
for (let i = 1; i < books_library.length; i++) {
    if(biggest_enum_genre <= books_library[i].genres.length){
        biggest_enum_genre = books_library[i].genres.length;
        name_biggest_genres = books_library[i].name;
    }
    console.log(name_biggest_genres + ' ---найбільше жанрів ')
}

let biggest_name = books_library[0].name.length;
for (let i = 1; i < books_library.length ; i++) {
    if(biggest_name <= books_library[i].name.length){
        biggest_name =  books_library[i].name.length
        console.log(books_library[i].name + '---Найдовша назва')
    }
}
for (let i = 0; i < books_library.length; i++) {
    if(books_library[i].authors.length === 2 ){
        console.log( books_library[i].name + ' ---Цю книгу написали два автори')
    }
}
for (let i = 0; i < books_library.length; i++) {
    if(books_library[i].authors.length === 1 ){
        console.log( books_library[i].name + ' ---Цю книгу написав один автор ')
    }
}

