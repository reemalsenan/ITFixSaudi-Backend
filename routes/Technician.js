const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
        if(!bcrypt.compareSync(password, technician.password)) throw new Error('Wrong password!')
        technician.password = undefined
        let token = jwt.sign({technician}, process.env.SECRETKEY, {expiresIn: 60 * 60 * 1000})
        res.json({message: "Welcome back!", token})
    }catch(err){
        res.status(401).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})

// All technicians 
router.get("/allTech", async(req, res) => {
    try{
        const allTech = await Technician.find()
        res.status(200).json({ allTech })
    }catch(err){
        res.status(400).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})

module.exports = router