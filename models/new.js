'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class News extends Model {};
    News.init({
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: DataTypes.STRING,
        context: DataTypes.STRING,
        categoryId:{
            type: DataTypes.INTEGER,
            references:{
                model:'',
                key:'id'
            }
        }
    }, {
        sequelize,
        modelName: 'News',
        paranoid: true
    });
    return News;
}; 
