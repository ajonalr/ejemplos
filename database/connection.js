const { Sequelize } = require('sequelize')

require('dotenv').config();


const dbcn = new Sequelize('proof1', 'root', 'root', {
    host: 'localhost',
    port: 33061,
    dialect: 'mysql'
})

dbcn.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch(err => console.log(err))

module.exports = dbcn