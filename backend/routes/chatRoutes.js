const express = require('express');
const router = express.Router()
const Authentication = require('../middleware/varifyJwt')
const { accessChat, fetchHrInfo } = require('../controllers/chatControllers')
const { fetchChats } = require('../controllers/chatControllers')
const { fetchUserInfo } = require('../controllers/chatControllers')
const { storeMsg } = require('../controllers/chatControllers')

// router.post('/',Authentication.verifyToken,accessChat);
router.post('/getAllMessages',Authentication.verifyToken,fetchChats);
router.get('/getUserInfo/:id',Authentication.verifyToken,fetchUserInfo)
router.post('/storeMsg',Authentication.verifyToken,storeMsg);
router.get('/fetchHrInfo/:id',Authentication.verifyToken,fetchHrInfo)
// router.post('/group',Authentication.verifyToken,createGroup);
// router.put('/rename',Authentication.verifyToken,renameGroup);
// router.put('/groupremove',Authentication.verifyToken, removeFromGroup);
// router.put('/groupadd',Authentication.verifyToken,accessChat);






module.exports = router;
