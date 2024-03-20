const express = require('express');

const { body } = require('express-validator');

const codigosController = require('../controllers/codigos');

const router = express.Router();

router.get('/',  /*auth,*/  codigosController.fetchAll);

module.exports = router;