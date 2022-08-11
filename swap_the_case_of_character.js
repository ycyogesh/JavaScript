var c = 'The Quick Brown Fox'
let a;
console.log(c);
c = c.split("")
var d
d = c.forEach((a, i) => {
    if (a >= 'a' && a <= 'z') {
        c[i] = a.toUpperCase();
    } else if (a >= 'A' && a <= 'Z') {
        c[i] = a.toLowerCase();
    }else{
        return c[i] = c[i]
    }
    return c
});
console.log(c.toString().replace(/,/g,""));