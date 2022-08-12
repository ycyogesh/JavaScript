var a,e,v;

var library = [
    {
    'title': 'The Road Ahead',
    'author': 'Bill Gates',
    'libraryID': 1254
    },
    {
    'title': 'Walter Isaacson',
    'author': 'Steve Jobs',
    'libraryID': 4264
    },
    {
    'title': 'Mockingjay: The Final Book of The Hunger Games',
    'author': 'Suzanne Collins',
    'libraryID': 3245
}
];

sort_object(library);


function sort_object(a) {
    a.forEach((e,i)=>{
        if(e.libraryID[i] > e.libraryID[i+1]){
            e[i+1] = e[i]
            
        }console.log(e);
    })
}


