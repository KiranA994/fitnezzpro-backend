const user = require("../model/userSchema")

const jwt = require("jsonwebtoken")

exports.register = async(req,res) => {
    const {username,email,password} = req.body
    console.log(username,email,password);
    console.log("inside register controller");

    try{
        const existingUser = await user.findOne({mailId:email})

        if(existingUser){
            res.status(406).json('Account Already Exists')
        }
        else{
            const newUser = new user({
                username,
                mailId:email,
                password
            })

            await newUser.save()

            res.status(200).json(newUser)
        }
    }
    catch(error){
        res.status(400).json(error)
    }
}


exports.login =  async(req,res) => {
    const {email,password} = req.body
    console.log(email,password);
    console.log("inside login controller");

    try{
        const existingUser = await user.findOne({mailId:email,password})

        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},'supersecretkey')
            res.status(200).json({
                existingUser, 
                token
            })
        }
        else{
            res.status(401).json('Invalid Email ID or Password')
        }
    }
    catch(error){
        res.status(401).json(`request failed due to ${error}`)
    }
}