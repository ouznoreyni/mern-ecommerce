const express = require('express')
import { protect } from '../middleware/auth'
import { upload } from '../utils/upload'
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  getTopProducts,
  reviewProduct,
} = require('../controllers/products')
const router = express.Router()

router.get('/top', getTopProducts)

router
  .route('/')
  .get(getProducts)
  .post(protect, upload.single('image'), createProduct)
router.route('/:_id').get(getProduct).delete(deleteProduct)
router.route('/:_id/reviews').post([protect], reviewProduct)
module.exports = router
