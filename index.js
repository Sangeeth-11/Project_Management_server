// to load .env file content into process .env

require('dotenv').config()

//importing express and cors

const express = require('express')
const cors = require('cors')
const router = require('./Router/routes')
require('./DB/connection')

//creating server

const pfserver =express()

pfserver.use(cors())

//configuration for converting json
pfserver.use(express.json())

//configuring routes to server

pfserver.use(router)

//

pfserver.use('/uploads',express.static('./uploads'))

const PORT = 3000

// to run server

pfserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`);
})