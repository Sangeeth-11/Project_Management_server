const users = require('../Models/userModels')
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