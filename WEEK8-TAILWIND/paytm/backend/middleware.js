const {JWTpass} = require("./config")
const jwt = require("jsonwebtoken")

function authMiddleware (req,res,next){
    const HeadAuth = req.headers.authorization

    if(!HeadAuth || !HeadAuth.startsWith('Bearer')){
        res.status(403).json({})
    }

    const token = HeadAuth.split(' ')[1];

    try{
        const decode = jwt.verify(token, JWTpass);
        if(decode.id){
            req.userId = decode.id
        }
        next()
    } catch(err){
        return res.status(403).json({})
    }
};

module.exports = authMiddleware