var a,e,v,j;

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
        let min = e.libraryID
        let minj = i
        a.forEach((v,j)=>{
            if(min>v.libraryID && i<j){
                min = v.libraryID
                minj = j
            }
        })
        t = a[i]
        a[i] = a[minj]
        a[minj] = t
    
    })
    console.log(a);
}
