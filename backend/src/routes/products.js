const express = require('express')
const {
  getProducts,
  getProduct,
  createProduct,
} = require('../controllers/products')
import { protect } from '../middleware/auth'
const router = express.Router()
console.log(protect)
router.route('/').get(getProducts).post(protect, createProduct)
router.route('/:_id').get(getProduct)
module.exports = router
