const { param } = require('express-validator');
const {DataTypes} = require('sequelize')
const db = require('../models')
const Categories = require("../models/categories")(db.sequelize,DataTypes)

const controller = {
    deleteCategorie: async(req,res) => {
        const { id } = req.params;
        const deleteCategorie = await Categories.destroy({
            where:{
                id: id
            }
        })
    }
}


module.exports = controller