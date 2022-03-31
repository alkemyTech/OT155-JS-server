const News = require('../models/new.js')
const validator = require("validator");

const getNews = async (req,res) => {
    const news = await News.findAll({
        order:['createdAt'],
        limit:10
    })
    // map news
    news = news.map(({title,image,createdAt}) => ({
        name:title,
        image,
        createdAt
    }))
    res.json(news)
}

const createActivitie = async (req,res) => {
    const {name,image,content} = req.body

    try{
        if(validator.isEmpty(name) || validator.isEmpty(content) ) 
            return res.status(401).json({message: "Name and Content fields are required"})
        
        const newActivities = await News.create({
            title:name,
            image,
            content,
        })
        res.json({
            status:'success',
            value:true,
            new:newActivities
        })
    }catch{
        res.status(500).json({message:'(!) Something has gone wrong. '})
    }
}

module.exports = {
    getNews,
    createActivitie
}