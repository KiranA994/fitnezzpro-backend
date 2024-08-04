const express = require("express")

const userController = require('./controllers/userController')

 
const jwtMiddleware = require('./middleware/jwtMiddleware')


const router = new express.Router()

// path to resolve register request
router.post('/user/register',userController.register) 

//  path to resolve login request
router.post('/user/login',userController.login)

module.exports = router