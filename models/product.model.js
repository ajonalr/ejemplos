const { DataTypes } = require('sequelize')
const dbcn = require('../database/connection')

const Product = dbcn.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true // andadir unas columnas de fechas: createdAt y updatedAt
})

module.exports = Product