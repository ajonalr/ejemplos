
const UserModel = require('../models/user.model')

const getUsers = async (req, res) => {
    // try {
    //     const [rows] = await pool.query('SELECT * FROM users')
    //     res.json(rows)
    // } catch (error) {
        
    // }
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (consrt ) {
        
    }
}



const createUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const midata = async (req, res) => {
    
}

const getUser = async (req, res) => {
    
}

module.exports = {
    getUsers,
    createUser,
    midata, 
    getUser
}