const express = require('express');
const router = express.Router()
const Authentication = require('../middleware/varifyJwt')
const { sendMessage,allMessages } = require('../controllers/messageControllers')

router.post('/',Authentication.verifyToken,sendMessage)
router.get('/:chatId',Authentication.verifyToken,allMessages)




module.exports = router;