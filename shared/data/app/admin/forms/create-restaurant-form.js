import React, { useState } from "react";
import Select from "react-select";
import {
  Col,
  Form,
  FormGroup,
  InputGroup,
  Row,
  Table,
  Card,
} from "react-bootstrap";
import { Country, State, City } from "country-state-city";

//Basic start
const Wizard = ({ step: currentIndex, ...props }) => {
  const steps = React.Children.toArray(props.children);
  const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
  const nextStep =
    currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

  return (
    <div>
      <nav className="btn-group steps basicsteps">
        {steps.map((step, index) => (
          <Button
            key={step.props.number}
            onClick={() => props.onChange(index)}
            className={getClsNavBtn(index === currentIndex)}
          >
            <span className="number me-2 ">{step.props.number}</span>
            <i>{step.props.title}</i>
          </Button>
        ))}
      </nav>

      {steps[currentIndex]}

      <div className=" p-3 d-flex justify-content-between  ">
        <Button
          visible={prevStep}
          onClick={() => props.onChange(currentIndex - 1)}
          title={prevStep.description}
        >
          Back
        </Button>
        <Button
          visible={prevStep}
          // onClick={() => props.onChange(currentIndex - 1)}
          //   title={prevStep.description}
        >
          Add Restaurant
        </Button>
        <Button
          visible={nextStep}
          onClick={() => props.onChange(currentIndex + 1)}
          title={nextStep.description}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
const Step = ({ children }) => children;

function getClsNavBtn(active) {
  return "btn" + (active ? " btn-primary" : "");
}
function Button({ visible, ...props }) {
  return (
    <button className={visible ? "btn btn-primary " : "invisible"} {...props} />
  );
}

export default class RestaurantFormWizard extends React.Component {
  state = { step: 0, country: {}, state: {}, city: {}, zipCode: 0 };

  handleStep = (step) => {
    this.setState({ step });
  };

  constructor() {
    super();
    this.processedCountries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
  }

  handleCountryChange = (selectedOption) => {
    this.setState({ country: selectedOption });
    const processedStates = State.getStatesOfCountry(selectedOption.value).map(
      (state) => ({
        value: state.isoCode,
        label: state.name,
      })
    );
    this.setState({ processedStates });
  };
  handleStateChange = (selectedOption) => {
    this.setState({ state: selectedOption });
    console.log("Cities", selectedOption, City.getCitiesOfState("KAB"));
    const cities = City.getCitiesOfCountry(this.state?.country?.value);
    const processedCities = cities
      .filter((city) => city.stateCode === selectedOption.value)
      .map((city) => ({
        value: city.stateCode,
        label: city.name,
      }));
    this.setState({ processedCities });
  };
  handleCityChange = (selectedOption) => {
    this.setState({ city: selectedOption });
  };
  handleZipChange = (selectedOption) => {
    this.setState({ zipCode: selectedOption });
  };

  render() {
    return (
      <Wizard step={this.state.step} onChange={this.handleStep}>
        <Step title="Basic Information" number="1">
          <section className="card-body Basicwizard ">
            <FormGroup className="control-group form-group">
              <Form.Label className="form-label">Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                required
                placeholder="Restaurant Name"
              />
            </FormGroup>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Email </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email Address"
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Phone Number</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                    placeholder="Phone Number"
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>

        <Step title="Location Information" number="2">
          <section className="card-body Basicwizard ">
            <Row>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Country</Form.Label>
                  <Select
                    classNamePrefix="selectform"
                    closeMenuOnSelect={true}
                    options={this.processedCountries}
                    onChange={this.handleCountryChange}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">State</Form.Label>
                  <Select
                    classNamePrefix="selectform"
                    closeMenuOnSelect={true}
                    isDisabled={!this.state.processedStates}
                    options={this.state.processedStates}
                    onChange={this.handleStateChange}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">City</Form.Label>
                  <Select
                    classNamePrefix="selectform"
                    closeMenuOnSelect={true}
                    isDisabled={!this.state.processedCities}
                    options={this.state.processedCities}
                    onChange={this.handleCityChange}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup className="control-group form-group">
                  <Form.Label className="form-label">Zip Code</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control"
                    required
                    placeholder="Zip Code"
                    onChange={this.handleZipChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </section>
        </Step>
      </Wizard>
    );
  }
}
//Basic end
