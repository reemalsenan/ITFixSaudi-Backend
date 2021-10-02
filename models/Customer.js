const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

customerSchema.pre("save", function(next, done){
    let salt = bcrypt.genSaltSync()
    let hash = bcrypt.hashSync(this.password, salt)

    this.password = hash 
    next()
    done()

})

const Customer = mongoose.model('customer', customerSchema);
module.exports = Customer