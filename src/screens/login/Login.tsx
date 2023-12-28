import { useState } from "react";
import SignIn from "../../containers/signIn/SignIn";
import SignUp from "../../containers/signUp/SignUp";
import { Col, Container, Row } from "reactstrap";
import "./Login.scss";

const Login = (): JSX.Element => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const isSignInVisible = (): void => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Container fluid className="loginContainer">
        <Row>
          {isSignIn ? (
            <SignIn signIn={isSignInVisible}></SignIn>
          ) : (
            <SignUp signIn={isSignInVisible}></SignUp>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Login;
