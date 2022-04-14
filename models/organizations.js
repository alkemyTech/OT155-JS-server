'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizations.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    address: DataTypes.STRING,
    welcomeText: DataTypes.STRING,
    socialMedia: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Organizations',
  });
  return Organizations;
};