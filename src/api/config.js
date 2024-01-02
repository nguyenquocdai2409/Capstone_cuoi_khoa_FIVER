import axios from "axios";
import { USER_INFO } from "../redux/constant/user";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NCIsIkhldEhhblN0cmluZyI6IjIyLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNjMzNjAwMDAwMCIsIm5iZiI6MTY4NzcxMjQwMCwiZXhwIjoxNzE2NDgzNjAwfQ.argi0m1LRAePDxZ6Nb4AX25fZ9gclDCUAA5oW84-TsQ";

export const http = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/",
  headers: {
    tokenCybersoft: TOKEN,
  },
});

http.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers,
    Authorization:
      "Bearrer" + JSON.parse(localStorage.getItem(USER_INFO))?.accessToken,
  };
  return req;
});
