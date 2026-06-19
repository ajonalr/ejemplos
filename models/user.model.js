const { DataTypes } = require('sequelize')
const sequelize = require('../database/connection')


const User = sequelize.define( 'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: true
        }
    } , {
        timestamps: true // andadir unas columnas de fechas: createdAt y updatedAt
    }

)

module.exports = User