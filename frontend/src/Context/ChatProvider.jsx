import { createContext, useContext,useState,useEffect } from 'react'
import axios from '../Api/HrAxios'

const ChatContext = createContext();

const ChatProvider = ({children})=>{

    const [selectedChat, setSelectedChat] = useState();
     const [hrInfo, setHrInfo] = useState(null);
     const [userInfo, setUserInfo] = useState(null) 
    const [notification, setNotification] = useState([]);
     const [chats, setChats] = useState();
     useEffect(() => {

      if(localStorage.getItem('hrjwt')){

        axios.get('/hr/getHrInfo').then((response)=>{
          const hrInfos = response.data.data;
          setHrInfo(hrInfos)
        }).catch((error)=>{
          console.log(error)
          setHrInfo(null)
        })
      }

      if(localStorage.getItem('employeejwt')){

        axios.get('/employee/getUserInfo').then((response)=>{
          const userInfos = response.data.data;
          setUserInfo(userInfos)
        }).catch((error)=>{
          setUserInfo(null)
        })
      }
     }, []);

     useEffect(() => {
      console.log("Nazim  "+selectedChat)
     }, [selectedChat]);
     
    return(

        <ChatContext.Provider
         value={{
            selectedChat,
            setSelectedChat,
            hrInfo,
            setHrInfo,
            notification,
            setNotification,
            chats,
            setChats,
            userInfo,
          }}
          >
            {children}
            </ChatContext.Provider>
    );
};

export const ChatState = ()=>{

   return useContext(ChatContext);
}


export default ChatProvider;