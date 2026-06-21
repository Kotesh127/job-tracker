import axios from "axios";

const API = axios.create({
  baseURL: "https://job-tracker-knhx.onrender.com/api",
});

export default API;