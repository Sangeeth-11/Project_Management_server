const express = require('express')
const router = express.Router()

const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtmiddle = require("../Middleware/jwtMiddleware")

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/add-project',jwtmiddle,projectController.addProject)

module.exports=router