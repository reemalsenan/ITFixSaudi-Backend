const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    dateTime:{
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    bankName:{
        type: Array,
        required: true
    },
    iban:{
        type: String,
        required: true
    },
    PIN:{
        type: Number,
        required: true,
        unique: true
    },
    price:{
        type: String,
        required:true,
    }

},{timestamp : true})


const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment