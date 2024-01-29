const express = require('express');
const { getLogin, getCreate, getUser, postCreate, postLogin, postLogout } = require('../controllers/auth');

const router = express.Router();
const isAuth = require('../middleware/isAuth')

router.get('/user/login',getLogin)

router.get('/user/create',getCreate);

router.post('/user/create',isAuth,postCreate);


router.get('/user/all',isAuth,getUser)

router.post('/user/login',postLogin)

router.post('/user/logout',postLogout)

module.exports = router;