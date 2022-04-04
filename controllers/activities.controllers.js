// const Activities = require('../models/activities.js')
const validator = require("validator");

const createActivitie = async (req,res) => {
    // const {name,image,content} = req.body

    // try{
    //     if(validator.isEmpty(name) || validator.isEmpty(content) ) 
    //         return res.status(401).json({message: "Name and Content fields are required"})
        
    //     const newActivities = await Activities.create({
    //         title:name,
    //         image,
    //         content,
    //     })
    //     res.json({
    //         status:'success',
    //         value:true,
    //         new:newActivities
    //     })
    // }catch{
    //     res.status(500).json({message:'(!) Something has gone wrong. '})
    // }
}


module.exports = {
    createActivitie
}