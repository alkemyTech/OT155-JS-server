
const User = require('../models/user')

const getCurrentUser = async(req,res) => {
    const { id } = req.user;
    const data = await User.findByPk(id);

    if(data){
        const {firstName, lastName, email, id} = data;
        res.json({
            firstName,
            lastName,
            email,
            id
        })
    } else {
        throw new Error('User not logged in');
    }

}
module.exports = {
    getCurrentUser
}