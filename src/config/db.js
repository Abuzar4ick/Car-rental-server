const sequelize = require('./sequelize')

module.exports = (async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        console.info('Database connected & created successfully')
    } catch(err) {
        console.error(`Database connection error: ${err}`)
    }
})