import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../containers/navBar/NavigationBar";

const DefaultLayout = () => {
  let currentUser: string | null = localStorage.getItem("currentUser");

  let currentUserObject: currentUserType = {
    userName: "",
    userId: 0,
    userRoleId: 0,
  };

  if (typeof currentUser === "string") {
    currentUserObject = JSON.parse(currentUser);
  }

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div>
        {currentUserObject.userRoleId != 0 ? (
          <Outlet></Outlet>
        ) : (
          <Navigate to="/"></Navigate>
        )}
      </div>
    </div>
  );
};

export default DefaultLayout;
