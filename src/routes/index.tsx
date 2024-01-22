import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../screens/login/Login";
import DefaultLayout from "./DefaultLayout";
import Maintaince from "../screens/maintaince/Maintaince";
import AddAdmin from "../screens/addAdmin/AddAdmin";

const Navigation = () => {
  const currentUser: string | null = localStorage.getItem("currentUser");

  let currentUserObject: currentUserType = {
    userName: "",
    userId: 0,
    userRoleId: 0,
  };

  if (typeof currentUser === "string") {
    currentUserObject = JSON.parse(currentUser);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route element={<DefaultLayout></DefaultLayout>}>
          {/* Admin */}
          {currentUserObject.userRoleId === 1 && (
            <>
              <Route
                path="/maintaince"
                element={<Maintaince></Maintaince>}
              ></Route>
              <Route path="/addAdmin" element={<AddAdmin></AddAdmin>}></Route>
            </>
          )}
          {currentUserObject.userRoleId === 2 && (
            <>
              <Route
                path="/maintaince"
                element={<Maintaince></Maintaince>}
              ></Route>
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
