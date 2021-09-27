const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    resetLink: {
        data: String,
        default: ''
    },
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }]

}, {Timestamp: true})

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer