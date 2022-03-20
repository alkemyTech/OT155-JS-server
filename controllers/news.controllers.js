const getNews = (req,res) => {
    const news = []
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