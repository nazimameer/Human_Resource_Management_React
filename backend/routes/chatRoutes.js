const express = require('express');
const router = express.Router()
const Authentication = require('../middleware/varifyJwt')
const { accessChat } = require('../controllers/chatControllers')
const { fetchChats } = require('../controllers/chatControllers')

// router.post('/',Authentication.verifyToken,accessChat);
// router.get('/',Authentication.verifyToken,fetchChats);
// router.post('/group',Authentication.verifyToken,createGroup);
// router.put('/rename',Authentication.verifyToken,renameGroup);
// router.put('/groupremove',Authentication.verifyToken, removeFromGroup);
// router.put('/groupadd',Authentication.verifyToken,accessChat);






module.exports = router;
