const User = require('../models').Users


const getCurrentUser = async(req,res) => {
    const { id } = req.params;
    const data = await User.findByPk(id);

    if(data){
        const {name, email} = data;
        res.json({
            name,
            email
        })
    } else {
        throw new Error('User not logged in');
    }


}

module.exports = {
    getCurrentUser
}