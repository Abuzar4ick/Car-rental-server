const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Books = sequelize.define(
    'books',
    {
        car_type: {
            type: DataTypes.ENUM('Sport', 'Sedan', 'SUV', 'VAN', 'Minivan', 'Pickup', 'Cabriolet'),
            allowNull: false
        },
        place_rental: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_return: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rentail_data: {
            type: DataTypes.STRING,
            allowNull: false
        },
        return_date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true,
        tableName: 'books'
    }
)

module.exports = Books