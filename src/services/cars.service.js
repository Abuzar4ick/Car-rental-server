const { Cars } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// POST: /cars-create
exports.createCar = async (car, images) => {
    const { brand, title, type, per_day, gear_box, fuel, doors, air_conditioner, seats, distance } = car
    const mainImage = images['main_image'][0].filename
    const detailImages = await images['detail_images'].map((file) => file.filename)

    const newCar = await Cars.create({
        brand,
        title,
        type,
        per_day: Number(per_day),
        gear_box,
        fuel,
        doors: Number(doors),
        air_conditioner,
        seats: Number(seats),
        distance,
        main_image: mainImage,
        detail_images: detailImages
    })
    return { 
        success: true,
        message: 'New car was created successfully',
        data: newCar
    }
}

// GET: /cars
exports.getCars = async () => {
    const cars = await Cars.findAll()
    return { success: true, data: cars }
}

// GET: /cars/:id
exports.getCar = async (id) => {
    const car = await Cars.findByPk(id)
    if (!car) throw new ErrorResponse('Car not found', 404);

    return { success: true, data: car }
}