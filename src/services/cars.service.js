const { Cars } = require('../models')
const ErrorResponse = require('../utils/errorResponse')
const { cloudinary } = require('../storage/cloudinary')

// POST: /cars/create
// For: admin
exports.createCar = async (car, images) => {
    console.log(car, images )
    const { brand, title, type, per_day, gear_box, fuel, doors, air_conditioner, seats, distance } = car
    const mainImage = images['main_image']?.[0]?.filename || null
    const detailImages = images['detail_images']?.map((file) => file.filename) || []

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
// For: admin & user
exports.getCars = async () => {
    const cars = await Cars.findAll()
    return { success: true, data: cars }
}

// GET: /cars/:id
// For: admin & user
exports.getCar = async (id) => {
    const car = await Cars.findByPk(id)
    if (!car) throw new ErrorResponse('Car not found', 404);

    return { success: true, data: car }
}

// DELETE: /cars/:id
// For: admin
exports.deleteCar = async (id) => {
    const car = await Cars.findByPk(id)
    if (!car) throw new ErrorResponse('Car not found', 404);

    await Cars.destroy({ where: { id } })
    await cloudinary.uploader.destroy(car.main_image)

    if (Array.isArray(car.detail_images)) {
        for (const img of car.detail_images) {
            await cloudinary.uploader.destroy(img)
        }
    }

    return { success: true, message: 'Car deleted successfully' }
}

// PUT: /cars/:id
// For: admin
exports.updateCar = async (id, data, images) => {
    const car = await Cars.findByPk(id)
    if (!car) throw new ErrorResponse('Car not found', 404);

    const updateData = {
        brand: data.brand ?? car.brand,
        title: data.title ?? car.title,
        type: data.type ?? car.type,
        per_day: data.per_day !== undefined ? Number(data.per_day) : car.per_day,
        gear_box: data.gear_box ?? car.gear_box,
        fuel: data.fuel ?? car.fuel,
        doors: data.doors !== undefined ? Number(data.doors) : car.doors,
        air_conditioner: data.air_conditioner ?? car.air_conditioner,
        seats: data.seats !== undefined ? Number(data.seats) : car.seats,
        distance: data.distance ?? car.distance,
        main_image: car.main_image,
        detail_images: car.detail_images
    }

    if (images?.main_image) {
        await cloudinary.uploader.destroy(car.main_image)
        updateData.main_image = images['main_image'][0].filename
    }

    if (images?.detail_images) {
        if (Array.isArray(car.detail_images)) {
            for (const img of car.detail_images) {
                await cloudinary.uploader.destroy(img)
            }
        }

        updateData.detail_images = images['detail_images'].map(file => file.filename)
    }

    await Cars.update(updateData, { where: { id } })
    return { success: true, message: 'Car updated successfully' }
}