var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
var a,minj,v,e;
var arr2 = []
arr1.forEach((e,i) =>{
    let min = e
    minj = i
    arr1.forEach((v,j) =>{
    if(v<min){
        min = arr1[i]
        minj = j
    }})
    let t = arr1[i]
    arr1[i] = min
    arr1[minj] = t
    })
console.log(arr2);