import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-production-7139.up.railway.app",
});

export default API;