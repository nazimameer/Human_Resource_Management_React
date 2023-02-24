const express = require('express');
const router = express.Router()
const hrController = require('../controllers/hrController')

router.post('/login',hrController.postLogin)



module.exports = router; 