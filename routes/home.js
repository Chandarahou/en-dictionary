const express = require('express')
const {getHome, getCategory, getCreate, postCreate, postDelete} = require('../controllers/app')

const router = express.Router()
const isAuth = require('../middleware/isAuth')

router.get('/',isAuth,getHome)

router.get('/create',isAuth,getCreate)

router.post('/create',isAuth,postCreate)

router.post('/delete/:id',isAuth,postDelete)

module.exports = router;