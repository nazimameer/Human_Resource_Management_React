import React, { useEffect, useRef, useState } from "react";
import axios from "../../../Api/HrAxios";
import "./Messages.css";
import { io } from "socket.io-client";
import { ChatState } from "../../../Context/ChatProvider";
import { baseUrl } from "../../../Constants/Constants";
const socket = io("https://controlhub.online");
function Messages() {
  const { hrInfo } = ChatState();
  const [noRecent, setNoRecent] = useState(true);
  const [messages, setMessages] = useState([]);
  const [allMsg, SetAllMsg] = useState([]);
  const [eachUser, setEachUser] = useState({});
  const [recieved, setRecieved] = useState([]);
  const [displayMsg, SetDisplayMsg] = useState(null);
  const [room, setRoom] = useState(null);

  const [allEmployees, setAllEmployees] = useState([]);
  const [hrDetails, setHrDetails] = useState({});
  const [isLength, setIsLength] = useState(false);
  const [allNewMessage, setAllNewMessage] = useState([{ text: "", type: "" }]);
  // socket.io connect
  socket.on("connect", () => {
    SetDisplayMsg(`socket connected id: ${socket.id}`);
  });

  socket.on("recieve-message", (message) => {
    setRecieved([...recieved, message]);
    const received = { text: message, type: "received" };
    setAllNewMessage([...allNewMessage, received]);
    setNoRecent(false);
  });
  const chatWindowRef = useRef(null);
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [recieved]);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [allMsg]);
  //join room

  const joinroom = () => {
    socket.emit("join-room", room, (message) => {
      SetDisplayMsg(`Joined in room : ${room}`);
    });
  };

  //

  useEffect(() => {
    joinroom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);
  useEffect(() => {
    axios.get("/hr/gethrDetails").then((response) => {
      const  data = response.data.doc;
      console.log(data)
      setHrDetails(data);
    });
    axios
      .get("/hr/getAllEmployees")
      .then((response) => {
        const { employees } = response.data;
        if (employees.length !== 0) {
          setAllEmployees(employees);
          setIsLength(true);
        }
      })
      .catch((error) => {
        setIsLength(false);
      });
  }, []);

  const handleSelect = (uid) => {
    fetchChat(uid);
    axios.get(`/chat/getUserInfo/${uid}`).then((response) => {
      const data = response.data.data;
      if (data) {
        setEachUser(data);
      }
    });
  };

  const fetchChat = (uid) => {
    console.log("fetching....");
    const data = {
      uid: uid,
    };
    axios
      .post("/chat/getAllMessages", { data })
      .then((response) => {
        const chatId = response.data.data.chatId;
        const data = response.data.data.chat.message;
        setRoom(chatId);

        console.log(data);
        if (data.length !== 0) {
          SetAllMsg(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(allMsg);
  }, [allMsg]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    setMessages([...messages, message]);
    const sent = { text: message, type: "sent" };
    setAllNewMessage([...allNewMessage, sent]);
    //send message

    socket.emit("send-message", message, room);

    //

    //save to db
    const data = {
      message: message,
      room: room,
    };

    axios.post("/chat/storeMsg", data).then((response) => {
      console.log(response);
    });

    //
    event.target.elements.message.value = "";
    setNoRecent(false);
  };

  return (
    <>
      <div className="body">
        <div className="wrapper bg-white w-[450px] mt-24 mb-6 mx-5 rounded-xl">
          <section className="users">
            <header className="flex items-center justify-between">
              <div className="conten flex">
                <img
                  src={hrDetails.pic}
                  alt=""
                  className="w-[50px] h-[50px] object-cover rounded-[50%]"
                />
                <div className="details ml-[15px]">
                  <span className="text-[18px] font-medium">{hrDetails.fullname}</span>
                  <p>Active now</p>
                </div>
              </div>
              <a href="/" className="logout bg-[#333] text-white">
                add
              </a>
            </header>
            <div className="search my-[20px] flex items-center justify-between relative">
              <span className="text">Select an</span>
              <input
                type="text"
                placeholder="Enter name to search..."
                className="absolute h-[42px] outline-none"
              />
              <button className="h-[42px] w-[47px] border-none outline-none text-white bg-[#333] cursor-pointer">
                <i className="bx bx-search"></i>
              </button>
            </div>

            <div className="users-list max-h-[390px] overflow-y-auto">
              {isLength
                ? allEmployees.map((obj, index) => {
                    return (
                      <div
                        className="flex items-center justify-between pb-[20px] mb-[15px] pr-[15px] cursor-pointer hover:bg-gray-100"
                        key={index}
                        onClick={() => handleSelect(obj._id)}
                      >
                        <div className="users-conten flex items-center">
                          <img
                            src={obj.pic}
                            alt=""
                            className="h-[40px] w-[40px] object-cover rounded-[50%]"
                          />
                          <div className="details ml-[15px]">
                            <span className="text-[16px] font-medium">
                              {obj.fullname}
                            </span>
                            <p className="text-[#67676a] text-sm">
                              This is text message
                            </p>
                          </div>
                        </div>
                        <div className="status-dot  text-[12px] pr-[15px]">
                          <i className="bx bxs-circle"></i>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </section>
        </div>

        <div className="wrapper bg-white w-[980px] mt-24 mb-6 mx-5 rounded-xl">
          <section className="chat-area">
            <header className="flex items-center">
              <a href="/" className="back-icon text-2xl text-[#333]">
                {" "}
                <i className="bx bx-left-arrow-alt"></i>
              </a>
              {eachUser && (
                <img
                  src={eachUser.pic}
                  alt=""
                  className="mesImg h-[45px] w-[45px] rounded-[50%] object-cover"
                />
              )}
              <div className="details">
                <span className="text-[17px] font-medium">
                  {eachUser.fullname}
                </span>
                <p className="text-sm">Active now</p>
              </div>
            </header>

            <div
              className="chat-box h-[466px] bg-[#f7f7f7] overflow-y-auto "
              ref={chatWindowRef}
            >
              <div className="w-full h-6 flex justify-center">{displayMsg}</div>

              {noRecent ? (
                <div className="flex justify-center">
                  <div className="bg-slate-300 p-2 rounded-xl text-[15px]">
                    No Recent Messages
                  </div>
                </div>
              ) : (
                ""
              )}

              {allMsg.length !== 0 &&
                allMsg.map((obj, i) => {
                  if (obj.senderId === hrInfo._id) {
                    return (
                      <div className="chat outgoing flex" key={i}>
                        <div className="details ml-auto">
                          <p className="bg-[#333] text-[#fff]">{obj.content}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="chat incoming flex items-end" key={i}>
                        <img
                          src="../images/adminlogo.jpeg"
                          alt=""
                          className="h-[35px] w-[35px] rounded-[50%] object-cover"
                        />
                        <div className="details ml-[10px] mr-auto">
                          <p className="bg-[#fff]">{obj.content}</p>
                        </div>
                      </div>
                    );
                  }
                })}

              {allNewMessage
                .filter((obj) => obj.text !== "" && obj.type !== "")
                .map((obj) => {
                  if (obj.type === "received") {
                    return (
                      <div className="chat incoming flex items-end">
                        <img
                          src="../images/adminlogo.jpeg"
                          alt=""
                          className="h-[35px] w-[35px] rounded-[50%] object-cover"
                        />
                        <div className="details ml-[10px] mr-auto">
                          <p className="bg-[#fff]">{obj.text}</p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="chat outgoing flex">
                        <div className="details ml-auto">
                          <p className="bg-[#333] text-[#fff]">{obj.text}</p>
                        </div>
                      </div>
                    );
                  }
                })}

              
            </div>

            <form
              className="text-area flex justify-between"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="message"
                placeholder="Type a message here..."
                className="h-[45px] text-[17px]  outline-none"
              />
              <button
                type="submit"
                className="w-[55px] border-none outline-none bg-[#333] text-[#fff] text-[19px] cursor-pointer"
              >
                <i className="bx bx-paper-plane"></i>
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Messages;
