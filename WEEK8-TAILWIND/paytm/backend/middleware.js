const JWTpass = require("./config")
const jwt = require("jsonwebtoken")

function authMiddleware (req,res,next){
    const HeadAuth = req.headers.authorization

    if(!HeadAuth || !HeadAuth.startsWith('Bearer')){
        res.status(403).json({"msg" : "auth error"})
    }

    const token = HeadAuth.split(' ')[1];

    try{
        const decode = jwt.verify(token, JWTpass);
        if(decode.id){
            id1 = decode.id
        }
        next()
    } catch(err){
        return res.status(403).json({"msg" : "error2"})
    }
};

module.exports = authMiddleware