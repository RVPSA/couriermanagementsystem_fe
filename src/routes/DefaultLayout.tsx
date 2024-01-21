import { Navigate, Outlet } from "react-router-dom";
import NavigationBar from "../containers/navBar/NavigationBar";

const DefaultLayout = (): JSX.Element => {
  let currentUser: string | null = localStorage.getItem("currentUser");

  let currentUserObject: currentUserType = {
    userName: "",
    userId: 0,
    userRoleId: 0,
  };

  if (typeof currentUser === "string") {
    currentUserObject = JSON.parse(currentUser);
  }

  if (currentUserObject.userRoleId != 0) {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default DefaultLayout;
