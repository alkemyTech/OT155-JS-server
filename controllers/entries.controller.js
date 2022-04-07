const validator = require('validator');
const Entries = require('../models').Entries;

const getNews = async (req, res) => {
  const news = await Entries.findAll({
    order: ['createdAt'],
    limit: 10,
  });
  // map news
  news = news.map(({ title, imageUrl, createdAt }) => ({
    name: title,
    imageUrl,
    createdAt,
  }));
  res.json(news);
};

const getNew = async (req, res) => {
  try {
    const newActivity = await Entries.findByPk(req.params.Id);
    return res.json({
      status: 'success',
      value: true,
      new: newActivity,
    });
  } catch {
    return res.status(500).json({ message: '(!) Something has gone wrong' });
  }
};

const createNew = async (req, res) => {
  const params = req.body;

  try {
    if (
      !params.name ||
      !params.content ||
      !params.imageUrl ||
      !params.categoryId
    ) {
      return res.status(400).json({
        ok: false,
        message: '(!) Error. Missing fields.',
      });
    }

    validate_name = validator.isEmpty(params.name);
    validate_content = validator.isEmpty(params.content);
    validate_imageUrl = validator.isEmpty(params.UrlUrl);
    validate_categoryId = validator.isEmpty(params.categoryId);

    if (
      validate_name ||
      validate_content ||
      validate_imageUrl ||
      validate_categoryId
    ) {
      return res.status(400).json({
        ok: false,
        message: '(!) Error. Some fields are empty.',
      });
    }

    const newEntry = await Entry.create({
      name: params.name,
      content: params.content,
      imageUrl: params.imageUrl,
      categoryId: params.categoryId,
      type: 'news',
    });

    return res.status(200).json({
      ok: true,
      message: 'Entry created succssesfully. Type: news',
      newEntry,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      ok: false,
      message: "(!) Something's gone wrong. Try again.",
      error: err,
    });
  }
};

module.exports = {
  createNew,
  getNew,
  getNews,
};
