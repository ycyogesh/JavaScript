students = [ 
    {
    'name' : 'deva',
    'dob' : '16-02-2001',
    'id' : 1,
    'address' : {'no' : '2','street' : 'vilathur','city' : 'tiruvarur','pincode' : 610201}
},{
    'name' : 'stalin',
    'dob' : '15-05-1998',
    'id' : 2,
    'address' : {'no' : '3','street' : 'arandhangi','city' : 'pudukkottai','pincode' : 610202}
},{
    'name' : 'yc',
    'dob' : '20-12-2000',
    'id' : 3,
    'address' : {'no' : '4','street' : 'mk street','city' : 'trichy','pincode' : 620014}
},{
    'name' : 'shamili',
    'dob' : '01-09-2000',
    'id' : 4,
    'address' : {'no' : '5','street' : 'unknown street','city' : 'ariyalur','pincode' : 621804}
},{
    'name' : 'sala',
    'dob' : '05-10-2000',
    'id' : 5,
    'address' : {'no' : '6','street' : 'vvk','city' : 'trichy','pincode' : 620014}
},{
    'name' : 'praveen',
    'dob' : '03-11-2000',
    'id' : 6,
    'address' : {'no' : '7','street' : 'kk puram','city' : 'trichy','pincode' : 620014}
},{
    'name' : 'javee',
    'dob' : '01-09-2000',
    'id' : 7,
    'address' : {'no' : '8','street' : 'periyar street','city' : 'trichy','pincode' : 620022}
},{
    'name' : 'arun',
    'dob' : '23-11-2000',
    'id' : 8,
    'address' : {'no' : '9','street' : 'malaikovil','city' : 'trichy','pincode' : 620015}
},{
    'name' : 'marudhu',
    'dob' : '12-07-2001',
    'id' : 9,
    'address' : {'no' : '10','street' : 'adari','city' : 'veppur','pincode' : 621814}
},{
    'name' : 'ponneelan',
    'dob' : '13-05-2000',
    'id' : 10,
    'address' : {'no' : '11','street' : 'kothamangalam','city' : 'pudukkottai','pincode' : 621856}
}
]

test1 = [
    {
        'name' : 'yogesh','dob' : '20-12-2000','id' : 1,
        'skills' : {'language' : 'python','fend' : 'html', 'bend' : 'nodeJs'},
        'marks' : {'web' : 100,'database' : 100},
        'address' : {'no' : '4','street' : 'mk street','city' : 'trichy','pincode' : 620014}
    },
    {
        'name' : 'stalin','dob' : '15-05-1998','id' : 2,
        'skills' : {'language' : 'java','fend' : 'css', 'bend' : 'nodeJs'},
        'marks' : {'web' : 98,'database' : 99},
        'address' : {'no' : '3','street' : 'arandhangi','city' : 'pudukkottai','pincode' : 610202}
    },
    {
        'name' : 'suryapriya','dob' : '17-06-2001','id' : 3,
        'skills' : {'language' : 'c','fend' : 'css', 'bend' : 'nodeJs'},
        'marks' : {'web' : 101,'database' : 101},
        'address' : {'no' : '4','street' : 'kakuppam','city' : 'villupuram','pincode' : 605103}
    }
]

/*
let amount = 10000
for (let i = 0;i<students.length;i++){
    amount = parseInt(amount * 1.2)
    students[i]['amount'] = amount 
}
*/

let b = 'deva'
/*
for(let i = 0;i<students.length;i++){
    var flag = false
    if(students[i].name==b){
        flag = true
        break
    }
}
if(flag){
    console.log('Found');
}else{
    console.log('Not Found');
}
console.log(students[1].name,students[1].dob);
*/

// 1. Suryapriya's Skills
let c = 'suryapriya'

for(let i = 0;i<test1.length;i++){
    if(b==test1[i].name){
        //console.log(test1[i].skills);
        break
    }
}


// 2. Change Stalin's Address
let d = 'stalin'

for(let i = 0;i<test1.length;i++){
    if(d==test1[i].name){
        test1[i].address.no = "5"
        test1[i].address.street = "vandaloor"
        test1[i].address.city = "Pudukkottai"
        test1[i].address.pincode = 600423
        //console.log(test1[i].address);
        break
    }
}


// 3. Total of Yogesh's Marks
let e = 'yogesh'

for(let i = 0;i<test1.length;i++){
    if(e==test1[i].name){
        let sum = test1[i].marks.web + test1[i].marks.database  //object.keys(test1[i],'marks')
        //console.log("Sum is",sum)
        break
    }
}
var sum1 = 0
var sum2 = 0
for(let i = 0;i<test1.length;i++){
    if(e==test1[i].name){
        sum1 = Object.keys(test1[i].marks)
        //sum2 = sum1 + test1[i].marks.sum1[i]
    }
}
for(let i = 0;i<sum1.length;i++){
    sum2 = sum2 + test1[i].marks.sum1[i]
}
console.log(sum2);




// 4. Add Another Object for Sooriya Balaji

test1.push({
    'name' : 'soriyabalaji','dob' :'20-02-1997','id' : 11,'skills' : {'language' : 'c','fend' : 'html','bend' : 'express'},'marks' :{'database' : '65','database' : '65'},'address' : {'no' : "5",
    'street' : 'arni',
    'city' : 'villupuram',
    'pincode' : 605103}
    
})
//console.log(test1[3])


// 5. Add amount field

let amount = 10000
for(let i = 0;i<test1.length;i++){
    amount = parseInt(amount * 1.2)
    test1[i]['amount'] = amount
}



// 6. Find Largest Amount
let max =0
max = test1[0].amount
for(let i = 0;i<test1.length;i++){
    if(test1[i].amount>max){
        max = test1[i].amount
    }
}//console.log(max)


// 7. Who knows HTML

let f = 'html'

for(let i = 0;i<test1.length;i++){
    if(f==test1[i].skills.fend){
        //console.log(test1[i].name)
    }
}

// 8. Name and City of a Person

for(let i = 0;i<test1.length;i++){
    //console.log(test1[i].name,test1[i].address.city);
}

// 9. List of All Person's Salary

for(let i = 0;i<test1.length;i++){
    //console.log(test1[i].name,test1[i].amount);
}