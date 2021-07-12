import asyncHandler from 'express-async-handler'
import Order from '../models/order'
import Product from '../models/product'
import { validateAddnewOrder } from '../validations/order'

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
// @access  Private
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

// @desc     Create a new Order
// @route   POST /api/orders/
// @access  Private
export const addNewOrder = asyncHandler(async (req, res) => {
  try {
    const { user, body } = req
    const { error } = validateAddnewOrder(body)
    if (error)
      return res.status(400).json({ message: error.details[0].message })
    const orderItems = []
    let totalPrice = 0

    for (var i = 0; i < body.orderItems.length; i++) {
      let productItem = body.orderItems[i]
      const product = await Product.findById(productItem.product_id)
      if (product.countInStock < productItem.quantity)
        return res.status(400).json({
          message: `the quantity of ${product.title} product is not suffisante`,
        })
      totalPrice += product.price * productItem.quantity

      await Product.updateOne(
        { _id: product._id },
        { $set: { countInStock: product.countInStock - productItem.quantity } },
        { returnOriginal: false }
      )
      orderItems.push({ product, quantity: productItem.quantity })
    }

    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress: body.shippingAddress,
      paymentMethod: body.paymentMethod,
      taxPrice: 200,
      shippingPrice: 2000,
      totalPrice,
    })
    await order.save()
    return res.status(200).json({ order })
  } catch (error) {
    console.log('errr ', error)
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})
