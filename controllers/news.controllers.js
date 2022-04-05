const News = require('../models').News


const getNews = async (req,res) => {
    try{
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
    }catch(e) {
        console.log(e)
        return res.status(500).json({message:'(!) Something has gone wrong'})
    }
}

const getNew = async (req, res) => {
    try{
        const newActivity = await findByPk(req.params.newId)
        return res.json({
            status:'success',
            value:true,
            new:newActivity
        })
    }catch{
        return res.status(500).json({message:'(!) Something has gone wrong'})
    }
}

module.exports = {
    getNews,
    getNew
}