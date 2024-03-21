const jwt = require('jsonwebtoken');

module.exports.authenticate = function(req, res, next){
    try{
        console.log("**");
        console.log(req.cookies);
        jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY);
        next();
    }catch(e){
        console.log("Unauthorized");
        res.status(401).json({message: "Unauthorized"});
    }
}