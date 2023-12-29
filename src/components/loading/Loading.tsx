import { Container, Row, Spinner } from "reactstrap";
import "./Loading.scss";

const Loading = (): JSX.Element => {
  return (
    <>
      <Container fluid className="ladingcontainer">
        <Row className="spinnerrow">
          <Spinner color="primary" type="grow"></Spinner>
          <Spinner color="secondary" type="grow"></Spinner>
          <Spinner color="success" type="grow"></Spinner>
          <Spinner color="info" type="grow"></Spinner>
        </Row>
      </Container>
    </>
  );
};
export default Loading;
