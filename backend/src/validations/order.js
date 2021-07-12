const Joi = require('joi')
const _ = require('lodash')

const objectOrderSchema = {
  orderItems: Joi.array().items(
    Joi.object({
      product_id: Joi.string().alphanum().min(24).max(24).required(),
      quantity: Joi.number().min(1).required(),
    })
  ),
  shippingAddress: Joi.object({
    address: Joi.string().min(3).required(),
    city: Joi.string().min(3).required(),
    country: Joi.string().min(3).required(),
  }).required(),
  paymentMethod: Joi.string().valid('CASH', 'CARD', 'SKIP').required(),
}

// {
//   "orderItems":{
//       "Order":{},
//       "quantity":3
//   },
//   "":{
//     "address": "Grand Diourbel",
//     "city": "DIourbel",
//     "country": "Senegal"
//   },
//   "":"CASH"
// }
exports.validateAddnewOrder = (data) => {
  const schemaOrder = Joi.object(objectOrderSchema)
  return schemaOrder.validate(data)
}
