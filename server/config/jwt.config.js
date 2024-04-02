const jwt = require('jsonwebtoken');

module.exports.authenticate = function(req, res, next){
    try{
        
        // console.log(req.cookies.usertoken);
        console.log('Token:', req.cookies.usertoken); 
        const decode=jwt.verify(req.cookies.usertoken, "abcdef");
        console.log("0000");
        // console.log('Decoded:', decode);
        req.userId = decode.id;
        // console.log("decode id",decode.id)
        // console.log("useid",req.userId);
        // console.log()
        next();
    }catch(e){
        console.log('52')
        console.log("Unauthorized");
        // console.log("Unauthorized");
        res.status(401).json({message: "Unauthorized"});
    }
}