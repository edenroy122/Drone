const mongoose = require('mongoose')
require('dotenv').config()

async function connectdb(){

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected ")
        console.log("Database Name : ",mongoose.Connection.name)
    }
    catch(err){
        console.log("Database Connection Failed",err)
    }
} 

module.exports = connectdb