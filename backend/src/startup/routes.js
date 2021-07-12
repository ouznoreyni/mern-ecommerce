const express = require('express')
import { protect } from '../middleware/auth'
import auth from '../routes/auth'
import categories from '../routes/categories'
import order from '../routes/order'
import products from '../routes/products'
import user from '../routes/user'

module.exports = (app) => {
  app.use('/api', auth)
  app.use('/api/products', products)
  app.use('/api/categories', categories)
  app.use('/api/users', user)
  app.use('/api/orders', [protect], order)
  app.use('/', (req, res) => {
    res.json({ message: 'Welcome Sen-store api' })
  })
}
