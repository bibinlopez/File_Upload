
const express = require('express')

const router = express.Router()


const { Local } = require('../controllers/expressUpload')


router.post ('/:id', Local)



module.exports = router

