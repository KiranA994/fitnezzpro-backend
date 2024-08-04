require("dotenv").config()

const express = require("express")

const cors = require("cors")

const router = require("./router")

require("./database/connection")

const gymServer = express()

gymServer.use(cors())

gymServer.use(express.json())

gymServer.use(router)

const PORT = 3000 || process.env.PORT

gymServer.listen(PORT,()=>{
    console.log('gym server running successfully');
})

gymServer.get('/',(req,res)=>{
    res.send('get request recieved');
})

gymServer.post('/',(req,res)=>{
    res.send('post request recieved');
})