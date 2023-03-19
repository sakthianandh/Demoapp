const Joi = require('joi');

const createSchema = Joi.object({
    username: Joi.string().required().min(3),
    name: {
        firstName: Joi.string(),
        lastName: Joi.string().required()
    }
})

module.exports = {
    createSchema
}