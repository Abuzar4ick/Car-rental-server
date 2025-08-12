const { adminAuthService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /admin/register
exports.register = asyncHandler(async (req, res, next) => {
    const response = await adminAuthService.register(req.body)
    res.status(200).json(response)
})

// POST: /admin/logout
exports.logout = asyncHandler(async (req, res, next) => {
    const response = await adminAuthService.logout()
    res.status(200).json(response)
})