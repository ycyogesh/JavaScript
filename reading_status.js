var library = [
    {
    'author': 'Bill Gates',
    'title': 'The Road Ahead',
    'readingStatus': true
    },
    {
    'author': 'Steve Jobs',
    'title': 'Walter Isaacson',
    'readingStatus': true
    },
    {
    'author': 'Suzanne Collins',
    'title': 'Mockingjay: The Final Book of The Hunger Games',
    'readingStatus': false}];
var e;
/*
library.forEach(e =>{
    if(e.readingStatus=='true')
    console.log(e);
})
*/

let a = library.filter(e=>{
    return e.readingStatus==true
})
console.log(a);