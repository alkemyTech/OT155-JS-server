"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
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
      imageUrl: { type: DataTypes.STRING, allowNull: true, defaultValue: null },
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
  return User;
};
