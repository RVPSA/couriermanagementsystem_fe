import { Col, Container, Row } from "reactstrap";
import "./SignUp.scss";
import { MouseEventHandler, useState } from "react";
import CButton from "../../components/button/CButton";
import InputField from "../../components/input/InputField";

type signUpPropType = {
  signIn: MouseEventHandler;
};
type formType = {
  userName: string;
  email: string;
  password: string;
};
type errorType = {
  userName?: string;
  email?: string;
  password?: string;
};

const SignUp = (prop: signUpPropType): JSX.Element => {
  const [formValue, setFormValue] = useState<formType>({
    userName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<errorType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSignUp = (): void => {
    let error: errorType;
    error = validate(formValue);
    if (Object.keys(error).length === 0)
      console.log("Backend Request:", formValue);
    else setFormErrors(error);
  };
  const validate = (value: formType): errorType => {
    const error: errorType = {};
    if (!value.userName) {
      error.userName = "Please enter username";
    }
    if (!value.email) {
      error.email = "Please enter email";
    }
    if (!value.password) {
      error.password = "Please enter password";
    }
    return error;
  };

  return (
    <>
      <Container className="signUpContainer" fluid>
        <Row>
          <Col xs="4" className="signUpDesc">
            <Row>
              <h3>Welcome Back.!</h3>
            </Row>
            <Row className="colgap">Enter your personal details to Sign in</Row>
            <Row className="colgap">
              <CButton
                caption="SignIn"
                color="primary"
                outline={true}
                onclick={prop.signIn}
              ></CButton>
            </Row>
          </Col>

          <Col xs="8" className="signUp">
            <Row>
              <Col xs="2"></Col>
              <Col xs="8">
                <h2>Create Account</h2>
              </Col>
              <Col xs="2"></Col>
            </Row>
            <Row>
              <Col xs="2"></Col>
              <Col xs="8" className="colgap">
                <h6>Enter your Username, Email & Password</h6>
              </Col>
              <Col xs="2"></Col>
            </Row>
            <Row className="colgap">
              <InputField
                id="username"
                name="userName"
                placeholder="Username"
                type="text"
                onchange={handleChange}
                invalid={formErrors.userName ? true : false}
                formFeedBack={formErrors.userName ? formErrors.userName : ""}
              ></InputField>
            </Row>
            <Row className="colgap">
              <InputField
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onchange={handleChange}
                invalid={formErrors.email ? true : false}
                formFeedBack={formErrors.email ? formErrors.email : ""}
              ></InputField>
            </Row>
            <Row className="colgap">
              <InputField
                id="password"
                name="password"
                placeholder="Password"
                type="text"
                onchange={handleChange}
                invalid={formErrors.password ? true : false}
                formFeedBack={formErrors.password ? formErrors.password : ""}
              ></InputField>
            </Row>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6" className="colgap">
                <CButton
                  caption="SignUp"
                  color="primary"
                  onclick={handleSignUp}
                ></CButton>
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
