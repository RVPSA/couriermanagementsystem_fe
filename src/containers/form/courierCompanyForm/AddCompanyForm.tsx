import { Col, Container, Row } from "reactstrap";
import InputField from "../../../components/input/InputField";
import "./AddCompanyForm.scss";
import CGoogleMap from "../../../components/googleMap/GoogleMap";
import DropDownField from "../../../components/dropDown/DropDownField";
import CButton from "../../../components/button/CButton";
import React, { useEffect, useState } from "react";

type companyDetail = {
  companyName: string;
  registeredNumber: string;
  province: string;
  streetNumber: string;
  streetName: string;
  city: string;
  contactNumber: string;
  email: string;
  lat: number;
  lan: number;
};

type companyDetailErrorType = {
  companyName?: string;
  registeredNumber?: string;
  province?: string;
  streetNumber?: string;
  streetName?: string;
  city?: string;
  contactNumber?: string;
  email?: string;
  lat?: number;
  lan?: number;
};

type customLatLan = {
  lat: number;
  lng: number;
};

const AddCompanyForm = (): JSX.Element => {
  //state
  const [companyDetails, setCompanyDetails] = useState<companyDetail>({
    companyName: "",
    registeredNumber: "",
    province: "",
    streetNumber: "",
    streetName: "",
    city: "",
    contactNumber: "",
    email: "",
    lat: 0,
    lan: 0,
  });
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [newCoordinate, setNewCoordinates] = useState<customLatLan>({
    lat: 0,
    lng: 0,
  });
  const [errors, setErrors] = useState<companyDetailErrorType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "city") {
      setLat(7.0668);
      setLng(79.9041);
    }
    setCompanyDetails({ ...companyDetails, [name]: value });
  };

  //As a callback for after setting lat & lng (According to new selected city)
  useEffect(() => {
    setNewCoordinates({
      lat: lat,
      lng: lng,
    });
    setCompanyDetails({ ...companyDetails, lat: lat, lan: lng });
  }, [lat, lng]);

  const addCompany = (): void => {
    let error: companyDetailErrorType = validate(companyDetails);

    if (Object.keys(error).length == 0) {
      console.log("Add company::", companyDetails);
    } else {
      setErrors(error);
    }
  };

  const validate = (data: companyDetail): companyDetailErrorType => {
    let error: companyDetailErrorType = {};
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!data.companyName) {
      error.companyName = "Please enter Company Name";
    }

    if (!data.registeredNumber) {
      error.registeredNumber = "Please enter Register Number";
    }

    if (!data.province) {
      error.province = "Please select province";
    }

    if (!data.streetNumber) {
      error.streetNumber = "Please enter street number";
    }

    if (!data.streetName) {
      error.streetName = "Please enter street name";
    }

    if (!data.city) {
      error.city = "Please select city";
    }

    if (!data.contactNumber) {
      error.contactNumber = "Please enter contact number";
    } else if (data.contactNumber.toString().length < 10) {
      error.contactNumber = "Not a contact number";
    }

    if (!data.email) {
      error.email = "Please enter an email";
    } else if (!regex.test(data.email)) {
      error.email = "E-mail is not in correct format";
    }

    return error;
  };

  //Get custome co-ordinates after the movement of marker
  const onDragEnd = (e: google.maps.MapMouseEvent) => {
    let lattitude = e.latLng ? e.latLng?.lat().toString() : lat.toString();
    let longitude = e.latLng ? e.latLng?.lng().toString() : lng.toString();
    console.log(e.latLng);
    setLat(parseFloat(lattitude));
    setLng(parseFloat(longitude));
    // setCompanyDetails({ ...companyDetails, lat: lat, lan: lng });
  };

  return (
    <>
      <Container fluid className="addCourierCompanyMainContainer">
        <Row>
          <Col xs="2"></Col>
          <Col xs="8" className="mainColumnAddCourierService">
            <Row>
              <Col xs="6">
                <Row>
                  <InputField
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Name of the Comapny"
                    onchange={handleChange}
                    invalid={errors.companyName ? true : undefined}
                    formFeedBack={errors.companyName ? errors.companyName : ""}
                  ></InputField>
                </Row>
                <Row>
                  <InputField
                    id="registeredNumber"
                    name="registeredNumber"
                    type="text"
                    placeholder="registeredNumber"
                    onchange={handleChange}
                    invalid={errors.registeredNumber ? true : undefined}
                    formFeedBack={
                      errors.registeredNumber ? errors.registeredNumber : ""
                    }
                  ></InputField>
                </Row>
                <Row>
                  <DropDownField
                    data={[{ name: "southern", value: 1 }]}
                    placeholder="Address : Province"
                    listName="province"
                    onInput={handleChange}
                    // invalid={errors.companyName ? true : undefined}
                    // formFeedBack={errors.companyName ? errors.companyName : ""}
                  ></DropDownField>
                </Row>
                <Row>
                  <InputField
                    id="streetNumber"
                    name="streetNumber"
                    type="text"
                    placeholder="Address : Street Number"
                    onchange={handleChange}
                    invalid={errors.streetNumber ? true : undefined}
                    formFeedBack={
                      errors.streetNumber ? errors.streetNumber : ""
                    }
                  ></InputField>
                </Row>
                <Row>
                  <InputField
                    id="streetName"
                    name="streetName"
                    type="text"
                    placeholder="Address : Street Name"
                    onchange={handleChange}
                    invalid={errors.streetName ? true : undefined}
                    formFeedBack={errors.streetName ? errors.streetName : ""}
                  ></InputField>
                </Row>
                <Row>
                  <DropDownField
                    data={[{ name: "Tissamahrama", value: 1 }]}
                    placeholder="Address : City"
                    listName="city"
                    onInput={handleChange}
                    // invalid={errors.city ? true : undefined}
                    // formFeedBack={errors.city ? errors.city : ""}
                  ></DropDownField>
                </Row>
                <Row>
                  <InputField
                    id="contactNumber"
                    name="contactNumber"
                    type="text"
                    placeholder="0341234567"
                    onchange={handleChange}
                    invalid={errors.contactNumber ? true : undefined}
                    formFeedBack={
                      errors.contactNumber ? errors.contactNumber : ""
                    }
                  ></InputField>
                </Row>
                <Row>
                  <InputField
                    id="email"
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    onchange={handleChange}
                    invalid={errors.email ? true : undefined}
                    formFeedBack={errors.email ? errors.email : ""}
                  ></InputField>
                </Row>
              </Col>
              <Col xs="6" className="googleMapCol">
                <Row className="googleMapRow">
                  <CGoogleMap
                    coordinate={newCoordinate}
                    ondragEnd={onDragEnd}
                  ></CGoogleMap>
                </Row>
              </Col>
            </Row>
            <Row>
              <CButton
                caption="Add Company"
                color="primary"
                onclick={addCompany}
              ></CButton>
            </Row>
          </Col>
          <Col xs="2"></Col>
        </Row>
      </Container>
    </>
  );
};

export default AddCompanyForm;
