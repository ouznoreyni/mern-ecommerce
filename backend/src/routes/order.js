const express = require('express')
const { getOrders, getOrder, addNewOrder } = require('../controllers/order')
const router = express.Router()

router.route('/').get(getOrders).post(addNewOrder)
router.route('/:_id').get(getOrder)

module.exports = router
