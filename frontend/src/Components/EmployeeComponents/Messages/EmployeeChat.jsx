import React, { useEffect, useState } from "react";
import axios from "../../../Api/EmployeeAxios";

import io from "socket.io-client";
import "./Messages.css";
import EachChat from "./EachChat";

const socket = io.connect("https://api.controlhub.online");
// https://api.controlhub.online
function EmployeeChat() {
  //getting employee details
  const [EmployeeDetails, setEmployeeDetails] = useState({});
  useEffect(() => {
    axios.get("/employee/getEmployeename").then((response) => {
      const doc = response.data.data;
      setEmployeeDetails(doc);
    });
  }, []);

  //
  //getting all Hrs

  const [allHr, setAllHr] = useState([]);
  const [isLength, setIsLength] = useState(false);
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    axios
      .get("/employee/getAllhr")
      .then((response) => {
        const hr = response.data.data;
        if (hr.length !== 0) {
          setAllHr(hr);
          setIsLength(true);
        }
      })
      .catch((error) => {
        setIsLength(false);
      });
  }, []);
  //

  //join each room

  const [hrId, setHrId] = useState("");
  const [room, setRoom] = useState("");
  const [Chat, setChat] = useState(false);
  const joinRoom = (UID) => {
    setShowChat(true);

    setHrId(UID);
    const data = {
      uid: UID,
    };
    axios
      .post("/chat/getAllMessages", { data })
      .then((response) => {
        const chatId = response.data.data.chatId;
        if (chatId) {
          setRoom(chatId);
          console.log(chatId);
        } else {
          setRoom("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (room !== "") {
      socket.emit("join_room", room);
      setChat(true);
      setShowChat(true);
    } else {
      setChat(false);
    }
  }, [room]);

  //
  return (
    <>
      <div className="body">
        {!showChat ? (
          <div className="wrapper bg-white w-[450px] mt-24 mb-6 mx-5 rounded-xl h-[84vh]">
            <section className="users">
              <header className="flex items-center justify-between">
                <div className="conten flex">
                  <img
                    src={EmployeeDetails.pic}
                    alt=""
                    className="w-[50px] h-[50px] object-cover rounded-[50%]"
                  />
                  <div className="details ml-[15px]">
                    <span className="text-[18px] font-medium">
                      {EmployeeDetails.fullname}
                    </span>
                    <p>Active now</p>
                  </div>
                </div>
                {/* <a href="/" className="logout bg-[#333] text-white">
                add
              </a> */}
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
                  ? allHr.map((obj, i) => {
                      return (
                        <div
                          className="flex items-center justify-between pb-[20px] mb-[15px] pr-[15px] cursor-pointer hover:bg-gray-100"
                          key={i}
                          onClick={() => joinRoom(obj._id)}
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
        ) : (
          <div className="wrapper bg-white w-[980px] mt-24 mb-6 mx-10 rounded-xl">
            <EachChat
              socket={socket}
              Chat={Chat}
              hrId={hrId}
              room={room}
              showChat={() => setShowChat(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default EmployeeChat;
