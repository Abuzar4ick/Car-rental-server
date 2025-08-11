const { Sequelize } = require('sequelize')
// .env
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    port: parseInt(DB_PORT, 10)
})

module.exports = sequelize