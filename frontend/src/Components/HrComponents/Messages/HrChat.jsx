import React, { useEffect, useState } from "react";
import axios from "../../../Api/HrAxios";

import io from "socket.io-client";
import "./Messages.css";
import EachMessages from "./EachMessages";

const socket = io.connect("http://localhost:8000");
// https://controlhub.online
function HrChat() {
  const [hrDetails, setHrDetails] = useState({});
  const [userId, setUserId] = useState("");
  const [room, setRoom] = useState("");
  const [Chat, setChat] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Getting All Users

  const [allEmployees, setAllEmployees] = useState([]);
  const [isLength, setIsLength] = useState(false);
  useEffect(() => {
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
        console.log(error)
        setIsLength(false);
      });
  }, []);

  //

  // getting HR Details

  useEffect(() => {
    axios.get("/hr/gethrDetails").then((response) => {
      const data = response.data.doc;
      if (data) {
        setHrDetails(data);
      }
    });
  }, []);

  //

  //join each room
  const joinRoom = (UID) => {
    setShowChat(true)
    setUserId(UID);
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
      setShowChat(true)
    } else {
      setChat(false);
    }
  }, [room]);

  //
  return (
    <>
      <div className="body">
{!showChat ?(

  <div className="wrapper bg-white w-[450px] mt-24 mb-6 mx-10 rounded-xl h-[84vh]">
    <section className="users">
      <header className="flex items-center justify-between">
        <div className="conten flex">
          <img
            src={hrDetails.pic}
            alt=""
            className="w-[50px] h-[50px] object-cover rounded-[50%]"
          />
          <div className="details ml-[15px]">
            <span className="text-[18px] font-medium">
              {hrDetails.fullname} (HR)
            </span>
            {/* <p>Active now</p> */}
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
        {isLength ? (
          allEmployees.map((obj, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between pb-[20px] mb-[15px] pr-[15px] cursor-pointer hover:bg-gray-100"
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
        ) : (
          <div className="flex items-center justify-between pb-[20px] mb-[15px] pr-[15px] cursor-pointer hover:bg-gray-100">
            No Employees Available
          </div>
        )}
      </div>
    </section>
  </div>
 
)
        :
         (

          <div className="wrapper bg-white w-[980px] mt-24 mb-6 mx-5 rounded-xl">
            <EachMessages
              socket={socket}
              Chat={Chat}
              userId={userId}
              room={room}
              showChat={()=>setShowChat(false)}
            />
          </div>
         )
          }
        
      </div>
    </>
  );
}

export default HrChat;
