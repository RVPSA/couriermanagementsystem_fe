import axios from "axios";

export const baseURL = axios.create({
  baseURL: "https://localhost:44346",
  headers: {
    "Content-Type": "application/json",
  },
});
