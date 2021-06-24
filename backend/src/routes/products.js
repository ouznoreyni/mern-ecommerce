const express = require('express')
import { protect } from '../middleware/auth'
import { uploadFile } from '../utils/upload'
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  getTopProducts,
} = require('../controllers/products')
const router = express.Router()

router.get('/top', getTopProducts)

router
  .route('/')
  .get(getProducts)
  .post(protect, uploadFile().single('image'), createProduct)
router.route('/:_id').get(getProduct).delete(deleteProduct)
module.exports = router
