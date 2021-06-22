const express = require('express')
const {
  getCategory,
  getcategories,
  createCategory,
} = require('../controllers/category')
const router = express.Router()

router.route('/').get(getcategories).post(createCategory)
router.route('/:_id').get(getCategory)
module.exports = router
