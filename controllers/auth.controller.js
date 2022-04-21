
const User = require('../models/user')

const getCurrentUser = async(req,res) => {
    const { id } = req.user;
    const data = await User.findByPk(id);

    if(data){
      const {firstName, lastName, email, id} = data;
      return res.json({
          firstName,
          lastName,
          email,
          id
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