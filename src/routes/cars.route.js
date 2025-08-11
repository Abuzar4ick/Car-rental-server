const { Router } = require('express')
const router = Router()
const { newCar, allCars, oneCar } = require('../controllers/cars.controller')
// cloudinary storage (file upload)
const { storage } = require('../storage/cloudinary')
const multer = require('multer')
const upload = multer({ storage })

router.post('/create', upload.fields([{ name: 'main_image', maxCount: 1 }, { name: 'detail_images', maxCount: 5 }]), newCar)
router.get('/', allCars)
router.get('/:id', oneCar)

module.exports = router