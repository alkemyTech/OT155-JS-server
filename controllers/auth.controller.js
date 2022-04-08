const User = require('../models').Users


const getCurrentUser = async(req,res) => {
    const { id } = req.params;
    try {
        const data = await User.findByPk(id);

        if(data){
            const {name, email} = data;
            return res.json({
                name,
                email
            })
        }
        throw new Error('User not logged in');
    }catch(err) {
        res.status(500).json({
            message:err.message
        })
    }
}

module.exports = {
    getCurrentUser
}