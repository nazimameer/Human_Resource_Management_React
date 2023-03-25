import React, { useState, useEffect } from "react";
import Attendances from "./Attendances";
import Calender from "./Calender";
import Activities from "./Activities";
import TopBar from "./AttTopBar";
import Departments from './Departments';
import Footer from "./Footer";
import axios from "../../../Api/HrAxios";
function Dashboard() {
  const [attendance, setAttendace] = useState([]);
  const [today, setToday] = useState("");
  const [attLength, setAttLength] = useState(false);
  const [Present,SetPresent] = useState(false);
  const [Absent,SetAbsent] = useState(false);
  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setToday(today);
    axios
      .get("/hr/getAttendance")
      .then((response) => {
        const data = response.data.attendance;
        if (data.length !== 0) {
          setAttendace(data);
          setAttLength(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setAttLength(false);
      });
  }, []);
  const handleConfirm = (uid) => {
    const data = uid;
    axios.post("/hr/confirmPresent", { data }).then((response) => {
      if (response.status === 200) {
        axios.get("/hr/getAttendance").then((response) => {
          const data = response.data.attendance;
          if (data.length !== 0) {
            setAttendace(data);
            setAttLength(true);
          }
        }).catch((error)=>{
            console.log(error)
            setAttLength(false)
        })
      }
    });
  };

  const handleAbsent = (uid) => {
    const data = uid;
    axios.post("/hr/confirmAbsent", { data }).then((response) => {
      if (response.status === 200) {
        axios.get("/hr/getAttendance").then((response) => {
          const data = response.data.attendance;
          if (data.length !== 0) {
            setAttendace(data);
            setAttLength(true);
          } 
        }).catch((error)=>{
            setAttLength(false)
            console.log(error)
        })
      }
    });
  };
  const getPendings = () => {
    SetAbsent(false)
    SetPresent(false)
    axios
      .get("/hr/getAttendance")
      .then((response) => {
        const data = response.data.attendance;
        if (data.length !== 0) {
          setAttendace(data);
          setAttLength(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setAttLength(false);
      });
  };

  const getPresent = () => {
    SetAbsent(false)
    axios
      .get("/hr/getPresent")
      .then((response) => {
        console.log(response.data.attendance);
        const data = response.data.attendance;

        if (data.length !== 0) {
          const datas = data.reverse();
          setAttendace(datas);
          SetPresent(true)
          setAttLength(true);
        } else {
          setAttLength(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setAttLength(false);
      });
  };

  const getAbsent = () => {
    SetPresent(false)
    axios
      .get("/hr/getAbsent")
      .then((response) => {
        console.log(response.data.attendance);
        const data = response.data.attendance;
        if (data.length !== 0) {
          const datas = data.reverse();
          setAttendace(datas);
          SetAbsent(true);
          setAttLength(true);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
        setAttLength(false);
      });
  };
  return (
    <div className="mt-20 bg-slate-900">
      <div className="calenderbar flex w-full h-2/3">
      <Calender/>
      <Activities/>
      </div>
      <div>

      <TopBar
        today={today}
        getPendings={getPendings}
        getAbsent={getAbsent}
        getPresent={getPresent}
      />
      <Attendances
        attendance={attendance}
        attLength={attLength}
        handleConfirm={handleConfirm}
        handleAbsent={handleAbsent}
        Present={Present}
        Absent={Absent}
      />
      </div>


      <div className="mt-16">
    {/* <AssignTask/> */}
    <Departments/>
      </div>

      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default Dashboard;
