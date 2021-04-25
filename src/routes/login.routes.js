const express = require('express');
const router = express.Router();

// IMPORST CONTROLLERS
const controllers_login = require('../controllers/login.controllers');

router.get('/login/:user/:password', controllers_login.login_In)

module.exports = router;