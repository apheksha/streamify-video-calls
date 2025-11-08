import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

export const axiosInstance = axios.create({
  baseURL: "https://streamify-video-calls-lg9u.vercel.app/api",
  withCredentials: true, // send cookies with the request
});
