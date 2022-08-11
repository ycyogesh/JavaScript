a = [1,13,2,5]

/*
for(i in a){
    console.log(i)
}
for(i of a){
    console.log(i)
}
*/
var sum = 0
a.forEach(myfunction)

function myfunction(v,i,a){
    console.log(v);
    sum = sum + v
}
console.log(sum);