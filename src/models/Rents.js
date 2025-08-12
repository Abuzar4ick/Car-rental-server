const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')
const Cars = require('./Cars')

const Rents = sequelize.define(
    'rents',
    {
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Cars,
                key: 'id'
            }
        },
        phone_number: {
            type: DataTypes.STRING,
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
        rental_date: {
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
        tableName: 'rents'
    }
)

Cars.hasMany(Rents, { foreignKey: 'car_id' })
Rents.belongsTo(Cars, { foreignKey: 'car_id' })

module.exports = Rents