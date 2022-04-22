
const db = require("../models");
const {DataTypes} = require("sequelize")
const User = require("../models/user")(db.sequelize, DataTypes)

const getCurrentUser = async(req,res) => {
    const { id } = req.user;
    const data = await User.findByPk(id);
    
    try{
    if(data){
        const {firstName, lastName, email, id, roleId} = data;
        res.json({
            firstName,
            lastName,
            email,
            id,
            roleId
        })
    } }
    catch(err){
        res.status(404).json({
            message: err.message
        })
    }
}
module.exports = {
    getCurrentUser
}