list = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var v;
var b = []
list.forEach(extractKey);
console.log(b);


function extractKey(v,i,a){
    return b[i]=v.name;  
}
