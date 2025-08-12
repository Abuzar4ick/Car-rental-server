const { rentsService } = require('../services')
const asyncHandler = require('../utils/asyncHandler')

// POST: /rents/create
exports.newRent = asyncHandler(async (req, res, next) => {
    const response = await rentsService.createRent(req.body)
    res.status(201).json(response)
})

// GET: /rents
exports.allRents = asyncHandler(async (req, res, next) => {
    const response = await rentsService.getRents()
    res.status(200).json(response)
})

// GET: /rents/:id
exports.oneRent = asyncHandler(async (req, res, next) => {
    const response = await rentsService.getRent(req.params.id)
    res.status(200).json(response)
})

// DELETE: /rents/:id
exports.deleteRent = asyncHandler(async (req, res, next) => {
    const response = await rentsService.deleteRent(req.params.id)
    res.status(200).json(response)
})