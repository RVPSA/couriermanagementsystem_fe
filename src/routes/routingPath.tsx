import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
} from "react-router-dom";
import AddAdmin from "../screens/addAdmin/AddAdmin";
import Maintaince from "../screens/maintaince/Maintaince";

type MainRoutePath = {
  AdminRouting: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[];
  CompanyRouting: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[];
  RiderRouting: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[];
  CustomerRouting: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[];
};

//Element importing
const MaintaincePage: JSX.Element = <Maintaince></Maintaince>;
// const Login = import("../screens/login/Login");
// const AddCourierCompany = import('../screens/addCourierCompany/AddCourierComForm')
const AddAdminPage: JSX.Element = <AddAdmin></AddAdmin>;

//Main Routing path
export const RoutePath: MainRoutePath = {
  AdminRouting: [
    { path: "/maintaince", element: MaintaincePage },
    { path: "/addAdmin", element: AddAdminPage },
  ],
  CompanyRouting: [],
  RiderRouting: [],
  CustomerRouting: [],
};

//Details for admin Login DropDown
export const AdminDropDownDetails: NavDropDownType[] = [
  { to: "/addAdmin", name: "Admin" },
  { to: "/addCurierCompany", name: "Courier" },
];

//Details for Corier company Login DropDown
export const CourierCompanyDropDownDetails: NavDropDownType[] = [
  { to: "/", name: "" },
];
