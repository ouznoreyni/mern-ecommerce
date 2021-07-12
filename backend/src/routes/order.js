const express = require('express')
const { getOrders, getOrder } = require('../controllers/order')
const router = express.Router()

router.route('/').get(getOrders)
router.route('/:_id').get(getOrder)

module.exports = router
