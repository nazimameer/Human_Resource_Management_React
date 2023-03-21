import React, { useRef, useState,useEffect } from "react";
import Webcam from "react-webcam";
import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";
import axios from "../../../Api/EmployeeAxios";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

function CheckIn() {
  const Navigate = useNavigate();
  useEffect(()=>{
    axios.get('/employee/homeInfo').then((response)=>{
      const data = response.data.data;
      setUserInfo(data)
    })
  },[])

  useEffect(() => {
    axios.post('/employee/verifyCheckIn').then((response)=>{
      if(response.status === 200){
        Navigate('/employee/home')
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  const [userInfo, setUserInfo] = useState({});
  const [webcamLoading, setWebcamLoading] = useState(true);
  const [captured, setCaptured] = useState(true);
  const webcamRef = useRef(null);
  const [image, SetImage] = useState(null);
  const [cTime, setcTime] = useState('');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot('');
    SetImage(imageSrc);
    setCaptured(false);
  };

  const retake = () => {
    setWebcamLoading(true)
    SetImage(null);
    setCaptured(true);
  };
  const headers = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  const uploadImg = () => {
    const file = dataURLtoFile(image, "image.jpg");
    const formData = new FormData();
    formData.append("image", file);
    axios.post("/employee/attendance", formData, headers).then((response) => {
      if(response.status === 200){
        Navigate('/employee/home')
      }else{

      }
    });
  };
  const handleWebcamLoading = () => {
    setWebcamLoading(false);
  };


  const UpdateTime = () => {
    const times = new Date().toLocaleTimeString();
    setcTime(times);
  }

  setInterval(UpdateTime,1000);
  return (
    <div className="mt-20  flex justify-center items-center bg-slate-900">
      {captured && (
        <div className="sm:w-4/5 md:3/4 flex justify-center items-center">
          <div class="max-w-full px-3 lg:flex-0 lg:w-10/12 mb-10">
            <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl  rounded-2xl bg-clip-border">
              <div class="flex items-center px-6 py-4 border-b border-solid rounded-t-2xl border-b-slate-100">
                <div class="flex items-center">
                  <a href="/">
                    <img
                      src="../images/adminlogo.jpeg"
                      alt="pge"
                      class="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all object-cover duration-200 ease-in-out rounded-xl"
                    />
                  </a>
                
                  <div class="mx-4">
                    <a href="/" class="text-sm leading-normal text-slate-700 ">
                     {userInfo.fullname}
                    </a>
                    <small class="block text-slate-500">#{userInfo.UID}</small>
                  </div>

                </div>
              </div>
              <div class="flex-auto p-6 justify-center items-center">
                <div className="flex justify-center items-center">
                  {webcamLoading && (
                    <div class="flex items-center justify-center ml-80">
                      <div
                        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  )}
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    onLoadedData={handleWebcamLoading}
                    screenshotFormat="image/jpeg"
                    class="h-auto max-w-full shadow-3xl rounded-xl"
                  />
                </div>
                <div class="flex flex-wrap items-center px-2 mt-6 mb-2 -mx-3">
                  <div class="max-w-full px-3 sm:flex-0 shrink-0 w-6/12">
                    <div class="flex">
                      <Button
                        onClick={capture}
                        className="bg-white"
                        variant="outlined"
                      >
                        Check In
                      </Button>
                    </div>
                  </div>
                  <div class=" max-w-full px-3 sm:flex-0 shrink-0 sm:block w-6/12 ">
                    <div class="flex items-end justify-end ">
                      <div class="flex items-center ">
                        <Link to={'/employee/applications'}>
                        <Button variant="contained" endIcon={<SendIcon />}>
                          Take a Leave
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr class="w-full h-px max-w-full px-3 my-4  bg-gradient-to-r from-transparent via-black/40 to-transparent shrink-0" />
                </div>
                <div class="mb-1">
                  <div class="flex">
                    <div class="ml-4 grow">
                      <h5 class="mt-0 mb-2 ">
                        {" "}
                        <span className="font-medium">Time :</span>{" "}
                        <span className="text-green-600">{cTime} </span>{" "}
                      </h5>
                      <h5 class="mt-0 mb-2 ">
                        {" "}
                        <span className="font-medium"> Status :</span>{" "}
                        <span className="text-green-600">
                          You are at the right time{" "}
                        </span>{" "}
                      </h5>
                      <p class="text-sm leading-normal "></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {image && (
        <div className="sm:w-4/5 flex justify-center items-center">
          <div class="max-w-full px-3 lg:flex-0 lg:w-10/12 mb-10">
            <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-xl  rounded-2xl bg-clip-border">
              <div class="flex items-center px-6 py-4 border-b border-solid rounded-t-2xl border-b-slate-100">
                <div class="flex items-center">
                  <a href="/">
                    <img
                      src="../images/adminlogo.jpeg"
                      alt="pge"
                      class="inline-flex items-center justify-center w-12 h-12 text-base text-white transition-all object-cover duration-200 ease-in-out rounded-xl"
                    />
                  </a>
                  <div class="mx-4">
                    <a href="/" class="text-sm leading-normal text-slate-700 ">
                      {userInfo.fullname}
                    </a>
                    <small class="block text-slate-500">#{userInfo.UID}</small>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-6">
                <div className="flex justify-center items-center">
                  <img
                    src={image}
                    alt="eeting"
                    class="h-auto max-w-full shadow-3xl rounded-xl"
                  />
                </div>
                <div class="flex flex-wrap items-center px-2 mt-6 mb-2 -mx-3">
                  <div class="max-w-full px-3 sm:flex-0 shrink-0 w-6/12">
                    <div class="flex">
                      <Button
                        onClick={retake}
                        className="bg-white"
                        variant="outlined"
                      >
                        ReTake
                      </Button>
                    </div>
                  </div>
                  <div class=" max-w-full px-3 sm:flex-0 shrink-0 sm:block w-6/12 ">
                    <div class="flex items-end justify-end ">
                      <div class="flex items-center ">
                        <Link to={'/employee/home'}>
                        <Button
                          onClick={uploadImg}
                          variant="contained"
                          endIcon={<SendIcon />}
                        >
                          Send
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr class="w-full h-px max-w-full px-3 my-4  bg-gradient-to-r from-transparent via-black/40 to-transparent shrink-0" />
                </div>
                <div class="mb-1">
                  <div class="flex">
                    <div class="ml-4 grow">
                      <h5 class="mt-0 mb-2 ">
                        {" "}
                        <span className="font-medium">Time :</span>{" "}
                        <span className="text-green-600">{cTime} </span>{" "}
                      </h5>
                      <h5 class="mt-0 mb-2 ">
                        {" "}
                        <span className="font-medium"> Status :</span>{" "}
                        <span className="text-green-600">
                          You are at the right time{" "}
                        </span>{" "}
                      </h5>
                      <p class="text-sm leading-normal "></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckIn;
