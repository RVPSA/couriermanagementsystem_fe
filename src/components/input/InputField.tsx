import { FormFeedback, FormGroup, Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";
import "./InputField.scss";
import { ChangeEventHandler } from "react";

type InputFieldProps = {
  id: string;
  name: string;
  placeholder?: string;
  type: InputType;
  onchange: ChangeEventHandler;
  invalid?: boolean;
  formFeedBack?: string;
};

const InputField = (prop: InputFieldProps): JSX.Element => {
  return (
    <>
      <FormGroup>
        <Input
          id={prop.id}
          name={prop.name}
          placeholder={prop.placeholder}
          type={prop.type}
          className="inputfield"
          onChange={prop.onchange}
          invalid={prop.invalid}
        ></Input>
        <FormFeedback valid={!prop.invalid}>{prop.formFeedBack}</FormFeedback>
      </FormGroup>
    </>
  );
};
export default InputField;
