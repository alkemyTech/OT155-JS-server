const Contact = require('../models').Contacts;

const getContacts = async(req,res) => {
    try{
        const contacts = Contact.findAll();
        res.json(contacts);
    }catch(error){
        res.status(500).json({
            msg: "Server Error"
        })
    }
}

module.exports = { getContacts };