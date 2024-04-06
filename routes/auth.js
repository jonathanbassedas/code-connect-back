const express = require('express');

const { body } = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login',  authController.login);
router.post('/register',  authController.register);
router.get('/verifyToken',  authController.verifyToken);

module.exports = router;
