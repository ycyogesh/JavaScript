names = [{'first': 'Elie', 'last':"Schoppik"}, {'first': 'Tim', 'last':"Garcia"}, {'first':
    'Matt', 'last':"Lane"}, {'first': 'Colt', 'last':"Steele"}]

    var v;
var b,e,i;

function extractFullName(v,i,a){
    b = v.map((e)=>{
        return (e[i] +" "+e[a]);  
})
    return b;
}
    
extractFullName(names,'first','last');
console.log(b);