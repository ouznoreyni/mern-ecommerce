import asyncHandler from 'express-async-handler'
import User from '../models/user'

// @desc    Fetch all Users
// @route   GET /api/users
// @access  Public
export const getUsers = asyncHandler(async (req, res) => {
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

  const count = await User.countDocuments({ ...keyword })
  const users = await User.find({ ...keyword })
    .limit(pageSize)
    .skip(skip)

  const params = {
    page,
    totalusers: count,
    totalPages: Math.ceil(count / pageSize),
    skip,
    pageSize,
  }
  return res.json({ users, params })
})

// @desc     Fetch single User
// @route   GET /api/users/:_id
// @access  Public
export const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params._id)

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    return res.status(200).json({ user })
  } catch (error) {
    return res.status(500).json({ message: 'Oup! something goes wrong' })
  }
})
