const mongoose = require('mongoose')

const technicianSchema = mongoose.Schema({
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
    iban:{
        type: String,
        required: true,
    },
    deviceType:{ //Phone or Computer
        type: Array,
        required: true,
    },
    softwareType:{ // IOS or Android , MAC or Windows
        type: Array,
        required: true
    },
    order: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "order"
    }]
}, {timestamp: true})

const Technician = mongoose.model('technician', technicianSchema);
module.exports = Technician