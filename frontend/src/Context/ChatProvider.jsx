import { createContext, useContext,useState,useEffect } from 'react'
import axios from '../Api/HrAxios'
import employeeAxios from '../Api/EmployeeAxios'

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
        })
      }

      
     }, []);

useEffect(() => {
  if(localStorage.getItem('employeejwt')){

    employeeAxios.get('/employee/getUserInfo').then((response)=>{
      const userIfos = response.data.data;
      setUserInfo(userIfos)
      
    })
  }
}, []);
     
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