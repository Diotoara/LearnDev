// create an http server
// express

const express = require("express")

const app = express()       //launches exppress

function sum(x){
    let ans =0;
    for(let i=1;i<=x;i++){
        ans = ans+i;
    }
    return ans;
}

app.get("/", function(req,res) {            // '/' gives the route, where to. here it is just '/' hence shows on main page
    const a = req.query.a               // to take input--  in the web, in url 'localhost:3000' add '?a=20' after '3000/' to give input. 
                                            // for multiple input use : 'localhost:3000?a=20&b=30&c=10'
    const ans = sum(a);                         //takes the input n, gives it function, output stored in 'ans'. 
    res.send("wassup wassup gng. your answer is : " + ans);              //sends output to server
})

app.listen(3000);           //gives location to site for this


    