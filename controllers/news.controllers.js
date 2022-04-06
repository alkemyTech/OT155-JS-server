const validator = require("validator");
const Entry = require("../models/entries.js").Entries;
const News = require("../models/new.js");

const getNews = async (req, res) => {
  const news = await News.findAll({
    order: ["createdAt"],
    limit: 10,
  });
  // map news
  news = news.map(({ title, image, createdAt }) => ({
    name: title,
    image,
    createdAt,
  }));
  res.json(news);
};

const createNew = async (req, res) => {
  const params = req.body;

  try {
    if (
      !params.name ||
      !params.content ||
      !params.image ||
      !params.categoryId
    ) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Missing fields.",
      });
    }

    validate_name = validator.isEmpty(params.name);
    validate_content = validator.isEmpty(params.content);
    validate_image = validator.isEmpty(params.image);
    validate_categoryId = validator.isEmpty(params.categoryId);

    if (
      validate_name ||
      validate_content ||
      validate_image ||
      validate_categoryId
    ) {
      return res.status(400).json({
        ok: false,
        message: "(!) Error. Some fields are empty.",
      });
    }

    const newEntry = await Entry.create({
      name: params.name,
      content: params.content,
      image: params.image,
      categoryId: params.categoryId,
      type: "news",
    });

    return res.status(200).json({
      ok: true,
      message: "Entry created succssesfully. Type: news",
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
  getNews,
  createNew,
};

