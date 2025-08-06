function soln2(potato){
    let arr2=[]
    for(let i=0;i<potato.length;i++){
        if(potato[i].age >=18 && potato[i].gender == "male"){
            arr2.push(potato[i].name)
        }
    }
    // console.log(arr2)
    return arr2
}


let arr = [{
    name: "aryan",
    age: 20,
    gender: "male"

},{
    name: "rajat",
    age: 16,
    gender: "male"
},{
    name: "priyanshi",
    age: 19,
    gender: "female"
},{
    name:"aman",
    age:24,
    gender:"male"
},{
    name:"garvit",
    age:19,
    gender:"male"
}]

let x = soln2(arr);
console.log(x);



sumit