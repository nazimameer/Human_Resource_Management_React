import axios from "../../../Api/EmployeeAxios";
import React, { useState, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [proDetails, setProDetails] = useState({});
  const [skills, setSkills] = useState([]);
  const [isLength, setIsLength] = useState(false);
  const [hLength, setHlength] = useState(false);
  const [hobbies, setHobbies] = useState([]);
  useEffect(() => {
    axios.get("/employee/profile").then((response) => {
      const details = response.data.profile;
      setProDetails(details);
      axios
        .get("/employee/skills")
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.skills;
            const datas = data[0].skills;
            if (datas.length !== 0) {
              setSkills(datas);
              setIsLength(true);
            } else {
              setIsLength(false);
            }
          }

          axios.get("/employee/hobbies").then((response) => {
            const data = response.data.hobbies;
            const datas = data[0].hobbies;
            if (datas.length !== 0) {
              setHobbies(datas);
              setHlength(true);
            } else {
              setHlength(false);
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, []);
  const [addSkill, setAddSkill] = useState(false);
  const [addHobbies, setAddHobbies] = useState(false);
  const [skillinput, setSkillinput] = useState("");
  const [hobbieInput, setHobbieInput] = useState("");
  const handleSkillChange = (event) => {
    const value = event.target.value;
    setSkillinput(value);
    console.log(skillinput);
  };
  const removeSkill = (obj) => {
    const value = obj;

    axios
      .post("/employee/removeskill", { value })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get("/employee/skills")
            .then((response) => {
              if (response.status === 200) {
                const data = response.data.skills;
                const datas = data[0].skills;
                if (datas.length !== 0) {
                  setSkills(datas);
                  setIsLength(true);
                } else {
                  setIsLength(false);
                }
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeHobbie = (obj)=>{
    const value = obj;
    axios.post('/employee/removeHobbie',{value}).then((response)=>{
        if(response.status === 200){
          axios.get("/employee/hobbies").then((response) => {
            const data = response.data.hobbies;
            const datas = data[0].hobbies;
            if (datas.length !== 0) {
              setHobbies(datas);
              setHlength(true);
            } else {
              setHlength(false);
            }
          }).catch((error)=>{
            console.log(error)
          })
        }
    })
  }


  const addskills = (event) => {
    event.preventDefault();
    axios.post("/employee/addskills", { data: skillinput }).then((response) => {
      if (response.status === 200) {
        setAddSkill(false);
        axios.get("/employee/skills").then((response) => {
          const data = response.data.skills;
          const datas = data[0].skills;
          if (datas) {
            setSkills(datas);
            setIsLength(true);
          } else {
            setIsLength(false);
          }
        });
      }
    });
  };
  const handleHobbieChange = (event) => {
    const value = event.target.value;
    setHobbieInput(value);
    console.log(hobbieInput);
  };
  const addHobbie = (event) => {
    event.preventDefault();
    axios
      .post("/employee/addHobbie", { data: hobbieInput })
      .then((response) => {
        if(response.status === 200){
          setAddHobbies(false)
          
          axios.get("/employee/hobbies").then((response) => {
            const data = response.data.hobbies;
            const datas = data[0].hobbies;
            if (datas.length !== 0) {
              setHobbies(datas);
              setHlength(true);
            } else {
              setHlength(false);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <main className="bg-slate-900">
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-6">
          <div className="col-span-full mb-5 xl:mb-0">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a
                    href="/"
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <svg
                      className="w-5 h-5 mr-2.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="/"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2"
                    >
                      Users
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span
                      className="ml-1 text-sm font-medium text-gray-400 md:ml-2"
                      aria-current="page"
                    >
                      Profile
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Profile
            </h1>
          </div>

          <div className="col-span-full xl:col-auto">
            <div className="bg-white shadow-md shadow-gray-200 rounded-2xl p-4 mb-6">
              <div className="sm:flex xl:block sm:space-x-4 xl:space-x-0">
                <img
                  className="mb-2 w-20 h-20 rounded-2xl shadow-md shadow-gray-300"
                  src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/users/jese-leos-2x.png"
                  alt="Jese portrait"
                />
                <div>
                  <h2 className="text-xl font-bold">{proDetails.fullname}</h2>
                  <ul className="mt-2 space-y-1">
                    <li className="flex items-center text-sm font-normal text-gray-500">
                      <svg
                        className="mr-2 w-4 h-4 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                      </svg>
                      {proDetails.position}
                    </li>
                    <li className="flex items-center text-sm font-normal text-gray-500">
                      {proDetails.role}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4 sm:flex xl:block">
                <div className="sm:flex-1">
                  <address className="text-sm not-italic font-normal text-gray-500">
                    <div className="mt-4">Email adress</div>
                    <a
                      className="text-sm font-medium text-gray-900"
                      href="mailto:webmaster@flowbite.com"
                    >
                      {proDetails.email}
                    </a>
                    <div className="mt-4">Place</div>
                    <div className="mb-2 text-sm font-medium text-gray-900">
                      {proDetails.place}
                    </div>
                    <div className="mt-4">Phone number</div>
                    <div className="mb-2 text-sm font-medium text-gray-900">
                      {proDetails.phone}
                    </div>
                  </address>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md shadow-gray-200 rounded-2xl p-4 mb-6">
              <div className="flow-root">
                <div className="flex justify-between ">
                  <h3 className="text-xl font-bold">Skills</h3>

                  {addSkill ? (
                    <div>
                      <form action="">
                        <input
                          type="text"
                          className="w-32 mx-3 pl-3 bg-slate-200 rounded text-sm p-2"
                          onChange={handleSkillChange}
                        />
                        <button type="submit" onClick={addskills}>
                          {" "}
                          Add{" "}
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          setAddSkill(true);
                        }}
                      >
                        {" "}
                        Add{" "}
                      </button>
                    </div>
                  )}
                </div>
                <ul className="flex flex-wrap mt-4">
                  {isLength ? (
                    skills.map((obj, index) => {
                      return (
                        <li
                          className="bg-gradient-to-br from-green-500 to-green-700 text-xs font-bold uppercase text-white px-3 py-1.5 rounded-md mb-2 mr-2"
                          key={index}
                          onDoubleClick={() => removeSkill(obj)}
                        >
                          {obj}
                        </li>
                      );
                    })
                  ) : (
                    <li className="bg-gradient-to-br  text-xs font-bold uppercase text-black px-3 py-1.5 rounded-md mb-2 mr-2">
                      No Skills Provided
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="bg-white shadow-md shadow-gray-200 rounded-2xl p-4 mb-6">
              <div className="flow-root">
                <div className="flex justify-between">
                  <h3 className="text-xl font-bold">Hobbies</h3>
                  {addHobbies ? (
                    <div>
                      <form action="">
                        <input
                          type="text"
                          className="w-32 bg-slate-200 rounded mx-3 pl-3 p-1"
                          onChange={handleHobbieChange}
                        />
                        <button type="submit" onClick={addHobbie}>
                          Add
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => {
                          setAddHobbies(true);
                        }}
                      >
                        {" "}
                        Add
                      </button>
                    </div>
                  )}
                </div>
                <ul className="flex flex-wrap mt-4">
                  {hLength ? (
                    hobbies.map((obj, index) => {
                      return (
                        <li key={index} onDoubleClick={() => removeHobbie(obj)} className="bg-gradient-to-br from-sky-400 to-sky-600 text-xs font-bold uppercase text-white px-3 py-1.5 rounded-md mb-2 mr-2">
                          {obj}
                        </li>
                      );
                    })
                  ) : (
                    <li className="bg-gradient-to-br  text-xs font-bold uppercase text-black px-3 py-1.5 rounded-md mb-2 mr-2">
                      No Hobbies Provided
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="bg-white shadow-md shadow-gray-200 rounded-2xl p-4 mb-6">
              <h3 className="mb-4 text-xl font-bold">General information</h3>
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-lg font-medium text-gray-900">
                    About me
                  </dt>
                  <dd className="mt-1 space-y-3 max-w-prose text-sm text-gray-500">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Education
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    Plus Two
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Work History
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    Google, Apple
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Join Date
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    12-09-2021
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Languages
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    English
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Position
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    Full Stack Developer
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Role</dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    Tech Team Lead
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Department
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    Information Technology
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Birthday
                  </dt>
                  <dd className="text-sm font-semibold text-gray-900">
                    15-08-1990
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
