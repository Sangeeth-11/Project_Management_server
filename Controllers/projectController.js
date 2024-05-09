const projects = require('../Models/projectModel')

exports.addProject=async(req,res)=>{
    console.log('inside controler');
    const {title,overview,language,demo,github}=req.body
    const image=req.file.filename
    const userId = req.payload
    try{
        const result = await projects.findOne({github})
        if (result) {
            res.status(401).json("Project already exist")
        } else {
            const newProject = new projects({
                title,overview,language,demo,github,image,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(err){
        console.log(err);
        res.status(406).json(err)
    }

    
}