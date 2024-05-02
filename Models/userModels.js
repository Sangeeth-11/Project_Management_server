const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profile:{
        type:String
    },
    
    github:{
        type:String
    },
    
    linkdin:{
        type:String
    },
})

const users = mongoose.model('users',userScheme)

module.exports=users