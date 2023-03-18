'use strict';
require('dotenv').config({ path: 'environment/environment.env' })
const express = require('express');
const router = require('./routes/index.js')
const cors = require('cors')


//initaize
const PORT =     3000
const app = express()
const corsOptions = {
  origin: "http://localhost:3000",
  methods: 'GET,POST,PUT',
  credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
