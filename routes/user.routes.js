const express = require('express')
const router = express.Router()

const { getUsers, createUser, midata, getUser} = require('../controllers/userController')

router.get('/user', getUsers)
router.get('/user/:id', getUser)

router.post('/user', createUser)

router.get('/midata', midata)


module.exports = router