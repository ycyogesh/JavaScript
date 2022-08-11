list = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var a = list.forEach(extractKey);
var v;
console.log(a);


function extractKey(v,i,a){
    return v.name;
}
