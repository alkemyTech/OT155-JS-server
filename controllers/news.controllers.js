const News = require('../models/new.js')

const getNews = (req,res) => {
    const news = News.findAll({
        order:['createdAt'],
        limit:10
    })
    news = news.map(({name,image,createdAt}) => ({
        name,
        image,
        createdAt
    }))
    res.json(news)
}

module.exports = {
    getNews
}