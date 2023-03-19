const express = require('express')
const router = express.Router()
const { createSchema }= require('../validation/user')
const { createUser } = require('../controllers/user.controllers')

router.post('/:id',(req,res,next) => {
    const { error } = createSchema.validate(req.body);
    if(error) 
         res.status(400).json({ error: error.details[0].message });
    next()
}, createUser)

module.exports = router