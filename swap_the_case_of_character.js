var c = 'The Quick Brown Fox'
let a;
console.log(c);
c = c.split("")
var d
d = c.forEach((a, i) => {
    if (a >= 'a' && a <= 'z') {
       return c[i] = a.toUpperCase();
    } else if (a >= 'A' && a <= 'Z') {
        return c[i] = a.toLowerCase();
    }else{
        return c[i] = c[i]
    }
});
console.log(c.toString().replace(/,/g,""));