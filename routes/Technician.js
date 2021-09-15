const express = require('express')
const router = express.Router();

//Models 
const Technician = require('../models/Technician')

// Register Rotue 
router.post('/register', async (req, res) => {
    try{
        const newTech = new Technician(req.body);
        await newTech.save();
        res.json({message: "Your Account has been created successfully. Welcome!", user: newTech, success:true})
    }catch(err){
        res.status(401).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        let technician = await Technician.findOne({email: email})
        if(!technician) throw new Error('Wrong email address!') // technician == null
        if(password != technician.password) throw new Error('Wrong password!')
        res.json({message: "Welcome back!"})
    }catch(err){
        res.status(401).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})

module.exports = router