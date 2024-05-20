import React, { useEffect, useState } from "react";
import InputField from "../../../components/input/InputField";
import CButton from "../../../components/button/CButton";
import { Col, Container, Row } from "reactstrap";
import "./AddAdmin.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addAdmin } from "../../../store/actions";

type addAdminDetails = {
  userName: string;
  password: string;
  email: string;
};
type addAdminDetailsErrorType = {
  userName?: string;
  password?: string;
  email?: string;
};

const AddAdminForm = (): JSX.Element => {
  //State
  const [adminDetails, setAdminDetails] = useState<addAdminDetails>({
    userName: "",
    password: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<addAdminDetailsErrorType>({});

  //Function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdminDetails({ ...adminDetails, [name]: value });
    console.log("Admin Details:::", adminDetails);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleAddAdmin = (): void => {
    let errors: addAdminDetailsErrorType = validate(adminDetails);
    if (Object.keys(errors).length == 0) {
      //Make backend request
      console.log(adminDetails);
      dispatch(addAdmin(adminDetails));
    } else {
      //give errors
      setFormErrors(errors);
    }
  };

  const validate = (value: addAdminDetails): addAdminDetailsErrorType => {
    let error: addAdminDetailsErrorType = {};
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!value.userName) {
      error.userName = "Please Enter User Name";
    } else if (value.userName.length > 20)
      error.userName = "Length should be less than 20 charactors";

    if (!value.password) {
      error.password = "Please Enter password";
    }

    if (!value.email) {
      error.email = "Please Enter E-mail";
    } else if (!regex.test(value.email))
      error.email = "E-mail is not in correct format";
    return error;
  };

  //useEffect
  // useEffect(()=>{},[])

  return (
    <>
      <Container className="addAdminMainContainer" fluid>
        <Col xs="2"></Col>
        <Col xs="8" className="mainColumn">
          <fieldset>
            <legend>Add Admin:</legend>
            <Row xs="8">
              <InputField
                id="userName"
                name="userName"
                placeholder="User Name"
                type="text"
                onchange={handleChange}
                invalid={formErrors.userName ? true : undefined}
                formFeedBack={formErrors.userName ? formErrors.userName : ""}
              ></InputField>
            </Row>
            <Row xs="12">
              <InputField
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onchange={handleChange}
                invalid={formErrors.password ? true : undefined}
                formFeedBack={formErrors.password ? formErrors.password : ""}
              ></InputField>
            </Row>
            <Row xs="12">
              <InputField
                id="email"
                name="email"
                placeholder="E-mail"
                type="email"
                onchange={handleChange}
                invalid={formErrors.email ? true : undefined}
                formFeedBack={formErrors.email ? formErrors.email : ""}
              ></InputField>
            </Row>
            <Row>
              <CButton
                caption="Add Admin"
                color="primary"
                onclick={handleAddAdmin}
              ></CButton>
            </Row>
          </fieldset>
        </Col>
        <Col xs="2"></Col>
      </Container>
    </>
  );
};

export default AddAdminForm;
