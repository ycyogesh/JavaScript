
list = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var v,i;
function extractKey(v,i){
    list.forEach(v => {
        console.log(v[i]); v        
    });
}

extractKey(list,'name')
/*
function extractKey(v,i){
    b = list.map(v => {
        return v[i]      
    });
    return b;
}
extractKey(list,'name')
console.log(b); 

*/


/*
extractKey = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var a = extractKey.map(e=>{
    return Object.values(e);
})
console.log(a);
*/