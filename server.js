require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT;
const cors = require('cors')

mongoose.connect(process.env.mongoDBURL , {useNewUrlParser:true , useUnifiedTopology: true} ,() => console.log('connected to the database'))

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use(cors());

app.use('/api/v1/order', require('./routes/Order'))
app.use('/api/v1/customer', require('./routes/Customer'))
app.use('/api/v1/technician', require('./routes/Technician'))

app.listen(PORT, console.log(`server is running on port ${PORT}`))