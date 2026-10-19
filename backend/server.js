const app = require('./src/app')
const connectdb = require('./src/db/db')
require('dotenv').config()

const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("Server Started At PORT ",PORT)
})


connectdb()