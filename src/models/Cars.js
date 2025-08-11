const { DataTypes } = require('sequelize')
const sequelize = require('../config/sequelize')

const Cars = sequelize.define(
    'cars',
    {
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM('Sport', 'Sedan', 'SUV', 'VAN', 'Minivan', 'Pickup', 'Cabriolet'),
            allowNull: false
        },
        per_day: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gear_box: {
            type: DataTypes.ENUM('Automat', 'Mechanic'),
            allowNull: false
        },
        fuel: {
            type: DataTypes.ENUM(['Petrol', 'Gas', 'Electric', 'Diesel']),
            allowNull: false
        },
        doors: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        air_conditioner: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        seats: {
            type: DataTypes.INTEGER,
            validate: {
                min: 2
            }
        },
        distance: {
            type: DataTypes.STRING,
            allowNull: false
        },
        main_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        detail_images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    },
    {
        timestamps: true,
        tableName: 'cars'
    }
)

module.exports = Cars