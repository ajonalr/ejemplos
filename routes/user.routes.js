const express = require('express')
const router = express.Router()

// destructuring
const { getUsers, createUser, midata, getUser } = require('../controllers/userController');
// sin deestructuring
// const userController = require('../controllers/userController')

router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.post('/user/create', createUser)




module.exports = router