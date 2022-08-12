value = [{'first': 'Elie', 'last':"Schoppik"}, {'first': 'Tim', 'last':"Garcia", isCatOwner:
true}, {'first': 'Matt', 'last':"Lane"}, {'first': 'Colt', 'last':"Steele", isCatOwner: true}]

var v,s,b;
/*
value.forEach(filterByValue);
console.log(value);


function filterByValue(v,i,a){
    return v['isCatOwner'] = true
}
*/
filterByValue(value,'isCatOwner')
console.log(b)



function filterByValue(v,s){
    b = v.filter(e=>e.hasOwnProperty([s]))
    return b;
}