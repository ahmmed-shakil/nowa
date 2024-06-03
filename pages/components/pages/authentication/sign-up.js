import React, { useState } from "react";
import Link from "next/link";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
// import * as Switcherdatacustam from "../../../../shared/data/switcher/Switcherdatacustam";
import Seo from "@/shared/layout-components/seo/seo";
import { City, Country, State } from "country-state-city";
import { getCitiesByState } from "country-state-city";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event) => {
    const countryIsoCode = event.target.value;
    setSelectedCountry(countryIsoCode);
    setSelectedState("");
    setSelectedCity("");
    setCities([]);
  };

  const handleStateChange = (event) => {
    const stateIsoCode = event.target.value;
    setSelectedState(stateIsoCode);
    setSelectedCity("");
    const allCitites = City.getCitiesOfCountry(selectedCountry);

    const selectedCities = allCitites.filter(
      (city) => city.stateCode === stateIsoCode
    );

    // const selectedCities = City.getCitiesOfState(selectedState);
    setCities(selectedCities);
  };

  // useEffect(() => {
  //   // Fetch cities based on the selected state
  //   if (selectedState) {
  //     const fetchedCities = getCitiesByState(selectedState);
  //     setCities(fetchedCities);
  //   }
  // }, [selectedState]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setFormData({ ...formData, userImage: file });
  // };

  return (
    <div>
      <Seo title={"Sign-Up"} />
      <div className="square-box">
        {" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>
      <div className="page">
        <Row>
          <div className="d-flex"></div>
        </Row>
        <div
          className="page-single"
          // onClick={() => Switcherdatacustam.Swichermainrightremove()}
        >
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main py-4 justify-content-center mx-auto"
              >
                <div className="card-sigin ">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
                        <Link href={`/components/dashboards/dashboard1/`}>
                          <img
                            src={"../../../../assets/img/brand/favicon.png"}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          {step === 1 && (
                            <>
                              <h2 className="text-dark">Step 1</h2>
                              <h6 className="font-weight-normal mb-4">
                                Enter your personal information
                              </h6>

                              <Form action="#">
                                <FormGroup className="form-group">
                                  <Form.Label>First Name</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    // onChange={handleChange}
                                    placeholder="Enter your first name"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Last Name</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    // value={formData.lastName}
                                    // onChange={handleChange}
                                    placeholder="Enter your last name"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Username</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    // value={formData.username}
                                    // onChange={handleChange}
                                    placeholder="Enter your username"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Email Address</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="email"
                                    name="emailAddress"
                                    // value={formData.emailAddress}
                                    // onChange={handleChange}
                                    placeholder="Enter your email address"
                                  />
                                </FormGroup>

                                <FormGroup className="form-group">
                                  <Form.Label>Password</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    // value={formData.password}
                                    // onChange={handleChange}
                                    placeholder="Enter your password"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Confirm Password</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    // value={formData.password}
                                    // onChange={handleChange}
                                    placeholder="Enter your password"
                                  />
                                </FormGroup>

                                <Button
                                  variant=""
                                  className="btn btn-primary btn-block"
                                  onClick={handleNext}
                                >
                                  Next
                                </Button>
                              </Form>
                            </>
                          )}

                          {step === 2 && (
                            <>
                              <h2 className="text-dark">Step 2</h2>
                              <h6 className="font-weight-normal mb-4">
                                Enter your address and other information
                              </h6>
                              <Form onSubmit={handleSubmit}>
                                <FormGroup className="form-group">
                                  <Form.Label>Phone Number</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="phoneNumber"
                                    // value={formData.phoneNumber}
                                    // onChange={handleChange}
                                    placeholder="Enter your phone number"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Address Line 1</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="addressLine1"
                                    // value={formData.addressLine1}
                                    // onChange={handleChange}
                                    placeholder="Enter address line 1"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Address Line 2</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="addressLine2"
                                    // value={formData.addressLine2}
                                    // onChange={handleChange}
                                    placeholder="Enter address line 2"
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Country</Form.Label>
                                  <Form.Control
                                    as="select"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                  >
                                    <option value="">Select Country</option>
                                    {Country.getAllCountries().map(
                                      (country) => (
                                        <option
                                          key={country.isoCode}
                                          value={country.isoCode}
                                        >
                                          {country.name}
                                        </option>
                                      )
                                    )}
                                  </Form.Control>
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>State</Form.Label>
                                  <Form.Control
                                    as="select"
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    disabled={!selectedCountry}
                                  >
                                    <option value="">Select State</option>
                                    {State.getStatesOfCountry(
                                      selectedCountry
                                    ).map((state) => (
                                      <option
                                        key={state.isoCode}
                                        value={state.isoCode}
                                      >
                                        {state.name}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>City</Form.Label>
                                  <Form.Control
                                    as="select"
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    disabled={!selectedState}
                                  >
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                      <option key={city.id} value={city.id}>
                                        {city.name}
                                      </option>
                                    ))}
                                  </Form.Control>
                                </FormGroup>

                                <FormGroup className="form-group">
                                  <Form.Label>Zip Code</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="zipcode"
                                    // value={formData.zipcode}
                                    // onChange={handleChange}
                                    placeholder="Enter your zip code"
                                  />
                                </FormGroup>

                                {step === 2 && (
                                  <div className="text-center mt-3">
                                    <Button
                                      variant=""
                                      className="btn btn-link"
                                      onClick={handlePrev}
                                    >
                                      Previous
                                    </Button>
                                  </div>
                                )}

                                <Button
                                  variant=""
                                  className="btn btn-primary btn-block"
                                  onClick={handleNext}
                                >
                                  Next
                                </Button>
                              </Form>
                            </>
                          )}
                          {step === 3 && (
                            <>
                              <h2 className="text-dark">Step 3</h2>
                              <h6 className="font-weight-normal mb-4">
                                Other information
                              </h6>
                              <Form onSubmit={handleSubmit}>
                                <FormGroup className="form-group">
                                  <Form.Label>Gender</Form.Label>{" "}
                                  <div>
                                    <Form.Check
                                      inline
                                      type="radio"
                                      label="Male"
                                      name="gender"
                                      id="male"
                                      value="male"
                                      // onChange={handleChange}
                                    />
                                    <Form.Check
                                      inline
                                      type="radio"
                                      label="Female"
                                      name="gender"
                                      id="female"
                                      value="female"
                                      // onChange={handleChange}
                                    />
                                    <Form.Check
                                      inline
                                      type="radio"
                                      label="Other"
                                      name="gender"
                                      id="other"
                                      value="other"
                                      // onChange={handleChange}
                                    />
                                  </div>
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Date of Birth</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="date"
                                    name="dateOfBirth"
                                    // value={formData.dateOfBirth}
                                    // onChange={handleChange}
                                  />
                                </FormGroup>
                                <FormGroup className="form-group">
                                  <Form.Label>Admin Type Name</Form.Label>{" "}
                                  <Form.Control
                                    className="form-control"
                                    type="text"
                                    name="adminTypeName"
                                    // value={formData.adminTypeName}
                                    // onChange={handleChange}
                                    placeholder="Enter admin type name"
                                  />
                                </FormGroup>

                                <FormGroup className="form-group">
                                  <Form.Label>User Image</Form.Label>{" "}
                                  {image && (
                                    <div
                                      style={{
                                        marginBottom: "10px",
                                        textAlign: "left",
                                      }}
                                    >
                                      <img
                                        src={image}
                                        alt="Selected"
                                        style={{
                                          maxWidth: "100px",
                                          border: "1px solid black",
                                        }}
                                      />
                                    </div>
                                  )}
                                  <Form.Control
                                    className="form-control"
                                    type="file"
                                    name="userImage"
                                    onChange={handleFileChange}
                                  />
                                </FormGroup>

                                {step === 3 && (
                                  <div className="text-center mt-3">
                                    <Button
                                      variant=""
                                      className="btn btn-link"
                                      onClick={handlePrev}
                                    >
                                      Previous
                                    </Button>
                                  </div>
                                )}
                                <Button
                                  variant=""
                                  className="btn btn-primary btn-block"
                                  onClick={handleSubmit}
                                >
                                  <Link href={`/`}>Create Account</Link>
                                </Button>
                              </Form>
                            </>
                          )}

                          <div className="mt-4 d-flex text-center justify-content-center">
                            <Link
                              href="https://www.facebook.com/"
                              target="_blank"
                              className="btn btn-icon btn-facebook me-3"
                              type="button"
                            >
                              <span className="btn-inner--icon">
                                {" "}
                                <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                              </span>
                            </Link>
                            <Link
                              href="https://www.twitter.com/"
                              target="_blank"
                              className="btn btn-icon me-3"
                              type="button"
                            >
                              <span className="btn-inner--icon">
                                {" "}
                                <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                              </span>
                            </Link>
                            <Link
                              href="https://www.linkedin.com/"
                              target="_blank"
                              className="btn btn-icon me-3"
                              type="button"
                            >
                              <span className="btn-inner--icon">
                                {" "}
                                <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                              </span>
                            </Link>
                            <Link
                              href="https://www.instagram.com/"
                              target="_blank"
                              className="btn  btn-icon me-3"
                              type="button"
                            >
                              <span className="btn-inner--icon">
                                {" "}
                                <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                              </span>
                            </Link>
                          </div>
                          {/* </Form> */}
                          <div className="main-signup-footer mt-3 text-center">
                            <p>
                              Already have an account?{" "}
                              <Link
                                href={`/components/pages/authentication/sign-in/`}
                              >
                                Sign In
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
SignUp.propTypes = {};

SignUp.defaultProps = {};

SignUp.layout = "Authenticationlayout";

export default SignUp;
