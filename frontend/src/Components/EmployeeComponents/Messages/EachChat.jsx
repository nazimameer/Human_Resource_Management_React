import React, { useEffect, useRef, useState } from "react";
import axios from "../../../Api/EmployeeAxios";
function EachChat({ socket, Chat, hrId, room, showChat }) {
  //getting all messages

  const [allMsg, SetAllMsg] = useState([]);
  const [allNewMessage, setAllNewMessage] = useState([{ data: [], type: "" }]);
  const [eachUser, setEachUser] = useState({});

  useEffect(() => {
    const data = {
      uid: hrId,
    };

    axios
      .post("/chat/getAllMessages", { data })
      .then((response) => {
        // const data = response.data.data.chat;
        const data = response.data.data.chat.message;

        if (data.length !== 0) {
          SetAllMsg(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hrId]);

  //

  //getting hr details
  useEffect(() => {
    axios.get(`/chat/fetchHrInfo/${hrId}`).then((response) => {
      const data = response.data.data;
      console.log(response);
      if (data) {
        setEachUser(data);
      }
    });
  }, [hrId]);

  //

  //scroll to bottom
  const chatWindowRef = useRef(null);
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [allNewMessage, chatWindowRef]);
  
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [allMsg, chatWindowRef]);

  //

  //recieved message handle

  useEffect(() => {
    socket.on("recieve-message", (data) => {
      const received = { data: data, type: "received" };
      setAllNewMessage((list) => [...list, received]);
    });
  }, [socket]);

  const [CurrentMessage, setCurrentMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();

    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    const formattedTime = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${ampm}`;

    if (CurrentMessage !== "") {
      const messageData = {
        room: room,
        userId: hrId,
        message: CurrentMessage,
        time: formattedTime,
      };

      await socket.emit("send-message", messageData);
      const sent = { data: messageData, type: "sent" };
      setAllNewMessage([...allNewMessage, sent]);

      //store to db
      const data = {
        message: CurrentMessage,
        room: room,
      };

      axios.post("/chat/storeMsg", data).then((response) => {
        console.log(response);
      });

      event.target.elements.message.value = "";
    }
  };
  const handleClick = () =>{
    showChat();
    socket.disconnect()
  }
  if (!Chat) return null;
  return (
    <>
      <section className="chat-area">
        <header className="flex items-center">
          <div className="back-icon text-2xl text-[#333] cursor-pointer" onClick={handleClick}>
            {" "}
            <i className="bx bx-left-arrow-alt"></i>
          </div>
          {eachUser && (
            <img
              src={eachUser.pic}
              alt=""
              className="mesImg h-[45px] w-[45px] rounded-[50%] object-cover"
            />
          )}
          <div className="details">
            <span className="text-[17px] font-medium">
              {eachUser.fullname} ( HR )
            </span>
            {/* <p className="text-sm">Active now</p> */}
          </div>
        </header>

        <div
          className="chat-box h-[466px] bg-[#f7f7f7] overflow-y-auto"
          ref={chatWindowRef}
        >
          {allMsg.length !== 0 &&
            allMsg.map((obj, i) => {
              if (obj.senderId !== hrId) {
                return (
                  <div className="chat outgoing flex" key={i}>
                    <div className="details ml-auto">
                      <p className="bg-[#333] text-[#fff]">
                        {obj.content}{" "}
                        <span className="text-[12px] text-[#67676a] ml-3 text-white">
                          {obj.time.replace(/^.*?,/, "").replace(/:\d+\s/, " ")}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="chat incoming flex items-end" key={i}>
                    <img
                      src={eachUser.pic}
                      alt=""
                      className="h-[35px] w-[35px] rounded-[50%] object-cover"
                    />
                    <div className="details ml-[10px] mr-auto">
                      <p className="bg-[#fff]">
                        {obj.content}{" "}
                        <span className="text-[12px] text-[#67676a] ml-3 ">
                          {obj.time.replace(/^.*?,/, "").replace(/:\d+\s/, " ")}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              }
            })}

          {allNewMessage
            .filter((obj) => obj.data.length !== 0 && obj.type !== "")
            .map((obj, i) => {
              if (obj.type === "received") {
                return (
                  <div className="chat incoming flex items-end" key={i}>
                    <img
                      src={eachUser.pic}
                      alt=""
                      className="h-[35px] w-[35px] rounded-[50%] object-cover"
                    />
                    <div className="details ml-[10px] mr-auto">
                      <p className="bg-[#fff]">
                        {obj.data.message}{" "}
                        <span className="text-[12px] text-[#67676a] ml-3">
                          {obj.data.time}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="chat outgoing flex" key={i}>
                    <div className="details ml-auto">
                      <p className="bg-[#333] text-[#fff]">
                        {obj.data.message}{" "}
                        <span className="text-[12px] text-[#67676a] ml-3 text-white">
                          {obj.data.time}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </div>

        <form className="text-area flex justify-between" onSubmit={sendMessage}>
          <input
            type="text"
            name="message"
            placeholder="Type a message here..."
            className="h-[45px] text-[17px]  outline-none"
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <button
            type="submit"
            className="w-[55px] border-none outline-none bg-[#333] text-[#fff] text-[19px] cursor-pointer"
          >
            <i className="bx bx-paper-plane"></i>
          </button>
        </form>
      </section>
    </>
  );
}

export default EachChat;
