const jwt = require('jsonwebtoken')
const ErrorResponse = require('../utils/errorResponse')
// .env
const { ADMIN_USERNAME, ADMIN_PASSWORD, JWT_SECRET, JWT_EXPIRES_IN } = process.env

// POST: /admin/register
exports.register = async (admin) => {
    const { username, password } = admin
    if(username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        throw new ErrorResponse('Incorrect username or password')
    }

    const token = await jwt.sign({ role: 'admin' }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN   
    })

    return {
        success: true,
        message: 'Registered successfully',
        token
    }
}

// POST: /admin/logout
exports.logout = async () => {
    return { success: true, message: 'Logout successful' }
}