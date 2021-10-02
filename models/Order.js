const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    deviceType:{ //Phone or Computer
        type: Array,
        required: true,
    },
    softwareType:{ // IOS or Android , MAC or Windows
        type: Array,
        required: true
    },
    attachment:{ // Image or Video
        type: String,
        required: false
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    status:{
        type: Array,
    },
    technician:{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "technician"
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:"customer"
    }

},{timestamp : true})


const Order = mongoose.model('order', orderSchema);
module.exports = Order