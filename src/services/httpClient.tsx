import axios from "axios";

type headerType = {
  "Content-Type": string;
  userId?: number;
  userRoleId?: number;
};

const getHeaders = (): headerType => {
  let currentUser: string | null = localStorage.getItem("currentUser");
  let currentUserObject: currentUserType;
  let header: headerType;
  if (typeof currentUser === "string") {
    currentUserObject = JSON.parse(currentUser);
    header = {
      "Content-Type": "application/json",
      userId: Number(currentUserObject.userId),
      userRoleId: Number(currentUserObject.userId),
    };
    return header;
  } else {
    header = {
      "Content-Type": "application/json",
    };
    return header;
  }
};

const devBackendUrl = import.meta.env.VITE_DEVELOPMENT_BACKEND_URL;
export const backendUrl = axios.create({
  baseURL: devBackendUrl,
  headers: getHeaders(),
  withCredentials: true,
});
