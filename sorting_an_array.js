var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
let a
var arr2 = []
b = arr1.forEach(e =>{
    if(e>a){
        let t = e
        e = a
        a = t
        // console.log(t);
        arr2+=e
    }else{
        arr2+=e
    }
})
console.log(arr2)