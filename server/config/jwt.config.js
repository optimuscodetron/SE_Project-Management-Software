const jwt = require('jsonwebtoken');

module.exports.authenticate = function(req, res, next){
    try{
        const decode=jwt.verify(req.cookies.usertoken, "abcdef");
        // console.log(decode.id)

        {req.adminuserId=decode.id};
        next();
    }catch(e){
        res.status(401).json({message: "Unauthorized"});
    }
}