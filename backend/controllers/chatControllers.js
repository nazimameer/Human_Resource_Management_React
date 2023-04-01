const Chat = require("../models/chatModel");
const employeeModel = require("../models/employeeModel");
const hrModel = require("../models/hrModel");

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
      Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
        .populate("employee", "-password")
        .populate("groupAdmin", "-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1 })
        .then(async (results) => {
          results = await employeeModel.populate(results, {
            path: "latestMessage",
            select: "fullnam pic email",
          });
        });
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  },
};
