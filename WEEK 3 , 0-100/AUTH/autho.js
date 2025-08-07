// a list of in memory users. create a signin option. if user gets signed in show them the array of users with just their name.

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtPassword = "1234567";

const ALL_USERS = [
    {
        username : "ananway@rap.com",
        password : "thatshi",
        name : "moksha",
    },
    {
        username : "naruto@konoha.com",
        password : "kakashi",
        name : "Uzumaki",
    },
    {
        username : "gintoki@sakata.com",
        password : "zura",
        name : "Gintama",
    }
]


app.use(express.json())

function check(user,pass){
    for(let i=0;i<ALL_USERS.length;i++){
        if(user == ALL_USERS[i].username && pass == ALL_USERS[i].password){
            return true;
        }
    }
    return false;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!(check(username,password))){
        return res.status(403).send({
            msg:"you have entered the wrong username or password!",
        });
    }

    res.send({
        msg:"you have logged in successfully!"
    })

})

app.listen(3000)