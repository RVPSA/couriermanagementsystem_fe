import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../screens/login/Login";
import DefaultLayout from "./DefaultLayout";
import Maintaince from "../screens/maintaince/Maintaince";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route element={<DefaultLayout></DefaultLayout>}>
          <Route path="/maintaince" element={<Maintaince></Maintaince>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
