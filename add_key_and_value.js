names = [{'name': 'Elie'}, {'name': 'Tim'}, {'name': 'Matt'}, {'name': 'Colt'}]

var v;
addKeyAndValue(names)
console.log(names);


function addKeyAndValue(a){
    a.forEach(e=> {
        e['title'] = 'instructor'
    });
}