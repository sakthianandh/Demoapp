const express = require('express')
const router = express.Router()

router.get('/:id',(req,res) => {
    res.send(req.query)
})

module.exports = router