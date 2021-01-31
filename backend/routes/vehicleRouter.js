const router = require("express").Router();
const auth = require("../middleware/auth");
const uploadAuth = require("../middleware/uploadAuth");
const Vehicle = require("../models/vehicleModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/", auth, async (req,res) => {
    try{
        
        let {brand, model, year} = req.body;

        if(!brand || !model || !year)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }

        const obj = new Vehicle ({
            brand,
            model,
            userID: req.user,
            year,
            lat: '29.9792',
            lng: '31.1342'
        });


        const savedVehicle = await obj.save();
        
        res.json(savedVehicle);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", auth, async (req,res) => {


    const vehicles = await Vehicle.find({
        "userID" : req.user
    });
    res.json(vehicles);


});

router.get('/:id', auth, async(req,res) =>{

    try{
    const vehicle = await Vehicle.findById(
        req.params.id
    )

    if(!vehicle){
        return res
        .status(400)
        .json({
            msg: 'This Vehicle Does Not Exist.'
        });
    }

    res.json(vehicle); 
} catch(err){
    res.status(500).json({error: err.nessage})
}

});





router.delete('/:id', auth, async (req,res) =>{
    try{
        const vehicle = await Vehicle.findByIdAndDelete(
            req.params.id
        )
    
        if(!vehicle){
            return res
            .status(400)
            .json({
                msg: 'This Vehicle Does Not Exist.'
            });
        }
    
        res.json(vehicle); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})

module.exports = router; 