const projects = require('../Models/projectModel')

exports.addProject=async(req,res)=>{
    console.log('inside controler');
    // console.log(req.body);
    res.status(200).json("success")
}