import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "../../../Api/EmployeeAxios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
function EmployeeLogin() {
  const data = [
    {
      label: "HR",
      value: "HR",
    },
    {
      label: "Employee",
      value: "Employee",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("employeejwt")) {
      axios
        .post("/employee/checkBlocked")
        .then((response) => {
          if (response.status === 200) {
            axios.post("/employee/LoginPageAuth").then((response) => {
              if (response.status === 200) {
                message.success("Logged In Successfully");
                Navigate("/employee/home");
              }
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (localStorage.getItem("hrjwt")) {
      console.log("Hai");
      axios.post("/hr/LoginPageAuth").then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          Navigate("/hr/home");
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username === "") {
      message.error("Username Required");
      return;
    } else if (formData.password === "") {
      message.error("Password Required");
      return;
    }

    if (role === "HR") {
      axios
        .post("/hr/login", formData)
        .then((response) => {
          if (response.data) {
            const token = response.data.token; //recieved token to a variable
            localStorage.setItem("hrjwt", token); // store the token into local storage

            Navigate("/hr/home"); //navigate to home page
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 400) {
            const msg = error.response.data.error;
            message.error(msg);
          } else if (error.response.status === 401) {
            const msg = error.response.data.error;
            message.error(msg);
          }
        });
    } else if (role === "Employee") {
      axios
        .post("/employee/login", formData)
        .then((response) => {
          if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("employeejwt", token);
            Navigate("/employee/home");
          }
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status === 400) {
            const msg = error.response.data.error;
            message.error(msg);
          } else if (error.response.status === 401) {
            const msg = error.response.data.error;
            message.error(msg);
          }
        });
    }
  };
  const [role, setRole] = useState("Employee");

  useEffect(() => {
    console.log(role);
  }, [role]);

  return (
    <div className="py-[16%] flex w-full justify-center items-center">
      <Tabs
        value={role}
        className="w-full bg-white rounded-lg flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="black" className="my-3">
              Sign In
            </Typography>

            <TabsHeader
              className="bg-transparent"
              indicatorProps={{
                className: "bg-gray-900/10 shadow-none !text-gray-900",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="w-[200px]"
                  onClick={() => setRole(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  placeholder="Username"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
                <Input
                  type="password"
                  size="lg"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <Button className="mt-6" fullWidth type="submit">
                Register
              </Button>
            </form>
          </Card>
        </div>
      </Tabs>
    </div>
  );
}

export default EmployeeLogin;
