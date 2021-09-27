const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

technicianSchema.pre("save", function(next, done){
    let salt = bcrypt.genSaltSync()
    let hash = bcrypt.hashSync(this.password, salt)

    this.password = hash
    next()
    done()
})
const Technician = mongoose.model('technician', technicianSchema);
module.exports = Technician