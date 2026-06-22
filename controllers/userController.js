
const { Op } = require('sequelize');
const UserModel = require('../models/user.model')


const getUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (consrt) {

    }
}

const createUser = async (req, res) => {

    try {
        const { correo, name } = req.body
        const user = await UserModel.create({
            name,
            email: correo

        })
        res.json({
            status: 'success',
            message: 'user created',
            data: user

        })
    } catch (error) {

        res.json({
            status: 'error',
            message: 'user not created',
            error: error.message
        })
    }
}

const midata = async (req, res) => {
    return 1 + 3;
}


const getUser = async (req, res) => {
    try {

        const { id } = req.params
        const user = await UserModel.findOne({ where: { id } })

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'user not found'
            })
        }
        res.json({
            status: 'success',
            message: 'user obtained',
            data: user,
            id
        })

    } catch (error) {

    }

}

const passwordCifrate = async (password) => {
    return password + "123456"
}

module.exports = {
    getUsers,
    createUser,
    midata,
    getUser
}