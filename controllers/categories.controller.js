const { param } = require('express-validator');
const {DataTypes} = require('sequelize')
const db = require('../models')
const Categories = require("../models/categories")(db.sequelize,DataTypes)

const controller = {
    deleteCategory: async(req,res) => {

        try{
        const { id } = req.params;
        const deleteCategory = await Categories.destroy({
            where:{
                id: id
            }
        })
        }catch(error){
            res.status(404).json({
                msg: `Category does not exist`
            })
        }


    }
}


module.exports = controller