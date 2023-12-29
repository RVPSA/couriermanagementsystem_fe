import { Col, Container, Row } from "reactstrap";
import "./SignIn.scss";
import InputField from "../../components/input/InputField";
import CButton from "../../components/button/CButton";
import { MouseEventHandler, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { userSignIn } from "../../store/actions";
import { AppDispatch, RootState } from "../../store";

type loginDetailstype = {
  userName: string;
  password: string;
};
type errorType = {
  username?: string;
  password?: string;
};
type signInPropType = {
  signIn: MouseEventHandler;
};

const SignIn = (prop: signInPropType): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const [loginDetails, setLoginDetails] = useState<loginDetailstype>({
    userName: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<errorType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleSignIn = (): void => {
    let errors: errorType;
    errors = validate(loginDetails);
    if (Object.keys(errors).length === 0) {
      console.log("Backend request:", loginDetails);
      dispatch(userSignIn(loginDetails));
    } else {
      console.log(errors);
      setFormErrors(errors);
    }
  };

  const {
    isUserSignIn,
    isSignInUserFail,
    isSignInUserSuccess,
    userDetails,
    error,
  } = useAppSelector((state) => state.loginreducer);
  console.log(
    ";;;;",
    isUserSignIn,
    isSignInUserFail,
    isSignInUserSuccess,
    userDetails,
    error
  );

  const validate = (value: loginDetailstype): errorType => {
    const errors: errorType = {};
    if (!value.userName) errors.username = "Please enter Username";
    if (!value.password) errors.password = "Please enter Password";
    return errors;
  };

  return (
    <>
      <Container className="signInContainer" fluid>
        <Row>
          <Col xs="8" className="signIn">
            <Row>
              <Col xs="3"></Col>
              <Col xs="6">
                <h2>Sign In</h2>
              </Col>
              <Col xs="3"></Col>
            </Row>
            <Row>
              <Col xs="2"></Col>
              <Col xs="8" className="colgap">
                <h6>Enter your Username & Password</h6>
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
                invalid={formErrors.username ? true : undefined}
                formFeedBack={formErrors.username ? formErrors.username : ""}
              ></InputField>
            </Row>
            <Row className="colgap">
              <InputField
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onchange={handleChange}
                invalid={formErrors.password ? true : false}
                formFeedBack={formErrors.password ? formErrors.password : ""}
              ></InputField>
            </Row>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6" className="colgap">
                Forget your Password
              </Col>
              <Col xs="3"></Col>
            </Row>
            <Row>
              <Col xs="3"></Col>
              <Col xs="6" className="colgap">
                <CButton
                  caption="SignIn"
                  color="primary"
                  onclick={handleSignIn}
                ></CButton>
              </Col>
              <Col xs="3"></Col>
            </Row>
          </Col>
          <Col xs="4" className="signInDesc">
            <Row>
              <h3>Hello, Guys</h3>
            </Row>
            <Row className="colgap">
              If you are not registered then click Sign Up button
            </Row>
            <Row className="colgap">
              <CButton
                caption="SignUp"
                color="primary"
                outline={true}
                onclick={prop.signIn}
              ></CButton>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
