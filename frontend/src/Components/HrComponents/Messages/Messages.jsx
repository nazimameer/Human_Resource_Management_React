import React, { useEffect, useState } from "react";
import axios from "../../../Api/HrAxios";
import "./Messages.css";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessages, setNewMessages] = useState([]);
  // useEffect(() => {
  //     axios.get('/api/chat').then((response)=>{
  //         const { data } = response;
  //         console.log(data)
  //         SetChats(data)
  //     })
  // }, []);
  return (
    <>
      <div className="body">
        <div className="wrapper bg-white w-[450px] mt-24 mb-6 mx-5 rounded-xl">
          <section className="users">
            <header className="flex items-center justify-between">
              <div className="conten flex">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="w-[50px] h-[50px] object-cover rounded-[50%]"
                />
                <div className="details ml-[15px]">
                  <span className="text-[18px] font-medium">Nazim ameer</span>
                  <p>Active now</p>
                </div>
              </div>
              <a href="/" className="logout bg-[#333] text-white">
                add
              </a>
            </header>
            <div className="search my-[20px] flex items-center justify-between relative">
              <span className="text">Select an user to start chat</span>
              <input
                type="text"
                placeholder="Enter name to search..."
                className="absolute h-[42px] outline-none"
              />
              <button className="h-[42px] w-[47px] border-none outline-none text-white bg-[#333] cursor-pointer">
                <i class="bx bx-search"></i>
              </button>
            </div>

            <div className="users-list max-h-[350px] overflow-y-auto">
              <a
                href="/"
                className="flex items-center justify-between pb-[20px] mb-[15px] pr-[15px]"
              >
                <div className="users-conten flex items-center">
                  <img
                    src="../images/adminlogo.jpeg"
                    alt=""
                    className="h-[40px] w-[40px] object-cover rounded-[50%]"
                  />
                  <div className="details ml-[15px]">
                    <span className="text-[18px] font-medium">Abdulla</span>
                    <p className="text-[#67676a]">This is text message</p>
                  </div>
                </div>
                <div className="status-dot  text-[12px] pr-[15px]">
                  <i class="bx bxs-circle"></i>
                </div>
              </a>
            </div>
          </section>
        </div>

        <div className="wrapper bg-white w-[450px] mt-24 mb-6 mx-5 rounded-xl">
          <section className="chat-area">
            <header className="flex items-center">
              <a href="/" className="back-icon text-2xl text-[#333]">
                {" "}
                <i class="bx bx-left-arrow-alt"></i>
              </a>
              <img
                src="../images/adminlogo.jpeg"
                alt=""
                className="mesImg h-[45px] w-[45px] rounded-[50%] object-cover"
              />
              <div className="details">
                <span className="text-[17px] font-medium">Coding Nepal</span>
                <p className="text-sm">Active now</p>
              </div>
            </header>

            <div className="chat-box h-[500px] bg-[#f7f7f7] overflow-y-auto">
              <div className="chat outgoing flex">
                <div className="details ml-auto">
                  <p className="bg-[#333] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repella
                  </p>
                </div>
              </div>

              <div className="chat incoming flex items-end">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="h-[35px] w-[35px] rounded-[50%] object-cover"
                />
                <div className="details ml-[10px] mr-auto">
                  <p className="bg-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repellat
                  </p>
                </div>
              </div>

              <div className="chat outgoing flex">
                <div className="details ml-auto">
                  <p className="bg-[#333] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repella
                  </p>
                </div>
              </div>

              <div className="chat incoming flex items-end">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="h-[35px] w-[35px] rounded-[50%] object-cover"
                />
                <div className="details ml-[10px] mr-auto">
                  <p className="bg-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repellat
                  </p>
                </div>
              </div>

              <div className="chat outgoing flex">
                <div className="details ml-auto">
                  <p className="bg-[#333] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repella
                  </p>
                </div>
              </div>

              <div className="chat incoming flex items-end">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="h-[35px] w-[35px] rounded-[50%] object-cover"
                />
                <div className="details ml-[10px] mr-auto">
                  <p className="bg-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repellat
                  </p>
                </div>
              </div>

              <div className="chat outgoing flex">
                <div className="details ml-auto">
                  <p className="bg-[#333] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repella
                  </p>
                </div>
              </div>

              <div className="chat incoming flex items-end">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="h-[35px] w-[35px] rounded-[50%] object-cover"
                />
                <div className="details ml-[10px] mr-auto">
                  <p className="bg-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repellat
                  </p>
                </div>
              </div>

              <div className="chat outgoing flex">
                <div className="details ml-auto">
                  <p className="bg-[#333] text-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repella
                  </p>
                </div>
              </div>

              <div className="chat incoming flex items-end">
                <img
                  src="../images/adminlogo.jpeg"
                  alt=""
                  className="h-[35px] w-[35px] rounded-[50%] object-cover"
                />
                <div className="details ml-[10px] mr-auto">
                  <p className="bg-[#fff]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi rem quae repellat
                  </p>
                </div>
              </div>
            </div>

            <form action="" className="text-area flex justify-between">
                <input type="text" placeholder="Type a message here..." className="h-[45px] text-[17px]  outline-none" />
                <button className="w-[55px] border-none outline-none bg-[#333] text-[#fff] text-[19px] cursor-pointer"><i class='bx bx-paper-plane'></i></button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default Messages;
