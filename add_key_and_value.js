names = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var v;
names.forEach(addKeyandValue);
console.log(names);


function addKeyandValue(v,i,a){
    return v['title'] = 'instructor'
}