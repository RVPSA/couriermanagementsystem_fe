import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  Row,
} from "reactstrap";
import "./NavigationBar.scss";
import { Link, Navigate, redirect } from "react-router-dom";

const NavigationBar = (): JSX.Element => {
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
    <>
      <Container fluid className="navContainer">
        <Row className="navRow">
          <Col xs="4" className="navBrand">
            Courier Management System
          </Col>
          <Col xs="8" className="navItem">
            {/* Admin */}
            {currentUserObject.userRoleId === 1 && (
              <>
                <Col>Link 1</Col>
                <Col>Link 2</Col>
                <Col>Link 3</Col>
              </>
            )}
            {/*  */}
            {currentUserObject.userRoleId === 2 && (
              <>
                <Col>Link 1</Col>
                <Col>Link 2</Col>
              </>
            )}
            <Col>
              <Button
                onClick={() => {
                  localStorage.removeItem("currentUser");
                  window.location.replace(
                    import.meta.env.VITE_DEVELOPMENT_THIS_URL
                  );
                }}
              >
                Log out
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavigationBar;
