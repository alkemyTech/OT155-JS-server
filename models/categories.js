'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {
        // static associate(models){
        //     Categories.belongsTo(models.News, {as:'category'});
        // };
    };
    Categories.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Categories',
        paranoid: true
    });
    
    return Categories;
    
};