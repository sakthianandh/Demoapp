const express = require('express')
const router = express.Router()
const { createUserValidation } = require('../validation/user')
const { createUser } = require('../controllers/user.controllers')

router.post('/:id', createUserValidation, createUser)

module.exports = router