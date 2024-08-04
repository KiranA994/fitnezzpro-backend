const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username:{
        require: true,
        type: String
    },
    mailId:{
        require: true,
        type: String
    },
    password:{
        require: true,
        type: String
    }
})

const users = mongoose.model('user',userSchema)

module.exports = users