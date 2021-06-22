import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user'

export const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

      const decoded = jwt.verify(token, JWT_PRIVATE_KEY)

      req.user = await User.findById(decoded._id).select('-password')
      next()
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, no token' })
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token failed' })
  }
})

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    return res.status(401).json({ message: 'Not authorized, login as admin' })
  }
}
