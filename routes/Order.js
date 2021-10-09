const express = require('express');
const router = express.Router();

// Import Order model
const Order = require('../models/Order');

// POST - Create a Order
router.post('/new' , async(req, res) => {
    try {
    const newOrder = new Order(req.body)
    await newOrder.save()
    res.status(201).json({
            message: "Your order was created successfully..", newOrder})
    }catch(err){
        res.status(400).json({
        name : err.name ,
        message:err.message,
        url : req.originalUrl
        })
    }
})

// GET - Display Orders
router.get("/allOrders", async(req, res) => {
    try{
        const allOrders = await Order.find()
        res.status(200).json({ allOrders})
    }catch(err){
        res.status(400).json({name: err.name, message: err.message, url: req.originalUrl})
    }
})

// GET - One Order
router.get('/:id', async (req,res) => {
    try{
    const orderId = req.params.id
    const order = await Order.findById(orderId)
    if(!order){
        throw new Error("Order does not exist")
    }
    res.status(200).json(order)
    }catch(error){
        res.status(400).json({ 
            name: error.name, 
            message: error.message, 
            url: req.originalUrl 
        })
    }
})

module.exports = router