import asyncHandler from 'express-async-handler'
import Order from '../models/order'

// @desc    Fetch all Orders
// @route   GET /api/orders
// @access  Public
export const getOrders = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.page) || 1
  const skip = pageSize * (page - 1)

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Order.countDocuments({ ...keyword })
  const orders = await Order.find({ ...keyword })
    .limit(pageSize)
    .skip(skip)

  const params = {
    page,
    totalOrder: count,
    totalPages: Math.ceil(count / pageSize),
    skip,
    pageSize,
  }
  return res.json({ orders, params })
})

// @desc     Fetch single Order
// @route   GET /api/orders/:_id
// @access  Public
export const getOrder = asyncHandler(async (req, res) => {
  try {
    const order = await Order.findById(req.params._id).populate('user')

    if (!order) {
      return res.status(404).json({ message: 'Order not found' })
    }

    return res.status(200).json({ order })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})
