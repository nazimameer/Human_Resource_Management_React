import axios from "axios";

import { baseUrl } from "../Constants/Constants";
const HrInstance = axios.create({
  baseURL: baseUrl,
});

HrInstance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("hrjwt"); // taking token from local storage

    if (token) { // checking if token is present or not
      
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default HrInstance;
