var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var count = 0
arr1.forEach(v => {
    arr1.forEach(b =>{
        if(v==b){
            count++
        } 
    })
    console.log(v,count);
    count = 0
});