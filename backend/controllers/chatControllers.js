const Chat = require("../models/chatModel");
const employeeModel = require("../models/employeeModel");
const hrModel = require("../models/hrModel");
const mongoose = require('mongoose');

module.exports = {
  accessChat: async (req, res) => {
    const userId = req.id;
    const toUserId = req.body._id;

    if (!userId) {
      res.status(400).json({ error: "id not provided" });
      return;
    }

    const user = await hrModel.findOne({
      _id: mongoose.Types.ObjectId(userId),
    });

    const { fullname } = user;

    const isChat = await Chat.find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: userId } } },
        { users: { $elemMatch: { $eq: toUserId } } },
      ],
    })
      .populate("employee", "-password")
      .populate("latestMessage");

    isChat = await employeeModel.populate(isChat, {
      path: "latestMessage.sender",
      select: "name pic email",
    });

    if (isChat.length > 0) {
      res.send(isChat[0]);
    } else {
      const chatData = {
        chatName: "sender",
        isGroupChat: false,
        users: [toUserId, userId],
      };

      try {
        const createdChat = await Chat.create(chatData);
        const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
          "employee",
          "-password"
        );

        res.status(200).send(FullChat);
      } catch (error) {
        res.status(400);
        throw new Error(error.message);
      }
    }
  },

  fetchChats: async (req, res) => {
    try {
      const data = req.body.data;
      console.log(data)
      if(data){
        const  uid1  = req.id;
        const { uid } = data;
        const chatId = uid1+uid;
        Chat.findOne({
          users:{$all:[ uid1, uid ]}
        }).then((doc)=>{
          if(doc){
            const data ={
              chat:doc,
              chatId:doc.chatId
            } 
            res.status(200).json({data})
          }else{
            console.log("NO DOC");
            Chat.create({
              chatId:chatId,
              users:[uid1, uid]
            }).then((newDoc)=>{
              if(newDoc){
                const data = {
                  chat:newDoc,
                  chatId:newDoc.chatId
                }
                res.status(200).json({data})
              }
            }).catch((error)=>{
              console.log(error)
              res.status(500).json({error:"Internal Server Error"})
            })
          } 
        }).catch((error)=>{
          console.log(error)
          res.status(500).json({error:"Internal Server Error"})
        })
      }
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  },


  fetchUserInfo:(req,res)=>{
    const id = req.params.id;
    const objId = mongoose.Types.ObjectId(id)
    console.log(objId)
    employeeModel.findOne({
      _id:objId
    }).then((doc)=>{
    console.log("doc : ", doc)

      if(doc){
        const data = doc
        res.status(200).json({data})
      }
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({error:"Internal Server Error"})
    })
  },

  fetchHrInfo:(req,res)=>{
    const id = req.params.id;
    const objId = mongoose.Types.ObjectId(id)
    console.log(objId)
    hrModel.findOne({
      _id:objId
    }).then((doc)=>{

      if(doc){
        const data = doc
        res.status(200).json({data})
      }
    }).catch((error)=>{
      console.log(error);
      res.status(500).json({error:"Internal Server Error"})
    })
  },

  storeMsg:(req,res)=>{
    const id = req.id;
    const data = req.body;
    const { message } = data;
    const { room } = data;

   const newMessage = {
    senderId: id, // Example sender ID
    content: message, // Example message content
    time: new Date().toLocaleString() // Current date and time
   }

   console.log(newMessage)

    Chat.updateOne(
      { chatId:room },
      { $push: { message: newMessage },
      $set:{latestMessage: newMessage.content }}
      ).then((doc)=>{
        if(doc){
          res.status(200).json({ success:true })
        }
      })
    },
};
