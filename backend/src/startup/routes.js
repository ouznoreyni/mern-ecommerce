const express = require('express')
import auth from '../routes/auth';
module.exports = (app) => {
  app.use('/api', auth);
  app.use('/', (req, res) => {
    res.json({ message: 'Welcome Sen-store api' })
  })
}
