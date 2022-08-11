names = [{'first': 'Elie', 'last':"Schoppik"}, {'first': 'Tim', 'last':"Garcia"}, {'first':
    'Matt', 'last':"Lane"}, {'first': 'Colt', 'last':"Steele"}]

    var v;
var b = []
names.forEach(extractFullName);
console.log(b);


function extractFullName(v,i,a){
    return b[i]=v.first +" "+ v.last;  
}
