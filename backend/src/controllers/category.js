import asyncHandler from 'express-async-handler'
import Category from '../models/category'

// @desc    Fetch all Categories
// @route   GET /api/categories
// @access  Public
export const getcategories = asyncHandler(async (req, res) => {
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

  const count = await Category.countDocuments({ ...keyword })
  const categories = await Category.find({ ...keyword })
    .limit(pageSize)
    .skip(skip)

  const params = {
    page,
    totalcategories: count,
    totalPages: Math.ceil(count / pageSize),
    skip,
    pageSize,
  }
  return res.json({ categories, params })
})

// @desc     Fetch single Category
// @route   GET /api/categories/:_id
// @access  Public
export const getCategory = asyncHandler(async (req, res) => {
  try {
    const category = await Category.findById(req.params._id).populate('user')

    if (!category) {
      return res.status(404).json({ message: 'category not found' })
    }

    return res.status(200).json({ category })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})

// @desc     Create a Category
// @route   POST /api/categories
// @access  Private/Admin
export const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body
    //Validate Category
    if (!name || name.length < 3) {
      return res
        .status(400)
        .json({ message: 'Name of the category is invalid' })
    }
    const category = await Category.create({ name })
    return res.status(201).json({ category })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})
