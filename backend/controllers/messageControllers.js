const chatModel = require("../models/chatModel");
const employeeModel = require("../models/employeeModel");
const Message = require("../models/messageModal");

module.exports = {
  sendMessage: async (req, res) => {
    const { content, chatId } = req.body;
    const senderId = req.id;

    if (!content || !chatId) {
      console.log("Invalid data passed into request");
      return res.status(400);
    }

    let newMessage = {
      sender: senderId,
      content: content,
      chat: chatId,
    };

    try {
      let message = await Message.create(newMessage);

      message = await message.populate("sender", "fullname pic");
      message = await message.populate("sender", "fullname pic");
      message = await employeeModel.populate(message, {
        path: "chat.users",
        select: "fullname pic email",
      });

      await chatModel.findByIdAndUpdate(chatId, {
        latestMessage: message,
      });

      res.json(message);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  },

  allMessages: async (req, res) => {
    const chatId = req.params.id;
    try {
      const messages = await Message.find({ chat: chatId })
        .populate("sender", "fullname pic email")
        .populate("chat");

      res.json(messages);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  },
};
