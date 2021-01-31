const jwt = require("jsonwebtoken");

const uploadAuth = (req,res,next) => {

    try{

        
        const token = req.header("x-auth-token");

        if(!token){
            res.status(401).json({msg: "Not Logged In, Authorization Denied"});
        }
       

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        

        if(!verified){
            res.status(401).json({msg: "Token Authentication Failed, Authorization Denied"});
        }

        
        // req.user = verified.id;
        next();
        
        
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
};

module.exports = uploadAuth;