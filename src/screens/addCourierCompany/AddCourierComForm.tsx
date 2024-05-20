import { Col, Container, Row } from "reactstrap";
import "./AddCourierComForm.scss";
import AddCompanyForm from "../../containers/form/courierCompanyForm/AddCompanyForm";
import { useState } from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store";

const AddCourierCom = (): JSX.Element => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  const modalToggle = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container className="addCompanyContainer" fluid>
        <Col xs="12">
          <Row>
            <AddCompanyForm></AddCompanyForm>
          </Row>
        </Col>
      </Container>
    </>
  );
};

export default AddCourierCom;
