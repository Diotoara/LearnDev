function ifdone(resot){
    console.log("your driver will be arriving soon",resot)
}

function ifnot(err){
    console.log("there was some error please try later", err)
}

function uber(age){
    return new Promise ((resolve, reject) => {
        if(age>17){
            console.log("finding a driver...")
            resolve("Done!!")
        }
        else{
            console.log("Finding a Driver")
            reject("Network Error")
        }
    })
}

let user = uber(127)
user.then(ifdone)
user.catch(ifnot)