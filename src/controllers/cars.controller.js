const asyncHandler = require('../utils/asyncHandler')
const { carsService } = require('../services')

// POST: /cars-create
exports.newCar = asyncHandler(async (req, res, next) => {
    const response = await carsService.createCar(req.body, req.files)
    res.status(201).json(response)
})

// GET: /cars
exports.allCars = asyncHandler(async (req, res, next) => {
    const response = await carsService.getCars()
    res.status(200).json(response)
})

// GET: /cars/:id
exports.oneCar = asyncHandler(async (req, res, next) => {
    const response = await carsService.getCar(req.params.id)
    res.status(200).json(response)
})