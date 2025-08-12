const { Rents, Cars } = require('../models')
const ErrorResponse = require('../utils/errorResponse')

// POST: /rents/create
// For: user
exports.createRent = async (rent) => {
    const { car_id, phone_number, place_rental, place_return, rental_date, return_date } = rent

    const alreadyRented = await Rents.findOne({ where: { phone_number, car_id } })
    if (alreadyRented) throw new ErrorResponse('You already rented this car', 400);

    const newRent = await Rents.create({
        car_id,
        phone_number,
        place_rental,
        place_return,
        rental_date,
        return_date
    })

    return {
        success: true,
        message: 'New rent create successfully',
        data: newRent
    }
}

// GET: /rents
// For: admin
exports.getRents = async () => {
    const rents = await Rents.findAll()
    return { success: true, data: rents }
}

// GET: /rents/:id
// For: admin
exports.getRent = async (id) => {
    const rent = await Rents.findByPk(id)
    if (!rent) throw new ErrorResponse('Rent not found', 404);

    const car = await Cars.findByPk(rent.car_id)
    if (!car) throw new ErrorResponse('Car not found', 404);

    return { success: true, rent, car }
}

// DELETE: /rents/:id
// For: admin
exports.deleteRent = async (id) => {
    const rent = await Rents.findByPk(id)
    if (!rent) throw new ErrorResponse('Rent not found', 404);

    await Rents.destroy({ where: { id } })
    return { success: true, message: 'Rent deleted successfully' }
}