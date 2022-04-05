'use strict';
const { DataTypes, Model } = require("sequelize");
const db = require("./index");
const sequelize = db.sequelize;

class Entrie extends Model {
 
}

Entrie.init({
  name: DataTypes.STRING,
  content: DataTypes.STRING,
  image: DataTypes.STRING,
  categoryId: DataTypes.INTEGER,
  type: DataTypes.STRING,
  deleteAt: DataTypes.DATE
}, {
  sequelize,
  modelName: 'Entrie',
  paranoid: true
});

module.exports = Entrie;