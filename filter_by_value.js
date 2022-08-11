value = [{'first': 'Elie', 'last':"Schoppik"}, {'first': 'Tim', 'last':"Garcia", isCatOwner:
true}, {'first': 'Matt', 'last':"Lane"}, {'first': 'Colt', 'last':"Steele", isCatOwner: true}]

var v;
value.forEach(filterByValue);
console.log(value);


function filterByValue(v,i,a){
    return v['isCatOwner'] = true
}