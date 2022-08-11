var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var temp = [],i = 0
var count = 0,e;
arr1.forEach(v => {
    if(!found1(temp,v)){
    arr1.forEach(b =>{
        if(v==b){
            count++;
        } 
    })
    temp[i++] = v;
    console.log(v,"-",count);
    count = 0;
    
}});


function found1(temp,v){
    let found = false
    temp.forEach(e=>{
        if(v==e){
            found = true;
        }
    });
    return found;
}