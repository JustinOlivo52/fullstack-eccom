const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/signup', authController.getSignUp);

router.get('/login', authController.getLogin);

module.exports = router;