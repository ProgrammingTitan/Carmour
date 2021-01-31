const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");


router.post("/register", async (req,res) => {

    try{
        let { email, password, passwordCheck, displayName, phoneNumber } = req.body;
        
        //validation
        if(!email || !password || !passwordCheck || !phoneNumber)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }
        if(password.length < 5)
        {
            return res.status(400).json({msg: "Password must be 5 characters long"});
        }
        if(password !== passwordCheck)
        {
            return res.status(400).json({msg: "Passwords do not match"});
        }
        
        const existingUser = await User.findOne({email: email});

        if(existingUser)
        {
            return res 
                .status(400)
                .json({msg:'An account with this email already exists'});
        }


        if(!displayName)
        {
            displayName = email;
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            email: email,
            password: passwordHash,
            displayName :displayName,
            phoneNumber: phoneNumber
        });

        const savedUser = await newUser.save();
        
        res.json(savedUser);

    } catch (err) {
        res.status(500).json({error: err.message});
    }

    
});


router.post("/login", async (req,res) => {

    try{
        
        let {email, password} = req.body;
        
        if(!email || !password)
            return res.status(400).json({msg: "Not all fields have been entered"});

        const user = await User.findOne({email: email});
        if(!user) {
            return res.status(400).json({msg: "No account with this email has been registered"}); 
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res 
                .status(400)
                .json({msg: "Invalid Credentials"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.json({
            token,
            user:{
                id: user._id,
                displayName: user.displayName
                // email: user.email

            }
        })

    } catch(err){
        res.status(500).json({error: err.nessage})
    }


});



router.delete("/delete", auth, async (req,res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.post("/tokenIsValid", async(req,res) => {
    try{
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        return res.json(true);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});


router.get("/:id", auth, async (req,res) => {
    console.log("looking for " + req.params.id)
    try{
    const user = await User.findById(req.params.id);
    res.json({
        displayName: user.displayName,
        id: user._id,
        phoneNumber: user.phoneNumber,
        email: user.email,
    });
} catch(err){
    res.status(500).json({error: err.nessage})
}
});


router.get("/", auth, async (req,res) => {
    try{
    const user = await User.findById(req.user);
    res.json({
        displayName: user.displayName,
        id: user._id,
        phoneNumber: user.phoneNumber
    });
} catch(err){
    res.status(500).json({error: err.nessage})
}
});


module.exports = router;