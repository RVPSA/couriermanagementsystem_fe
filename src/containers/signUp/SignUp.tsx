import { Col, Container, Row } from "reactstrap";
import "./SignUp.scss";
import { MouseEventHandler, useState } from "react";
import CButton from "../../components/button/CButton";
import InputField from "../../components/input/InputField";

type signUpPropType = {
  signIn: MouseEventHandler;
};
/**
 * The above type defines a formType with properties for userName, email, and password, all of type
 * string.
 * @property {string} userName - The `userName` property in the `formType` type represents a string
 * value that typically stores the username entered by a user in a form.
 * @property {string} email - The `email` property in the `formType` type represents the email address
 * input field in a form. It is expected to be a string value.
 * @property {string} password - The `password` property in the `formType` type represents a field
 * where users can input their password. It is expected to be a string data type.
 */
type formType = {
  userName: string;
  email: string;
  password: string;
};
/**
 * The type `errorType` in TypeScript React defines optional error messages for user name, email, and
 * password fields.
 * @property {string} userName - A string representing the user's username. It is optional, denoted by
 * the "?" symbol.
 * @property {string} email - The `errorType` type defines three optional properties: `userName`,
 * `email`, and `password`. In this case, the `email` property is a string type.
 * @property {string} password - The `password` property in the `errorType` type represents a string
 * that typically stores a user's password.
 */
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

  /**
   * The handleChange function in TypeScript React updates the form value based on the input field
   * changes.
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  /**
   * The `handleSignUp` function validates a form, logs a backend request if there are no errors, and
   * sets form errors if validation fails.
   */
  const handleSignUp = (): void => {
    let error: errorType;
    error = validate(formValue);
    if (Object.keys(error).length === 0)
      console.log("Backend Request:", formValue);
    else setFormErrors(error);
  };

  /**
   * The function `validate` in TypeScript React checks if the form fields for username, email, and
   * password are filled and returns an error object if any field is empty.
   * @param {formType} value - The `value` parameter in the `validate` function seems to be of type
   * `formType`, which likely contains fields such as `userName`, `email`, and `password`. The function
   * checks if these fields are empty and returns an object `error` containing error messages for each
   * field that is empty
   * @returns An object containing error messages for any missing values in the form fields (username,
   * email, password) is being returned.
   */
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

  /* The `return` statement in the code snippet you provided is rendering JSX elements to display a
  sign-up form in a React component. Here's a breakdown of what each part of the JSX code is doing: */
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
