const { param } = require("express-validator");
const db = require("../models");
const { DataTypes } = require("sequelize");
const Categories = require("../models/categories")(db.sequelize, DataTypes);

const controller = {
  getCategory: async (req,res) => {
    try{
      const category = await Categories.findByPk(req.params.id);
      if(!category){
        return res.status(404).json({
          ok: false,
          message: '(!) Category does not exist',
        })
      }
      res.json({
        status: 'success',
        value: true,
        new: category,
      })
    }catch{
      return res.status(500).json(
        { message: '(!) Something has gone wrong' }
      )
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const categories = await Categories.findAll({});
      res.json({ categories });
    } catch (error) {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCategory = await Categories.destroy({
        where: {
          id: id,
        },
      });
      res.json({deleteCategory})
    } catch (error) {
      res.status(404).json({
        msg: `Category does not exist`,
      });
    }
  },
  postCategory: async (req, res) => {
    const { name, description } = req.body;
    try {
      const newCategory = await Categories.create({
        name,
        description,
      });
      res.status(201).json({
        msg: `Category created successfully`,
        newCategory,
      });
    } catch (error) {
      res.status(500).json({
        msg: `Something went wrong`,
      });
    }
  },
  updateCategory: async (req, res) => {
    const params = req.body;
    console.log(params)
    if (!params.id || !params.name || !params.description) {
      return res.status(400).json({
        ok: false,
        message: "Error. Some fields are empty.",
      });
    }

    try {
      const category = await Categories.findOne({ where: { id: params.id } });

      if (!category) {
        return res.status(404).json({
          ok: false,
          message: "404. Category not found.",
        });
      }


      const updateCategory = await Categories.update(
        { name: params.name, description: params.description },
        { where: { id: params.id } }
      );


      if(!updateCategory){
        return res.status(500).json({
          ok: false,
          message: "500. Internal server error.",
        });
      }

      return res.status(200).json({
        ok: true,
        message: "200. Category updated successfully."
      })

    } catch (err) {
      if (err) {
        return res.status(500).json({
          ok: false,
          message: "500. Internal server error.",
        });
      }
    }
  },
};

module.exports = controller;
