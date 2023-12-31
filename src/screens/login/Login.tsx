import { useEffect, useState } from "react";
import SignIn from "../../containers/signIn/SignIn";
import SignUp from "../../containers/signUp/SignUp";
import { Col, Container, Row } from "reactstrap";
import "./Login.scss";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store";
import Loading from "../../components/loading/Loading";
import CModal from "../../components/modal/CModal";

const Login = (): JSX.Element => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const isSignInVisible = (): void => {
    setIsSignIn(!isSignIn);
  };

  const { isUserSignIn, isSignInUserFail, error } = useAppSelector(
    (state) => state.loginreducer
  );

  useEffect(() => {}, [isModalOpen]);

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
        {isUserSignIn && <Loading></Loading>}
      </Container>
      {isSignInUserFail && (
        <CModal
          modalHeader="Login Error"
          modalBody={error}
          color="danger"
          isopen={isModalOpen}
          toggle={modalToggle}
        ></CModal>
      )}
    </>
  );
};

export default Login;
