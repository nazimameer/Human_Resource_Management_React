import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Api/EmployeeAxios'
import {message} from 'antd'

export default function BlockedorNot({ children }) {
  const Navigate = useNavigate();

  useEffect(() => {
    axios.post('/employee/checkBlocked').then((response)=>{
        if(response.status === 200){
            return;
        }
    }).catch((error)=>{
        console.log(error)
        Navigate('/employee/login')
        message.error("YOU ARE BLOCKED", [2]);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

