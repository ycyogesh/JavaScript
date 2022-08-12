value = [ { first: 'Elie', last: 'Schoppik', isCatOwner: false },
  { first: 'Tim', last: 'Garcia', isCatOwner: true },
  { first: 'Matt', last: 'Lane', isCatOwner: true },
  { first: 'Colt', last: 'Steele', isCatOwner: true } ]

var v,i,e,a;
a = findInObj(value,'isCatOwner',true)
console.log(a[0]);




function findInObj(v,i){
 return v.filter(e=>e.isCatOwner==true)
}