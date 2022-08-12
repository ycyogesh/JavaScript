names = [{'first': 'Elie', 'last':"Schoppik"}, {'first': 'Tim', 'last':"Garcia"}, {'first':
    'Matt', 'last':"Lane"}, {'first': 'Colt', 'last':"Steele"}]

    var v;
var b,e,i;

function extractFullName(v){
    b = v.map((e)=>{
        return (e['first'] +" "+e['last']);  
})
    return b;
}
    
extractFullName(names);
console.log(b);