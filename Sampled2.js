a = [1,13,2,5]

/*
for(i in a){
    console.log(i)
}
for(i of a){
    console.log(i)
}



var sum = 1
a.forEach(myfunction)

function myfunction(v,i,a){
    console.log(v);
    sum = sum * v
    console.log(this);
}
//console.log(sum);




a.forEach(function(v,i,a){
    //console.log(v);
    console.log(this);
})

a.forEach((v)=> console.log(this));
*/



//console.log(a.map(e=>e+1))
//console.log(a.filter(e=>e>2 && e<12))

//let b = a.filter(e=>e>2 && e<12)
//console.log(b);

/*
let b =0 
b = a.map(e => {
    console.log('current elemnt',e,e>2)
    console.log(b);
})
*/

b = a.reduce((a,b)=>{
    console.log(a,b)
    return a+b
})
console.log(b);