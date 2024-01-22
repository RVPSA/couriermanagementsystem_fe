import { TypedUseSelectorHook, useSelector } from "react-redux";
import AddAdminForm from "../../containers/form/adminForm/AddAdmin";
import { RootState } from "../../store";
import Loading from "../../components/loading/Loading";
import CModal from "../../components/modal/CModal";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./AddAdmin.scss";

const AddAdmin = (): JSX.Element => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  //get data from store
  const { isAddAdmin, isAddAdminSuccess, isAddAdminFail, addAdminError } =
    useAppSelector((state) => state.userReducer);

  console.log(isAddAdmin, isAddAdminSuccess, isAddAdminFail, addAdminError);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {}, [isModalOpen]);

  return (
    <>
      <Container className="addAdminContainer" fluid>
        <Col xs="12">
          <Row>
            <AddAdminForm></AddAdminForm>
            {isAddAdmin && <Loading></Loading>}
          </Row>
        </Col>
      </Container>
      {isAddAdminFail && (
        <CModal
          modalHeader="Admin Adding Fail"
          modalBody={addAdminError}
          color="danger"
          isopen={isModalOpen}
          toggle={modalToggle}
        ></CModal>
      )}
      {isAddAdminSuccess && (
        <CModal
          modalHeader="Admin Adding Success"
          modalBody=""
          color="happy"
          isopen={isModalOpen}
          toggle={modalToggle}
        ></CModal>
      )}
    </>
  );
};

export default AddAdmin;
