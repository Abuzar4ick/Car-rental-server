const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// .env
const { CLOUD_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET } = process.env

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: 'Car-rental',
    allowed_formats: ['jpeg', 'png', 'jpg', 'svg', 'webp', 'pdf'],
    public_id: file.originalname.split('.')[0]
  })
})

module.exports = { cloudinary, storage }