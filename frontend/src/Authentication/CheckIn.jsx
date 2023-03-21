import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../Api/EmployeeAxios'

export default function VerifyCheckIn({ children }) {
  const Navigate = useNavigate();

  useEffect(() => {
    axios.post('/employee/verifyCheckIn').then((response)=>{
        if(response.status === 200){
            Navigate('/employee/home')
        }
    }).catch((error)=>{
        console.log(error)
        Navigate('/employee/checkin')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
