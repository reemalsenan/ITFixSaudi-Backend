const express = require('express')
const router = express.Router();

// Models 
const Customer = require('../models/Customer')

// Register Route 
router.post('/register', async (req, res) => {
    try{
        const newCutomer = new Customer(req.body);
        await newCutomer.save();
        res.json({message: "Your Account has been created successfully. Welcome!", user: newCutomer, success:true})
    }catch(err){
        res.status(401).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        let customer = await Customer.findOne({email: email})
        if(!customer) throw new Error('Wrong email address!') // customer == null
        if(password != customer.password) throw new Error('Wrong password!')
        res.json({message: "Welcome back!"})
    }catch(err){
        res.status(401).json({name: err.name ,message: err.message, url: req.originalUrl})
    }
})



module.exports = router