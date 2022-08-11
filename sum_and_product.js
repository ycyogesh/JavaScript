var a = [2,5,8,12,15];

var sum = 0;

var prod = 1;

a.forEach(e=> {
    sum = sum + e
    prod = prod * e
});
console.log("Sum =",sum,"Product =",prod);