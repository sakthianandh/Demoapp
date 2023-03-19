const Joi = require('joi');

const createUserValidation = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().required().min(3),
        name: {
            firstName: Joi.string(),
            lastName: Joi.string().required()
        }
    })
    const { error } = schema.validate(req.body)
    if (error)
        next({ statusCode: 400, message: error.details[0].message })
    next()
}

module.exports = {
    createUserValidation
}