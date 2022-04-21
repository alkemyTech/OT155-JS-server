const { param } = require("express-validator");
const db = require("../models");
const {DataTypes} = require("sequelize")
const Categories = require("../models/categories")(db.sequelize, DataTypes)

const controller = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Categories.findAll({attributes: ['name']});
      res.json({categories});
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
    } catch (error) {
      res.status(404).json({
        msg: `Category does not exist`,
      });
    }
  },
  postCategory: async(req,res) => {
      const { name, description } = req.body;
     try{
          const newCategory = await Categories.create({
              name,
             description
           })
          res.status(201).json({
               msg: `Category created successfully`,
               newCategory
           })
      }catch(error){
           res.status(500).json({
            msg: `Something went wrong`
           })
       }
   }
};

}


module.exports = controller
