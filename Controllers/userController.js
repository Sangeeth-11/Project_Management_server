const users = require('../Models/userModels')
const jwt = require('jsonwebtoken')

exports.userRegister=async(req,res)=>{
    console.log(req.body);
    const {username,email,password}=req.body
    try {
        const existingUser = await users.findOne({email})
        if (existingUser) {
            res.status(406).json('user already exist')
        } else {
            const newUser = new users({
                username,password,email,profile:'',github:'',linkdin:''
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

exports.userLogin = async(req,res)=>{
    const {email,password} =req.body
    try {
        const existingUser=await users.findOne({email,password})
        if (existingUser) {
            
            const token = jwt.sign({userId:existingUser._id},process.env.secretkey)
            res.status(200).json({token,username:existingUser.username})
        } else {
            res.status(406).json('incorrect email or password')
        }
    } catch (error) {
        res.status(404).json(error)
    }
}