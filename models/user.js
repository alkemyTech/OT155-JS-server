"use strict";
const { DataTypes, Model } = require("sequelize");
const db = require("../models/index");
const sequelize = db.sequelize;

class User extends Model {
  static associate(models) {
    User.belongsTo(models.Role, { as: "role" });
  }
}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    image: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: null },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
