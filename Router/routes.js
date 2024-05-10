const express = require('express')
const router = express.Router()

const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtmiddle = require("../Middleware/jwtMiddleware")
const multermiddle = require("../Middleware/multerMiddleware")

router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/add-project',jwtmiddle,multermiddle.single('image'),projectController.addProject)
router.get('/home-project',projectController.homeProjects)
router.get('/all-project',jwtmiddle,projectController.allProjects)
router.get('/user-project',jwtmiddle,projectController.userProjects)

module.exports=router