// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 for( let i = 0; i < 10; i++){
     document.write( '<div> lorem </div>')
}
for( let i = 0; i < 10; i++){
    document.write( '<div> lorem </div>'  + i )
}
let b = 0 ;
while( b < 10){
    b++;
    document.write( '<h1> while </h1> ')
}
let c = 0 ;
while( c < 10){
    c++;
    document.write( '<h1> while </h1> ' + c)
}