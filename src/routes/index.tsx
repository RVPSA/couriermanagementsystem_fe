import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/login/Login";
import DefaultLayout from "./DefaultLayout";
import Maintaince from "../screens/maintaince/Maintaince";
import { RoutePath } from "./routingPath";

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
          {currentUserObject.userRoleId === 1 &&
            RoutePath.AdminRouting.map((item) => {
              return (
                <>
                  <Route path={item.path} element={item.element}></Route>
                </>
              );
            })}
          {/* Courier Company */}
          {currentUserObject.userRoleId === 2 &&
            RoutePath.CompanyRouting.map((item) => {
              return (
                <>
                  <Route path={item.path} element={item.element}></Route>
                </>
              );
            })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
