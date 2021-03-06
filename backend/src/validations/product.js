const Joi = require('joi')
const _ = require('lodash')

const objectProductSchema = {
  title: Joi.string().min(3).max(100).required(),
  price: Joi.number().required(),
  brand: Joi.string().min(3).max(30).required(),
  description: Joi.string().required(),
  category: Joi.string().alphanum().required(),
  countInStock: Joi.number(),
  numReviews: Joi.number(),
}

exports.validateProduct = (data) => {
  const schemaProduct = Joi.object(objectProductSchema)
  return schemaProduct.validate(data)
}

exports.validateReview = (data) => {
  const schemaReview = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
  })
  return schemaReview.validate(data)
}
