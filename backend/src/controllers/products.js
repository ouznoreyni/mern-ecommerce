import asyncHandler from 'express-async-handler'
import sharp from 'sharp'
import Product from '../models/product'
import { validateProduct } from '../validations/product'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.page) || 1
  const skip = pageSize * (page - 1)

  const title = req.query.title
    ? {
        title: {
          $regex: req.query.title,
          $options: 'i',
        },
      }
    : {}
  const count = await Product.countDocuments({ ...title })
  const products = await Product.find({ ...title })
    .limit(pageSize)
    .skip(skip)

  const params = {
    page,
    totalProducts: count,
    totalPages: Math.ceil(count / pageSize),
    skip,
    pageSize,
  }
  return res.json({ products, params })
})

// @desc     Fetch single product
// @route   GET /api/products/_id
// @access  Public
export const getProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params._id).populate('user')

    if (!product) {
      return res.status(404).json({ message: 'product not found' })
    }

    return res.status(200).json({ product })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})

// @desc     Create a product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  try {
    //Validate Product
    const { error } = validateProduct(req.body)
    console.log(error)
    if (error) {
      return res.status(400).json({ message: error.details[0].message })
    }

    if (!req.file) {
      return res.status(400).json({ message: 'add image please' })
    }
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 500, height: 500 })
      .png()
      .toBuffer()
    let product = await Product.create({
      user: req.user,
      image: buffer,
      ...req.body,
    })
    product = await product.populate('category').execPopulate()
    return res.status(201).json({ product })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

// @desc    Delete a Product
// @route   DELETE /api/products/_id
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params)
    if (!product) {
      return res.status(404).json({ message: 'product does not exist' })
    }
    return res.status(204).json({ message: 'product deleted' })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
export const getTopProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({}).sort({ rating: -1 }).limit(8)
    res.json({ products })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})
