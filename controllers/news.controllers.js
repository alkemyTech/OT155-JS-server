const News = require('../models/new.js')

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

module.exports = {
    getNews,
}