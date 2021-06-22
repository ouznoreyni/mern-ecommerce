const Joi = require('joi')
const _ = require('lodash')

const objectUserSchema = {
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(255).required(),
  repeat_password: Joi.ref('password'),
}

exports.validateUser = async (data, isLoggin = false) => {
  if (isLoggin) {
    const { email, password } = objectUserSchema
    const schemaLoggin = Joi.object({ email, password })
    return schemaLoggin.validate(data)
  }

  const schemaRegister = Joi.object(objectUserSchema)
  return schemaRegister.validate(data)
}
