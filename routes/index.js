const express = require('express')
const router = express.Router()

const user = require('./user')

router.use('/users',user)
router.get('/comments',(req,res) => {
   res.send('comments')
})

module.exports = router

